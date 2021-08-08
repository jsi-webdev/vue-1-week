<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="user._id" v-for="user in userList">
          <td>{{ user.name }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '@/mixins/api.js'
export default {
  name: '',
  components: {},
  mixins: [api],
  data() {
    return {
      cities: [
        { t: '서울', v: '02' },
        { t: '부산', v: '021' },
        { t: '대구', v: '055' },
        { t: '제주', v: '064' }
      ],
      userList: []
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.getUserList()
  },
  unmounted() {},
  methods: {
    async getUserList() {
      // // HttpRequest 는 동기 통신 방식이라, request 가 완료 되어야 웹이 다음 code 를 수행가능 하였음
      // // axios 는 기본적으로 비동기 방식임 ㅋㅋ 어렵다
      // this.userList = (await axios.get('http://localhost:3000/users')).data // await 이하 code 는 실행하지 않고 기다리겠다!
      // // console.log(this.userList.length) // 얘는 안 기다려줌
      // console.log(this.userList) // console 기능에 데이터가 완료될 때까지 기다려주는 기능이 존재
      // // console.log(this.userList.length) // 순서에 관계없음
      this.userList = await this.$get('http://localhost:3000/users')
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
}

table,
th,
td {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 5px;
}
</style>
