<template>
  <div class="buynow-container-div flex-row">
    <div class="left-right-buy-banar-div left-buy-banar-div flex-row">
        <img src="./buyNow.png" alt="" class="buy-now-img">
    </div>
    <div class="left-right-buy-banar-div right-buy-banar-div flex-column">
        <div class="txt-div start-txt-div flex-row">
            <span class="txt-span">
                إبدأ التسوق
            </span>
        </div>
        <div class="txt-div flex-row now-txt-div">
            <span class="txt-span now-span" dir="rtl">
                 الآن..
            </span>
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
.buynow-container-div{
    height: 750px;
    width: 100%;
    /* background-color: #ccc; */
}
.left-right-buy-banar-div{
    width: 800px;
    height: 100%;
    /* background-color: #e99898; */
}
.buy-now-img{
    height: 70%;
}
/* .right-buy-banar-div{ */
    /* background-color: #e99898; */
/* } */
.txt-div{
    width: 70%;
    /* background-color: #e5a5a5; */
    font-size: 70px;
    font-family: "Almarai";
    color: #474747;
}
.start-txt-div{
   justify-content: end;
   margin-bottom: 50px;
}
.now-txt-div{
    justify-content: start;
}
.now-span{
    color: white;
    background-image: linear-gradient(to top, #ab3131, #f59393);
    border-radius: 20px;
    padding: 0 40px 0 40px;
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
}
</style>