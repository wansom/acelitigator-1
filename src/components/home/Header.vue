<template>
  <section>
    <div class="block md:hidden">
      <div class="mobile-sm-menu">
        <router-link to="/">
          <img src="/images/dial-logo.png" alt="logo" style="height: 50px; object-fit: contain" />
        </router-link>
        <div>
          <a-icon type="bars" style="font-size: 40px" @click="togleNav" />
        </div>
        <nav class="mobile-nav" v-if="isNavOpen">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li>
              <router-link to="/find-a-lawyer" aria-label="read more">Find A Lawyer</router-link>
            </li>
            <li><a href="//kenyalaw.org" aria-label="read more">Know Your Courts</a></li>
            <li>
              <a href="//acelitigator.com/litigation-documents" aria-label="read more">Resources</a>
            </li>
            <li><router-link to="contact-us" aria-label="read more">Contact</router-link></li>
            <li><router-link to="sign-in" aria-label="read more">Login </router-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <header class="">
      <div class="header-top">
        <div class="container mx-auto px-6 lg:px-16">
          <div class="ht-left">
            <div class="logo">
              <router-link to="/">
                <img src="/images/dial-logo.png" alt="logo" style="object-fit: contain" height="80px"  width="80px"/>
              </router-link>
            </div>
            <div class="mail-service">
              <i class="fa fa-envelope"></i>
              info@dialalawyerafrica.com
            </div>
            <div class="phone-service">
              <i class="fa fa-phone"></i>
              +231 794 342 159
            </div>
          </div>

          <div class="ht-right d-none d-md-block">

            <!-- <a href="#" class="login-panel"><i class="fa fa-user"></i>ACCOUNT</a> -->
            <a-dropdown>
              <a class="login-panel" @click="(e) => e.preventDefault()" v-if="!account" href="#"><i class="fa fa-user"></i>
                ADVOCATE ACCOUNT
              </a>
              <a class="login-panel" @click="(e) => e.preventDefault()" v-else  href="#"> <a-avatar :src="account.profile_photo"
                  v-if="account.profile_photo" />
                <a-avatar icon="user" v-else />


              </a>
              <a-menu slot="overlay" v-if="!account">
                <a-menu-item key="1">
                  <router-link to="/sign-up" class="dropdown-menu">Create Account</router-link>
                </a-menu-item>
                <a-menu-item key="2">
                  <router-link to="/sign-in" class="dropdown-menu">Login</router-link>
                </a-menu-item>

              </a-menu>
              <a-menu slot="overlay" v-else>
                <a-menu-item key="1">
                  <router-link to="/dashboard" class="dropdown-menu">Dashboard</router-link>
                </a-menu-item>
                <a-menu-item key="2">
                  <div class="dropdown-menu" @click="logout">Logout</div>
                </a-menu-item>

              </a-menu>
            </a-dropdown>


            <div class="top-social">
              <a href="//facebook.com/DialaLawyerAfrica/" target="blank" aria-label="learn more"><i class="fa fa-facebook"></i></a>
              <a href="//linkedin.com/company/dial-a-lawyer-africa-by-ace-litigator" target="blank" aria-label="learn more"><i
                  class="fa fa-linkedin"></i></a>
              <a href="//instagram.com/dialalawyerafrica/" target="blank"><i class="fa fa-instagram" aria-label="learn more"></i></a>
              <a href="//twitter.com/dialalawyer_" target="blank"><i class="fa fa-twitter" aria-label="learn more"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-item">
        <div class=" container mx-auto px-6 lg:px-16">
          <div class="nav-depart">
            <router-link to="/" aria-label="learn more">
              <div class="depart-btn">
                <span>Home</span>
              </div>
            </router-link>
          </div>

          <nav class="nav-menu mobile-menu">
            <ul>
              <li>
                <router-link to="/find-a-lawyer" aria-label="learn more">FIND LAWYERS</router-link>
              </li>
              <li><router-link to="/know-your-courts" aria-label="learn more">Know Your Courts</router-link></li>
              <li>
                <a href="#" aria-label="learn more">Resources</a>
                <ul class="dropdown">
                  <li>
                    <a href="//acelitigator.com/litigation-documents" target="blank" aria-label="learn more">Legal Documents</a>
                  </li>
                  <li>
                    <a href="//acelitigator.com/articles" target="blank" aria-label="learn more">Articles</a>
                  </li>
                  <li>
                    <a href="//acelitigator.com/newsletters" target="blank" aria-label="learn more">Knowledge Hub</a>
                  </li>
                </ul>
              </li>
              <li><router-link to="/contact-us" aria-label="learn more">Contact</router-link></li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { currentUser } from "../../database/auth";
import { auth } from "../../database";
export default {
  data() {
    return {
      myText: "hello world",
      isNavOpen: false,
      user: auth.currentUser

    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    togleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    openPhoneDialer() {
      const phoneNumber = '1234567890'; // Replace with the desired phone number
      const url = `tel:${phoneNumber}`;
      window.open(url);
    }
  },
  computed: {
    ...mapState(["practiseAreas", "counties", "allAdvocates",]),
    account() {
      return this.allAdvocates.filter((i) => i.id == auth.currentUser?.uid)[0];
    }
  },
  mounted() {
    this.$store.dispatch('fetAllAdvocates')
  }
};
</script>

<style scoped>
.mobile-sm-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  margin-top: -30px;
  position: relative;
}

.mobile-nav {
  background: #ffffff;
  position: absolute;
  top: 50px;
  right: 0px;
  z-index: 10px;

  width: 80%;
  height: fit-content;
  padding: 5px;
  display: flex;
  align-items: flex-start;
}

.mobile-nav a {
  font-size: 20px;
  color: #000000;
  margin-bottom: 10px;
}

.mobile-nav a:active {
  font-size: 20px;
  color: #e6353b;
  margin-bottom: 10px;
}

.dropdown-menu:hover {
  color: #e6353b;
}
</style>