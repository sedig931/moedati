<template>
  <div class="container-div flex-row">
    <div class="outer-imgs-div flex-row">
      <div class="inner-imgs-div flex-row">
        <div class="single-img-div">
          <img src="./catog1.png" alt="" class="single-img">
        </div>
        <div class="single-img-div">
          <img src="./catog3.png" alt="" class="single-img single-img-1">
        </div>
        <div class="single-img-div">
          <img src="./catog2.png" alt="" class="single-img single-img-2">
        </div>
      </div>
    </div>  
    <div class="txts-div flex-column">
      <div class="single-txt-div">
      <span class="txts-span" >استكشف عالم الأدوات و المعدات </span>
      </div>
      <div class="single-txt-div single-txt-div-btn">
      <span  class="txts-span txts-span-btn" >جميع التصنيفات بإنتظارك هنا</span>
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
.container-div {
  width: 900px;
  height: 500px;
  /* border: 2px solid rgb(184, 184, 184); */
}
.outer-imgs-div {
  flex: 1;
  height: 100%;
  /* background-color: rgb(247, 247, 247); */

}
.inner-imgs-div{
  position: relative;
  height: 100%;
  width: 300px;
  /* background-color: bisque; */
}
.single-img-div{
  position: absolute;
  top: 60px;
}
.single-img{
  top: 0;
  height: 360px;
  transform:rotate(-15deg) translateX(-40px) translateY(0px);
}
.single-img-1{
    /* transform: ; */
  transform:rotate(-5deg) translateX(-20px) translateY(-10px);
}
.single-img-2{
  /* transform: rotate(5deg); */
  transform:rotate(5deg) translateX(0px) translateY(-20px);
}
.txts-div {
  position: relative;
  flex: 0.8;
  height: 100%;
  /* background-color:#f1f1f1 ; */
  font-family: "Almarai";
  color: #474747;
}
.single-txt-div{
  position: absolute;
  font-size: 34px;
  width: 500px;
  /* background-color: #555; */
  text-align: center;
  transform: translateX(-45px);
  /* font-weight: bold; */
}
.single-txt-div-btn{
  font-size: 20px;
  transform: translateY(65px);
  margin-top: 60px ;
}
.txts-span-btn{
  background-image:linear-gradient(to top, #175255, #368185);
  /* background-color: #175255; */
  padding: 10px 25px 10px 25px;
  border-radius: 10px;
  color: #e2ffff;
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