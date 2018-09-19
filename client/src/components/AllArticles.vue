<template>
  <div class="col-lg-9">
    <div class="row">
    
      <div class="lds-ripple-container" v-if="!article._id">
        <div class="lds-ripple">
          <div></div><div></div>
        </div>
      </div>

      <div class="col-lg-6 col-sm-6 portfolio-item" v-for="(article, index) in articles" :key="index">
        <div class="card h-70 custom-card">
          <div class="card-body">
            <h4 class="card-title">
              {{ article.title }}
            </h4>
            <p class="translate">
              Author: {{ article.author.name }}
            </p>
            <p>
              <a href="javascript:void(0)">Edit</a> | <a href="javascript:void(0)">Delete</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AllArticles',
  data () {
    return {
      articles: []
    }
  },
  created () {
    axios({
      method: 'GET',
      url: `${this.$baseurl}/articles`
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

<style scoped>

.custom-card {
  margin: 5px
}

</style>
