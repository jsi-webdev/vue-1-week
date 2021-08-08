import axios from 'axios'

export default {
  mounted() {
    console.log('믹스인 파일 안에서 일어나는 mounted') // mixin 호출하면 먼저 mounted 됨
  },
  methods: {
    async $get(url) {
      // mixin 함수이면 $를 붙여서 구분하자 해당 파일에 메소드 로직이 안 보이므로
      return (
        await axios.get(url).catch(e => {
          console.log(e)
        })
      ).data
    }
  }
}
