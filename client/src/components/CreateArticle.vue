<template>
  <div class="col-lg-9">
    <h1 class="text-center">Create New Article</h1>
    <hr>
    <div class="form-group">
      <input type="text" name="title" class="form-control" placeholder="Title..." v-model="title">
      <br>
      <textarea class="form-control" name="content" rows="10" placeholder="Write something..." v-model="content"></textarea>
    </div>
    <div class="form-group text-left">
      <button type="button" class="btn btn-primary" @click="create">POST</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateArticle',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    create () {
      let self = this
      let token = localStorage.getItem('token')

      axios({
        method: 'POST',
        url: `${this.$baseurl}/articles`,
        headers: {
          token: token
        },
        data: {
          title: self.title,
          content: self.content
        }
      })
        .then(response => {
          self.$router.push({ path: '/articles' })
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
