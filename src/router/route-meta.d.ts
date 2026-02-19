import 'vue-router'

type PageTransitionAnimation = 'page' | 'fade' | 'slide'

declare module 'vue-router' {
  interface RouteMeta {
    transition?: PageTransitionAnimation
  }
}
