<template>
  <div class="widd-container flex-row">
    <img src="./widd1dis.jpg" alt="" class="widd-img">
    <span class="widd-span day-date-span">28</span>
    <span class="widd-span month-date-span">نوفمبر</span>
    <span class="widd-span day-week-date-span">يوم الجمعة</span>
    <span class="widd-span date-time-span">09:00 AM</span>
    <div class="widd-map-place-div flex-row">
        <i class="bi bi-geo-alt-fill flex-row ms-1 me-1"></i>
      <span class="">الدخيــنات</span>
    </div>
    <div class="main-body-div flex-column">
        <span class="top-body-span">
          " الْحَمْدُ لِلّٰهِ الَّذِي أَلَّفَ بَيْنَ الْقُلُوبِ وَجَعَلَ الزَّوَاجَ مِيثَاقًا غَلِيظًا "
        </span>
        <span class="family-name-span">
            أسرة آلـ/ محمد احمد سليمان 
        </span>
        <span>
           تتشرف بدعوتكم لحضور و مشاركة مناسبة زواج أبنهم 
        </span>
        <span class="man-name-span">بدرالدين الصديق محمداحمد سليمان</span>
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
.widd-container{
    position: relative;
    font-family: "Almarai";
    /* padding: 5px; */
}
.widd-img{
    width: 400px;
    /* border-radius: 15px; */
}
.widd-span{
    position: absolute;
    color: #706256;
}
.day-date-span{
    bottom: 257px;
    font-size: 19px;
    font-weight: bold;
    left: 197px;
}
.day-week-date-span{
    bottom: 264px;
    font-size: 14px;
    font-weight: bold;
    left: 254px; 
}
.date-time-span{
    bottom: 262px;
    font-size: 14px;
    font-weight: bold;
    left: 107px; 
}
.month-date-span{
    bottom: 288px;
    left: 186px;
}
.widd-map-place-div{
    position: absolute;
    bottom: 180px ;
    width: 200px;
    color: #706256;
}
.main-body-div{
    position: absolute;
    top: 220px;
    font-size: 15px;
    width: 100%;
    padding: 0 35px 0 35px;
    text-align: center;
    color: #5e605d;
}
.family-name-span{
    font-weight: bold;
    margin-bottom: 5px;
}
.man-name-span{
    font-weight: bold;
    margin-top: 5px;
}
.top-body-span{
    font-size: 12px;
    margin-bottom: 20px;
    color: #83756a;
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