<template>
  <div>
    <div class="container-fluid">
      <div class="row" style="padding-top: 30px">
      <Sidebar :authentication="authentication"/>
      <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Articles',
  props: ['authentication'],
  components: {
    Navbar,
    Sidebar
  }
}

</script>
