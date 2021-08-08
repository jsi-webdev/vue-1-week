<template>
  <div>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      htmlString: '<p class="red bigFont" style="color:red;">Red Sentence</p>'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style lang="css" scoped>
.bigFont {
  font-size: 20px;
}
</style>
