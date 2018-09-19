<template>
  <div class="col-lg-12">
    <h1>Detail</h1>
    <DetailArticle :article="article"></DetailArticle>
  </div>
</template>

<script>
import axios from 'axios'
import DetailArticle from '@/components/DetailArticle.vue'

export default {
  name: 'detail',
  props: ['articleId'],
  data () {
    return {
      article: {}
    }
  },
  components: {
    DetailArticle
  },
  created () {
    axios({
      method: 'GET',
      url: `${this.$baseurl}/articles/${this.articleId}`
    })
      .then(response => {
        let article = response.data.article
        this.article = article
      })
      .catch(err => {
        console.log(err.response.data)
      })
  },
  watch: {
    articleId (newVal) {
      console.log('masuk ke sini')
      axios({
        method: 'GET',
        url: `${this.$baseurl}/articles/${newVal}`
      })
        .then(response => {
          let article = response.data.article
          this.article = article
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  }
}

</script>
