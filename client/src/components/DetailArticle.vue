<template>
  <div class="col-lg-12 col-sm-12 portfolio-item">
    <hr>
    <div class="card h-70">
      <div class="card-body">
        <h4 class="card-title">
          {{ article.title }}
        </h4>
        <p>
          Author: {{ article.author.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailArticle',
  props: ['article']
}

</script>
