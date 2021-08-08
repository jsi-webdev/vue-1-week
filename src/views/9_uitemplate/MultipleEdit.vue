<template>
  <div>
    <SearchContainer
      @set-pagelimit="setPagelimit"
      @search="doSearch"
      @save="doSave"
      @delete="doDelete"
    />
    <div class="table-container">
      <DataGrid
        :headers="headers"
        :items="items"
        selectType="checkbox"
        checkedKey="id"
        :editable="true"
        @change-item="checkedItem"
      />
    </div>
    <hr />
    <div class="table-container">
      <DataGrid
        :headers="headers"
        :items="checkedList"
        selectType="checkbox"
        checkedKey="id"
        :editable="true"
        @change-item="checkedItem2(id)"
      />
    </div>
  </div>
</template>
<script>
import SearchContainer from '@/components/fragments/SearchContainer.vue'
import DataGrid from '@/components/fragments/DataGrid.vue'

export default {
  name: '',
  components: { SearchContainer, DataGrid },
  data() {
    return {
      pageLimit: '',
      searchItemName: '',
      headers: [
        {
          title: '고객명',
          key: 'name',
          type: 'text'
        },
        {
          title: '회사명',
          key: 'company',
          type: 'text'
        },
        {
          title: '성별',
          key: 'gender',
          type: 'select',
          options: [
            { v: 'male', t: '남' },
            { v: 'female', t: '여' }
          ]
        },
        {
          title: '나이',
          key: 'age',
          type: 'number'
        },
        { title: '이메일', key: 'email', type: 'text' },
        { title: '연락처', key: 'phone', type: 'text' },
        { title: '주소', key: 'address', type: 'text' }
      ],
      items: [],
      checked: [],
      checkedList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    checkedItem(data) {
      this.checked = data

      this.checkedList = []
      for (const id of this.checked) {
        this.checkedList.push(this.items.filter((item) => item.id === id)[0])
      }
    },
    checkedItem2(id) {
      let changedItem = []
      this.checkedList.forEach((item, index) => {
        if (item.id === id) {
          changedItem = this.checkedList[index]
        }
      })

      console.log(changedItem)
      this.items.forEach((item, index) => {
        if (item.id === id) {
          this.items[index] = changedItem
        }
      })
    },
    setPagelimit(v) {
      this.pageLimit = v
    },
    async doSearch() {
      if (this.searchItemName) {
        console.log('h')
        this.items = await this.$get(
          `/users?name_like=${this.searchItemName}` //&_limit=${this.pageLimit}`
        )
      } else {
        this.items = await this.$get('/users')
        // this.items = await this.$get(`/users?_limit=${this.pageLimit}`)
      }
    },
    async doSearchById(id) {
      const item = await this.$get(`/users?id=${id}`)
      return item
    },
    doSave() {
      // const checkedList = []
      if (this.checked.length === 0) {
        return alert('저장할 아이템을 선택하세요.')
      }
      this.$swal({
        title: 'Are you sure to update?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          // for (const id of this.checked) {
          //   checkedList.push(this.items.filter((item) => item.id === id)[0])
          // }
          // console.log(checkedList)
          this.checkedList.forEach(async (item) => {
            // const { id, name, company, email, phone, address } = item
            await this.$put(`/users/${item.id}`, item)
          })
          this.$swal('Updated!', 'User has been updated.', 'success')
        }
      })
    },
    doDelete() {
      if (this.checked.length === 0) {
        return alert('저장할 아이템을 선택하세요.')
      }
      console.log(this.checked)
      this.$swal({
        title: 'Are you sure to delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.checked.forEach(async (item) => {
            await this.$delete(`/users/${item}`)
          })
          this.$swal('Deleted!', 'New user has been deleted.', 'success').then(
            (result) => {
              console.log(result)
              this.checked = []
              this.doSearch()
            }
          )
        }
      })
    }
  }
}
</script>

<style scoped>
.table-container:not(:last-of-type) {
  margin-bottom: 10px;
}
.table-container:not(:first-of-type) {
  margin-top: 20px;
}
</style>
