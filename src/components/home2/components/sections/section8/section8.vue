<template>
  <div class="ss8-container flex-row">
    <div class="ss8-single-val-div ss8-single-val-div-trans-2 flex-column" id="ss8-v-2">
        <div class="ss8-single-val-img-div flex-row">
            <img src="https://cdn.salla.sa/YgXdEO/yoa2Gg3zLII9TbFUNPfst2OVDWP6uuw1QtWOpMBy.jpg" alt="" class="ss8-single-val-img">
        </div>
        <div class="ss8-single-val-header-txt-div">
            <span class="ss8-single-val-header-txt-span">
                 خدمات ما بعد البيع
            </span>
        </div>
        <div class="ss8-single-val-body-txt-div flex-row">
            <span class="ss8-single-val-body-txt-span" dir="rtl">
                خدمات صيانة ودعم ما بعد البيع تضمن لك الاستفادة الكاملة من منتجاتك حتى بعد الشراء فريق متخصص جاهز لمساعدتك وحل أي مشكلة بسرعة، لتبقى تجربتك معنا أفضل دائمًا
            </span>
        </div>
    </div>
    <div class="ss8-single-val-div ss8-single-val-div-trans-1 flex-column" id="ss8-v-1">
        <div class="ss8-single-val-img-div  flex-row">
            <img src="https://cdn.salla.sa/YgXdEO/9Q36DAnRbAvrDPE5h9lFHfIt8sCQlxcmUlcbk6w7.jpg" alt="" class="ss8-single-val-img">
        </div>
        <div class="ss8-single-val-header-txt-div">
            <span class="ss8-single-val-header-txt-span">
                 توصيل سريع لجميع مناطق المملكة
            </span>
        </div>
        <div class="ss8-single-val-body-txt-div flex-row">
            <span class="ss8-single-val-body-txt-span" dir="rtl">
                توصيل سريع ومضمون إلى جميع مناطق المملكة بالتعاون مع شركات شحن موثوقة في السعودية، استلم طلباتك أينما كنت، بخيارات شحن مرنة تتناسب مع احتياجاتك
            </span>
        </div>
    </div>
    <div class="ss8-single-val-div ss8-single-val-div-trans-0 flex-column" id="ss8-v-0">
        <div class="ss8-single-val-img-div  flex-row">
            <img src="https://cdn.salla.sa/YgXdEO/5KHtMAOCW9o0yGyuldEEkIn2KImbWDvER9OUB4o1.jpg" alt="" class="ss8-single-val-img">
        </div>
        <div class="ss8-single-val-header-txt-div">
            <span class="ss8-single-val-header-txt-span">
                نظام دفع آمن ، وأسعار منافسة
            </span>
        </div>
        <div class="ss8-single-val-body-txt-div flex-row">
            <span class="ss8-single-val-body-txt-span" dir="rtl">
             استمتع بتجربة تسوّق مريحة مع نظام دفع آمن يحافظ على سرية معلوماتك ، معاملاتك المالية تتم عبر بروتوكولات حماية متقدمة تمنحك ثقة كاملة عند الشراء
            </span>
        </div>
    </div>
    <div class="ss8-points-div flex-row">
        <div class="ss8-single-point-div ss8-active-single-point-div" id="ss8-p-0">

        </div>
        <div class="ss8-single-point-div" id="ss8-p-1">

        </div>
        <div class="ss8-single-point-div" id="ss8-p-2">

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
  methods: {
    ss8WatchWidth(){
        const ss8ValDivs = document.querySelectorAll('.ss8-single-val-div');
        const mq = window.matchMedia('(max-width: 1200px)');
        var ss8ActiveVl = 0;
        var ss8Inerval ;
        const ss8StopshvlsFun = function(){
            clearInterval(ss8Inerval);
        };
        const ss8RunshvlsFun = function(){
            ss8Inerval = setInterval(()=>{
               if(ss8ActiveVl < 2)
                ss8ActiveVl++; 
            else ss8ActiveVl = 0;
            ss8ValDivs.forEach(valDiv => {
                if(valDiv.id !== `ss8-v-${ss8ActiveVl}`){
                    valDiv.classList.add('ss8-hide-val-div');
                }
                else {
                valDiv.classList.remove('ss8-hide-val-div');
                }
                document.querySelectorAll('.ss8-single-point-div').forEach(el=>{
                    el.id === `ss8-p-${ss8ActiveVl}` ? 
                    el.classList.add('ss8-active-single-point-div') : el.classList.remove('ss8-active-single-point-div');
                })
            });
            },3000);
        };
        const ss8handleMediaChange = function (e){
            if (mq.matches) {
                ss8ValDivs.forEach(valDiv => {
                    if(valDiv.id !== "ss8-v-0")
                    valDiv.classList.add('ss8-hide-val-div');
                });
                ss8RunshvlsFun();
                document.querySelector('.ss8-points-div').classList.remove('ss8-hide-val-div');
            } else {
                ss8ValDivs.forEach(valDiv => {
                    valDiv.classList.remove('ss8-hide-val-div');
                });
                ss8StopshvlsFun();
                document.querySelector('.ss8-points-div').classList.add('ss8-hide-val-div');
            }
        };
        ss8handleMediaChange(mq);
        if (typeof mq.addEventListener === 'function') {
            mq.addEventListener('change',ss8handleMediaChange);
        }
    }
  },
  mounted() {
    this.ss8WatchWidth();
  },
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
.ss8-container{
    margin: 20px;
    position: relative;
}
.ss8-single-val-div{
    height: 400px;
    max-width: 430px;
    min-width: 300px;
    margin: 10px;
    padding: 10px;
    justify-content: space-evenly;
    border: 1px solid #f5f5f5;
    background-image: linear-gradient(to top left, #ffffff, #f0f0f0);
    font-family: "Almarai";
    cursor: pointer;
}
.ss8-single-val-div:hover{
    background-image: linear-gradient(to top left, #f5f5f5, #ebebeb);
}
.ss8-single-val-div:hover .ss8-single-val-img{
    transform: scale(1.05) !important;
}
.ss8-hide-val-div{
    display: none;
}
.ss8-single-val-img-div{
    height:170px;
    width: 170px;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 0 3px 6px rgb(166, 166, 166);
}
.ss8-single-val-img{
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
}
.ss8-single-val-header-txt-span{
    font-size: 20px;
    font-weight: bold;
    color: #474747;
}
.ss8-single-val-body-txt-span{
    text-align: center;
    font-size: 16px;
    color: #6b6b6b;
}
.ss8-points-div{
    position: absolute;
    bottom: 15px;
}
.ss8-single-point-div{
    height: 12px;
    width: 12px;
    background-color: #e7e7e7;
    margin: 5px;
    border-radius: 100%;
    border: 1px solid #e1e1e1;
}
.ss8-active-single-point-div{
    background-color: #7d7d7d;
    border-color: #7d7d7d;
}
@media (max-width : 600px){
.ss8-single-val-img-div{
    height:150px;
    width: 150px;
}
.ss8-single-val-div{
    height: 400px;
    min-width: 100%;
}
.ss8-single-val-header-txt-span{
    font-size: 18px;
}
.ss8-single-val-body-txt-span{
    font-size: 15px;
}
.ss8-single-point-div{
    height: 11px;
    width: 11px;
    margin: 3px;
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