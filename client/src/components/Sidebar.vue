<template>
  <div class="col-lg-3">
    <div class="list-group">
      <a href="javascript:void(0)" class="list-group-item" v-for="article in articles" @click="getDetail(article._id)"> {{ article.title }} </a>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Sidebar',
    data() {
      return {
        articles: []
      }
    },
    methods: {
      getDetail(id) {
        this.$emit('get-detail', id);
      }
    },
    created() {
      axios({
        method: 'GET',
        url: 'http://localhost:3001/articles'
      })
      .then(response => {
        let articles = response.data.articles;
        this.articles = articles;
      })
      .catch(err => {
        console.log(err.response.data);
      });
    },
  }
</script>

<style>

</style>