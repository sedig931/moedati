<template>
  <!-- <div>your component body...</div> -->
  <!-- <AppPic/> -->
  <!-- <Toolify/> -->
  <!-- <SafetyPage/> -->
  <!-- <BarCode/> -->
  <DelevCard/>
  <!-- <CssTrick /> -->
  <!-- <ItemInCart /> -->
   <!-- <Mtjrjoy/> -->
</template>
<script>
import AppPic from "./sallaAppPIC/appPic.vue";
import Toolify from "./toolify/toolify.vue";
import SafetyPage from "./safteyItemsPage/mainBody.vue";
import BarCode from "./readBarcode/readBarcode.vue";
import DelevCard from "./deleveryCard/deleverCard.vue";
import CssTrick from "./cssTricks/cssTrick.vue";
import ItemInCart from "./itemOnCart/itemInCart.vue";
import Mtjrjoy from './mtjjoy/sections.vue';
export default {
  components: {
    AppPic,
    Toolify,
    SafetyPage,
    BarCode,
    DelevCard,
    CssTrick,
    ItemInCart,
    Mtjrjoy
  },
  data() {
    return {
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
input[type="text"] {
  width: 90px;
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
.back-to-me {
  flex-wrap: wrap;
  overflow: hidden;
  transform: translateY(-15px);
  transform: rotate(-40deg) scale(1);
  background-image: linear-gradient(to top, #f38f8f, #fdeead);
  filter: drop-shadow(10px 10px 5px #818181);
  box-shadow: 0 3px 10px rgb(213, 213, 213);
  font-family: "Almarai";
  background-color: #368185;
  backdrop-filter: blur(2px);
}
</style>
