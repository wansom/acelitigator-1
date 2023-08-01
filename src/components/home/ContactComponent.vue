<template>
        <section class="contact" id="contact">
        <div class="contact-container container mx-auto p-4">
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
                <span>+254 704 927 969</span>
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
              title="google map"
            ></iframe>
          </div>
          <div class="contact-form">
            <a-form :form="form"  class="login-form" @submit="handleSubmit">
    <a-form-item label="Your Name">
      <a-input
        v-decorator="['name', { rules: [{ required: true, message: 'Please input your name!' }] }]"
      />
    </a-form-item>
    <a-form-item label="Email">
      <a-input
        v-decorator="['email', { rules: [{ required: true, message: 'Please input your Email!' }] }]"
      />
    </a-form-item>
    <a-form-item label="How Did You Hear About Us?">
      <a-input
        v-decorator="['platform', { rules: [{ required: true, message: 'Field is required!' }] }]"
      />
    </a-form-item>
    <a-form-item label="Leave a Message?">
      <a-textarea
        v-decorator="['message', { rules: [{ required: true, message: 'Field is required!' }] }]"
      ></a-textarea>
    </a-form-item>
    <a-form-item >
      <a-button type="primary" html-type="submit" class="w-full">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
          </div>
        </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      name:"",
      email:"",
      platform:"",
      message:"",
      
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods:{
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch("sendMail", {
        name: "ADMIN",
        email: "director@acelitigator.com",
        subject: "CONTACT FORM SUBMISSION",
        content: `full name:${values.name},email:${values.email},where did you hear about us:${values.platform},message:${values.message}`,
      }).then(()=>{
        this.$message.success('message sent successfully')
      })
        }
      });
    },
  }

}
</script>

<style scoped>
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
font-weight: 500;
font-size: 16px;
line-height: 49px;
color: #1c1b1f;
margin: 5px 0px;
}

.contact-details .title p {
font-family: "Montserrat";
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 36px;
color: #e6353b;
margin: 5px 0px;
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



</style>