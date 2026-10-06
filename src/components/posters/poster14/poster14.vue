<template>
  <div class="main-container flex-row">
    <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\poster14back.png" alt="" class="poster14-back-img">
    <div class="moedati-logo-div flex-row">
        <img src="C:\Users\danaglobPC1\Documents\dana-global\src\assets\brandsicons\moedati.png" alt="" class="moedati-icon-img">
    </div>
    <div class="moedat-link-div">
        <span>WWW.MOEDATI.COM</span>
    </div>
    <div class="trust-icons-div flex-row">
        <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\Tabby-01.png" alt="" class="trust-icon mothoq-img">
        <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\card.png" alt="" class="trust-icon mothoq-img">
        <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\deliveryicon.png" alt="" class="trust-icon mothoq-img">
        <img src="https://cdn.salla.network/cdn-cgi/image/fit=scale-down,width=70,height=70,onerror=redirect,format=auto/images/sbc.png?v=2.0.5" alt="" class="trust-icon mothoq-img">
    </div>
    <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\tabby-img.png" alt="" class="tabby-img">
    <div class="body-div flex-column">
        <span class="pro-title-span">مقص شجيرات لاسلكي</span>
        <span class="pro-title-eng-span">HEDGE TRIMMER</span>
        <!-- <div class="speci-divs flex-row">
            <div class="speci-div flex-column">
                <span class="spici-center-txt">بنزين</span>
            </div>
            <div class="speci-div flex-column">
                <span class="spici-top-txt">18</span>
                <span class="spici-bottom-txt">فولت</span>
            </div>
            <div class="speci-div flex-column">
                <span class="spici-top-txt">4000</span>
                <span class="spici-bottom-txt">دورة/دقيقة</span>
            </div>
        </div> -->
        <div id="piktogram_container"><img class="piktogram" src="https://pim.toya.pl/piktogramy/BATTERY/image-thumb__50817__Sklep_pikto/Li-Ion_18V.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/min-1/image-thumb__192555__Sklep_pikto/SCISSORS_1550_min-1.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/GARDEN/image-thumb__153410__Sklep_pikto/550_mm_SHEARS.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/GARDEN/image-thumb__153409__Sklep_pikto/BRANCH_16_mm_DIAMETER.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/BATTERY/image-thumb__50738__Sklep_pikto/2%2C0_Ah.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/BATTERY/image-thumb__50766__Sklep_pikto/BATTERY_CHARGING_1h.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/WORDS_DESCRIPTION/image-thumb__153412__Sklep_pikto/ROTATING_HANDLE_ENG.png&quot;"><img class="piktogram" src="https://pim.toya.pl/piktogramy/WORDS_DESCRIPTION/image-thumb__59056__Sklep_pikto/SOFT_GRIP_ENG.png&quot;"></div>
        <div class="pro-img-div flex-row">
            <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\YT-828333.png" alt="" class="pro-img">
        </div>
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
.main-container{
    position: relative;
    height: 900px;
    width: 720px;
    overflow: hidden;
    /* border: 1px solid; */
}
.poster14-back-img{
    position: absolute;
    height: 100%;
    width: 100%;
}
.moedati-logo-div{
    position: absolute;
    padding: 5px;
    top: 0;
    width: 170px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 0 0 11px 11px;
}
.moedati-icon-img{
    width: 140px
}
.moedat-link-div{
    position: absolute;
    bottom: 0;
    color: white;
    font-size: 16px;
    margin: 0 0 5px 0;
}
.trust-icons-div{
    position: absolute;
    right: 10px;
    bottom: 10px;
}
.trust-icon{
    height: 20px;
    margin: 0 5px 0 5px;
    filter: drop-shadow(1px 0.66px 0.222px #252525);
    /* filter: drop-shadow(1px 1px 1px #720000); */
}
.tabby-img{
    position: absolute;
    right: 0;
    bottom: 250px;
    height: 200px;
    transform: rotate(-40deg) scale(1);
    filter: drop-shadow(1px 1px 1px #720000);
}
.body-div{
    position: absolute;
    height: 100%;
    width: 100%;
    /* font-family: "Playpen Sans Arabic", cursive; */
    /* background-color: #368185; */
}
.pro-title-span{
    font-size: 60px;
    color: #ffffff;
    font-weight: bold;
}
.pro-title-eng-span{
    font-size: 40px;
    color: #ffffff;
    font-weight: bold;
}
.piktogram-container{
    width: 100%;
    height: 30px;
    margin: 15px 0 15px 0;
}
.piktogram{
    height: 40px;
    /* width: 30px; */
    margin: 5px;
}
.speci-divs{
    /* position: relative; */
    width: 60%;
    justify-content: space-evenly;
    margin: 15px 0 15px 0;
    /* background-color: #368185; */
}
.speci-div{
    position: relative;
    height: 60px;
    width: 60px;
    border-radius: 5px;
    background-color: rgba(247, 247, 247,1);
    color: #be0000;
}
.spici-center-txt{
    position: absolute;
    font-size: 23px;
    font-weight: bold;
}
.spici-top-txt{
    position: absolute;
    top: 0px;
    font-weight: bold;
    font-size: 26px;
}
.spici-bottom-txt{
    position: absolute;
    bottom: 5px;
    font-size: 11px;
    font-weight: bold;
}
.pro-img-div{
    padding: 10px;
    /* border: 1px solid; */
    /* background-color: rgba(247, 247, 247,1); */
    margin: 15px 0 10px;
    border-radius: 12px;
}
.pro-img{
    height: 300px;
    filter: drop-shadow(1px 2px 1px #ffffff);
    /* filter: drop-shadow(1px 1px 1px #720000); */
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
