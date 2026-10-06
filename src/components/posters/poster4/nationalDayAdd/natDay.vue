<template>
<div class="story-container-div flex-row">
  <div class="poster4-snap-webadd-container flex-column">
    <!-- <div class="shape-container flex-column">
        <div class="top-shape-container flex-column">
            <div class="top-bottom-rect top-rect">
                <div class="inner-top-rect"></div>
            </div>
            <div class="top-bottom-rect bottom-rect"></div> 
        </div>
        <div class="bottom-shape-container"></div>
    </div> -->
     <div class="shape-container flex-column">
        <div class="single-sqr-div sqr1"></div>
        <div class="single-sqr-div sqr2"></div>
        <div class="single-sqr-div sqr3"></div>
        <div class="single-sqr-div sqr4"></div>
        <div class="single-sqr-div sqr5"></div>
        <div class="single-sqr-div sqr6"></div>
        <div class="single-sqr-div sqr7"></div>
        <div class="single-sqr-div sqr8"></div>
        <div class="single-sqr-div sqr10"></div>
        <div class="single-sqr-div sqr11"></div>
        <div class="single-sqr-div sqr12"></div>
        <div class="single-sqr-div sqr13"></div>
        <div class="single-sqr-div sqr14"></div>
        <div class="single-sqr-div sqr15"></div>
        <div class="single-sqr-div sqr16"></div>
      </div>
     <div class="nationalDay-div">
        <img class="nationalday-img" src="../../../../assets/brandsicons/natDay.png" alt="">
    </div>
    <div class="dana-icon">
        <img class="dana-icon-img" src="./imgs/danaglobal.png" alt="">
    </div>
    <div class="location-div" dir="rtl">
        <span class="location-span" dir="rtl">
            {{this.proPrice}}
        </span>
    </div>
    <div class="body-container flex-column">
        <div class="top-imgs-div flex-row">
            <div class="top-single-img-div flex-row">
                   <img src="./imgs/58633.png" alt="" class="top-single-img">
            </div>
            <div class="top-single-img-div flex-row">
                 <img src="./imgs/2025-08-27.png" alt="" class="top-single-img">
            </div>
            <div class="top-single-img-div flex-row">
                  <img src="./imgs/81860.png" alt="" class="top-single-img">
            </div>
        </div>

        <div class="imgs-div flex-row">
            <div class="single-img-div flex-row top-single-img-divv">
                <img src="./imgs/58690--.png" alt="" class="single-img">
            </div>
            <div class="single-img-div flex-row bottom-single-img-div">
                <img src="./imgs/YT-828075.png" alt="" class="single-img">
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
       <div class="lbl-input-div flex-row">
        <label for="">product discription</label>
        <textarea v-model="this.proPrice" type="text"/>
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
.poster4-snap-webadd-container{
    position: relative;
    height: 800px;
    width: 430px;
  
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

/* new shape added here.. */

.shape-container{
  position: relative;
  height: 100%;
  width: 100%;
  /* background-color: #ffffff; */
}
.single-sqr-div{
  position: absolute;
  border-radius: 7px;
  /* border: 2px solid #f0f0f0; */
   /* box-shadow: 0 3px 10px rgb(91, 91, 91); */
  background-color: #f0f0f0;
  /* background-color: #f0f0f0;
  filter: drop-shadow(0px 3px 5px rgb(209, 209, 209)); */
}
.sqr1{
  top: 100px;
  left: 50px;
  height: 60px;
  width: 60px;
}
.sqr2{
  top: 300px;
  left: 150px;
  height: 60px;
  width: 60px;
  background-color: #ececec;
}
.sqr3{
  top: 200px;
  left: 350px;
  height: 60px;
  width: 60px;
  background-color: #eeeeee;
}
.sqr4{
  top: 630px;
  left: 290px;
  height: 60px;
  width: 60px;
  background-color: #eeeeee;
}
.sqr5{
  top: 500px;
  left: 250px;
  height: 60px;
  width: 60px;
  background-color: #eeeeee;
}
.sqr6{
  top: 400px;
  left: 250px;
  height: 40px;
  width: 40px;
  background-color: #eeeeee;
}
.sqr7{
  top: 550px;
  left: 150px;
  height: 40px;
  width: 40px;
  background-color: #f0f0f0;
}
.sqr8{
  top: 200px;
  left: 150px;
  height: 40px;
  width: 40px;
  background-color: #eeeeee;
}
.sqr9{
  top: 300px;
  left: 50px;
  height: 40px;
  width: 40px;
  background-color: #eeeeee;
}
.sqr10{
  top: 90px;
  left: 250px;
  height: 40px;
  width: 40px;
  background-color: #eeeeee;
}
.sqr11{
  top: 10px;
  left: 150px;
  height: 40px;
  width: 40px;
  background-color: #f0f0f0;
}
.sqr12{
  top: 25px;
  left: 272px;
  height: 40px;
  width: 40px;
  background-color: #eaeaea;
}
.sqr13{
  top: 400px;
  left: 350px;
  height: 40px;
  width: 40px;
  background-color: #e8e8e8;
}
.sqr14{
  top: 240px;
  left: 50px;
  height: 90px;
  width:90px;
  background-color: #f2f2f2;
}
.sqr15{
  top: 400px;
  left: 30px;
  height: 30px;
  width: 30px;
  background-color: #eeeeee;
}
.sqr16{
  bottom: 40px;
  left: 50px;
  height: 90px;
  width:90px;
  background-color: #f2f2f2;
}

.nationalDay-div{
  position: absolute;
  top: 10px;
  /* left: 70px; */
}
.nationalday-img{
  width: 210px;
}
.dana-icon{
      position: absolute;
  bottom: 4px;
  left: 5px;
}
.dana-icon-img{
    width: 100px;
}
/* ---- */
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
    /* position: absolute; */
    top: 0px;
}
.top-single-img-div{
    height: 75px;
    width: 75px;
    margin: 10px;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 9px;
    /* box-shadow: 0 3px 10px rgb(213, 213, 213); */
    filter: drop-shadow(0px 3px 5px rgb(119, 119, 119));
    
}
.top-single-img{
    height: 100%;
    /* width: 70%; */
         filter: drop-shadow(1px 0.05px 1px #848484);
    /* height: 100%; */
}

/*---- here--- */
.imgs-div{
    width: 90%;
    margin: 70px 0 180px 0;
    /* background-color: rgb(246, 178, 178); */
}
.single-img-div{
    width: 350px;
    border-radius: 10px;
    padding: 5px;   
}
.single-img{
    width: 90%;
    filter: drop-shadow(2px 4px 3px #717171);
}
.top-single-img-divv{
    transform: translateY(-30px);
}
.bottom-single-img-div{
    width: 300px;
    transform: translateY(30px);
}

.texts-div{
    position: absolute;
    bottom: 40px;
    /* min-height: 100px; */
    width: 100%;
    /* background-color: #c9c9c9; */
    padding: 0 20px 10px 20px;
    color: #3e3e3e;
}
.name-div{
    width: 100%;
    font-size: 19px;
    font-weight: bold;
    margin: 5px 0 5px 0;
}
.discription-div{
    width: 90%;
    font-size: 15px;
    margin-bottom: 10px;
}
.name-span,.discription-span{
    width: 100%;
    text-align: start;
    /* filter: drop-shadow(1px 1px 1px #212121); */
    white-space: pre-line;
}
.location-div{
    position: absolute;
    right: 0;
    bottom: 0;
    /* background-color: #3e3e3e; */
    width: 200px;
    font-size: 9px;
    margin: 5px;
       font-family: "Almarai";
}
.location-span{
     white-space: pre-line;
    /* text-align: start; */
    /* background-color: #848484; */
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