<template>
  <div class="ss12-outer-container">
    <div class="ss12-container flex-row">
        <div class="ss12-back-shape-div2"></div>
        <div class="ss12-back-shape-div"></div>

        <!-- <img
        src="https://cdn.salla.sa/YgXdEO/ecbbae72-3f4a-4e00-8c07-2e76d7b309c5-777.27272727273x1000-CEF5ctgWxahgwIROZSG8roYcEjUCUXJrHrfX6kP9.png"
        alt=""
        class="ss12-rm-back-img"
        />
        <img
        src="https://cdn.salla.sa/YgXdEO/95b987d2-23f7-4d0b-a7cf-7715603371e1-726.76056338028x1000-HJFOjZfvlM4U3RfK2B4bjucwTXvr9vOTHsLSzlC7.png"
        alt=""
        class="ss12-rm-back-img-right"
        /> -->
        <!-- <img
        src="https://cdn.salla.sa/YgXdEO/SfSPJ70d3QaQ7iyZfvMdMSJDnV82vUlE2dw88QAN.png"
        alt=""
        class="ss12-rm-back-img"
        />
        <img
        src="https://cdn.salla.sa/YgXdEO/QYHqWYo09XXljSpDsEEJewgd3UGtRAvsjkSLOPMH.png"
        alt=""
        class="ss12-rm-back-img-right"
        /> -->
        <div class="ss12-contents flex-row">
            <div class="ss12-single-content" dir="rtl">
                <div class="ss12-products-contect-div flex-row">
                    <!-- <div class="ss12-single-pro-img-div flex-row">
                        <img src="C:\Users\danaglobPC1\Downloads\imgs forlast desinges\YT-09104.png" alt="" class="ss12-single-pro-img">
                        <div class="ss12-single-old-price-div flex-row">
                            <span class="ss12-old-price-span flex-row">1500</span>
                        </div>
                        <div class="ss12-single-old-price-div ss12-single-new-price-div flex-row">
                            <span class="ss12-old-price-span ss12-new-price-span flex-row">1200</span>
                        </div>
                    </div> -->
                </div>
                <div class="ss12-txts-div flex-column">
                    <!-- <span class="ss12-top-span flex-row">في رمضان</span> -->
                    <span class="ss12-top-span flex-row">لا تفوت عروض الاسعار </span>
                    <span class="ss12-bottom-span flex-row">خصومات تصل حتى 17% !</span>
                    <div class="rs-discount-div flex-row">
                        <span class="rs-10per-span"> %15 </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
        ss12Products:[
            {
                img:'https://cdn.files.salla.network/products/1157822896/b75be85a-699c-4467-8bb4-50e7a7f7a532_1000x750.webp',
                oldPrice:'51.75',
                newPrice:'43.99',
                link:'https://moedati.com/ar/سكين-قابل-للطي-بشفرة-سوداء-yt-76052/p1004224033'
            },
            {
                img:'https://cdn.files.salla.network/products/1157822896/5b172b8a-9f1d-45ef-8c5b-92698ebf0722_828x899.webp',
                oldPrice:'2415',
                newPrice:'2052.75',
                link:'https://moedati.com/ar/ماكينة-تلميع-وتنظيف-الأرضيات-17-بوصة-1100-واط-bs-a003/p1861422924'
            },
            {
                img:'https://cdn.files.salla.network/products/1157822896/c876d767-c574-4dd7-b494-9358c8e1e69e_595x742.webp',
                oldPrice:'1782',
                newPrice:'1515',
                link:'https://moedati.com/ar/ماكينة-غسيل-ضغط-عالي-إنفرتر-140-بار-3000-واط-للاستخدام-المنزلي-والاحترافي-ies3-2hbies3-2hb/p152241594'
            },
            {
                img:'https://cdn.salla.sa/YgXdEO/ab2b998a-150a-4925-90d2-f3b0ed129e91-1000x733.24572930355-TruenqUHuYfwkjsOgdUop9albATbQhwPVeK3Yot5.png',
                oldPrice:'1840',
                newPrice:'1564',
                link:'https://moedati.com/ar/ضاغط-هواء-tx2065-100tx2065-100/p1107730822'
            },

        ],
        ss12ActivePro:0,
        ss12Inerv:{}
      //propreties
    };
  },
  methods: {
    ss12ShowActivePro(ss12ActiveIndex){
        document.querySelector('.ss12-products-contect-div').innerHTML = '';
        document.querySelector('.ss12-products-contect-div').insertAdjacentHTML('afterbegin',
            `
            <div class="ss12-single-pro-img-div flex-column">
                <img src="${this.ss12Products[ss12ActiveIndex].img}" alt="" class="ss12-single-pro-img ss12-single-pro-img-scale">
                <div class="ss12-single-old-price-div flex-row">
                    <span class="ss12-old-price-span flex-row">${this.ss12Products[ss12ActiveIndex].newPrice}</span>
                </div>
                <div class="ss12-single-new-price-div flex-row">
                    <span class="ss12-old-price-span ss12-new-price-span flex-row">${this.ss12Products[ss12ActiveIndex].oldPrice}</span>
                </div>
                <div class="ss12-add-to-cart-div">
                    <button class="ss12-add-to-card-btn" 
                    onclick='window.location.href="${this.ss12Products[ss12ActiveIndex].link}";'
                    >
                         اضافة للسلة
                    </button>
                </div>
            </div>
            `
        );
        setTimeout(()=>{
            document.querySelector('.ss12-single-pro-img').classList.remove('ss12-single-pro-img-scale');
        },10)

    },
    ss12RunInerv(){
        this.ss12Inerv = setInterval(()=>{
            if(this.ss12ActivePro < 3) ++this.ss12ActivePro;
            else this.ss12ActivePro = 0;
            this.ss12ShowActivePro(this.ss12ActivePro);  
        },4000);
    }
  },
  mounted() {
    this.ss12ShowActivePro(0);
    this.ss12RunInerv();
  },
};
</script>
<style>
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
.ss12-outer-container{
    height: 450px;
    width: 100%;
}
.ss12-container{
    position: relative;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
    to left,
    rgb(255, 255, 255) 25%,
    rgb(240, 240, 240) 40%,
    rgb(255, 255, 255) 96%
  );
}
.ss12-rm-back-img{
    position: absolute;
    top: 0;
    left: 0;
    height: 250px;
}
.ss12-rm-back-img-right{
    position: absolute;
    top: 0;
    right: 0;
    height: 250px;
}
.ss12-back-shape-div{
    position: absolute;
    right: 0;
    height: 250px;
    width: 45%;
    background-color: #ffffff;
    border-radius: 120px 0 0 120px;
}
.ss12-back-shape-div2{
    position: absolute;
    right: 0;
    height: 210px;
    top: 25px;
    width: 46%;
    background-color: none;
    border-left: 1px solid rgb(230, 230, 230);
    border-top: 1px solid rgb(230, 230, 230);
    border-bottom: 1px solid rgb(230, 230, 230);
    border-radius: 120px 0 0 120px;
}
.ss12-contents{
    height: 100%;
    width: 100%;
    z-index: 1;
}
.ss12-single-content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.ss12-products-contect-div{
    height: 100%;
}
.ss12-single-pro-img-div{
    position: relative;
    /* background-color: #368185; */
    min-width: 273px;
    height: 100%;
}
.ss12-single-pro-img-scale{
    opacity: 0;
    transform:rotate(0deg) scale(0.3);
}
.ss12-single-pro-img{
    max-height: 350px;
    max-width: 100%;
    transition: transform 1s , opacity 1s;
}
.ss12-single-old-price-div{
    position: absolute;
    bottom: 10px;
    left: -15px;
    height: 30px;
    width: 90px;
    box-shadow: 0 1px 5px rgb(213, 213, 213);
    border-radius: 15px;
    border: 1px solid rgb(255, 255, 255);
}
.ss12-old-price-span{
    color: #747474;
    font-weight: bold;
    height: 30px;
    font-size: 16px;
    text-decoration-line: line-through;
    
}
.ss12-single-new-price-div{
    position: absolute;
    height: 34px;
    width: 100px;
    bottom: 50px;
    left: -85px;
    box-shadow: 0 1px 5px rgb(213, 213, 213);
    border-radius: 15px;
    border: 1px solid rgb(255, 255, 255);
    background-image: linear-gradient(
        to top left,
        rgb(143, 233, 69),
        rgb(48, 188, 43) 
    );
}
.ss12-new-price-span{
    color: white;
    font-size: 18px;
    text-decoration-line: none;
}
.ss12-txts-div{
    height: 100%;
    margin: 0 160px 0 0 ;
    font-family: "Almarai";
    color: #474747;
}
.ss12-top-span{
    height: 60px;
    font-size: 40px;
}
.ss12-bottom-span{
    height: 50px;
    font-size: 25px;
}
.ss12-add-to-cart-div{
    position: absolute;
    bottom: 95px;
    left: -150px;
}
.ss12-add-to-card-btn{
    height: 33px;
    width: 130px;
    margin: 20px 0 0 0 ;
    border: 1px solid white;
    border-radius: 12px;
    font-size: 15px;
    color: white;
    background-image: linear-gradient(to top, #e32c2c, #fdb0ad);
    box-shadow: 0 1px 5px rgb(213, 213, 213);
}
.ss12-add-to-card-btn:hover{
    background-image: linear-gradient(to top, #ffffff, #ffffff);
    border-color: #e32c2c;
    color: #e32c2c;
}
.rs-discount-div {
    height: 90px;
    width: 90px;
    background-image: linear-gradient(to bottom, #ec4c40, #ec6969);
    border-radius: 50% 50% 0 50%;
    margin: 30px 0 10px 0;
    border: 1px solid rgb(213, 213, 213);
}
.rs-10per-span {
    color: white;
    font-weight: bold;
    font-size: 35px;
    filter: drop-shadow(0px 1px 1px #555555);
}
@media (max-width: 860px){
.rs-discount-div {
    height: 70px;
    width: 70px;
}
.rs-10per-span {
    font-size: 25px;
}
}
@media (min-width: 860px) and (max-width: 1100px) {
.ss12-outer-container{
    height: 350px;
}
.ss12-single-pro-img{
    max-height: 250px;
}
.ss12-back-shape-div{
    height: 150px;
}
.ss12-back-shape-div2{
    top: 65px;
    height: 110px;
}
.ss12-rm-back-img{
    height: 150px;
}
.ss12-rm-back-img-right{
    height: 150px;
}
.ss12-single-old-price-div{
    height: 30px;
    width: 80px;
}
.ss12-old-price-span{
    height: 30px;
    font-size: 15px;
}
.ss12-single-new-price-div{
    height: 30px;
    width: 95px;
}
.ss12-new-price-span{
    font-size: 17px;
}
.ss12-add-to-card-btn{
    height: 31px;
    width: 110px;
    border-radius: 12px;
    font-size: 14px;
}
.ss12-top-span{
    height: 43px;
    font-size: 35px;
}
.ss12-bottom-span{
    height: 36px;
    font-size: 20px;
}
}
@media (max-width: 860px){
.ss12-outer-container{
    height: 75vh;
}
.ss12-back-shape-div{
    top: 190px;
    height: 150px;
}
.ss12-back-shape-div2{
    top: 150px;
    height: 110px;
    width: 60%;
}
.ss12-single-content{
    flex-direction: column;
}
.ss12-single-pro-img{
    max-height: 210px;
}
.ss12-rm-back-img{
    height: 170px;
}
.ss12-rm-back-img-right{
    display: none;
}
.ss12-txts-div{
    margin: 0 0 ;
}
.ss12-top-span{
    height: 40px;
    font-size: 25px;
}
.ss12-bottom-span{
    height: 35px;
    font-size: 20px;
    margin-top: 5px;
}
.ss12-single-old-price-div{
    height: 30px;
    width: 80px;
    bottom: 0px;
    right: -45px;
}
.ss12-single-new-price-div{
    height: 30px;
    width: 95px;
    bottom: 5px;
    right: 50px;
}
.ss12-add-to-cart-div{
    position: absolute;
    bottom: 11px;
    left: 15px;
}
.ss12-add-to-card-btn{
    height: 30px;
    width: 100px;
    margin: 20px 0 0 0 ;
    border: 1px solid white;
    border-radius: 12px;
    font-size: 13px;
    color: white;
    background-image: linear-gradient(to top, #e32c2c, #fdb0ad);
    box-shadow: 0 1px 5px rgb(213, 213, 213);
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