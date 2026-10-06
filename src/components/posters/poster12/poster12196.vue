<template>
  <div class="back-img-div2 flex-column">
    <img src="./imgs/backimg.png" class="back-img" alt="">
    <div class="moedati-icon-div-outer">
    <div class="moedati-icon-div flex-column">
        <img class="moedati-img" src="C:\Users\danaglobPC1\Documents\dana-global\src\assets\brandsicons\moedati.png" alt="">
    </div>
    </div>
    <div class="txts-div flex-column" dir="rtl">
        <span class="title-span">
            معدات رفع قوية وثابتة
        </span>
        <!-- <span class="title-span1">
            هي سِــر نجاحك..
        </span> -->
        <span class="title-span2">
        جكات ورافعات وستاندات ، جاهزة للورش والصيانة
        </span>
        <!-- <span class="title-span3">
          عملية لإنجاز أسرع ونتيجة أدق
        </span> -->
    </div>
    <div class="main-imgs-product-div flex-row">
      <img class="single-main-img single-main-img-left" src="./imgs/YT-37492.png"></img>
      <img class="single-main-img single-main-img-center" src="./imgs/YT-37412.png"></img>
      <img class="single-main-img single-main-right" src="./imgs/YT-58966.png"></img>
    </div>
    <img src="./imgs/YT-2091-.png" alt="" class="single-abs-img">
    <img src="./imgs/YT-01234T.png" alt="" class="single-abs-img0">
    <img src="./imgs/YT-0191--.png" alt="" class="single-abs-img1">
    <img src="./imgs/966556399399.png" alt="" class="single-abs-img4">
    <img src="./imgs/16300.png" alt="" class="single-abs-img3">
    <img src="./imgs/5ab.png" alt="" class="single-abs-img2">
    <img src="./imgs/YT-828073.png" alt="" class="single-abs-img5">

    <div class="deleveryicon-taby-outer">
      <div class="deleveryicon-taby flex-row">
        <img src="C:\Users\danaglobPC1\Documents\dana-global\src\components\home2\components\weeklycontent\imgs\deliveryicon.png" alt="" class="delevery-img">
        <img src="https://cdn.salla.network/cdn-cgi/image/fit=scale-down,width=70,height=70,onerror=redirect,format=auto/images/sbc.png?v=2.0.5" alt="" class="mothoq-img">
        <img src="C:\Users\danaglobPC1\Documents\dana-global\src\components\home2\components\weeklycontent\imgs\Tabby-01.png" alt="" class="tabby-img">
        <img src="C:\Users\danaglobPC1\Documents\dana-global\src\components\home2\components\weeklycontent\imgs\card.png" alt="" class="card-img">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      desin1txts:['لان معداتــــك',' هي سِــر نجاحك..','اختار الأدوات الصح وخلك دااايمًا جاهز'],
      desin2txts:[' خزائن عدد احترافية','خزائن كبيرة تتحمل الشغل الثقيل','رتب أدواتك وخلك جاهز '],
      desin3txts:['أدوات يدوية عالية الجودة','قوة.. دقة… وجودة تتحمل الشغل','عملية لإنجاز أسرع ونتيجة أدق'],
      desin4txts:['أدوات بستنة وزراعة','تساعدك تشتغل بسهولة ونتيجة أجمل 🌱'],
      desin5txts:['معدات سلامة أساسية','للمواقع والورش… جودة تتحمل استخدام يومي'],
      desin6txts:['معدات كهربائية قوية','أداء عالي يساعدك تخلص شغلك بسرعة ودقة'],
      desin7txts:['أدوات إضاءة','كشافات ومصابيح عمل للورشة والموقع والبيت'],
      desin8txts:['معدات صيانة المركبات','عناصر اساسية.. تجهيز متكامل للورشة'],
      desin9txts:['ادوات هوائية للشغل الثقيل','أدوات هوائية عملية تعطيك قوة وتحكم أفضل'],
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
.back-img-div2{
    position: relative;
    height: 700px;
    width: 700px;
    /* height: 900px;
    width: 720px; */
    /* background-color: #368185; */
    /* height: 960px;
    width: 540px; */
    /* border: 1px solid; */
}
.back-img{
  position: absolute;
    height: 100%;
    width: 100%;
}
.moedati-icon-div-outer{
  position: absolute;
  top: 0;
  height: 40px;
  width: 120px;
  /* background-color: #2ffb18; */
}
.moedati-icon-div{
  height: 100%;
  width: 100%;
  background-color: #e42024;
  /* background-color: #ffffff; */
  justify-content: end;
  border-radius: 0 0 15px 15px;
  padding: 10px;
  box-shadow: 0 2px 5px rgb(116, 116, 116);
}
.moedati-img{
  max-width: 100%;
  border-radius: 3px;
}
.single-abs-img{
    position: absolute;
    left: 50px;
    top: 50px;
    height: 40px;
    filter: drop-shadow(0.66666px 0.66666px 0px #7c7c7c);
    transform: rotate(20deg) scale(1);
}
.single-abs-img0{
    position: absolute;
    left: 20px;
    top: 80px;
    height: 60px;
    filter: drop-shadow(0.66666px 0.66666px 0px #7c7c7c);
}
.single-abs-img1{
    position: absolute;
    left: 100px;
    top: 20px;
    height: 40px;
    filter: drop-shadow(0.66666px 0.66666px 0px #7c7c7c);
}
.single-abs-img2{
    position: absolute;
    bottom: 60px;
    right: 50px;
    height: 40px;
    transform: rotate(-20deg) scale(1);
    filter: drop-shadow(0.66666px 0.66666px 0px #7c7c7c);
}
.single-abs-img3{
    position: absolute;
    top: 220px;
    right: 130px;
    /* height: 70px; */
    width: 65px;
    transform: rotate(-20deg) scale(1);
    filter: drop-shadow(0.66666px 0.66666px 0px #7c7c7c);
}
.single-abs-img4{
    position: absolute;
    bottom: 15px;
    right: 60px;
    height: 35px;
    transform: rotate(-9deg) scale(1);
    filter: drop-shadow(0.66666px 0.66666px 0px #7c7c7c);
}
.single-abs-img5{
    position: absolute;
    bottom: 100px;
    right: 10px;
    height: 45px;
    transform: rotate(-9deg) scale(1);
    filter: drop-shadow(0.66666px 0.66666px 0px #7c7c7c);
}
.txts-div{
    /* position: absolute; */
font-family: "Playpen Sans Arabic", cursive;
z-index: 1;
}
.title-span{
    font-size: 37px;
    /* font-size: 50px; */
    font-weight: bold;
    color: #373737;
}
.title-span1{
    font-size: 30px;
    font-weight: bold;
    color: #373737;
}
.title-span2{
    font-size: 24px;
    margin-top: 20px;
    /* font-weight: bold; */
    color: #373737;
}
.title-span3{
    font-size: 24px;
    margin-top: 10px;
    /* font-weight: bold; */
    color: #373737;
}
.main-imgs-product-div{
  width:80%;
  /* border: 1px solid; */
  margin-top: 30px;
  /* justify-content: space-evenly; */
  transform: translateY(50px);
  z-index: 1;
}
.single-main-img{
  /* height: 160px; */
  margin: 0 10px 0 10px;
  background-color: #eaeaea;
  border-radius: 10px;
  /* border: 2px solid #0f70a8; */
  padding: 10px;
  box-shadow: 0 3px 4px rgb(213, 213, 213);
}
.single-main-right{
  width: 150px;
  transform: rotate(9deg) scale(1) translateY(10px) translateX(10px);
}
.single-main-img-left{
  width: 150px;
  transform: rotate(-6deg) scale(1) translateY(-7px) translateX(-7px);
}
.single-main-img-center{
  height: 170px;
  /* height: 160px; */
   transform: rotate(-1deg) scale(1) translateY(4px);
}
.deleveryicon-taby-outer {
  position: absolute;
  bottom: 12px;
  /* right: 5px; */
  height: 30px;
  width: 160px;
  /* background-color: rgba(255, 0, 0, 0.9); */
  background-color: #eaeaea;
  backdrop-filter: blur(1px);
  box-shadow: 0 3px 7px rgb(197, 197, 197);
  border-radius: 10px;
}
.deleveryicon-taby {
  height: 100%;
  width: 100%;
  padding: 0 5px 0 5px;
  justify-content: space-between;
  border-radius: 10px;
}
.delevery-img {
  height: 18px;
  filter: drop-shadow(1px 1px 1px #7f7f7f);
}
.tabby-img {
  height: 18px;
  filter: drop-shadow(1px 1px 1px #7f7f7f);
}
.card-img {
  height: 18px;
  max-width: 30px;
  filter: drop-shadow(1px 1px 1px #7f7f7f);
}
.mothoq-img {
  height: 18px;
  filter: drop-shadow(1px 1px 1px #7f7f7f);
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
.back-to-me{
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