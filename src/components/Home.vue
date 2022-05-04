<template>
  <div>
    <div class="row">
      <div class="col-sm-4" v-for="data in Data" v-bind:key="data.key">
        <div class="card m-2 card-image">
          <img
            class="card-img-top"
            :src="path + '/public/images/'+data.image"
            alt="Card image cap"
          />
          <div class="card-bodyc cardbody">
            <div class="cardtext">
              <h5 class="card-title">{{ data.name }}</h5>
              <p class="card-text">{{ data.email }}</p>
            </div>
            <div class="card-edit">
              <i
                class="fa fa-trash fa-2x card-link text-danger"
                v-on:click="DeleteRecord(data._id)"
              ></i>
              <i class="fa fa-edit fa-2x edit card-link text-success" v-on:click="UpdateRecord(data._id)"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions,mapState } from "vuex";
export default {
  name: "Home",
  data(){
    return{
 path:"http://localhost:3030",
    }
  },
  methods: {
    ...mapActions(["GetData", "DeleteRecord","GetSingleRecord"]),
    UpdateRecord(id){
this.GetSingleRecord(id)
this.$router.push({path:"/Add",query:{id}})
    }
  },
  computed: mapState(["Data"]),
  created() {
    this.GetData();
  
  },
};
</script>


<style lang="css">
.cardtext h5 {
  font-size: 20px;
  font-weight: 400;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.cardtext p {
  font-size: 15px;
  font-weight: 400;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.cardbody {
  margin: 10px 5px;
  padding: 5px 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.card-edit {
  display: flex;
  flex-direction: row;
  margin: 0px 10px;
  box-sizing: border-box;
}
.edit {
  margin-top: 5px;
}
.card-edit i {
  padding: 5px 5px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
img{
  width: 200px;
  height: 300px;
  object-fit: cover;
}
</style>