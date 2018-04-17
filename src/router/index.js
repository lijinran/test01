import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import packageManage from '@/components/packageManage'
import distributionManage from '@/components/distributionManage'
import addUpdateDistribution from '@/components/addUpdateDistribution'
import activateManage from '@/components/activateManage'
import activateAffirm from '@/components/activateAffirm'
import detection from '@/components/detection'
import addUpdateDetection from '@/components/addUpdateDetection'
import theOutbound from '@/components/theOutbound'
import ReceivingManage from '@/components/ReceivingManage'
import takeDelivery from '@/components/takeDelivery'
import qcAffirm from '@/components/qcAffirm'

Vue.use(Router)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/',
      component: packageManage
    },
    {
      path: '/distributionManage',
      component: distributionManage
    },
    {
      path: '/addUpdateDistribution',
      component: addUpdateDistribution
    },
    {
      path: '/activateManage',
      component: activateManage
    },
    {
      path: '/activateAffirm',
      component: activateAffirm
    },
    {
      path:'/detection',
      component:detection
    },
    {
      path:'/addUpdateDetection',
      component:addUpdateDetection
    },
    {
      path:'/theOutbound',
      component:theOutbound
    },
    {
      path:'/ReceivingManage',
      component:ReceivingManage
    },
    {
      path:'/takeDelivery',
      component: takeDelivery
    },
    {
      path:'/qcAffirm',
      component:qcAffirm
    }
  ]
})
