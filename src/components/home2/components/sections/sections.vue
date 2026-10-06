<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sedig-body-div">
    <Section1 />
    <section12 />
    <!-- <RammadanSec/> -->
    <section15 />
    <Section2 />
    <Section3 />
    <section18 />
    <Section4 />
    <section16 />
    <section11 />
    <section13 />
    <Section6 />
    <Section5 />
    <section9 />
    <Section7 />
    <section14 />
    <section10 />
    <section17 />
    <Section8 />
  </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */
import Section1 from "./section1/section1.vue";
import Section2 from "./section2/section2.vue";
import Section3 from "./section3/section3.vue";
import Section4 from "./section4/section4.vue";
import Section5 from "./section5/section5.vue";
import Section6 from "./section6/section6.vue";
import Section7 from "./section7/section7.vue";
import Section8 from "./section8/section8.vue";
import Section9 from "./section9/section9.vue";
import Section10 from "./section10/section10.vue";
import Section11 from "./section11/section11.vue";
import Section12 from "./section12/section12.vue";
import Section13 from "./section13/section13.vue";
import Section14 from "./section14/section14.vue";
import Section15 from "./section15/section15.vue";
import Section16 from "./section16/section16.vue";
import Section17 from "./section17/section17.vue";
import Section18 from "./section18/section18.vue";
import RammadanSec from "./rammadanSec/rammadanSec.vue";
export default {
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9,
    Section10,
    Section11,
    Section12,
    Section13,
    Section14,
    Section15,
    Section16,
    Section17,
    Section18,
    RammadanSec,
  },
  data() {
    return {
      //propreties
    };
  },
  methods: {
    sedigCheckIfsectionInView() {
      const sectionObserver = new IntersectionObserver(
        function (entries, observer) {
          const [entry] = entries;

          if (!entry.isIntersecting) {
            if (entry.target.classList.contains("ss3-container")) {
              clearInterval(this.ss3Interv);
              return;
            }
            return;
          }
          if (entry.target.classList.contains("ss3-container")) {
            entry.target.classList.remove("ss3-container-hidden");
            // this.ss3RunEnterval();
            // observer.unobserve(entry.target);
          }
          if (entry.target.classList.contains("ss2-container")) {
            document
              .querySelector(".ss2-right-sqr-banar-div")
              .classList.remove("ss2-right-sqr-banar-div-hidden");
            document
              .querySelector(".ss2-left-sqr-banar-div")
              .classList.remove("ss2-left-sqr-banar-div-hidden");
            // entry.target.classList.remove('ss3-container-hidden');
            // this.ss3RunEnterval();
            observer.unobserve(entry.target);
          }
          if (entry.target.classList.contains("ss4-outer-container")) {
            console.log("make move for all section");
            document
              .querySelector(".ss4-outer-container")
              .classList.remove("ss4-outer-container-motion");
            // observer.unobserve(entry.target);
          }
          if (entry.target.classList.contains("ss11-container")) {
            setTimeout(() => {
              document
                .querySelector(".ss11-left-span-trans")
                .classList.remove("ss11-span-left-tran");
              document.querySelector(".ss11-back-img").classList.remove("ss11-back-img-trans");
            }, 500);
            setTimeout(() => {
              document
                .querySelector(".ss11-right-span-trans")
                .classList.remove("ss11-span-left-tran");
            }, 1000);
            observer.unobserve(entry.target);
          }
          // RAMADDAN--------------------
          if (entry.target.classList.contains("rs-main-container")) {
            setTimeout(() => {
              document.querySelector(".rs-main-container").classList.remove("rs-hidden");
            }, 100);
            observer.unobserve(entry.target);
          }
          // RAMADDAN--------------------
        }.bind(this),
        {
          root: null,
          threshold: 0.15,
        },
      );

      const sElmentNeedObs = document.querySelectorAll(".ss3-mObserve");
      sElmentNeedObs.forEach(function (elment) {
        sectionObserver.observe(elment);
      });
    },
  },
  mounted() {
    this.sedigCheckIfsectionInView();
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
.sedig-body-div {
  height: 100%;
  width: 100vw;
  font-family: "Almarai";
  /* height: 100%; */

  /* overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin; */
  /* justify-content: start; */
  /* align-items: none; */
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
}
</style>
