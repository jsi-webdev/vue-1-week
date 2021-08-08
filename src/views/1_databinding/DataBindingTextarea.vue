<template>
  <div>
    <!-- 이렇게 넣으면 안됨 -->
    <!-- <textarea>{{message}}</textarea>  -->
    <textarea v-model="message"></textarea>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      message: '여러줄을 입력할 수 있는 textarea 입니다.'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
