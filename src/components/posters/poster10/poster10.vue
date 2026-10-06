<template>
  <div class="poster10-container flex-row" dir="rtl">
    <img src="./imgs/poster10backimgSQR.jpg" alt="" class="poster10-back-img">
    <div class="poster10-single-txt-div poster10-single-txt-div1 flex-row">
        <div class="front-txt-div front-txt-div1 flex-row">
            <span class="single-txt-span"> تخرب عليك الأدوات وقت الشغل ؟ </span>
        </div>
    </div>
    <div class="poster10-single-txt-div poster10-single-txt-div2 flex-row">
        <div class="front-txt-div front-txt-div2 flex-row">
            <span class="single-txt-span">اعمال بسيطة تصير صعبة و تاخد وقتك ؟ </span>
        </div>
    </div>
    <div class="poster10-single-txt-div poster10-single-txt-div3 flex-row">
        <div class="front-txt-div front-txt-div3 flex-row">
            <span class="single-txt-span">جرّب YATO وشوف الفرق </span>
        </div>
    </div>
    <div class="poster10-single-txt-div poster10-single-txt-div4 flex-row">
        <div class="front-txt-div front-txt-div4 flex-column">
            <span class="single-txt-span single-txt-span5-top">  %15 </span>
            <span class="single-txt-span single-txt-span5-bottom">  خصم </span>
        </div>
    </div>
    <div class="poster10-single-txt-div poster10-single-txt-div5 flex-row">
        <div class="front-txt-div front-txt-div5 flex-row">
            <span class="single-txt-span"> خصم 15% على كل المنتجات اطلب الآن</span>
        </div>
    </div>
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
.poster10-container{
    position: relative;
    width: 760px;   
    height: 560px; 
    background-color: #013035;
}
.poster10-back-img{
    width: 100%;
    max-height: 100%;
}
.poster10-single-txt-div{
    position: absolute;
    background-color: #ac1a1a;
    border-radius: 15px;
    font-family: "Almarai";
    font-weight: bold;
}
.front-txt-div{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: #dfdfdf;
    box-shadow: 0 2px 2px rgb(135, 11, 11);
}
.poster10-single-txt-div1{
    top: 80px;
    width: 60%;
    height: 35px;
    font-size: 25px;
    transform: rotate(-5deg) scale(1);
}
.front-txt-div1{
    top: -6px;
    left: -4px;
}
.poster10-single-txt-div2{
    top: 150px;
    width: 66%;
    height: 38px;
    font-size: 25px;
    transform: rotate(-3deg) scale(1);
}
.front-txt-div2{
    top: -4px;
    left: -4px;
}
.poster10-single-txt-div3{
    top: 240px;
    width: 70%;
    height: 45px;
    font-size: 35px;
}
.front-txt-div3{
    top: -5px;
    left: -5px;
}
.poster10-single-txt-div4{
    bottom: 66px;
    width: 140px;
    height: 140px;
    border-radius: 100%;
    transform: rotate(8deg) scale(1);
}
.front-txt-div4{
    border-radius: 100%;
    top: -3px;
    left: -3px;
    font-size: 55px;
}
.poster10-single-txt-div5{
    bottom: 25px;
    width: 40%;
    font-size: 16px;
    height: 23px;
}

.front-txt-div5{
    top: -3px;
    left: -3px;
}
.single-txt-span5-top{
    transform: translateY(5px);
}
.single-txt-span5-bottom{
    transform: translateY(-10px);
    font-size: 25px;
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
.back-to-me{
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