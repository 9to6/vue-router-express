import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Second from '@/components/Second'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    }
  ]
})
