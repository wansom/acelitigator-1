<template>
  <div class="">
    <Header></Header>
    <Breadcrum></Breadcrum>

    <section class="contact-section spad">

      <div class="container mx-auto space-y-4">
        <Map></Map>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="col-lg-5">
            <div class="contact-title">
              <h4>Contacts Us</h4>
              <p>
                Ace Litigator is an online interactive platform founded by a
                team of law professionals to provide access to a high standard
                of quality legal documents and consultation services at the
                touch of a button.
              </p>
            </div>
            <div class="contact-widget">
              <div class="cw-item">
                <div class="ci-icon">
                  <i class="ti-location-pin"></i>
                </div>
                <div class="ci-text">
                  <span>Address:</span>
                  <p>I&M Building 2nd Ngong Avenue, Nairobi, Kenya</p>
                </div>
              </div>
              <div class="cw-item">
                <div class="ci-icon">
                  <i class="ti-mobile"></i>
                </div>
                <div class="ci-text">
                  <span>Phone:</span>
                  <p>+254 704 927 969</p>
                </div>
              </div>
              <div class="cw-item">
                <div class="ci-icon">
                  <i class="ti-email"></i>
                </div>
                <div class="ci-text">
                  <span>Email:</span>
                  <p>info@dailalawyerfrica.com
</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div class="contact-form">
              <div class="leave-comment">
                <h4>Leave A Comment</h4>
                <p>Our staff will call back later and answer your questions.</p>
                <form action="#" class="comment-form">
                  <div class="row">
                    <div class="col-lg-6">
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div class="col-lg-6">
                      <input type="text" placeholder="Your email" />
                    </div>
                    <div class="col-lg-12">
                      <textarea placeholder="Your message"></textarea>
                      <button type="submit" class="site-btn">
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import Breadcrum from "../components/Widgets/Breadcrum.vue";
import Map from "../components/Widgets/Map.vue";
export default {
  components: { Header, Footer, Breadcrum, Map },
};
</script>

<style></style>