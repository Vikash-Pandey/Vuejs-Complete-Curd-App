<template>
  <div class="text text-center" v-if="id">
    <h2>Update Record</h2>
  </div>
  <div class="text text-center" v-else>
    <h2>Add Record</h2>
  </div>

  <form class="centerform">
    <div class="col-sm-6 d-flex flex-column">
      <div class="form-group">
        <label for="exampleInputEmail1">Enter Name</label>

        <input
          type="text"
          class="form-control"
          placeholder="Enter Name"
          v-model="state.name"
        />
        <span v-if="v$.name.$error" class="text-danger">{{
          v$.name.$errors[0].$message
        }}</span>
      </div>

      <div class="form-group">
        <label>Enter Email</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter Email"
          v-model="state.email"
        />
        <span v-if="v$.email.$error" class="text-danger">
          {{ v$.email.$errors[0].$message }}
        </span>
      </div>

      <div class="form-group">
        <label>Choose Image</label>
        <input
          type="file"
          class="form-control"
          placeholder="Choose Image"
          v-on:change="handlefile"
        />
        <span v-if="errors" class="text-danger">
          {{ errors }}
        </span>
        <img
          v-if="image"
          class="rounded-circle"
          :src="path + '/public/images/' + image"
          alt="Card image cap"
        />
      </div>
      <button
        v-if="id"
        type="submit"
        class="btn btn-primary buttonstyle"
        @click="UpdateData"
      >
        Update
      </button>
      <button
        v-else
        type="submit"
        required
        class="btn btn-primary buttonstyle"
        @click="SubmitData"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { swal } from "sweetalert";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "Add",

  data() {
    return {
      path: "http://localhost:3030",
     id:'',
     errors:'',
     file:'',
     image:'',
     name:''
    };
  },
  setup() {
    const state = reactive({
      name: "",
      email: "",
     
    });
    const rules = computed(() => {
      return {
        name: { required }, // Matches state.firstName
        email: { required, email }, // Matches state.lastName
       
      };
    });

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
  methods: {
    ...mapActions([
      "GetData",
      "AddFormData",
      "GetSingleRecord",
      "updatuseersdata",
    ]),
    handlefile(event) {
      
   this.file = event.target.files[0];
      
   
    },
    SubmitData(e) {
      e.preventDefault();
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
   
if(this.file){
     const formdata = new FormData();
        formdata.append("name", this.state.name);
        formdata.append("email", this.state.email);
        formdata.append("file", this.file);

        this.AddFormData(formdata);
        
        setTimeout(() => {
          this.GetData();
          this.$swal(this.Data.message);
        }, 1000);
        this.errors=''
      }
      else{
        this.errors="Image Required"
      }
}
    },
    UpdateData(e) {
      e.preventDefault();
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        if(this.file){
        const formdata = new FormData();
        formdata.append("name", this.state.name);
        formdata.append("email", this.state.email);
        formdata.append("file", this.file);
        const data = {
          id: this.id,
          data: formdata,
        };
        this.updatuseersdata(data);
        setTimeout(() => {
          this.$swal("Data Updated");
        });
        this.errors=''
      }
      else{
        this.errors="Image Required"
      }
      }
    },
  },
  computed: mapState(["Data"]),
  created() {
    this.id = this.$route.query.id;
    this.GetData();

    if (this.id) {
      const returndata = this.Data.filter((data) => {
        return data._id == this.id;
      });
      const updateddata = Array.from(returndata);
      const result = updateddata.reduce(
        (obj, cur) => ({ ...obj, [cur.sid]: cur }),
        {}
      );
      this.state.name = result.undefined.name;
      this.state.email = result.undefined.email;
      this.image = result.undefined.image;
    }
  },
};
</script>
<style scoped>
.centerform {
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttonstyle {
  width: 100px;
  margin: 20px auto;
  border-radius: 10px;
}
input {
  margin: 10px 0px;
  color: gray;
  font-family: "Courier New", Courier, monospace;
  font-size: 17px;
}
label {
  color: gray;
  font-family: "Courier New", Courier, monospace;
  font-size: 17px;
}
.text {
  margin-top: 20px;
  color: gray;
  font-family: "Courier New", Courier, monospace;
  font-size: 17px;
}
img {
  width: 70px;
  height: 70px;
  object-fit: cover;
}
</style>
