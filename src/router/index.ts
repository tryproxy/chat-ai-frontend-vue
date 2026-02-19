import { CheckoutForward } from '@/pages/checkout'
import { Home } from '@/pages/home'
import { Login } from '@/pages/login'
import { ROUTES } from '@/shared/config/router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.PAGES.HOME.path,
      name: ROUTES.PAGES.HOME.name,
      component: Home,
      meta: { transition: 'fade' },
    },
    {
      path: ROUTES.PAGES.LOGIN.path,
      name: ROUTES.PAGES.LOGIN.name,
      component: Login,
      meta: { transition: 'slide' },
    },
    {
      path: ROUTES.PAGES.CHECKOUT.path,
      name: ROUTES.PAGES.CHECKOUT.name,
      component: () => CheckoutForward,
      meta: { transition: 'page' },
    },
  ],
})

export default router
