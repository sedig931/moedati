<template>
  <div class="qrcode-container-div flex-column">
    <div class="dana-icon-div flex-row">
        <img src="C:\Users\danaglobPC1\Documents\dana-global\src\assets\brandsicons\danaglobal.png" alt="" class="dana-icon-img">
    </div>
    <div class="qr-img-div flex-row">
        <img src="./imgs/khobarqrcode.png" alt="" class="qr-img">
    </div>

    <div class="txts-div flex-column" dir="rtl">
        <span> عزيزنا العميل،،   </span>
        <span> نعتز برأيك دومــاً </span>
        <span> فضلاً امسح الكود و قيّم تجربتك معنا   </span>
    </div>
    <div class="txts-div flex-column">
        <span>Dear customer, we always value your opinion</span>
        <span>Please scan the code and rate your experience with us</span>
    </div>
    <div class="show-rooms-name flex-row">
      <span class="show-room-name-span">@khobar</span>
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
.qrcode-container-div{
  position: relative;
    height: 850px;
    width: 450px;
    border: 4px solid rgb(175, 175, 175);
    border-radius: 15px;
    padding: 40px 0 40px 0;
}
.dana-icon-div{
    width: 90%;
    padding: 20px 0 20px;
    background-color: rgb(247, 247, 247);
    border-radius: 15px;
    margin-bottom: 20px;
}
.dana-icon-img{
    width: 300px;
}
.qr-img-div{
    width: 100%;
}
.qr-img{
    border: 4px solid rgb(212, 212, 212);
    border-radius: 15px;
    width: 80%;
}
.txts-div{
    margin-top: 20px;
    width: 90%;
    /* border: 1px solid; */
    font-size: 19px;
    font-family: "Almarai";
    /* color: #3f3f3f; */
    color: #00a1a2;
    /* text-align: center; */
    align-items: flex-start;
    font-weight: bold;
    /* background-color: rgb(235, 235, 235); */
}
.show-rooms-name{
  position: absolute;
  bottom: 0;
  margin-bottom: 5px;
}
.show-room-name-span{
  font-size: 10px;
  color: #9f9f9f;
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