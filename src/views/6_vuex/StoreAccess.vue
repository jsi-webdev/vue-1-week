<template>
  <div>
    <label>ID</label>
    <input type="text" v-model="userId" />
    <br />
    <label>Password</label>
    <input type="password" v-model="pass" />
    <br />
    <button @click="login">로그인</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      userId: '',
      pass: '',
      user: {
        id: '0001',
        name: '정성일',
        email: 'j.skullow@gmail.com',
        role: 'A'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    login() {
      this.$store.commit('user', this.user)
      this.$router.push({ path: '/vuex/store2' })
    }
  }
}
</script>
