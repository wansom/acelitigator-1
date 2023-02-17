import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import * as fb from "../firebase";
import swal from "sweetalert";
const axios = require("axios").default;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    step:0,
    advocates:[],
    requests:[],
    allAdvocates:[],
    request:{},
    loading:false,
    current:1,
    practiseAreas: [
      "Family",
      "Employment",
      "Criminal Defense",
      "Real Estate",
      "Business",
      "Immigration",
      "Personal Injury",
      "Wills, Trusts & Estates",
      "Bankruptcy & Finances",
      "Government",
      "Products & Services",
      "Intellectual Property",
    ],
    counties: [
      "All",
      "Nairobi",
      "Mombasa",
      "Kwale",
      "Kilifi",
      "Tana River",
      "Lamu",
      "Taita/Taveta",
      " Garissa",
      "Wajir",
      "Mandera",
      "Marsabit",
      "Isiolo",
      "Meru",
      "Tharaka-Nithi",
      "Embu",
      "Kitui",
      "Machakos",
      "Makueni",
      "Nyandarua",
      "Nyeri",
      "Kirinyaga",
      "Murang'a",
      " Kiambu",
      "Turkana",
      "West Pokot",
      "Samburu",
      "Trans Nzoia",
      "Uasin Gishu",
      "Elgeyo/Marakwet",
      "Nandi",
      " Baringo",
      "Laikipia",
      "Nakuru",
      "Narok",
      "Kajiado",
      "Kericho",
      "Bomet",
      "Kakamega",
      "Vihiga",
      "Bungoma",
      "Busia",
      "Siaya",
      "Kisumu",
      "Homa Bay",
      "Migori",
      "Kisii",
      "Nyamira",
    ],
  },
  getters: {},
  mutations: {
    setUserProfile(state, val) {
      state.user = val;
    },
    setStep(state,val){
      state.current=val
    },
    setLoading(state,val){
      state.loading=val

    },
    setAdvocates(state,val){
      state.advocates=val
    },
    setRequests(state,val){
      state.requests=val
    },
    setAllAdvocates(state,val){
      state.allAdvocates=val
    },
    setRequest(state,val){
      state.request=val
    }

    
  },
  actions: {
    //register new user
    signUp({ commit,dispatch }, data) {
      commit("setLoading",true)
      fb.auth
        .createUserWithEmailAndPassword(data.email.replace(/\s/g, ''), data.password)
        .then((result) => {
          fb.usersCollection
            .doc(result.user.uid)
            .set({
              first_name: data.first_name,
              last_name: data.last_name,
              email: data.email,
              password: data.password,
              uid: result.user.uid,
              status: "incomplete",
              notifications:fb.types.FieldValue.arrayUnion({
                notification:`Your account was created successfully proceed to fill your profile`,
                date:new Date()
              })
            })
            .then(() => {
              dispatch("sendMail",{
                name: data.first_name,
                email: data.email,
                subject: "Acelitigator Account",
                content:"Your Account has been created successfully. Please proceed to complete your profile"
              })
              commit("setLoading",false)
              router.push("/sign-in");
            });
        })
        .catch((err) => {
          swal({
            title: "OOPS!",
            text: `${err.message}`,
            icon: "error",
          });
          commit("setLoading",false)
        });
    },

    //login user
    login({ dispatch,commit }, data) {
      commit("setLoading",true)
      fb.auth
        .signInWithEmailAndPassword(data.email.replace(/\s/g, ''), data.password)
        .then((result) => {
          commit("setLoading",false)
          dispatch("fetchUserProfile", result.user);
          router.push("/dashboard");
          
        })
        .catch((err) => {
          swal({
            title: "OOPS!",
            text: `${err.message}`,
            icon: "error",
          });
        });
    },

    fetchUserProfile({ commit}) {
      let currentUser =fb.auth.currentUser;
      if(currentUser){
      let user =this.state.allAdvocates.filter((i)=>i.id===currentUser.uid)[0]
      commit("setUserProfile", user)
      }else{
        commit("setUserProfile", {}); 
      }
    },
    logout({dispatch}){
      fb.auth.signOut().then(()=>{
        router.push("/sign-in")
      }
        
      )

    },
    restPassword({commit},values){
      commit("setLoading",true)
      fb.auth.sendPasswordResetEmail(values.email).then(()=>{
        commit("setLoading",false)
        router.push("/sign-in")
      }).catch((err)=>{
        commit("setLoading",false)
      })
    },
    /*
    user registration start
    */
    updateUser({ dispatch,commit }, data) {
      commit("setLoading",true)
      let user = fb.auth.currentUser;
      console.log(data)
      fb.usersCollection.doc(user.uid).update(data).then(()=>{
        swal({
          title: "Success!",
          text: `Info updated Successfully!`,
          icon: "success",
        });
        

          fb.usersCollection.doc(user.uid).update({
            notifications:fb.types.FieldValue.arrayUnion({
              notification:`your ${data.step} have been updated successfully`,
              date:new Date()
            })
          })
        if(data.status=="pending approval"){
          fb.usersCollection.doc(user.uid).update({
            notifications:fb.types.FieldValue.arrayUnion({
              notification:`your account details have been submitted successfully for review`,
              date:new Date()
            })
          })
        }
        commit("setLoading",false);
        dispatch("changeStep",data.current)

      }).catch((err)=>{
        console.log(err)
        commit("setLoading",false)
        swal({
          title: "OOPS!",
          text: `${err.message}`,
          icon: "error",
        });
      })
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
              content:values.content
            }
          );
        },
        async fetchAdvocates({ commit }) {
          fb.usersCollection.where("status","==","active").onSnapshot((snapshot) => {
            const loadedAdvocates = [];
            snapshot.forEach((doc) => {
              const loadedAdvocate = doc.data();
              (loadedAdvocate.id = doc.id), loadedAdvocates.push(loadedAdvocate);
            });
            commit("setAdvocates", loadedAdvocates);
          });
        },
        
        async fetchRequests({ commit }) {
          fb.usersCollection.where("status","==","pending approval").onSnapshot((snapshot) => {
            const loadedAdvocates = [];
            snapshot.forEach((doc) => {
              const loadedAdvocate = doc.data();
              (loadedAdvocate.id = doc.id), loadedAdvocates.push(loadedAdvocate);
            });
            commit("setRequests", loadedAdvocates);
          });
        },
      
        async fetAllAdvocates({ commit }) {
          fb.usersCollection.onSnapshot((snapshot) => {
            const loadedAdvocates = [];
            snapshot.forEach((doc) => {
              const loadedAdvocate = doc.data();
              (loadedAdvocate.id = doc.id), loadedAdvocates.push(loadedAdvocate);
            });
            commit("setAllAdvocates", loadedAdvocates);
          });
        },
        fetchSingleRequest({commit},uid){
          fb.usersCollection.doc(uid).get()
        },
        changeStep({commit},value){
          commit("setStep",value)
        },
        changeLoading({commit},data){
          commit("setLoading",data)

        }
  },
  modules: {},
});
