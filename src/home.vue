<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex-column home-div">
    <!-- <LiftingBanar/> -->
    <!-- <GardingBanar/> -->
    <!-- <PowerToolsBanar/> -->
    <!-- <SingleProduct/> -->
    <!-- <SallaProductFrame/> -->
    <!-- <HandsToolsBanarMobile/> -->
    <!-- <ThreeSqrsBanars/> -->
    <!-- <ThreeCardsBanar/> -->
    <!-- <ClassiPoster/> -->
    <!-- <BrandsBanars/> -->
    <!-- <Logo/> -->
    <!-- <Posters /> -->
    <home2 />
  </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */
// import LiftingBanar from "./components/liftingBanar/liftingBanarMobile.vue";
// import GardingBanar from "./components/gardingBanar/gardingBanarMobile.vue";
// import PowerToolsBanar from "./components/powerToolsBanar/powerToolsMobile.vue";
// import SingleProduct from "./components/singleProductShow/singleProductBanar.vue";
// import SallaProductFrame from "./components/sallaproductframe/sallaproductframe.vue";
// import HandsToolsBanarMobile from "./components/handsToolsBanar/handsToolsBanarMobile.vue";
// import ThreeSqrsBanars from "./components/threeSqrBanar/threeSqrBanar.vue";
// import ThreeCardsBanar from "./components/banarwith3cards/mobileBanarThreeCards.vue";
// import ClassiPoster from "./components/classificationPosters/classPoster.vue";
// import Posters from "./components/posters/posters.vue";
// import BrandsBanars from "./components/brandsBanar/brandsBanar.vue";
// import Logo from "./components/moeidatiLogo/moeidataiLogo.vue";
import home2 from "./components/home2/home.vue";
export default {
  components: {
    // LiftingBanar,
    // GardingBanar,
    // PowerToolsBanar,
    // SingleProduct,
    // SallaProductFrame,
    // HandsToolsBanarMobile,
    // ThreeSqrsBanars,
    // ThreeCardsBanar,
    // ClassiPoster,
    // Posters,
    // BrandsBanars,
    // Logo,
    home2
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
.home-div {
  min-height: 100vh;
  width: 100%;
  /* background-color: rgb(200, 187, 212); */
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
</style>
