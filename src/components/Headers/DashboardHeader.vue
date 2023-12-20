<template>
  <!-- Main Sidebar -->
  <component :is="navbarFixed ? 'a-affix' : 'div'" :offset-top="top">
    <!-- Layout Header -->
    <a-layout-header>
      <a-row type="flex">
        <!-- Header Breadcrumbs & Title Column -->
        <a-col :span="24" :md="6">
          <!-- Header Breadcrumbs -->
          <a-breadcrumb>
            <a-breadcrumb-item
              ><router-link to="/"> Home</router-link></a-breadcrumb-item
            >
            <a-breadcrumb-item>{{ this.$route.name }}</a-breadcrumb-item>
          </a-breadcrumb>
        </a-col>
        <a-col :span="24" :md="18" class="header-control">
          <!-- Header Control Buttons -->
          <a-dropdown
            :trigger="['click']"
            overlayClassName="header-notifications-dropdown"
            :getPopupContainer="() => wrapper"
          >
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2C6.68632 2 4.00003 4.68629 4.00003 8V11.5858L3.29292 12.2929C3.00692 12.5789 2.92137 13.009 3.07615 13.3827C3.23093 13.7564 3.59557 14 4.00003 14H16C16.4045 14 16.7691 13.7564 16.9239 13.3827C17.0787 13.009 16.9931 12.5789 16.7071 12.2929L16 11.5858V8C16 4.68629 13.3137 2 10 2Z"
                    fill="#111827"
                  />
                  <path
                    d="M10 18C8.34315 18 7 16.6569 7 15H13C13 16.6569 11.6569 18 10 18Z"
                    fill="#111827"
                  />
                </svg></a>

            <a-list
              item-layout="horizontal"
              class="header-notifications-list"
              :data-source="user.notifications"
              slot="overlay"
              :loading="loading"
            >
              <div
                v-if="showLoadingMore"
                slot="loadMore"
                :style="{
                  textAlign: 'center',
                  marginTop: '12px',
                  height: '32px',
                  lineHeight: '32px',
                }"
              >
                <a-spin v-if="loadingMore" />
                <!-- <a-button v-else @click="onLoadMore"> loading more </a-button> -->
              </div>
              <a-list-item slot="renderItem" slot-scope="item" >
                <a-list-item-meta>
                  <template #description >
                    <div class="flex align-items-center">
                      <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V10C9 10.2652 9.10536 10.5196 9.29289 10.7071L12.1213 13.5355C12.5118 13.9261 13.145 13.9261 13.5355 13.5355C13.9261 13.145 13.9261 12.5118 13.5355 12.1213L11 9.58579V6Z"
                        fill="#111827"
                      />
                    </svg>
                    <span >{{ item.date.toDate().toDateString() }}</span>
                    </div>
                  
                  </template>
                  <a slot="title" href="#">{{ item.notification }}</a>
                </a-list-item-meta>

                <a slot="actions">
                  <a-icon
                    type="close"
                    @click="
                      () => {
                        removeNotification(item);
                      }
                    "
                /></a>
              </a-list-item>
              <a-button
                type="primary"
                block
                size="small"
                @click="clearAll"
                v-if="user.notifications&&user.notifications.length"
                class="flex align-items-center justify-content-center"
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
            </a-list>
          </a-dropdown>
          <a-button
            type="link"
            class="sidebar-toggler"
            @click="
              $emit('toggleSidebar', !sidebarCollapsed), resizeEventHandler()
            "
          >
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              />
            </svg>
          </a-button>
          <a-button @click="logout" class="flex align-items-center py-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
                fill="#111827"
              />
            </svg>
            <span>Sign Out</span></a-button
          >
          <!-- / Header Control Buttons -->
        </a-col>
      </a-row>
    </a-layout-header>
    <!--  /Layout Header -->
  </component>
  <!-- / Main Sidebar -->
</template>

<script>
import { arrayRemove } from "@firebase/firestore";
import { updateAdvocate } from "../../database/firestore";
import { auth } from "../../database";
export default {
  props: {
    user: {
      default: {},
    },
    // Header fixed status.
    navbarFixed: {
      type: Boolean,
      default: false,
    },

    // Sidebar collapsed status.
    sidebarCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // Fixed header/sidebar-footer ( Affix component ) top offset.
      top: 0,

      // Search input loading status.
      searchLoading: false,

      // The wrapper element to attach dropdowns to.
      wrapper: document.body,
      lists: [],
      loading: false,
      loadingMore: false,
      showLoadingMore: true,
    };
  },
  methods: {
    resizeEventHandler() {
      this.top = this.top ? 0 : -0.01;
      // To refresh the header if the window size changes.
      // Reason for the negative value is that it doesn't activate the affix unless
      // scroller is anywhere but the top of the page.
    },
    onSearch(value) {},
    logout() {
      this.$store.dispatch("logout");
    },
    removeNotification(item) {
      this.loading = true;
      updateAdvocate(auth.currentUser.uid, {
        notifications: arrayRemove(item),
      }).then(() => {
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
  computed: {},
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
