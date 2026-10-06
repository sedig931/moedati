<template>
  <div class="product-container-div-banar flex-row">
    <div class="product-container-div flex-column">
      <div class="outer-top-div">
        <div class="top-div flex-column">
          <span>قرص قطع</span>
          <span class="subtitle-span">230X2.0X22 ملم</span>
        </div>
      </div>
        <div class="bottom-div flex-column">
          <div class="top-bottom-div"></div>
          <div class="bottom-bottom-div flex-row">
            <div class="left-txts-div flex-column">
              <span class="span-original">أصــلي</span>
              <div class="price-center-div flex-row">
                <div class="left-sqr-div flex-row">
                  <img class="reial-icon" src="./reialIcon4b4545.png" alt="">
                </div>
                <span>4.43</span>
              </div>
              </div>
            <div class="right-photo-div flex-row">
              <img class="pro-img" src="./YT-5927.png" alt="">
            </div>
          </div>
        </div>
        <div class="add-to-cart-div flex-row">
          أطلبها الآن
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
  mounted() {
  }
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
.product-container-div-banar{
  font-family: "Almarai", sans-serif;
  color: white;
    height: 700px;
    width: 700px;
    /* border: 3px solid rgb(188, 188, 188); */
    /* border-radius: 20px;c */
    justify-content: space-evenly;
    /* background-color: rgb(167, 167, 179); */
}
.product-container-div{
  height: 100%;
  width: 100%;
  /* background-color:rgb(90, 142, 202) ; */
  /* background-color:rgb(254, 227, 0) ; */
  background-color:rgb(240, 132, 86) ;
  border: 4px solid #4b4545;
  border-radius: 20px;
}
.outer-top-div{
  width: 520px;
  padding: 0 0 0 35px;
  /* background-color: #4b4545; */
}
.top-div{
  height: 180px;
  width: 300px;
  /* background-color: rgb(197, 77, 77); */
   /* background-color:rgb(0, 131, 91) ; */
   color: #4b4545;
  background-color:rgb(255, 255, 255) ;
  font-size: 40px;
  border-radius: 20px 20px 0 0;
}
.subtitle-span{
  margin: 10px 2px 0 0;
  font-size: 18px;
}
.bottom-div{
  position: relative;
  height: 260px;
  width: 550px;
  background-color: #4b4545;
  border-radius: 20px;
}
.top-bottom-div{
  position: absolute;
  right: 0;
  top: -17px;
  height: 0px;
  width: 0px;
  border-bottom: 18px solid  #4b4545;
  border-left: 547px solid transparent;
  border-radius: 5px 20px 0 0;
}
.bottom-bottom-div{
  flex: 1;
  width: 100%;
  /* background-color: #ac3232; */
  border-radius: 9px 0 20px 20px;
}
.left-txts-div,.right-photo-div{
  flex: 1;
  height: 100%;
}
.left-txts-div{
  background-color: #4b4545;
  border-radius: inherit;
}
.right-photo-div{
  position: relative;
  background-color: #4b4545;
  border-radius: inherit;
}
.pro-img{
  position: absolute;
  height: 330px;
  top: -170px;
  right: -110px;
  filter: drop-shadow(5px 5px 5px rgb(255, 255, 255));
}
.span-original{
    font-size: 40px;
    margin: 0px 0 30px 0;
}
.price-center-div{
  position: relative;
  width: 180px;
  height: 80px;
  /* background-color: rgb(90, 142, 202) ; */
   /* background-color:rgb(254, 227, 0) ; */
  background-color:rgb(240, 132, 86) ;
  color: #4b4545;
  /* justify-content: end; */
  padding: 3px 5px 3px 15px;
  border-radius: 15px;
   font-size: 40px;
   font-weight: bold;
}
.left-sqr-div{
  position: absolute;
  left: -25px;
  height: 50px;
  width: 60px;
  padding: 2px 3px 2px 3px;
  border-radius: 7px;
  /* background-color: rgb(197, 77, 77); */
   /* background-color:rgb(0, 131, 91) ; */
  background-color:rgb(255, 255, 255) ;
  /* font-size: 20px; */
  /* height: 10px; */
}
.reial-icon{
  height: 50px;
}
.add-to-cart-div{
  width: 450px;
  height: 50px;
  background-color: white;
  margin-top: 60px;
  border-radius: 25px;
  color: #4b4545;
  font-size: 25px;
  font-weight: bold;
  border: 3px solid #4b4545;
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
</style>