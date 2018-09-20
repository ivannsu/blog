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
      component: () => import('./views/Articles.vue'),
      children: [
        {
          path: '/',
          name: 'articles',
          component: () => import('./components/ArticleCards.vue')
        },
        {
          path: 'create',
          name: 'create-article',
          component: () => import('./components/CreateArticle.vue')
        },
        {
          path: 'detail/:articleId',
          name: 'detail-article',
          props: true,
          component: () => import('./components/DetailArticle.vue')
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
