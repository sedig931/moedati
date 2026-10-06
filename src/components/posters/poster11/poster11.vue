<template>
  <div class="poster11-container">
    <div class="img-back-div">
        <img src="./imgs/poster11Back.png" alt="" class="back-img">
    </div>
    <div class="poster11-body-div flex-column">
        <div class="product-imgs-div">
            <img src="./imgs/YT-0885--.png" alt="" class="product-img">
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
.poster11-container{
    position: relative;
    height: 700px;
    width: 468px;
    /* width: 100%; */
    border: 2px solid black;
}
.img-back-div{
    position: absolute;
    height: 100%;
    width: 100%;
}
.back-img{
    max-height: 100%;
    max-width: 100%;
}
.poster11-body-div{
    position: absolute;
    height: 100%;
    width: 100%;
    /* background-color: rgba(255, 255, 255, 0.5); */
    backdrop-filter: blur(1px);
}
.product-imgs-div{
    width: 90%;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgb(84, 84, 84);
}
.product-img{
    max-width: 100%;
    max-height: 100%;
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