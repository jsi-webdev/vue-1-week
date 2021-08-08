<template>
  <div>
    <h1>{{ fullName }}</h1>
    <h1>{{ firstName }} {{ lastName }}</h1>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      firstName: 'Seongil',
      lastName: 'Jeong',
      fullName: ''
    }
  },
  watch: {
    // 이미 만들어진 속성을 감시하는 것 : 함수명 = 변수명
    firstName(currentValue, oldValue) {
      console.log(oldValue + ' => ' + currentValue)
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
