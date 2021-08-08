<template>
  <div>
    <input type="text" @keyup="doSearch" />
    <button @click="doSearch">조회</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log('조회 함수를 호출 했습니다.')
    }
  }
}
</script>