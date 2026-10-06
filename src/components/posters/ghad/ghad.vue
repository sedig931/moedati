<template>
  <div class="main-container-div flex-row">
    <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\img1.png" alt="" class="back-img" />
    <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\img2.png" alt="" class="back-img-1" />

    <div class="title-div-container flex-column">
      <div class="title-header-container flex-row" dir="rtl">
        <span class="header-span">دورة التجميعات المكثفة</span>
        <span class="header-span me-2">SLLE</span>
        <i class="bi bi-mortarboard-fill title-icon ms-2 me-2 flex-row"></i>
      </div>
    </div>
    <div class="txts-div-container flex-column">
      <div class="header-container flex-row" dir="rtl">
        <span class="header-span">خصـــــائص الدورة</span>
        <i class="bi bi-layers mic-icon ms-2 me-2 flex-row"></i>
      </div>
      <div class="txt-body-container flex-column">
        <div class="body-single-txt flex-row" dir="rtl">
          <i class="bi bi-stars flex-row ms-2 me-2 fet-icon"></i>
          <span>التعرف على مفاتيح حل الأسئلة</span>
        </div>
        <div class="body-single-txt flex-row" dir="rtl">
          <i class="bi bi-stars flex-row ms-2 me-2 fet-icon"></i>
          <span>مناقشة النقاط المهمة التي لا يخلو منها الاختبار</span>
        </div>
        <div class="body-single-txt flex-row" dir="rtl">
          <i class="bi bi-stars flex-row ms-2 me-2 fet-icon"></i>
          <span>مناقشة دقيقة لـ case study محاكي الإختبار</span>
        </div>
        <div class="body-single-txt flex-row" dir="rtl">
          <i class="bi bi-stars flex-row ms-2 me-2 fet-icon"></i>
          <span>مجموعة WhatsApp لمناقشة الأسئلة </span>
        </div>
        <div class="body-single-txt flex-row" dir="rtl">
          <i class="bi bi-stars flex-row ms-2 me-2 fet-icon"></i>
          <span>محتوى جديد محدث و مدقق لإجتياز الإختبار بدرجة عالية</span>
        </div>
      </div>
    </div>
    <div class="txts-div-container txts-div-container2 flex-column">
      <div class="header-container flex-row" dir="rtl">
        <span class="header-span">تقــــديم : د/ ام عبدالرحـــمن</span>
        <i class="bi bi-mic-fill flex-row mic-icon ms-2 me-2"></i>
      </div>
      <div class="txt-body-container flex-column">
        <div class="body-single-txt flex-row" dir="rtl">
          <i class="bi bi-stars flex-row ms-1 me-2 fet-icon"></i>
          <span>اخــصائية مختبرات طبية</span>
        </div>
        <div class="body-single-txt flex-row" dir="rtl">
          <i class="bi bi-stars flex-row ms-1 me-2 fet-icon"></i>
          <span>مدرب معتمد حاصل على شهادة</span>
          <span class="eng-span">🥇 TOT 🥇</span>
          <!-- <i class="bi bi-mortarboard-fill flex-row ms-1 me-1"></i> -->
        </div>
        <div class="body-single-txt flex-row" dir="rtl">
          <i class="bi bi-stars flex-row ms-1 me-2 fet-icon"></i>
          <span>خبرة 4 سنوات في تقديم دورات المختبرات الطبية</span>
          <span class="eng-span">🥇 SLLE 🥇</span>
        </div>
      </div>
    </div>
    <div class="contacts-div flex-row">
      <div class="single-contact-div flex-row">
        <span>0541722687</span>
        <i class="bi bi-whatsapp ms-2 me-2 flex-row contact-icon"></i>
      </div>
      <div class="single-contact-div flex-row">
        <span>Online</span>
        <i class="bi bi-camera-video-fill ms-2 me-2 flex-row contact-icon"></i>
      </div>
      <div class="single-contact-div flex-row">
        <span>10 Days</span>
        <i class="bi bi-calendar4-week ms-2 me-2 flex-row contact-icon"></i>
      </div>
    </div>
    <div class="logos-div flex-row">
      <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\schs.png" class="schs-logo" alt="">
      <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\omabd.png" class="schs-logo2" alt="">
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
.main-container-div {
  position: relative;
  height: 700px;
  width: 700px;
  /* border: 2px solid black; */
}
.title-div-container {
  position: absolute;
  /* right: 20px; */
  bottom: 420px;
  width: 400px;
  /* border: 2px solid rgb(26, 183, 117); */
  /* box-shadow: 0 3px 5px rgb(144, 144, 144); */
}
.title-header-container {
  height: 40px;
  width: 100%;
  border-radius: 7px;
  background-image: linear-gradient(
    to top right,
    rgba(39, 132, 232, 0.8) 5%,
    rgba(26, 183, 117, 1)
  );
  /* font-family: "Playpen Sans Arabic", cursive; */
  font-family: "Almarai";
  font-size:20px;
  font-weight: bold;
  color: white;
  box-shadow: 0 3px 5px rgb(188, 188, 188);
}
.txts-div-container {
  position: absolute;
  /* right: 20px; */
  bottom: 245px;
  height: 160px;
  width: 450px;
  /* border: 2px solid rgb(26, 183, 117); */
  border-radius: 10px;
  box-shadow: 0 3px 5px rgb(189, 189, 189);
}
.header-container {
  height: 45px;
  width: 100%;
  border-radius: 7px 7px 0 0;
  background-image: linear-gradient(
    to top right,
    rgba(39, 132, 232, 0.8) 5%,
    rgba(26, 183, 117, 1)
  );
  /* font-family: "Playpen Sans Arabic", cursive; */
  font-family: "Almarai";
  font-size: 19px;
  font-weight: bold;
  color: white;
}
.header-span {
  filter: drop-shadow(0px 0.5555px 1px #292929);
}
.txt-body-container {
  width: 100%;
  height: 100%;
  border-radius: 0 0 7.5px 7.5px;
  background-image: linear-gradient(
    to top right,
    rgba(230, 230, 230, 0.8) 5%,
    rgba(255, 255, 255, 1)
  );
  font-family: "Almarai";
}
.body-single-txt {
  width: 100%;
  font-size: 15px;
  color: #474747;
  justify-content: start;
}
.mic-icon {
  filter: drop-shadow(0px 1px 1px #272727);
  font-size: 17px;
}
.title-icon{
  filter: drop-shadow(0px 1px 1px #272727);
  font-size: 20px;
}
.fet-icon {
  font-size: 13px;
}
.eng-span {
  font-weight: bold;
  font-size: 12px;
}
.txts-div-container2 {
  /* right: 20px; */
  bottom: 115px;
  height: 110px;
  width: 420px;
}
.back-img {
  position: absolute;
  width: 100%;
  height: 100%;
}
.back-img-1 {
  position: absolute;
  height: 350px;
  /* border-left: 3px solid  rgba(26, 183, 117, 1); */
  /* border-bottom: 3px solid  rgba(26, 183, 117, 1);  */
  border-left: 5px solid  rgb(255, 255, 255);
  border-bottom: 5px solid  rgb(255, 255, 255); 
  border-radius: 0 0 0 100%;
  top: 0;
  right: 0;
  box-shadow: 0 2px 3px  rgb(222, 222, 222);
}
.contacts-div {
  position: absolute;
  justify-content: space-evenly;
  bottom: 5px;
  width: 70%;
  height: 25px;
  border-radius: 5px;
  background-image: linear-gradient(
    to top right,
    rgba(39, 132, 232, 0.8) 5%,
    rgba(26, 183, 117, 1)
  );
  box-shadow: 1px 2px 3px rgb(187, 187, 187);

}
.single-contact-div{
  font-size: 14px;
  color: white;
  font-weight: bold;
  filter: drop-shadow(0px 0.555px 0.555px #151515);
}
.contact-icon{
  font-size: 13px;
}
.logos-div{
  position: absolute;
  bottom: 40px;
}
.schs-logo{
  width: 120px;
}
.schs-logo2{
  width: 85px;
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
.back-to-me {
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
