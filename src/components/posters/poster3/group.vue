<template>
<div class="story-container-div flex-row">
  <div class="poster3-insta-story-container flex-column">
    <div class="shape-container flex-column">
        <div class="top-shape-container flex-column">
            <div class="top-bottom-rect top-rect">
                <div class="inner-top-rect"></div>
            </div>
            <div class="top-bottom-rect bottom-rect"></div> 
        </div>
        <div class="bottom-shape-container"></div>
    </div>
    <div class="body-container flex-column">
        <div class="top-imgs-div flex-row">
            <div class="top-single-img-div flex-row">
                   <img src="./imgs/58633.png" alt="" class="top-single-img">
            </div>
            <div class="top-single-img-div flex-row">
                 <img src="./imgs/group/2025-08-27.png" alt="" class="top-single-img">
            </div>
            <div class="top-single-img-div flex-row">
                  <img src="./imgs/group/81860.png" alt="" class="top-single-img">
            </div>
        </div>
        <div class="imgs-div flex-row">
            <div class="single-img-div bottom-img-div flex-row">
                <img src="./imgs/58690--.png" alt="" class="single-img single-img-bottom">
            </div>
            <!-- <div class="single-img-div middle-img-div flex-row">
                <img src="./imgs/58690--.png" alt="" class="single-img single-img-middle">
            </div> -->
            <div class="single-img-div top-img-div flex-row">
                <img src="./YT-828075.png" alt="" class="single-img">
            </div>
        </div>
        <div class="texts-div flex-coumn" dir="rtl">
            <div class="name-div flex-row">
                <span class="name-span" dir="rtl">{{this.proName}}</span>
            </div>
            <div class="discription-div flex-row">
                <span class="discription-span" dir="rtl">
                    {{this.proDisc}}
                </span>
            </div>
        </div>
    </div>
</div>
     <form class="form-div flex-column" dir="rtl">
      <div class="lbl-input-div flex-row">
        <label for="">product name</label>
        <input v-model="this.proName" type="text">
      </div>
      <div class="lbl-input-div flex-row">
        <label for="">product discription</label>
        <textarea v-model="this.proDisc" type="text"/>
      </div>
      <div class="lbl-input-div flex-row">
        <label for="">product price</label>
        <input v-model="this.proPrice" type="text">
      </div>
    </form>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
        proName:"",
        proPrice:"",
        proDisc:""
      //propreties
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
.story-container-div{
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.poster3-insta-story-container{
    position: relative;
    /* instagram  */
    height: 800px;
    width: 500px;
  
    /* border: 1px solid; */
    /* background-image: linear-gradient(to bottom,
     rgb(146, 146, 146),
     rgb(255, 255, 255)
     );  */
}
.shape-container{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.top-shape-container{
    flex: 1;
    width: 100%;
    background-color: rgb(57, 57, 57);
}
.top-bottom-rect{
    flex: 1;
    width: 100%;
}
.top-rect{
    background-color: rgb(245, 86, 86);
}
.inner-top-rect{
    height: 100%;
    width: 100%;
    border-radius: 0 0 0 70%;
    background-color: rgb(57, 57, 57);
}
.bottom-rect{
    background-color: rgb(245, 86, 86);
    border-radius: 0 35% 0 0;
}
.bottom-shape-container{
    flex: 0.5;
    width: 100%;
    background-image: linear-gradient(to bottom,
     rgb(245, 86, 86),
     rgb(251, 132, 132)
     );
}
/* ----------body-------------- */
/* ----------body-------------- */
.body-container{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* justify-content: space-evenly; */
      font-family: "Almarai";
}


.top-imgs-div{
    position: absolute;
    top: 0px;
}
.top-single-img-div{
    height: 100px;
    width: 100px;
    margin: 10px;
    background-color: rgba(60, 60, 60, 0.9);
    border-radius: 10px;
    padding: 9px;
    /* box-shadow: 0 3px 10px rgb(91, 91, 91); */
    filter: drop-shadow(0px 3px 5px rgb(91, 91, 91));
    
}
.top-single-img{
    height: 100%;
    /* width: 70%; */
         filter: drop-shadow(1px 0.05px 1px #ffffff);
    /* height: 100%; */
}
.single-img-div{
    position: absolute;
    height: 340px;
    width: 340px;
    border-radius: 10px;
    padding: 5px;
   
}

.imgs-div{
    position: absolute;
    top: 240px;
    height:240px;
    width: 240px;
    /* background-color: white; */
}
.top-img-div{
    /* background: #ffffff; */
    /* background-color: rgba(255, 255, 255, 0.5); */
    top: 8px;
    left: 80px;
}
.middle-img-div{
     background: #d04141;
}
.bottom-img-div{
    bottom: 8px;
    right: 60px;
    /* background-color: rgba(255, 255, 255, 0.1); */
    /* background: #ffffff; */
}
.single-img{
    width: 100%;
    filter: drop-shadow(2px 3px 5px #e8e8e8);
}
.single-img-middle,.single-img-bottom{
    width: 70%;
}
.texts-div{
    position: absolute;
    bottom: 40px;
    /* min-height: 100px; */
    width: 100%;
    /* background-color: #c9c9c9; */
    padding: 0 20px 10px 20px;
    color: white;
}
.name-div{
    width: 100%;
    font-size: 22px;
    margin: 5px 0 5px 0;
}
.discription-div{
    width: 90%;
    font-size: 16px;
}
.name-span,.discription-span{
    width: 100%;
    text-align: start;
    filter: drop-shadow(1px 1px 1px #212121);
    white-space: pre-line;
}
.form-div{
  margin: 20px;
  padding: 10px;
  border: 1px solid rgb(171, 171, 171);
  border-radius: 15px;
}
.lbl-input-div{
  width: 400px;
  justify-content: space-between;
}
input[type="text"] {
  width: 190px;
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
textarea[type="text"] {
  width: 190px;
  max-height: 225px;
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
textarea[type="text"]:focus {
  border: 1px solid #555;
}
</style>