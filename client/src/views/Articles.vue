<template>
  <div class="row">
    <Sidebar></Sidebar>
    <Content></Content>
  </div>
</template>

<script>
import axios from 'axios'
import Content from '@/components/Content.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'articles',
  components: {
    Content, 
    Sidebar
  }
}
</script>

<style>

</style>