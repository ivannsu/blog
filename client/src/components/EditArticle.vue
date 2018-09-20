<template>
  <div class="col-lg-9">
    <h1 class="text-center">Edit Article</h1>
    <hr>
    <div class="loader-container" v-if="!article && !empty">
      <div class="loader"></div>
    </div>
    <div class="form-group" v-else>
      <input type="text" name="title" class="form-control" placeholder="Title..." v-model="article.title">
      <br>
      <textarea class="form-control" name="content" rows="10" placeholder="Write something..." v-model="article.content"></textarea>
    </div>
    <div class="form-group text-left">
      <button type="button" class="btn btn-primary" @click="edit">POST</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditArticle',
  props: ['articleId', 'authentication'],
  data () {
    return {
      article: null,
      empty: false,
      commentContent: '',
      token: '',
      title: '',
      content: ''
    }
  },
  methods: {
    fetchData () {
      let self = this

      self.token = localStorage.getItem('token')

      axios({
        method: 'GET',
        url: `${this.$baseurl}/articles/${this.articleId}`
      })
        .then(response => {
          let article = response.data.article

          if (!article) {
            self.empty = false
          } else {
            self.empty = true
            self.article = article
          }
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    },
    edit () {
      let self = this

      axios({
        method: 'PUT',
        url: `${this.$baseurl}/articles/${this.article._id}`,
        headers: {
          token: this.token
        },
        data: {
          title: self.article.title,
          content: self.article.content
        }
      })
        .then(response => {
          self.$router.push({ name: 'detail-article', params: { articleId: `${self.article._id}` } })
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    articleId (newVal) {
      let self = this

      self.token = localStorage.getItem('token')

      axios({
        method: 'GET',
        url: `${this.$baseurl}/articles/${newVal}`
      })
        .then(response => {
          let article = response.data.article

          if (!article) {
            self.empty = false
          } else {
            self.empty = true
            self.article = article
          }
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    }
  }
}

</script>

<style>

</style>
