<template>
  <div class="outer-div flex-row">
    <div class="beem-div"></div>
    <div class="beem-div-2"></div>
    <div class="beem-div-3"></div>
    <div class="beem-div-4"></div>
    <span class="tolify-span">
      TOOLIFY
    </span>
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
.outer-div{
  position: relative;
  height: 400px;
  width: 1300px;
  /* border: 1px solid; */
}
.tolify-span{
  font-size: 250px;
  font-family: "Bungee";
}
.beem-div{
  position: absolute;
  top: 20px;
  left: 20px;
  height: 35px;
  width: 150px;
  background-color: #dc3c3c;
  border-radius: 7px;
}
.beem-div-2{
  position: absolute;
  top: 20px;
  left: 20px;
  height: 150px;
  width: 35px;
  background-color: #dc3c3c;
  border-radius: 7px;
}
.beem-div-3{
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: 35px;
  width: 150px;
  background-color: #dc3c3c;
  border-radius: 7px;
}
.beem-div-4{
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: 150px;
  width: 35px;
  background-color: #dc3c3c;
  border-radius: 7px;
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