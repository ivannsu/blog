<template>
  <div>
    <!-- <Navbar @authentication="getAuthentication" /> -->
    <div class="container-fluid">
      <div class="row" style="padding-top: 30px">
      <Sidebar/>
      <router-view :authentication="authenticationStat"></router-view>
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
  },
  data () {
    return {
      authenticationStat: null
    }
  },
  created () {
    this.authenticationStat = this.authentication
  },
  watch: {
    authentication (val) {
      this.authenticationStat = val
    }
  }
}

</script>
