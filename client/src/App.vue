<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-dark">
      <a class="navbar-brand" href="#">Blog</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/articles" class="nav-link">Articles</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0">
          <div v-if="!authenticated">
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#loginModal">
              Login
            </button>
            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#registerModal">
              Register
            </button>
          </div>
          <div v-else>
            <button class="btn btn-danger my-2 my-sm-0" type="button" @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </nav>

    <div class="container" style="padding-top: 50px">
      <router-view></router-view>
    </div>

    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="LoginModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="alert alert-danger" v-if="message !== ''">
              {{ message }}
            </div>
            <p>
              <input type="email" name="email" class="form-control" placeholder="Email..." v-model="email" />
            </p>

            <p>
              <input type="password" name="password" class="form-control" placeholder="Password..." v-model="password" />
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="login">Login</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="RegsiterModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Register</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="alert alert-danger" v-if="message !== ''">
              {{ message }}
            </div>
            <p>
              <input type="text" name="name" class="form-control" placeholder="Name..." v-model="name" />
            </p>
            <p>
              <input type="email" name="email" class="form-control" placeholder="Email..." v-model="email" />
            </p>
            <p>
              <input type="password" name="password" class="form-control" placeholder="Password..." v-model="password" />
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="register">Register</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'LoginModal',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      authenticated: false,
      message: ''
    }
  },
  methods: {
    login () {
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
          let token = data.token

          localStorage.setItem('token', token)
          self.authenticated = true

          self.email = ''
          self.password = ''

          $('#loginModal').modal('hide')
        })
        .catch(err => {
          let message = err.response.data.message
          self.message = message
        })
    },

    register () {
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

          $('#registerModal').modal('hide')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },

    logout () {
      localStorage.removeItem('token')
      this.authenticated = false
    }
  }
}

</script>

<style>

.lds-ripple-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  left: 50%;
  top: 50%;
  margin-left: -32px;
  margin-top: -32px;
}
.lds-ripple div {
  background-color: #000000;
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}

</style>
