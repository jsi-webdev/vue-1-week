import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000' // endpoint 만 url 에 넣으면 됨
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*' // 도메인 포트 정보가 달라도 접속하게 허용

export default {
  methods: {
    async $api(url, method, data) {
      return (
        await axios({
          method: method,
          url: url,
          data: data
        }).catch(e => {
          console.log(e)
        })
      ).data
    },
    async $get(url) {
      return (
        await axios.get(url).catch(e => {
          console.log(e)
        })
      ).data
    },
    async $post(url, data) {
      return (
        await axios.post(url, data).catch(e => {
          console.log(e)
        })
      ).data
    },
    async $put(url, data) {
      return (
        await axios.put(url, data).catch(e => {
          console.log(e)
        })
      ).data
    },
    async $delete(url) {
      return (
        await axios.delete(url).catch(e => {
          console.log(e)
        })
      ).data
    },
    async $upload(url, file) {
      const formData = new FormData()
      formData.append('attachment', file)
      return (
        await axios
          .post(url, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          })
          .catch(e => {
            console.log(e)
          })
      ).data
    }
  }
}
