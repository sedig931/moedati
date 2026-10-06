<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="ss10-container flex-row ss3-mObserve">
    <div class="ss10-body-div" dir="rtl">
      <div class="ss10-backshpe-div"></div>
      <div class="ss10-backshpe-div ss10-backshpe2-div"></div>
        <div class="ss10-txts-div ss10-gifts-txts-div flex-column">
          <div class="ss10-single-txts-div flex-row">
            <span class="ss10-txts-span" dir="rtl">هدايـا و أكثر !</span>
          </div>
          <div class="ss10-gifts-mainimg-div flex-row">
            <img src="https://cdn.salla.sa/YgXdEO/0d919578-06f8-4f03-8da9-c519df1d9e88-1000x1000-U34AOfn5Idm7kWrG6naav1tfnwnPUw2I1mUN1qGZ.png" class="ss10-gifts-mainimg" alt="">
          </div>
        </div>
        <div class="ss10-gifts-img-div ss10-gifts-txts-div flex-row" dir="ltr">
          <div class="ss10-gifts-body-div flex-column">
            <div class="ss10-gifts-body-back-img-div flex-row">
              <img src="https://cdn.salla.sa/YgXdEO/482dbac2-0515-4da4-9bac-56e9c97e41c0-1000x1000-yPZCTICzuHXTzup9tQe9IWzTo3FiMdZoe28tYy8J.png" alt="" class="ss10-gifts-body-back-img">
            </div>
            <div class="ss10-single-gifts-body-div flex-column" id="ss10-gb-0">
            </div>
            <div class="ss10-gifts-body-dots flex-row">
              <div class="ss10-single-gifts-body-dot ss10-single-point-div ss10-active-single-point-div" id="ss10-dot-0"></div>
              <div class="ss10-single-gifts-body-dot ss10-single-point-div" id="ss10-dot-1"></div>
              <div class="ss10-single-gifts-body-dot ss10-single-point-div" id="ss10-dot-2"></div>
              <div class="ss10-single-gifts-body-dot ss10-single-point-div" id="ss10-dot-3"></div>
              <div class="ss10-single-gifts-body-dot ss10-single-point-div" id="ss10-dot-4"></div>
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
      ss10GiftsData:[
         {
          imgs:[
          'https://cdn.salla.sa/YgXdEO/57fa4635-e7d9-4e04-b4f9-316538890ee5-1000x1000-mnsjDxMNTvJcMUkqtcYJgsxpZMDVnjerT6NxJLNQ.jpg',
          'https://cdn.salla.sa/YgXdEO/19c3cdfb-2cda-4f31-b38f-06aa67bf8fed-1000x750-94PecXLRIeKxa7EeHqlxfmEc8Bu0mpxWvevLRVy9.jpg',
          'https://cdn.salla.sa/YgXdEO/d3ce4542-7984-4e41-820b-11e26ab8603e-998.00399201597x1000-U3vOlMM0MHkp8IdEAE6UlMGCPo8PaWnyt9B6TKWQ.jpg'
          ],
          txts:'احصل على زوج قفازات مجانا عند اتمام قيمة السلة الى 500 ريال فأعلى'
        },
            {
          imgs:[
          'https://cdn.salla.sa/YgXdEO/19c3cdfb-2cda-4f31-b38f-06aa67bf8fed-1000x750-94PecXLRIeKxa7EeHqlxfmEc8Bu0mpxWvevLRVy9.jpg',
          'https://cdn.salla.sa/YgXdEO/d3ce4542-7984-4e41-820b-11e26ab8603e-998.00399201597x1000-U3vOlMM0MHkp8IdEAE6UlMGCPo8PaWnyt9B6TKWQ.jpg',
          'https://cdn.salla.sa/YgXdEO/48454091-3f1c-4729-b10a-aabc6f53af21-1000x1000-9r9GOPibPR2NiQmgAYguJFN3NsxlIJN60d2VoQnx.png',
        ],
        txts:'احصل على مسحوق غسول الايادي مجانا عند اتمام قيمة السلة الى 2000 ريال فأعلى'
      },
      {
        imgs:[
          'https://cdn.salla.sa/YgXdEO/d3ce4542-7984-4e41-820b-11e26ab8603e-998.00399201597x1000-U3vOlMM0MHkp8IdEAE6UlMGCPo8PaWnyt9B6TKWQ.jpg',
          'https://cdn.salla.sa/YgXdEO/48454091-3f1c-4729-b10a-aabc6f53af21-1000x1000-9r9GOPibPR2NiQmgAYguJFN3NsxlIJN60d2VoQnx.png',
          'https://cdn.salla.sa/YgXdEO/57fa4635-e7d9-4e04-b4f9-316538890ee5-1000x1000-mnsjDxMNTvJcMUkqtcYJgsxpZMDVnjerT6NxJLNQ.jpg',
          ],
          txts:'احصل على قرص قطع معدني عدد 2 قطعة مجانا عند شرائك احد الصواريخ الكهربائية'
        },
        {
          imgs:[
          'https://cdn.salla.sa/YgXdEO/48454091-3f1c-4729-b10a-aabc6f53af21-1000x1000-9r9GOPibPR2NiQmgAYguJFN3NsxlIJN60d2VoQnx.png',
          'https://cdn.salla.sa/YgXdEO/57fa4635-e7d9-4e04-b4f9-316538890ee5-1000x1000-mnsjDxMNTvJcMUkqtcYJgsxpZMDVnjerT6NxJLNQ.jpg',
          'https://cdn.salla.sa/YgXdEO/6da1b6bf-fb91-4c40-b124-dc7d5c49d476-1000x750-Rz1KZdINlHrtPePUnFpOPCsXM1Xx8lAEiROmitXB.jpg',
          ],
          txts:'احصل على حقيبة ادوات مجانا عند اتمام قيمة السلة إلى مبلغ 1000 ريال فأعلى'
        },
        {
          imgs:[
          'https://cdn.salla.sa/YgXdEO/57fa4635-e7d9-4e04-b4f9-316538890ee5-1000x1000-mnsjDxMNTvJcMUkqtcYJgsxpZMDVnjerT6NxJLNQ.jpg',
          'https://cdn.salla.sa/YgXdEO/6da1b6bf-fb91-4c40-b124-dc7d5c49d476-1000x750-Rz1KZdINlHrtPePUnFpOPCsXM1Xx8lAEiROmitXB.jpg',
          'https://cdn.salla.sa/YgXdEO/19c3cdfb-2cda-4f31-b38f-06aa67bf8fed-1000x750-94PecXLRIeKxa7EeHqlxfmEc8Bu0mpxWvevLRVy9.jpg',
          ],
          txts:'احصل على مفك براغي لاسلكي مجانا عند اتمام قيمة السلة إلى مبلغ 3000 ريال فأعلى'
        }
      ],
      ss10ActiveGiftIndex:0,
      ss10Interv : {},
      //propreties
    };
  },
  methods: {
    ss10SetActiveGift(activeGift){
        this.ss10ActiveGiftIndex = activeGift;
           document.querySelectorAll('.ss10-single-gifts-body-dot').forEach(btn => {
            btn.id[btn.id.length-1] === this.ss10ActiveGiftIndex ?  btn.classList.add('ss10-active-single-point-div') : 
              btn.classList.remove('ss10-active-single-point-div');
           });
      document.querySelector('.ss10-single-gifts-body-div').innerHTML = '';
      document.querySelector('.ss10-single-gifts-body-div').insertAdjacentHTML('afterbegin',
        `
              <div class="ss10-gb-imgs-div flex-row">
                <div class="ss10-gb-single-img-div ss10-gb-single-img-l-div ss10-gb-single-img-trans flex-row">
                  <img src="${this.ss10GiftsData[this.ss10ActiveGiftIndex].imgs[0]}" alt="" class="ss10-gb-single-img">
                  <div class="ss10-gb-single-img-bulr-div"></div>
                </div>
                <div class="ss10-gb-single-img-div ss10-gb-single-img-c-div ss10-gb-single-img-trans flex-row">
                  <img src="${this.ss10GiftsData[this.ss10ActiveGiftIndex].imgs[1]}" alt="" class="ss10-gb-single-img">
                </div>
                <div class="ss10-gb-single-img-div ss10-gb-single-img-r-div ss10-gb-single-img-trans flex-row">
                  <img src="${this.ss10GiftsData[this.ss10ActiveGiftIndex].imgs[2]}" alt="" class="ss10-gb-single-img">
                  <div class="ss10-gb-single-img-bulr-div"></div>
                </div>
              </div>
              <div class="ss10-txts-body-div  flex-row">
                <p class="ss10-txts-body-pragf">
                  ${this.ss10GiftsData[this.ss10ActiveGiftIndex].txts}
                </p>
              </div>
        `
      );
      document.querySelectorAll('.ss10-gb-single-img-div').forEach((elem,i)=>{
        setTimeout(()=>{
          elem.classList.remove('ss10-gb-single-img-trans');
        },i*100)
      });
       
    },
    ss10AddBtnsEvent(){
      document.querySelectorAll('.ss10-single-gifts-body-dot').forEach(btn => {
        btn.addEventListener('click',(e)=>{
          this.ss10SetActiveGift(e.target.id[e.target.id.length - 1]);
        });
        btn.addEventListener('mouseenter',()=>{
          clearInterval(this.ss10Interv);
        });
        btn.addEventListener('mouseout',()=>{
          // this.ss10RunInterval();
        });
      })
    },
    ss10RunInterval(){
      this.ss10Interv = setInterval(()=>{
        this.ss10ActiveGiftIndex < 3 ? this.ss10ActiveGiftIndex++ : this.ss10ActiveGiftIndex = 0 ;
        this.ss10SetActiveGift(String(this.ss10ActiveGiftIndex));
      },5000);
    }
  },
  mounted() {
    this.ss10AddBtnsEvent();
    this.ss10SetActiveGift('0');
    this.ss10RunInterval();
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
.ss10Hide{
  display: none;
  opacity: 0;
}
.ss10-container{
  height:500px;
  width: 100%;
  margin: 20px 0 20px 0;
}
.ss10-body-div{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  width: 70%;
  /* max-width: 1300px; */
  overflow: hidden;
  background-image: linear-gradient(to right, #ffffff, #f0f0f0);
}
.ss10-backshpe-div{
  position: absolute;
  top: 10px;
  right: 0;
  height: 200px;
  width: 200px;
  border-left: 5px solid white;
  border-top: 5px solid white;
  border-bottom: 5px solid white;
  border-radius: 50% 0 0 50%;
}
.ss10-backshpe2-div{
  top: 55px;
  right: -20px;
}
.ss10-gifts-txts-div{
  position: relative;
  flex: 1;
  height: 100%;
  width: 100%;
  border-radius: inherit;
}
.ss10-gifts-body-div{
  position: relative;
  height: 80%;
  width: 80%;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.0);
  box-shadow: 0 3px 10px rgb(225, 225, 225);
  border-radius: 15px;
  z-index: 1;
}

.ss10-single-gifts-body-div{
  height: 100%;
  width: 100%;
}
.ss10-gifts-body-back-img-div{
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
}
.ss10-gifts-body-back-img{
  max-height: 100%;
  max-width: 100%;
}
.ss10-gb-imgs-div{
  flex: 1;
  height: 100%;
  width: 100%;
}
.ss10-gb-single-img-div{
  position: relative;
  height: 170px;
  width: 160px;
  margin: 5px;
  padding: 4px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgb(176, 176, 176);
  background-color: white;
  transition: transform 0.5s , opacity 0.1s;
}
.ss10-gb-single-img-bulr-div{
  position: absolute;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(0.8px);
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: inherit;
}

.ss10-gb-single-img-c-div{
  z-index: 1;
}
.ss10-gb-single-img-r-div{
  transform: translateX(-30px) translateY(23px);
}
.ss10-gb-single-img-l-div{
  transform: translateX(30px) translateY(14px);
}
.ss10-gb-single-img-trans{
  transform: translateX(0px) translateY(-20px);
  opacity: 0;
}
.ss10-gb-single-img{
  max-height: 100%;
  max-width: 100%;
  border-radius: inherit;
}
.ss10-txts-body-div{
  width: 80%;
  text-align: center;
  font-family: "Almarai";
  color: #474747;
  font-size: 20px;
  padding: 0 10px 0 10px;
  z-index: 1;
}
.ss10-txts-body-pragf{
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(0px);
  border-radius: 15px;
  padding: 0;
  margin: 0;
}
.ss10-gifts-body-dots{
  margin: 10px;
  z-index: 1;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 1PX 1px 5px rgb(189, 189, 189);
}
.ss10-single-point-div{
  height: 12px;
  width: 12px;
  background-color: #e7e7e7;
  margin: 5px;
  border-radius: 100%;
  border: 1px solid #e1e1e1;
  cursor: pointer;
}
.ss10-active-single-point-div{
  background-color: #ee4949;
  border-color: #ee4949;
}
.ss10-single-gifts-body-hide-div{
  opacity: 0;
}
.ss10-single-txts-div{
  flex: 0.3;
  width: 100%;
}
.ss10-txts-span{
  height: 45px;
  font-size: 28px;
  font-family: "Almarai";
  color: #ffffff;
  background-image: linear-gradient(to top, #e32c2c, #fdb0ad);
  border-radius: 10px;
  padding: 2px 20px 2px 20px;
}
.ss10-gifts-mainimg-div{
  flex: 0.5;
  width: 100%;
  max-height: 100%;
  margin-top: 20px;
}
.ss10-gifts-mainimg{
  max-width: 60%;
  filter: drop-shadow(1px 1px 3px #404040);
}
  @media (min-width : 500px) and (max-width:1400px){
  .ss10-body-div{
    width: 90%;
  }
  }
  @media (max-width:500px){
  .ss10-body-div{
    width: 96%;
  }
  }
@media (min-width : 500px) and (max-width:800px){
  .ss10-container{
    height: 100vh;
  }
  .ss10-body-div{
    flex-direction: column;
  }
.ss10-gifts-mainimg{
  height: 250px;
  width: 250px;
  max-width: none;
  }
  .ss10-txts-span{
    font-size: 27px;
    height: 43px;
    padding: 2px 22px 2px 22px;
  }
  .ss10-gifts-img-div{
    width: 550px;
  }
  .ss10-gb-single-img-div{
  height: 115px;
  width: 100px;
  margin: 5px;
  padding: 2px;
  }
  .ss10-txts-body-div{
  font-size: 18px;
  padding: 0 1px 0 1px;
  }
  .ss10-single-point-div{
    height: 11px;
    width: 11px;
    margin: 4px;
  }
  .ss10-backshpe-div{
  border-left: 3px solid white;
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  border-radius: 50% 0 0 50%;
}
}
@media (max-width:500px){
  .ss10-container{
    height: 90vh;
  }
  .ss10-body-div{
    flex-direction: column;
  }
.ss10-gifts-mainimg{
  height: 210px;
  width: 210px;
  max-width: none;
  }
  .ss10-txts-span{
    font-size: 23px;
    height: 37px;
   padding: 2px 20px 2px 20px;
  }
  .ss10-gifts-body-div{
    height: 90%;
    width: 90%;
  }
  .ss10-gb-single-img-div{
    height: 100px;
    width: 90px;
    margin: 5px;
    padding: 1px;
  }
  .ss10-txts-body-div{
  font-size: 15px;
   padding: 0 1px 0 1px;
  }
  .ss10-single-point-div{
    height: 9px;
    width: 9px;
    margin: 4px;
  }
  .ss10-backshpe-div{
  border-left: 3px solid white;
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  border-radius: 50% 0 0 50%;
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
