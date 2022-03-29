<template>
  <div class="container ">
    <h5 class="ml-5">Company Details</h5>
    <b class=" float-left"> {{ data.length }}results</b
    >

    <button
      type="button"
      class="btn btn-primary float-right mb-5"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Add Company
    </button>

    <!-- Modal -->
    <div
      class="modal"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">company details</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="handlePostData">
              <div class="form-group row">
                <label for="company" class="col-sm-2 col-form-label"
                  >company</label
                >
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    id="company"
                    v-model="contact_details.company"
                    placeholder="company"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="phone" class="col-sm-2 col-form-label">phone</label>
                <div class="col-sm-6">
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    v-model="contact_details.phone"
                    placeholder="phone"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="fax" class="col-sm-2 col-form-label">Fax</label>
                <div class="col-sm-6">
                  <input
                    type="tel"
                    class="form-control"
                    id="fax"
                    v-model="contact_details.fax"
                    placeholder="fax"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">email</label>
                <div class="col-sm-6">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="contact_details.email"
                    placeholder="email"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="city" class="col-sm-2 col-form-label">city</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    id="city"
                    v-model="contact_details.city"
                    placeholder="city"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="state" class="col-sm-2 col-form-label">state</label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    id="state"
                    v-model="contact_details.state"
                    placeholder="state"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
             
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

    <table id="myTable" class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th>Id</th>
          <th>CompanyName</th>
          <th>phone</th>
          <th>fax</th>
          <th>email</th>
          <th>city</th>
          <th>state</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, i) in data" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ result.company }}</td>
          <td>{{ result.phone }}</td>
          <td>{{ result.fax }}</td>
          <td>{{ result.email }}</td>
          <td>{{ result.city }}</td>
          <td>{{ result.state }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GetData",

  data() {
    return {
      contact_details: {
        company: "",
        phone: null,
        fax: null,
        email: "",
        city: "",
        state: "",
      },
      data: [],
      results: [],
    };
  },
  mounted() {
    this.handleGetData();
    this. handlePostData();
  },

  methods: {
    async handlePostData() {
      if (
        Object.keys(this.contact_details.company).length > 0 &&
        Object.keys(this.contact_details.phone).length > 0 &&
        Object.keys(this.contact_details.fax).length > 0 &&
        Object.keys(this.contact_details.email).length > 0 &&
        Object.keys(this.contact_details.state).length > 0 &&
        Object.keys(this.contact_details.city).length > 0
      ) {
        await axios.post(
          "https://contact-form-f42a5-default-rtdb.firebaseio.com/contact.json",
          this.contact_details
        );
        this.contact_details = "";
      }
    },
     async handleGetData() {
      const res = await axios.get(
        `https://contact-form-f42a5-default-rtdb.firebaseio.com/contact.json`
      );
      this.results = res.data;
      Object.keys(this.results).forEach((result) => {
        this.data.push(this.results[result]);
      });
    },
  },
};
</script>
