<template>
  <div>
    <Header></Header>

    <main>
      <section class="banner">
        <div class="banner-mask">
          <div class="banner-container container">
            <div class="banner-text">
              <h1>Aiding access to justice across the African continent</h1>
              <p>
                Our mission is to aid access to justice across Africa by
                linking verified legal professionals in the justice sector to the market
              </p>
              <div  class="flex flex-col md:flex-row items-center justify-center gap-4"> <router-link to="find-a-lawyer">
                <button class="btn-primary">Find A lawyer</button></router-link
              > <router-link to="/sign-in">
                <button class="btn-secondary">Advocate Account</button></router-link
              ></div>
             
            </div>
          </div>
        </div>
      </section>
      <section class="projects">
        <div class="projects-container container">
          <div class="projects-head">
            <h1>About Us</h1>
          </div>
          <div class="projects-content">
            <div class="project">
              <div class="project-info">
                <h2>
                  Your legal matchmaker in Africa
                </h2>
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
                <router-link to="find-a-lawyer"
                  ><button>Find A Lawyer</button></router-link
                >
              </div>
            </div>
            <div class="project">
              <img src="/images/home/africa.png" alt="africa image" />
            </div>
          </div>
        </div>
      </section>
      <section class="overview" id="overview">
        <div class="overview-container container">
          <div class="overview-text">
            <h3>Join Millions of lawyers online</h3>
            <h1>
              Unlocking Africa's Potential: Redefining access to justice in a
              Rapidly Changing World
            </h1>
            <p>
              Looking to expand your legal practice and connect with potential
              clients? Look no further than Dial a Lawyer. Our user-friendly
              platform is designed to help lawyers like you connect with clients
              who need your specific area of expertise. By signing up for Dial a
              Lawyer, you'll gain access to a wide range of clients who are
              actively searching for legal services. Whether you're just starting out or
              looking to expand your existing practice, Dial a Lawyer is the
              ultimate platform for connecting with clients and growing your
              legal career.
            </p>
            <router-link to="sign-up"><button>Sign Up</button></router-link>
          </div>
          <div class="overview-images">
            <div class="col one">
              <img src="images/stella.png" alt="" />
              <img src="images/Susan-Mwango.jpg" alt="" />
            </div>
            <div class="col two">
              <img src="images/brian.png" alt="" />
              <img src="images/Mahmoud-Shalima.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="offers">
        <div class="offers-container container">
          <div class="offer-head">
            <h1>Advocate Signup Process</h1>
          </div>
          <div class="offer-content">
            <div class="offer-card">
              <div class="offer-info">
                <div class="process"><span>01</span></div>

                <h3>Create A free Account</h3>
                <p>
                 a simple account creation process to kickstart your advocate signup journey
                </p>
                <a href="sign-up">
                  <button>
                    Get Started
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_69_173"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#000000" />
                      </mask>
                      <g mask="url(#mask0_69_173)">
                        <path
                          d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z"
                          fill="#FCFCFC"
                        />
                      </g>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div class="offer-card">
              <div class="offer-info">
                <div class="process"><span>02</span></div>
                <h3>Complete and submit Profile</h3>
                <p>
                 Upload legal documents help us complete the  KYC process
                </p>
                <a href="sign-up">
                  <button>
                    Get Started
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_69_173"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_69_173)">
                        <path
                          d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z"
                          fill="#FCFCFC"
                        />
                      </g>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div class="offer-card">
              <div class="offer-info">
                <div class="process"><span>03</span></div>
                <h3>Pay for monthly Subscription</h3>
                <p>
                 Pay a monthly subscription of KSH 500 and get your account approved
                </p>
                <a href="sign-up">
                  <button>
                    Get Started
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_69_173"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_69_173)">
                        <path
                          d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z"
                          fill="#FCFCFC"
                        />
                      </g>
                    </svg>
                  </button>
                </a>
              </div>
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
              <!-- <div class="research-status">
                <p>Ongoing Project</p>
              </div> -->
              <div class="research-card">
                <h3>
                  Promoting Justice, Empowering Communities
                  - Improving Access to Justice Across Africa."
                </h3>
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
                <a
                  href="/know-your-courts"
                  class="flex gap-2 items-center"
                  >Learn More
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
      <section class="contact" id="contact">
        <div class="contact-container container">
          <div class="contact-details">
            <div class="title">
              <h1>Contact Us</h1>
              <p>Share your questions and our team will get back to you</p>
            </div>
            <div class="details">
              <div class="detail">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.27013 3.71L10.3401 2.87C11.1501 2.54 12.0801 2.93 12.4101 3.75L13.0401 5.29C13.3701 6.1 12.9801 7.03 12.1601 7.37L9.87013 8.3C10.1101 9.45 10.4801 10.8 11.0601 12.26C11.7101 13.91 12.4601 15.27 13.1401 16.36L15.4301 15.43C16.2501 15.1 17.1801 15.49 17.5101 16.31L18.1401 17.85C18.4701 18.67 18.0801 19.6 17.2601 19.93L15.1901 20.77L15.1501 20.79C12.9201 21.69 10.3501 20.82 9.19013 18.72C8.41013 17.31 7.64013 15.73 6.93013 13.96C6.29013 12.36 5.79013 10.83 5.41013 9.41C4.78013 7.08 6.00013 4.65 8.23013 3.74L8.27013 3.71Z"
                    stroke="#25518C"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>+231 794 342 159</span>
              </div>
              <div class="detail">
                <svg
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.09 14.21H3.5C2.4 14.21 1.5 13.31 1.5 12.21V2.5C1.5 1.95 1.95 1.5 2.5 1.5H17.09C17.64 1.5 18.09 1.95 18.09 2.5V12.21C18.09 13.31 17.19 14.21 16.09 14.21Z"
                    stroke="#25518C"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.8501 2.13L9.2401 7.27C9.5701 7.5 10.0201 7.5 10.3501 7.27L17.7401 2.13"
                    stroke="#25518C"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>info@dialalwayerafrica.com</span>
              </div>
              <div class="detail">
                <svg
                  width="16"
                  height="21"
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.39 7.98998C14.39 12.14 10.34 17.13 8.68999 18.99C8.31999 19.4 7.67999 19.4 7.30999 18.99C5.65999 17.13 1.60999 12.14 1.60999 7.98998C1.60999 4.45998 4.46999 1.59998 7.99999 1.59998C11.53 1.59998 14.39 4.45998 14.39 7.98998Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.98993 10.5499C9.40378 10.5499 10.5499 9.40378 10.5499 7.98993C10.5499 6.57608 9.40378 5.42993 7.98993 5.42993C6.57608 5.42993 5.42993 6.57608 5.42993 7.98993C5.42993 9.40378 6.57608 10.5499 7.98993 10.5499Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>I&M Bank House, 2nd Ngong Avenue, Upper Hill,</span>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.201152674967!2d36.8110401!3d-1.294348!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11e9e9f172db%3A0xde236816f452452b!2sI%26M%20Bank%202nd%20Ngong%20Avenue%20Branch%2C%20Ngong%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1678351069397!5m2!1sen!2ske"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="contact-form">
            <form action="">
              <div class="names">
                <div class="control-group name">
                  <label for="name">First Name</label><br />
                  <input type="text" placeholder="John" />
                </div>
                <div class="control-group name">
                  <label for="name">Last Name</label><br />
                  <input type="text" name="email" placeholder="Kamana" />
                </div>
              </div>
              <div class="control-group">
                <label for="email">Email Address</label><br />
                <input
                  type="email"
                  name="email"
                  placeholder="johnkamara@gmail.com"
                />
              </div>
              <div class="control-group">
                <label for="company">Company Name</label><br />
                <input
                  type="text"
                  name="company"
                  placeholder="Adanian Labs Limited"
                />
              </div>
              <div class="control-group">
                <label for="how">How Did You Hear About Us?</label><br />
                <input type="text" name="how" placeholder="Linkedin" />
              </div>
              <div class="control-group">
                <label for="">Leave a Message?</label><br />
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Type Your Message Here..."
                ></textarea>
              </div>
              <div class="control-group checkbox">
                <input type="checkbox" id="checkboxed" />
                <label for=""
                  >By clicking on “Send Message” you agree to our Terms &
                  Conditions and Privacy Statement.</label
                >
              </div>
              <div class="control-group">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
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
import KnowYourCourts from "../components/home/Know-Your-Courts.vue";
import AllLawyers from "../components/home/All-Lawyers.vue";
import SignupBanner from "../components/home/Signup-Banner.vue";
import CardInfo from "../components/Cards/CardInfo.vue";
import { mapState } from "vuex";
import Services from "../components/home/Services.vue";
import Slick from "vue-slick";
export default {
  components: {
    Hero,
    Banner,
    Header,
    Footer,
    TopLawyers,
    KnowYourCourts,
    AllLawyers,
    SignupBanner,
    Services,
    CardInfo,
    Slick,
  },
  data() {
    return {
      myText: "hello world",
      isNavOpen: false,
      lawyers: [1, 2, 3, 4, 5, 6, 6, 6, 7, 7],
      animationDuration: "",
      currentCardIndex: 0,
      visibleNav: false,
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
  mounted() {
  },
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
  background-image: url("https://acelitigator.com/wp-content/uploads/2022/10/Analysis-of-Supreme-Court-30-of-2019.png");
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

.banner-text  .btn-primary {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background: #e6353b;
  border-radius: 5px;
  margin: auto;
  font-size: 24px;
  color: #ffffff;
}
.banner-text  .btn-secondary {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background: #000000;
  border-radius: 5px;
  margin: auto;
  font-size: 24px;
  color: #ffffff;
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

.overview-text h3 {
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

.overview-text h1 {
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
  border: 2px solid#e6353b ;

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
  font-size: 24px;
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
  line-height: 24px;
  text-align: center;
  color: #1c1b1f;
  margin: 10px auto;
  max-width: 200px;
}

.offer-info button {
  background: transparent;
  border:2px solid #e6353b;
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
  background-image: url(../../public/images/home/about-banner.png);
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
  flex-wrap: wrap;
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
  font-size: 24px;
  line-height: 36px;
  color: #1c1b1f;
  margin: 10px 0px;
}

.project-info p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
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
  font-size: 24px;
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
/* == Contact == */
section.contact {
  padding: 60px 0px;
  background-color: #f5f5f5;
}

.contact-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.contact-details,
.contact-form {
  padding: 10px;
  width: 100%;
  max-width: 584px;
  min-width: 280px;
}

.contact-details .title {
  padding: 0px 0px 16px;
}

.contact-details .title h1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #1c1b1f;
  margin: 10px 0px;
}

.contact-details .title p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #e6353b;
  margin: 10px 0px;
}

.contact-details .details {
  padding: 16px 0px;
}

.details .detail {
  height: 48px;
  width: fit-content;
  padding: 12px 24px;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin: 16px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.details .detail span {
  margin: 0px 16px 0px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1c1b1f;
}

.contact-details iframe {
  margin: 30px 0px 10px;
  width: 100%;
  max-width: 560px;
  min-width: 260px;
  height: 100%;
  max-height: 287px;
  aspect-ratio: 560/287;
}

.contact-form form .names {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

form .control-group {
  width: 100%;
  max-width: 564px;
  min-width: 260px;
  padding: 10px;
}

form .control-group label {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1c1b1f;
  padding: 0px 0px 10px;
}

form .control-group input {
  outline: none;
  width: 100%;
  height: 50px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1c1b1f;
  padding: 13px 20px;
}

form .control-group input::placeholder,
form .control-group textarea::placeholder {
  color: #ffffff;
}

form textarea {
  height: 150px;
  width: 100%;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: #ffffff;
  max-width: 564px;
  min-width: 260px;
  padding: 13px 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1c1b1f;
}

.control-group.checkbox {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.control-group.checkbox label {
  font-size: 12px;
  line-height: 18px;
  margin: 0px 0px 0px 10px;
}

#checkboxed {
  width: 18px !important;
  height: 18px !important;
  border: 2px solid #ffffff !important;
  border-radius: 2px !important;
  background-color: #ffffff !important;
}

.control-group button {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  height: 50px;
  width: 100%;
  background: #e6353b;
  border-radius: 5px;
}


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
  background-image: url("https://acelitigator.com/wp-content/uploads/2022/10/Analysis-of-Supreme-Court-30-of-2019.png");
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

.research-card h3 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
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
  font-size: 24px;
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
  font-size: 24px;
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
  font-size: 24px;
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
    background-image: url(../../public/images/home/about-banner.png);
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
    font-size: 24px;
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
    font-size: 24px;
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
    font-size: 24px;
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