<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-6">
        <p class="text-left ml-5">
          <input
            v-show="taskListIsVisible"
            type="checkbox"
            @click="selectAll"
            v-model="allSelected"
          />
          <b>{{ data.length }}</b
          >results
        </p>
      </div>
      <div class="col-md-6 select2">
        
           <select 
            v-model="currentEntries"
           @change="paginateEntries($event)"
          >
            <option v-for="some in someEntries" :key="some" :value="some">
              {{ some }}
            </option>
          </select>
          <p class="ml-1">perpage</p>
       
        <form class="form-inline ml-2">
          <input
            class="form-control d-flex justify-content-center"
            type="search"
            v-model="search"
            placeholder="Search company_name"
            aria-label="Search"
          />
        </form>

        <button class="btn active ml-3" @click="toggleTaskList">
          <i class="fa fa-bars"></i>
        </button>
        <button class="btn ml-3" @click="toggleTaskGrid">
          <i class="fa fa-th-large"></i>
        </button>
      </div>
    </div>

    <ol style="list-style: none" v-show="taskListIsVisible">
      <div class="container"></div>
      <li v-for="(result, i) in filterdata" :key="i">
        <hr />
        <div class="row">
          <div class="col-md-4">
            <input
              style="margin-right: 24px"
              type="checkbox"
              v-model="userIds"
              
            />
            <span> Id </span>
            <br />
            <b style="margin-left: 30px">{{ i + 1 }}</b>

            <p style="margin-left: 127px">CompanyName</p>
            <p style="margin-left: 50px">{{ result.comapny_name }}</p>
          </div>
          <div class="col-md-3">
            <p>
              email <br />
              <span style="color: #b103fc; margin-left: 80px">{{
                result.email
              }}</span>
            </p>
            <p>
              state <br />
              {{ result.state }}
            </p>
          </div>
        </div>
      </li>
    </ol>

    <div v-show="taskGridIsVisible">
      <table class="table table-bordered mt-3">
        <thead class="thead-light">
          <tr>
            <th>
             <input type="checkbox" @click="selectAll" v-model="allSelected">
            </th>
            <th>Id</th>
            <th>CompanyName</th>
            <th>email</th>
            <th>state</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, i) in  filterdata" :key="i">
            <td>
                <input type="checkbox" v-model="userIds" >
             
            </td>
            <td>{{ i + 1 }}</td>
            <td>{{ result.comapny_name }}</td>
            <td>{{ result.email }}</td>
            <td>{{ result.state }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const url =
  "https://contact-form-f42a5-default-rtdb.firebaseio.com/servey.json";
export default {
  name: "InfoData",
  data() {
    return {
      search: "",
      
      results: [],
      allSelected: false,
      userIds: [],
      data: [],
      taskListIsVisible: false,
      taskGridIsVisible: true,
      someEntries: [5, 10, 15],
    //   filterdEntries: [],
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    async getdata() {
      try {
        const res = await axios.get(url);
        this.results = res.data;
        Object.keys(this.results).forEach((result) => {
          this.data.push(this.results[result]);
          this.filterdEntries = this.data;
        });
      } catch (e) {
        console.log(e);
      }
    },
    selectAll() {
      this.userIds = [];
      if (!this.allSelected) {
        for (let result in this.data) {
          this.userIds.push(this.data[result].id);
        }
      }
    },
    toggleTaskList() {
      this.taskListIsVisible = false;
      this.taskGridIsVisible = true;
    },
    toggleTaskGrid() {
      this.taskGridIsVisible = false;
      this.taskListIsVisible = true;
    },
    // paginateEntries(eve) {
    //   this.page = eve.target.value;
    //   if (this.page != 0) {
    //     this.filterdEntries = this.filterdata.slice(0, this.page);
    //   }
    // },
  },
  computed: {
    filterdata() {
      return this.data.filter((post) => {
        return post.comapny_name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
 <style scoped>
hr {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}
.select2 {
  display: flex;
}
.btnContainer {
  margin-right: 0px;
}
</style>
 