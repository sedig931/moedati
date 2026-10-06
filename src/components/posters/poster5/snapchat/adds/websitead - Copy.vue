<template>
<div class="container-div flex-row">
  <div class="poster5-webadd-container flex-row">
    <div class="background-image-div">
      <img class="backimg" src="./imgs/58633.png" alt="" />
    </div>
    <div class="background-shapes-div">
      <div class="single-sqr-div sqr1"></div>
      <div class="single-sqr-div sqr2"></div>
      <div class="single-sqr-div sqr3"></div>
      <div class="single-sqr-div sqr4"></div>
      <div class="single-sqr-div sqr5"></div>
      <div class="single-sqr-div sqr6"></div>
      <div class="single-sqr-div sqr7"></div>
      <div class="single-sqr-div sqr8"></div>
      <div class="single-sqr-div sqr9"></div>
      <div class="single-sqr-div sqr10"></div>
      <div class="single-sqr-div sqr11"></div>
      <div class="single-sqr-div sqr12"></div>
      <div class="single-sqr-div sqr13"></div>
      <div class="single-sqr-div sqr14"></div>
      <div class="single-sqr-div sqr15"></div>
      <div class="single-sqr-div sqr16"></div>
      <div class="all-sqrs-div flex-column">
        <div class="single-sqrs-div flex-row">
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr single-small-sqr-tran"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr "></div>
        </div>
        <div class="single-sqrs-div flex-row">
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr single-small-sqr-tran"></div>
          <div class="single-small-sqr"></div>
        </div>
        <div class="single-sqrs-div flex-row">
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr single-small-sqr-tran"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
        </div>
        <div class="single-sqrs-div flex-row">
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
        </div>
        <div class="single-sqrs-div flex-row">
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr single-small-sqr-tran"></div>
        </div>
        <div class="single-sqrs-div flex-row">
          <div class="single-small-sqr"></div>
        </div>
        <!-- <div class="top-beam-div flex-row"></div> -->
      </div>
      <!-- bottom small sqrs -->
      <div class="bottom-all-sqrs-div">
        <div class="single-sqrs-div flex-row">
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr single-small-sqr-tran"></div>
          <div class="single-small-sqr"></div>
        </div>
        <div class="single-sqrs-div flex-row">
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr single-small-sqr-tran"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
        </div>
        <div class="single-sqrs-div flex-row">
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr single-small-sqr-tran"></div>
          <div class="single-small-sqr"></div>
        </div>
        <div class="single-sqrs-div flex-row">
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
          <div class="single-small-sqr"></div>
        </div>
        <div class="single-sqrs-div flex-row">
          <div class="single-small-sqr single-small-sqr-tran"></div>
          <div class="single-small-sqr "></div>
        </div>
        <div class="single-sqrs-div flex-row">
          <div class="single-small-sqr"></div>
        </div>
        <!-- <div class="top-beam-div flex-row"></div> -->
      </div>
      <!-- <div class="overlay-div"></div> -->
    </div>
    <div class="body-div flex-column">
        <div class="top-imgs-div flex-row">
            <div class="top-single-img-div flex-row">
                   <img src="./imgs/58633.png" alt="" class="top-single-img">
            </div>
            <div class="top-single-img-div flex-row">
                 <img src="./imgs/2025-08-27.png" alt="" class="top-single-img">
            </div>
            <div class="top-single-img-div flex-row">
                  <img src="./imgs/81860.png" alt="" class="top-single-img">
            </div>
        </div>
        <div class="center-imgs-div flex-row">
            <div class="center-single-img-div flex-row left-single-img-div">
                <img src="./imgs/58690--.png" alt="" class="single-img">
            </div>
            <div class="center-single-img-div flex-row right-single-img-div">
                <img src="./imgs/YT-828075.png" alt="" class="single-img">
            </div>
        </div>

        <div class="texts-div flex-coumn" dir="rtl">
          <div class="name-div flex-row">
            <span class="name-span" dir="rtl">{{this.proName}}</span>
          </div>
          <div class="discription-div flex-row">
            <span class="discription-span" dir="rtl">
              {{this.proDisc}}
            </span>
          </div>
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
        <input v-model="this.proName" type="text">
      </div>
    <div class="lbl-input-div flex-row">
        <label for="">product discription</label>
        <textarea v-model="this.proDisc" type="text"/>
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
        proDisc:""
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
.poster5-webadd-container {
  position: relative;
  /* height: 600px; */
  /* width: 350px; */
  height: 760px;
  width: 430px;
  /* border: 1px solid black; */
}
.background-image-div {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: #555; */
}
.backimg {
  height: 100%;
  width: 100%;
}
.background-shapes-div {
  position: absolute;
  height: 100%;
  width: 100%;
  /* background-color: #1c8179; */
  /* background-color: rgba(19, 118, 113, 0.9); */
  background-image: linear-gradient(to bottom right, rgb(30, 125, 118), rgba(68, 153, 146,1));
  /* background-image: linear-gradient(to bottom right, rgba(26, 171, 158,0.95), rgba(68, 153, 146,0.95)); */
}
.single-sqr-div {
  position: absolute;
  /* background-color: rgba(48, 117, 114, 0.6); */
  background-color: rgba(48, 117, 114, 0.6);
}
.sqr1 {
  height: 50px;
  width: 50px;
  top: 90px;
  left: 130px;
  border-radius: 5px;
  /* background-color: #168477; */
}
.sqr2 {
  height: 40px;
  width: 40px;
  top: 40px;
  left: 10px;
  border-radius: 5px;
  /* background-color: #17686b; */
}
.sqr3 {
  top: 150px;
  left: 40px;
  height: 0px;
  width: 0px;
  border-top: 20px solid rgba(48, 117, 114, 0.6);
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  background-color: transparent;
  
}
.sqr4 {
  top: 250px;
  left: 15px;
  height: 0px;
  width: 0px;
  border-top: 10px solid rgba(48, 117, 114, 0.6);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  background-color: transparent;
}
.sqr5 {
  bottom: 150px;
  left: 80px;

  height: 0px;
  width: 0px;
  border-bottom: 26px solid rgba(48, 117, 114, 0.6);
  border-left: 26px solid transparent;
  border-right: 26px solid transparent;
  background-color: transparent;
 
}
.sqr6 {
  height: 15px;
  width: 15px;
  top: 350px;
  left: 90px;
  border-radius: 5px;
   /* background-color: #17686b; */
}
.sqr7 {
  height: 20px;
  width: 20px;
  top: 250px;
  left: 80px;
  border-radius: 5px;
  /* background-color: #168477; */
}
.sqr8 {
  height: 20px;
  width: 20px;
  top: 450px;
  left: 140px;
  border-radius: 2px;
  /* background-color: #168477; */
}
.sqr9 {
  height: 45px;
  width: 45px;
  top: 350px;
  left: 220px;
  border-radius: 5px;
  /* background-color: #168477; */
}
.sqr10 {
  height: 30px;
  width: 30px;
  top: 250px;
  left: 210px;
  border-radius: 5px;
   /* background-color: #17686b; */
}
.sqr11 {
  height: 20px;
  width: 20px;
  bottom: 80px;
  right: 40px;
  /* background-color: #168477; */
}
.sqr12 {
  height: 20px;
  width: 20px;
  bottom: 150px;
  right: 80px;
  border-radius: 5px;
   /* background-color: #17686b; */
}
.sqr13 {
  height: 20px;
  width: 20px;
  top: 180px;
  left: 200px;
  border-radius: 5px;
  /* background-color: #168477; */
}
.sqr14 {
  height: 20px;
  width: 20px;
  bottom: 250px;
  left: 150px;
  border-radius: 5px;
   /* background-color: #17686b; */
}
.sqr15 {
  height: 20px;
  width: 20px;
  top: 350px;
  left: 40px;
  border-radius: 5px;
  /* background-color: #168477; */
}

.all-sqrs-div {
  position: absolute;
  top: 0;
  right: 0;
  align-items: flex-end;
}
.single-small-sqr {
  height: 25px;
  width: 25px;
  margin: 2px;
  border-radius: 3px;
  background-color: rgba(48, 117, 114, 0.6);
}
.single-small-sqr-tran{
  background-color: transparent;
}
.top-beam-div {
  width: 3px;
  height: 200px;
  background-color: rgba(48, 117, 114, 0.6);
  margin: 2px;
  border-radius: 3px;
}
.bottom-all-sqrs-div {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
}
.overlay-div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(24, 154, 144, 0.5);
}

/* body */
.body-div {
  position: absolute;
  height: 100%;
  width: 100%;
  font-size: 30px;
  color: white;
  /* background-color: #555; */
}
.top-single-img-div{
    height: 75px;
    width: 75px;
    margin: 10px;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 9px;
    filter: drop-shadow(0px 3px 4px rgb(48, 48, 48));
}
.top-single-img{
    height: 100%;
    filter: drop-shadow(1px 0.05px 1px #848484);
}
/* center imgs */
.center-imgs-div{
    width: 100%;
    margin: 70px 0 160px 0;
    /* background-color: rgb(246, 178, 178); */
}
.center-single-img-div{
    width: 350px;
    border-radius: 10px;
    padding: 5px;   
}
.single-img{
    width: 70%;
    filter: drop-shadow(2px 4px 3px #181818);
}
.left-single-img-div{
    transform: translateY(-20px);
}
.right-single-img-div{
    width: 300px;
    transform: translateY(20px);
}

.texts-div{
    position: absolute;
    bottom: 40px;
    /* min-height: 100px; */
    width: 100%;
    /* background-color: #c9c9c9; */
    padding: 0 20px 10px 20px;
    color: #ffffff;
    font-family: "Almarai";
    /* transform: translateY(35px); */
}
.name-div{
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0 5px 0;
}
.discription-div{
    width: 90%;
    font-size: 14px;
}
.name-span,.discription-span{
    width: 100%;
    text-align: start;
    /* filter: drop-shadow(1px 1px 1px #212121); */
    white-space: pre-line;
}
/* form */
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
