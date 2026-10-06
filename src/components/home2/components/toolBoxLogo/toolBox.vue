<template>
<div class="tools-box-outer-container flex-row">
  <div class="toolbox-container flex-row">
    <!-- <span class="toolBox-span flex-row">ToolBox</span> -->
    <!-- <span class="toolBox-span flex-row">Torix</span> -->
    <!-- <img src="./box4.png" alt="" class="box-img"> -->
    <!-- <img src="./gear.png" alt="" class="box-img2">
    <img src="./gear.png" alt="" class="box-img3">
    <img src="./gear.png" alt="" class="box-img4"> -->
    <!-- <img src="./torixw.png" alt="" class="torix-logo"> -->
    <div class="register-container flex-row">
      <i class="regist-icon bi bi-r-circle-fill"></i>
    </div>
    <!-- <img src="./torix.png" alt="" class="torix-logo"> -->
    <img src="./torixw.png" alt="" class="torix-logo">
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
.tools-box-outer-container{
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
  height: 100%;
  width: 100%;
  /* padding: 50px; */
}
.toolbox-container{
  position: relative;
  /* height: 100vh; */
  width: 100%;
  /* background-color: black; */
}
.toolBox-span{
    font-size: 150px;
    font-weight: bold;
    border: 15px solid;
    padding: 15px 30px 15px 30px;
    border-radius: 50px;
    font-family: "Science Gothic";
    /* color: #e51e25; */
}
.box-img{
    position: absolute;
    right: 40px;
    top: 30px;
    height: 60px;
}
.box-img2{
    position: absolute;
    left: 405px;
    top: 75px;
    height: 40px;
}
.box-img3{
    position: absolute;
    right: 210px;
    top: 103px;
    height: 110px;
}
.box-img4{
    position: absolute;
    right: 313px;
    top: 103px;
    height: 110px;
    border-radius: 100%;
}
.torix-logo{
  width: 1200px;
  margin: 50px;
  /* background-color: #ffffff; */
  /* background-color: #000000;  */
  border-radius: 140px;
}
.register-container{
  position: absolute;
  height: 60px;
  width: 60px;
  top: 30px;
  right: 330px;
  font-size: 45px;
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