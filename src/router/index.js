import Vue from 'vue'
import Router from 'vue-router'
import Customer from '@/pages/customer/Customer'
import Tps from '@/pages/customer/Tps'
import Zdy from '@/pages/customer/Zdy'
import Newzdy from '@/pages/customer/Newzdy'
import ComDetail from '@/pages/customer/ComDetail'

import Gdxx from '@/pages/Gdxx'
import Login from '@/pages/Login'

import BeforePay from '@/pages/tactics/beforepay/beforepay'
import Repaying from '@/pages/tactics/repaying/repaying'
import Verification from '@/pages/tactics/verification/verification'

import Apilog from '@/pages/logs/Apilog'

import Test from '@/pages/test/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/tps',
      name: 'tps',
      component: Tps
    },
    {
      path: '/gdxx',
      name: 'gdxx',
      component: Gdxx
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/zdy',
      name: 'zdy',
      component: Zdy
    },
    {
      path: '/newzdy',
      name: 'newzdy',
      component: Newzdy
    },
    {
      path: '/log',
      name: 'log',
      component: Apilog
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/getDetail',
      name: 'getDetail',
      component: ComDetail
    },
    {
      path: '/verification',
      name: 'verification',
      component: Verification
    },
    {
      path: '/beforepaying',
      name: 'beforepaying',
      component: BeforePay
    },
    {
      path: '/repaying',
      name: 'repaying',
      component: Repaying
    }
  ]
})
