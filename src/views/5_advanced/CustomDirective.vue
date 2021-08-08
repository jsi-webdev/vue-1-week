<template>
  <div>
    <input type="text" v-focus />
    <input type="text" v-blur:[required] />
    <br />
    <input type="text" v-number />
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  directives: {
    focus: {
      mounted(el, binding) {
        el.focus()
      }
    },
    blur: {
      mounted(el, binding) {
        // console.log(el)
        if (binding.arg) {
          el.addEventListener('blur', () => {
            if (el.value === '') {
              alert('필수 입력값입니다.')
              // el.focus()
            }
          })
        }
      }
    },
    number: {
      mounted(el, binding) {
        el.addEventListener('keydown', (e) => {
          console.log(e.keyCode) // 48~57 이 0~9 에 해당
          if (
            !(e.keyCode >= 48 && e.keyCode <= 57) ||
            e.keyCode === 8 ||
            e.keyCode === 37 ||
            e.keyCode === 39
          ) {
            // 8은 백스페이스, 37, 39 는 좌우 화살표
            e.preventDefault() // keydown 이후 event 는 keyup 인데 keyup 을 prevent 하면 input 에 key 등록이 중지됨 ㅋㅋ
          }
        })
      }
    }
  },
  data() {
    return {
      required: true
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
