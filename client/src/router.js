import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('./views/Articles.vue'),
      children: [
        {
          path: ':articleId',
          name: 'detail-article',
          props: true,
          component: () => import('./views/Detail.vue')
        },
        {
          path: 'do/create',
          name: 'create-article',
          component: () => import('./views/CreateArticle.vue')
        },
        {
          path: 'do/edit/:articleId',
          name: 'edit-article',
          props: true,
          component: () => import('./views/EditArticle.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
