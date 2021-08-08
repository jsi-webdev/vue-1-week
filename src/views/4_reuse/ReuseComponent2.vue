<template>
  <div>
    <SimpleGrid
      :headers="headers"
      checkedKey="id"
      :items="items"
      selectType="checkbox"
      @change-item="changeItem"
    />
  </div>
</template>
<script>
import SimpleGrid from '@/components/fragments//SimpleGrid'
export default {
  name: '',
  components: { SimpleGrid },
  data() {
    return {
      headers: [
        { title: '이름', key: 'name' },
        { title: '연락처', key: 'phone' },
        { title: '이메일', key: 'email' }
      ],
      items: [
        {
          id: 1,
          name: '유재석',
          phone: '01012345678',
          email: 'ryu@mail.com',
          addr: '서울시'
        },
        {
          id: 2,
          name: '김종국',
          phone: '01012392412',
          email: 'kim@mail.com',
          addr: '화성시'
        },
        {
          id: 3,
          name: '지석진',
          phone: '01719284756',
          email: 'ji@mail.com',
          addr: '일산시'
        },
        {
          id: 4,
          name: '하하',
          phone: '01095748392',
          email: 'haha@mail.com',
          addr: '서울시'
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeItem(data) {
      console.log(data)
    }
  }
}
</script>
