<template>
  <div class="col-lg-12 col-sm-12 portfolio-item">
    <hr>
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
          cupiditate et officia ipsum deleniti praesentium delectus dolore cumque error quos
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dicta magnam facere non perspiciatis totam nihil autem ex vel adipisci,
          cupiditate et officia ipsum deleniti praesentium delectus dolore cumque error quos!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dicta magnam facere non perspiciatis totam nihil autem ex vel adipisci,
          cupiditate et officia ipsum deleniti praesentium delectus dolore cumque error quos!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dicta magnam facere non perspiciatis totam nihil autem ex vel adipisci,
          cupiditate et officia ipsum deleniti praesentium delectus dolore cumque error quos
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
</template>

<script>

export default {
  name: 'DetailArticle',
  props: ['articleId'],
  data () {
    return {
      message: 'hello'
    }
  },
  mounted () {
    console.log(this.articleId, '<=============== ID DETAIL ARTICLE')
  }
}

</script>
