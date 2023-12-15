<template>
  <div>
    <headerv-2></headerv-2>
    <main>
      <section class="banner">
        <div class="banner-container container">
          <div class="bn-text">
            <div class="bn-txt-holder">
              <h1>Find the best lawyers, <span>anywhere</span></h1>
              <p>
                From family to business law, we guide you to the right lawyer.
              </p>
              <div class="bn-btns">
                <router-link to="/find-a-lawyer">
                  <button class="find-btn">Find Lawyers</button></router-link
                >
                <span class="bn-or">or</span>
                <div class="form">
                  <div class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      fill="currentColor"
                      width="18"
                      class=""
                    >
                      <path
                        d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 240C218.5 240 240 218.5 240 192C240 165.5 218.5 144 192 144C165.5 144 144 165.5 144 192C144 218.5 165.5 240 192 240zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 32C103.6 32 32 103.6 32 192C32 207.6 37.43 229 48.56 255.4C59.47 281.3 74.8 309.4 92.14 337.5C126.2 392.8 166.6 445.7 192 477.6C217.4 445.7 257.8 392.8 291.9 337.5C309.2 309.4 324.5 281.3 335.4 255.4C346.6 229 352 207.6 352 192C352 103.6 280.4 32 192 32z"
                      ></path>
                    </svg>
                  </div>
                  <form>
                    <!-- <input type="text" placeholder="Browse lawyers by County or State"> -->
                    <a-select
                    style="height: 64px;"
                    mode="multiple"
                      class="form-select"
                      @change="handleChange"
                      placeholder="Browse lawyers by County or State"
                    >
                      <a-select-option
                        v-for="i in counties"
                        :key="i"
                      >
                        {{i }}
                      </a-select-option>
                    </a-select>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
                    "
          ></div>
        </div>
        <div class="bn-img hidden md:block">
          <svg
            fill="#ffffff"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>
          <img src="images/banner.jpg" alt="Lawyers" loading="lazy" />
        </div>
      </section>
      <section class="pr-area">
        <div class="pr-area-holder container">
          <div class="pr-head">
            <p class="top">PRACTICE AREAS</p>
            <h2 class="heading">If not sure of the service that you require,<br/> browse using the practice area.</h2>
          </div>
          <div class="pr-cards">
            <a href="/find-a-lawyer" class="pr-card">
              <img
                src="/images/services/bankcrapt.jpg"
                alt="accident and injuries" loading="lazy"
              />
              <div class="pr-card-cnt">
                <span>Bankruptcy Law and Recovery</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img
                src="/images/services/handshake.jpg"
                alt="bankruptcy debt" loading="lazy"
              />
              <div class="pr-card-cnt">
                <span>Corporate, Commercial Law</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img src="/images/services/black-handshake.jpg" alt="bussiness" loading="lazy"/>
              <div class="pr-card-cnt">
                <span>Alternative Dispute Resolution</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img
                src="/images/services/civil-human-rights.jpg"
                alt="civil human rights" loading="lazy"
              />
              <div class="pr-card-cnt">
                <span>Civil Litigation</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img
                src="/images/services/consumerrights.jpg"
                alt="consumer rights" loading="lazy"
              />
              <div class="pr-card-cnt">
                <span>Consumer Rights</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img
                src="/images/services/criminal-defense.jpg"
                alt="criminal defence" loading="lazy"
              />
              <div class="pr-card-cnt">
                <span>Criminal Defence</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img src="/images/services/power.jpg" alt="Government Relations Practice" />
              <div class="pr-card-cnt">
                <span>Government Relations Practice</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img
                src="/images/services/employment-labor.jpg"
                alt="Employment labor" loading="lazy"
              />
              <div class="pr-card-cnt">
                <span>Labor (Employment) Law</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img src="/images/services/families.jpg" alt="Family" loading="lazy" />
              <div class="pr-card-cnt">
                <span>Family</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img src="/images/services/immigrations.jpg" alt="immigration" loading="lazy"/>
              <div class="pr-card-cnt">
                <span>Immigration</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img src="/images/services/insurances.jpg" alt="insurance" loading="lazy"/>
              <div class="pr-card-cnt">
                <span>Insurance</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img
                src="/images/services/ips.jpg"
                alt="intellectual property" loading="lazy"
              />
              <div class="pr-card-cnt">
                <span>Intellectual Property</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img
                src="/images/services/lawsuits-disputes.jpg"
                alt="Lawsuits disputes" loading="lazy"
              />
              <div class="pr-card-cnt">
                <span>Lawsuits Disputes</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img
                src="/images/services/telco.jpg"
                alt="media technology and telecoms" loading="lazy"
              />
              <div class="pr-card-cnt">
                <span>Media, Technology & Telecoms</span>
              </div>
            </a>
            <a href="/find-a-lawyer" class="pr-card">
              <img src="/images/services/estate.jpg" alt="Real Estate" loading="lazy"/>
              <div class="pr-card-cnt">
                <span>Real Estate</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section class="hiworks">
        <div class="hiworks-holder container">
          <div class="hiworks-head">
            <p class="top">HOW IT WORKS</p>
            <h2 class="heading">Let us guide you to the right lawyers</h2>
            <!-- <p class="btm">Browse law firms by practice area.</p> -->
          </div>
          <div class="hiworks-cards">
            <div class="hiwork-card">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  width="24"
                  class="ml-1 inline-flex"
                >
                  <path
                    d="M36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C495.8 61.87 498.5 65.24 500.9 68.79C517.3 93.63 514.6 127.4 492.7 149.3L188.5 453.4C187.2 454.7 185.9 455.1 184.5 457.2C174.9 465.7 163.5 471.1 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9zM59.44 452.6L137.6 429.6C139.9 428.9 142.2 427.1 144.4 426.9L108.1 419.6C100.2 418 93.97 411.8 92.39 403.9L85.13 367.6C84.02 369.8 83.11 372.1 82.42 374.4L59.44 452.6zM180.7 393.3L383 191L320.1 128.1L118.7 331.3L128.1 383L180.7 393.3z"
                  ></path>
                </svg>
              </div>
              <div class="h-card-info">
                <h3>Define your needs</h3>
                <p>
                  We guide you to provide your needs by filtering out lawyers by
                  counties and practise areas.
                </p>
              </div>
            </div>
            <div class="hiwork-card">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  width="24"
                  class="ml-1 inline-flex"
                >
                  <path
                    d="M231.2 5.092C239 1.732 247.5 0 256 0C264.5 0 272.1 1.732 280.8 5.092L490.1 94.79C503.4 100.5 512 113.5 512 128C512 142.5 503.4 155.5 490.1 161.2L280.8 250.9C272.1 254.3 264.5 256 256 256C247.5 256 239 254.3 231.2 250.9L21.9 161.2C8.614 155.5 0 142.5 0 128C0 113.5 8.614 100.5 21.9 94.79L231.2 5.092zM256 48C253.1 48 251.1 48.41 250.1 49.21L66.26 128L250.1 206.8C251.1 207.6 253.1 208 256 208C258 208 260 207.6 261.9 206.8L445.7 128L261.9 49.21C260 48.41 258 48 256 48V48zM250.1 334.8C251.1 335.6 253.1 336 256 336C258 336 260 335.6 261.9 334.8L452 253.3C447.4 246.4 446.5 237.2 450.5 229.3C456.5 217.4 470.9 212.6 482.7 218.5L491.8 223.1C504.2 229.3 512 241.9 512 255.7C512 270.4 503.3 283.6 489.9 289.3L280.8 378.9C272.1 382.3 264.5 384 256 384C247.5 384 239 382.3 231.2 378.9L22.81 289.6C8.971 283.7 .0006 270.1 .0006 255C.0006 242.9 5.869 231.5 15.76 224.4L26.05 217C36.84 209.3 51.83 211.8 59.53 222.6C66.15 231.9 65.24 244.3 57.1 252.5L250.1 334.8zM59.53 350.6C66.15 359.9 65.24 372.3 57.1 380.5L250.1 462.8C251.1 463.6 253.1 464 256 464C258 464 260 463.6 261.9 462.8L452 381.3C447.4 374.4 446.5 365.2 450.5 357.3C456.5 345.4 470.9 340.6 482.7 346.5L491.8 351.1C504.2 357.3 512 369.9 512 383.7C512 398.4 503.3 411.6 489.9 417.3L280.8 506.9C272.1 510.3 264.5 512 256 512C247.5 512 239 510.3 231.2 506.9L22.81 417.6C8.971 411.7 .001 398.1 .001 383C.001 370.9 5.87 359.5 15.76 352.4L26.05 345C36.84 337.3 51.83 339.8 59.53 350.6L59.53 350.6z"
                  ></path>
                </svg>
              </div>
              <div class="h-card-info">
                <h3>Compare</h3>
                <p>
                  We introduce you to relevant law firms that match your needs.
                </p>
              </div>
            </div>
            <div class="hiwork-card">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="currentColor"
                  width="24"
                  class="ml-1 inline-flex"
                >
                  <path
                    d="M208 0C322.9 0 416 78.8 416 176C416 273.2 322.9 352 208 352C189.3 352 171.2 349.7 153.9 345.8C123.3 364.8 79.13 384 24.95 384C14.97 384 5.93 378.1 2.018 368.9C-1.896 359.7-.0074 349.1 6.739 341.9C7.26 341.5 29.38 317.4 45.73 285.9C17.18 255.8 0 217.6 0 176C0 78.8 93.13 0 208 0zM164.6 298.1C179.2 302.3 193.8 304 208 304C296.2 304 368 246.6 368 176C368 105.4 296.2 48 208 48C119.8 48 48 105.4 48 176C48 211.2 65.71 237.2 80.57 252.9L104.1 277.8L88.31 308.1C84.74 314.1 80.73 321.9 76.55 328.5C94.26 323.4 111.7 315.5 128.7 304.1L145.4 294.6L164.6 298.1zM441.6 128.2C552 132.4 640 209.5 640 304C640 345.6 622.8 383.8 594.3 413.9C610.6 445.4 632.7 469.5 633.3 469.9C640 477.1 641.9 487.7 637.1 496.9C634.1 506.1 625 512 615 512C560.9 512 516.7 492.8 486.1 473.8C468.8 477.7 450.7 480 432 480C350 480 279.1 439.8 245.2 381.5C262.5 379.2 279.1 375.3 294.9 369.9C322.9 407.1 373.9 432 432 432C446.2 432 460.8 430.3 475.4 426.1L494.6 422.6L511.3 432.1C528.3 443.5 545.7 451.4 563.5 456.5C559.3 449.9 555.3 442.1 551.7 436.1L535.9 405.8L559.4 380.9C574.3 365.3 592 339.2 592 304C592 237.7 528.7 183.1 447.1 176.6L448 176C448 159.5 445.8 143.5 441.6 128.2H441.6z"
                  ></path>
                </svg>
              </div>
              <div class="h-card-info">
                <h3>Hire your lawyer</h3>
                <p>
                  Start exchanging, and hire your lawyer when you are ready.
                </p>
              </div>
            </div>
          </div>
          <div class="hiworks-btn">
            <router-link to="/find-a-lawyer">
              <button>Find Lawyer</button></router-link
            >
          </div>
        </div>
      </section>
    </main>
    <footerv-2></footerv-2>
  </div>
</template>

<script>
import Footerv2 from "./Footerv2.vue";
import Headerv2 from "./Headerv2.vue";
import { mapState } from "vuex";
import router from '../router';
export default {
  metaInfo: {
        // if no title is specified, "Dial a Lawyer" will be used as a default title
        title: 'Home', 
        // all titles will be injected into this template
        titleTemplate: '%s | Dial a Lawyer Nigeria',
        meta: [
          { property: 'og:image', content: 'https://ng.dialalawyer.africa/img/banner.251176c6.jpg'},
          { name: 'description', content: 'Find a Lawyer by State and practise Area in Nigeria. Connect with experienced lawyers in Nigeria through DialALawyer. Find legal advice and services tailored to your needs.' },
          { name: 'twitter:site', content: '@dialalawyer' },
          { name: 'twitter:description', content: 'Connect with experienced lawyers in Nigeria through DialALawyer. Find legal advice and services tailored to your needs.' },
        ]
      },
  components: { Headerv2, Footerv2 },
  computed: {
    ...mapState([
      "counties",
    ]),
  },
  methods:{
    handleChange(value) {
      router.push('/find-a-lawyer')
    },

  }
  
};
</script>

<style scoped>
</style>