<template>
  <div class="container mt-5">
      <table class="table table-bordered ">
  <thead class="thead-light">
    <tr >
      <th >Id</th>
      
      <th >First Name</th>
      <th >Last Name</th>
      <th>Email</th>
      <th >Phone1</th>
      <th>Phone2</th>
      <th>Fax</th>
      <th>Tag</th>

    </tr>
  </thead>
     
  <tbody>
    <tr  v-for='(data1,i) in data' :key='i' :value="data1.email">
     <td>{{i+1}}</td>
      <td>{{data1.frist_name}}</td>
      <td> {{data1.last_name}}</td>
      <td>{{data1.email}}</td>
      <td> {{data1.number1}}</td>
      <td>{{data1.number2}}</td>
      <td>{{data1.number3}}</td>
     <td>{{data1.tag}}</td>
    </tr>
  </tbody>
      </table>
 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ContactGetData',
  data () {
    return {
    data:[],
    datas:[]
    }
  },
  

  mounted() {
    this.Contactdata();
  },
  methods:{
 async Contactdata(){
   const res = await axios.get(
        `https://contact-form-f42a5-default-rtdb.firebaseio.com/company.json`
      );
      this.datas = res.data;
      Object.keys(this.datas).forEach((result) => {
        this.data.push(this.datas[result]);
      });
 
  }
  }
  
}
</script>
<style scoped>
/* .centre{
  display: flex;
  justify-content: center;
  align-items: center;
}  */
</style>