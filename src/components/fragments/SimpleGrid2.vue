<template>
  <table class="data-grid">
    <thead>
      <tr>
        <th :key="header.key" v-for="header in headers">
          {{ header.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr :key="item.id" v-for="item in items">
        <td :key="j" v-for="(h, j) in headers">
          <a href="" v-if="keyItem === h['key']" @click="goDetail(item.id)">{{
            item[h['key']]
          }}</a>
          <template v-else>{{ item[h['key']] }}</template>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    keyItem: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    goDetail(id) {
      this.router.push({ path: 'uitemplate/detail', query: { id } })
    }
  }
}
</script>

<style scoped>
.data-grid {
  width: 100%;
  border-collapse: collapse;
}

.data-grid tr,
.data-grid th,
.data-grid td {
  border: 1px solid black;
  padding: 5px;
}
</style>
