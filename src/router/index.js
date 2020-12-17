import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Stake from '../views/stake.vue'
import nfts from '../views/nfts.vue'
import marketnfts from '../views/market.vue'
import gov from '../views/gov.vue'
import referral from '../views/referral.vue'
import stdetail from '../views/detail/stakedetail.vue'

import lge from '../views/lge.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/liquidity',
    name: 'LGE',
    component: lge
  },
  {
    path: '/stake',
    name: 'Stake',
    component: Stake
  },
  {
    path: '/nfts',
    name: 'NFTS',
    component: nfts
  },
  {
    path: '/marketnfts',
    name: 'market',
    component: marketnfts
  },
  {
    path: '/gov',
    name: 'GOV',
    component: gov
  },
  {
    path: '/referral',
    name: 'Referral',
    component: referral
  },
  {
    path: '/stakedetail',
    name: 'Stake Detail',
    component: stdetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
