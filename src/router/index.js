import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes'
import { authorizeToken } from '@/router/guards'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
router.beforeEach(authorizeToken)

export default router
