<template>
<div class="my-margin">

  <div class="slides-container-div flex-row">
        <div class="single-slide-div flex-row">
          <div class="my-background-div flex-column">
            <img
              src="./handsToolsImgs/powertoolback.jpg"
              class="new-background-img"
              alt=""
            />
            <div class="down-rect-container flex-column"></div>
            <div class="white-rect-container">
              <div class="more-space-div"></div>
              <div class="top-rect-container-div"></div>
            </div>
            <div class="white-rect-container">
              <div class="more-space-div more-2"></div>
              <div class="top-rect-container-div rect-2"></div>
            </div>
            <!-- <div class="white-rect-container">
              <div class="more-space-div more-3"></div>
              <div class="top-rect-container-div rect-3"></div>
            </div> -->
            <!-- <img
              src="./handsToolsImgs/YT-82002BS.png"
              class="right-background-img"
              alt=""
            /> -->
          </div>
          <div class="slide-body-div flex-column">
            <div class="products-div flex-row">
              <!-- <div class="single-products-div flex-column">
                <div class="single-product-div flex-row">
                  <img
                    src="./handsToolsImgs/YT-82181BS.png"
                    alt=""
                    class="img-element"
                  />
                </div>
                <div class="single-product-div flex-row">
                  <img src="./handsToolsImgs/YT-82275BS.png" class="img-element" />
                </div>
              </div> -->
              <div class="single-products-div flex-column">
                <div class="single-product-div flex-row">
                  <img
                  src="./handsToolsImgs/handstoolsimg.png"  
                    alt=""
                    class="img-element-10"
                  />
                </div>
              </div>
              <!-- <div class="single-products-div flex-column">
                <div class="single-product-div flex-row">
                  <img
                    src="./handsToolsImgs/YT-82810.png"
                    alt=""
                    class="img-element"
                  />
                </div>
                <div class="single-product-div flex-row">
                  <img
                    src="./handsToolsImgs/YT-8277935.png"
                    alt=""
                    class="img-element"
                  />
                </div>
              </div> -->
            </div>
            <div class="texts-div flex-row">
              <!-- <div class="second-txt-div flex-row">
                <span class="original-span">أنجز بســرعة</span>
              </div> -->
              <div class="first-txt-div flex-row">
                <span> أدوات يدوية  </span>
              </div>
            </div>
          </div>
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
.my-margin{
  margin: 20px;
}
.slides-container-div{
height:728px;
width:1108px;
/* border:2px solid rgb(219, 219, 219); */
/* border-radius: 15px; */
/* margin: 10px; */
}
.single-slide-div{
  position: relative;
  height: 100%;
  width: 100%;
  /* background-color: rgb(122, 144, 220); */
}
.slide-body-div{
  position: absolute;
  height: 70%;
  width: 100%;
}
.products-div{
  /* flex: 1; */
  width: 100%;
  height: 100%;
  padding: 10px;
  /* background-color: rgba(252, 158, 36,0.5); */
}
.single-products-div{
  height: 100%;
  width: 90%;
  padding: 10px;
  /* background-color: rgb(255, 255, 255); */
}
.single-product-div{
  flex: 0.8;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 30px 0 30px 0;
  margin: 10px;
  /* backdrop-filter: blur(2px); */
  background-color: rgb(255, 255, 255);
  box-shadow: 0 3px 15px rgb(59, 59, 59);
  /* box-shadow: 0 3px 15px rgba(255, 255, 255, 0.7); */
}
.img-element{
  height: 90%;
  width: 90%;
  /* border-radius: 60px 15px 15px 15px; */
  filter: drop-shadow(5px 5px 5px rgb(0, 0, 0));
}
.img-element-10{
  height: 80%;
  /* width: 70%; */
  /* border-radius:  15px; */
  filter: drop-shadow(5px 5px 5px rgb(0, 0, 0));
}
.texts-div{
  flex:0.5;
  width: 100%;
  font-size: 50px;
  /* color: rgb(74, 74, 74); */

  /* font-family: "Fustat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal; */
   font-family: "Almarai", sans-serif;
  font-weight: 400;
}
.first-txt-div{
   padding: 8px 10px 8px 10px;
  width: 60%;
  /* background-color: red; */
  /* justify-content: end; */
  border-radius: 15px;
  color: white;
  /* background-color: rgb(255, 255, 255); */
  filter: drop-shadow(5px 5px 5px rgb(0, 0, 0));
  /* border: 1px solid rgb(233, 233, 233); */
    /* border: 3px solid rgb(249, 191, 1); */
      /* box-shadow: 0 3px 15px rgb(59, 59, 59); */
}
.second-txt-div{
  padding: 8px 5px 8px 5px;
  width: 80%;
    border-radius: 15px;
    justify-content: start;
  background-color: rgba(255, 255, 255);
  /* filter: drop-shadow(5px 5px 5px rgb(255, 255, 255)); */
  margin-top: 20px;
    /* border: 1px solid rgb(233, 233, 233); */
    box-shadow: 0 3px 15px rgb(59, 59, 59);
    /* border: 3px solid rgb(249, 191, 1); */
  /* background-color: red; */
}
.original-span{
  margin-left: 15px;
}

.my-background-div {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 13px;
  /* background-color: rgb(70, 211, 14); */
}
.right-background-img {
  position: absolute;
  right: 70px;
  bottom: 230px;
  height: 490px;
  width: 490px;
  transform: rotate(75deg);
}
.new-background-img {
  position: absolute;
  left: 0;
  bottom: 0;
  /* width: 50%; */
  height: 100%;
  width: 100%;
  /* border-radius: 14px; */
}
/* this three div make white rect... */
/* this three div make white rect... */
.white-rect-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* border-radius: 13px 13px 0 0; */
}
.more-space-div {
  height: 230px;
  width: 100%;
  /* border-radius: 13px 13px 0 0; */
  background-color: #ffffff;
}
.top-rect-container-div {
  height: 0;
  width: 0;
  border-top: 330px solid rgb(255, 255, 255);
  border-left: 1108px solid transparent;
}
/* this three div make white rect... */
/* this three div make white rect... */
/* this three div make white rect... */
.more-2 {
  height: 220px;
  background-color: rgba(100, 6, 6, 0.9);
   /* background-image: linear-gradient(to top , rgba(100, 6, 6, 0.9), #f6f6f6); */
}
.rect-2 {
  /* border-top: 330px solid rgba(13, 55, 33, 0.9); */
  border-top: 330px solid rgba(100, 6, 6, 0.9);
}
.more-3 {
  height: 210px;
  /* background-color: rgb(247, 58, 58); */
    /* background-image: linear-gradient(to top right , rgba(100, 6, 6, 0.9), #f6f6f6); */

}
.rect-3 {
  border-top: 330px solid rgba(100, 6, 6, 0.9);
}
.down-rect-container {
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 0px;
  /* border-radius: 14px; */
  height: 100%;
  width: 100%;
  /* background-color: rgba(13, 55, 33, 0.9); */
  background-color: rgba(100, 6, 6, 0.9);
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