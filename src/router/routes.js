import TixBoardView from '@/components/templates/TixBoardView.vue'
import TixLoginView from '@/components/templates/TixLoginView.vue'

export default [
  {
    path: '/',
    name: 'tixBoardView',
    component: TixBoardView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'tixLoginView',
    component: TixLoginView
  },
  {
    path: '*',
    redirect: '/'
  }
]
