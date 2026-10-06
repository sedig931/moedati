<template>
  <div class="ss15-container-outer flex-column">
    <div class="ss15-container">
      <div class="ss15-single-card ss15-card-invisible flex-row" id="ss15-card-2">
        <div class="ss15-back-card-div"></div>
        <img
          src="https://cdn.files.salla.network/products/1157822896/f73755fd-f6ab-4ac7-9dc3-21cbdb5bf850-original.webp"
          class="ss15-single-img"
        />
        <div class="ss15-card-txts-div" dir="rtl">
          <span class="ss15-single-card-title-span"> الجودة المضمونة </span>
          <span class="ss15-single-card-body-span">
            نختار المواد بعناية ونلتزم بمعايير تصنيع عالية لضمان أداء يدوم لفترات طويلة</span
          >
        </div>
      </div>
      <div class="ss15-single-card ss15-card-invisible flex-row" id="ss15-card-1">
        <div class="ss15-back-card-div"></div>
        <img
          src="https://cdn.files.salla.network/products/1157822896/d14c67d7-5531-4b65-bd1e-86e7014c3bb9-original.webp"
          class="ss15-single-img"
        />
        <div class="ss15-card-txts-div" dir="rtl">
          <span class="ss15-single-card-title-span"> أداء احترافي </span>
          <span class="ss15-single-card-body-span">
            معدات مصممة لتحمل ظروف العمل الشاقة في الورش والمصانع و المشاريع</span
          >
        </div>
      </div>
      <div class="ss15-single-card ss15-card-invisible flex-row" id="ss15-card-0">
        <div class="ss15-back-card-div"></div>
        <img
          src="https://cdn.files.salla.network/products/1157822896/197e125c-8078-4fc2-b85f-eaa63c290871-original.webp"
          class="ss15-single-img"
        />
        <div class="ss15-card-txts-div" dir="rtl">
          <span class="ss15-single-card-title-span"> تشكيلة متكاملة </span>
          <span class="ss15-single-card-body-span">
            مجموعة واسعة من الأدوات الكهربائية، معدات الحدائق، المولدات، الكومبريسورات والمزيد</span
          >
        </div>
      </div>
    </div>
    <div class="ss15-points-div flex-row">
      <div class="ss15-single-point-div ss15-active-single-point-div" id="ss15-p-0"></div>
      <div class="ss15-single-point-div" id="ss15-p-1"></div>
      <div class="ss15-single-point-div" id="ss15-p-2"></div>
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
  methods: {
    ss15WatchWidth() {
      const ss15CardsDivs = document.querySelectorAll(".ss15-single-card");
      const mq = window.matchMedia("(max-width: 1100px)");
      var ss15ActiveVl = 0;
      var ss15Inerval;
      const ss15StopshvlsFun = function () {
        clearInterval(ss15Inerval);
      };
      const ss15RunshvlsFun = function () {
        ss15Inerval = setInterval(() => {
          if (ss15ActiveVl < 2) ss15ActiveVl++;
          else ss15ActiveVl = 0;
          ss15CardsDivs.forEach((valDiv) => {
            if (valDiv.id !== `ss15-card-${ss15ActiveVl}`) {
              valDiv.classList.add("ss15-hide-val-div");
            } else {
              valDiv.classList.remove("ss15-hide-val-div");
            }
            document.querySelectorAll(".ss15-single-point-div").forEach((el) => {
              el.id === `ss15-p-${ss15ActiveVl}`
                ? el.classList.add("ss15-active-single-point-div")
                : el.classList.remove("ss15-active-single-point-div");
            });
          });
        }, 5000);
      };
      const ss15handleMediaChange = function (e) {
        if (mq.matches) {
          ss15CardsDivs.forEach((valDiv) => {
            if (valDiv.id !== "ss15-card-0") valDiv.classList.add("ss15-hide-val-div");
          });
          ss15RunshvlsFun();
          document.querySelector(".ss15-points-div").classList.remove("ss15-hide-val-div");
        } else {
          ss15CardsDivs.forEach((valDiv) => {
            valDiv.classList.remove("ss15-hide-val-div");
          });
          ss15StopshvlsFun();
          document.querySelector(".ss15-points-div").classList.add("ss15-hide-val-div");
        }
      };
      ss15handleMediaChange(mq);
      if (typeof mq.addEventListener === "function") {
        mq.addEventListener("change", ss15handleMediaChange);
      }
    },
  },
  mounted() {
    this.ss15WatchWidth();
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
.ss15-container-outer {
  width: 100%;
}
.ss15-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
}
.ss15-hide-val-div {
  display: none;
}
.ss15-single-card {
  position: relative;
  width: 400px;
  background-image: linear-gradient(to top right, #bbbbbb, #ffffff);
  padding: 8px;
  margin: 20px;
  box-shadow: 0 1px 2px rgb(154, 154, 154);
  transition:
    opacity 1s,
    transform 1.5s;
}
.ss15-back-card-div {
  position: absolute;
  top: -7px;
  left: -7px;
  height: 97%;
  width: 97%;
  background-image: linear-gradient(to top right, #cf5d5d, #cf5d5d);
  box-shadow: -1px -1px 1px rgb(193, 193, 193);
  z-index: -1;
}
.ss15-single-img {
  height: 100%;
  max-width: 100%;
  border-radius: 7px;
  box-shadow: 0 1px 2px rgb(95, 95, 95);
}
.ss15-card-txts-div {
  position: absolute;
  bottom: 40px;
  width: 87%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 10px 10px 10px;
  border: 1px solid rgb(135, 135, 135);
  border-radius: 7px;
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0.5px 1px rgb(103, 103, 103);
  font-family: "Almarai";
}
.ss15-single-card-title-span {
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 10px 0;
  background-image: linear-gradient(to top right, #cf5d5d, #cf5d5d);
  padding: 2px 15px 2px 15px;
  border-radius: 18px;
  border: 1px solid rgb(193, 193, 193);
}
.ss15-single-card-body-span {
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  filter: drop-shadow(0px 1px 1px #3d3d3d);
}
.ss15-points-div {
  margin-top: 10px;
}
.ss15-single-point-div {
  height: 12px;
  width: 12px;
  background-color: #e7e7e7;
  margin: 5px;
  border-radius: 100%;
  border: 1px solid #e1e1e1;
}
.ss15-active-single-point-div {
  background-color: #7d7d7d;
  border-color: #7d7d7d;
}
/* ---media---------- */
/* ---media---------- */
/* ---media---------- */
@media (min-width: 1000px) and (max-width: 1425px) {
  .ss15-single-card {
    width: 330px;
  }
  .ss15-single-card-title-span {
    font-size: 17px;
    padding: 2px 15px 2px 15px;
  }
  .ss15-single-card-body-span {
    font-size: 15px;
  }
}
@media (max-width: 1000px) {
  .ss15-single-card {
    width: 330px;
  }
  .ss15-single-card-title-span {
    font-size: 17px;
    padding: 2px 15px 2px 15px;
  }
  .ss15-single-card-body-span {
    font-size: 15px;
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
