<template>
  <div class="classifi-containers flex-row">
    <div class="classifi-container flex-row">
      <!-- <div class="top-right-shape-div">

        </div>
        <div class="bottom-left-shape-div">

        </div> -->
      <!-- <div class="top-left-spape-div">

        </div>
        <div class="bottom-right-spape-div">

        </div> -->
      <div class="shape-beam-div left-shape-beam-power-tools"></div>
      <div class="shape-beam-div right-shape-beam-power-tools"></div>
      <div class="classi-body-div flex-column">
        <div class="items-img-divs flex-column">
          <div class="single-items-div flex-row">
            <div class="single-item-div flex-row">
              <img src="./imgs/YT-82159.png" alt="" class="item-img" />
            </div>
            <div class="single-item-div single-item-div-translate flex-row">
              <img src="./imgs/YT-828133.png" alt="" class="item-img" />
            </div>
          </div>
        </div>
        <div class="txts-div">
          <span class="classi-span"> ادوات كهربائية </span>
        </div>
      </div>
    </div>
    <div class="classifi-container flex-row">
      <div class="shape-beam-div left-hand-tools-shape-div"></div>
      <div class="shape-beam-div right-hand-tools-shape-div"></div>
      <div class="classi-body-div flex-column">
        <div class="items-img-divs flex-column">
          <div class="single-items-div flex-row">
            <div class="single-item-div flex-row">
              <img src="./imgs/YT-38911.png" alt="" class="item-img" />
            </div>
            <div class="single-item-div single-item-div-translate flex-row">
              <img src="./imgs/YT-21990.png" alt="" class="item-img" />
            </div>
          </div>
        </div>
        <div class="txts-div">
          <span class="classi-span">الادوات اليدوية</span>
        </div>
      </div>
    </div>
    <div class="classifi-container flex-row">
      <div class="shape-beam-div left-seafty-tools-shape-beam-div"></div>
      <div class="classi-body-div flex-column">
        <div class="items-img-divs flex-column">
          <div class="single-items-div flex-row">
            <div class="single-item-div flex-row">
              <img src="./imgs/YT-80627.png" alt="" class="item-img" />
            </div>
            <div class="single-item-div single-item-div-translate flex-row">
              <img src="./imgs/YT-73980.png" alt="" class="item-img" />
            </div>
          </div>
        </div>
        <div class="txts-div">
          <span class="classi-span"> ادوات السلامة </span>
        </div>
      </div>
    </div>
    <div class="classifi-container flex-row">
      <div class="shape-beam-div right-carage-shape-beam-div"></div>
      <div class="classi-body-div flex-column">
        <div class="items-img-divs flex-column">
          <div class="single-items-div flex-row">
            <div class="single-item-div flex-row">
              <img src="./imgs/YT-55210.png" alt="" class="item-img" />
            </div>
            <div class="single-item-div single-item-div-translate flex-row">
              <img src="./imgs/YT-55557.png" alt="" class="item-img" />
            </div>
          </div>
        </div>
        <div class="txts-div">
          <span class="classi-span"> تصليح السيارات </span>
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
.classifi-containers {
  width: 100%;
  height: 100vh;
  flex-wrap: wrap;
}
.classifi-container {
  position: relative;
  /* height: 300px;
    width: 300px; */
  height: 400px;
  width: 400px;
  /* background-color:  #ffffff; */
  background-image: linear-gradient(to bottom, #ebebeb, #ffffff);
  /* background-image:linear-gradient(to right, #e3eb88, #92c5e7); */
  /* background-image:linear-gradient(to bottom right,  #edf2f8 , #cddbe8); */
  /* border-radius: 15px; */
  overflow: hidden;
  margin: 15px;
}
.background-div {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #e79292;
  z-index: 0;
}
.top-right-shape-div {
  position: absolute;
  top: 0;
  right: 0;
  /* border-top: 117px solid rgba(50, 136, 138, 0.8); */
  border-top: 217px solid rgb(255, 255, 255);
  border-left: 217px solid transparent;
  /* border-right: 7px solid transparent; */
  background-color: transparent;
  /* background-color: aqua; */
  border-top-right-radius: inherit;
  /* z-index: 0; */
}
.bottom-left-shape-div {
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom: 160px solid rgb(255, 255, 255);
  border-right: 160px solid transparent;
  /* border-right: 7px solid transparent; */
  background-color: transparent;
  /* background-color: aqua; */
  border-bottom-left-radius: inherit;
  /* z-index: 0; */
}
.top-left-spape-div {
  position: absolute;
  top: 0;
  left: 0;
  border-top: 77px solid rgb(255, 255, 255);
  border-right: 77px solid transparent;
  background-color: transparent;
  border-top-right-radius: inherit;
}
.bottom-right-spape-div {
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom: 57px solid rgb(255, 255, 255);
  border-left: 57px solid transparent;
  background-color: transparent;
  border-top-right-radius: inherit;
}
.shape-beam-div {
  position: absolute;
  right: -180px;
  top: -160px;
  /* left: -20px;
    top: -149px; */
  height: 300px;
  width: 180px;
  border-radius: 0 0 100% 100%;
  /* background-image:linear-gradient(to bottom,#fdadad, #6fcbe9 ); */
  background-image: linear-gradient(to top, #f38f8f, #fdeead);
  transform: rotate(-40deg) scale(1);
}
.shape-beam-div-2pos {
  left: 130px;
  top: -15px;
}
.left-shape-beam-power-tools {
  left: -25px;
  top: -10px;
  background-image: linear-gradient(to bottom, #f3e28f, #f87f6a);
}
.right-shape-beam-power-tools {
  top: -150px;
  right: -135px;
  border-radius: 0;
  background-image: none;
  background-color: #80b2e5;
}
.left-hand-tools-shape-div {
  left: 0;
  top: -65px;
  background-image: linear-gradient(to bottom, #6ab1f8, #32c258);
}
.right-hand-tools-shape-div {
  right: -220px;
  top: -95px;
  background-image: none;
  background-color: #f57fa6;
}
.left-seafty-tools-shape-beam-div {
  left: 0px;
  top: -115px;
  background-image: linear-gradient(to bottom, #f86a99, #fba4b0);
}
.right-carage-shape-beam-div {
  right: -120px;
  top: -115px;
  height: 450px;
  border-radius: 0;
  background-image: linear-gradient(to bottom, #eff86a, #fba4b0);
}
.classi-body-div {
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  /* z-index: 1; */
  /* background-color: #e79292; */
}
.items-img-divs {
  width: 100%;
  justify-content: space-evenly;
}
.single-items-div {
  width: 100%;
  justify-content: space-evenly;
  /* filter: drop-shadow(1px 1px 1px #212121); */
  /* box-shadow: 3px 3px 5px rgb(181, 181, 181); */
}
.single-item-div {
  /* flex: 1; */
  width: 150px;
  height: 155px;
  margin: 5px;
  /* background-color: #ffffff; */
  background-image: linear-gradient(to bottom right, #f0f5fb, #e5ecf4);
  /* border: 1px solid rgb(233, 233, 233); */
  box-shadow: 3px 3px 5px #bac6d4;
  border-radius: 7px;
  padding: 5px;
}
.single-item-div-translate {
  transform: translateY(-15px);
}
.item-img {
  max-width: 100%;
  max-height: 100%;
}
/* .txts-div{ */
/* transform: translateX(30px); */
/* } */
.classi-span {
  font-family: "Almarai";
  color: #ccf8f9;
  /* background-color: #6897cd; */
  background-color: #175255;
  padding: 10px 25px 10px 25px;
  font-size: 26px;
  border-radius: 7px;
  /* box-shadow: 3px 3px 5px #6897cd; */
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
