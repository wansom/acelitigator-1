<template>
  <div>
    <!-- Charts -->
		<a-row :gutter="24" type="flex" align="stretch"  v-if="user.status == 'active'">
			<a-col :span="24"  class="mb-4">

				<!-- Active Users Card -->
				<CardBarChart :visitors="user.profile_visits"></CardBarChart>
				<!-- Active Users Card -->

			</a-col>
			<a-col :span="24"  class="mb-24">
        <CardInvoices
				:first_name="user.first_name"
				:last_name="user.last_name"
				:data="user.invoices"
          		:date="user.subscription_date"
				></CardInvoices> 
			</a-col>
		</a-row>
		<!-- / Charts -->

		<!-- Table & Timeline -->
		<!-- <a-row :gutter="24" type="flex" align="stretch">

			<a-col :span="24" :lg="16" class="mb-24">
				<TopLawyers
					:data="tableData"
					:columns="tableColumns"
				></TopLawyers>			
			</a-col>
			
			<a-col :span="24" :lg="8" class="mb-24">
				<CardOrderHistory :notifications="user.notifications"></CardOrderHistory>
			</a-col>
		
		</a-row> -->
    <admin-dashboard v-if="user.status=='admin'"></admin-dashboard>
    <!-- / Table & Timeline -->
    <!-- / Charts -->
    <profile-information v-if="user.status!='admin'&&user.status !='active'"></profile-information>
  </div>
</template>

<script>
// Bar chart for "Active Users" card.
import CardBarChart from "../components/Cards/CardBarChart";

// Line chart for "Sales Overview" card.
import CardLineChart from "../components/Cards/CardLineChart";

// Counter Widgets
import WidgetCounter from "../components/Widgets/WidgetCounter";

// "Projects" table component.
import TopLawyers from "../components/Cards/TopLawyers";

// Order History card component.
import CardOrderHistory from "../components/Cards/CardOrderHistory";
import ProfileInformation from "../components/forms/ProfileInformation.vue";

// Information card 1.
import CardInfo from "../components/Cards/CardInfo";

// Information card 2.
import CardInfo2 from "../components/Cards/CardInfo2";
import CardInvoices from "../components/Cards/CardInvoices"
import { mapState } from "vuex";
import * as fb from "../firebase";
import AdminDashboard from './AdminDashboard.vue';
	// "Projects" table list of columns and their properties.
	const tableColumns = [
		{
			title: 'Name',
			dataIndex: 'company',
			scopedSlots: { customRender: 'company' },
			width: 300,
		},

		{
			title: 'Email',
			dataIndex: 'budget',
			class: 'font-bold text-muted text-sm',
		},
		{
			title: 'Location',
			dataIndex: 'budget',
			class: 'font-bold text-muted text-sm',
		},
		{
			title: 'Practise Areas',
			dataIndex: 'budget',
			class: 'font-bold text-muted text-sm',
		},
		{
			title: 'Profile Views',
			scopedSlots: { customRender: 'completion' },
			dataIndex: 'completion',
		},
	];

	// "Projects" table list of rows and their properties.
	const tableData = [
		{
			key: '3',
			company: {
				name: 'Fix Platform Errors',
				logo: 'images/logos/logo-slack.svg',
			},
			members: [ "images/face-1.jpg", "images/face-2.jpg", "images/face-3.jpg", ],
			budget: 'Not Set',
			completion: {
				label: '100',
				status: 'success',
				value: 100,
			},
		},
		{
			key: '4',
			company: {
				name: 'Launch new Mobile App',
				logo: 'images/logos/logo-spotify.svg',
			},
			members: [ "images/face-1.jpg", "images/face-2.jpg", ],
			budget: '$20,600',
			completion: {
				label: '100',
				status: 'success',
				value: 100,
			},
		},
		{
			key: '5',
			company: {
				name: 'Add the New Landing Page',
				logo: 'images/logos/logo-jira.svg',
			},
			members: [ "images/face-1.jpg", "images/face-4.jpg", "images/face-2.jpg", "images/face-3.jpg", ],
			budget: '$4,000',
			completion: 80,
		},
	];
export default {
  components: {
    CardBarChart,
    CardLineChart,
    WidgetCounter,
    TopLawyers,
    CardOrderHistory,
    CardInfo,
    CardInfo2,
    ProfileInformation,
    CardInvoices,
    AdminDashboard
  },
  data() {
    return {
      tableColumns,
      tableData
    };
  },

  computed: {
    ...mapState(["allAdvocates",]),
    user(){
      return this.allAdvocates.filter((i)=>i.id==fb.auth.currentUser.uid)[0]
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss"></style>
