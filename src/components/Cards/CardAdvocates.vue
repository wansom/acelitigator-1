<template>
  <!-- Projects Table Column -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ padding: 0 }"
  >
    <template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <h5 class="font-semibold m-0">Lawyers({{ advocates.length }})</h5>
        </a-col>
        <!-- <a-col
          :span="24"
          :md="12"
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <a-radio-group v-model="projectHeaderBtns" size="small">
            <a-radio-button value="all">ALL</a-radio-button>
            <a-radio-button value="online">Active</a-radio-button>
            <a-radio-button value="stores">Inactive</a-radio-button>
          </a-radio-group>
        </a-col> -->
      </a-row>
    </template>
    <a-table :columns="columns" :data-source="advocates" :pagination="true">
      <template slot="name" slot-scope="text">
        <a>{{ text }}</a>
      </template>

      <a-space
        slot="members"
        slot-scope="members"
        :size="-12"
        class="avatar-chips"
      >
        <template v-for="member in members">
          <a-avatar :key="member" size="small" :src="member" />
        </template>
      </a-space>

      <template slot="company" slot-scope="company">
        <h6 class="m-0">
          <img :src="company.logo" width="25" style="margin-right: 10px" />
          {{ company.name }}
        </h6>
      </template>

      <template slot="completion" slot-scope="completion">
        <div class="progress-right">
          <div class="text-right text-sm font-semibold text-muted pr-15">
            {{
              completion.value || completion.value == 0
                ? completion.value
                : completion
            }}%
          </div>
          <a-progress
            class="m-0"
            :percent="
              completion.value || completion.value == 0
                ? completion.value
                : completion
            "
            :show-info="false"
            size="small"
            :status="completion.status ? completion.status : 'normal'"
          />
        </div>
      </template>

      <template slot="editBtn" slot-scope="row">
        <a-button type="link" :data-id="row.key" v-if="row.status == 'active'" @click="()=>{
			updateStatus(row.id,'deactivated')
		}" >
          Deactivate
        </a-button>
        <a-button
          type="link"
          :data-id="row.key"
          v-if="row.status == 'deactivated'" @click="()=>{
			updateStatus(row.id,'active')
		  }">
		
        
          Activate
        </a-button>
      </template>
    </a-table>
  </a-card>
  <!-- / Projects Table Column -->
</template>

<script>
import { mapState } from "vuex";
import * as fb from "../../firebase";
import {arrayUnion} from "firebase/firestore"

// "Projects" table list of columns and their properties.
const columns = [
  {
    title: "First Name",
    dataIndex: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
  },
  {
    title: "Email",
    dataIndex: "email",
    scopedSlots: { customRender: "email" },
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Status",
    dataIndex: "status",
	filters: [
      { text: 'Active', value: 'active' },
      { text: 'Deactivated', value: 'deactivated' },
	  { text: 'Approved', value: 'approved' },
    ],
	onFilter: (value, record) => record.status.indexOf(value) === 0,
    scopedSlots: { customRender: "status" },
  },
  {
    title: "Actions",
    scopedSlots: { customRender: "editBtn" },
  },
];
export default {
  props: {},
  data() {
    return {
      // Active button for the "Projects" table's card header radio button group.
      projectHeaderBtns: "all",
      columns,
    };
  },
  methods:{
	updateStatus(uid,status){
		fb.usersCollection.doc(uid).update({
			status:status,
      notifications:arrayUnion({
        notification:"your account has been approved",
        date:new Date()
      })
		}).then(()=>{
			this.$message.success("status updated successfully")
		})
	}
  },
  computed: {
    ...mapState(["allAdvocates", "user"]),
    advocates() {
      return this.allAdvocates.filter(
        (a) =>
          a.status == "active" ||
          a.status == "approved" ||
          a.status == "deactivated"
      );
    },
  },
  mounted() {
    this.$store.dispatch("fetAllAdvocates");
  },
};
</script>
