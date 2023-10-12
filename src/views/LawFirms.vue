<template>
       <div>
        <headerv-2></headerv-2>
        <main>
            <a-drawer
      title="Create a new account"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Name">
              <a-input
                v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: 'Please enter user name' }],
                  },
                ]"
                placeholder="Please enter your name"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Email">
              <a-input
                v-decorator="[
                  'email',
                  {
                    rules: [{ required: true, message: 'please enter your email' }],
                  },
                ]"
                style="width: 100%"
              
                placeholder="please enter email"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="Message">
              <a-textarea
                v-decorator="[
                  'description',
                  {
                    rules: [{ required: true, message: 'Please enter your message to the firm' }],
                  },
                ]"
                :rows="4"
                placeholder="Please enter your message to the firm"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="onClose">
          Submit
        </a-button>
      </div>
    </a-drawer>
            <section class="service-bn">
                <div class="service-bn-container container">
                    <h1 class="title">Get the best Law Firms</h1>
                    <p class="p-info-nd">Or refine your search by selecting a city, get contacted by law firms.</p>
                    <!-- <div class="service-form">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" width="18" class=""><path d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 240C218.5 240 240 218.5 240 192C240 165.5 218.5 144 192 144C165.5 144 144 165.5 144 192C144 218.5 165.5 240 192 240zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 32C103.6 32 32 103.6 32 192C32 207.6 37.43 229 48.56 255.4C59.47 281.3 74.8 309.4 92.14 337.5C126.2 392.8 166.6 445.7 192 477.6C217.4 445.7 257.8 392.8 291.9 337.5C309.2 309.4 324.5 281.3 335.4 255.4C346.6 229 352 207.6 352 192C352 103.6 280.4 32 192 32z"></path></svg>
                        </div>
                        <form action="/">
                            <input type="text" placeholder="Enter a city or country">
                        </form>
                    </div> -->
                    <a href="#search">
                        <div class="arrow-dwn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="30" height="30" class=""><defs></defs><path class="fa-primary" d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 402.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 476.9 232.2 480 224 480z"></path><path class="fa-secondary" d="M224 288C215.8 288 207.6 284.9 201.4 278.6l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 210.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 284.9 232.2 288 224 288z"></path></svg>
                    </div>
                    </a>
                </div>
            </section>
            <section class="service-listings">
                <div class="sv-lg-breadcrumb">
                    <div class="sv-lg-bc-holder container">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" width="20" class=""><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
                        </a>
                        <span class="icon">
                            <svg class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
                            </svg>
                        </span>
                        <a href="/find-a-lawyer">Find Lawyers</a>
                        <span class="icon">
                            <svg class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
                            </svg>
                        </span>
                        <span class="s-name">Law Firms</span>
                    </div>
                </div>
                <div class="s-listings" id="search">
                    <div class="sv-lg-container container">
                        <div class="side-lft">
                            <div class="side-lg-card">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" width="16" class="ml-1 inline-flex"><path d="M144 416c-17.67 0-32 14.33-32 32s14.33 32.01 32 32.01s32-14.34 32-32.01S161.7 416 144 416zM211.2 32H104C46.66 32 0 78.66 0 136v16C0 165.3 10.75 176 24 176S48 165.3 48 152v-16c0-30.88 25.12-56 56-56h107.2C244.7 80 272 107.3 272 140.8c0 22.66-12.44 43.27-32.5 53.81L167 232.8C137.1 248 120 277.9 120 310.6V328c0 13.25 10.75 24.01 24 24.01S168 341.3 168 328V310.6c0-14.89 8.188-28.47 21.38-35.41l72.47-38.14C297.7 218.2 320 181.3 320 140.8C320 80.81 271.2 32 211.2 32z"></path></svg>
                                </div>
                                <div class="card-info">
                                    <h2>Not sure how to proceed?</h2>
                                    <p>Let us find the right lawyers for you.</p>
                                </div>
                                <div class="icon-nd">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" width="60" class="inline-flex mb-4 text-blue-100"><path d="M637.9 203.9l-8-13.9c-4.4-7.7-14.2-10.3-21.9-5.9l-96.7 56.4c-3.7-27.4-26.9-48.6-55.3-48.6H304v64c0 17.6-14.3 32-32 32s-32-14.4-32-32v-86.3c0-11 5.7-21.3 15-27.1l33.4-20.9c10.2-6.4 21.9-9.7 33.9-9.7h105.3l119.8-68.2c7.7-4.4 10.4-14.1 6-21.8L545.5 8c-4.4-7.7-14.1-10.4-21.8-6L415 64h-92.7c-21 0-41.5 5.9-59.3 17l-33.5 20.9c-18.3 11.4-30.6 29.4-35.2 49.8l-59.4 35.6C110.8 201.8 96 227.9 96 256.1v34.1L8 341c-7.7 4.4-10.3 14.2-5.9 21.9l8 13.9c4.4 7.7 14.2 10.3 21.9 5.9L144 318v-61.8c0-11.3 5.9-21.8 15.6-27.6L192 209v42.2c0 41.8 30 80.1 71.7 84.3 47.9 4.9 88.3-32.7 88.3-79.6v-16h104c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-32v60c0 15.4-12.5 27.8-27.8 27.8h-24.1v24c0 17.8-14.4 32.2-32.2 32.2H211.3l-62.8 36.3c-7.7 4.4-10.3 14.2-5.9 21.9l8 13.9c4.4 7.7 14.2 10.3 21.9 5.9l51.6-29.9h115.8c36.9 0 68.1-25.1 77.4-59.2 31.5-9.2 54.7-38.4 54.7-72.8v-14.3c17.6-5.3 31.5-19 37.1-36.4L632 225.8c7.7-4.5 10.3-14.2 5.9-21.9z"></path></svg>
                                </div>
                               <router-link to="/contact-us"> <button>Find my Lawyer</button></router-link> <br>
                                <span class="btm">Free. Takes 2 min.</span>
                            </div>
                        </div>
                        <div class="side-rgt">
                          <a-list
                item-layout="horizontal"
                :pagination="pagination"
                :data-source="lawFirms"
              >
                <a-list-item slot="renderItem" slot-scope="item, index">
                  <div class="side-rgt-cards">
                    <div class="side-rgt-card">
                      <div class="profile-info">
                        <div class="p-top">
                          <div class="p-top-left flex-col md:flex-row">
                            <div class="p-image w-full md:w-[156px] md:mr-5">
                              <img
                                :src="item.logo"
                                alt="profile photo"
                                class="h-50 w-full md:h-40 md:w-52 rounded-lg object-contain"
                              />
                            </div>
                            <div class="p-name">
                              <h2 class=" whitespace-nowrap">
                                {{ item.name }}
                              </h2>
                              <p
                                class="flex items-center overflow-hidden overflow-ellipsis whitespace-nowrap"
                              >
                                <a-icon type="solution" class="mx-5" />{{
                                  item.address
                                }} , {{ item.location }}
                              </p>
                            
                              <div class="p-top-right flex items-center">
                                <a-icon type="calendar" class="mx-5" />
                                                <p class=" overflow-hidden overflow-ellipsis whitespace-nowrap">Free Consultation: <span>{{ item.consultation }}</span></p>
                                            </div>
                                            <p class="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#7a837c" width="13" class=""><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg> Founded in {{ new Date(item.year_founded).getFullYear()}}</p>
                                                <p class="flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#7a837c" width="14" class=""><path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"></path></svg> {{ item.team }} people in their team</p>
                                            <div class="p-tags" v-for=" language of item.languages" :key="language">
                                            <span>{{ language }}</span>

                                        </div>
                        
                            </div>
                          </div>
                        </div>
                        <div class="p-btm">
                          <div class="p-btm-left">
                            <p>{{ item.description.slice(0, 150) }}</p>
                            <div class="flex items-center gap-2">
                              <span class="text-red-600 whitespace-nowrap"
                                >Primary Practise Area :</span
                              >
                              <span class="whitespace-nowrap">
                                {{ item.specialisation }}
                              </span>
                            </div>
                             <div class="flex items-center gap-1">
                            <span class="text-red-600 whitespace-nowrap">Other Practise Areas:</span>
                            <div
                              class="my-5"
                              v-for="i of item.practise_areas"
                              :key="i"
                            >
                              <span class="mx-2 whitespace-nowrap">{{
                                i
                              }}</span>
                            </div>
                          </div>
                          </div>
                         
                        </div>
                      </div>
                      <div class="profile-access">
                        <button class="btn-p-success-tp"  @click="showDrawer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            width="16"
                            class="inline-flex mr-2 align-bottom"
                          >
                            <path
                              d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"
                            ></path>
                          </svg>
                          Contact
                        </button>
                      <router-link :to="'/firm/'+item.id">
                        <button class="btn-p-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            fill="currentColor"
                            width="16"
                            class="inline-flex mr-2 align-bottom"
                          >
                            <path
                              d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"
                            ></path>
                          </svg>
                          View Profile
                        </button>
                      </router-link>
                        <button class="btn-p-success" @click="()=>{openPhoneDialer(item)}">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            width="16"
                            class="inline-flex mr-2 align-bottom"
                          >
                            <path
                              d="M480.3 320.3L382.1 278.2c-21.41-9.281-46.64-3.109-61.2 14.95l-27.44 33.5c-44.78-25.75-82.29-63.25-108-107.1l33.55-27.48c17.91-14.62 24.09-39.7 15.02-61.05L191.7 31.53c-10.16-23.2-35.34-35.86-59.87-30.19l-91.25 21.06C16.7 27.86 0 48.83 0 73.39c0 241.9 196.7 438.6 438.6 438.6c24.56 0 45.53-16.69 50.1-40.53l21.06-91.34C516.4 355.5 503.6 330.3 480.3 320.3zM463.9 369.3l-21.09 91.41c-.4687 1.1-2.109 3.281-4.219 3.281c-215.4 0-390.6-175.2-390.6-390.6c0-2.094 1.297-3.734 3.344-4.203l91.34-21.08c.3125-.0781 .6406-.1094 .9531-.1094c1.734 0 3.359 1.047 4.047 2.609l42.14 98.33c.75 1.766 .25 3.828-1.25 5.062L139.8 193.1c-8.625 7.062-11.25 19.14-6.344 29.14c33.01 67.23 88.26 122.5 155.5 155.5c9.1 4.906 22.09 2.281 29.16-6.344l40.01-48.87c1.109-1.406 3.187-1.938 4.922-1.125l98.26 42.09C463.2 365.2 464.3 367.3 463.9 369.3z"
                            ></path>
                          </svg>
                          Reveal Phone
                        </button>
                        <a :href="'//' + item.website" v-if="item.website">
                          <button class="btn-p-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                            fill="currentColor"
                            width="16"
                            class="inline-flex mr-2 align-bottom"
                          >
                            <path
                              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-32 50.8v11.3c0 11.9-12.5 19.6-23.2 14.3l-24-12c14.9-6.4 30.7-10.9 47.2-13.6zm32 369.8V456c-110.3 0-200-89.7-200-200 0-29.1 6.4-56.7 17.6-81.7 9.9 14.7 25.2 37.4 34.6 51.1 5.2 7.6 11.2 14.6 18.1 20.7l.8.7c9.5 8.6 20.2 16 31.6 21.8 14 7 34.4 18.2 48.8 26.1 10.2 5.6 16.5 16.3 16.5 28v32c0 8.5 3.4 16.6 9.4 22.6 15 15.1 24.3 38.7 22.6 51.3zm42.7 22.7l17.4-46.9c2-5.5 3.3-11.2 4.8-16.9 1.1-4 3.2-7.7 6.2-10.7l11.3-11.3c8.8-8.7 13.7-20.6 13.7-33 0-8.1-3.2-15.9-8.9-21.6l-13.7-13.7c-6-6-14.1-9.4-22.6-9.4H232c-9.4-4.7-21.5-32-32-32s-20.9-2.5-30.3-7.2l-11.1-5.5c-4-2-6.6-6.2-6.6-10.7 0-5.1 3.3-9.7 8.2-11.3l31.2-10.4c5.4-1.8 11.3-.6 15.5 3.1l9.3 8.1c1.5 1.3 3.3 2 5.2 2h5.6c6 0 9.8-6.3 7.2-11.6l-15.6-31.2c-1.6-3.1-.9-6.9 1.6-9.3l9.9-9.6c1.5-1.5 3.5-2.3 5.6-2.3h9c2.1 0 4.2-.8 5.7-2.3l8-8c3.1-3.1 3.1-8.2 0-11.3l-4.7-4.7c-3.1-3.1-3.1-8.2 0-11.3L264 112l4.7-4.7c6.2-6.2 6.2-16.4 0-22.6l-28.3-28.3c2.5-.1 5-.4 7.6-.4 78.2 0 145.8 45.2 178.7 110.7l-13 6.5c-3.7 1.9-6.9 4.7-9.2 8.1l-19.6 29.4c-5.4 8.1-5.4 18.6 0 26.6l18 27c3.3 5 8.4 8.5 14.1 10l29.2 7.3c-10.8 84-73.9 151.9-155.5 169.7z"
                            ></path>
                          </svg>
                          Website
                          <svg
                            class="target ml-2 baseline"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            width="10"
                          >
                            <path
                              d="M497.6,0,334.4.17A14.4,14.4,0,0,0,320,14.57V47.88a14.4,14.4,0,0,0,14.69,14.4l73.63-2.72,2.06,2.06L131.52,340.49a12,12,0,0,0,0,17l23,23a12,12,0,0,0,17,0L450.38,101.62l2.06,2.06-2.72,73.63A14.4,14.4,0,0,0,464.12,192h33.31a14.4,14.4,0,0,0,14.4-14.4L512,14.4A14.4,14.4,0,0,0,497.6,0ZM432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288Z"
                            ></path>
                          </svg>
                        </button>
                        </a>
                       
                      </div>
                    </div>
                  </div>
                  <!-- <div class="side-rgt-cards">
                                <div class="side-rgt-card">
                                    <div class="profile-info">
                                        <div class="p-top">
                                            <div class="p-top-left">
                                                <div class="p-image w-20 mr-10">
                                                    <img :src="item.logo" alt="">
                                                </div>
                                                <div class="p-name ">
                                                    <h2>{{ item.name }}</h2>
                                                    <p>{{ item.address }}</p>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div class="p-btm">
                                            <div class="p-btm-left">
                
                                            </div>
                                            <div class="p-btm-right">
                                                <p>OLM Law Advocates LLP is a full-service law firm based in Nairobi Kenya. We take pride in providing our wide array of clients i.e., individuals</p>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div class="profile-access">
                                        <button class="btn-p-success-tp" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="16" class="inline-flex mr-2
                                            align-bottom"><path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"></path></svg> Contact</button>
                                        <router-link to="/firm/1"><button class="btn-p-success"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" width="16" class="inline-flex mr-2 align-bottom"><path d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"></path></svg> View Profile</button></router-link>
                                        <button class="btn-p-success" @click="openPhoneDialer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="16" class="inline-flex mr-2
                                            align-bottom"><path d="M480.3 320.3L382.1 278.2c-21.41-9.281-46.64-3.109-61.2 14.95l-27.44 33.5c-44.78-25.75-82.29-63.25-108-107.1l33.55-27.48c17.91-14.62 24.09-39.7 15.02-61.05L191.7 31.53c-10.16-23.2-35.34-35.86-59.87-30.19l-91.25 21.06C16.7 27.86 0 48.83 0 73.39c0 241.9 196.7 438.6 438.6 438.6c24.56 0 45.53-16.69 50.1-40.53l21.06-91.34C516.4 355.5 503.6 330.3 480.3 320.3zM463.9 369.3l-21.09 91.41c-.4687 1.1-2.109 3.281-4.219 3.281c-215.4 0-390.6-175.2-390.6-390.6c0-2.094 1.297-3.734 3.344-4.203l91.34-21.08c.3125-.0781 .6406-.1094 .9531-.1094c1.734 0 3.359 1.047 4.047 2.609l42.14 98.33c.75 1.766 .25 3.828-1.25 5.062L139.8 193.1c-8.625 7.062-11.25 19.14-6.344 29.14c33.01 67.23 88.26 122.5 155.5 155.5c9.1 4.906 22.09 2.281 29.16-6.344l40.01-48.87c1.109-1.406 3.187-1.938 4.922-1.125l98.26 42.09C463.2 365.2 464.3 367.3 463.9 369.3z"></path></svg> Reveal Phone</button>
            <a href="//acelitigator.com">                            <button class="btn-p-success"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" width="16" class="inline-flex
                                            mr-2 align-bottom"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-32 50.8v11.3c0 11.9-12.5 19.6-23.2 14.3l-24-12c14.9-6.4 30.7-10.9 47.2-13.6zm32 369.8V456c-110.3 0-200-89.7-200-200 0-29.1 6.4-56.7 17.6-81.7 9.9 14.7 25.2 37.4 34.6 51.1 5.2 7.6 11.2 14.6 18.1 20.7l.8.7c9.5 8.6 20.2 16 31.6 21.8 14 7 34.4 18.2 48.8 26.1 10.2 5.6 16.5 16.3 16.5 28v32c0 8.5 3.4 16.6 9.4 22.6 15 15.1 24.3 38.7 22.6 51.3zm42.7 22.7l17.4-46.9c2-5.5 3.3-11.2 4.8-16.9 1.1-4 3.2-7.7 6.2-10.7l11.3-11.3c8.8-8.7 13.7-20.6 13.7-33 0-8.1-3.2-15.9-8.9-21.6l-13.7-13.7c-6-6-14.1-9.4-22.6-9.4H232c-9.4-4.7-21.5-32-32-32s-20.9-2.5-30.3-7.2l-11.1-5.5c-4-2-6.6-6.2-6.6-10.7 0-5.1 3.3-9.7 8.2-11.3l31.2-10.4c5.4-1.8 11.3-.6 15.5 3.1l9.3 8.1c1.5 1.3 3.3 2 5.2 2h5.6c6 0 9.8-6.3 7.2-11.6l-15.6-31.2c-1.6-3.1-.9-6.9 1.6-9.3l9.9-9.6c1.5-1.5 3.5-2.3 5.6-2.3h9c2.1 0 4.2-.8 5.7-2.3l8-8c3.1-3.1 3.1-8.2 0-11.3l-4.7-4.7c-3.1-3.1-3.1-8.2 0-11.3L264 112l4.7-4.7c6.2-6.2 6.2-16.4 0-22.6l-28.3-28.3c2.5-.1 5-.4 7.6-.4 78.2 0 145.8 45.2 178.7 110.7l-13 6.5c-3.7 1.9-6.9 4.7-9.2 8.1l-19.6 29.4c-5.4 8.1-5.4 18.6 0 26.6l18 27c3.3 5 8.4 8.5 14.1 10l29.2 7.3c-10.8 84-73.9 151.9-155.5 169.7z"></path></svg> Website <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="10" class="ml-2 baseline"><path d="M497.6,0,334.4.17A14.4,14.4,0,0,0,320,14.57V47.88a14.4,14.4,0,0,0,14.69,14.4l73.63-2.72,2.06,2.06L131.52,340.49a12,12,0,0,0,0,17l23,23a12,12,0,0,0,17,0L450.38,101.62l2.06,2.06-2.72,73.63A14.4,14.4,0,0,0,464.12,192h33.31a14.4,14.4,0,0,0,14.4-14.4L512,14.4A14.4,14.4,0,0,0,497.6,0ZM432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288Z"></path></svg></button></a>
                                    </div>
                                </div>
                            </div> -->
                </a-list-item>
                
                </a-list>
                           

                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footerv-2></footerv-2>
       </div>
</template>

<script>
import { mapState } from 'vuex';
import Footerv2 from '../v2/Footerv2.vue'
import Headerv2 from '../v2/Headerv2.vue'
export default {
  components: { Footerv2, Headerv2 },
  data() {
    return {
      form: this.$form.createForm(this),
      visible: false,
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 4,
      },
    };
  },
  computed: {
    ...mapState([
      "user",
      "advocates",
      "allAdvocates",
      "practiseAreas",
      "loading",
      "firebaseEror",
      "counties",
      "lawFirms"
    ]),
    activeMenu() {
      return Object.keys(this.menus).reduce(
        ($$, set, i) => (this.menus[set] ? i : $$),
        -1
      );
    },
    list() {
      let {
        counties,
        practiseAreas,
        otherPractiseAreas,
        otherPractiseLocations,
      } = this.activeFilters;

      return this.advocates.filter(
        ({
          location,
          other_counties,
          specialisation,
          practise_areas,
          experience,
        }) => {
          if (experience < this.filters.experience) return false;
          if (counties.length && !~counties.indexOf(location)) return false;
          if (practiseAreas.length && !~practiseAreas.indexOf(specialisation))
            return false;
          if (
            otherPractiseAreas.length &&
            !practise_areas.some(
              (specialisation) => ~otherPractiseAreas.indexOf(specialisation)
            )
          )
            return false;
          if (
            otherPractiseLocations.length &&
            !other_counties.some(
              (location) => ~otherPractiseLocations.indexOf(location)
            )
          )
            return false;

          return true;
        }
      );
    },
    activeFilters() {
      let {
        counties,
        practiseAreas,
        otherPractiseAreas,
        otherPractiseLocations,
      } = this.filters;

      return {
        counties: Object.keys(counties).filter((c) => counties[c]),
        practiseAreas: Object.keys(practiseAreas).filter(
          (c) => practiseAreas[c]
        ),
        otherPractiseAreas: Object.keys(otherPractiseAreas).filter(
          (c) => otherPractiseAreas[c]
        ),
        otherPractiseLocations: Object.keys(otherPractiseLocations).filter(
          (c) => otherPractiseLocations[c]
        ),
        experience:
          this.filters.experience > this.experience.min
            ? [this.filters.experience]
            : [],
      };
    },
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
      this.$message.success("message submitted successfully")
    },
    openPhoneDialer() {
      const url = `tel:0705122230`;
      window.open(url);
    },
},

mounted(){
  this.$store.dispatch("fetchActiveFirms");
}


}
</script>

<style>

</style>