import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VCPicker from '@/components/VCPicker'
import GymPicker from '@/components/GymPicker'

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
    },
    {
      path: '/GymPicker',
      name: 'GymPicker',
      component: GymPicker
    }
  ]
})
