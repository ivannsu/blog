<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Simple Blog</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/articles" class="nav-link">Articles</router-link>
        </li>
      </ul>
      <div class="form-inline" v-if="!authenticated">
        <button class="btn btn-outline-info my-2 my-sm-0" type="button" data-toggle="modal" data-target="#signinModal">Sign In</button>
        &nbsp;
        <button class="btn btn-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#signupModal">Sign Up</button>
      </div>
      <div class="form-inline" v-else>
        <button class="btn btn-danger" type="button" @click="logout">Logout</button>
      </div>
    </div>

    <!-- SIGN IN MODAL -->
    <div class="modal fade" id="signinModal" tabindex="-1" role="dialog" aria-labelledby="signinModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Sign In</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="alert alert-danger text-left" v-if="signInMessage !== ''">
              {{ signInMessage }}
            </div>

            <div class="form-group">
              <input type="email" name="email" class="form-control" placeholder="Enter your email..." v-model="email">
            </div>
            <div class="form-group">
              <input type="password" name="password" class="form-control" placeholder="Enter your password..." v-model="password">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="signin">Sign In</button>
          </div>
        </div>
      </div>
    </div>

    <!-- SIGN UP MODAL -->
    <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Sign Up</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="alert alert-danger text-left" v-if="signUpMessage !== ''">
              {{ signUpMessage }}
            </div>

            <div class="form-group">
              <input type="text" name="name" class="form-control" placeholder="Enter your name..." v-model="name">
            </div>
            <div class="form-group">
              <input type="email" name="email" class="form-control" placeholder="Enter your email..." v-model="email">
            </div>
            <div class="form-group">
              <input type="password" name="password" class="form-control" placeholder="Enter your password..." v-model="password">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="signup">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Navbar',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      authenticated: false,
      signUpMessage: '',
      signInMessage: ''
    }
  },
  methods: {
    signin () {
      let self = this

      axios({
        method: 'POST',
        url: `${this.$baseurl}/users/signin`,
        data: {
          email: self.email,
          password: self.password
        }
      })
        .then(response => {
          let data = response.data

          localStorage.setItem('userId', data.userId)
          localStorage.setItem('token', data.token)
          self.authenticated = true
          self.email = ''
          self.password = ''

          // eslint-disable-next-line
          $('#signinModal').modal('hide')
          self.$emit('authentication', self.authenticated)
          self.$router.push({ name: 'articles' })
        })
        .catch(err => {
          let message = err.response.data.message
          self.signInMessage = message
        })
    },
    signup () {
      let self = this

      axios({
        method: 'POST',
        url: `${this.$baseurl}/users/signup`,
        data: {
          name: self.name,
          email: self.email,
          password: self.password
        }
      })
        .then(response => {
          self.name = ''
          self.email = ''
          self.password = ''

          // eslint-disable-next-line
          $('#signupModal').modal('hide')
        })
        .catch(err => {
          let message = err.response.data.message
          self.signUpMessage = message
        })
    },
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('userId')

      this.authenticated = false
      this.$emit('authentication', this.authenticated)
      this.$router.push({ name: 'home' })
    }
  },
  created () {
    let userId = localStorage.getItem('userId')
    let token = localStorage.getItem('token')

    if (!userId && !token) {
      this.authenticated = false
    } else {
      this.authenticated = true
    }
  }
}

</script>
