<template>
  <div class="col-lg-9">
    <!-- FORM POST
    <div class="row">
      <div class="col-lg-9 col-sm-9 portfolio-item">
        <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Title...">
            <br>
            <input type="text" class="form-control" value="John Doe" disabled>
            <br>
            <textarea class="form-control" rows="10" placeholder="Write something..."></textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">POST</button>
          </div>
        </form>
      </div>
    </div>
    <hr>
    -->
    <div class="row">

      <div class="col-lg-6 col-sm-6 portfolio-item" v-for="article in articles">
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

      <!-- ARTICLE DETAIL
      ===============================================
      <div class="col-lg-12 col-sm-12 portfolio-item">
        <div class="card h-70">
          <div class="card-body">
            <h4 class="card-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </h4>
            <p>
              Author: John Doe | Created: 29 Sep 2018
            </p>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Dicta magnam facere non perspiciatis totam nihil autem ex vel adipisci, 
              cupiditate et officia ipsum deleniti praesentium delectus dolore cumque error quos!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Dicta magnam facere non perspiciatis totam nihil autem ex vel adipisci, 
              cupiditate et officia ipsum deleniti praesentium delectus dolore cumque error quos!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Dicta magnam facere non perspiciatis totam nihil autem ex vel adipisci, 
              cupiditate et officia ipsum deleniti praesentium delectus dolore cumque error quos!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Dicta magnam facere non perspiciatis totam nihil autem ex vel adipisci, 
              cupiditate et officia ipsum deleniti praesentium delectus dolore cumque error quos!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Dicta magnam facere non perspiciatis totam nihil autem ex vel adipisci, 
              cupiditate et officia ipsum deleniti praesentium delectus dolore cumque error quos!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Dicta magnam facere non perspiciatis totam nihil autem ex vel adipisci, 
              cupiditate et officia ipsum deleniti praesentium delectus dolore cumque error quos!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Dicta magnam facere non perspiciatis totam nihil autem ex vel adipisci, 
              cupiditate et officia ipsum deleniti praesentium delectus dolore cumque error quos!
            </div>
          </div>
        </div>
      </div>
      -->

    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Content',
    data() {
      return {
        articles: []
      }
    },
    methods: {

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

<style scoped>

</style>