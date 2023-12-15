<template>
  <div class="container mx-auto">
    <div>
      <h2 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Supreme Court Justices
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        <div v-for="(judge,index) of judges" :key="index"
          class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="flex flex-col items-center py-3" >
            <img
              class="w-full h-56 mb-3  shadow-lg"
              :src="judge.image"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
             {{ judge.name }}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ judge.title }}</span>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <a-button type="primary" @click="showModal">View biography</a-button>
            </div>
            <a-modal v-model="visible" :title="judge.name" @ok="handleOk">
      <p>{{ judge.biography }}</p>
    </a-modal>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      judges: [
        {
          name: "Lord Ariwoola ",
          title: "Justice of the Supreme Court",
          biography:
            "Lord Ariwoola was appointed a Justice of the Supreme Court of Nigeria in 2011. His Lordship was a Justice of the Court of Appeal between 2005 and 2011 after having been elevated from the State High Court of Oyo State. His Lordship was first appointed a Judge of Superior Court of record in Oyo State in 1992 from private legal practice.Lord Ariwoola started his educational career in his home town Iseyin at the Local Authority Demonstration School, Oluwole in Iseyin Local government of Oyo State between 1959 and 1967. He was in the Muslim Modern School in the same town between 1968 and 1969 before proceeding to Ansar-Ud-Deen High School, Saki in Oyo North of Oyo State.His Lordship studied law at the University of Ife (now Obafemi Awolowo University), Ile Ife and bagged his bachelor of laws degree with honors in July, 1980. In July 1981, Olu Ariwoola was called to the Nigeria bar and got enrolled at the Supreme Court of Nigeria as a Solicitor and Advocate soon thereafter.His Lordship was a State Counsel on National Youth Service (NYSC) at the Ministry of Justice, Akure, Ondo State and later as Legal Officer in the Ministry of Justice of his home state Oyo State until 1988 when he voluntarily left the official bar of the State Civil Service for private practice. His Lordship worked as Counsel in-Chambers of Chief Ladosu Ladapo, SAN between October, 1988 and July 1989 when he established Olukayode Ariwoola & Co – a firm of legal Practitioners and Consultants in Oyo town in August, 1989 from where he was appointed in November, 1992 as a Judge of Oyo State Judiciary.Hon. Justice Ariwoola was born to the Ariwoola family of Iseyin over 60 years ago. His Lordship must have something to do, in a way, with figure 2. While His Lordship was born on the 22nd August, he was sworn in as a Judge of the High Court on 2nd November, 1992, as a Justice of the Court of Appeal (JCA) on 22nd November, 2005 and again was sworn in as Justice of the Supreme Court of Nigeria (JSC) on 22nd November, 2011",
          image: "/images/judges/judge-1.jpg",
        },
        {
          name: "Hon. Justice Musa Dattijo Muhammad CFR",
          title: "Justice of the Supreme Court",
         
          biography: "Hon. Justice Musa Dattijo Muhammad CFR was born on 27th October,1953 in Chanchaga Local Government Area in Minna. His Lordship started his basic education in Native Authority School, Minna, 1960-1966; secondary school education at Shelkh Sabbah College (now Sardauna Memorial Secondary School) Kaduna 1967-1971, and he proceeded to Abdullahi Bayero College (now Bayero University) Kano 1972-1973 for pre-degree certificate. And he got his LLB (Hons) at Ahmadu Bello University (Faculty of Law) Zaria 1973-1976, and his BL at the Nigerian Law School 1977. He proceeded to Warwick University Coventry UK for his LLM 1982-1983, and also institute of Advance Certificate in Practice procedure.",
          image: "/images/judges/judge-2.png",
        },
        {
          name: "Kudirat Motonmori Olatokunbo Kekere-Ekun CFR",
          title: "Justice of the Supreme Court",
          biography: "Hon. Mr. Justice Kudirat Motonmori Olatokunbo KEKERE-EKUN CFR was born on May 7, 1958. She obtained her LL.B in 1980 from the University of Lagos and LL.M from the London School of Economic and Political Science in November 1983. She was called to the Nigerian Bar on 10th July 1981. She was appointed a Senior Magistrate Grade II, Lagos State Judiciary in December 1989. She was appointed as a Judge of the High Court of Lagos State in July 1996. She served as Chairman Robbery and Firearms Tribunal, Zone II, Ikeja, Lagos from November 1996 to May 1999. She was elevated as a Justice of the Court of Appeal on 22nd September 2004. She served as a member of the Court of Appeal ICT Committee from June 2011 to July 2013. She has attended numerous courses and seminars within and outside Nigeria, such as Case Management and Court Administration Training Workshop Organized by the National Centre for State Courts in June 2001, ICT Training Course (Information Technology Infrastructure Library) in Dubai UAE in July 2012 and the 34th Cambridge International Symposium on Economic Crime, Cambridge, UK in September 2016.She was appointed a Justice of Supreme Court of Nigeria on June 8, 2013.",
          image: "/images/judges/judge-3.jpg",
        },
      ],
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.visible = false;
    },
  },
};
</script>

<style>
</style>