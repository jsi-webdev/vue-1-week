<template>
  <div>
    <div class="search">
      <input
        class="search__input"
        type="text"
        v-model="searchItemName"
        placeholder="고객명"
        @keyup.enter="doSearch"
      />
      <div class="search__btn">
        <select v-model="pageLimit" @change="setPagelimit">
          <option v-for="limit in pageLimitList" :key="limit" :value="limit">
            {{ limit }}
          </option>
        </select>
        <button class="btn" @click="doSearch">조회</button>
        <button class="btn" @click="doSave">저장</button>
        <button class="btn" @click="doDelete">삭제</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      pageLimit: '10',
      pageLimitList: (() => {
        return Array.from({ length: 10 }, (v, i) => i + 1)
      })()
    }
  },
  setup() {},
  created() {
    this.setPagelimit()
  },
  mounted() {},
  unmounted() {},
  methods: {
    setPagelimit() {
      this.$emit('setPagelimit', this.pageLimit)
    },
    doSearch() {
      this.$emit('search')
    },
    doSave() {
      this.$emit('save')
    },
    doDelete() {
      this.$emit('delete')
    }
  }
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.search {
  height: 32px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.search > *:not(:last-child) {
  margin-right: 30px;
}
select {
  width: 60px;
  height: 24px;
  border: 1px solid;
}
.btn {
  padding: 3px;
  border-radius: 3px;
  border: 1px solid;
}
.search *:active {
  outline: none;
}
.search__input {
  width: 280px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid;
}
.search__btn > * {
  margin: 1px 5px;
}
.btn {
  width: 60px;
}
</style>
