<template>
  <div>
    <!-- <select value="064"> -->
    <select v-model="city">
      <option value="02">서울</option>
      <option value="051">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      city: '064'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
