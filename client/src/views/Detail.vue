<template>
  <div>
    <DetailArticle></DetailArticle>
  </div>
</template>

<script>
import axios from 'axios'
import DetailArticle from '@/components/DetailArticle.vue'

export default {
  name: 'detail',
  props: ['articleId'],
  components: {
    DetailArticle
  },
  watch: {
    articleId (newVal) {
      axios({
        method: 'GET',
        url: `http://localhost:3001/articles/${newVal}`
      })
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  }
}

</script>
