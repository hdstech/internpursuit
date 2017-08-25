<template>
  <div id="app">

    <!-- Navbar begins here  -->
    <nav class="nav has-shadow main-body">
      <div class="container">
        <div class="nav-right">
          <a class="nav-item nav-left">
              <img src="./assets/intern-pursuit-logo.svg" alt="Intern Pursuit logo">
            </a>
          <router-link class="nav-item is-hidden-mobile" to="/">
            <a>
              <span class="icon is-medium" >
                <icon name="home" scale="2" style="position:absolute; top: .5em;"></icon>
              </span>
              Home</a>
          </router-link>
          <router-link class="nav-item is-hidden-mobile" to="/employer/signup">
            <a>
              <span class="icon is-medium" >
                <icon name="briefcase" scale="1.5" style="position:absolute; top: .9em;"></icon>
              </span>
              Employers</a>
          </router-link>
          <router-link class="nav-item is-hidden-mobile" to="/student/profile">
            <a>
              <span class="icon is-medium">
                <icon name="graduation-cap" scale="2" style="position:absolute; top: .7em;"></icon>
              </span>
              Students</a>
          </router-link>
          <router-link class="nav-item is-hidden-mobile" to="/school/signup">
            <a>
              <span class="icon is-medium">
                <icon name="book" scale="1.5" style="position:absolute; top: .9em;"></icon>
              </span>
              Schools</a>
          </router-link>
        </div>
      </div>
    </nav>
    <!-- Navbar ends here -->

    <!-- This is content area for selected route  -->
    <router-view></router-view>
    <!-- Content area ends here -->

    <!-- Footer begins here -->
    <footer class="footer">
      <div class="container">
        <div class="content columns has-text-centered">
          <div class="column">
            <router-link>
              <a href="#" class="is-grey-darker">About Us</a>
            </router-link>
          </div>
          <div class="column">
            <router-link>
              <a href="#">Support</a>
            </router-link>
          </div>
          <div class="column">
            <router-link>
              <a href="#">Press</a>
            </router-link>
          </div>
          <div class="column">
            <router-link>
              <a href="#">Terms</a>
            </router-link>
          </div>
          <div class="column">
            <router-link>
              <a href="#">Contact Us</a>
            </router-link>
          </div>
          <!-- <p>
            <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/jgthms/bulma">
          <i class="fa fa-github"></i>
        </a>
          </p> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Banner from './Banner.vue'
  export default {
    components: {
      'banner-img': Banner
    },
    data: {

    },
    data() {
      return {
        modal: "modal"
      }
    },
    methods: {
      toggleModal() {
        return this.modal = "modal is-active"
      },
      modalClose() {
        return this.modal = "modal"
      }
    }
  }
</script>

<style scoped>
  button:focus,
  button:hover {
    background-color: #AF2328;
  }

  .nav-item a {
    display: block;
    width: 150px;
    text-decoration: none;
  }

  .nav-item:hover a {
    text-decoration: none !important;
	color: #FFFFFF;
  }

  a:hover:not(:first-of-type) {
    text-decoration: none !important;
    background-color: #AF2328;

  }

  .nav-item span {
    padding-right: 10px;
  }

  .column a {
    color: #39001D;
  }

  .main-body {
    background-color: #F4F4F4;
  }

  .footer,
  .footer .column a {
    background-color: #633231;
    color: #FFF;
    font-size: .9em;
  }

  .nav {
  	height: 4em;
  }
</style>
