<template>
  <div>
    <input type="text" v-model.number="numberModel" />
    <h1>{{ numberModel }}</h1>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      valueModel: 'South Korea',
      numberModel: 3
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
