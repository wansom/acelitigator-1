<template>
   <footer>
      <div class="footer-container container mx-auto">
        <div class="col one">
          <h2>Dial A Lawyer Africa</h2>
          <p>
            Empowering You with Legal Knowledge: Dial a Lawyer Africa - Your
            Trusted Partner for Legal Advice. Our mission is to provide easy
            access to legal advice and help advocates and individuals navigate
            the complex legal system in Africa. We help you stay informed and
            provide legal assistance to help you make informed decisions. With
            Dial a Lawyer Africa, you'll have the legal knowledge you need to
            succeed in and out of the courtroom
          </p>
        </div>
        <div class="col two">
          <h4>Support</h4>
          <ul>
          
            <li><a href="/find-a-lawyer">Find A Lawyer</a></li>
            <li><a href="/sign-up">My Account</a></li>
            <li><a href="/sign-up">Register</a></li>
          </ul>
        </div>
        <div class="col three">
          <h4>Company</h4>
          <ul>
            <li><a href="//https://firebasestorage.googleapis.com/v0/b/scanpal-f74da.appspot.com/o/Privacy%20Policy%20200223.docx?alt=media&token=bd536806-a1ac-4361-a56a-ddfca9885a8f">Privacy Policy</a></li>
            <li><a href="//https://firebasestorage.googleapis.com/v0/b/scanpal-f74da.appspot.com/o/Privacy%20Policy%20200223.docx?alt=media&token=bd536806-a1ac-4361-a56a-ddfca9885a8f">Terms of Service</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="bottom-footer container mx-auto">
        <p>Dial A lawyer Africa. Rights Reserved. Copyright {{ new Date().getFullYear() }}.</p>
      </div>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped>
/* == || Contact == */
/* == Footer == */
footer {
 height: fit-content;
 padding: 80px 0px 20px;
 background: #000000;
}

.footer-container {
 display: flex;
 align-items: flex-start;
 justify-content: space-between;
 flex-wrap: wrap;
}

.col {
 width: 100%;
 margin: 10px;
}

.col.one {
 max-width: 600px;
 min-width: 280px;
}

.col.one h4 {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 610;
 font-size: 22px;
 line-height: 36px;
 color: #fcfcfc;
 margin: 10px 0px;
}

.col.one p {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 400;
 font-size: 16px;
 line-height: 24px;
 color: #fcfcfc;
 margin: 10px 0px 13px;
}

.col.two,
.col.three {
 max-width: 300px;
 min-width: 280px;
 margin: 10px;
}

.col h4 {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 700;
 font-size: 16px;
 line-height: 28px;
 color: #fcfcfc;
 margin: 10px 0px;
}

.col ul {
 margin: 30px 0px 0px;
}

.col ul li {
 padding: 5px 0px;
 display: flex;
 align-items: center;
 justify-content: flex-start;
}

.col ul li a {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 500;
 font-size: 16px;
 line-height: 24px;
 color: #fcfcfc;
}

.bottom-footer p {
 font-family: "Montserrat";
 font-style: normal;
 font-weight: 500;
 font-size: 14px;
 line-height: 21px;
 color: #fcfcfc;
 margin: 10px;
}

/* == || Footer == */

</style>