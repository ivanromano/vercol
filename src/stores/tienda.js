import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useTiendaStore = defineStore("tienda", () => {
  const LatestProductsList = ref([]);
  const time = ref(null)
  
  const ultimosProdu = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/v1/lat-produ/");
      console.log(res.data);
      LatestProductsList.value = res.data;
      // localStorage.setItem('user', 'vas a necesitar mas que eso para hackearme :)')
    } catch (error) {
      console.log(error.message);
    }
  };

  ultimosProdu()


  return {
    LatestProductsList,
    ultimosProdu,
  };
});