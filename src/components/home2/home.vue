<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home2-div flex-row">
    <!-- <backgroundImgs/> -->
    <!-- <Stock/> -->
    <!-- <QRcode/> -->
    <!-- <MainView2/> -->
    <!-- <NewItems/> -->
    <!-- <ClassiGroup/> -->
    <!-- <StoreValue/> -->
    <!-- <BuyNowBanar/> -->
    <!-- <SeftyBlogBanar/> -->
    <!-- <HeaderStyle/> -->
    <Sections/>
    <!-- <Widding/> -->
    <!-- <Bankak/> -->
    <!-- <Roll/> -->
    <!-- <ToolBox/> -->
    <!-- <Pages/> -->
    <!-- <WeeklyConent/> -->
    <!-- <Comp26/> -->
  </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */
import backgroundImgs from "./components/mainHomeBack/background.vue";
import Stock from "./components/stock/stock.vue";
import QRcode from './components/qrcode/qrcode.vue';
import NewItems from './components/newItems/newItems.vue';
import MainView2 from './components/mainPage2/mainPage2.vue';
import StoreValue from "./components/storeValue/storevalue.vue";
import BuyNowBanar from "./components/buynowBanar/buyNow.vue";
import ClassiGroup from './components/classifiGroup/classGroup.vue';
import SeftyBlogBanar from "./components/seftyBlogBanar/seftyBlogBanar.vue";
import HeaderStyle from "./components/headerStyle/headerStyle.vue";
import Sections from "./components/sections/sections.vue";
import Widding from "./components/widding/widding.vue";
import Bankak from "./components/widding/bankak.vue";
import Roll from "./components/rollDis/rolldis.vue";
import ToolBox from "./components/toolBoxLogo/toolBox.vue";
import WeeklyConent from "./components/weeklycontent/weeklyConent.vue";
import Pages from "./components/pages/pages.vue";
import Comp26 from "./components26/comp26.vue";
export default {
  components: {
    backgroundImgs,
    Stock,
    QRcode,
    MainView2,
    NewItems,
    ClassiGroup,
    StoreValue,
    BuyNowBanar,
    SeftyBlogBanar,
    HeaderStyle,
    Sections,
    Widding,
    Bankak,
    Roll,
    ToolBox,
    WeeklyConent,
    Pages,
    Comp26
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
.home2-div{
  /* height: 100vh; */
  width: 100%;
    /* background-color: #ccc; */
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