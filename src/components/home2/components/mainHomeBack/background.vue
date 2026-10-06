<template>
  <div class="background-container flex-row">
    <div class="center-div-imgs-container flex-row">
            <!-- <div class="bottom-colors-div"></div> -->
            <img class="single-img YT-55292-img" src="./backgorund-imgs/YT-55292.png" alt="">

            <!-- <img class="single-img YT-86950-img" src="./backgorund-imgs/YT-86950.png" alt=""> -->

            <!-- <img class="single-img SH04-img" src="./backgorund-imgs/SH04.png" alt=""> -->
      
            <img class="single-img YT-09031-img" src="./backgorund-imgs/YT-09031.png" alt="">
      
            <img class="single-img YT-828075-img" src="./backgorund-imgs/YT-5530S.png" alt="">
 
            <img class="single-img YT-09004-img" src="./backgorund-imgs/YT-09004-.png" alt="">
            <!-- <img class="single-img v81827-img" src="./backgorund-imgs/81827(1).png" alt=""> -->

            <!-- <div class="brands-div flex-row">
                <img class="brand-img" src="../../../../assets/brandsicons/yato.png" alt="">
                <img class="brand-img" src="../../../../assets/brandsicons/vorel.png" alt="">
                <img class="brand-img" src="../../../../assets/brandsicons/sthor.png" alt="">
                <img class="brand-img" src="../../../../assets/brandsicons/poweraction.png" alt="">
                <img class="brand-img" src="../../../../assets/brandsicons/flo.png" alt="">
            </div> -->
          <!-- <div class="overlay-div"></div> -->
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
.background-container{
  height: 100vh;
  width: 100%;
  /* background-image: linear-gradient(to top, #c2bfbf, #ffffff); */
  background-image: linear-gradient(to top,rgb(255, 255, 255) 25%, rgb(232, 232, 232) 40%, rgb(255, 255, 255) 100%);
  /* padding: 50px; */
}
.center-div-imgs-container{
  position: relative;
  height: 100%;
  width: 100%;
  /* background-color: rebeccapurple; */
}
.brands-div{
  position: absolute;
  top: 0;
  width: 100%;
  height: 120px;
  justify-content: space-evenly;
  /* background-color: #555; */
}
.brand-img{
  /* height: 100%; */
  width: 120px;
}
.single-img{
  position: absolute;
  filter: drop-shadow(10px 10px 5px #818181);
}
.YT-55292-img{
  top: 280px;
  left: 470px;
  height: 250px;
  backdrop-filter: blur(5px);
}
.YT-09031-img{
  top: 390px;
  left: 740px;
  height: 200px;
    /* transform: translateY(190px); */
      /* backdrop-filter: blur(5px); */
}
.SH04-img{
  /* left: 730px; */
  height: 500px;
  top: 180px;
  transform:  rotate(30deg) translateX(120px);
   
}
.YT-86950-img{
  height: 150px;
  top: 300px;
  transform: translateY(120px);
}
.YT-828075-img{
  height: 200px;
  right: 750px;
  top: 390px;
  /* transform: translateY(-150px); */
}
.v81827-img{
  height: 200px;
  right: 1550px;
  top: 480px;

}
.YT-09004-img{
  top: 280px;
  right:450px;
  transform: translateX(0px);
  height: 250px;
}
.bottom-colors-div{
  position: absolute;
  bottom: 0;
  height: 150px;
  width: 100%;
  background-image: linear-gradient(to bottom, #cacaca, #ffffff);
  border: none;
  box-shadow: none;
}
.overlay-div{
  position: absolute;
  height: 100%;
  width: 100%;
  /* background-color: #ececec; */
  backdrop-filter: blur(2px);
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