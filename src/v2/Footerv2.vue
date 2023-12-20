<template>
        <footer>
            <div class="ft-holder container">
                <div class="top-ft">
                    <div class="ft-column social">
                        <h1>Dial A Lawyer</h1>
                        <p>Find the right lawyer</p>
                        <div class="social-icons">
                            <a href="//linkedin.com/company/dial-a-lawyer-africa-by-ace-litigator" target="blank"><i class="fab fa-linkedin"></i></a>
                            <a href="//facebook.com/DialaLawyerAfrica"><i class="fab fa-facebook" target="blank"></i></a>
                            <a href="//instagram.com/dialalawyerafrica"><i class="fab fa-x-twitter" target="blank"></i></a>
                            <a href="//twitter.com/dialalawyer_"><i class="fab fa-instagram" target="blank"></i></a>
                        </div>
                    </div>
                    <div class="ft-column link">
                        <h4>POPULAR PRACTISE AREAS</h4>
                        <ul>
                            <li v-for="(area,index) of practiseAreas.slice(0,4)" :key="index"><a href="/find-a-lawyer">{{ area }}</a></li>
                        </ul>
                    </div>
                    <div class="ft-column link">
                        <h4>POPULAR STATES</h4>
                        <ul>
                            <li v-for="(county,index) of counties.slice(0,7)" :key="index"><a href="/find-a-lawyer">{{ county }}</a></li>
                           
                        </ul>
                    </div>
                    <div class="ft-column link">
                        <h4>FOR LAWYERS</h4>
                        <ul>
                            <li><a href="dashboard">Pricing</a></li>
                            <li><a href="dashboard">Advocate Chat</a></li>
                            <li><a href="dashboard">Profile Views</a></li>
                            <li><a href="dashboard">Job board</a></li>
                        </ul>
                    </div>
                </div>
                <div class="bottom-ft">
                    <div class="copyright">
                        <p>© dialalawyerafrica Limited {{ new Date().getFullYear() }}. All rights reserved.</p>
                    </div>
                    <div class="ft-legal-links">
                        <a href="#">Privacy Policy</a>
                        <span>.</span>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['counties','practiseAreas'])
    }

}
</script>

<style>

</style>