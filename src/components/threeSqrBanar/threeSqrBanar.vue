<template>
  <div class="three-banar-container-div">
    <div class="sqr-banar-div left-sqr-banar-div flex-row">
      <!-- <div class="left-bottom-left-border-div my-border-bottom border-left"></div> -->
      <div class="sqr-back-div left-sqr-back-div flex-column">
        <div class="tow-row-divs flex-row">
          <div class="left-row-div left-row-div-left-sqr my-border-bottom"></div>
          <div class="right-row-div my-border-top border-left"></div>
        </div>
      </div>
      <div class="left-sqr-body-div flex-column">
        <div class="sqr-left-imgs-div flex-row">
          <img class="left-sqr-imgs" src="./threeBanarsImgs/60780-.png" alt="" />
          <div class="single-img-left-sq"></div>
          <img class="left-sqr-imgs" src="./threeBanarsImgs/81827(1).png" alt="" />
          <div class="single-img-left-sq"></div>
          <img class="left-sqr-imgs" src="./threeBanarsImgs/YT-17226.png" alt="" />
        </div>
        <div class="sqr-left-txts-div flex-column">
          <span class="left-sqr-span">أختر الأداء العالي</span>
          <span class="left-sqr-span left-bottom-span">و ودع الأعطال المتكررة</span>
        </div>
      </div>
    </div>
    <div class="sqr-banar-div center-sqr-banar-div flex-row">
      <div class="sqr-back-div center-sqr-back-div flex-column">
        <div class="tow-row-divs flex-row">
          <div class="left-row-div my-border-bottom"></div>
          <div class="right-row-div my-border-top border-left"></div>
        </div>
      </div>
      <div class="center-sqr-body-div flex-column">
        <div class="center-body-txts-div flex-column">
          <span class=" my-plus-txts"> أدوات يدوية ، كهربائية ، آلات التصنيع</span>
          <span class="center-body-span"> كل ما تبحث عنه في مكان واحد </span>
        </div>
        <div class="center-body-sqr-imgs-div flex-row">
          <img class="center-body-sqr-img" src="./threeBanarsImgs/YT-84910.png" alt="" />
        </div>
      </div>
    </div>
    <!-- <div class="sqr-banar-div right-sqr-banar-div flex-row">
      <div class="right-top-right-border-div my-border-top border-right"></div>
      <div class="sqr-back-div right-sqr-back-div flex-column">
        <div class="tow-row-divs flex-row">
          <div class="left-row-div my-border-bottom"></div>
          <div class="right-row-div right-row-div-right-sqr"></div>
        </div>
      </div>
      <div class="body-right-sqr-div flex-column">
        <div class="right-body-sqr-img-div flex-row">
          <img src="./threeBanarsImgs/YT-828075.png" alt="" class="right-sqr-img" />
          <div class="single-img-left-sq"></div>
          <img
            src="./threeBanarsImgs/YT-82160BS.png"
            alt=""
            class="right-sqr-img right-sqr-img-right"
          />
        </div>
        <div class="right-body-sqr-txts-div flex-row">
          <span class="right-body-sqr-div-span"> معدات معتمدة ، تلبي معايير الجودة العالمية </span>
        </div>
      </div>
    </div> -->
  </div>
  <!-- <div class="three-banar-container-div">
    <ThreeSqrBanarMobile/>
  </div> -->
</template>
<script>
import ThreeSqrBanarMobile from './threeSqrBanarMobile.vue';
export default {
  components: {
    ThreeSqrBanarMobile
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
.three-banar-container-div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* flex-wrap: wrap; */
  width: 100%;
  height: 90vh;
  /* border: 1px solid; */
  font-family: "Almarai", sans-serif;
  font-weight: bold;
  color: rgb(74, 74, 74);
}
.sqr-banar-div {
  position: relative;
  height: 700px;
  width: 700px;
  /* border: 1px solid; */
  /* background-color: aqua; */
}
.left-sqr-banar-div {
  /* background-image: linear-gradient(to top left, #39b385, #9be15d); */
  background-image: linear-gradient(to right, #ffffff, #f0f0f0);
}
.center-sqr-banar-div {
  /* background-image: linear-gradient(to top left, #39b385, #9be15d); */
  background-image: linear-gradient(to right, #f0f0f0, #e4e4e4);
}
.right-sqr-banar-div {
  /* background-image: linear-gradient(to top left, #39b385, #9be15d); */
  background-image: linear-gradient(to right, #e4e4e4, #ffffff);
}
.sqr-back-div {
  position: absolute;
  height: 65%;
  width: 100%;
  justify-content: end;
}
.left-sqr-back-div {
  justify-content: end;
}
.center-sqr-back-div {
  justify-content: center;
}
.right-sqr-back-div {
  justify-content: start;
}
.tow-row-divs {
  height: 150px;
  width: 100%;
  justify-content: end;
  /* background-color: #ccc; */
}
.left-row-div {
  height: 100%;
  width: 100%;
  /* border-radius: 0 0 10px 0; */
}
.left-row-div-left-sqr {
  width: 400px;
}

.right-row-div {
  width: 200px;
  height: 100%;
}
.right-row-div-right-sqr {
  width: 100px;
}
.left-bottom-left-border-div {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 200px;
  width: 200px;
  border-radius: 0 0 0 15px;
}
.right-top-right-border-div {
  position: absolute;
  top: 0;
  right: 0;
  height: 200px;
  width: 200px;
    border-radius: 0 15px 0 0;
  /* background-color: aqua; */
}
.my-border-bottom {
  border-bottom: 4px solid rgb(211, 211, 211);
}
.my-border-top {
  /* border-top: 4px solid rgb(169, 231, 99); */
  border-top: 4px solid rgb(211, 211, 211);
}
.border-right {
  border-right: 4px solid rgb(211, 211, 211);
}
.border-left {
  border-left: 4px solid rgb(211, 211, 211);
}
.left-sqr-body-div {
  height: 60%;
  width: 100%;
  z-index: 1;
  /* background-color: red; */
}
.sqr-left-txts-div {
  flex: 0.5;
  width: 100%;
  align-items: flex-end;
  /* background-color: #555; */
  /* border: 1px solid; */
}
.sqr-left-imgs-div {
  flex: 0.5;
  width: 100%;
  /* background-color: bisque; */
}
.left-sqr-span {
  font-size: 32px;
  transform: translateX(-250px);
}
.left-bottom-span {
  margin-top: 20px;
}
.single-img-left-sq {
  height: 110px;
  width: 4px;
  background-color: rgb(211, 211, 211);
  /* flex: 1; */
  /* border-right: 4px solid rgb(138, 138, 138); */
  border-radius: 3px;
}

.left-sqr-imgs {
  /* height: 200px; */
  width: 220px;
  filter: drop-shadow(7px 2px 4px rgb(146, 146, 146));
}

.center-sqr-body-div {
  height: 100%;
  width: 100%;
  /* background-color: #555; */
  z-index: 1;
}
.center-body-txts-div,
.center-body-sqr-imgs-div {
  flex: 1;
  width: 100%;
}
.center-body-txts-div {
  justify-content: end;
}
  .my-plus-txts{
    font-size: 32px;
    transform: translateX(70px) translateY(-80px);
    /* font-size: 32px; */
    /* transform: translateX(-30px); */
  }
.center-body-span {
  font-size: 32px;
  transform: translateX(-100px) translateY(-50px);
}
.center-body-sqr-img {
  width: 430px;
  filter: drop-shadow(7px 2px 4px rgb(146, 146, 146));
  transform: translateY(40px);
}
.body-right-sqr-div {
  height: 100%;
  width: 100%;
  /* background-color: #ccc; */
  z-index: 1;
}
.right-body-sqr-txts-div,
.right-body-sqr-img-div {
  flex: 1;
}
.right-body-sqr-img-div {
  width: 100%;
  justify-content: space-evenly;
  /* background-color: black; */
}
.right-sqr-img {
  width: 200px;
  filter: drop-shadow(7px 2px 4px rgb(146, 146, 146));
}
/* .right-sqr-img-right {

} */
.right-body-sqr-txts-div {
  width: 100%;
  /* background-color: #555; */
}
.right-body-sqr-div-span {
  transform: translateY(-120px);
  font-size: 32px;
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
