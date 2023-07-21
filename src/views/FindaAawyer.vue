<template>
  <div class="bg-white container-fluid">
    <Header></Header>
    <div>
      <main  class="content container-fluid mx-auto px-5 lg:px-10">
    <nav class="nav">
        <menu class="nav__controls">
          <a-icon type="filter" />
          <li
            v-for="(active, menu) in menus" :key="menu"
            class="nav__label"
            :class="{
              'nav__label--active': active,
              'nav__label--filter': activeFilters[menu].length,
            }"
            @click="setMenu(menu, active)"
          >
            {{ menuLabels[menu] }}
          </li>

          <li class="nav__label nav__label--clear" @click="clearAllFilters">
            Clear all
          </li>
        </menu>
      </nav>

      <transition-group
        name="dropdown"
        tag="section"
        class="dropdown"
        :style="dropdown"
      >
        <menu
          v-for="(options, filter) in filters"
          class="filters"
          v-show="menus[filter]"
          ref="menu"
          :key="filter"
        >
          <li v-if="filter === 'experience'" class="filters__experience">
          </li>

          <template v-else>
            <li
              v-for="(active, option) in options" :key="option"
              class="filters__item"
              :class="{ 'filters__item--active': active }"
              @click="setFilter(filter, option)"
            >
              {{ option }}
            </li>
          </template>
        </menu>
      </transition-group>
      <div class="grid  grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-200 px-20 py-10">
        
    <div v-for="advocate in list" :key="advocate.id" class="">
      <card-info :advocate="advocate"></card-info>
    </div>
  </div>


      <transition name="modal">
        <section v-if="modal" class="modal" @click="modal = false">
          <article class="modal__content" @click.stop>
            <h4 class="modal__title">For the full tutorial</h4>
            <h4 class="modal__title">that goes with this pen</h4>

            <h5 class="modal__link" @click="modal = false">
              <a
                href="https://snipcart.com/blog/vuejs-transitions-animations"
                target="_blank"
              >
                Creating Vue.js Transitions &amp; Animations
              </a>
            </h5>

            <button class="modal__close" @click="modal = false">&times;</button>
          </article>
        </section>
      </transition>
    </main>
    <Footer></Footer>
  </div></div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Filters from "../components/Widgets/Filters.vue";
import { mapState } from "vuex";
import CardInfo from "../components/Cards/CardInfo.vue";
import Footer from '../components/home/Footer.vue';
// inject svg spritesheet
fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/mock-logos.svg")
  .then((response) => response.text())
  .then((sprite) => {
    let figure = document.createElement("figure");
    figure.style.display = "none";
    figure.innerHTML = sprite;
    document.body.insertBefore(figure, document.body.children[0]);
  });
export default {
  components: {
    Header,
    Filters,
    CardInfo,
    Footer,
    icon: { template: '<svg><use :xlink:href="use"/></svg>' },
  },
props: ["use"],
  data() {
    return {
      title: "Find A Lawyer",
      description:
        "Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market",
      url: "https://dialalawyer.africa",
      image: "https://dialalawyer.africa/images/banner.jpg",
      modal: false,
      dropdown: { height: 0 },
      experience: { min: 10, max: 0 },
      filters: {
        counties: {},
        practiseAreas: {},
        experience: 0,
        otherPractiseAreas: {}, // new
        otherPractiseLocations: {},
      },
      menus: {
        counties: false,
        practiseAreas: false,
        experience: false,
        otherPractiseAreas: false,
        otherPractiseLocations: false,
      },
      menuLabels: {
        counties: "By State",
        practiseAreas: "By Practice area",
        experience: "By Experience",
        otherPractiseAreas: "By Other Practice areas",
        otherPractiseLocations: "By Other Practice Locations",
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
    setFilter(filter, option) {
      if (filter === "counties") {
        this.filters[filter][option] = !this.filters[filter][option];
      } else {
        setTimeout(() => {
          this.clearFilter(filter, option, this.filters[filter][option]);
        }, 100);
      }
    },
    clearFilter(filter, except, active) {
      if (filter === "experience") {
        this.filters[filter] = this.experience.min;
      } else {
        Object.keys(this.filters[filter]).forEach((option) => {
          this.filters[filter][option] = except === option && !active;
        });
      }
    },
    clearAllFilters() {
      Object.keys(this.filters).forEach(this.clearFilter);
    },
    setMenu(menu, active) {
      Object.keys(this.menus).forEach((tab) => {
        this.menus[tab] = !active && tab === menu;
      });
    },
  },
  beforeMount() {
    this.$store.dispatch("fetchActiveAdvocates");
    this.counties.forEach((county) => {
      this.$set(this.filters.counties, county, false);
    });
    this.practiseAreas.forEach((area) => {
      this.$set(this.filters.practiseAreas, area, false);
    });
    this.practiseAreas.forEach((area) => {
      this.$set(this.filters.otherPractiseAreas, area, false);
    });
    this.counties.forEach((location) => {
      this.$set(this.filters.otherPractiseLocations, location, false);
    });
    this.allAdvocates.forEach(({ experience }) => {
      if (this.experience.max < experience) this.experience.max = experience;
      if (this.experience.min > experience) {
        this.experience.min = experience;
        this.filters.experience = experience;
      }
    });
  },

  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          name: "description",
          content:
            "Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market",
        },
        // Open Graph (for Facebook, LinkedIn, etc.)
        { property: "og:title", content: this.title },
        { property: "og:description", content: this.description },
        { property: "og:image", content: this.image },
        { property: "og:url", content: this.url },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.title },
        { name: "twitter:description", content: this.description },
        { name: "twitter:image", content: this.image },
        { name: "twitter:url", content: this.url },
        // Add more tags as needed
      ],
    };
  },

  watch: {
    activeMenu(index, from) {
      if (index === from) return;

      this.$nextTick(() => {
        if (!this.$refs.menu || !this.$refs.menu[index]) {
          this.dropdown.height = 0;
        } else {
          this.dropdown.height = `${
            this.$refs.menu[index].clientHeight + 16
          }px`;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  font-family: "Nunito", sans-serif;
  font-weight: 300;
  color: #3d5358;
  margin: 0 auto;

  &__list {
    position: relative;
    margin-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 5rem;
    backface-visibility: hidden;
  }
}

.company {
  position: relative;
  width: calc(100% / 2 - 1rem);
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 0 0 1px #c5d0d1;
  backface-visibility: hidden;
  transform-origin: 10% 50%;
  z-index: 1;

  @media (min-width: 800px) {
    width: calc(100%);
  }

  &-move {
    transition: all 600ms ease-in-out 50ms;
  }
  &-enter-active {
    transition: all 300ms ease-out;
  }

  &-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    z-index: 0;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
  &-enter {
    transform: scale(0.9);
  }

  &__data {
    line-height: 1.3;
  }
  &__label {
    font-size: 0.8rem;
  }
  &__rating {
    text-align: center;
  }

  &__info {
    padding: 0 0.75rem;
    text-align: center;
  }

  &__logo {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
  }

  &__name {
    height: 2.5rem;
    margin: 0.75rem 0;
    font-size: 1.3rem;
    font-weight: 200;
    text-align: center;
  }

  &__slogan {
    height: 2rem;
    text-align: center;
    font-weight: 400;
    text-transform: capitalize;
  }

  &__details {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    padding: 0.5rem 0.75rem;
    background-color: rgba(#000000, 0.1);
    border-top: 1px solid #000000;
  }

  &__country:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin: 0 1rem;
  padding: 2rem 0.5rem 1rem;
  border-bottom: 1px solid #000000;

  &__controls {
    display: flex;
  }

  &__icon {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }

  &__label {
    position: relative;
    margin-left: 1rem;
    text-transform: capitalize;
    z-index: 1;
    cursor: pointer;

    &::after {
      content: "\00d7";
      display: inline-block;
      color: transparent;
      width: 0.5rem;
      font-weight: 400;
      transform: scale(0);
      transition: transform 150ms ease-in-out;
    }

    &--clear {
      color: #f68185;
      opacity: 0;
      transform: translate3d(-25%, 0, 0);
      pointer-events: none;
      transition: all 275ms ease-in-out;
    }

    &--filter ~ &--clear {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      pointer-events: auto;
    }

    &--filter::after,
    &--active::after {
      transform: scale(1);
    }

    &--filter::after {
      content: "\2022";
      color: #000000;
    }

    &--active::after {
      content: "\00d7";
      color: #f68185;
    }
  }
}

.dropdown {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 350ms;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background-image: linear-gradient(to top, white, rgba(white, 0));
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-leave,
  &-enter-to {
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    position: absolute;
    width: 100%;
    transition: opacity 200ms ease-in-out;
  }

  &-enter-active {
    transition-delay: 100ms;
  }
}

.filters {
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  &__item {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border: 1px solid #c5d0d1;
    border-radius: 6px;
    font-size: 0.8rem;
    line-height: 1.35;
    cursor: pointer;
    transition: all 275ms;

    &:hover {
      border-color: #000000;
    }

    &--active {
      color: white;
      border-color: #000000;
      background-color: #000000;
    }
  }

  &__rating {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
  }

  &__range {
    width: 200px;
    margin-top: 1rem;
    color: inherit;

    &::-webkit-slider-thumb {
      width: 0.8rem;
      height: 0.8rem;
      margin-top: calc(-0.4rem + 2px);
      border-radius: 100%;
      background-color: currentColor;
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 4px;
      background-image: linear-gradient(to right, white, #46d2c4);
    }
  }
}

.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(white, 0.6);
  z-index: 1;

  &-enter-active,
  &-leave-active {
    transition: opacity 350ms;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-leave,
  &-enter-to {
    opacity: 1;
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 500px;
    min-height: 250px;
    padding: 1.5rem 1rem;
    background-color: white;
    border: 1px solid #c5d0d1;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 0.5rem 1.75rem -0.25rem rgba(#3d5358, 0.4);
  }

  &__title {
    font-weight: 400;
    font-size: 1.5rem;
  }

  &__link {
    margin-top: 1.5rem;
    position: relative;
    font-size: 1.2rem;
    font-weight: 300;
    z-index: 0;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: currentColor;
      z-index: -1;
      transition: background-color 225ms ease-out;
    }

    &:hover::after {
      background-color: #46d2c4;
    }
  }

  &__close {
    position: absolute;
    top: 0.25rem;
    right: 1rem;
    font-size: 1.75rem;
    font-weight: 400;
    opacity: 0.5;
    transition: opacity 150ms ease-out;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
