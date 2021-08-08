<template>
  <div>
    <select>
      <option v-for="city in cities" :key="city.v" :value="city.v">
        {{ city.t }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      cities: [
        { t: '서울', v: '02' },
        { t: '부산', v: '021' },
        { t: '대구', v: '055' },
        { t: '제주', v: '064' }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
