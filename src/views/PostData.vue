<template>
  <div class="container" > 
    
     <form >
        <h3 class="text-left" >Add a Contact</h3>
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
               <button
              type="button"
              class="btn btn-primary"
             @click="handleSubmit"
            >
              Save
            </button>
            </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PostData",

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
    
    };
  },


  methods: {
    async handleSubmit() {
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
        this.$router.push({name: 'GetData'});
      }
    }}
}
</script>