<template>
  <div class="posters-div flex-row">
    <!-- <Poster1 :proName="this.proName" :proDisc="this.proDisc" :proPrice="this.proPrice" /> -->
    <!-- <Poster2 :proName="this.proName" :proDisc="this.proDisc" :proPrice="this.proPrice" /> -->
    <!-- <Poster3/> -->
    <!-- <Poster4/> -->
    <!-- <Poster5/> -->
    <!-- <Poster6/> -->
    <!-- <Poster7/> -->
    <!-- <Poster8/> -->
    <!-- <Poster9/> -->
    <!-- <Poster10/> -->
    <!-- <Poster11/> -->
    <!-- <Poster12 /> -->
    <!-- <Poster13/>/ -->
    <!-- <Poster14 /> -->
    <!-- <Cuation/> -->
    <!-- <form class="form-div flex-column">
      <div class="lbl-input-div flex-row">
        <label for="">product name</label>
        <input v-model="this.proName" type="text">
      </div>
      <div class="lbl-input-div flex-row">
        <label for="">product discription</label>
        <input v-model="this.proDisc" type="text">
      </div>
      <div class="lbl-input-div flex-row">
        <label for="">product price</label>
        <input v-model="this.proPrice" type="text">
      </div>
    </form> -->
    <!-- <Ghad/> -->
    <!-- <Ramaddan/> -->
     <DataSheet/>
  </div>
</template>
<script>
import Poster1 from "./poster1/poster1.vue";
import Poster2 from "./poster2/poster2.vue";
import Poster3 from "./poster3/poster3.vue";
import Poster4 from "./poster4/poster4.vue";
import Poster5 from "./poster5/poster5.vue";
import Poster6 from "./poster6/poster6.vue";
import Poster7 from "./poster7/poster7.vue";
import Poster8 from "./poster8/poster8.vue";
import Poster9 from "./poster9/poster9.vue";
import Poster10 from "./poster10/poster10.vue";
import Poster11 from "./poster11/poster11.vue";
import Poster12 from "./poster12/poster12.vue";
import Poster13 from "./poster13/poster13.vue";
import Poster14 from "./poster14/poster14.vue";
import Cuation from "./cuationPost/cuation.vue";
import Ramaddan from "./ramaddanPoster/ramaddan.vue";
import Ghad from "./ghad/ghad.vue";
import DataSheet from './dataSheet/dataSheet.vue';
export default {
  components: {
    Poster1,
    Poster2,
    Poster3,
    Poster4,
    Poster5,
    Poster6,
    Poster7,
    Poster8,
    Cuation,
    Poster9,
    Poster10,
    Poster11,
    Poster12,
    Poster13,
    Poster14,
    Ghad,
    Ramaddan,
    DataSheet
  },
  data() {
    return {
      proName: "",
      proPrice: "",
      proDisc: "",
      //propreties
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.flex-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.posters-div {
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.form-div {
  margin: 20px;
  padding: 10px;
  border: 1px solid rgb(171, 171, 171);
  border-radius: 15px;
}
.lbl-input-div {
  width: 400px;
  justify-content: space-between;
}
input[type="text"] {
  width: 190px;
  height: 25px;
  border-radius: 8px;
  padding: 5px;
  font-size: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
input[type="text"]:focus {
  border: 1px solid #555;
}
</style>
