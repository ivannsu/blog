<template>
  <div class="col-lg-9">
    <div class="loader-container" v-if="!article && !empty">
      <div class="loader"></div>
    </div>
    <div v-else>
      <h1 class="text-left">{{ article.title }}</h1>
      <p class="text-left text-muted">Author: {{ article.author.name }}</p>
      <hr>
      <p class="text-left">
        {{ article.content }}
      </p>
    </div>
    <div class="form-input text-left" style="margin-top: 60px">
      <h4>Add Comment</h4>
      <div class="alert alert-danger" v-if="!token">
        Your must login to comment
      </div>
      <p>
        <textarea rows="3" class="form-control" placeholder="Write your comment..." v-model="commentContent"></textarea>
      </p>
      <p>
        <button type="button" class="btn btn-primary" disabled v-if="!commentContent">Send</button>
        <button type="button" class="btn btn-primary" @click="comment" v-else>Send</button>
      </p>
    </div>
    <div style="margin-top: 40px">
      <h4 class="text-left">All Comments</h4>
      <div class="loader-container" v-if="!article && !empty">
        <div class="loader"></div>
      </div>
      <div class="row" v-else style="padding-bottom: 30px">
        <div class="col-sm-6" v-for="(comment, index) in article.comments" :key="index">
          <div class="card">
            <div class="card-body">
              <!-- <h5 class="card-title"></h5> -->
              <p class="card-text">{{ comment.content }}</p>
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
  name: 'DetailArticle',
  props: ['articleId', 'authentication'],
  data () {
    return {
      article: null,
      empty: false,
      commentContent: '',
      token: ''
    }
  },
  methods: {
    comment () {
      let self = this

      axios({
        method: 'POST',
        url: `${this.$baseurl}/comments/`,
        headers: {
          token: self.token
        },
        data: {
          articleId: self.articleId,
          content: self.commentContent
        }
      })
        .then(response => {
          self.$router.push({ path: `/articles/detail/${self.articleId}` })
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    fetchData () {

    }
  },
  created () {
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
