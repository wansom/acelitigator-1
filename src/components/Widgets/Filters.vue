<template>
  <section>
    <div class="container mx-auto py-4">
      <a-row :gutter="16">
        <a-col :span="24" :lg="6">
          <div>
            <div class="sidebar">
              <span class="line"></span>

              <div class="filter-widget">
                <a-collapse
                  expand-icon-position="right"
                  :bordered="false"
                  default-active-key="1"
                >
                  <template #expandIcon="props">
                    <a-icon
                      type="caret-down"
                      :rotate="props.isActive ? 180 : 0"
                    />
                  </template>
                  <a-collapse-panel key="1" header="Filter by Practice Areas">
                    <div
                      v-for="category in practiseAreas"
                      :key="category"
                      class="checkbox"
                      @change="
                        () => {
                          setActive(category);
                        }
                      "
                    >
                      <label>
                        <input type="checkbox" /><span class="checkbox-material"
                          ><span class="check"></span
                        ></span>
                        {{ category }}
                      </label>
                    </div>
                  </a-collapse-panel>
                </a-collapse>
              </div>
              <!-- <div class="filter-widget experience-w d-none d-lg-block">
                  <h4 class="fw-title">Years of Experience</h4>
                  <div class="filter-range-wrap position-relative">
                    <vue-range-slider
                      ref="slider"
                      v-model="years_of_experience"
                      @change="setExperience"
                    ></vue-range-slider>
                  </div>
                </div> -->

              <div class="filter-widget">
                <a-collapse expand-icon-position="right" :bordered="false">
                  <template #expandIcon="props">
                    <a-icon
                      type="caret-down"
                      :rotate="props.isActive ? 180 : 0"
                    />
                  </template>
                  <a-collapse-panel key="1" header="Filter by State">
                    <div class="fw-color-choose">
                      <div class="cs-item" v-for="item in counties" :key="item">
                        <input
                          type="radio"
                          :id="item"
                          :value="item"
                          v-model="selectedCounty"
                        />
                        <label class="cs-red" :for="item">{{ item }}</label>
                      </div>
                    </div>
                  </a-collapse-panel>
                </a-collapse>
              </div>
            </div>
            <button class="filter-btn px-5" @click="filterItems">Filter</button>
            <button
              class="clear-filter-btn px-5 bg-black"
              @click="clearFilters"
              v-if="filterApplied"
            >
              Clear Filters
            </button>
          </div>
        </a-col>
        <a-col :span="24" :lg="18">
          <div class="row">
            <div class="col-lg-5 col-12 text-right my-2">
              <p>
                Showing
                {{ filterApplied ? displayItems.length : advocates.length }}
                Advocates
              </p>
            </div>
          </div>
          <div class="col-sm-12">
            <!-- Loop products  -->
            <a-spin v-if="loading"></a-spin>
            <a-result
              status="500"
              title="500"
              sub-title="Sorry, the server is wrong."
              v-else-if="firebaseEror"
            >
              <template #extra>
                <a-button type="primary"> Back Home </a-button>
              </template>
            </a-result>
            <a-list
              v-else
              item-layout="vertical"
              size="large"
              :pagination="pagination"
              :data-source="filterApplied ? displayItems : advocates"
              style="overflow: hidden !important"
            >
              <a-list-item slot="renderItem" key="item.title" slot-scope="item">
                <card-info :advocate="item"></card-info>
              </a-list-item>
            </a-list>
          </div>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import CardInfo from "../../components/Cards/CardInfo.vue";
import DefaultHeader from "../../components/Headers/DefaultHeader.vue";
import VueRangeSlider from "vue-range-component";
import "../../../public/home/css/range-slider.css";
export default {
  props: ["advocates"],
  components: {
    DefaultHeader,
    CardInfo,
    VueRangeSlider,
  },
  data() {
    return {
      defaultCounty: null,
      county: null,
      category: null,
      counties: [
        "Abia State",
        "Adamawa State",
        "Akwa Ibom State",
        "Anambra State",
        "Bauchi State",
        "Benue State",
        " Borno State",
        " Cross River State",
        "Delta State",
        "Ebonyi State",
        "Edo State",
        "Ekiti State",
        "Enugu State",
        "Gombe State ",
        "Imo State",
        "Jigawa State",
        "Kaduna State",
        "Kano State",
        "Katsina State",
        "Kebbi State",
        "Kogi State",
        "Kwara State",
        " Lagos State",
        "Nassarawa State",
        "Niger State",
        "Ogun State",
        "Ondo State",
        "Plateau State",
        "Rivers State",
        "Sokoto State",
        " Taraba State",
        "Yobe State",
        "Zamfara State",
        "Federal Capital Territory",
      ],
      categories: [
        " Asset Tracing & Recovery",

        "Banking and Finance",

        "Bankruptcy & Insolvency",

        "Capital Markets",

        "Competition & Anti-trust",

        "Construction",
        "Corporate Advisory and Company Secretarial",

        "Cyber Security",

        "Debt Recovery & Restructuring",

        "Dispute Resolution (Litigation and ADR)",

        "Employment, Labour Relations and Immigration",

        "Energy (Power, Oil and Gas, Mining)",

        "Entertainment",

        "Family Law (Trust, Matrimonial Causes, Succession etc.)",

        "Health and Pharmaceuticals",

        "ICT (Information Technology)",

        "Insurance",

        "Intellectual Property",

        " International trade",

        "Mergers & Acquisitions",
        "Privacy & Data Protection",

        "Private Equity and Venture Capital",

        "Privatization & Public Procurement",

        "Real Estate",

        "Regulatory Compliance",
        "Sports",
        "Tax Law",
        "Telecommunication (Telecommunications & Media)",

        "·Transportation (Aviation, Logistics, Maritime, Shipping etc)",
      ],
      experience: 2,
      data: [],
      message: "Hello",
      shopbymenu: true,
      inputValue: 0,
      productItemsNumbers: 19,
      filtertoApply: ["size"],
      filtersAppied: [],
      genders: ["male", "female"],
      colors: ["red", "blue", "black", "white", "gold"],
      experience: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      colorsActive: [],
      sizesActive: [],
      filteredItems2: [],
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      },
      searchName: "",
      searchString: "",
      value: [0, 50],
      selectedPractiseArea: [],
      selectedCounty: "",
      years_of_experience: [0, 50],
      displayItems: [],
      filterApplied: false,
    };
  },
  methods: {
    removeTags: function (item) {
      var itemIndex = this.filtersAppied.indexOf(item);
      this.filtersAppied.splice(itemIndex, 1);
    },
    clearFilters() {
      this.filterApplied = false;
      this.selectedCounty = "";
      this.selectedPractiseArea = [];
    },
    clearTags() {
      this.filtersAppied = [];
    },
    setExperience(element) {
      // //find range  elements
      const oldRange = this.filtersAppied.filter((element) =>
        Array.isArray(element)
      );
      // //remove experience range
      oldRange.forEach((e) => {
        this.filtersAppied.pop(e);
      });
      // //add new experience
      this.filtersAppied.push(element);
      console.log(this.filtersAppied);
    },
    setActive: function (element) {
      if (this.selectedPractiseArea.indexOf(element) > -1) {
        this.selectedPractiseArea.pop(element);
      } else {
        this.selectedPractiseArea.push(element);
      }
    },
    isActive: function (menuItem) {
      return this.filtersAppied.indexOf(menuItem) > -1;
    },
    formatter(value) {
      return `${value} Years`;
    },
    onSearch() {
      if (this.searchString) {
        this.filtersAppied = false;
        return this.advocates.filter((a) =>
          a.username.includes(this.searchString)
        );
      }
      return this.advocates;
    },
    // filterAdvocates(
    //   county,
    //   minExperience,
    //   maxExperience,
    //   practiceAreas,
    //   advocates
    // ) {
    //   return advocates.filter((advocate) => {
    //     let experience =
    //       new Date().getFullYear() -
    //       new Date(advocate.practise_start).getFullYear();
    //     // Check if the advocate's country matches the specified country
    //     if (advocate.location !== county) {
    //       return false;
    //     }

    //     // Check if the advocate's experience is within the specified range
    //     if (experience < minExperience || experience > maxExperience) {
    //       return false;
    //     }

    //     // Check if the advocate's practice areas include all the specified practice areas
    //     return practiceAreas.every((practiceArea) => {
    //       return advocate.practise_areas.includes(practiceArea);
    //     });
    //   });
    // },
    filterAdvocates(
      county,
      minExperience,
      maxExperience,
      practiceAreas,
      advocates
    ) {
      // Filter advocates based on country
      if (county) {
        advocates = advocates.filter(
          (advocate) => advocate.location === county
        );
      }

      // Filter advocates based on years of experience
      if (minExperience || maxExperience) {
        advocates = advocates.filter((advocate) => {
          let experience =
            new Date().getFullYear() -
            new Date(advocate.practise_start).getFullYear();
          if (minExperience && experience < minExperience) {
            return false;
          }
          if (maxExperience && experience > maxExperience) {
            return false;
          }
          return true;
        });
      }

      // Filter advocates based on practice areas
      if (practiceAreas && practiceAreas.length > 0) {
        advocates = advocates.filter((advocate) => {
          return practiceAreas.every((area) =>
            advocate.all_areas.includes(area)
          );
        });
      }

      return advocates;
    },

    filterItems() {
      // Get the selected filter values
      const selectedPractiseArea = this.selectedPractiseArea;
      const selectedCounty = this.selectedCounty;
      const years_of_experience = this.years_of_experience;
      // Update the items to display the filtered items

      this.displayItems = this.filterAdvocates(
        selectedCounty,
        years_of_experience[0],
        years_of_experience[1],
        selectedPractiseArea,
        this.myAdvocates
      );
      this.filterApplied = true;
    },
  },
  computed: {
    ...mapState([
      "user",
      "allAdvocates",
      "practiseAreas",
      "loading",
      "firebaseEror",
    ]),

    myAdvocates() {
      return this.advocates.map((obj) => {
        const { specialisation, practise_areas } = obj;
        const all_areas = specialisation + " " + practise_areas.join(" ");
        return { ...obj, all_areas };
      });
    },
  },
  updated() {},
  mounted() {},
  created() {},
};
</script>
