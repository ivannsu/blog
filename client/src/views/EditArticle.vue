<template>
  <div class="col-lg-12 col-sm-12 portfolio-item">
    <hr>
    <h1>Edit Article</h1>
    <br>
    <div>
      <div class="form-group">
        <input type="text" name="title" class="form-control" placeholder="Title..." v-model="title">
        <br>
        <textarea class="form-control" name="content" rows="10" placeholder="Write something..." v-model="content"></textarea>
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary" @click="create">POST</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'edit-article',
  props: ['articleId'],
  data () {
    return {
      
    }
  }
}

</script>