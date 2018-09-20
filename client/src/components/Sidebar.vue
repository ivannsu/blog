<template>
  <div class="col-lg-3">
    <div class="list-group">
      <router-link to="/" class="list-group-item bg-secondary text-white">Create New Post</router-link>
    </div>
    <div class="loader-container" v-if="articles.length === 0 && !empty">
      <div class="loader"></div>
    </div>
    <p v-else-if="articles.length === 0 && empty">No Articles Data</p>
    <div class="list-group" v-else>
      <router-link :to="{ name: 'detail-article', params: { articleId: `${article._id}` } }" class="list-group-item" v-for="(article, index) in articles" :key="index">{{ article.title }}</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Sidebar',
  data () {
    return {
      articles: [],
      empty: false
    }
  },
  methods: {

  },
  created () {
    let self = this

    axios({
      method: 'GET',
      url: `${this.$baseurl}/articles`
    })
      .then(response => {
        let articles = response.data.articles

        if (articles.length === 0) {
          self.empty = true
        } else {
          self.articles = articles
          self.empty = false
        }
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  }
}

</script>
