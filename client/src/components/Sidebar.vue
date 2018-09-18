<template>
  <div class="col-lg-3">
    <div class="list-group">
      <router-link class="list-group-item" :to="{ name: '', params: { articleId: `${article._id}` } }" v-for="article in articles">{{ article.title }}</router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Sidebar',
    data() {
      return {
        articles: []
      }
    },
    methods: {

    },
    created() {
      axios({
        method: 'GET',
        url: 'http://localhost:3001/articles'
      })
      .then(response => {
        let articles = response.data.articles
        this.articles = articles
      })
      .catch(err => {
        console.log(err.response.data)
      });
    },
  }
</script>

<style>

</style>