<template>
  <div class="col-lg-3">
    <div class="list-group">
      <router-link  v-for="(article, index) in articles" :key="index" :to="{ name: 'detail-article', params: { articleId: `${article._id}` } }" class="list-group-item">{{ article.title }}</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Sidebar',
  data () {
    return {
      articles: []
    }
  },
  created () {
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
      })
  }
}

</script>
