<template>
  <div class="poster-container-div flex-column">
    <div class="center-circle flex-column">
        <div class="top-more-space-div">
        </div>
        <div class="bottom-more-space-div">
        </div>
    </div>
    <div class="top-left-circle"></div>
    <div class="moedati-icon-div">
        mooedatif
    </div>
    <div class="body-container-div flex-column">
        <div class="img-outer-div">
            <img class="pro-img" src="./YT-09031.png" alt="">
        </div>
        <div class="name-outer-div">
           <span class="nam-disc-price-span pro-name-span" >{{this.proName}}</span>
        </div>
        <div class="disc-outer-div">
          <span class="nam-disc-price-span pro-disc-span" >{{this.proDisc}}</span>
        </div>
        <div class="price-outer-div flex-row">
            <img class="reial-icon-img" src="./reialIcon.png" alt="">
            <span class="nam-disc-price-span pro-price-span ">{{this.proPrice}}</span>
        </div>
    </div>
  </div>
</template>
<script>
// abs-elment"  style="top: 100px; left: 0px"
export default {
    props:[ "proName","proPrice","proDisc"],
  components: {},
  data() {
    return {
        activeElement:null,
      //propreties
    };
  },
  methods: {

  },
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
    .abs-elment{
        position: absolute;
    }
.poster-container-div{
    position: relative;
    height: 700px;
    width: 500px;
    /* border: 1px solid; */
    padding: 0px 20px 20px 20px;
    background-color: #dc5353;
    /* background-image: linear-gradient(to bottom,rgb(255, 255, 255),
     rgb(20, 121, 126)
     ); */
}
.top-left-circle{
    position: absolute;
    top: 0;
    right: 0;
    height: 200px;
    width: 300px;
    border-radius: 0 0 0 100%;
    background-color: #ffffff;
}
.center-circle{
    position: absolute;
    top: 0;
    right: 0;
    height: 500px;
    width: 100%;

    /* background-color: #07451e; */
}
.bottom-more-space-div,
.top-more-space-div{
    flex: 1;
    width: 100%;
    background-color: #363e61;
}
.bottom-more-space-div{
        border-radius: 0 0 0 100%;
    /* background-color:rebeccapurple ; */
}
.moedati-icon-div{
    display: flex;
    justify-content: end;
    height: 100px;
    width: 100%;
    z-index: 1;
    /* background-color: #ccc; */
}
.body-container-div{
    flex: 1;
    width: 100%;
    padding: 10px;
    border-radius: 25px;
    background-image: linear-gradient(to right,rgba(228, 228, 228, 0.8),rgba(255, 255, 255, 0.7));
    color: #363e61;
    z-index: 1;
    font-family: "Almarai";
    
}
.img-outer-div{
    flex: 1;
    width: 100%;
/* background-color: #ccc; */
}
.pro-img{
    width: 100%;
    filter: drop-shadow(10px 10px 5px #ffffff);
}
.pro-name-span{
    font-size: 40px;
    font-weight: bold;
}
.disc-outer-div{
    padding: 0 20px 0 20px;
    margin: 10px 0 10px 0;
    text-align: end;
}
.pro-disc-span{
    font-size: 15px;
}
.price-outer-div{
    padding: 1px 15px 1px 15px;
    background-color: white;
    color: #dc5353;
    border-radius: 10px;
}
.pro-price-span{
font-size: 25px;
font-weight: bold;
}
.reial-icon-img{
    height: 30px;
}
.nam-disc-price-span{
    z-index: 1;

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