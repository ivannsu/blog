<template>
  <div class="col-lg-9">
    <div class="row">
      <div class="lds-ripple-container">
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

.lds-ripple-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  left: 50%;
  top: 50%;
  margin-left: -32px;
  margin-top: -32px;
}
.lds-ripple div {
  background-color: #000000;
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}

</style>
