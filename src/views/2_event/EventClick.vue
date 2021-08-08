<template>
  <div>
    <button @click="doSearch(10)">조회 (10)</button>
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
    doSearch(num) {
      alert(num + ' 조회합니다.')
    }
  }
}
</script>
