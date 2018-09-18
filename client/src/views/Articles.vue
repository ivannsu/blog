<template>
  <div class="row">
    <Sidebar></Sidebar>
    <AllArticles></AllArticles>
    <router-view></router-view>
  </div>
</template>

<script>
import AllArticles from '@/components/AllArticles.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Articles',
  props: ['articleId'],
  components: {
    AllArticles,
    Sidebar
  },
  watch: {
    articleId () {
      console.log(this.articleId, '<============= ADA')
    }
  }
}
</script>
