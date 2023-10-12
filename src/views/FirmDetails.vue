<template>
  <div>
    <headerv-2></headerv-2>
    <main>
            <section class="profile-bn">
                <div class="profile-bn-container container">
                    <div class="profile-back-img">
                        <img src="/images/profiles/nairobi-upperhill.jpg" alt="Lawyers firm">
                    </div>
                    <div class="pfile-pg-name">
                        <div class="pfile-pg-nm-img">
                            <img :src="firm.logo" alt="Lawyers Firm Profile Image">
                            <div class="pfile-pg-names">
                                <h2 class="pfl-name">{{ firm.name }}</h2>
                                <p class="pfl-location"><a href="#">{{ firm.address }}</a>, <a href="#">{{firm.location}}</a></p>
                            </div>
                        </div>
                        <button @click="openMailClient">Contact Us</button>
                    </div>
                </div>
            </section>
            <section class="lawfrm-prfl-content">
                <div class="lawfirm-content-container container">
                    <div class="lawfirm-left">
                        <div class="head">
                            <h2>{{ firm.name }}</h2>
                        </div>
                        <div class="content">
                            <p>{{ firm.description }}</p>

                            <!-- <h2>Our Services</h2>
                            <h2 class="service-title">Civil and Commercial Cases</h2>
                            <ul>
                                <li>Breach of loan agreement, sale and purchase agreement and employment agreement</li>
                                <li>Tort and claim for damages, eviction, claim for damages to assets, reputation, body and loss of benefit</li>
                                <li>Dispute of business partnership, joint venture and sharing of benefits and commercial</li>
                                <li>Transportation and customs laws (any related laws of import and export)</li>
                                <li>Consumers protection, online sale and purchase, intellectual property, construction and technology and entertainment media</li>
                            </ul>
                            <h2 class="service-title">Register for Visa and Work Permits (For working in Thailand only)</h2>
                            <ul>
                                <li>Breach of loan agreement, sale and purchase agreement and employment agreement</li>
                                <li>Tort and claim for damages, eviction, claim for damages to assets, reputation, body and loss of benefit</li>
                                <li>Dispute of business partnership, joint venture and sharing of benefits and commercial</li>
                                <li>Transportation and customs laws (any related laws of import and export)</li>
                                <li>Consumers protection, online sale and purchase, intellectual property, construction and technology and entertainment media</li>
                            </ul> -->
                        </div>
                    </div>
                    <div class="lawfirm-right">
                        <div class="about-lawfirm-right">
                            <h3>About {{ firm.name }}</h3>
                            <p>Founded in <strong>{{ new Date(firm.year_founded).getFullYear()}}</strong></p>
                            <p><strong>{{ firm.team }}</strong> people in their team</p>
                        </div>
                        <div class="lawfirm-practice-areas">
                            <h3>Practice areas</h3>
                            <div class="areas"   v-for="i of firm.practise_areas"
                              :key="i">
                                <span>{{ i }}</span>
                               
                            </div>
                        </div>
                        <div class="lawfirm-languages">
                            <h3>Languages</h3>
                            <div class="languages"  v-for="i of firm.languages"
                              :key="i">
                                <span>{{ i }}</span>
                                
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
            <!-- <section class="prfl-areas">
                <div class="prfl-areas-container container">
                    <div class="head">
                        <h2>Practice areas</h2>
                    </div>
                    <div class="prfl-areas-content">
                        <div class="prfl-area-cards">
                            <div class="prfl-area-card">
                                <h3>Civil & Human Rights</h3>
                                <p>We have lawyer team who expert in insurance law. Accepting litigation related to disputes under life insurance/insurance contracts. </p>
                                <div class="prfl-area-card-tags">
                                    <span>Native People</span>
                                    <span>Native People</span>
                                    <span>Native People</span>
                                </div>
                            </div>
                            <div class="prfl-area-card">
                                <h3>Civil & Human Rights</h3>
                                <p>We have lawyer team who expert in insurance law. Accepting litigation related to disputes under life insurance/insurance contracts. </p>
                                <p>We have lawyer team who expert in insurance law. Accepting litigation related to disputes under life insurance/insurance contracts. </p>
                                <div class="prfl-area-card-tags">
                                    <span>Native People</span>
                                    <span>Native People</span>
                                    <span>Native People</span>
                                </div>
                            </div>
                        </div>
                        <div class="prfl-area-cards">
                            <div class="prfl-area-card">
                                <h3>Civil & Human Rights</h3>
                                <p>We have lawyer team who expert in insurance law. Accepting litigation related to disputes under life insurance/insurance contracts. </p>
                                <div class="prfl-area-card-tags">
                                    <span>Native People</span>
                                    <span>Native People</span>
                                    <span>Native People</span>
                                </div>
                            </div>
                            <div class="prfl-area-card">
                                <h3>Civil & Human Rights</h3>
                                <p>We have lawyer team who expert in insurance law. Accepting litigation related to disputes under life insurance/insurance contracts. </p>
                                <div class="prfl-area-card-tags">
                                    <span>Native People</span>
                                    <span>Native People</span>
                                    <span>Native People</span>
                                </div>
                            </div>
                        </div>
                        <div class="prfl-area-cards">
                            <div class="prfl-area-card">
                                <h3>Civil & Human Rights</h3>
                                <p>We have lawyer team who expert in insurance law. Accepting litigation related to disputes under life insurance/insurance contracts. </p>
                                <div class="prfl-area-card-tags">
                                    <span>Native People</span>
                                    <span>Native People</span>
                                    <span>Native People</span>
                                </div>
                            </div>
                            <div class="prfl-area-card">
                                <h3>Civil & Human Rights</h3>
                                <p>We have lawyer team who expert in insurance law. Accepting litigation related to disputes under life insurance/insurance contracts. </p>
                                <div class="prfl-area-card-tags">
                                    <span>Native People</span>
                                    <span>Native People</span>
                                    <span>Native People</span>
                                </div>
                            </div>
                        </div>
                        <div class="prfl-area-cards">
                            <div class="prfl-area-card">
                                <h3>Civil & Human Rights</h3>
                                <p>We have lawyer team who expert in insurance law. Accepting litigation related to disputes under life insurance/insurance contracts. </p>
                                <div class="prfl-area-card-tags">
                                    <span>Native People</span>
                                    <span>Native People</span>
                                    <span>Native People</span>
                                </div>
                            </div>
                            <div class="prfl-area-card">
                                <h3>Civil & Human Rights</h3>
                                <p>We have lawyer team who expert in insurance law. Accepting litigation related to disputes under life insurance/insurance contracts. </p>
                                <div class="prfl-area-card-tags">
                                    <span>Native People</span>
                                    <span>Native People</span>
                                    <span>Native People</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->
        </main>
    <footerv-2></footerv-2>
  </div>

</template>

<script>
import { mapState } from 'vuex';
import Footerv2 from '../v2/Footerv2.vue'
import Headerv2 from '../v2/Headerv2.vue'
export default {
  components: { Headerv2, Footerv2 },
  methods:{
    openMailClient() {
      const url = `mailto:director@acelitigator.com`;
      window.open(url);
    },
  },
  computed: {
...mapState([ "lawFirms",]),

firm(){
return this.lawFirms.find((i)=>i.id==this.$route.params.id)
}
  },
  mounted() {
    this.$store.dispatch('fetchActiveFirms')
  },

}
</script>

<style>

</style>