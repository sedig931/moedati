<template>
  <div class="sss1-container">
    <div class="sss1-back-img-div" id="sss1-img-div-id">
      <img
        src="https://cdn.salla.sa/YgXdEO/NgCnpi2spcah0xyIqYD7Cp4NdZE4q9Lq4d5qXQXw.png"
        alt=""
        class="sss1-back-img"
      />
    </div>
    <div class="sss1-shape1-div"></div>
    <div class="sss1-shape2-div"></div>
    <div class="sss1-txts-div flex-column">
      <span class="sss1-span-top sss1-span-txt flex-row"
        >سلامتك بمعايير اوربية
        <img
          src="https://cdn.salla.sa/YgXdEO/dafc5a8f-1af3-43c8-a7b3-15bb58778793-1000x1000-k33Bz04XuNrKXkgjUfPuK33nZDVRuWtaBrtP6Jag.png"
          alt=""
          class="urp-img"
        />
      </span>
      <span class="sss1-span-bottom sss1-span-txt flex-row">
        معدات موثوقة تدوم وتتحمل أصعب الظروف
      </span>
      <button
        class="sss1-btn1"
        onclick="window.location.href = 'https://salla.sa/moedati/redirect/categories/1044224189'"
      >
        إكتشف المزيد
      </button>
    </div>
    <div class="sss1-img-div flex-row">
      <div
        class="sss1-circle-pro sss1-circle-pro1 flex-row"
        onclick="
          window.location.href = 'https://moedati.com/ar/l-سترة-سلامة-7466474664/p1975348164'
        "
      >
        <img
          src="https://cdn.salla.sa/YgXdEO/8094cb7b-e358-4597-9b3e-6ce71e3d72a4-1000x750-XCRZOvVE4bBZ9Uvv5LPNsWYYIhVKvp1AgcxrxAHk.png"
          alt=""
          class="sss1-circle-pro-img"
        />
      </div>
      <div
        class="sss1-circle-pro sss1-circle-pro2 flex-row"
        onclick="
          window.location.href =
            'https://moedati.com/ar/قفازات-جلد-صناعي-بنقاط-سيليكون-ضد-الانزلاق-yato-أدوات-السلامة-yt-74665/p682207678'
        "
      >
        <img
          src="https://cdn.salla.sa/YgXdEO/79a82ad2-a2bc-469b-8ba9-cc1165d1d0f5-737.93859649123x1000-KDg2MwZovRVQO8VCyrBtp4DgFJMyuJid7SQP7xqR.png"
          alt=""
          class="sss1-circle-pro-img sss1-circle-pro-img2"
        />
      </div>
      <img
        src="https://cdn.salla.sa/YgXdEO/BDjB14RVuuQCIQJpYcshwmtcdYFEogC5f0l815Xp.png"
        alt=""
        class="sss1-img"
      />
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
.sss1-container {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  height: 450px;
  width: 80%;
  border-radius: 25px 25px 0 0;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #f2f2f2, #fcfcfc);
  margin-top: 30px;
}
.sss1-back-img-div {
  position: absolute;
  width: 100%;
  height: 100%;
}
.sss1-back-img {
  width: 100%;
  height: 100%;
}
.sss1-shape1-div {
  position: absolute;
  top: 0;
  left: 0;
  height: 35px;
  width: 50%;
  border-radius: 0 0 25px 0;
  border-bottom: 3px solid #ffffff;
  border-right: 3px solid #ffffff;
}
.sss1-shape2-div {
  position: absolute;
  top: 0;
  left: 0;
  height: 70px;
  width: 30%;
  border-radius: 0 0 25px 0;
  border-bottom: 3px solid #ffffff;
  border-right: 3px solid #ffffff;
}
.sss1-txts-div {
  height: 100%;
  font-family: "Almarai";
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  z-index: 1;
}
.sss1-span-txt {
  position: relative;
  height: 45px;
  margin: 10px;
  padding: 0px 15px 0px 15px;
  border-radius: 15px 0 15px;
  border: 2px solid rgb(255, 255, 255);
  filter: drop-shadow(2px 2px 3px #c5c5c5);
  background-image: linear-gradient(to top, #e34545, #ee8985);
}
.urp-img {
  position: absolute;
  top: -70px;
  width: 45px;
  border-radius: 7px 0 7px 0;
  box-shadow: 0 1px 3px rgb(95, 95, 95);
}
.sss1-btn1 {
  border: none;
  font-size: 23px;
  color: white;
  border-radius: 10px;
  padding: 4px 20px 4px 20px;
  margin-top: 15px;
  font-weight: normal;
  background-image: linear-gradient(to bottom, #33868a, #175255);
}
.sss1-img-div {
  position: relative;
  height: 100%;
  align-items: flex-end;
  z-index: 1;
}
.sss1-img {
  height: 100%;
}
#sss1-img-div-id img {
  margin: 0 !important;
}
.sss1-circle-pro {
  position: absolute;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 3px 5px rgb(216, 216, 216);
  cursor: pointer;
  padding: 1px;
}
.sss1-circle-pro1 {
  top: 30px;
  left: 50px;
  height: 60px;
  width: 60px;
}
.sss1-circle-pro2 {
  top: 90px;
  right: 50px;
  height: 50px;
  width: 50px;
}
.sss1-circle-pro-img {
  height: 60%;
  filter: drop-shadow(0px 1px 1px #b2b2b2);
  transition: transform 0.5s;
}
.sss1-circle-pro-img2 {
  height: 85%;
}
.sss1-circle-pro1:hover .sss1-circle-pro-img {
  transform: scale(1.05) !important;
}
.sss1-circle-pro2:hover .sss1-circle-pro-img {
  transform: scale(1.05) !important;
}
/* media query */
/* media query */

@media (min-width: 500px) and (max-width: 1200px) {
  .sss1-txts-div {
    font-size: 20px;
  }
  .sss1-span-txt {
    height: 43px;
    margin: 7px;
    padding: 0px 10px 0px 10px;
    border-radius: 13px 0 13px;
  }
  .sss1-btn1 {
    font-size: 20px;
    border-radius: 7px;
    padding: 4px 20px 4px 20px;
  }
  .sss1-img {
    height: 90%;
  }
}
@media (max-width: 1000px) {
  .sss1-container {
    width: 100%;
  }
}
@media (max-width: 800px) {
  .sss1-container {
    flex-direction: column;
    height: 70vh;
  }
  .sss1-txts-div {
    width: 100%;
    font-size: 18px;
    margin-top: 20px;
  }
  .sss1-span-txt {
    height: 35px;
    margin: 5px;
    padding: 0px 10px 0px 10px;
    border-radius: 13px 0 13px;
  }
  .sss1-btn1 {
    font-size: 15px;
    border-radius: 7px;
    padding: 4px 20px 4px 20px;
  }
  .sss1-img {
    height: 350px;
  }
  .urp-img {
    position: absolute;
    top: -44px;
    width: 34px;
    border-radius: 5px 0 5px 0;
  }
}
@media (max-width: 500px) {
  .sss1-txts-div {
    font-size: 16px;
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
