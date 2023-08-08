<template>
  <div>
    <Header></Header>
    <main>
      <section class="banner">
        <div class="banner-mask">
          <div class="banner-container container">
            <div class="banner-text">
              <h1>Aiding access to justice across the African continent.</h1>
              <p>
                Our mission is to aid access to justice across Africa by linking
                verified legal professionals in the justice sector to the market
              </p>
              <div
                class="flex flex-col md:flex-row items-center justify-center gap-4"
              >
                <router-link to="find-a-lawyer" aria-label="learn more">
                  <button class="btn-primary">
                    Find A lawyer
                  </button></router-link
                >
                <router-link to="/sign-in" aria-label="learn more">
                  <button class="btn-secondary">
                    Lawyer’s Account
                  </button></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="projects">
        <div class="projects-container container">
          <div class="projects-content">
            <div class="project">
              <div class="project-info">
                <h2>Your legal matchmaker in Africa</h2>
                <p>
                  Welcome to Dial a Lawyer - the ultimate platform for lawyers
                  and clients to connect and access legal services with ease.
                  Our platform is designed to streamline the process of finding
                  legal help, making it easy for clients to search for lawyers
                  based on their area of expertise and location. Whether you're
                  a seasoned lawyer with years of experience or just starting
                  out in your legal career, Dial a Lawyer can help you reach a
                  wider audience and connect with potential clients who might
                  not have found you otherwise. By connecting clients with
                  lawyers who specialize in their specific legal needs, we're
                  helping to ensure that everyone has access to the legal
                  services they require. Join us today and experience the
                  benefits of our streamlined, user-friendly platform.
                </p>
                <router-link to="find-a-lawyer" aria-label="learn more"
                  ><button>Find A Lawyer</button></router-link
                >
              </div>
            </div>
            <div class="project">
              <img src="/images/home/africa.png" alt="africa image" width="100%" height="100%"/>
            </div>
          </div>
        </div>
      </section>
      <section class="overview" id="overview">
        <div class="overview-container container">
          <div class="overview-text">
            <h1>Join Millions of lawyers online</h1>
            <h2>
              Unlocking Africa's Potential: Redefining access to justice in a
              Rapidly Changing World
            </h2>
            <p>
              Looking to expand your legal practice and connect with potential
              clients? Look no further than Dial a Lawyer. Our user-friendly
              platform is designed to help lawyers like you connect with clients
              who need your specific area of expertise. By signing up for Dial a
              Lawyer, you'll gain access to a wide range of clients who are
              actively searching for legal services. Whether you're just
              starting out or looking to expand your existing practice, Dial a
              Lawyer is the ultimate platform for connecting with clients and
              growing your legal career.
            </p>
            <router-link to="sign-up" aria-label="learn more"><button>Sign Up</button></router-link>
          </div>
          <div class="overview-images">
            <div class="col one">
              <img src="images/Purity-Mwangi.jpg" alt="advocate" loading="lazy" height="280px" width="100%"/>
              <img src="images/Susan-Mwango.jpg" alt="advocate" loading="lazy" height="280px" width="100%"/>
            </div>
            <div class="col two">
              <img src="images/nelima.jpg" alt="advocate" height="280px" width="100%"/>
              <img src="images/Mahmoud-Shalima.jpg" alt="advocate" loading="lazy" height="280px" width="100%" />
            </div>
          </div>
        </div>
      </section>
      <section class="research-content" id="courts">
        <div class="research-container container">
          <div class="research-item">
            <div class="research-head">
              <h1>Know Your Courts</h1>
            </div>
            <div class="research-information one">
              <div class="research-card">
                <h2>
                  Promoting Justice, Empowering Communities - Improving Access
                  to Justice Across Africa."
                </h2>
                <p>
                  Empowering You with Legal Knowledge: Dial a Lawyer Africa -
                  Your Trusted Partner for Legal Advice. Our mission is to
                  provide easy access to legal advice and help advocates and
                  individuals navigate the complex legal system in Africa. We
                  help you stay informed and provide legal assistance to help
                  you make informed decisions. With Dial a Lawyer Africa, you'll
                  have the legal knowledge you need to succeed in and out of the
                  courtroom
                </p>
                <a href="/know-your-courts" class="flex gap-2 items-center" aria-label="learn more"
                  >Get to Know Your Courts
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_772_135"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_772_135)">
                      <path
                        d="M8.0013 13.3334L7.0513 12.4001L10.7846 8.66675H2.66797V7.33342H10.7846L7.0513 3.60008L8.0013 2.66675L13.3346 8.00008L8.0013 13.3334Z"
                        fill="#e6353b"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <contact-component></contact-component>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from "../components/home/Banner.vue";
import Hero from "../components/home/Hero.vue";
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import TopLawyers from "../components/home/Top-Lawyers.vue";
import SignupBanner from "../components/home/Signup-Banner.vue";
import CardInfo from "../components/Cards/CardInfo.vue";
import { mapState } from "vuex";
import ContactComponent from "../components/home/ContactComponent.vue";
export default {
  components: {
    Hero,
    Banner,
    Header,
    Footer,
    TopLawyers,
    SignupBanner,
    CardInfo,
    ContactComponent
  },
  data() {
    return {
      myText: "hello world",
      isNavOpen: false,
      lawyers: [1, 2, 3, 4, 5, 6, 6, 6, 7, 7],
      animationDuration: "",
      currentCardIndex: 0,
      visibleNav: false,
      title: "HOME",
      description:
        "Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market",
      url: "https://dialalawyer.africa",
      image: "https://dialalawyer.africa/images/banner.jpg",
    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
      { name: 'description', content: 'Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market' },
        // Open Graph (for Facebook, LinkedIn, etc.)
        { property: "og:title", content: this.title },
        { property: "og:description", content: this.description },
        { property: "og:image", content: this.image },
        { property: "og:url", content: this.url },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.title },
        { name: "twitter:description", content: this.description },
        { name: "twitter:image", content: this.image },
        { name: "twitter:url", content: this.url },
        // Add more tags as needed
      ],
    };
  },
  created() {},
  computed: {
    ...mapState(["allAdvocates", "courtData"]),
    advocates() {
      return this.allAdvocates.filter(
        (advocate) => advocate.status === "active"
      );
    },
  },
  mounted() {},
  methods: {
    showNav() {
      this.visibleNav = !this.visibleNav;
      console.log("button clicked", this.visibleNav);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-decoration: none;
  outline: none;
  border: 0px;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.5px;
  -webkit-transition: all 400ms ease-in-out;
  -moz-transition: all 400ms ease-in-out;
  -ms-transition: all 400ms ease-in-out;
  -o-transition: all 400ms ease-in-out;
  transition: all 400ms ease-in-out;
}

html {
  scroll-behavior: smooth;
}

/* == SCROLL BAR == */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #050718;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #25518c;
}

/* == || SCROLL BAR == */
/* == GENERAL == */
.container {
  width: 100%;
  max-width: 1300px !important;
  margin: auto;
  padding: 0px 15px;
}

/* == || GENERAL == */

/* == BANNER == */
section.banner {
  height: 100vh;
  background-image: url("../../public/images/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.banner-mask {
  background-color: #0000009c;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-text {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: auto;
}

.banner-text h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  text-align: center;
  color: #fcfcfc;
}

.banner-text p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  text-align: center;
  color: #fcfcfc;
  margin: 20px 0px;
}

.banner-text .btn-primary {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background: #e6353b;
  border-radius: 5px;
  margin: auto;
  font-size: 18px;
  color: #ffffff;
}
.banner-text .btn-primary:hover {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background: transparent;
  border-radius: 5px;
  margin: auto;
  font-size: 18px;
  color: #ffffff;
  border: 2px solid #000000;
}
.banner-text .btn-secondary {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background: #000000;
  border-radius: 5px;
  margin: auto;
  font-size: 18px;
  color: #ffffff;
 
}
.banner-text .btn-secondary:hover {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background: transparent;
  border-radius: 5px;
  margin: auto;
  font-size: 18px;
  color: #ffffff;
  border: 2px solid #e6353b;
}

/* == || BANNER == */

section.overview,
section.speakers,
section.contact,
section.schedule,
section.sponsors {
  padding: 120px 0px 80px;

  background: #f5f5f5;
}

.overview-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.overview-text {
  width: 100%;
  max-width: 700px;
  min-width: 280px;
}

.overview-text h1 {
  width: fit-content;
  height: 30px;
  border-left: 8px solid #e6353b !important;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #00000a;
  padding: 0px 20px 0px;
  margin: 0px 0px 20px;
}

.overview-text h2{
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  color: #00000a;
  margin: 20px 0px;
}

.overview-text p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #00000a;
  margin-bottom: 10px;
}
.overview-text button {
  outline: none;
  width: 50%;
  height: 50px;
  background: transparent;
  border-radius: 5px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;

  color: #000000;
  border: 2px solid#e6353b;

  margin: 10px auto;
}
.overview-text button:hover {
  outline: none;
  width: 50%;
  height: 50px;
  background: transparent;
  border-radius: 5px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;

  color: #ffffff;
  background: #000000;
  border: 2px solid#000;

  margin: 10px auto;
}

.overview-images {
  width: 100%;
  max-width: 490px;
  min-width: 280px;
  display: flex;
  justify-content: space-between;
}

.overview-images .col {
  padding: 10px;
  max-width: 245px;
}

.overview-images .col img:nth-child(1) {
  margin-bottom: 20px;
}
.overview-images img {
  height: 280px;
  object-fit: cover;
}

.overview-images .col.one {
  padding-top: 60px;
}

/* == UPCOMING EVENTS == */
.upcoming-events {
  background-color: #f5f5f5;
  padding: 60px 0px;
}

.upcoming-container {
  padding: 25px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.card-scroll {
  display: flex;
  flex-wrap: wrap;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns with equal width */
  gap: 10px; /* Gap between grid items */
  margin-top: 10px;
}

.upcoming-container .up-left,
.upcoming-container .up-right {
  padding: 25px 0px;
}

.up-left .top {
  padding: 25px 0px;
  display: flex;
  justify-content: center;
}

.up-left .top h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  color: #1c1b1f;
}

.up-left .bottom {
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bottom .up-card {
  background: #fcfcfc;
  /* shadow */
  box-shadow: 10px 32px 72px rgba(51, 51, 51, 0.04);
  border-radius: 5px;
  height: 334px;
  width: 45vw;
  padding: 20px;
  position: relative;
  margin: 10px 5px;
  display: flex;
}

.bottom .up-card img {
  width: 170px;
  height: 170px;
  border-radius: 100%;
  object-fit: cover;
}
.bottom .up-card .right {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.up-card-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 0px;
}

.up-card-info .left {
  padding: 10px 0px 0px;
}

.up-card-info .left span:nth-child(1) {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #1c1b1f;
}

.up-card-info .left span:nth-child(3) {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #1c1b1f;
}

.up-card-info .right {
  padding: 0px 0px 0px 20px;
}

.up-card-info .right span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1c1b1f;
}

.bottom-more {
  padding: 20px 0px;
}

.bottom-more button {
  padding: 16px 24px;
  height: 50px;
  background: #000000;
  border-radius: 5px;
  outline: none;
  border: 0px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #fcfcfc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.up-right {
  max-width: 384px;
  width: 100%;
  min-width: 280px;
}

.up-right .top {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 25px 0px;
}

.up-right .top span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #1c1b1f;
}

.up-right .news {
  padding: 10px 0px;
}

.up-right .news .top {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.up-right .news .top .left span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 120%;
  /* identical to box height, or 16px */
  text-align: center;
  text-transform: uppercase;
  color: #fcfcfc;
}

.up-right .news .top .right {
  width: 149px;
  height: 34px;
  background: #fcfcfc;
  border-radius: 0px 6px 6px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.up-right .news .top .right span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 120%;
  /* identical to box height, or 16px */
  text-align: center;
  text-transform: uppercase;
  color: #1c1b1f;
}

.up-right .news .bottom h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #1c1b1f;
  margin: 0px 0px 5px;
}

.up-right .news .bottom p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1c1b1f;
  margin: 10px 0px;
}

/* == || UPCOMING EVENTS == */
/* == OFFERS == */
.offers {
  padding: 60px 0px;
}

.offer-head {
  padding: 40px 0px 20px;
}

.offer-head h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  text-align: center;
  color: #1c1b1f;
}

.offer-content {
  padding: 10px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.offer-card {
  width: 100%;
  z-index: 0;
  position: relative;
  margin: 30px 0px;
}
.offer-card .process {
  height: 64px;
  width: 64px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e6353b;
  margin-top: -60px;
  margin-bottom: 20px;
}

.offer-card .process span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 44px;
  text-align: center;
  color: #fcfcfc;
  margin: 10px auto;
}

.offer-info {
  width: 100%;
  height: 313px;
  background: #fcfcfc;
  border: 1px solid #e0e2f1;
  border-radius: 5px;
  z-index: 5;
  margin: auto 0px;
  text-align: center;
  border-radius: 15px;
  padding: 32px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.offer-info h3 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;
  text-align: center;
  color: #1c1b1f;
  margin: 10px auto;
}

.offer-info p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #1c1b1f;
  margin: 10px auto;
  max-width: 200px;
}

.offer-info button {
  background: transparent;
  border: 2px solid #e6353b;
  width: 240px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  margin-top: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;

  color: #000000;
}

/* == || OFFERS == */
/* == Projects == */
.projects {
  padding: 60px 0px;
  border-radius: 5px;
  background-image: url(../../public/images/home/about-banner.jpg);
}

.projects-head {
  padding: 40px 0px 20px;
}

.projects-head h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  text-align: center;
  color: #1c1b1f;
}

.projects-content {
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.project {
  height: fit-content;
  width: 100%;
  max-width: 584px;
  min-width: 280px;
  margin: 10px;
  border-radius: 5px;
}

.project img {
  width: 100%;
}

.project .project-info {
  padding: 50px 30px;
}

.project-info h2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;
  color: #1c1b1f;
  margin: 10px 0px;
}

.project-info p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #1c1b1f;
  margin: 10px 0px;
}

.project-info button {
  outline: none;
  border: 0;
  width: 95%;
  height: 50px;
  background: #e6353b;
  border-radius: 5px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #fcfcfc;
  margin: 10px auto;
}
.project-info button:hover {
  outline: none;
  border: 0;
  width: 95%;
  height: 50px;
  background: transparent ;
  border-radius: 5px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin: 10px auto;
  border: 2px solid #e6353b ;
}

/* == || Projects == */
/* == Think == */
.think-tanks {
  padding: 60px 0px;
}

.think-head {
  padding: 40px 0px 20px;
}

.think-head h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  text-align: center;
  color: #1c1b1f;
}

.think-tank-content {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.think-tank-card {
  height: fit-content;
  width: 100%;
  max-width: 584px;
  min-width: 280px;
  margin: 10px;
}

.think-tank-card img {
  width: 100%;
}

.think-tank-info {
  padding: 100px 0px 50px;
}

.think-tank-info h2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;
  color: #1c1b1f;
  margin: 10px 0px;
}

.think-tank-info p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1c1b1f;
  margin: 10px 0px;
}

.think-tank-info button {
  outline: none;
  border: 0;
  width: 95%;
  height: 50px;
  background: #25518c;
  border-radius: 5px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #fcfcfc;
  margin: 10px auto;
}

/* == || Think == */

/* == RESEARCH == */

.research-content {
  padding: 60px 0px;
  height: fit-content;
}

.research-head {
  padding: 20px 0px;
  border-bottom: 1px solid #9a9a9a;
}

.research-head h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  color: #1c1b1f;
}

.research-information {
  margin: 40px 0px;
  height: fit-content;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.research-information.one {
  background-image: url("../../public/images/courts.jpg");
}

.research-card {
  max-width: 620px;
  min-width: 280px;
  position: absolute;
  height: fit-content;
  bottom: 0px;
  left: 0px;
  background: #ffffff;
  padding: 40px;
}

.research-card h2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #000000;
}

.research-card p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  margin: 20px 0px;
}

.research-card a {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e6353b;
  border-radius: 5px;
}
.research-card a :hover{
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  border-radius: 5px;
}
/* == || RESEARCH == */

/* == SINGLE RESEARCH == */
section.single-research-banner {
  background-image: url("https://acelitigator.com/wp-content/uploads/2022/10/Analysis-of-Supreme-Court-30-of-2019.png") !important;
}

h1.small-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px !important;
  line-height: 49px !important;
  color: #fcfcfc;
}

section.single-research {
  padding: 60px 0px;
  background: #eff1fb;
}

.single-research-head {
  padding: 20px 0px 0px;
}
.team-content.research {
  justify-content: space-between !important;
}
.single-research-head h3 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #25518c;
}

.single-research-text {
  padding: 0px 0px 40px;
}

.single-research-text p {
  margin: 20px 0px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1c1b1f;
}

.single-research-cards {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.single-research-card {
  width: 100%;
  max-width: 390px;
  min-width: 280px;
  min-height: 340px;
  margin: 10px;
  padding: 40px;
  background-color: #25518c;
}

.single-research-card h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;
  color: #fcfcfc;
}

.single-research-card p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcfc;
  margin: 20px 0px 10px;
}

.method-cards {
  padding: 20px 0px;
}

.methods {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.method-card {
  width: 50%;
  min-width: 280px;
  height: fit-content;
  padding: 20px;
  background: #fcfcfc;
}

.method-card h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #1c1b1f;
}

.method-card p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #1c1b1f;
  margin: 20px 0px 0px;
}

.method-height {
  height: 147px;
  width: 50%;
  min-width: 280px;
}
.black-events.events {
  justify-content: space-between !important;
}
.single-outcome {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 60px 0px;
}
.single-research-text.listing {
  max-width: 620px;
  min-width: 280px;
  width: 100%;
}
.single-outcome .right {
  max-width: 580px;
  min-width: 280px;
  width: 100%;
}
.single-outcome .right img {
  width: 100%;
}
.single-listing {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 0px;
}
.single-listing p.listing {
  margin: 0px 0px 0px 20px;
}
.publications-research {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px 0px;
}
.publications-research .content-info {
  background-color: #ffffff !important;
  padding: 20px;
  position: relative;
  width: 100%;
  max-width: 380px;
  min-width: 280px;
  margin: 10px;
}

.publications-research .content-info .year {
  position: absolute;
  width: 77px;
  height: 44px;
  right: 20px;
  top: -22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #25518c;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #fcfcfc;
}

.publications-research .content-info .top {
  padding: 0px 0px 10px;
}

.publications-research .content-info .bottom {
  padding: 10px 0px 0px;
}

.publications-research .content-info .top span.no-margin {
  margin: 0px !important;
}

.publications-research .content-info .top span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 150%;
  margin: 0px 4px 0px 0px;
}

.publications-research .content-info .top span:nth-child(1),
.publications-research .content-info .top span:nth-child(5) {
  color: #1c1b1f;
}

.publications-research .content-info .top span:nth-child(2) {
  color: #25518c;
}

.publications-research .content-info .top span:nth-child(4) {
  color: #25518c;
}

.publications-research .content-info .top span:nth-child(6) {
  color: #25518c;
}

.publications-research .content-info .bottom h2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #1c1b1f;
}

.publications-research .content-info .more-info,
.publications-research .content-info .more-info span {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 150%;
  color: #1c1b1f;
  margin: 0px 10px 0px 0px;
}

.publications-research .content-info .more-info span svg {
  margin: 0px 1.25px;
}
/* == || SINGLE RESEARCH == */

/* == EVENTS == */
section.filter {
  padding: 80px 0px;
  background: #fcfcfc;
}

.filter-top .head {
  padding: 10px 0px;
}

.filter-top .head h2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  color: #1c1b1f;
}

.filter-form,
.filter-form form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.floating-card .hold {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.floating-card span.price {
  height: 40px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #25518c;
}

.floating-card span.share,
.floating-card span.love {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 0px 8px;
  color: #1c1b1f;
}

.floating-card span i {
  font-size: 20px;
  color: #1c1b1f;
}

.tab-card-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 0px;
}

.tab-card-info .left {
  padding: 10px 0px 0px;
}

.tab-card-info .left span:nth-child(1) {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #1c1b1f;
}

.tab-card-info .left span:nth-child(3) {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #1c1b1f;
}

.tab-card-info .right {
  padding: 0px 0px 0px 20px;
}

.tab-card-info .right a {
  text-decoration: none;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;
  color: #25518c;
}

.tab-card-info .right span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1c1b1f;
}

.filter-top .pagination {
  width: fit-content;
  margin: auto;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px 0px 20px;
}

.filter-top .pagination .page {
  width: 40px;
  height: 40px;
  background: #eff1fb;
  margin: 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.filter-top .pagination .page span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #1c1b1f;
  cursor: pointer;
}

.filter-top .pagination .page.more {
  width: 82px;
}

/* == || EVENTS == */

/* == RESPONSIVE == */
/* Medium devices (landscape tablets, 768px and up) */
@media screen and (max-width: 994px) {
  header {
    display: none;
  }

  nav {
    height: 120px;
  }

  .nav.logo {
    display: block;
    background: #ffffff;
  }

  .menu-btn {
    color: #1c1b1f;
  }

  .links {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    right: -100%;

    display: block;
    padding: 80px 0px 0px;
    text-align: centers;
    transition: all ease 0.5s;

    z-index: 5;
    background-color: #ffffff;
    overflow: auto;
  }

  .links a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100% !important;
    height: 50px;
    color: #1c1b1f;
    padding: 0px 50px 0px;
  }

  .links a:hover {
    background-color: #de4404;
    color: #ffffff;
  }

  .links span {
    cursor: pointer;
  }

  .links.active {
    right: 0%;
  }

  .cancel-btn {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    box-shadow: 2px 2px 12px #0e315533;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1c1b1f;
    font-size: 18px;
    position: absolute;
    top: 12px;
    right: 20px;
  }

  .banner-text h1 {
    font-size: 40px;
    line-height: 50px;
  }

  .banner-text p {
    font-size: 20px;
    line-height: 30px;
  }

  .banner-text button {
    width: 90%;
    max-width: 320px;
  }

  .upcoming-container {
    justify-content: space-evenly;
  }

  .up-left .top h1 {
    font-size: 25px;
    line-height: 45px;
  }

  .up-left .bottom {
    justify-content: space-evenly;
  }

  .bottom-more button {
    width: 100%;
    max-width: 384px;
    min-width: 280px;
  }

  .tab-slide {
    justify-content: space-evenly;
  }
}

/* Extra small devices (phones, 600px and down) */
@media screen and (max-width: 640px) {
  .projects {
    padding: 10px 0px;
    border-radius: 5px;
    background-image: url(../../public/images/home/about-banner.jpg);
  }

  .projects-head {
    padding: 0px 10px;
  }

  .projects-head h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    color: #1c1b1f;
  }

  .projects-content {
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .project .project-info {
    padding: 10px 0px;
  }
  .project-info h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 36px;
    color: #1c1b1f;
    margin: 10px 0px;
    text-align: center;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Two columns with equal width */
    gap: 10px; /* Gap between grid items */
    margin-top: 10px;
  }
  .banner-text h1 {
    font-size: 30px;
    line-height: 35px;
  }

  .banner-text p {
    font-size: 16px;
    line-height: 33px;
  }

  .banner-text button {
    width: 100%;
    max-width: 384px;
  }

  .up-left .top h1 {
    font-size: 30px;
    line-height: 35px;
  }

  .bottom .up-card {
    max-width: 320px;
  }

  .bottom-more button {
    width: 90%;
    max-width: 320px;
    min-width: 250px;
  }
  .overview-text h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #00000a;
    margin-top: 40px;
  }

  .tab-slide {
    justify-content: space-evenly !important;
  }
  .offer-content {
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  .offer-info {
    width: 100%;
    height: fit-content;
    background: #fcfcfc;
    border: 1px solid #e0e2f1;
    border-radius: 5px;
    z-index: 5;
    margin: auto 0px;
    text-align: center;
    border-radius: 15px;
    padding: 32px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
  }
  .overview-images {
    width: 100%;
    max-width: 490px;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .overview-images .col {
    padding: 10px;
    max-width: 100%;
  }

  .overview-images .col img:nth-child(1) {
    margin-bottom: 20px;
  }
  .overview-images img {
    height: 280px;
    object-fit: cover;
  }

  .overview-images .col.one {
    padding-top: 60px;
  }
  .upcoming-events {
    display: none;
  }
  .research-information {
    margin: 40px 0px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .research-information.one {
    background-image: url("https://acelitigator.com/wp-content/uploads/2022/10/Analysis-of-Supreme-Court-30-of-2019.png");
  }

  .research-card {
    width: 100%;
    height: fit-content;
    background: #ffffff;
    padding: 40px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .links {
    padding: 0px 20px;
    display: block;
    display: flex;
    align-items: center !important;
    justify-content: space-between;
  }

  nav {
    height: 50px;
    background: #000000;
  }

  .menu-btn {
    color: #ffffff;
  }

  .nav.logo {
    display: none;
  }

  .menu-bar {
    display: none !important;
  }

  .cancel {
    display: none;
  }

  .banner-text h1 {
    font-size: 60px;
    line-height: 90px;
  }

  .banner-text p {
    font-size: 18px;
    line-height: 36px;
  }

  .banner-text button {
    width: 100%;
    max-width: 384px;
  }

  .up-left .top h1 {
    font-size: 40px;
    line-height: 60px;
  }

  .bottom-more button {
    width: 100%;
    max-width: 384px;
    min-width: 280px;
  }

  form .control-group.name {
    width: 100%;
    max-width: 280px;
  }

  .upcoming-container {
    justify-content: space-between;
  }

  .up-left .bottom {
    justify-content: space-between;
  }

  .tab-slide {
    justify-content: space-evenly;
  }
}

/* == || RESPONSIVE == */
</style>
