<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="img-div flex-row">
    <img
      src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\cart.png"
      alt=""
      class="img"
    />
    <div class="moedati-icon-div-outer">
      <div class="moedati-icon-div flex-column">
        <img class="moedati-img" src="C:\Users\danaglobPC1\Documents\dana-global\src\assets\brandsicons\moedati.png" alt="">
      </div>
    </div>
    <!-- <div class="arrival-new-div flex-row">
      <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\justarrived.png" alt="" class="arriavaal-new-img">
    </div> -->
    <!-- <div class="yato-logo-div flex-row">
      <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\yato.png" alt="" class="yato-img">
    </div> -->
    <!-- <div class="torix-logo-div flex-row">
      <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\torix.png" alt="" class="torix-img">
    </div> -->
    <div class="txts-div flex-column">
      <div class="single-txts-div flex-row" dir="rtl">
        <i class="bi bi-patch-check-fill txt-icon flex-row"></i>
        <span class="single-span-txt">خيارات دفع مريحة</span>
      </div>
      <div class="icons-div flex-row">
        <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\Tabby-01.png" alt="" class="icons-div-img">
        <img src="https://cdn.tamara.co/widget-v2/assets/lavendar-logo.703d190a.svg" alt="" class="icons-div-img">
        <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\apple.png" alt="" class="icons-div-img">
      </div>
      <div class="single-txts-div flex-row" dir="rtl">
        <i class="bi bi-patch-check-fill txt-icon flex-row"></i>
        <span class="single-span-txt">شحن و توصيل سريع</span>
      </div>
      <div class="icons-div flex-row">
        <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\delevery.png" alt="" class="icons-div-img-delev">
      </div>

    </div>

    <div class="buy-now-div-outer">
      <div class="buy-now-div flex-row">
        <span class="buy-now-span">اطلب الآن</span>
      </div>
    </div>
    <!-- <div class="texts2-div flex-column">
      <span class="txt2-span text2-span-title">SAND PAPER</span>
      <span class="txt2-span text2-span-title">Polyester PU Coated</span>
      <span class="txt2-span text2-span-body">225MM 10TPI 2PCS</span>
    </div> -->
    <!-- <div class="imgrel-div">
      <img src="C:\Users\danaglobPC1\Documents\dana-global\src\components\home2\components\weeklycontent\weekContent\imgs\impact_wrench_abs.png" alt="" class="img-abs-div">
    </div> -->
    <div class="deleveryicon-taby-outer">
      <div class="deleveryicon-taby flex-row">
        <img src="../imgs/deliveryicon.png" alt="" class="delevery-img">
        <img src="https://cdn.salla.network/cdn-cgi/image/fit=scale-down,width=70,height=70,onerror=redirect,format=auto/images/sbc.png?v=2.0.5" alt="" class="mothoq-img">
        <img src="../imgs/Tabby-01.png" alt="" class="tabby-img">
        <img src="../imgs/card.png" alt="" class="card-img">
      </div>
    </div>
    <!-- <div class="discount-div flex-column">
      <div class="discount-value-div flex-row">
        <span class="discount-value-span">%15</span>
      </div>
      <div class="discount-txt-div">
        <span class="discount-txt-span" dir="rtl">خصم يصل حتى 15%</span>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  components: {},
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
.img-div {
  position: relative;
  /* width: 720px; */
  height: 900px;
  /* border: 1px solid; */
  overflow: hidden;
  background-color: #161515;
}
.img {
  /* max-width: 100%; */
  max-height: 100%;
}
.texts2-div {
  position: absolute;
  bottom: 100px;
  left: 60px;
  /* font-family: "Playpen Sans Arabic", cursive; */
  font-family: "Bungee", sans-serif;
  align-items: flex-start;
  /* text-align: center; */
}
.text2-span-title {
  /* color: #e42024; */
  color: #ffffff;
  font-size: 45px;
  font-weight: bold;
  /* transform: translateX(-30px); */
  filter: drop-shadow(-2px 2px 0px #a70808);
  /* background-color:rgba(255, 255, 255, 0.5); */
  padding: 0 15px 0 15px;
  /* backdrop-filter: blur(2px); */
  border-radius: 20px;
  /* z-index: 0; */
}
.text2-span-body {
  /* color: #ffffff; */
  /* color: #e42024; */
  color: #ff4545;
  font-size: 33px;
  font-weight: bold;
  /* width: 85%; */
  /* transform: translateX(50px) translateY(10px); */
  /* transform: translateY(10px); */
  filter: drop-shadow(-1px 2px 0px #ffffff);
  /* background-color:rgba(69, 69, 69, 0.5); */
  padding: 0px 15px 0 15px;
  /* margin: 10px 0 0px 0 ; */
  border-radius: 20px;
  /* backdrop-filter: blur(1px); */
  z-index: 1;
}
.imgrel-div {
  position: absolute;
  /* right: -1px; */
  /* top: 73px; */
  height: 100%;
  width: 100%;
}
.img-abs-div {
  height: 100%;
  width: 100%;
  /* background-color: #000000; */
  /* z-index: 1; */
}
.txts-div {
  position: absolute;
  top: 250px;
  right: 40px;
  height: 300px;
  width: 400px;
  border: 3px dashed rgb(211, 211, 211);
  /* background-color: rgba(255, 255, 255, 0.7); */
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  font-family: "Almarai";
  font-family: "Playpen Sans Arabic", cursive;
  font-weight: bold;
  box-shadow: 0 2px 5px rgb(213, 213, 213);
}
.single-span-txt{
  font-size: 40px;
  color: #383838;
}
.txt-icon{
  font-size: 25px;
  margin: 0 7px 0 7px;
  color: #e21616;
}
.icons-div{
  width: 100%;
  /* background-color: #000000; */
  margin: 10px 0 10px 0;
}
.icons-div-img{
  height: 23px;
  margin: 0 10px 0 10px;
}
.icons-div-img-delev{
  height: 40px;
  margin: 0 10px 0 10px;
}
.buy-now-div-outer {
  position: absolute;
  bottom: 150px;
  height: 32px;
  width: 120px;
  /* background-color: #1aff00; */
  /* border: 0; */
}
.buy-now-div {
  /* right: 40px; */
  /* background-color: #ffffff; */
  height: 100%;
  width: 100%;
  background-color: #e42024;
  border-radius: 15px;
  color: white;
  /* color: #e42024; */
  font-size: 17px;
  /* font-weight: bold; */
  border: 1px solid white;
  font-family: "Almarai";
  font-family: "Playpen Sans Arabic", cursive;
  box-shadow: 0 1px 3px rgb(116, 116, 116);
}
.deleveryicon-taby-outer {
  position: absolute;
  bottom: 20px;
  /* right: 5px; */
  height: 23px;
  width: 130px;
  /* background-color: rgba(255, 0, 0, 0.9); */
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);
  box-shadow: 0px 1px 5px rgb(147, 147, 147);
  border: 1px solid #e8e8e8;
  border-radius: 10px;
}
.deleveryicon-taby {
  height: 100%;
  width: 100%;
  padding: 0 5px 0 5px;
  justify-content: space-between;
  border-radius: 10px;
}
.delevery-img {
  height: 13px;
  filter: drop-shadow(2px 1px 1px #282828);
}
.tabby-img {
  height: 13px;
  filter: drop-shadow(1px 1px 1px #7f7f7f);
}
.card-img {
  height: 13px;
  max-width: 20px;
  filter: drop-shadow(1px 1px 1px #131313);
}
.mothoq-img {
  height: 13px;
  filter: drop-shadow(0px 1px 1px #3f3f3f);
}
.moedati-icon-div-outer {
  position: absolute;
  top: 0;
  height: 35px;
  width: 110px;
  /* background-color: #2ffb18; */
}
.moedati-icon-div {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 5px rgb(156, 156, 156);
}
.moedati-img {
  max-width: 90%;
  border-radius: 3px;
}
.torix-logo-div{
  position: absolute;
  top: 0;
  right: 150px;
  height: 25px;
  width: 55px;
  background-color: white;
  border-radius: 0 0 7px 7px;
  box-shadow: 0 2px 5px rgb(69, 69, 69);
}
.torix-img{
  width: 70%;
  background-color: white;
}
.yato-logo-div{
  position: absolute;
  top: 0;
  left: 150px;
  height: 25px;
  width: 55px;
  background-color: #ffffff;
  border-radius: 0 0 7px 7px;
  box-shadow: 0 2px 5px rgb(69, 69, 69);
}
.yato-img{
  width: 90%;
}
.discount-div {
  position: absolute;
  bottom: 90px;
  left: 250px;
  /* background-color: #368185; */
}
.discount-value-div {
  height: 45px;
  width: 45px;
  background-color: #f62d2d;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: bold;
  border-radius:0 50% 50% 50%;
  box-shadow: 0 2px 5px rgb(110, 6, 6);
  font-family: "Almarai";
}
.discount-txt-div {
  color: white;
  font-size: 10px;
  font-weight: bold;
  font-family: "Almarai";
  margin: 1px;
  filter: drop-shadow(1px 1px 1px #5e5e5e);
  /* text-decoration: line-through; */
}
.arrival-new-div{
  position: absolute;
  left: 50px;
  top: 100px;
}
.arriavaal-new-img{
  height: 250px;
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
