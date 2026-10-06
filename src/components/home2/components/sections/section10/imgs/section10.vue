<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="ss10-container flex-row">
    <div class="ss10-body-div flex-row">
      <div class="ss10-backshpe-div">

      </div>
      <div class="ss10-backshpe-div ss10-backshpe2-div">

      </div>
        <div class="ss10-gifts-img-div ss10-gifts-txts-div flex-row">
          <div class="ss10-gifts-body-div flex-column">
            <div class="ss10-single-gifts-body-div flex-column" id="ss10-gb-0">
              <div class="ss10-gb-imgs-div flex-row">
                <div class="ss10-gb-single-img-div ss10-gb-single-img-l-div flex-row">
                  <img src="https://cdn.salla.sa/YgXdEO/2da1aa23-97cf-41e7-8581-85797efa6359-1000x750-nkMJOV2TtJr6oPsht7FBauL2IDjIFODwaNUQcUdX.jpg" alt="" class="ss10-gb-single-img">
                </div>
                <div class="ss10-gb-single-img-div ss10-gb-single-img-c-div flex-row">
                  <img src="https://cdn.salla.sa/YgXdEO/c82214f2-3e79-4e08-836d-2cfa331cfc81-1000x750-7FHBVwNIdA4SKHBlLumRhlnGHMiDWeJz02fD8KFu.jpg" alt="" class="ss10-gb-single-img">
                </div>
                <div class="ss10-gb-single-img-div ss10-gb-single-img-r-div flex-row">
                  <img src="https://cdn.salla.sa/YgXdEO/6777215d-daed-42bf-a3cf-5148009eb28a-1000x750-wxV7UnxfEPxiW890RG7oBHMvuDcn5qVOKKCXqWH7.jpg" alt="" class="ss10-gb-single-img">
                </div>
              </div>
              <div class="ss10-txts-body-div flex-row">
                <p>
                  احصل على زوج قفازات مجانا عند اتمام قيمة السلة الى 500 ريال فأعلى
                </p>
              </div>
            </div>
            <div class="ss10-single-gifts-body-div flex-column ss10Hide" id="ss10-gb-1">
              <div class="ss10-gb-imgs-div flex-row">
                <div class="ss10-gb-single-img-div ss10-gb-single-img-l-div flex-row">
                  <img src="./imgs/ss10Backleft.png" alt="" class="ss10-gb-single-img">
                </div>
                <div class="ss10-gb-single-img-div ss10-gb-single-img-c-div flex-row">
                  <img src="./imgs/ss10Backleft.png" alt="" class="ss10-gb-single-img">
                </div>
                <div class="ss10-gb-single-img-div ss10-gb-single-img-r-div flex-row">
                  <img src="./imgs/ss10Backleft.png" alt="" class="ss10-gb-single-img">
                </div>
              </div>
              <div class="ss10-txts-body-div flex-row">
                <p>
                  عرض رقم 2
                </p>
              </div>
            </div>
            <div class="ss10-single-gifts-body-div flex-column ss10Hide" id="ss10-gb-2">
              <div class="ss10-gb-imgs-div flex-row">
                <div class="ss10-gb-single-img-div ss10-gb-single-img-l-div flex-row">
                  <img src="./imgs/ss10Backleft.png" alt="" class="ss10-gb-single-img">
                </div>
                <div class="ss10-gb-single-img-div ss10-gb-single-img-c-div flex-row">
                  <img src="./imgs/ss10Backleft.png" alt="" class="ss10-gb-single-img">
                </div>
                <div class="ss10-gb-single-img-div ss10-gb-single-img-r-div flex-row">
                  <img src="./imgs/ss10Backleft.png" alt="" class="ss10-gb-single-img">
                </div>
              </div>
              <div class="ss10-txts-body-div flex-row">
                <p>
                  عرض رقم 3
                </p>
              </div>
            </div>
            <div class="ss10-gifts-body-dots flex-row">
              <div class="ss10-single-gifts-body-dot ss8-single-point-div ss8-active-single-point-div" id="ss10-dot-0"></div>
              <div class="ss10-single-gifts-body-dot ss8-single-point-div" id="ss10-dot-1"></div>
              <div class="ss10-single-gifts-body-dot ss8-single-point-div" id="ss10-dot-2"></div>
            </div>
          </div>
        </div>
        <div class="ss10-txts-div ss10-gifts-txts-div flex-row">
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
          'https://cdn.salla.sa/YgXdEO/2da1aa23-97cf-41e7-8581-85797efa6359-1000x750-nkMJOV2TtJr6oPsht7FBauL2IDjIFODwaNUQcUdX.jpg',
          'https://cdn.salla.sa/YgXdEO/c82214f2-3e79-4e08-836d-2cfa331cfc81-1000x750-7FHBVwNIdA4SKHBlLumRhlnGHMiDWeJz02fD8KFu.jpg',
          'https://cdn.salla.sa/YgXdEO/6777215d-daed-42bf-a3cf-5148009eb28a-1000x750-wxV7UnxfEPxiW890RG7oBHMvuDcn5qVOKKCXqWH7.jpg'
          ],
          txts:'احصل على زوج قفازات مجانا عند اتمام قيمة السلة الى 500 ريال فأعلى'
        }
      ],
      ss10ActiveGift:0,
      //propreties
    };
  },
  methods: {
    ss10ShufleGiftsBody(activeIndex){
      document.querySelectorAll('.ss10-single-gifts-body-div').forEach((ss10GiftBody)=>{
        ss10GiftBody.classList.add('ss10Hide');
        ss10GiftBody.classList.add('ss10-single-gifts-body-hide-div');
      });
      // if(this.ss10ActiveGift < 1){
      //   this.ss10ActiveGift++;
      // }else {
      //   this.ss10ActiveGift = 0 ;
      // }
      if(!activeIndex) activeIndex = 0 ;
      document.getElementById(`ss10-gb-${activeIndex}`).classList.remove('ss10Hide');
      document.getElementById(`ss10-gb-${activeIndex}`).classList.remove('ss10-single-gifts-body-hide-div');
      // console.log(activeIndex);
      // console.log('here...');
    },
    ss10AddEventListerBtns(){
      document.querySelectorAll('.ss8-single-point-div').forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
          this.ss10ShufleGiftsBody(e.target.id[e.target.id.length - 1]);
        })
      });
    },
  },
  mounted() {
    this.ss10ShufleGiftsBody();
    this.ss10AddEventListerBtns();
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
.ss10Hide{
  display: none;
  opacity: 0;
}
.ss10-container{
  height: 550px;
  width: 100%;
  border: 1px solid;
  padding: 10px;
  overflow: hidden;
}
.ss10-body-div{
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1300px;
  /* border: 1px solid; */
  /* border-radius: 10px; */
  background-image: linear-gradient(to right, #ffffff, #f0f0f0);
}
.ss10-backshpe-div{
  position: absolute;
  top: 10px;
  right: 0;
  height: 200px;
  width: 200px;
  /* background-color: #368185; */
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
  height: 80%;
  width: 80%;
  backdrop-filter: blur(8px);
  background-color: rgba(253, 253, 253, 0.7);
  box-shadow: 0 3px 10px rgb(225, 225, 225);
  border-radius: 15px;
  z-index: 1;
}

.ss10-single-gifts-body-div{
  height: 100%;
  width: 100%;
  opacity: 1;
  transition: opacity 0.5s;
  /* background-color: #368185; */
}
.ss10-gb-imgs-div{
  flex: 1;
  height: 100%;
  width: 100%;
  /* background-color: #f38f8f; */
}
.ss10-gb-single-img-div{
  height: 170px;
  width: 160px;
  margin: 5px;
  padding: 3px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(176, 176, 176);
  background-color: white;
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
.ss10-gb-single-img{
  max-height: 100%;
  max-width: 100%;
  border-radius: inherit;
}
.ss10-txts-body-div{
  width: 100%;
  height: 70px;
  /* background-color: #d02626; */
  text-align: center;
  font-family: "Almarai";
  color: #474747;
  font-size: 22px;
  padding: 0 10px 0 10px;
}
.ss10-gifts-body-dots{
  margin: 10px;
}
/* dont copy this , found in sec8 */
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
.ss10-single-gifts-body-hide-div{
  opacity: 0;
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
