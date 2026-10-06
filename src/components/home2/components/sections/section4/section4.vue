<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Sec4V01 />
  <!-- <div class="ss4-outer-container flex-row">
  <div class="ss4-container flex-column">
    <div class="ss4-top-div flex-row">
        <div class="ss4-inner-top-div flex-row">
        <img src="https://cdn.salla.sa/YgXdEO/7adb908f-eb53-45e0-9818-0fe393f0e1cb-1000x289.56763189211-vzQhcHUxfgvJLvip8Vd1OBPdePbA0y5QjBCRvc7w.png" alt="" class="ss4-yato-img">
        </div>
    </div>
    <div class="ss4-bottom-div flex-row ss3-mObserve">
        <div class="ss4-inner-bottom-div flex-column">
        <span class="ss4-bottom-span ss4-bottom-span-1 ss4-bottom-span-WHITE ss4-bottom-span-trans1">PREMIUM</span>
        <span class="ss4-bottom-span ss4-bottom-span-2 ss4-bottom-span-WHITE ss4-bottom-span-trans2">QUALITY TOOLS</span>
        <div class="ss4-bottom-div-txts-btn">
        <span class="ss4-bottom-span ss4-bottom-span-3 ss4-bottom-span- ss4-bottom-span-trans3">AUTHORIZED DISTRIBUTOR</span>
        <button class="ss4-buy-now-btn"
        onclick='window.location.href="https://moedati.com/ar/redirect/brands/684503155";'
        >SHOP NOW</button>
        </div>
        </div>
    </div>
  </div>
</div>  -->
</template>
<script>
import Sec4V01 from "./section4v01.vue";
export default {
  components: {
    Sec4V01,
  },
  data() {
    return {
      ss4Lng: ["فاخرة", "أدوات ذات جودة عالية", "جهة توزيع معتمدة رسمياً", "تسوق الآن"],
      ss4Eng: ["PREMIUM", "QUALITY TOOLS", "AUTHORIZED DISTRIBUTOR", "SHOP NOW"],
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
.ss4-outer-container {
  width: 100%;
}
.ss4-container {
  height: 75vh;
  min-height: 570px;
  width: 90%;
}
.ss4-top-div {
  position: relative;
  flex: 0.6;
  width: 100%;
  /* background-color: #000; */
  background-color: #292929;
  border-radius: 30px 30px 0 0;
}
.ss4-inner-top-div {
  height: 100%;
  width: 75%;
  justify-content: start;
}
.ss4-bottom-div {
  flex: 1;
  width: 100%;
  /* background-color: #e0010b; */
  background-image: linear-gradient(to top left, #e32c2c, #f77d79);
  font-size: 60px;
  font-weight: bold;
  align-items: flex-start;
  border-radius: 0 0 30px 30px;
}
.ss4-inner-bottom-div {
  width: 90%;
  padding: 15px 5px 5px 15px;
  height: 100%;
  align-items: flex-start;
}
.ss4-yato-img {
  height: 200px;
  border-radius: 15px;
  background-color: white;
}
.ss4-bottom-span {
  transition:
    transform 1s,
    opacity 0.5s;
}
.ss4-bottom-span-WHITE {
  color: white;
}
.ss4-bottom-span-BLACK {
  color: #000;
}
.ss4-bottom-div-txts-btn {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.ss4-bottom-span-trans1 {
  opacity: 0;
  transform: translateX(250px);
}
.ss4-bottom-span-trans2 {
  opacity: 0;
  transform: translateX(450px);
}
.ss4-bottom-span-trans3 {
  opacity: 0;
  transform: translateX(550px);
}
.ss4-buy-now-btn {
  background-color: white;
  font-weight: bold;
  padding: 8px 30px 8px 30px;
  border: none;
  border-radius: 20px;
  transition: background-color 0.5s;
  /* color: #e0010b; */
  color: #e32c2c;
  z-index: 1;
}
.ss4-buy-now-btn:hover {
  /* background-color: #000; */
  background-color: #292929;
  color: white;
}
@media (min-width: 1345px) and (max-width: 1600px) {
  .ss4-yato-img {
    height: 150px;
  }
  .ss4-bottom-div {
    font-size: 50px;
  }
  .ss4-buy-now-btn {
    padding: 8px 30px 8px 30px;
  }
}
@media (min-width: 1060px) and (max-width: 1345px) {
  .ss4-yato-img {
    height: 150px;
  }
  .ss4-bottom-div-txts-btn {
    flex-direction: column;
  }
  .ss4-buy-now-btn {
    padding: 6px 20px 6px 20px;
    max-width: 450px;
  }
}
@media (min-width: 700px) and (max-width: 1060px) {
  .ss4-yato-img {
    height: 130px;
  }
  .ss4-bottom-div-txts-btn {
    flex-direction: column;
  }
  .ss4-bottom-div {
    font-size: 40px;
  }
  .ss4-buy-now-btn {
    padding: 6px 20px 6px 20px;
    max-width: 350px;
    margin: 10px 0 0 0;
  }
}
@media (max-width: 700px) {
  .ss4-container {
    height: 80vh;
  }
  .ss4-inner-top-div {
    width: 100%;
    padding: 0 20px 0 20px;
  }
  .ss4-inner-bottom-div {
    width: 100%;
    padding: 0 20px 0 20px;
  }
  .ss4-yato-img {
    height: 110px;
  }
  .ss4-bottom-div-txts-btn {
    flex-direction: column;
  }
  .ss4-bottom-div {
    font-size: 33px;
  }
  .ss4-buy-now-btn {
    padding: 6px 18px 6px 18px;
    max-width: 250px;
    margin: 10px 0 0 0;
  }
}
@media (max-width: 420px) {
  .ss4-container {
    height: 80vh;
  }
  .ss4-yato-img {
    height: 80px;
  }
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
