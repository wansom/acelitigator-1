<template>
  <!-- Active Users Card -->
  <a-card :bordered="false" class="dashboard-bar-chart">
    <a-row>
      <a-col :span="24" :md="18">
        <div>
		<canvas ref="chart" :style="{'height': height + 'px'}"></canvas>
	</div>
      </a-col>
      <a-col :span="24" :md="6">
        <div>
          <a-card :bordered="false" class="widget-1 m-2">
          <a-statistic
            title="Total Profile Views"
            :value="visitors.length"
            :precision="0"
            class="text-success"
          >
          </a-statistic>
          <div class="icon" v-html="icon"></div>
        </a-card>
        <a-button-group class="mx-2">
      <a-button @click="()=>{updateChartLabels( 'thisWeek')}">This Week</a-button>
      <a-button @click="()=>{updateChartLabels( 'thisMonth')}">This Month</a-button>
      <a-button @click="()=>{updateChartLabels( 'thisYear')}">This Year</a-button>
    </a-button-group>
        </div>

</a-col>
    </a-row>


  </a-card>
  <!-- Active Users Card -->
</template>

<script>
import { mapState } from 'vuex';
// Bar chart for "Active Users" card.
import ChartBar from "../Charts/ChartBar";
import ChartLine from "../Charts/ChartLine";
import { Chart, registerables } from 'chart.js';
	Chart.register(...registerables);

export default {
  props: ["visitors"],
  components: {
    ChartBar,
    ChartLine,
  },
  data() {
    return {
      height:400,
      chart: null,
      profileViewsData: [],
      icon: `<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" fill="#111827"/>
							<path d="M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z" fill="#111827"/>
							<path d="M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z" fill="#111827"/>
							<path d="M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z" fill="#111827"/>
						</svg>`,
      lineChartData: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Mobile apps",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#1890FF",
            borderWidth: 3,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6,
          },
        ],
      },
    };
  },
  computed: {
    ...mapState(["selectedTimePeriod",]),
    weeklyChartData() {
      // Prepare data for weekly chart
      const data = {};
      const now = new Date();
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 6);

      const labels = daysOfWeek.map(day => day.toLocaleString('en-us', { weekday: 'short' }));
      const values = labels.map(label => {
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        date.setDate(date.getDate() - now.getDay() + labels.indexOf(label));
        const dateString = date.toLocaleDateString('en-us', { month: 'short', day: 'numeric' });
        const count = this.visitors.filter(timestamp => {
          const profileViewDate = timestamp.toDate();
          const profileViewDateString = profileViewDate.toLocaleDateString('en-us', { month: 'short', day: 'numeric' });
          return profileViewDateString === dateString;
        })?.length;
        return count;
      });

      return {
        labels: labels,
        datasets: [
          {
            label: 'Profile Views',
            data: values,
            backgroundColor: '#1890ff', // Ant Design primary color
            tension: 0.4
          }
        ]
      };
    },
    monthlyChartData() {
  // Prepare data for monthly chart
  const data = {};
  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
  const endDate = new Date(now.getFullYear(), now.getMonth(), daysInMonth);

  const labels = Array.from({ length: daysInMonth }, (_, index) => String(index + 1));
  const values = labels.map(label => {
    const date = new Date(now.getFullYear(), now.getMonth(), parseInt(label));
    const dateString = date.toLocaleDateString('en-us', { month: 'short', day: 'numeric' });
    const count = this.visitors.filter(timestamp => {
      const profileViewDate = timestamp.toDate();
      const profileViewDateString = profileViewDate.toLocaleDateString('en-us', { month: 'short', day: 'numeric' });
      return profileViewDateString === dateString;
    })?.length;
    return count;
  });

  return {
    labels: labels,
    datasets: [
      {
        label: 'Profile Views',
        data: values,
        backgroundColor: '#1890ff', // Ant Design primary color
        tension: 0.4
      }
    ]
  };
},
yearlyChartData() {
  // Prepare data for yearly chart
  const data = {};
  const now = new Date();
  const monthsInYear = 12;
  const startDate = new Date(now.getFullYear(), 0, 1);
  const endDate = new Date(now.getFullYear(), 11, 31);

  const labels = Array.from({ length: monthsInYear }, (_, index) => {
    const monthDate = new Date(now.getFullYear(), index, 1);
    return monthDate.toLocaleDateString('en-us', { month: 'short' });
  });

  const values = labels.map(label => {
    const count = this.visitors.filter(timestamp => {
      const profileViewDate = timestamp.toDate();
      const profileViewMonth = profileViewDate.getMonth();
      const profileViewMonthString = profileViewDate.toLocaleDateString('en-us', { month: 'short' });
      return profileViewMonthString === label;
    })?.length;
    return count;
  });

  return {
    labels: labels,
    datasets: [
      {
        label: 'Profile Views',
        data: values,
        backgroundColor: '#1890ff' ,// Ant Design primary color
        tension: 0.4
      }
    ]
  };
},
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            stepSize: 1,
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
          }
        }
      };
    }
  },
  methods:{
    loadData(value){
      this.selectedTimePeriod =value
    },
    updateChartLabels(value) {
     
      // Update chart data labels when selected time period changes
      this.$store.dispatch("changeTimeLine",value)
      if(this.selectedTimePeriod=="thisWeek"){
        this.profileViewsData=this.weeklyChartData
      }
      if(this.selectedTimePeriod=="thisMonth"){
        this.profileViewsData=this.monthlyChartData
      }
      if(this.selectedTimePeriod=="thisYear"){
        this.profileViewsData=this.yearlyChartData
      }
      this.chart.destroy() ;
      let ctx = this.$refs.chart.getContext("2d");

   
			this.chart = new Chart(ctx, {
				type: "line",
				data: this.profileViewsData,
     			options: {
					layout: {
						padding: {
							top: 30,
							right: 15,
							left: 10,
							bottom: 5,
						},
					},
					responsive: true,
					maintainAspectRatio: false,
					plugins: {
						legend: {
							display: false,
						},
					},
					tooltips: {
						enabled: true,
						mode: "index",
						intersect: false,
					},
					scales: {
						y: {
							grid: {
								display: true,
								color: "rgba(0, 0, 0, .2)",
								zeroLineColor: "#000000",
								borderDash: [6],
								borderDashOffset: [6],
							},
							ticks: {
								suggestedMin: 0,
								suggestedMax: 10000,
								display: true,
								color: "#8C8C8C",
								font: {
									size: 14,
									lineHeight: 1.8,
									weight: '600',
									family: "Open Sans",
								},
							},
						},
						x: {
							grid: {
								display: false,
							},
							ticks: {
								display: true,
								color: "#8C8C8C",
								font: {
									size: 14,
									lineHeight: 1.5,
									weight: '600',
									family: "Open Sans",
								},
							},
						},
					},
				}
			});
    }
  },
  mounted() {
  // Set initial chart data and labels
if(this.selectedTimePeriod=="thisWeek"){
        this.profileViewsData=this.weeklyChartData
      }
      if(this.selectedTimePeriod=="thisMonth"){
        this.profileViewsData=this.monthlyChartData
      }
      if(this.selectedTimePeriod=="thisYear"){
        this.profileViewsData=this.yearlyChartData
      }
let ctx = this.$refs.chart.getContext("2d");

			this.chart = new Chart(ctx, {
				type: "line",
				data: this.profileViewsData,
     			options: {
					layout: {
						padding: {
							top: 30,
							right: 15,
							left: 10,
							bottom: 5,
						},
					},
					responsive: true,
					maintainAspectRatio: false,
					plugins: {
						legend: {
							display: false,
						},
					},
					tooltips: {
						enabled: true,
						mode: "index",
						intersect: false,
					},
					scales: {
						y: {
							grid: {
								display: true,
								color: "rgba(0, 0, 0, .2)",
								zeroLineColor: "#000000",
								borderDash: [6],
								borderDashOffset: [6],
							},
							ticks: {
								suggestedMin: 0,
								suggestedMax: 10000,
								display: true,
								color: "#8C8C8C",
								font: {
									size: 14,
									lineHeight: 1.8,
									weight: '600',
									family: "Open Sans",
								},
							},
						},
						x: {
							grid: {
								display: false,
							},
							ticks: {
								display: true,
								color: "#8C8C8C",
								font: {
									size: 14,
									lineHeight: 1.5,
									weight: '600',
									family: "Open Sans",
								},
							},
						},
					},
				}
			});
},
		// Right before the component is destroyed,
		// also destroy the chart.
		beforeDestroy: function () {
			this.chart.destroy() ;
		},
};
</script>

<style lang="scss" scoped>
</style>
