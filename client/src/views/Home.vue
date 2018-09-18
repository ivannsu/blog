<template>
  <div class="row">
    <Sidebar></Sidebar>
    <Content></Content>
  </div>
</template>

<script>
// @ is an alias to /src
import Content from '@/components/Content.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'home',
  components: {
    Content,
    Sidebar
  }
}
</script>
