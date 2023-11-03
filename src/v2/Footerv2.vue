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
                            <a href="//instagram.com/dialalawyerafrica"><i class="fab fa-twitter" target="blank"></i></a>
                            <a href="//twitter.com/dialalawyer_"><i class="fab fa-instagram" target="blank"></i></a>
                        </div>
                    </div>
                    <div class="ft-column link">
                        <h4>POPULAR COUNTRIES</h4>
                        <ul>
                            <li><a href="/find-a-lawyer">Kenya Lawyers</a></li>
                            <li><a href="/find-a-lawyer">Uganda Lawyers</a></li>
                            <li><a href="/find-a-lawyer">Ethopia Lawyers</a></li>
                            <li><a href="/find-a-lawyer">Rwanda Lawyers</a></li>
                            <li><a href="/find-a-lawyer">Tanzania Lawyers</a></li>
                        </ul>
                    </div>
                    <div class="ft-column link">
                        <h4>POPULAR CITIES</h4>
                        <ul>
                            <li><a href="/find-a-lawyer">Nairobi Lawyers</a></li>
                            <li><a href="/find-a-lawyer">Kisumu Lawyers</a></li>
                            <li><a href="/find-a-lawyer">Mombasa Lawyers</a></li>
                            <li><a href="/find-a-lawyer">Machakos Lawyers</a></li>
                            <li><a href="/find-a-lawyer">Nakuru Lawyers</a></li>
                        </ul>
                    </div>
                    <div class="ft-column link">
                        <h4>FOR CLIENTS</h4>
                        <ul>
                            <li><a href="//acelitigator.com/litigation-documents">Legal guides</a></li>
                            <li><a href="http://kenyalaw.org/kl/index.php?id=8281">Know Your Courts</a></li>
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