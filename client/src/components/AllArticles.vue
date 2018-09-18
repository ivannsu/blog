<template>
  <div class="col-lg-9">
    <!-- FORM POST
    <div class="row">
      <div class="col-lg-9 col-sm-9 portfolio-item">
        <div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Title...">
            <br>
            <input type="text" class="form-control" value="John Doe" disabled>
            <br>
            <textarea class="form-control" rows="10" placeholder="Write something..."></textarea>
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-primary">POST</button>
          </div>
        </div>
      </div>
    </div>
    <hr>
    -->
    <div class="row">
      <div class="col-lg-6 col-sm-6 portfolio-item" v-for="(article, index) in articles" :key="index">
        <div class="card h-70">
          <div class="card-body">
            <h4 class="card-title">
              {{ article.title }}
            </h4>
            <p class="translate">
              Author: {{ article.author.name }}
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
