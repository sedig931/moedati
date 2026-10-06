<template>
<div class="poster8-container-div flex-row">

  <div class="poster8-product-add-container flex-column">
    <div class="backgrond-shape-container">
      <div class="circle-not-filled-div"></div>
      <div class="circle-filled-div">
        <div class="single-beams-div beam-position3 flex-row">
          <div class="single-beam-div"></div>
          <div class="single-beam-div2"></div>
          <div class="single-beam-div3"></div>
        </div>
      </div>
    </div>
    <div class="img-body-div flex-column">
      <div class="img-div flex-row">
        <div class="brand-ksa-frame-div flex-row">
          <div class="brand-frame-div flex-column">
            <div class="rects-div flex-row">
              <div class="single-rect-div" :class="`${this.brandName}-rect-color`"></div>
              <div class="single-rect-div-black"></div>
              <div class="single-rect-div" :class="`${this.brandName}-rect-color`"></div>
              <div class="single-rect-div-black"></div>
              <div class="single-rect-div" :class="`${this.brandName}-rect-color`"></div>
              <div class="single-rect-div-black"></div>
              <div class="single-rect-div" :class="`${this.brandName}-rect-color`"></div>
            </div>
            <div class="brands-div flex-column">
              <div class="brand-img-div">
                <img
                  class="brand-img"
                  src="C:\Users\danaglobPC1\Documents\dana-global\src\assets\brandsicons\yato.png"
                  alt=""
                />
              </div>
            </div>
            <div class="rects-div flex-row">
              <div class="single-rect-div" :class="`${this.brandName}-rect-color`"></div>
              <div class="single-rect-div-black"></div>
              <div class="single-rect-div" :class="`${this.brandName}-rect-color`"></div>
              <div class="single-rect-div-black"></div>
              <div class="single-rect-div" :class="`${this.brandName}-rect-color`"></div>
              <div class="single-rect-div-black"></div>
              <div class="single-rect-div" :class="`${this.brandName}-rect-color`"></div>
            </div>
          </div>
          <div class="ksa-brand-div" v-if="this.brandName === 'yato'">
            <span class="ksa-span">KSA</span>
          </div>
        </div>
        <div class="single-beams-div beam-position1 flex-row">
          <div class="single-beam-div"></div>
          <div class="single-beam-div2"></div>
          <div class="single-beam-div3"></div>
        </div>
        <div class="single-beams-div beam-position2 flex-row">
          <div class="single-beam-div"></div>
          <div class="single-beam-div2"></div>
          <div class="single-beam-div3"></div>
        </div>
        <img class="pro-img" src="../imgs/14102025/YT-82606BS.png" alt="" />
        <!-- <img src="../imgs/YT-80627.png" alt="" class="pro-img1" />
        <img src="../imgs/YT-45541.png" alt="" class="pro-img2" />
        <img src="../imgs/YT-71070.png" alt="" class="pro-img3" />
        <img src="../imgs/YT-74630.png" alt="" class="pro-img4" /> -->
      </div>
      <div class="body-div flex-column">
        <div class="name-div">
          <span class="name-span">{{this.proName}} </span>
        </div>
        <div class="discrip-div" dir="rtl">
          <!-- <div class="star-div flex-column">
            <div class="divs-star flex-row">
              <div class="single-div-star single-div-star1"></div>
              <div class="single-div-star single-div-star2"></div>
            </div>
            <div class="divs-star flex-row">
              <div class="single-div-star single-div-star3"></div>
              <div class="single-div-star single-div-star4"></div>
            </div>
          </div> -->
          <!-- <div class="star-div position2 flex-column">
            <div class="divs-star flex-row">
              <div class="single-div-star single-div-star1"></div>
              <div class="single-div-star single-div-star2"></div>
            </div>
            <div class="divs-star flex-row">
              <div class="single-div-star single-div-star3"></div>
              <div class="single-div-star single-div-star4"></div>
            </div>
          </div> -->
          <span class="discrip-span">
                   {{this.proDisc}}
          </span>
        </div>
        <div class="discounts-div flex-column">
          <!-- <div class="discount-circle-div flex-column">
            <span class="single-disc-txt">خصم</span>
            <span>%10</span>
          </div> -->
          <!-- <div class="discount-txt-div">
            <span>خصم 10% على كل المنتجات لفترة محدودة</span>
          </div> -->
        </div>
      </div>
      <!-- <div class="contacts-div flex-row">
        <div class="single-contact-div flex-row">
          <i class="bi bi-whatsapp flex-row contacts-element-filter ms-1 me-1"></i>
          <span class="contacts-element-filter">+966 556399399</span>
        </div>
        <div class="single-contact-div flex-row">
          <i class="bi bi-envelope-at-fill flex-row contacts-element-filter ms-1 me-1"></i>
          <span class="contacts-element-filter">{{ "Sc@danaglobal.com.sa" }}</span>
        </div>
        <div class="single-contact-div location-contacts flex-column">
          <div class="single-location-div flex-row">
            <span class="contacts-element-filter"> {{ " السعودية - الرياض - السلي " }} </span>
            <i class="bi bi-geo-alt-fill flex-row contacts-element-filter ms-1 me-1"></i>
          </div>
          <div class="single-location-div flex-row">
            <span class="contacts-element-filter">{{ "السعودية - الدمام - الخضرية" }}</span>
            <i class="bi bi-geo-alt-fill flex-row contacts-element-filter ms-1 me-1"></i>
          </div>
          <div class="single-location-div flex-row">
            <span class="contacts-element-filter">{{ "السعودية - الخبر - الخبر الشمالية" }}</span>
            <i class="bi bi-geo-alt-fill flex-row contacts-element-filter ms-1 me-1"></i>
          </div>
        </div>
      </div> -->
    </div>
  </div>
 <form class="form-div flex-column">
      <div class="brands-select-div flex-row">
        <div class="single-brand-select">
          <input
            class="brand-input"
            type="radio"
            id="yato"
            name="brandname"
            value="YATO"
            @click="this.changeBrandName"
          />
          <label for="yato">Yato</label><br />
        </div>
        <div class="single-brand-select">
          <input
            class="brand-input"
            type="radio"
            id="vorel"
            name="brandname"
            value="VOREL"
            @click="this.changeBrandName"
          />
          <label for="vorel">Vorel</label><br />
        </div>
        <div class="single-brand-select">
          <input
            class="brand-input"
            type="radio"
            id="sthor"
            name="brandname"
            value="STHOR"
            @click="this.changeBrandName"
          />
          <label for="sthor">Sthor</label>
        </div>
        <div class="single-brand-select">
          <input
            class="brand-input"
            type="radio"
            id="poweraction"
            name="brandname"
            value="POWERACTION"
            @click="this.changeBrandName"
          />
          <label for="poweraction">Power </label>
        </div>
      </div>
      <div class="lbl-input-div flex-row">
        <label for="">product name</label>
        <input v-model="this.proName" type="text" />
      </div>
      <div class="lbl-input-div flex-row">
        <label for="">product discription</label>
        <textarea v-model="this.proDisc" type="text" />
      </div>
      <div class="lbl-input-div flex-row">
        <label for="">product price</label>
        <input v-model="this.proPrice" type="text" />
      </div>
      <div class="lbl-input-div flex-row">
        <label for="">product SKU</label>
        <input v-model="this.proSKU" type="text" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      proName:'',
      proSKU:'',
      proPrice:'',
      proDisc:''
      //propreties
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.poster8-container-div{
  padding: 50px;
  flex-wrap: wrap;
}
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
.poster8-product-add-container {
  position: relative;
  height: 700px;
  width: 700px;
  /* border: 1px solid black; */
}
.backgrond-shape-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* background-color: rgb(246, 246, 246); */
  background-image: linear-gradient(to bottom right, rgb(247, 247, 247), rgb(255, 255, 255));
}
.circle-filled-div {
  position: absolute;
  bottom: 50px;
  left: -100px;
  height: 180px;
  width: 180px;
  border-radius: 0 50% 50% 0;
  background-image: linear-gradient(to bottom left, rgba(213, 242, 246, 1), rgba(64, 220, 244, 1));
}
.circle-not-filled-div {
  position: absolute;
  bottom: 60px;
  left: -100px;
  height: 180px;
  width: 180px;
  border-radius: 0 50% 50% 0;
  border: 1px solid rgb(151, 151, 151);
  /* background-image: linear-gradient(to bottom left, rgba(213, 242, 246, 0.7), rgba(64, 220, 244, 0.7)); */
}
.img-body-div {
  position: absolute;
  width: 100%;
  height: 100%;
}
.img-div {
  position: relative;
  height: 450px;
  width: 60%;
  /* background-color: rgba(43, 227, 255, 0.7); */
  /* background-color: rgba(179, 179, 179, 0.8); */
  background-image: linear-gradient(
    to bottom left,
    rgba(196, 244, 251, 0.7),
    rgba(34, 187, 210, 0.7)
  );
  border-radius: 0 0 30% 30%;
  /* border-radius:  10%; */
}
.single-beams-div {
  position: absolute;
  height: 100px;
  width: 100px;
  /* background-color: aqua; */
}
.single-beam-div {
  position: absolute;
  left: 40px;
  top: 0px;
  height: 100px;
  width: 10px;
  border-radius: 15px;
  /* background-color: #a7a7a7; */
  background-color: rgba(196, 244, 251, 0.7);
  transform: rotate(-25deg) scale(1);
}
.single-beam-div2 {
  position: absolute;
  left: 60px;
  top: 20px;
  height: 70px;
  width: 10px;
  border-radius: 15px;
  /* background-color: #fa8a8a; */
  background-color: rgba(196, 244, 251, 0.7);
  transform: rotate(-25deg) scale(1);
}
.single-beam-div3 {
  position: absolute;
  left: 26px;
  top: 20px;
  height: 70px;
  width: 10px;
  border-radius: 15px;
  background-color: rgba(196, 244, 251, 0.7);
  /* background-color: #fa8a8a; */
  transform: rotate(-25deg) scale(1);
}
.beam-position1 {
  top: 20px;
  left: 10px;
}
.beam-position2 {
  bottom: 50px;
  right: 20px;
}
.beam-position3 {
  top: 20px;
  right: 5px;
}
.pro-img {
  position: absolute;
  height: 80%;
  filter: drop-shadow(3px 4px 2px rgb(42, 138, 152));

  transform: translateY(30px);
}
.pro-img1 {
  position: absolute;
  height: 40px;
  bottom: 5px;
  right: -5px;
  transform: rotate(-25deg) scale(1);
}
.pro-img2 {
  position: absolute;
  height: 60px;
  bottom: -5px;
  left: 5px;
  transform: rotate(20deg) scale(1);
}
.pro-img3 {
  position: absolute;
  height: 40px;
  bottom: -30px;
  left: 55px;
  transform: rotate(20deg) scale(1);
}
.pro-img4 {
  position: absolute;
  height: 40px;
  bottom: -30px;
  right: 50px;
  transform: rotate(20deg) scale(1);
}
.body-div {
  flex: 1;
  width: 80%;
  /* font-family: "Beiruti"; */
  font-family: "Almarai";
  color: #3f3f3f;
  /* background-color: aqua; */
  /* align-items: flex-end; */
  /* justify-content: end; */
  /* transform: translateY(10px); */
}
.name-div{

  text-align: center;
}
.name-span {
  font-size: 45px;
}
.discrip-div {
  position: relative;
  margin: 5px 0 5px 0;
  color: #585858;
}
.discrip-span {
  font-size: 20px;
}
.star-div {
  position: absolute;
  left: -35px;
  top: -93px;
  height: 20px;
  width: 20px;
  background-image: linear-gradient(
    to bottom left,
    rgba(196, 244, 251, 0.7),
    rgba(34, 187, 210, 0.7)
  );
  /* transform: translateY(-15px) translateX(-3px); */
  /* border: 2px solid white; */
  /* padding: 0; */
  /* margin: 0; */
}
.divs-star {
  flex: 1;
  width: 100%;
}
.single-div-star {
  width: 100%;
  height: 100%;
  background-color: rgb(248, 248, 248);
}
.single-div-star1 {
  border-radius: 0 0 0 100%;
}
.single-div-star2 {
  border-radius: 0 0 100% 0;
}
.single-div-star3 {
  border-radius: 100% 0 0 0;
}
.single-div-star4 {
  border-radius: 0 100% 0 0;
}
.position2 {
  left: -8px;
  top: -73px;
  height: 15px;
  width: 15px;
}
.discount-circle-div {
  height: 80px;
  width: 80px;
  /* border: 1px solid; */
  border-radius: 50% 0 50% 50%;
  /* font-size: 20px; */
  /* overflow: hidden; */
  margin: 10px 0 5px 0;
  color: white;
  font-size: 35px;
  font-weight: bold;
  background-image: linear-gradient(
    to bottom left,
    rgba(196, 244, 251, 0.7),
    rgba(34, 187, 210, 0.7)
  );
}
.single-disc-txt {
  top: 0px;
  font-size: 15px;
  transform: translateY(3px);
}
.discount-txt-div {
  font-size: 13px;
}
.contacts-div {
  /* height: 30px; */
  width: 80%;
  font-size: 9px;
  /* color: #3f3f3f; */
  color: #ffffff;
  /* font-weight: bold; */
  /* background-color: #555; */
  justify-content: space-between;
  align-items: flex-end;
  /* font-family: "Beiruti"; */
  font-family: "Almarai";
}
.contacts-element-filter {
  filter: drop-shadow(0px 1px 1px rgba(61, 61, 61, 0.5));
}
.single-contact-div {
  /* height: 100%; */
  padding: 5px 10px 5px 10px;
  background-image: linear-gradient(
    to bottom left,
    rgba(196, 244, 251, 0.7),
    rgba(34, 187, 210, 0.7)
  );
  border-radius: 7px 7px 0 0;
}
.location-contacts {
  align-items: flex-end;
}
.brand-ksa-frame-div {
  position: absolute;
  bottom: -50px;
  width: 200px;
  /* transform: translateY(-30px); */
}
.main-brand-img {
  width: 50px;
  margin: 2px 0 2px;
}
.brand-img {
  /* height: 40px; */
  width: 100px;
}
.rects-div {
  width: 100%;
}
.single-rect-div {
  height: 0px;
  width: 0px;
  border-top: 7px solid rgb(240, 20, 20);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  background-color: transparent;
  /* background-color: #555; */
}
.yato-rect-color {
  border-top: 7px solid rgb(240, 20, 20);
}
.vorel-rect-color {
  border-top: 7px solid rgb(255, 194, 14);
}
.sthor-rect-color {
  border-top: 7px solid rgb(245, 130, 31);
}
.poweraction-rect-color {
  border-top: 7px solid rgb(51, 134, 118);
}
.single-rect-div-black {
  height: 0px;
  width: 0px;
  border-bottom: 7px solid rgb(22, 22, 22);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  background-color: transparent;
  /* background-color: #555; */
}
.form-div {
  margin: 20px;
  padding: 10px;
  border: 1px solid rgb(171, 171, 171);
  border-radius: 15px;
}
.brand-input {
  margin: 0 5px 0 0px;
  cursor: pointer;
}
.lbl-input-div {
  width: 400px;
  justify-content: space-between;
}
.brands-select-div {
  width: 100%;
  justify-content: space-evenly;
}
input[type="text"] {
  width: 190px;
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
textarea[type="text"] {
  width: 190px;
  max-height: 225px;
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
textarea[type="text"]:focus {
  border: 1px solid #555;
}
</style>
