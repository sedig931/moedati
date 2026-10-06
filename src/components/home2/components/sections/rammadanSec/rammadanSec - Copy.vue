<template>
  <div class="rs-main-container rs-hidden flex-column ss3-mObserve">
    <img
      src="https://cdn.salla.sa/YgXdEO/ecbbae72-3f4a-4e00-8c07-2e76d7b309c5-777.27272727273x1000-CEF5ctgWxahgwIROZSG8roYcEjUCUXJrHrfX6kP9.png"
      alt=""
      class="rm-back-img"
    />
    <img
      src="https://cdn.salla.sa/YgXdEO/95b987d2-23f7-4d0b-a7cf-7715603371e1-726.76056338028x1000-HJFOjZfvlM4U3RfK2B4bjucwTXvr9vOTHsLSzlC7.png"
      alt=""
      class="rm-back-img-right"
    />
    <div class="rs-txs-div flex-column">
      <span class="rs-header-txt-span">مبارك عليكم الشهر </span>
      <span class="rs-body-txt-span"> 🎊 عروضنا مستمرة خلال شهر رمضان 🎊</span>
    </div>
    <div class="rs-discount-div flex-row">
      <span class="rs-10per-span"> %10 </span>
    </div>
    <div class="rs-txs-div flex-column">
      <span class="rs-bottom-txt-span">خصم 10% على كل المنتجات</span>
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
.rs-hidden {
  opacity: 0;
  transform: translateY(150px);
}
.rs-main-container {
  position: relative;
  height: 400px;
  width: 100%;
  margin: 20px 0 20px 0;
  background-image: linear-gradient(
    to left,
    rgb(255, 255, 255) 25%,
    rgb(240, 240, 240) 40%,
    rgb(255, 255, 255) 90%
  );
  transition: opacity 2s , transform 1s;
}
.rm-back-img {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}
.rm-back-img-right {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
}
.rs-txs-div {
  width: 100%;
  font-family: "Almarai";
  color: #474747;
}
.rs-header-txt-span {
  font-size: 50px;
  font-weight: bold;
  height: 80px;
}
.rs-body-txt-span {
  font-size: 25px;
  height: 40px;
}
.rs-discount-div {
  height: 90px;
  width: 90px;
  background-image: linear-gradient(to bottom, #ec4c40, #ec6969);
  border-radius: 50% 50% 0 50%;
  margin: 30px 0 10px 0;
}
.rs-10per-span {
  color: white;
  font-weight: bold;
  font-size: 35px;
  filter: drop-shadow(0px 1px 1px #b0b0b0);
}
.rs-bottom-txt-span {
  font-size: 15px;
}
@media (min-width: 700px) and (max-width: 900px) {
  .rm-back-img {
    height: 220px;
  }
  .rm-back-img-right {
    height: 120px;
  }
}
@media (max-width: 700px) {
  .rs-main-container {
    height: 500px;
  }
  .rm-back-img {
    height: 200px;
  }
  .rm-back-img-right {
    height: 90px;
  }
  .rs-header-txt-span {
    font-size: 35px;
    height: 60px;
  }
  .rs-body-txt-span {
    font-size: 17px;
    height: 30px;
  }
  .rs-discount-div {
    height: 70px;
    width: 70px;
  }
  .rs-10per-span {
    color: white;
    font-weight: bold;
    font-size: 25px;
  }
  .rs-bottom-txt-span {
    font-size: 13px;
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
