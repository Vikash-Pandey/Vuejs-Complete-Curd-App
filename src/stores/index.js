
import { createStore } from 'vuex'

import axios from "axios"
const store = createStore({
  state() {
    return {
      Data: [],
      SingleData:{}
    }
  },
  getters: {
    AllData(state) {
      return state.Data
    },
    SingleData(state){
      return state.SingleData
    }
  },
  actions: {
    async GetData({ commit }) {
      const data = await axios.get("http://localhost:3030/Users")

      commit("SetData", data.data.Data)
    },
    async AddFormData({ commit }, Data) {
      const data = await axios.post("http://localhost:3030/Users", Data)
 
      commit("AddData", data.data)
    },
    async DeleteRecord({ commit }, id) {
     
      const data = await axios.delete(`http://localhost:3030/Users/${id}`)
      commit("DeleteData", id)
    },
        async updatuseersdata({ commit }, Updatadata) {
      const data = await axios.patch(`http://localhost:3030/Users/${Updatadata.id}`,Updatadata.data)
    
      commit("UpdateData", data.data.Data)
    },
    async GetSingleRecord({commit},id){
      const data=await axios.get(`http://localhost:3030/Users/${id}`)
      
      commit("SingleData",data.data)
    }
  },
  mutations: {
    SetData: (state, Data) => (state.Data =Object.freeze(Data)),
    AddData: (state, data) => (state.Data =Object.freeze(data)),
    DeleteData: (state, id) => {
    state.Data = state.Data.filter((data) => data._id != id)
  
    },
    SingleData(state, data) {
      state.SingleData=data
    },
    UpdateData(state,data){
  
     
   
      let index=state.Data.findIndex((data)=>data._id==data._id)
    
      if(index){
        state.Data[index]=data
      }
    }
  }
})


export default store