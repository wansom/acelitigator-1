import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import {
  getAllRequests,
  addLawyer,
  updateAdvocate,
  getAllCourts,
  addCourt,
} from "../database/firestore";
import swal from "sweetalert";
import { createUser, signIn, logout, passwordReset } from "../database/auth";
import { arrayUnion, onSnapshot, collection } from "firebase/firestore";
import { auth, firestoreDb } from "../database/index";
const axios = require("axios").default;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    step: 0,
    advocates: [],
    requests: [],
    allAdvocates: [],
    request: {},
    loading: false,
    current: 1,
    practiseAreas:[
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
    counties: [
      "Abia State (17 LGAs)",
      "Adamawa State (22 LGAs)",
      "Akwa Ibom State (31 LGAs)",
      "Anambra State (21 LGAs)",
      "Bauchi State (20 LGAs)",
      "Benue State (22 LGAs)",
      " Borno State (27 LGAs)",
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
    courts: [
      "Supreme Court",
      "Court of Appeal",
      "National Industrial Court",
      "High Court",
      "Federal Tribunals",
      "State Tribunals",
    ],
    courtData: [],
    filteredItems: [],
    firebaseEror: "",
    selectedTimePeriod: "thisWeek",
  },
  getters: {},
  mutations: {
    setUserProfile(state, val) {
      state.user = val;
    },
    setSelectedTimePeriod(state, val) {
      state.selectedTimePeriod = val;
    },
    setStep(state, val) {
      state.current = val;
    },
    setLoading(state, val) {
      state.loading = val;
    },
    setAdvocates(state, val) {
      state.advocates = val;
    },
    setRequests(state, val) {
      state.requests = val;
    },
    setAllAdvocates(state, val) {
      state.allAdvocates = val;
    },
    setRequest(state, val) {
      state.request = val;
    },
    setCourtData(state, val) {
      state.courtData = val;
    },
    setFilteredItems(state, val) {
      state.filteredItems = val;
    },
    setFirebaseError(state, val) {
      state.firebaseEror = val;
    },
  },
  actions: {
    //register new user
    signUp({ commit, dispatch }, data) {
      dispatch("changeLoading", true);
      createUser({
        email: data.email,
        password: data.password,
      })
        .then((result) => {
          addLawyer({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            uid: result.user.uid,
            status: "incomplete",
            profile_visits: [],
            username: `${data.first_name}${data.last_name}`,
            _id: result.user.uid,
            notifications: arrayUnion({
              notification: `Your account was created successfully. Proceed to https://advocatelisting.acelitigator.com/sign-in to complete your profile`,
              date: new Date(),
            }),
          }).then(() => {
            router.push("/dashboard");
            dispatch("sendMail", {
              name: data.first_name,
              email: data.email,
              subject: "Dial A lawyer Account",
              content:
                "Your Account has been created successfully. You can now log into your account and complete your profile befor your account is activated",
            });
           
            dispatch("changeLoading", false);
           
          });
        })
        .catch((err) => { 
          swal({
            title: "`This email count is already in use by another account!",
            text: `please enter another email and try again`,
            icon: "error",
          });   
          dispatch("changeLoading", false);
        });
    },

    //login user
    login({ dispatch }, data) {
      dispatch("changeLoading", true);
      signIn(data)
        .then(() => {
          dispatch("changeLoading", false);
          dispatch("fetchUserProfile");
          router.push("/dashboard");
        })
        .catch((err) => {
          dispatch("changeLoading", false);
          swal({
            title: "Authentication Failed!",
            text: `Please check the credentials and try again`,
            icon: "error",
          });
        });
    },

    fetchUserProfile({ commit }) {
      let currentUser = auth.currentUser;
      if (currentUser) {
        let user = this.state.allAdvocates.filter(
          (i) => i.id === currentUser.uid
        )[0];
        commit("setUserProfile", user);
      } else {
        commit("setUserProfile", {});
      }
    },

    logout({ dispatch }) {
      logout().then(() => {
        router.push("/sign-in");
        localStorage.clear();
      });
    },

    restPassword({ commit }, values) {
      dispatch("changeLoading", true);
      passwordReset(values.email)
        .then(() => {
          dispatch("changeLoading", false);
        })
        .catch((err) => {
          dispatch("changeLoading", false);
        });
    },
    /*
    user registration start
    */
    updateUser({ dispatch, commit }, data) {
      dispatch("changeLoading", true);
      let user = auth.currentUser;
      updateAdvocate(user.uid, data)
        .then(() => {
          if (data.status == "pending approval") {

            swal({
              title: "Account submitted for review!",
              text: `Your details have been submitted successfully.Your account will be reviewed within 48 hours`,
              icon: "success",
            })  
          }else{
            swal({
              title: "Progress Saved.",
              text: `Info updated Successfully. Click next to continue.`,
              icon: "success",
            });
          }
          updateAdvocate(user.uid, {
            notifications: arrayUnion({
              notification: `your ${data.step} have been updated successfully`,
              date: new Date(),
            }),
          });
          if (data.status == "pending approval") {
            updateAdvocate(user.uid, {
              notifications: arrayUnion({
                notification: `your account details have been submitted successfully for review`,
                date: new Date(),
              }),
            });
          }
          dispatch("changeLoading", false);
          dispatch("changeStep", data.current);
        })
        .catch((err) => {
          console.log(err);
          dispatch("changeLoading", false);
          swal({
            title: "OOPS!",
            text: `${err.message}`,
            icon: "error",
          });
        });
    },

    //set selected time period
    changeTimeLine({ commit }, val) {
      commit("setSelectedTimePeriod", val);
      console.log(val)
    },
    //mpesa
    async intiatePayments({ dispatch }, values) {
      const result = await axios.get(
        `https://us-central1-scanpal-f74da.cloudfunctions.net/barizi/mpesa/pay/${values.amount}/${values.phone_number}`
      );
      return result;
    },
    async confirmPayments({ dispatch }) {
      const result = await axios.get(
        "https://us-central1-scanpal-f74da.cloudfunctions.net/barizi/mpesa/callback"
      );
      return result;
    },
    //send email
    async sendMail({ dispatch }, values) {
      await axios.post(
        "https://us-central1-scanpal-f74da.cloudfunctions.net/barizi/mail/send",
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          content: values.content,
        }
      ).then((res)=>{
        console.log(res)
      })
    },
    async fetchCourts({ commit }) {
      getAllCourts().then(({ data }) => {
        commit("setCourtData", data);
      });
    },

    async fetchRequests({ commit }) {
      getAllRequests()
        .then(({ data }) => {
          commit("setRequests", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    subscribeToCollection({ commit }) {
      const LAWYERS_PATH = "nigeria_lawyers";
      const myCollection = collection(firestoreDb, LAWYERS_PATH);

      const unsubscribe = onSnapshot(myCollection, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        commit("setAdvocates", data);
      });

      // Return a function to detach the listener when the action is no longer needed
      return unsubscribe;
    },
    async fetAllAdvocates({ dispatch, commit }) {
      const LAWYERS_PATH = "nigeria_lawyers";
      const myCollection = collection(firestoreDb, LAWYERS_PATH);
      const unsubscribe = onSnapshot(
        myCollection,
        (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          commit("setAllAdvocates", data);
        },
        (error) => {
          dispatch("changeLoading", false);
          commit("setFirebaseError", error.message);
          console.log(error.message);
        }
      );

      // Return a function to detach the listener when the action is no longer needed
      return unsubscribe;
    },
    changeStep({ commit }, value) {
      commit("setStep", value);
    },
    changeLoading({ commit }, data) {
      commit("setLoading", data);
    },

    async addCourt({ dispatch }, data) {
      dispatch("changeLoading", true);
      addCourt(data).then(() => {
        dispatch("changeLoading", false);
        location.reload();
      });
    },
  },
  modules: {},
});
