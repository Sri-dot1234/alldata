<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light align-center">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <!-- <a class="navbar-brand" href="#" style="width:100px"></a> -->
    <ul class="navbar-nav" style="margin-left:200px">
    <li class="nav-item dropdown">
        <a class="nav-link dropbtn dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        contacts
        </a>
        <div class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdownMenuLink">
           <router-link  class="nav-link" to="/ContactPost">Add a contact</router-link>
          <router-link  class="nav-link" to="/ContactGetData">view contact</router-link>
          
        </div>
      </li>
 <li class="nav-item dropdown">
        <a class="nav-link dropbtn dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        company
        </a>
        <div class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdownMenuLink">
          
           <router-link  class="nav-link" to="/PostData">Add a company</router-link>
          <router-link  class="nav-link" to="/">view company</router-link>
        
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropbtn dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        companyDetails
        </a>
        <div class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdownMenuLink">
          
           <router-link  class="nav-link" to="/AddOpp">Add a companyDetails</router-link>
          <router-link  class="nav-link" to="/OppGet">view companyDetails</router-link>
         
        </div>
      </li>
    </ul>
  </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.dropbtn {
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: rgb(23, 124, 219);}

.dropdown:hover .dropdown-content {display: block;}

</style>
