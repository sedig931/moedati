<template>
  <div class="container-div flex-row">
    <div class="poster6-webadd-container flex-row">
      <div class="background-shapes-div flex-row">
        <img src="./imgs/YT-0902-.jpg" class="back-img" alt="" />
      </div>

      <div class="body-div flex-column">
        <div class="texts-div flex-coumn" dir="rtl">
          <div class="name-div flex-row">
            <span class="name-span" dir="rtl">{{ this.proName }}</span>
            <!-- <span class="name-span yato-span flex-row" dir="rtl">YATO</span> -->
            <img class="brand-img" src="../../../../../assets/brandsicons/yato.png" alt="" />
          </div>
          <div class="discription-div flex-row">
            <span class="discription-span" dir="rtl">
              {{ this.proDisc }}
            </span>
          </div>
        </div>
        <div class="imgs-div flex-column">
          <div class="single-row-imgs flex-row">
            <div class="single-img-div middle-single-img-div flex-row">
              <img src="./imgs/YT-828075.png" alt="" class="single-img" />
            </div>
          </div>
          <div class="more-imgs-div flex-row  flex-row">
            <div class="single-more-img-div  flex-row">
               <img src="./imgs/YT-828075-.png" alt="" class="more-single-img2" />
            </div>
            <div class="single-more-img-div  flex-row">
                <img src="./imgs/YT-828075--.png" alt="" class="more-single-img2" />
            </div>
            <div class="single-more-img-div  flex-row">
                <img src="./imgs/YT-828075---.png" alt="" class="more-single-img2" />
            </div>
            <div class="single-more-img-div flex-row">
                <img src="./imgs/YT-828075----.png" alt="" class="more-single-img2" />
            </div>
          </div>
        </div>
        <div class="visit-site-now-div flex-row">
          <i class="bi bi-cart3 flex-row"></i>
          <span class="visit-site-span">متوفر بالمتجر</span>
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
.poster6-webadd-container {
  position: relative;
  /* height: 600px; */
  /* width: 350px; */
  height: 700px;
  width: 700px;
  /* border: 1px solid black; */
}
.background-shapes-div {
  position: absolute;
  top: 0;
  left: 0;
  height: 80%;
  /* width: 100%; */
  /* background-color: #ccc; */
}
.back-img {
  width: 100%;
}
.body-div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(1px);
  padding: 0 0 15px 0 ;
  background-image: linear-gradient(to bottom right, rgb(255, 255, 255), rgba(218, 218, 218, 0.8));
}
.texts-div {
  /* position: absolute; */
  /* bottom: 40px; */
  /* min-height: 100px; */
  width: 100%;
  /* background-color: #b34848; */
  padding: 0 20px 10px 20px;
  color: #2c2c2c;
  font-family: "Almarai";
  /* transform: translateY(35px); */
}
.name-div {
  width: 100%;
  font-size: 19px;
  font-weight: bold;
  margin: 5px 0 5px 0;
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
  height: 23px;
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
  width: 100%;
}
.single-row-imgs {
  width: 100%;
}
.single-img-div {
  height: 300px;
  width: 90%;
  /* background-color: white; */
  margin: 10px;
  border-radius: 15px;
  padding: 15px 10px 15px 10px;
   /* box-shadow: 2px 2px 5px rgba(209, 209, 209, 0.5); */
  background-color: rgba(255, 255, 255, 0.6);
  /* backdrop-filter: blur(1px); */
  /* filter: drop-shadow(3px 3px 5px rgb(120, 120, 120)); */
}
.single-img {
  /* width: 100%; */
  height: 100%;
  filter: drop-shadow(2px 4px 3px rgb(85, 85, 85));
}
.single-img-width {
  width: 100%;
  /* height: inherit; */
}
.more-imgs-div{
  width: 100%;
  height: 60px;
  /* margin-top: 15px; */
  /* background-color: #555; */
}
.more-single-img2{
  width: 100%;
filter: drop-shadow(1px 1px 1px rgb(60, 60, 60));
}
.single-more-img-div{
  height: 100%;
  width: 60px;
  margin: 10px;
  border-radius: 7px;

  padding: 0px 1px 0px 1px;
  box-shadow: 2px 2px 5px rgb(193, 193, 193);
 background-color: rgba(255, 255, 255, 0.6);
   /* filter: drop-shadow(2px 2px 5px rgb(120, 120, 120)); */

}
/* .middle-single-img-div { */
  /* transform: translateY(20px); */
/* } */
.bottom-single-img-div {
  transform: translateY(40px);
}
.visit-site-now-div {
  height: 30px;
  width: 170px;
  font-family: "Almarai";
  color: rgb(255, 255, 255);
  background-color: rgb(248, 70, 70);
  transform: translateY(60px);
  font-size: 18px;
  border-radius: 20px;
  transform: translateY(30px);
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
  color: rgb(74, 74, 74);
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
