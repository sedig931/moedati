<template>
  <div class="container-div flex-row">
    <div class="poster7-webadd-container flex-row">
         <div class="background-shapes-div flex-row">
        <img src="C:\Users\danaglobPC1\Documents\dana-global\src\components\posters\poster6\snap\adds\imgs\YT-0902-.jpg" class="back-img" alt="" />
      </div>
      <div class="body-div flex-column">
        <div class="imgs-div flex-row">
            <img src="../imgs/YT-55262.png" alt="" class="single-img-1">
            <img src="../imgs/YT-07190.png" alt="" class="single-img-2">
            <img src="../imgs/YT-80627---.png" alt="" class="single-img-3">
            <img src="../imgs/YT-83091.png" alt="" class="single-img-4">
            <img src="../imgs/58690--.png" alt="" class="single-img-5">
            <img src="../imgs/YT-45541.png" alt="" class="single-img-6">
            <img src="../imgs/YT-09004-.png" alt="" class="single-img-7">
            <img src="../imgs/YT-38911.png" alt="" class="single-img-8">
            <img src="../imgs/YT-23247.png" alt="" class="single-img-9">
        </div>
        <div class="bottom-body-div flex-column">
            <!-- <div class="bottom-background-shapes-div flex-column">
                <div class="good-radius-div">
                    <div class="color-good-radius-div"></div>
                </div>
            </div> -->
            <div class="texts-div flex-coumn" dir="rtl">
                <div class="name-div flex-row">
                    <span class="name-span" dir="rtl">{{ this.proName }}</span>
                    <img class="brand-img" src="../../../../../assets/brandsicons/yato.png" alt="" />
                </div>
                <div class="discription-div flex-row">
                    <span class="discription-span" dir="rtl">
                        {{ this.proDisc }}
                    </span>
                </div>
                <div class="visit-site-container flex-row">

                <div class="visit-site-now-div flex-row">
                    <span class="visit-site-span">المزيد بإنتظارك </span>
                    <i class="bi bi-cart3 flex-row"></i>
                </div>
                </div>
            </div>
        </div>
      </div>
    
      <div class="contacts-div flex-row">
        <div class="single-contact-div flex-row">
          <i class="bi bi-whatsapp flex-row ms-1 me-1"></i>
          <span>+966 556399399</span>
        </div>
        <div class="single-contact-div flex-row">
          <i class="bi bi-envelope-at-fill flex-row ms-1 me-1"></i>
          <span>{{"Sc@danaglobal.com.sa"}}</span>
        </div>
        <div class="location-contacts flex-column">
           <div class="single-contact-div flex-row">
            <span> {{" السعودية - الرياض - السلي "}} </span>
            <i class="bi bi-geo-alt-fill flex-row ms-1 me-1"></i>
            </div>
            <div class="single-contact-div flex-row">
            <span>{{"السعودية - الدمام - الخضرية"}}</span>
            <i class="bi bi-geo-alt-fill flex-row ms-1 me-1"></i>
            </div>
            <div class="single-contact-div flex-row">
            <span>{{"السعودية - الخبر - الخبر الشمالية"}}</span>
            <i class="bi bi-geo-alt-fill flex-row ms-1 me-1"></i>
            </div>
        </div>
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
      proName: "",
      proPrice: "",
      proDisc: "",
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
.container-div{
    flex-wrap: wrap;
}
.poster7-webadd-container {
  position: relative;
  /* height: 600px; */
  /* width: 350px; */
  height: 700px;
  width: 700px;
  /* border: 1px solid black; */
}
.bottom-background-shapes-div {
  position: absolute;
  bottom: 0;
  left: 0;
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: start;
  /* background-color: rgb(57, 57, 57);  */
  /* background-image: linear-gradient(to top , rgba(218, 218, 218, 0.8),rgb(255, 255, 255)); */


}
.good-radius-div{
    width: 100%;
    height: 15px;
    /* border-radius: 70% 70% 0 0; */
    /* background-color: rgb(57, 57, 57); */
    background-color: rgb(255, 255, 255);
}
.color-good-radius-div{
    width: 100%;
    height: 100%;
    border-radius: 100% 100% 0 0;
    background-color: rgb(255, 255, 255); 
    /* border-top: 2px solid rgb(224, 84, 84); */
}
.back-img {
  width: 90%;
}
.body-div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(1px);
  background-image: linear-gradient(to bottom right, rgb(255, 255, 255), rgba(218, 218, 218, 0.8));
}
.texts-div {
  position: relative;
  /* bottom: 40px; */
  /* min-height: 100px; */
  height: 100%;
  width: 100%;
  /* background-color: #b34848; */
  padding: 0 20px 10px 20px;
  color: #2c2c2c;
  font-family: "Almarai";
  /* transform: translateY(35px); */
}
.name-div {
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  margin: 5px 0 10px 0;
}
.yato-span {
  margin: 5px;
  background-color: rgb(248, 70, 70);
  color: rgb(255, 255, 255);
  font-weight: bold;
  padding: 2px 10px 2px 10px;
  border-radius: 10px;
}
.brand-img {
  height: 26px;
  /* filter: drop-shadow(1px 1px 1px #888888); */
}
.discription-div {
  width: 90%;
  font-size: 15px;
}
.name-span,
.discription-span {
  /* width: 100%; */
  text-align: start;
  /* filter: drop-shadow(1px 1px 1px #212121); */
  white-space: pre-line;
}

.imgs-div {
position: relative;
width: 70%;
height: 450px;
margin-bottom:60px ;
/* background-color: aqua; */
}
.single-img-1{
    position: absolute;
    left: -90px;
    bottom: -30px;
  height: 150px;
  filter: drop-shadow(1px 2px 1px rgb(22, 22, 22));
}
.single-img-2 {
    position: absolute;
    bottom: 0px;
  height: 200px;
  filter: drop-shadow(1px 2px 1px rgb(22, 22, 22));
}
.single-img-3 {
    position: absolute;
    bottom: -10px;
    left: 80px;
  width: 70px;
  filter: drop-shadow(1px 2px 1px rgb(22, 22, 22));
}
.single-img-4 {
    position: absolute;
    bottom: 30px;
    left: 115px;
  width: 70px;
  filter: drop-shadow(1px 2px 1px rgb(22, 22, 22));
}
.single-img-5 {
    position: absolute;
    bottom: 40px;
    right: 110px;
  width: 90px;
  filter: drop-shadow(1px 2px 1px rgb(22, 22, 22));
}

.single-img-6 {
    position: absolute;
    bottom: 80px;
    left: 7px;
  width: 90px;
  filter: drop-shadow(1px 2px 1px rgb(22, 22, 22));
}
.single-img-7 {
    position: absolute;
    bottom: -10px;
    right: -60px;
  height: 130px;
  filter: drop-shadow(1px 2px 1px rgb(22, 22, 22));
}
.single-img-8 {
    position: absolute;
    bottom: 90px;
    left: 95px;
  height: 120px;
  filter: drop-shadow(1px 2px 1px rgb(22, 22, 22));
}
.single-img-9 {
    position: absolute;
    bottom: -25px;
    right: 130px;
  height: 60px;
  filter: drop-shadow(1px 2px 1px rgb(22, 22, 22));
}

.bottom-body-div{
    position: relative;
    height: 100%;
    width: 100%;
}
.visit-site-container{
    width: 100%;
}
.visit-site-now-div {
/* position: absolute; */
  height: 30px;
  width: 170px;
  font-family: "Almarai";
  color: rgb(255, 255, 255);
  background-color: rgb(248, 70, 70);
  transform: translateY(50px);
  font-size: 18px;
  border-radius: 20px;
}
.visit-site-span {
  margin: 0 3px 0 3px;
}
.contacts-div {
  position: absolute;
  bottom: 2px;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-end;
  font-size: 10px;
  font-family: "Almarai";
  color: #2c2c2c;
}
.location-contacts{
  align-items: flex-end;
}
/* form */
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
