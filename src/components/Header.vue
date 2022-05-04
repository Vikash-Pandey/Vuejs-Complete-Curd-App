<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid d-flex justify-content-center align-items-center ">
        <div class="">
          <ul class="navbar-nav mb-2 mb-lg-0 centerlink">
            <li class="nav-item">
              <router-link class="page-link" to="/"> Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="page-link" to="/Add">Add Data</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style  scoped>
.AddActiveAclss {
  text-decoration: none;
}
.page-link,
.page-link:visited,
.page-link:hover,
.page-link:active,
.page-link:focus {
  outline: 0 none !important;
  border: none !important;
  margin: 5px 10px;
  color: gray;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  font-weight: 500;
}

</style>