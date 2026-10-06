<template>
<div class="story-container-div flex-row">
  <div class="poster3-insta-post-container flex-column">
    <div class="shape-container flex-column">
        <div class="top-shape-container flex-column">
            <div class="top-bottom-rect top-rect">
                <div class="inner-top-rect"></div>
            </div>
            <div class="top-bottom-rect bottom-rect"></div> 
        </div>
        <!-- <div class="bottom-shape-container"></div> -->
    </div>
    <div class="body-container flex-column">
        <div class="product-img-div flex-row">
            <div class="product-price-div flex-row">
                <img class="reial-img" src="../reialIcon.png" alt="">
                <span class="product-price-span">
                   {{this.proPrice}}
                </span>
            </div>
            <img class="product-img" src="../imgs/1692025/YT-12661.png" alt="">
            <div class="note-div">
                <span class="note-span">السعر غير شامل قيمة الضريبة المضافة</span>
            </div>
            <div class="more-imgs-container flex-row">
                <!-- <div class="single-more-img-div flex-row">
                    <img src="../imgs/1592025/YT-08802--.jpg" alt="" class="more-img">
                </div> -->
                <!-- <div class="single-more-img-div flex-row">
                    <img src="../imgs/1592025/YT-08802---.jpg" alt="" class="more-img">
                </div> -->
                <!-- <div class="single-more-img-div flex-row">
                    <img src="../imgs/1592025/YT-08802.jpg" alt="" class="more-img">
                </div> -->
                <div class="single-more-img-div brand-img-div flex-row">
                    <img src="../../../../assets/brandsicons/yato.png" alt="" class="more-img brand-img yato-img" v-if="this.brandName === 'yato'">
                    <img src="../../../../assets/brandsicons/vorel.png" alt="" class="more-img brand-img" v-if="this.brandName === 'vorel'">
                    <img src="../../../../assets/brandsicons/sthor.png" alt="" class="more-img brand-img" v-if="this.brandName === 'sthor'">
                    <img src="../../../../assets/brandsicons/poweraction.png" alt="" class="more-img brand-img poweraction-img" v-if="this.brandName === 'poweraction'">
                </div>
            </div>
        </div>
        <div class="name-discription-div flex-column"> 
            <div class="name-div flex-row">
                <span class="name-span">{{this.proName}}</span>
            </div>
            <div class="discription-div flex-row">
                <span class="discription-span">
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
        <input v-model="this.proDisc" type="text">
      </div>
      <div class="lbl-input-div flex-row">
        <label for="">product price</label>
        <input v-model="this.proPrice" type="text">
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
.story-container-div{
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.poster3-insta-post-container{
    position: relative;
    height: 650px;
    width: 550px;
    /* border: 1px solid; */
    /* background-image: linear-gradient(to bottom,
     rgb(146, 146, 146),
     rgb(255, 255, 255)
     );  */
}
.shape-container{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.top-shape-container{
    flex: 1;
    width: 100%;
    background-color: rgb(57, 57, 57);
}
.top-bottom-rect{
    flex: 1;
    width: 100%;
}
.top-rect{
    background-color: rgb(245, 86, 86);
}
.inner-top-rect{
    height: 100%;
    width: 100%;
    border-radius: 0 0 0 70%;
    background-color: rgb(57, 57, 57);
}
.bottom-rect{
    background-color: rgb(245, 86, 86);
    border-radius: 0 35% 0 0;
}
.bottom-shape-container{
    flex: 0.05 ;
    width: 100%;
    background-image: linear-gradient(to bottom,
     rgb(245, 86, 86),
     rgb(251, 132, 132)
     );
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
    /* background-color: rebeccapurple; */
    /* padding: 20px 0 0 0; */
    justify-content: end;
}
.product-img-div{
    position: relative;
    width: 70%;
    height: 450px;
    background-color: rgb(250, 250, 250);
    border: 2px solid rgb(65, 65, 65);
    box-shadow: 0 3px 15px rgb(65, 65, 65);
    border-radius: 20px;
    padding: 2px;
}
.product-price-div{
    position: absolute;
    top: -40px;
    right: -30px;
    height: 90px;
    width: 90px;
    padding: 16px 2px 13px 2px ;
    border: 2px solid rgb(51, 51, 51);
    border-radius: 50%;
    box-shadow: 0 3px 15px rgb(46, 46, 46);
    background-color: rgb(245, 86, 86);
    flex-wrap: wrap;
}
.product-price-span{
    color: white;
    font-weight: bold;
    font-size: 18px;
}
.reial-img{
    height: 25px;
}
.note-div{
    position: absolute;
    top: -20px;
    right: 60px;
    background-color: rgb(36, 163, 36);
    color: white;
    border-radius: 7px;
    padding: 1px 10px 1px 10px;
    font-size: 10px;
}
.more-imgs-container{
    position: absolute;
    left: 7px;
    bottom: 7px;
    height: 30px;
}
.single-more-img-div{
    height: 100%;
    width: 30px;
    margin: 2px;
    background-color: white;
    border-radius: 5px;
    /* border: 1px solid rgb(159, 159, 159); */
    box-shadow: 0.5px 0.5px 2px rgb(46, 46, 46);
}
.more-img{
    /* width: 20px; */
    height: 22px;

}
.brand-img-div {
    /* box-shadow: none; */
    width: 100%;
    padding: 0 2px 0 2px;
}
.brand-img{
    height: 40px;
    width: 40px;
}
.yato-img{
    height: 10px;
    width: 40px;
}
.poweraction-img{
    width: 50px;
    height: 30px;
}
.product-img{
    width: 90%;
    max-height: 350px;
    filter: drop-shadow(10px 10px 5px #818181);
}
.name-discription-div{
    width: 80%;
    color: white;
    padding: 20px 0 20px 0 ;
    /* background-color: #555; */
    
}
.name-div{
    width: 100%;
    font-size: 30px;
    margin: 0 0 10px 0;
}
.discription-div{
    width: 90%;
    font-size: 18px;
}
.name-span,.discription-span{
    width: 100%;
    text-align: end;
    filter: drop-shadow(1px 1px 2px #3b3b3b);
    
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
</style>