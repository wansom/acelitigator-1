<template>
  <div>
    <CardRequestTable :columns="columns" :tableData="requests" :title="title"></CardRequestTable>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardRequestTable from "../components/Cards/CardRequestTable.vue";
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
    title: "",
    scopedSlots: { customRender: "editBtn" },
    width: 50,
  },
];
export default {
  components: { CardRequestTable },
  data() {
    return {
      columns,
      title: "Approve requests",
    };
  },
  computed: {
    ...mapState(["allAdvocates"]),
    requests(){
      return this.allAdvocates.filter((advocate)=>advocate.status==='pending approval')
    }
  },
  mounted() {
  },
};
</script>

<style></style>
