<template>
<div class="container-div flex-row">
    <div class="poster4-insta-singlePost-container flex-column">
      <div class="shape-container flex-column">
        <div class="single-sqr-div sqr1"></div>
        <div class="single-sqr-div sqr2"></div>
        <div class="single-sqr-div sqr3"></div>
        <div class="single-sqr-div sqr4"></div>
        <div class="single-sqr-div sqr5"></div>
        <div class="single-sqr-div sqr6"></div>
        <div class="single-sqr-div sqr7"></div>
        <div class="single-sqr-div sqr8"></div>
        <div class="single-sqr-div sqr10"></div>
        <div class="single-sqr-div sqr11"></div>
        <div class="single-sqr-div sqr12"></div>
        <div class="single-sqr-div sqr13"></div>
        <div class="single-sqr-div sqr14"></div>
        <div class="single-sqr-div sqr15"></div>
        <div class="single-sqr-div sqr16"></div>
      </div>

      <!-- <div class="brands-div flex-column">
        <div class="brand-img-div ">
          <img class="brand-img" v-if="this.brandName === 'yato'" src="../../../../../assets/brandsicons/yato.png" alt="">
          <img class="brand-img" v-if="this.brandName === 'vorel'" src="../../../../../assets/brandsicons/vorel.png" alt="">
          <img class="brand-img" v-if="this.brandName === 'sthor'" src="../../../../../assets/brandsicons/sthor.png" alt="">
          <img class="brand-img" v-if="this.brandName === 'poweraction'" src="../../../../../assets/brandsicons/poweraction.png" alt="">
          <img class="brand-img" v-if="this.brandName === 'flo'" src="../../../../../assets/brandsicons/flo.png" alt="">
        </div>
        
        <div class="ksa-brand" v-if="this.brandName === 'yato'">
          <span class="ksa-span">KSA</span>
        </div>
      </div> -->

      <div class="body-container flex-column">
        
      <!-- <div class="nationalDay-div">
        <img class="nationalday-img" src="../../../../../assets/brandsicons/natDay.png" alt="">
      </div> -->
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
              <div class="single-rect-div-black"></div>
              <div class="single-rect-div" :class="`${this.brandName}-rect-color`"></div>
            </div>
            <div class="brands-div flex-column">
              <div class="brand-img-div ">
                <img class="brand-img" v-if="this.brandName === 'yato'" src="../../../../../assets/brandsicons/yato.png" alt="">
                <img class="brand-img" v-if="this.brandName === 'vorel'" src="../../../../../assets/brandsicons/vorel.png" alt="">
                <img class="brand-img" v-if="this.brandName === 'sthor'" src="../../../../../assets/brandsicons/sthor.png" alt="">
                <img class="brand-img" v-if="this.brandName === 'poweraction'" src="../../../../../assets/brandsicons/poweraction.png" alt="">
                <img class="brand-img" v-if="this.brandName === 'flo'" src="../../../../../assets/brandsicons/flo.png" alt="">
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
              <div class="single-rect-div-black"></div>
              <div class="single-rect-div" :class="`${this.brandName}-rect-color`"></div>
            </div>
          </div>
          <div class="ksa-brand-div" v-if="this.brandName === 'yato'">
            <span class="ksa-span">KSA</span>
          </div>
        </div>
        <div class="pro-img-div flex-row">
        <img src="../imgs/30102025/YT-09618.png" class="pro-img" alt="">
        <div class="borders-img-div-top"></div>
        <div class="borders-img-div-bottom"></div>
        <div class="product-price-div flex-row" v-if="this.proPrice">
            <img class="reial-img" src="../../../../../assets/reialIcon/reialIcon444444.png" alt="">
            <span class="product-price-span">
                {{this.proPrice}}
            </span>
        </div>
        <div class="note-div" v-if="this.proPrice">
            <span class="note-span">السعر غير شامل قيمة الضريبة المضافة</span>
        </div>
         <!-- <div class="img-info-div flex-row">
            <img src="https://pim.toya.pl/piktogramy/T-weight/image-thumb__895657__Sklep_pikto/2%2C5_t_360-508_mm.png;" alt="" class="single-info-img">
            <img src="https://pim.toya.pl/piktogramy/mm/image-thumb__105547__Sklep_pikto/RANGE_V_80_508_mm.png" alt="" class="single-info-img">
            <img src="https://pim.toya.pl/piktogramy/WORDS_DESCRIPTION/image-thumb__76671__Sklep_pikto/DUAL_PUMP_ENG.png&quot;" alt="" class="single-info-img">
            <img src="https://pim.toya.pl/piktogramy/WORDS_DESCRIPTION/image-thumb__59021__Sklep_pikto/QUICK_LIFT_ENG.png&quot;" alt="" class="single-info-img">
            <img src="https://pim.toya.pl/piktogramy/WORDS_DESCRIPTION/image-thumb__76681__Sklep_pikto/LOW_PROFILE_ENG.png&quot;" alt="" class="single-info-img">
          </div> -->
          <div id="piktogram_container"><img class="piktogram" src="https://pim.toya.pl/piktogramy/CALE_inch-mm_inch-cm/image-thumb__59493__Sklep_pikto/1_inch_25_mm.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/WORDS_DESCRIPTION/image-thumb__61153__Sklep_pikto/PINLESS_HAMMER_TYPE.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/MPa_l-min_l-h/image-thumb__52617__Sklep_pikto/1%2C0_MPa.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/MPa_l-min_l-h/image-thumb__52694__Sklep_pikto/450_l-min.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/Nm_nm/image-thumb__93329__Sklep_pikto/4800_Nm.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/min-1/image-thumb__65703__Sklep_pikto/5000_min-1.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/PICTURE_PARAMETER/image-thumb__70397__Sklep_pikto/COUPLE_03_G_1-2.png&quot;"></div>
        </div>
        <div class="pro-name-sku flex-column">
          <span class="pro-name-span" dir="rtl">{{this.proName}}</span>
          <span class="pro-disc-span" dir="rtl">{{this.proDisc}}</span>
          <span class="pro-sku-span">{{"Code : "+this.proSKU}}</span>
        </div>
      </div>

    </div>
    <form class="form-div flex-column">
    <div class="brands-select-div flex-row">
        <div class="single-brand-select">
            <input class="brand-input" type="radio" id="yato" name="brandname" value="YATO" @click="this.changeBrandName">
            <label  for="yato">Yato</label><br>
        </div>
        <div class="single-brand-select">
            <input class="brand-input" type="radio" id="vorel" name="brandname" value="VOREL" @click="this.changeBrandName">
            <label for="vorel">Vorel</label><br>
        </div>
        <div class="single-brand-select">
            <input class="brand-input" type="radio" id="sthor" name="brandname" value="STHOR" @click="this.changeBrandName">
            <label for="sthor">Sthor</label>
        </div>
        <div class="single-brand-select">
            <input class="brand-input" type="radio" id="poweraction" name="brandname" value="POWERACTION" @click="this.changeBrandName">
            <label for="poweraction">Power </label>
        </div>
    </div>
      <div class="lbl-input-div flex-row">
        <label for="">product name</label>
        <input v-model="this.proName" type="text" dir="rtl">
      </div>
      <div class="lbl-input-div flex-row">
        <label for="">product discription</label>
       <textarea  v-model="this.proDisc" type="text" dir="rtl"/>
      </div>
      <div class="lbl-input-div flex-row">
        <label for="">product price</label>
        <input v-model="this.proPrice" type="text">
      </div>
      <div class="lbl-input-div flex-row">
        <label for="">product SKU</label>
        <input v-model="this.proSKU" type="text">
      </div>
    </form>
</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
        proName:"",
        proPrice:"",
        proDisc:"",
        proSKU:"",
        brandName:"yato"
      //propreties
      //propreties
    };
  },
  methods: {
    changeBrandName(e){
        this.brandName = e.target.id;
    }
  },
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
.container-div{
  flex-wrap: wrap;
}
.poster4-insta-singlePost-container{
    position: relative;
    /* height: 800px;
    width: 430px; */
    width: 360px;   
    height: 640px;  
    /* width: 400px; */
    /* border: 1px solid rgb(171, 171, 171); */
    background-image: linear-gradient(to right, #ffffff, #f0f0f0);
    overflow: hidden;
}

.shape-container{
  position: relative;
  height: 100%;
  width: 100%;
  /* background-color: #ffffff; */
}
.single-sqr-div{
  position: absolute;
  border-radius: 7px;
  /* border: 2px solid #f0f0f0; */
   /* box-shadow: 0 3px 10px rgb(91, 91, 91); */
  background-color: #f0f0f0;
  /* background-color: #f0f0f0;
  filter: drop-shadow(0px 3px 5px rgb(209, 209, 209)); */
}
.sqr1{
  top: 100px;
  left: 50px;
  height: 60px;
  width: 60px;
}
.sqr2{
  top: 300px;
  left: 150px;
  height: 60px;
  width: 60px;
  background-color: #ececec;
}
.sqr3{
  top: 200px;
  left: 350px;
  height: 60px;
  width: 60px;
  background-color: #eeeeee;
}
.sqr4{
  top: 630px;
  left: 290px;
  height: 60px;
  width: 60px;
  background-color: #eeeeee;
}
.sqr5{
  top: 500px;
  left: 250px;
  height: 60px;
  width: 60px;
  background-color: #eeeeee;
}
.sqr6{
  top: 400px;
  left: 250px;
  height: 40px;
  width: 40px;
  background-color: #eeeeee;
}
.sqr7{
  top: 550px;
  left: 150px;
  height: 40px;
  width: 40px;
  background-color: #f0f0f0;
}
.sqr8{
  top: 200px;
  left: 150px;
  height: 40px;
  width: 40px;
  background-color: #eeeeee;
}
.sqr9{
  top: 300px;
  left: 50px;
  height: 40px;
  width: 40px;
  background-color: #eeeeee;
}
.sqr10{
  top: 90px;
  left: 250px;
  height: 40px;
  width: 40px;
  background-color: #eeeeee;
}
.sqr11{
  top: 10px;
  left: 150px;
  height: 40px;
  width: 40px;
  background-color: #f0f0f0;
}
.sqr12{
  top: 25px;
  left: 272px;
  height: 40px;
  width: 40px;
  background-color: #eaeaea;
}
.sqr13{
  top: 400px;
  left: 350px;
  height: 40px;
  width: 40px;
  background-color: #e8e8e8;
}
.sqr14{
  top: 240px;
  left: 50px;
  height: 90px;
  width:90px;
  background-color: #f2f2f2;
}
.sqr15{
  top: 400px;
  left: 30px;
  height: 30px;
  width: 30px;
  background-color: #eeeeee;
}
.sqr16{
  bottom: 40px;
  left: 50px;
  height: 90px;
  width:90px;
  background-color: #f2f2f2;
}
/* .brands-div{
  position: absolute;
  top: 30px;
  right: 20px;
}
.brand-img-div{
  background-color: #eeeeee;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  filter: drop-shadow(0px 3px 5px rgb(201, 201, 201));
}
.brand-img{
  width: 70px;
}
.ksa-span{
  font-weight: bold;
  font-family: "Almarai";
  font-size: 13px;
} */
/* .nationalDay-div{
  position: absolute;
  top: 10px;
  left: 70px;
} */
/* .nationalday-img{
  width: 180px;
} */
 .brand-img-div{
  margin: 2px 0 2px;
}
.brand-img{
  /* height: 40px; */
  width: 130px;
}
.ksa-brand-div{
  transform: translateY(9px) translateX(-7px);
}
.ksa-span{
  font-weight: bold;
  font-family: "Almarai";
  font-size: 14px;

}
.brand-ksa-frame-div{
  /* position: absolute;
  top: 20px;
  width: 200px; */
  transform: translateY(-30px);
}
.main-brand-img{
   width: 150px;
   margin: 2px 0 2px;
}
.rects-div{
  width: 100%;
}
.single-rect-div{
  height: 0px;
  width: 0px;
  border-top: 7px solid rgb(240, 20, 20);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  background-color: transparent;
  /* background-color: #555; */
}
.yato-rect-color{
  border-top: 7px solid rgb(240, 20, 20);
}
.vorel-rect-color{
  border-top: 7px solid rgb(255, 194, 14);
}
.sthor-rect-color{
  border-top: 7px solid rgb(245, 130, 31);
}
.poweraction-rect-color{
  border-top: 7px solid rgb(51, 134, 118);
}
.single-rect-div-black{
  height: 0px;
  width: 0px;
  border-bottom: 7px solid rgb(22, 22, 22);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  background-color: transparent;
  /* background-color: #555; */
}
/* ----------body-------------- */
/* ----------body-------------- */
.body-container{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* justify-content: space-evenly; */
    font-family: "Almarai";
    /* background-color: rgb(192, 186, 197);  */
    /* padding: 20px 0 0 0; */
    /* justify-content: end; */
}
.pro-img-div{
  position: relative;
  height: 300px;
  width: 300px;
  /* background-color: #ccc; */
  backdrop-filter: blur(0.5px);
  /* border: 1px solid #f0f0f0; */
  padding: 3px;
  margin-bottom: 30px;

}
.pro-img{
  max-width: 100%;
  max-height: 100%;
  filter: drop-shadow(3px 5px 3px rgb(123, 123, 123));
}
.borders-img-div-bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40%;
  width: 40%;
  border-left: 2px solid #e2e2e2;
  border-bottom: 2px solid #e2e2e2;
  border-radius:0 0 0 15px;
}
.borders-img-div-top{
  position: absolute;
  top: 0;
  right: 0;
  height: 40%;
  width: 40%;
  border-top: 2px solid #e2e2e2;
  border-right: 2px solid #e2e2e2;
  border-radius:0 15px 0 0;
}

.product-price-div{
    position: absolute;
    bottom: -5px;
    right: -30px;
    height: 30px;
    width: 90px;
    padding: 16px 2px 13px 2px ;
    /* border: 1px solid rgb(224, 224, 224); */
    border-radius: 7px;
    background-color: #f2f2f2;
    /* box-shadow: 0 3px 5px rgb(220, 220, 220); */
    /* filter: drop-shadow(0px 3px 5px rgb(197, 197, 197)); */
    filter: drop-shadow(0px 3px 5px rgba(232, 232, 232,0.9));
    /* flex-wrap: wrap; */
}
.product-price-span{
    color: #444444;
    font-weight: bold;
    font-size: 18px;
}
.reial-img{
    height: 20px;
}
.note-div{
    position: absolute;
    bottom: -25px;
    right: -30px;
    background-color: rgb(36, 163, 36);
    color: white;
    border-radius: 4px;
    padding: 1px 7px 1px 7px;
    font-size: 8px;
}

#piktogram_container{
  position: absolute;
  bottom: 7px;
  left: 7px;
  transform: translateY(45px);
}
.piktogram{
  height: 30px;
  margin: 2px;
}

.pro-name-sku{
  color: #444444;
  width: 80%;
}

.pro-name-span{
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
  white-space: pre-line;
  text-align: center;
}

.pro-disc-span{
    font-size: 16px;
    margin-bottom: 10px;
    white-space: pre-line;
    text-align: start;
    width: 100%;
}

.pro-sku-span{
  font-size: 18px;
}

.form-div{
  margin: 20px;
  padding: 10px;
  border: 1px solid rgb(171, 171, 171);
  border-radius: 15px;
}
.brand-input{
    margin: 0 5px 0 0px;
    cursor: pointer;
}
.lbl-input-div{
  width: 400px;
  justify-content: space-between;
}
.brands-select-div{
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