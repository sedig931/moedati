<template>
<div class="logo-container-2 flex-column">
    <div class="logo-container flex-row">
        <div class="left-top-bottom-txts-div flex-column">
            <div class="top-txts-div flex-row">
                <div class="small-word-div-top flex-row">
                    <span>ستـور</span>
                </div>
                <div class="big-word-div flex-row">
                    <span class="big-word-span">مـــــــعـــــداتــك</span>
                </div>
            </div>
            <div class="bottom-txts-div flex-row">
                <div class="big-word-div flex-row">
                    <span class="big-word-span">Moeidatic</span>
                </div>
                <div class="small-word-div-bottom flex-row">
                    <span>store</span>
                </div>
            </div>
        </div>
        <div class="right-icon-div">
            <img class="icon-img" src="./moiedatiIcon.png" alt="">
        </div>
    </div>
    <!-- <div class="insta-colors">

    </div> -->
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
.logo-container{
    height: 250px;
    width: 820px;
    /* border: 1px solid; */
}
.left-top-bottom-txts-div{
    flex: 1;
    height: 100%;
}
.right-icon-div{
    height: 100%;
    width: 250px;
    /* background-color: #ccc; */
}
.top-txts-div,.bottom-txts-div{
    flex: 1;
    width: 100%;
}
.top-txts-div{
    font-size: 80px;
    font-family: "Almarai";
    color: rgb(211, 11, 26);
}
.bottom-txts-div{
    font-size: 72px;
    font-family: "Michroma";
    color: rgb(211, 11, 26);
}
.big-word-div,.small-word-div{
    height: 100%;
}
.big-word-div{
    font-weight: bold;
}
.small-word-div-top{
    height: 100%;
    align-items: flex-end;
    padding:0 3px 25px 3px;
    font-size: 26px;
}
.small-word-div-bottom{
    height: 100%;
    align-items: flex-end;
    padding:0 3px 22px 3px;
    font-size: 26px;
}
.icon-img{
    height: 250px;
}
.insta-colors{
    height: 700px;
    width: 700px;
    margin: 30px;
     background-image: linear-gradient(240deg,rgba(84, 90, 206, 1) 0%, rgba(218, 46, 123, 1) 56%, rgba(254, 207, 107, 1) 100%);
     /* background-image: linear-gradient(to bottom,
     #545ace,
     #da2e7b,
     #fecf6b
     ); */

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