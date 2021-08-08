import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserCreate from '../views/8_assignment/UserCreate.vue'
// import DataBindingString from '../views/1_databinding/DataBindingString.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/assignment/usercreate',
    name: 'UserCreate',
    component: UserCreate
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingString',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingString.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtml',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingHtml.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInput',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingInput.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelect',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingSelect.vue'
      )
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckBox',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingCheckBox.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadio',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingRadio.vue'
      )
  },
  {
    path: '/databinding/textarea',
    name: 'DataBindingTextarea',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingTextarea.vue'
      )
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttribute',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingAttribute.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyle',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStyle.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClass',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingClass.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingList',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingList.vue'
      )
  },
  {
    path: '/databinding/serverlist',
    name: 'DataBindingServerList',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingServerList.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClick',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventClick.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChange',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventChange.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventKey',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventKey.vue'
      )
  },
  {
    path: '/event/blur',
    name: 'EventBlur',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventBlur.vue'
      )
  },
  {
    path: '/extra/computed',
    name: 'Computed',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "extra" */ '../views/3_extra/Computed.vue'
      )
  },
  {
    path: '/extra/watch',
    name: 'Watch',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "extra" */ '../views/3_extra/Watch.vue'
      )
  },
  {
    path: '/reuse/component1',
    name: 'ReuseComponent1',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "reuse" */ '../views/4_reuse/ReuseComponent1.vue'
      )
  },
  {
    path: '/reuse/component2',
    name: 'ReuseComponent2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "reuse" */ '../views/4_reuse/ReuseComponent2.vue'
      )
  },
  {
    path: '/reuse/component3',
    name: 'ReuseComponent3',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "reuse" */ '../views/4_reuse/ReuseComponent3.vue'
      )
  },
  {
    path: '/reuse/slot',
    name: 'Slot',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "reuse" */ '../views/4_reuse/Slot.vue'
      )
  },
  {
    path: '/advanced/mixin',
    name: 'Mixin',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/Mixin.vue'
      )
  },
  {
    path: '/advanced/customdirective',
    name: 'CustomDirective',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/CustomDirective.vue'
      )
  },
  {
    path: '/advanced/plugin',
    name: 'Plugin',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/Plugin.vue'
      )
  },
  {
    path: '/vuex/store',
    name: 'StoreAccess',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "vuex" */ '../views/6_vuex/StoreAccess.vue'
      )
  },
  {
    path: '/vuex/store2',
    name: 'StoreAccess2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "vuex" */ '../views/6_vuex/StoreAccess2.vue'
      )
  },
  {
    path: '/uitemplate/create',
    name: 'Create',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "vuex" */ '../views/9_uitemplate/Create.vue'
      )
  },
  {
    path: '/uitemplate/single-edit',
    name: 'SingleViewEdit',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/SingleViewEdit.vue'
      )
  },
  {
    path: '/uitemplate/single-edit2',
    name: 'SingleViewEdit2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/SingleViewEdit2.vue'
      )
  },
  {
    path: '/uitemplate/listtodetail',
    name: 'ListToDetail',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/ListToDetail.vue'
      )
  },
  {
    path: '/uitemplate/detail',
    name: 'Detail',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/Detail.vue'
      )
  },
  {
    path: '/template/listtodetail3',
    name: 'ListToDetail3',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/ListToDetail3.vue'
      )
  },
  {
    path: '/template/detail3',
    name: 'Detail3',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/Detail3.vue'
      )
  },
  {
    path: '/template/create3',
    name: 'Create3',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/Create3.vue'
      )
  },
  {
    path: '/template/listtodetail4',
    name: 'ListToDetail4',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/ListToDetail4.vue'
      )
  },
  {
    path: '/template/multiple-edit',
    name: 'MultipleEdit',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/MultipleEdit.vue'
      )
  },
  {
    path: '/template/multiple-edit2',
    name: 'MultipleEdit2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/MultipleEdit2.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
