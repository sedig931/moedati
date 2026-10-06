<template>
  <div class="main-container-div flex-row">
    <div class="single-value-div flex-column">
        <div class="txts-div flex-column">
            <div class="single-txt-div flex-row">
                <span class="single-txt-span">خدمات ما بعد البيع</span>
            </div>
        </div>
        <div class="img-div">
            <img src="./afterservices.png" alt="" class="img-single">
        </div>
        <div class="bottom-line-div"></div>
    </div>
    <div class="single-value-div flex-column">
        <div class="txts-div flex-column">
            <div class="single-txt-div flex-row">
                <span class="single-txt-span">توصيل سريع</span>
            </div>
            <div class="single-txt-div single-txt-start flex-row">
                <span class="single-txt-span">لجميع مناطق المملكة</span>
            </div>
        </div>
        <div class="img-div flex-row">
            <img src="./deleveryService.png" alt="" class="img-single">
        </div>
        <div class="bottom-line-div"></div>
    </div>
    <div class="single-value-div flex-column">
        <div class="txts-div flex-column">
            <div class="single-txt-div flex-row">
                <span class="single-txt-span">نظام دفع آمن</span>
            </div>
            <div class="single-txt-div single-txt-start flex-row">
                <span class="single-txt-span">و اسعار منافسة</span>
            </div>
        </div>
        <div class="img-div flex-row">
            <img src="./quality.png" alt="" class="img-single">
        </div>
        <div class="bottom-line-div"></div>
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
.main-container-div{
    width: 100%;
    height: 100%;
    font-family: "Almarai";
    /* background-color: #818181; */
}
.single-value-div{
    position: relative;
    height: 500px;
    width: 400px;
    /* background-color: #ccc; */
    justify-content: space-evenly;
    /* border:1px solid rosybrown; */
}
.bottom-line-div{
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 6px;
    background-color: #797979;
    border-radius: 10px;
}
.txts-div{
    width: 100%;
    color: #474747;
    /* background-color: #818181; */
}
.single-txt-div{
    width: 100%;
    /* justify-content: end; */
    /* background-color: #f38f8f; */
}
.single-txt-start{
    justify-content: center;
}
.single-txt-span{
    font-size: 35px;
}
.img-div{
    width: 90%;
}
.img-single{
    width: 80%;
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