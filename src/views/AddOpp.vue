<template>
<div class="container">
  <form @submit.prevent="onsubmit()">
      <h4 class="align-left">Add company details</h4>
    <div class="container mt-5">
     
      <div class="form-group row">
        <label for="company" class="col-sm-2 col-form-label"
          >company name</label
        >
        <div class="col-sm-6">
          <input
            type="text"
            name="comapny_name"
            v-model="form_data.comapny_name"
            class="form-control"
            id="company"
            placeholder="company name"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="Email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-6">
          <input
            type="email"
            name="email"
            v-model="form_data.email"
            class="form-control"
            id="Email"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="State" class="col-sm-2 col-form-label">State</label>
        <div class="col-sm-6">
          <input
            type="State"
            name="state"
            v-model="form_data.state"
            class="form-control"
            id="State"
            placeholder="State"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</div>
</template>
 <script>
import axios from "axios";
const url = "https://contact-form-f42a5-default-rtdb.firebaseio.com/servey.json";
export default {
  name: "AddOpp",
  data() {
    return {
      form_data: {
       
        comapny_name: "",
        email: "",
        state: "",
      },
    };
  },
  methods: {
    onsubmit() {
      // console.log(this.form_data.comapny_name);
      //  console.log(Object.keys(this.form_data.comapny_name).length);
      if (
        Object.keys(this.form_data.comapny_name).length > 0 &&
        Object.keys(this.form_data.email).length > 0 &&
        Object.keys(this.form_data.state).length > 0 
      ) {
        axios.post(url, this.form_data)
        .then(console.log(this.form_data));
        this.$router.push({ name: "OppGet" });
        alert("data sent");
      }else{
        alert("data not sent")
      }
    },
  },
};
</script>
 
 <style scoped>
</style>



