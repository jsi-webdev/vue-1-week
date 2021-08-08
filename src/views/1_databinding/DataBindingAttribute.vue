<template>
  <div>
    <!-- <img :src="imgSrc" alt="vue logo" />
    <img src="@/assets/logo.png" alt="vue logo" /> -->
    <input type="text" v-model="txt" />
    <!-- 저장이 1번만 가능하도록 누르는 즉시 disabled 로 해줄 수 있다 -->
    <button :disabled="txt == ''">저장</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      imgSrc: 'https://v3.vuejs.org/logo.png',
      txt: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
