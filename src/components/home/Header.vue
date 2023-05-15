<template>
  <section>
    <div class="d-block d-md-none">
      <div class="mobile-sm-menu">
        <router-link to="/">
          <img
            src="images/dial-logo.png"
            alt=""
            style="height: 50px; object-fit: contain"
          />
        </router-link>
        <div>
          <a-icon type="bars" style="font-size: 40px" @click="togleNav" />
        </div>
        <nav class="mobile-nav" v-if="isNavOpen">
          <ul>
            <li class="active"><router-link to="/">Home</router-link></li>
            <li>
              <router-link to="/find-a-lawyer">Find A Lawyer</router-link>
            </li>
            <li><a href="/know-your-courts">Know Your Courts</a></li>
            <li>
              <a href="//acelitigator.com">Resources</a>
            </li>
            <li><router-link to="contact-us">Contact</router-link></li>
            <li><router-link to="sign-in">Login </router-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <header class="header-section">
      <div class="header-top">
        <div class="container">
          <div class="ht-left">
            <div class="logo">
              <router-link to="/">
                <img
                  src="images/dial-logo.png"
                  alt=""
                  style="height: 80px; object-fit: contain"
                />
              </router-link>
            </div>
            <div class="mail-service">
              <i class="fa fa-envelope"></i>
              info@dialalawyerafrica.com
            </div>
            <div class="phone-service">
              <i class="fa fa-phone"></i>
              +254 704 927 969
            </div>
          </div>

          <div class="ht-right d-none d-md-block">
            <!-- <a href="#" class="login-panel"><i class="fa fa-user"></i>ACCOUNT</a> -->
            <a-dropdown>
              <a class="login-panel" @click="(e) => e.preventDefault()"
                ><i class="fa fa-user"></i>
                ACCOUNT
              </a>
              <a-menu slot="overlay">
                <a-menu-item key="1">
                  <a href="/sign-up">Create Account</a>
                </a-menu-item>
                <a-menu-item key="2">
                  <a href="/sign-in">Login</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>

            <div class="top-social">
              <a href="//https://www.linkedin.com/company/ace-litigator/"
                ><i class="fa fa-facebook"></i
              ></a>
              <a href="//https://www.linkedin.com/company/ace-litigator/"
                ><i class="fa fa-twitter"></i
              ></a>
              <a href="//https://www.linkedin.com/company/ace-litigator/"
                ><i class="fa fa-linkedin"></i
              ></a>
              <a href="//https://www.linkedin.com/company/ace-litigator/"
                ><i class="fa fa-pinterest"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-item">
        <div class="container">
          <div class="nav-depart">
            <router-link to="/">
              <div class="depart-btn">
                <span>Home</span>
              </div>
            </router-link>
          </div>

          <nav class="nav-menu mobile-menu">
            <ul>
              <li class="active">
                <router-link to="/find-a-lawyer">FIND LAWYERS</router-link>
              </li>
              <li><router-link to="/know-your-courts">Know Your Courts</router-link></li>
              <li>
                <a href="#">Resources</a>
                <ul class="dropdown">
                  <li>
                    <a href="//acelitigator.com" target="blank"
                      >Legal Documents</a
                    >
                  </li>
                  <li>
                    <a href="//acelitigator.com" target="blank">Articles</a>
                  </li>
                  <li>
                    <a href="//acelitigator.com" target="blank">Webiners</a>
                  </li>
                </ul>
              </li>
              <li><router-link to="contact-us">Contact</router-link></li>
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
export default {
  data() {
    return {
      myText: "hello world",
      isNavOpen: false,
    };
  },
  methods: {
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
    ...mapState(["practiseAreas", "counties"]),
  },
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
</style>
