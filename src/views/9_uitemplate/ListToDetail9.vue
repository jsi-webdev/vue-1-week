<template>
  <div>
    <input v-model="customer" placeholder="고객명" @keyup.enter="doSearch" />
    <button @click="doSearch">조회</button>
    <button @click="doCreate">생성</button>
    <SimpleGrid2 :headers="headers" :items="items" :keyItem="keyItem" />
  </div>
</template>
<script>
import SimpleGrid2 from '@/components/fragments/SimpleGrid2'
export default {
  name: '',
  components: { SimpleGrid2 },
  data() {
    return {
      customer: '',
      headers: [
        { title: '고객명', key: 'name' },
        { title: '회사명', key: 'company' },
        { title: '성별', key: 'gender' },
        { title: '이메일', key: 'email' },
        { title: '연락처', key: 'phone' },
        { title: '주소', key: 'address' }
      ],
      keyItem: 'name',
      items: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async doSearch() {
      if (this.customer) {
        this.items = await this.$get(`/users?name_like=${this.customer}`)
      } else {
        this.items = await this.$get('/users')
      }
    }
  }
}
</script>
