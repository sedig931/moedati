<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="ss11-container flex-row ss3-mObserve" dir="ltr">
    <div class="ss11-inner-container">
      <div class="ss11-lines-div"></div>
      <div class="ss11-lines-div ss11-lines-div-2"></div>
      <div class="ss11-txts-div flex-column" dir="rtl">
        <div class="ss11-inner-txts-div flex-column">
          <div class="s11-single-txt-div s11-single-txt-top-div flex-row">
            <span class="ss1-single-span ss11-left-span-trans ss11-span-left-tran">
              اقوى صناديق العدد اليدوية
            </span>
          </div>
          <div class="s11-single-txt-div flex-row">
            <span class="ss1-single-span ss11-right-span-trans ss11-span-left-tran">
              متكاملة.. جودة عالية.. احترافية
            </span>
          </div>
        </div>
        <div class="s11-single-btn-div flex-row">
          <button class="ss11-discover-btn"
          onclick='window.location.href="https://moedati.com/ar/صناديق-عدد-يدوية/c12337959";'
          >
            اكتشف المزيد
          </button>
        </div>
      </div>
      <div class="ss11-image-div flex-column">
        <img src="https://cdn.salla.sa/YgXdEO/cbe95493-2fe3-458d-87b7-65b5e3f2e6cb-1000x666.66666666667-VFOfiHCzui8HLMG90xA0ZcHb95YyyQPK521yWtqJ.png" alt="" class="ss11-back-img ss11-back-img-trans">
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
    ss11MakeTrans(){
      setTimeout(()=>{
        document.querySelector('.ss11-left-span-trans').classList.remove('ss11-span-left-tran');
      },1)
      setTimeout(()=>{
        document.querySelector('.ss11-right-span-trans').classList.remove('ss11-span-left-tran');
      },500)
    }
  },
  mounted() {
    // this.ss11MakeTrans();
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
.ss11-container{
  display:flex;
  width: 100%;
  height: 500px;
  border: 1px;
}
.ss11-inner-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  height: 100%;
  width: 70%;
  background-image: linear-gradient(to right, #ffffff, #f0f0f0);
}
.ss11-txts-div{
  flex: 1;
  height: 100%;
  font-size: 30px;
  font-family: "Almarai";
  color: #474747;
}
.ss11-image-div{
  flex: 1;
  height: 100%;
  justify-content: end;
}
.ss11-lines-div{
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  width: 300px;
  border-bottom:3px solid rgb(255, 255, 255);
  border-left: 3px solid rgb(255, 255, 255);
  border-radius: 0 0 0 50px;
  z-index: 0;
}
.ss11-lines-div-2{
  width: 450px;
  height: 25px;
}
.ss11-back-img{
  max-width: 100%;
  max-height: 100%;
  transition: transform 1s, opacity 1.5s;
  z-index: 1;
}
.ss11-back-img-trans{
  opacity: 0;
  transform: translateY(220px);
}
.ss11-inner-txts-div{
  width: 80%;
  justify-content: space-evenly;
}
.s11-single-txt-div{
  width: 100%;
  margin: 10px 0 0 0;
  justify-content: end;
}
.s11-single-txt-top-div{
  justify-content: start;
}
.ss1-single-span{
  height: 41px;
  transition: transform 1s, opacity 1.5s;
}
.ss11-span-left-tran{
  opacity: 0;
  transform: translateX(-530px);
}
.s11-single-btn-div{
  width: 80%;
  justify-content: center;
  margin-top: 30px;
}
.ss11-discover-btn{
  border: none;
  background-image: linear-gradient(to top, #e32c2c, #fdb0ad);
  border-radius: 10px;
  width: 300px;
  height: 40px;
  color: white;
  font-size: 23px;
  box-shadow: 0 3px 5px rgb(164, 164, 164);
}
.ss11-discover-btn:hover{
  background-image: none;
  background-color: white;
  border: 1px solid #e32c2c;
  color: #e32c2c;
  box-shadow: none;
}
@media (min-width : 700px) and (max-width : 1400px){
  .ss11-inner-container{
    width: 90%;
  }
}
@media (min-width : 950px) and (max-width : 1400px){
  .ss11-txts-div{
    font-size: 23px;
  }
  .ss11-container{
    height: 400px;
  }
  .ss11-discover-btn{
    width: 200px;
    height: 36px;
    font-size: 23px;
  }
}
@media (min-width : 700px) and (max-width : 950px){
  .ss11-container{
    height: 280px;
  }
  .ss11-txts-div{
    font-size: 22px;
  }
  .ss11-discover-btn{
    width: 180px;
    height: 35px;
    font-size: 20px;
  }
}
@media (min-width : 50px) and (max-width : 700px){
  .ss11-container{
    height: 90%;
    max-height: 550px;
  }
  .ss11-inner-container{
    flex-direction: column;
    width: 95%;
  }
  .ss11-lines-div{
    height: 30px;
    width: 180px;
    border-radius: 0 0 0 20px;
  }
  .ss11-lines-div-2{
    width: 250px;
    height: 15px;
  }
  .ss11-txts-div{
    width: 100%;
    font-size: 20px;
  }
  .ss11-discover-btn{
    width: 160px;
    height: 30px;
    font-size: 18px;
  }
}
@media (min-width : 630px) and (max-width : 700px){
  .ss11-back-img{
    max-width: 75%;
  }
}
@media (max-width : 1400px){
  .s11-single-txt-div{
  margin: 4px 0 0 0;
  }
  .ss1-single-span{
  height: 31px;
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
