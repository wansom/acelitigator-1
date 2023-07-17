<template>
  <!-- Invoices Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <template #title>
      <h6 class="font-semibold m-0">Receipts</h6>
    </template>
    <template slot="extra" >
      <span class="text-red-600 font-bold"> Next Payment:{{ date }} </span>
    </template>
    <a-list
      class="invoice-list"
      item-layout="horizontal"
      :split="false"
      :data-source="data"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-button slot="actions" type="primary" @click="generateReport" class="flex items-center text-white">
          <svg
            width="15"
            height="15"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
              fill="#111827"
            />
          </svg>
         Download  PDF
        </a-button>
        <a-list-item-meta
          :description="item.number.slice(0, 20) + '...'"
          :title="item.date.toDate().toDateString()"
        ></a-list-item-meta>
        <div class="amount"><span class="mx-4">KSH</span>{{ item.amount }}</div>
        <vue-html2pdf
          :show-layout="true"
          :float-layout="true"
          :enable-download="true"
          :preview-modal="true"
          :paginate-elements-by-height="160"
          :filename="date"
          :pdf-quality="2"
          :manual-pagination="false"
          pdf-format="a4"
          pdf-orientation="landscape"
          pdf-content-width="1250px"
          @progress="onProgress($event)"
          @hasStartedGeneration="hasStartedGeneration()"
          @hasGenerated="hasGenerated($event)"
          ref="html2Pdf"
          style="display: none"
        >
          <section slot="pdf-content" class="pdf-section">
            <div class="d-flex justify-content-center p-3">
              <img
                src="images/dial-logo.png"
                alt=""
                style="
                  height: 100px;

                  object-fit: contain;
                "
              />
            </div>
            <div class="pdf-header">
              <div class="text-center">
                <p
                  class="pdf-title"
                  style="letter-spacing: 8px; text-transform: uppercase"
                >
                  Account Subscription Receipt
                </p>
                <p
                  style="letter-spacing: 10px; text-transform: uppercase"
                  class="pdf-sub-title"
                >
                  {{ first_name
                  }}<span style="margin-left: 10px">{{ last_name }}</span>
                </p>
              </div>
            </div>
            <a-divider />
            <div class="d-flex justify-content-center px-5 w-100">
              <table class="styled-table">
                <tr>
                  <td><span class="pdf-asset-details">Amount Due:</span></td>
                  <td>
                    <span class="pdf-asset-details"
                      ><span style="margin-right: 10px">KSH</span
                      >{{ 1500 }}</span
                    >
                  </td>
                </tr>
                <tr>
                  <td><span class="pdf-asset-details">Amount Paid:</span></td>
                  <td>
                    <span class="pdf-asset-details"
                      ><span style="margin-right: 10px">KSH</span
                      >{{ item.amount }}</span
                    >
                  </td>
                </tr>
                <tr>
                  <td><span class="pdf-asset-details">Discount:</span></td>
                  <td>
                    <span class="pdf-asset-details"
                      ><span style="margin-right: 10px">KSH</span
                      >{{ 1500 }}</span
                    >
                  </td>
                </tr>

                <tr>
                  <td>
                    <span class="pdf-asset-details">Payment Date:</span>
                  </td>
                  <td>
                    <span class="pdf-asset-details">{{
                      item.date.toDate().toDateString()
                    }}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="pdf-asset-details"
                      >Transaction reference:</span
                    >
                  </td>
                  <td>
                    <span class="pdf-asset-details">{{ item.number }}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="pdf-asset-details">Next Payment Date:</span>
                  </td>
                  <td>
                    <span class="pdf-asset-details">{{ date }}</span>
                  </td>
                </tr>
              </table>
            </div>
            <div class="text-center">
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <barcode :value="new Date().toDateString()"> Barcode </barcode>
              </div>
              <div
                class="bg-dark text-center"
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100px;
                "
              >
                <p class="pdf-declaration">
                  This is a digital receipt issued by Acelitigator and should
                  not be forged or used by any other party.
                </p>
              </div>
            </div>
          </section>
        </vue-html2pdf>
      </a-list-item>
    </a-list>
  </a-card>
  <!-- / Invoices Card -->
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import VueBarcode from "vue-barcode";
export default {
  props: ["first_name", "last_name", "data", "date"],
  components: {
    VueHtml2pdf,
    barcode: VueBarcode,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    generateReport() {
      this.visible = true;
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>

<style scoped>
.pdf-section {
  border: none;
  justify-self: center;
  align-self: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  height: 900px;
}
.pdf-header {
  display: flex;

  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.pdf-title {
  font-family: "Calibri";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 130%;
  /* or 47px */
  color: #1a191c;
  margin-top: 10px;
  margin-bottom: 10px;
}
.pdf-sub-title {
  font-family: "Calibri";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  /* or 47px */
  color: #808080;
  margin-top: 14px;
  margin-bottom: 10px;
}
.pdf-sub-titles {
  font-family: "Calibri";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 130%;
  /* or 47px */
  color: #808080;
  margin-top: 14px;
  margin-bottom: 10px;
  margin-right: 10px;
}
.pdf-asset-details {
  font-family: "Calibri";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 130%;
  /* or 47px */
  color: #1a191c;
  margin-top: 14px;
  margin-bottom: 10px;
}
.pdf-declaration {
  font-family: "Calibri";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  /* or 47px */
  color: #ffffff;
  margin-top: 14px;
  margin-bottom: 10px;
}
.styled-table {
  border-collapse: collapse;
  margin: 5px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%;
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 6px 8px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
</style>
