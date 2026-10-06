<template>
  <div class="seafty-blog-container-div flex-row">
    <div class="background-shape-div"></div>
    <!-- <div class="back-ground-img-div flex-row">
        <img src="./YT-55290T1.jpg" alt="" class="back-img">
    </div>
    <div class="back-cover-div"></div> -->
    <div class="img-div flex-row">
        <img src="./seaftyimg.png" alt="" class="sefty-img">
    </div>
    <div class="txts-div flex-column">
        <div class="single-txt-div top-txt-div flex-row">
            <div class="bottom-border-div"></div>
            <span class="single-span">
                السلامة تبدأ بخطوة وعي
            </span>
        </div>
        <div class="single-txt-div bottom-txt-div flex-row">
            <span class="single-span">
                تعرّف على أدوات الحماية الضرورية
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
.seafty-blog-container-div{
    position: relative;
    height: 600px;
    width: 1180px;
    /* border: 1px solid; */
    overflow: hidden;
}
.back-ground-img-div{
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 10px;
}
.back-img{
    height: 100%;
}
.back-cover-div{
    position: absolute;
    height: 100%;
    width: 100%;
    /* background-color : rgba(255, 255, 255, 0.97); */
}
.background-shape-div{
    position: absolute;
    right: -330px;
    height: 90%;
    width: 50%;
    border-radius: 100% 0 0 100%;
    background-image: linear-gradient(to right, rgb(238, 238, 238), #f5f5f5);
}
.img-div{
    height: 100%;
    flex: 0.7;
}
.txts-div{
flex: 1;
height: 100%;
/* background-color:#f2f7fd; */
justify-content: end;
padding-bottom: 100px;
font-family: "Almarai";
z-index: 1;
 }
 .single-txt-div{
    width: 90%;
    margin: 0 0 50px 0;
 }
 .top-txt-div{
    position: relative;
    justify-content: end;
    font-size: 35px;
    color: #474747;
    /* margin-bottom: 10px; */
 }
 .bottom-border-div{
    position: absolute;
    bottom: -15px;
    width: 180px;
    height: 5px;
    border-radius: 4px;
    background-color: #656565;
 }
 .bottom-txt-div{
    font-size: 40px;
    width: 90%;
    background-image: linear-gradient(to top, #ab3131, #f59393);
    color: white;
    border-radius: 35px;
    box-shadow: 0 3px 10px rgb(65, 65, 65);
 }
 .sefty-img{
    max-width: 100%;
    transform: translateY(50px);
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
}
</style>