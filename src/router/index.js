import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VCPicker from '@/components/VCPicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/VCPicker',
      name: 'VCPicker',
      component: VCPicker
    }
  ]
})
