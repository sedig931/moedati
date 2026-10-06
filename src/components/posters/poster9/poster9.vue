<template>
  <div class="poster9-div flex-row">
    <img src="./imgs/poster9back.png" alt="" class="poster9-back-img">
    <img src="./imgs/YT-21655.png" alt="" class="poster9-pro-img poster9-pro-img-1">
    <img src="./imgs/YT-16967.png" alt="" class="poster9-pro-img poster9-pro-img-2">
    <img src="./imgs/YT-86950.png" alt="" class="poster9-pro-img poster9-pro-img-3">
    <div class="poster9-discount-div flex-column">
        <span class="poster9-num-span">15%</span>
        <span class="poster9-arabic-span">خصم</span>
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
.poster9-div{
    position: relative;
    overflow: hidden;
}
.poster9-back-img{
    width: 500px;
}
.poster9-pro-img{
    position: absolute;
}
.poster9-pro-img-1{
    top: -50px;
    height: 350px;
    right: -150px;
}
.poster9-pro-img-2{
    top: 50px;
    left: -50px;
    height: 350px;
}
.poster9-pro-img-3{
    bottom: 10px;
    /* left: -50px; */
    height: 350px;
}
.poster9-discount-div{
    position: absolute;
    height: 170px;
    width: 170px;
    right: 40px;
    top: 220px;
    background-image: linear-gradient(to top left, #d82828, #ef846c);
    border: 4px solid white;
    border-radius: 100%;
    color: white;
    font-size: 65px;
    font-weight: bold;
    transform: rotate(20deg) scale(1);
}
.poster9-num-span{
    transform: translateY(15px);
}
.poster9-arabic-span{
    font-size: 40px;
    font-family: "Almarai";
    transform: translateY(-18px);
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