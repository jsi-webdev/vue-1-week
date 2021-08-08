<template>
  <div>
  <Vif
    v-if="isDispIf"
  />
  <Vshow
    v-show="isDispShow"
  />
</template>

<script>

  created() {
    this.item = await this.$api(`/users/${this.itemId}`)
  },

</script>