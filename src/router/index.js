import Vue from 'vue'
import Router from 'vue-router'
import VotingPage from '@/components/VotingPage.vue'
import ConfirmationPage from '@/components/ConfirmationPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VotingPage',
      component: VotingPage
    },
    {
      path: '/confirmation',
      name: 'ConfirmationPage',
      component: ConfirmationPage
    }
  ]
})