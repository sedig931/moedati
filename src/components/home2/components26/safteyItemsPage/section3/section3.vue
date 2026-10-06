<template>
  <div class="sss3-container" dir="rtl">
    <img src="https://cdn.salla.sa/YgXdEO/tss6dwT7CzGoP0PpCMOK6ac3mfRBz9z8vTFpRPsU.png" alt="" class="sss3-back-img">
    <div class="sss3-corner-div"></div>
    <div class="sss3-txts-div flex-column">
        <div class="sss3-single-txt-div flex-row">
            <div class="sss3-single-dots flex-row">
                <div class="sss3-small-dot"></div>
            </div>
            <p class="sss3-single-span flex-row">
                معدات السلامة من ياتو البولندية تجمع بين الجودة الأوروبية والاعتمادية العالية
            </p>
        </div>
        <div class="sss3-single-txt-div flex-row">
            <div class="sss3-single-dots flex-row">
                <div class="sss3-small-dot"></div>
            </div>
            <p class="sss3-single-span flex-row">
               مصنوعة من مواد قوية ومعايير تصنيع دقيقة لتتحمل الاستخدام الشاق
            </p>
        </div>
        <div class="sss3-single-txt-div flex-row">
            <div class="sss3-single-dots flex-row">
                <div class="sss3-small-dot"></div>
            </div>
            <p class="sss3-single-span flex-row">
                معتمدة وفق معايير السلامة الأوروبية
            </p>
        </div>
        <div class="sss3-single-txt-div flex-row">
            <div class="sss3-single-dots flex-row">
                <div class="sss3-small-dot"></div>
            </div>
            <p class="sss3-single-span flex-row">
                خيار احترافي موثوق للمقاولين والورش الباحثين عن الأمان والجودة
            </p>
        </div>
    </div>
    <div class="sss3-circils-container flex-row">
        <div class="sss3-circles flex-row">
            <div class="sss3-circle1 sss3-circle flex-row"
            onclick='window.location.href="https://moedati.com/ar/حذاء-سلامة-متوسط-الارتفاع-s3-مقاس-44-tolu-yt-80799/p1077707572";'
            >
                <img src="https://cdn.salla.sa/YgXdEO/Vi5krxAuHEIKBm0HMDzZX5aIHMmdMZUCslDSxZ9M.png" alt="" class="sss3-circle-img">
            </div>
            <div class="sss3-circle2 sss3-circle flex-row"
            onclick='window.location.href="https://moedati.com/ar/سماعات-أذن-34-ديسيبل-yato-ادوات-سلامة-yt-74630/p1676627153";'
            >
                <img src="https://cdn.salla.sa/YgXdEO/U6aom3ZUfB1K1hjXciKodg6xVknmF1bvYPFr5RXB.png" alt="" class="sss3-circle-img">
            </div>
            <div class="sss3-circle3 sss3-circle flex-row"
            onclick='window.location.href="https://moedati.com/ar/نظارات-واقية-مع-تهوية-غير-مباشرة-yato-ادوات-سلامة-yt-73831/p369241552";'
            >
                <img src="https://cdn.salla.sa/YgXdEO/kRtVExcrIkgET5brE9K795TwJYS7pGDjd2KGNbb8.png" alt="" class="sss3-circle-img">
            </div>
            <div class="sss3-circle-colors"></div>
            <div class="sss3-circle-colors2"></div>
        </div>
    </div>
    <!-- <div class="moedati-photo flex-column">
        <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\dana-logo.png" alt="" class="danaglobal">
        <div class="yat-torix-bison flex-row">
            <img src="C:\Users\danaglobPC1\Documents\dana-global\src\assets\brandsicons\yato.png" alt="" class="yato-img">
            <img src="C:\Users\danaglobPC1\Downloads\Nov2025\torix\torix.png" alt="" class="torix-img">
            <img src=C:\Users\danaglobPC1\Documents\dana-global\src\assets\brandsicons\moedati.png alt="" class="moedati-img">
            <img src="C:\Users\danaglobPC1\Downloads\Screenshot 2025-12-13 100501.png" alt="" class="bison-img">
        </div>
    </div> -->
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
.moedati-photo{
    height: 400px;
    width: 400px;
    background-image: linear-gradient(to bottom, #f63131, #f06644);
}
.bison-img{
    width: 80px;
    margin: 2px;
    border-radius: 7px;
    padding: 2px;
}
.danaglobal{
    width: 340px;
    background-color: #ffffff;
    border-radius: 14px;
    margin-bottom: 10px;
}
.yato-img{
    width: 75px;
    background-color: white;
    margin: 2px;
    border-radius: 4px;
    padding: 3px;
}
.moedati-img{
    width: 95px;
    margin: 2px;
    border-radius: 7px;
    padding: 3px;
}
.torix-img{
    width: 55px;
    height: 22px;
    margin: 2px;
    background-color: white;
    border-radius: 6px;
    padding: 2px;
}
.sss3-container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 80%;
    height: 300px;
    margin: 10px;
}
.sss3-back-img{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
}
.sss3-corner-div{
    position: absolute;
    height: 25%;
    width: 14%;
    bottom: 0;
    right: 0;
    border-right: 2px solid #fa5252;
    border-bottom: 2px solid #fa5252;
    border-radius: 0 0 3px 0;
}
.sss3-txts-div{
    flex: 1;
    height: 100%;
    font-family: "Almarai";
    align-items: flex-start;
    padding: 0 30px 0 30px;
    z-index: 1;
}
.sss3-single-dots{
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: #fa5252;
    margin: 5px;
}
.sss3-small-dot{
    height: 60%;
    width: 60%;
    border-radius: 50%;
    border: 1px solid white;
}
.sss3-single-span{
    font-size: 20px;
    margin: 0;
    padding: 0;
    color: #5c5a5a;
}
.sss3-circils-container{
    flex: 1;
    height: 100%;
}
.sss3-circles{
    position: relative;
}
.sss3-circle1{
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    box-shadow: 0 3px 5px rgb(216, 216, 216);
}
.sss3-circle2{
    position: absolute;
    top: -25px;
    right: -65px;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 3px 5px rgb(216, 216, 216);
    cursor: pointer;
    padding: 1px;
}
.sss3-circle3{
    position: absolute;
    left: -25px;
    bottom: -60px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 3px 5px rgb(216, 216, 216);
    cursor: pointer;
    padding: 7px;
}
.sss3-circle-img{
    max-height: 100%;
    max-width: 100%;
    transition: transform 0.5s;
}
.sss3-circle:hover .sss3-circle-img{
    transform: scale(1.05) !important;
}
.sss3-circle-colors{
    position: absolute;
    height: 20px;
    width: 20px;
    background-color: #0abd70;
    border-radius: 50%;
    left: -15px;
    top: 20px;
    box-shadow: 0 2px 3px rgb(216, 216, 216);
}
.sss3-circle-colors2{
    position: absolute;
    height: 12px;
    width: 12px;
    background-color: #fe3d3d;
    border-radius: 50%;
    bottom: -17px;
    right: 20px;
    box-shadow: 0 1px 3px rgb(172, 172, 172);
}
/* media query */
/* media query */
@media (max-width : 1000px){
    .sss3-container{
        width: 100%;
    }
}
@media (min-width : 850px) and (max-width : 1200px){
    .sss3-txts-div{
    flex: 1.6;
    }
  .sss3-single-span{
    font-size: 17px;
  }
}
@media (max-width : 850px){
    .sss3-txts-div{
        flex: 0.9;
        padding: 5px;
    }
    .sss3-single-span{
        font-size: 15px;
    }
    .sss3-container{
        flex-direction: column;
        height: 65vh;
    }
    .sss3-single-dots{
        height: 9px;
        width: 9px;
    }
    .sss3-circle1{
        height: 130px;
        width: 130px;
    }
    .sss3-circle-colors{
        height: 16px;
        width: 16px;
    }
    .sss3-circle-colors2{
        height: 10px;
        width: 10px;

    }
    .sss3-circils-container{
        align-items: flex-start;
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