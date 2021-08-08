<template>
  <div>
    <h1>{{ $translate('ko.hi') }}</h1>
    <h1>{{ $translate('en.hi') }}</h1>
    <button>{{ $translate('ko.save') }}</button>
    <button>{{ $translate(`${userlang}.save`) }}</button>
    <button>{{ i18n[userlang].save }}</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  inject: ['i18n'],
  data() {
    return {
      userlang: 'ko'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
