<template>
  <div>
    <PageTitle title="고객생성" />
    <PageTitle />
    <OrderType />
    <OrderType defaultValue="003" @change-item="changeOrderType" />
    <OrderType
      defaultValue="003"
      eventName="changeOrder"
      @changeOrder="changeOrderType"
    />
  </div>
</template>
<script>
import PageTitle from '@/components/fragments/PageTitle'
import OrderType from '@/components/erp/OrderType'
export default {
  name: '',
  components: { PageTitle, OrderType },
  data() {
    return {
      sampleData: '',
      orderType: '003'
    }
  },
  provide() {
    return {
      title2: '타이틀 2 입니다.'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeOrderType(data) {
      console.log(data)
      this.orderType = data
    }
  }
}
</script>
