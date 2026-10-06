<template>
  <div class="poster2-container-div flex-row">
    <div class="poster2-back-div flex-column">
      <div class="bottom-tra-div">
      </div>
    </div>
    <div class="product-img-frame flex-column">
      <div class="product-img-frame-top-tra-div"></div>
      <div class="product-img-frame-bottom-tra-div"></div>
      <div class="product-img-div flex-row">
        <img class="poster2-pro-img" src="./YT-82791.png" alt="">
        <div class="brand-img-div">
          <img class="brand-img" src="../../../assets/brandsicons/yato.png" alt="">
        </div>
      </div>
    </div>
    <div class="product-info-div flex-column">
      <div class="pro-inf-div pro-inf-div-top"></div>
      <div class="pro-inf-div flex-row pro-inf-div-middle">
        <div class="pro-price-div flex-row">
          <div class="reial-icon-div">
            <img class="reial-img" src="./reialIcon.png" alt="">
          </div>
          <span class="pro-price-span">
            {{this.proPrice}}
          </span>
        </div>
      </div>
      <div class="pro-inf-div pro-inf-div-bottom flex-column">
        <div class="pro-name-div" dir="rtl">
          <span class="pro-name-span" >
            {{this.proName}}
          </span>
        </div>
        <div class="pro-disc-div " dir="rtl">
          <span class="pro-disc-span">
            {{this.proDisc}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:[ "proName","proPrice","proDisc"],
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
.poster2-container-div{
  position: relative;
    height: 700px;
    width: 600px;
    /* border: 1px solid ; */
}
.poster2-back-div{
  height: 100%;
  width: 100%;
  background-color: #555;
  justify-content: end;
}
.bottom-tra-div{
  width: 0;
  height: 0;
  border-top: 480px solid transparent;
  border-right: 600px solid rgb(249, 39, 7);
}
.product-img-frame{
  position: absolute;
  top: 15px;
  right: 10px;
  height: 500px;
  width: 400px;
  justify-content: space-between;
  background-color: #ffffff;
}
.product-img-frame-top-tra-div{
  width: 0;
  height: 0;
  border-top: 80px solid #555;
  border-right: 400px solid #ffffff;
}
.product-img-frame-bottom-tra-div{
  width: 0;
  height: 0;
  border-top: 80px solid transparent;
  border-right: 400px solid rgb(246, 40, 9);
}
.product-img-div{
  position: absolute;
  /* top: 50px; */
  height: 100%;
  width: 100%;
  /* background-color: #ccc; */
}
.poster2-pro-img {
  max-height: 100%;
  max-width: 100%;
  filter: drop-shadow(10px 10px 5px #818181);
}
.brand-img-div {
  position: absolute;
  bottom: 15px;
  left: 5px;
  /* height: 30px; */
  width: 60px;
  /* background-color: #3b3b3b; */
}
.brand-img{
  width: 100%;
}
.product-info-div{
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  /* background-color: rgba(197, 212, 212,0.2); */
}
.pro-inf-div{
  flex: 1;
  width: 100%;
}
/* .pro-inf-div-top{
  background-color: rgba(188, 60, 60,0.5);
} */
.pro-inf-div-middle{
  justify-content: start;
  /* background-color: rgba(238, 189, 98,0.2); */
}
.pro-price-div{
  height: 100px;
  width: 100px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 3px 15px rgb(46, 46, 46);
  color: rgb(59, 59, 59);
  border: 2px solid  #747474;
  border-radius: 50%;
  margin-left: 40px;
}
.pro-price-span{
  font-size: 30px;
  font-weight: bold;
  filter: drop-shadow(1px 1px 2px #3b3b3b);
}
/* .reial-icon-div */
.reial-img{
  height: 19px;
}
/* .pro-inf-div-bottom{
  background-color: rgba(235, 222, 206,0.2);
} */
.pro-name-div,.pro-disc-div{
  color: rgb(255, 255, 255);
  width: 90%;
  font-family: "Almarai";
}
.pro-name-span{
  font-size: 30px;
  font-weight: bold;
  margin-right: 15px;
  filter: drop-shadow(2px 2px 3px #3b3b3b);
}
.pro-disc-span{
  font-size: 18px;
  filter: drop-shadow(1px 1px 2px #000000);
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