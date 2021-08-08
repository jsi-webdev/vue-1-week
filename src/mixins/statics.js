import axios from 'axios'

// 사용자의 접속 시간 등을 log 관리
// 사용자의 메뉴 별 사용빈도 파악이 가능
export default {
  mounted() {
    this.startPage()
  },
  unmounted() {
    this.endPage()
  },
  methods: {
    startPage() {
      // 사용자 id, page, time
    },
    endPage() {
      // 사용자 id, page, time
    }
  }
}
