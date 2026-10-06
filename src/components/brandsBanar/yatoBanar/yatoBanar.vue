<template>
  <div class="banar-container-div">
    <!-- <div class="sqr-tow-borders sqr-tow-borders-top-right"></div> -->
    <!-- <div class="sqr-tow-borders sqr-tow-borders-bottom-left"></div> -->
    <div class="back-sqrs-container flex-column">
        <div class="single-sqrs-container top-left-sqr-conatiner flex-row">
            <div class="single-sqr-back top-left-sqr"></div>
            <div class="single-sqr-back top-right-sqr"></div>
        </div>
        <div class="single-sqrs-container middle-sqr-conatiner flex-row">
            <div class="single-sqr-back middle-sqr"></div>
        </div>
        <div class="single-sqrs-container bottom-right-sqr-conatiner flex-row">
            <div class="single-sqr-back bottom-right-sqr"></div>
        </div>
    </div>
    <div class="banar-body-container flex-row">
        <div class="left-body-imgs-container flex-row">
            <div class="single-imgs-container left-imgs-container flex-column">
                <div class="single-img-container flex-row">
                    <img class="single-img" src="./imgs/YT-10555.png" alt="">
                </div>
                <div class="single-img-container flex-row">
                    <img class="single-img" src="./imgs/YT-30415.png" alt="">
                </div>
                <div class="single-img-container flex-row">
                    <img class="single-img" src="./imgs/YT-38928.png" alt="">
                </div>
            </div>
            <div class="single-imgs-container middle-imgs-container flex-column">
                <div class="single-imgs-container left-imgs-container flex-column">
                    <div class="single-img-container flex-row">
                        <img class="single-img" src="./imgs/YT-21159.png" alt="">
                    </div>
                    <div class="single-img-container flex-row">
                        <img class="single-img" src="./imgs/YT-85403.png" alt="">
                    </div>
                    <div class="single-img-container flex-row">
                        <img class="single-img" src="./imgs/YT-828133.png" alt="">
                    </div>
                   
                </div>
            </div>
            <div class="single-imgs-container right-imgs-container flex-column">
                <div class="single-imgs-container left-imgs-container flex-column">
                    <div class="single-img-container flex-row">
                        <img class="single-img" src="./imgs/YT-80627.png" alt="">
                    </div>
                    <div class="single-img-container flex-row">
                        <img class="single-img" src="./imgs/YT-82791.png" alt="">
                    </div>
                    <div class="single-img-container flex-row">
                        <img class="single-img" src="./imgs/YT-83091.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="right-txts-body-div-container flex-column">
            <div class="txts-div top-txts-div flex-row">
                <span class="single-txts-span single-txts-span-top">المتانة وإتقان التنفيذ</span>
            </div>
            <div class="txts-div bottom-txts-div">
                <span class="single-txts-span single-txts-span-bottom">
                🥇 و المواد الممتازة 
                </span>
            </div>
        </div>
    </div>
    <div class="brand-img-div">
        <img class="brand-img" src="../../../assets/brandsicons/yato.png" alt="">
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
.banar-container-div{
    position: relative;
    height: 720px;
    width: 1500px;
    background-image: linear-gradient(to right, #ffffff, #f0f0f0);
    border-radius: 15px;
    /* border: 1px solid; */
}
.sqr-tow-borders{
    position: absolute;
    height: 300px;
    width: 300px;
    /* background-color: #555; */
}
.sqr-tow-borders-bottom-left{
    left: 0;
    bottom: 0;
    border-left: 3px solid #ccc; 
    border-bottom: 3px solid #ccc;   
    border-radius: 0 0 0 15px;
}
.sqr-tow-borders-top-right{
    top: 0;
    right: 0;
    border-top: 3px solid #ccc; 
    border-right: 3px solid #ccc;
    border-radius: 0 15px 0 0; 
}
.back-sqrs-container{
    height: 100%;
    width: 100%;
}
.single-sqrs-container{
    flex: 1;
    width: 100%;
}
.single-sqr-back{
    border-radius: 13px;
    margin: 5px;
}
.top-left-sqr-conatiner{
    justify-content: space-between;
    align-items: flex-start;
    /* background-color: rgb(230, 230, 230); */
}
.top-left-sqr{
    height: 200px;
    width: 200px;
    background-color: #f0f0f0;
    transform: translateY(20px) translateX(35px);
}
.top-right-sqr{
height: 100px;
width: 100px;
/* background-color: #ffffff; */
 background-color: #f6f6f6;
transform: translateY(70px) translateX(-160px);
}
/* .middle-sqr-conatiner{
    background-color: rgb(233, 233, 233);
} */
.middle-sqr{
    height: 100px;
    width: 100px;
    background-color: rgb(242, 242, 242);
    /* background-color: rgb(255, 255, 255); */
}
.bottom-right-sqr-conatiner{
    justify-content: end;
    align-items: flex-end;
    /* background-color: rgb(216, 216, 216); */
}
.bottom-right-sqr {
    height: 200px;
    width: 200px;
    /* background-color: #ffffff; */
    background-color: #f6f6f6;
    transform: translateY(-20px) translateX(-35px);
}

/* -----------------body container--------------- */
/* -----------------body container--------------- */
/* -----------------body container--------------- */
.banar-body-container{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* background-color: rgb(238, 153, 153); */
    border-radius: inherit;
}
.left-body-imgs-container{
    flex: 0.8;
    height: 100%;
    /* background-color: #f0f0f0; */
}
.right-txts-body-div-container{
    flex: 1;
    height: 100%;
    /* background-color: aliceblue; */
}
.single-imgs-container{
    width: 160px;
    height: 100%;
    margin: 15px;
}
.single-img-container{
    height: 160px;
    width: 100%;
    background-color: #ffffff;
    margin: 10px 0 10px 0;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(203, 203, 203, 0.7);
}
.single-img{
    width: 100%;
    max-height: 160px;
    border-radius: 10px;
    filter: drop-shadow(3px 3px 3px rgb(131, 131, 131));
}
/* .left-imgs-container{
    background-color: bisque;
} */
.middle-imgs-container{
    transform: translateY(25px);
/* background-color: rgb(136, 249, 249); */
}
.right-imgs-container{
    transform: translateY(-25px);
    /* background-color: #f08e8e; */
}
.brand-img-div{
    position: absolute;
    top: 90px;
    right: 250px;
    /* height: px; */
    width: 300px;
    /* background-color: #555; */
}
.brand-img{
    /* height: 20px; */
    width: 250px;
}
.txts-div{
    font-family: "Almarai";
    color: rgb(74, 74, 74);
}
.top-txts-div{
    width: 90%;
    /* background-color: #ccc; */
    justify-content: end;
    margin-bottom: 15px;
}
.single-txts-span{
    font-size: 55px;
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