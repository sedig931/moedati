<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="ss4-outer-container ss3-mObserve ss4-outer-container-motion flex-column" dir="rtl">
    <div class="ss4-container flex-column" id="ss4-slide-0">
      <div class="ss4-top-div flex-row">
        <div class="ss4-inner-top-div flex-row">
          <img
            src="https://cdn.salla.sa/YgXdEO/7adb908f-eb53-45e0-9818-0fe393f0e1cb-1000x289.56763189211-vzQhcHUxfgvJLvip8Vd1OBPdePbA0y5QjBCRvc7w.png"
            alt=""
            class="ss4-yato-img ss4-yato-img-motion"
          />
        </div>
      </div>
      <div class="ss4-bottom-div flex-row">
        <div class="ss4-inner-bottom-div">
          <span
            class="ss4-bottom-span ss4-bottom-span-1 ss4-bottom-span-WHITE ss4-bottom-span-trans1"
            >{{ this.ss4Lng[0] }}</span
          >
          <span
            class="ss4-bottom-span ss4-bottom-span-2 ss4-bottom-span-WHITE ss4-bottom-span-trans2"
            >{{ this.ss4Lng[1] }}</span
          >
          <div class="ss4-bottom-div-txts-btn">
            <span
              class="ss4-bottom-span ss4-bottom-span-3 ss4-bottom-span- ss4-bottom-span-trans3"
              >{{ this.ss4Lng[2] }}</span
            >
            <button
              class="ss4-buy-now-btn"
              onclick="window.location.href = 'https://moedati.com/ar/redirect/brands/684503155'"
            >
                {{ this.ss4Lng[3] }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="ss4-container flex-column" id="ss4-slide-1">
      <div class="ss4-top-div flex-row">
        <div class="ss4-inner-top-div flex-row">
          <img
            src="https://cdn.salla.sa/YgXdEO/e7486d22-39c2-4cca-becc-9b9594971e02-1000x419.53028430161-Ev9gHPhvlpT596oZn5svSVZ1dF46GSPGOiVkdkqy.png"
            alt=""
            class="ss4-yato-img ss4-torix-img ss4-yato-img-motion"
          />
        </div>
      </div>
      <div class="ss4-bottom-div ss4-bottom-div-slide1 flex-row">
        <div class="ss4-inner-bottom-div ss4-inner-bottom-div-slide-1">
          <div class="ss4-comprossor-imgs flex-row">
            <img
              src="https://cdn.salla.sa/YgXdEO/ddd2a2de-ce1f-4724-9319-36ee5a0b0b33-1000x801.85185185185-aRCKvKFVqP4w71VuRK7EVurJT7wvdrwGpZ58Usfy.png"
              alt=""
              class="ss4-left-copm-img"
            />
            <img
              src="https://cdn.salla.sa/YgXdEO/8b85ecf2-f4e3-4e3a-95e1-cb7c2a959994-1000x666.66666666667-NYxKHVarecBhFn3T3sYR80Vp39kq5VWvY6lMDNOT.png"
              alt=""
              class="ss4-center-copm-img ss4-center-copm-img-motion"
            />
            <img
              src="https://cdn.salla.sa/YgXdEO/75d17a07-9d2c-4f65-82e3-aed6bb1f9b78-1000x666.66666666667-B7w95pSYg1PiL6QR0uUenZpZE1trWzBjlK6o9FR3.png"
              alt=""
              class="ss4-right-copm-img"
            />
          </div>
          <div class="ss4-bottom-div-slide-1 flex-row">
            <button
              class="ss4-buy-now-btn"
              onclick="window.location.href = 'https://moedati.com/ar/TORIX/brand-50008540'"
            >
                {{ this.ss4Lng[3] }}
          </button>
          </div>
        </div>
      </div>
    </div>
    <div class="ss4-shuvles-points-div flex-row">
      <div class="ss4-single-point" id="ss4-single-point-0"></div>
      <div class="ss4-single-point" id="ss4-single-point-1"></div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      ss4Lng: ["التميز", "أدوات ذات جودة عالية", "جهة توزيع معتمدة رسمياً", "تسوق الآن"],
      ss4Eng: ["PREMIUM", "QUALITY TOOLS", "AUTHORIZED DISTRIBUTOR", "SHOP NOW"],
      ss4ActiveSlide: 0,
      ss4Interv: {},
      //propreties
    };
  },
  methods: {
    ss4SetActiveSlide() {
      this.ss4ActiveSlide >= 1 ? (this.ss4ActiveSlide = 0) : this.ss4ActiveSlide++;
      const ss4Containers = document.querySelectorAll(".ss4-container");
      ss4Containers.forEach((ele, i) => {
        if (Number(ele.id[ele.id.length - 1]) === this.ss4ActiveSlide) {
          ele.style.display = "flex";
          if (ele.id === "ss4-slide-0") {
            document.querySelector("#ss4-single-point-0").classList.add("ss4-single-point-active");
            document
              .querySelector("#ss4-single-point-1")
              .classList.remove("ss4-single-point-active");
            setTimeout(() => {
              document
                .querySelector(".ss4-bottom-span-1")
                .classList.remove("ss4-bottom-span-trans1");
              document
                .querySelector(".ss4-bottom-span-2")
                .classList.remove("ss4-bottom-span-trans2");
              document
                .querySelector(".ss4-bottom-span-3")
                .classList.remove("ss4-bottom-span-trans3");
              document.querySelector(".ss4-yato-img").classList.remove("ss4-yato-img-motion");
            }, 100);
            document.querySelector(".ss4-torix-img").classList.add("ss4-yato-img-motion");
            document
              .querySelector(".ss4-center-copm-img")
              .classList.add("ss4-center-copm-img-motion");
            document.querySelector(".ss4-left-copm-img").classList.add("ss4-left-copm-img-motion");
            document
              .querySelector(".ss4-right-copm-img")
              .classList.add("ss4-right-copm-img-motion");
          } else {
            document
              .querySelector("#ss4-single-point-0")
              .classList.remove("ss4-single-point-active");
            document.querySelector("#ss4-single-point-1").classList.add("ss4-single-point-active");
            document.querySelector(".ss4-bottom-span-1").classList.add("ss4-bottom-span-trans1");
            document.querySelector(".ss4-bottom-span-2").classList.add("ss4-bottom-span-trans2");
            document.querySelector(".ss4-bottom-span-3").classList.add("ss4-bottom-span-trans3");
            document.querySelector(".ss4-yato-img").classList.add("ss4-yato-img-motion");
            setTimeout(() => {
              document.querySelector(".ss4-torix-img").classList.remove("ss4-yato-img-motion");
              document
                .querySelector(".ss4-center-copm-img")
                .classList.remove("ss4-center-copm-img-motion");
              document
                .querySelector(".ss4-left-copm-img")
                .classList.remove("ss4-left-copm-img-motion");
              document
                .querySelector(".ss4-right-copm-img")
                .classList.remove("ss4-right-copm-img-motion");
            }, 100);
          }
        } else {
          ele.style.display = "none";
        }
      });
    },
    ss4RunInterval() {
      this.ss4Interv = setInterval(() => {
        this.ss4SetActiveSlide();
        // console.log("here.");
      }, 3000);
    },
  },
  mounted() {
    this.ss4SetActiveSlide();
    this.ss4RunInterval();
    // setTimeout(() => {
    //   clearInterval(this.ss4Interv);
    // }, 15000);
  },
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
  transition:
    transform 1.5s,
    opacity 0.5s;
}
.ss4-outer-container-motion {
  transform: translateY(350px);
  opacity: 0;
}
.ss4-container {
  height: 75vh;
  min-height: 570px;
  width: 90%;
  overflow: hidden;
}
.ss4-top-div {
  position: relative;
  flex: 0.6;
  width: 100%;
  background-image: linear-gradient(to top left, #303030, #000000);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.ss4-yato-img {
  height: 200px;
}
.ss4-torix-img,
.ss4-yato-img {
  transition:
    transform 0.7s,
    opacity 1s;
}
.ss4-yato-img-motion {
  transform: scale(0.7);
  opacity: 0.3;
}
.ss4-bottom-span {
  height: 80px;
  transition:
    transform 1.5s,
    opacity 1s;
  justify-content: start;
  align-items: center;
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
  height: 100px;
  padding: 5px 30px 5px 30px;
  border: none;
  border-radius: 20px;
  transition: background-color 0.5s;
  color: #e32c2c;
  z-index: 1;
}
.ss4-buy-now-btn:hover {
  background-color: #292929;
  color: white;
}
/* added new */
.ss4-shuvles-points-div {
  margin-top: 15px;
}
.ss4-single-point {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: #e7e7e7;
  border: 1px solid #e1e1e1;
  margin: 5px;
  cursor: pointer;
}
.ss4-single-point-active {
  background-color: #a5a5a5;
  border-color: #a5a5a5;
}
.ss4-bottom-div-slide1 {
  background-image: linear-gradient(to top left, #ffffff, #b3b3b3);
}
.ss4-comprossor-imgs {
  position: relative;
  height: 100%;
  width: 100%;
}

.ss4-left-copm-img {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 250px;
  filter: drop-shadow(2px -2px 1px #ffffff);
  transition:
    transform 1s,
    opacity 0.7s;
}
.ss4-left-copm-img-motion {
  transform: scale(0.7) translateX(100px);
  opacity: 0;
}
.ss4-center-copm-img {
  position: absolute;
  bottom: 0;
  height: 370px;
  z-index: 1;
  filter: drop-shadow(2px -2px 1px #ffffff);
  transition:
    transform 1s,
    opacity 0.7s;
}
.ss4-center-copm-img-motion {
  transform: scale(0.9) translateX(200px);
  opacity: 0;
}
.ss4-right-copm-img {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 270px;
  filter: drop-shadow(2px -2px 1px #ffffff);
  transition:
    transform 1s,
    opacity 0.7s;
}
.ss4-right-copm-img-motion {
  transform: scale(0.5) translateX(80px);
  opacity: 0;
}
.ss4-bottom-div-slide-1 {
  height: 84%;
  min-width: 350px;
  justify-content: end;
  align-items: flex-end;
}
.ss4-inner-bottom-div-slide-1 {
  flex-direction: row;
}
/* added new */
@media (max-width: 1600px) {
  .ss4-left-copm-img,
  .ss4-right-copm-img {
    display: none;
  }
}
@media (min-width: 1345px) and (max-width: 1600px) {
  .ss4-yato-img {
    height: 150px;
  }
  .ss4-bottom-div {
    font-size: 50px;
  }
  .ss4-buy-now-btn {
    height: 90px;
    padding: 8px 30px 8px 30px;
  }
  .ss4-left-copm-img,
  .ss4-right-copm-img {
    display: none;
  }
}
@media (min-width: 1060px) and (max-width: 1345px) {
  .ss4-yato-img {
    height: 150px;
  }
  .ss4-bottom-div {
    font-size: 50px;
  }
  .ss4-bottom-span {
    height: 60px;
  }
  .ss4-bottom-div-txts-btn {
    flex-direction: column;
  }
  .ss4-buy-now-btn {
    height: 90px;
    padding: 6px 20px 6px 20px;
    max-width: 450px;
  }
  .ss4-center-copm-img {
    height: 350px;
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
  .ss4-bottom-span {
    height: 45px;
  }
  .ss4-buy-now-btn {
    height: 70px;
    padding: 6px 20px 6px 20px;
    max-width: 350px;
    margin: 10px 0 0 0;
  }
  .ss4-center-copm-img {
    height: 300px;
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
    flex-direction: column;
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
  .ss4-bottom-span {
    height: 45px;
  }
  .ss4-buy-now-btn {
    height: 60px;
    padding: 6px 18px 6px 18px;
    max-width: 250px;
    margin: 10px 0 0 0;
  }
  .ss4-center-copm-img {
    height: 250px;
  }
  .ss4-bottom-div-slide-1 {
    max-height: 100px;
    justify-content: center;
    align-items: center;
  }
  .ss4-inner-bottom-div-slide-1 {
    align-items: center;
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
