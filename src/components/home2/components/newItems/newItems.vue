<template>
  <div class="newItems-container flex-row">
    <div class="backshape-div">
        <div class="sqr-shape-div"></div>
    </div>
    <div class="texts-div flex-row">
        <span class="newitems-span">وصـل حـديثاً</span>
    </div>
    <img src="./newItems.png" alt="" class="new-img">
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
.newItems-container{
    position: relative;
    width: 500px;
    height: 500px;
    /* border: 1px solid rgb(172, 172, 172); */
    /* border-radius: 10px; */
    overflow: hidden;
    /* background-image: linear-gradient(to top left, #ffffff, #f3f3f3); */
    background-color: rgb(238, 238, 238);
}
.backshape-div{
    position: absolute;
    height: 100%;
    width: 100%;
}
.sqr-shape-div{
    position: absolute;
    right: -50px;
    top: -90px;
    height: 350px;
    width: 350px;
    background-image: linear-gradient(to top, #ab3131, #fdc9ad);
    transform: rotate(-15deg) scale(1);
    border-radius: 50px;
    box-shadow: 0 3px 10px rgb(65, 65, 65);
}
.texts-div{
    position: absolute;
    bottom: 70px;
    /* height: 50px;
    width: 250px; */
}
.newitems-span{
    background-image: linear-gradient(to top, #ab3131, #f59393);
    box-shadow: 0 3px 10px rgb(65, 65, 65);
    border-radius: 25px;
    color: white;
    font-size: 30px;
    font-family: "Almarai";
    padding: 2px 60px 2px 60px;
}
.new-img{
    position: absolute;
    left: 20px;
    bottom: 150px;
    height: 180px;
     /* box-shadow: 0 3px 10px rgb(65, 65, 65); */
    filter: drop-shadow(0px 3px 10px rgb(65, 65, 65));
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