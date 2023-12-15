<template>
  <div class="min-h-full">
    <nav class="bg-gray-800 sticky top-0 z-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
             <router-link to="/"> <img class="h-16 w-16" src="/images/dial-logo.png" alt="logo" /></router-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link to="/dashboard">
                  <a
                    href="#"
                    class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                    v-if="user.status == 'active' || 'admin'"
                    >Dashboard</a
                  >
                  <a
                    href="#"
                    class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                    v-else
                    >Complete Profile</a
                  >
                </router-link>
                <router-link to="/profile" v-if="user.status == 'active'">
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >My Profile</a
                  >
                </router-link>
                <router-link to="/requests" v-if="user.status == 'admin'">
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >Requests</a
                  >
                </router-link>
                <router-link to="/chat" v-if="user.status == 'active'">
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >Chat</a
                  >
                </router-link>
              </div>
            </div>
          </div>
          <div class="hidden md:flex">
            <a-dropdown class="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <a-menu slot="overlay">
                <!-- <div v-if="user.notifications.length">
                  <a-menu-item v-for="(item,index) in user.notifications" :key="index" >
                 <div class="flex items-center gap-4" >

                  <p>  <span class="mr-3 text-red-600">{{ item.date.toDate().toDateString() }}</span>{{ item.notification }}</p>
                  <a-icon
                    type="close"
                    @click="
                      () => {
                        removeNotification(item);
                      }
                    "
                />
                 </div>

                 
                </a-menu-item>
                </div> -->
              <a-menu-item>
                <div v-if="user.notifications.length">
                  <div v-for="item of user.notifications" :key="item">
                    <div class="flex items-center gap-4" >

<p>  <span class="mr-3 text-red-600">{{ item.date.toDate().toDateString() }}</span>{{ item.notification }}</p>
<a-icon
  type="close"
  @click="
    () => {
      removeNotification(item);
    }
  "
/>
</div>
              </div>
                </div>
                <a-empty v-else/>
              </a-menu-item>
                
                <a-button
                type="primary"
                block
                size="small"
                @click="clearAll"
                v-if="user.notifications.length>0"
                class="flex items-center justify-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H14C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3H3Z"
                    fill="#111827"
                  />
                  <path
                    d="M3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H8C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7H3Z"
                    fill="#111827"
                  />
                  <path
                    d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H7C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11H3Z"
                    fill="#111827"
                  />
                  <path
                    d="M13 16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16L15 10.4142L16.2929 11.7071C16.6834 12.0976 17.3166 12.0976 17.7071 11.7071C18.0976 11.3166 18.0976 10.6834 17.7071 10.2929L14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7C13.7348 7 13.4804 7.10536 13.2929 7.29289L10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071L13 10.4142L13 16Z"
                    fill="#111827"
                  />
                </svg>
                CLEAR ALL
              </a-button>

              </a-menu>
            </a-dropdown>
            
            <a-dropdown class="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm outline-none ring-2 ring-white ring-offset-2 ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full object-contain"
                  :src="user.profile_photo"
                  alt=""
                  v-if="user.profile_photo"
                />
                <img
                  class="h-8 w-8 rounded-full"
                  src="/images/user-avatar.png"
                  alt=""
                  v-else
                />
              </button>
              <a-menu slot="overlay">
                <a-menu-item>
                  <router-link to="/profile"> Profile</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/forgot-password">Change Password</router-link>
                </a-menu-item>
                <a-menu-item>
                  <span @click="logout">Sign Out</span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="mobileMenu=!mobileMenu"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu" v-if="mobileMenu">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">

          <router-link to="/dashboard">
                  <a
                    href="#"
                    class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                    aria-current="page"
                    v-if="user.status == 'active' || 'admin'"
                    >Dashboard</a
                  >
                  <a
                    href="#"
                    class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                    v-else
                    >Complete Profile</a
                  >
                </router-link>
                <router-link to="/profile" v-if="user.status == 'active'">
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >My Profile</a
                  >
                </router-link>
                <router-link to="/requests" v-if="user.status == 'admin'">
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >Requests</a
                  >
                </router-link>
                <router-link to="/chat" v-if="user.status == 'active'">
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    >Chat</a
                  >
                </router-link>
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <a-dropdown class="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm outline-none ring-2 ring-white ring-offset-2 ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full object-contain"
                  :src="user.profile_photo"
                  alt=""
                  v-if="user.profile_photo"
                />
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  v-else
                />
              </button>
              <a-menu slot="overlay">
                <a-menu-item>
                  <router-link to="/profile"> Profile</router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/forgot-password">Change Password</router-link>
                </a-menu-item>
                <a-menu-item>
                  <span @click="logout">Sign Out</span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
            <a-dropdown class="ml-4 flex  items-center md:ml-6">
              <button type="button"
                class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <a-menu slot="overlay">
              
                <a-menu-item v-for="(item,index) in user.notifications" :key="index">
                  <div v-if="user.notifications.length">
                 <div class="flex items-center gap-4">

                        <p class=" whitespace-normal"> <span class="mr-3 text-red-600">{{ item.date.toDate().toDateString() }}</span> <br>{{
                          item.notification }}</p>
                        <a-icon type="close" @click="() => {
                            removeNotification(item);
                          }
                          " />
                      </div>
                  </div>
                  <a-empty v-else />
                </a-menu-item>
                <a-button
                type="primary"
                block
                size="small"
                @click="clearAll"
                v-if="user.notifications.length"
                class="flex items-center justify-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H14C14.5523 5 15 4.55228 15 4C15 3.44772 14.5523 3 14 3H3Z"
                    fill="#111827"
                  />
                  <path
                    d="M3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H8C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7H3Z"
                    fill="#111827"
                  />
                  <path
                    d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H7C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11H3Z"
                    fill="#111827"
                  />
                  <path
                    d="M13 16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16L15 10.4142L16.2929 11.7071C16.6834 12.0976 17.3166 12.0976 17.7071 11.7071C18.0976 11.3166 18.0976 10.6834 17.7071 10.2929L14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7C13.7348 7 13.4804 7.10536 13.2929 7.29289L10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071L13 10.4142L13 16Z"
                    fill="#111827"
                  />
                </svg>
                CLEAR ALL
              </a-button>

              </a-menu>
            </a-dropdown>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import DashboardSidebar from "../components/Sidebars/DashboardSidebar";
import DashboardHeader from "../components/Headers/DashboardHeader";
import DashboardFooter from "../components/Footers/DashboardFooter";
import { mapState } from "vuex";
import { auth } from "../database/index";
import { arrayRemove } from "@firebase/firestore";
import { updateAdvocate } from "../database/firestore";

export default {
  components: {
    DashboardSidebar,
    DashboardHeader,
    DashboardFooter,
  },
  data() {
    return {
      // Sidebar collapsed status.
      sidebarCollapsed: false,

      // Main sidebar color.
      sidebarColor: "primary",

      // Main sidebar theme : light, white, dark.
      sidebarTheme: "light",

      // Header fixed status.
      navbarFixed: false,
      showSettingsDrawer: false,
      top: 0,
      searchLoading: false,
      wrapper: document.body,
      lists: [],
      loading: false,
      loadingMore: false,
      showLoadingMore: true,
      mobileMenu:false
    };
  },
  methods: {
    toggleSidebar(value) {
      this.sidebarCollapsed = value;
    },
    toggleSettingsDrawer(value) {
      this.showSettingsDrawer = value;
    },
    toggleNavbarPosition(value) {
      this.navbarFixed = value;
    },
    updateSidebarTheme(value) {
      this.sidebarTheme = value;
    },
    updateSidebarColor(value) {
      this.sidebarColor = value;
    },
    resizeEventHandler() {
      this.top = this.top ? 0 : -0.01;
    },
    logout() {
      this.$store.dispatch("logout");
    },
    removeNotification(item) {
      this.loading = true;
      updateAdvocate(auth.currentUser.uid, {
        notifications: arrayRemove(item),
      })
        .then(() => {
          this.loading = false;
        })
        .catch((err) => {
         
          this.loading = false;
        });
    },
    clearAll() {
      this.loading = true;
      updateAdvocate(auth.currentUser.uid, { notifications: [] })
        .then(() => {
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });
    },
  },
  computed: {
    ...mapState(["allAdvocates"]),
    // Sets layout's element's class based on route's meta data.
    layoutClass() {
      return this.$route.meta.layoutClass;
    },

    user() {
      return this.allAdvocates.filter((i) => i.id == auth.currentUser.uid)[0];
    },
  },
  mounted: function () {
    // Set the wrapper to the proper element, layout wrapper.
    this.wrapper = document.getElementById("layout-dashboard");
  },
  created() {
    // Registering window resize event listener to fix affix elements size
    // error while resizing.
    window.addEventListener("resize", this.resizeEventHandler);
  },
  destroyed() {
    // Removing window resize event listener.
    window.removeEventListener("resize", this.resizeEventHandler);
  },
};
</script>
