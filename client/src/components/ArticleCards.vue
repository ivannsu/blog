<template>
  <div class="col-lg-9">
    <h1 class="text-center">All Articles</h1>
    <hr>
    <div class="row">
      <div class="loader-container" v-if="articles.length === 0 && !empty">
        <div class="loader"></div>
      </div>
      <p v-else-if="articles.length === 0 && empty">No Articles Data</p>
      <div class="col-lg-6 col-md-6 col-sm-6" v-for="(article, index) in articles" :key="index" v-else>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-left"><strong>{{ article.title }}</strong></h5>
            <p class="card-text text-justify text-muted">Author: {{ article.author.name }}</p>
            <div v-if="article.author._id === userId">
              <router-link :to="{ name: 'edit-article', params: { articleId: `${article._id}` } }" class="card-link text-success">Edit</router-link>
              <a href="javascript:void(0)" class="card-link text-danger" @click="remove(article._id)">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ArticleCards',
  data () {
    return {
      articles: [],
      empty: false,
      userId: ''
    }
  },
  methods: {
    fetchData () {
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
    },
    remove (id) {
      let self = this

      axios({
        method: 'DELETE',
        url: `${this.$baseurl}/articles/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          self.fetchData()
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    }
  },
  created () {
    let userId = localStorage.getItem('userId')

    this.userId = userId
    this.fetchData()
  }

}

</script>

<style scoped>

.card {
  margin: 8px;
}

</style>
