<template>
<div class="outer-threebanar-container-div flex-row">
    <div class="background-shape-div">
        <div class="single-sqr-shape left-left-single-sqr-shape"></div>
        <div class="single-sqr-shape left-center-single-sqr-shape"></div>
        <div class="single-sqr-shape left-right-single-sqr-shape"></div>
        <div class="single-sqr-shape right-left-single-sqr-shape"></div>
        <div class="single-sqr-shape right-center-single-sqr-shape"></div>
        <div class="single-sqr-shape right-right-single-sqr-shape"></div>
    </div>
  <div class="threebanar-container-div">
        <div class="single-card-div flex-column">
          <div class="image-div flex-row">
           <img class="product-img" src="./YT-22451.jpg" alt="" />
          </div>
          <div class="body-div flex-column" dir="rtl">
            <div class="name-disc-div flex-column rtl-desi">
              <span class="mycard-name-product-span">طقم كماشة</span>
              <span class="mycard-body-product-span"
                >
                كماشة ضغط بسقاطة مزودة بقوالب قابلة للتبديل لضغط أكثر أنواع الموصلات شيوعًا. 
                </span
              >
            </div>
            <div class="sedig-price-div flex-row">
              <span class="sedig-card-product-price-span">150</span>
              <img class="reial-icon" src="./reialIcon4b4545.png" alt="">
            </div>
          </div>
          <div class="sedig-cardicon-add-to-card-div flex-row">
            <div class="cart-icon-div flex-row">
              <i class="bi bi-cart3 flex-row"></i>
            </div>
            <div class="add-to-card-div flex-row">
              <span>رؤية المزيد</span>
            </div>
          </div>
        </div>
        <div class="single-card-div single-card-div-center flex-column">
          <div class="image-div flex-row">
           <img class="product-img" src="./YT-05631.jpg" alt="" />
          </div>
          <div class="body-div flex-column" dir="rtl">
            <div class="name-disc-div flex-column rtl-desi">
              <span class="mycard-name-product-span mycard-name-product-span-center ">مجموعة مفاتيح سداسية </span>
              <span class="mycard-body-product-span mycard-body-product-span-center"
                >تأتي المجموعة في علبة بلاستيكية عملية وسهلة الاستخدام، مع علامات ملونة على المفاتيح، مما يُسهّل عليك البحث عن المقاس المناسب. مصنوعة من فولاذ S2 عالي الجودة، يتميز بالمتانة والمرونة</span
              >
            </div>
            <div class="sedig-price-div flex-row">
              <span class="sedig-card-product-price-span">29</span>
              <img class="reial-icon reial-icon-center" src="./reialIcon4b4545.png" alt="">
            </div>
          </div>
          <div class="sedig-cardicon-add-to-card-div sedig-cardicon-add-to-card-div-center flex-row">
            <div class="cart-icon-div flex-row">
              <i class="bi bi-cart3 flex-row"></i>
            </div>
            <div class="add-to-card-div flex-row">
              <span>رؤية المزيد</span>
            </div>
          </div>
        </div>
        <div class="single-card-div flex-column">
          <div class="image-div flex-row">
           <img class="product-img" src="./YT-82976.jpg" alt="" />
          </div>
          <div class="body-div flex-column" dir="rtl">
            <div class="name-disc-div flex-column rtl-desi">
              <span class="mycard-name-product-span">
                قاعدة لفرشة الزاوية 230 مم
              </span>
              <span class="mycard-body-product-span">
                حامل عالمي للعمل مع جلاخة زاوية. قاعدة متينة مصنوعة من الفولاذ المصبوب، ومُدمجة مع ملزمة سريعة الحركة. تسمح مقاطع الدعم الكبيرة ذات المقطع العرضي ونابض الإرجاع المزدوج للجلاحة بالعمل بوزن كبير.
              </span>
            </div>
            <div class="sedig-price-div flex-row">
              <span class="sedig-card-product-price-span">210</span>
              <img class="reial-icon" src="./reialIcon4b4545.png" alt="">
            </div>
          </div>
          <div class="sedig-cardicon-add-to-card-div flex-row">
            <div class="cart-icon-div flex-row">
              <i class="bi bi-cart3 flex-row"></i>
            </div>
            <div class="add-to-card-div flex-row">
              <span>رؤية المزيد</span>
            </div>
          </div>
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
.outer-threebanar-container-div{
  position: relative;
  height: 100vh;
  width: 100%;
  /* background-color: #555; */
}
.background-shape-div{
  position: absolute;
  height: 100%;
  width: 100%;
}
.single-sqr-shape{
  position: absolute;
  /* top: 100px;
  left: 150px; */
  height: 300px;
  width: 300px;
  border: 2px solid rgb(228, 228, 228);
  border-radius: 15px;
  z-index: 0;
}
.left-left-single-sqr-shape{
  top: 70px;
  left: 200px;
}
.left-center-single-sqr-shape{
  top: 120px;
  left: 250px;
}
.left-right-single-sqr-shape{
  top: 180px;
  left: 300px;
}

.right-left-single-sqr-shape{
  bottom: 30px;
  right: 180px;
   /* height: 400px;
  width: 400px; */
}
.right-center-single-sqr-shape{
  bottom: 80px;
  right: 130px;
  /* height: 400px;
  width: 400px;*/
} 
.right-right-single-sqr-shape{
  bottom: 130px;
  right: 80px;
  /* height: 400px;
  width: 400px; */
}

.threebanar-container-div{
  width: 100%;
  justify-content: end;
  display:flex;
  justify-content: center;
  align-items: flex-end;
}

.single-card-div {
  height: 520px;
  width: 350px;
  /* border: 2px solid; */
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgb(218, 218, 218);
  cursor: pointer;
  background-color: white;
  z-index: 1;
}
.single-card-div-center{
  height: 650px;
  width: 430px;
  box-shadow: 0 3px 15px rgb(91, 224, 202);
}
.single-card-div:hover {
  box-shadow: 0 3px 15px rgb(91, 224, 202);
}
.image-div {
  flex: 1;
  width: 100%;
  align-items: start;
  border-radius: inherit;
  padding-top: 20px;
  /* margin-top: 20px; */
  /* background-color: aliceblue; */
}
.product-img {
  width: 100%;
  /* border-radius: inherit; */
  /* border-radius: 15px; */
}
.body-div {
  width: 90%;
  color: rgb(74, 74, 74);
  font-family: "Almarai";
}
.rtl-desi{
  align-items: start;
  text-align: start;
}
.name-disc-div {
  width: 100%;
  /* align-items: end; */
  /* text-align: end; */
  /* padding: 10px 20px 10px 20px; */
  /* background-color: rgb(155, 154, 154); */
}
.mycard-name-product-span {
  font-size: 25px;
  font-weight: bold;
  margin: 5px 0 5px 0;
}
.mycard-name-product-span-center {
   font-size: 30px;
}
.mycard-body-product-span {
  font-size: 13px;
}
.mycard-body-product-span-center{
  font-size: 17px;
}
.reial-icon{
  height: 30px;
}
.reial-icon-center{
  height: 35px;
}
.sedig-card-product-price-span {
  font-weight: bold;
  font-size: 25px;
  /* margin: 10px 0 10px 0; */
}
.sedig-card-product-price-span {
font-size: 30px;
}
.sedig-cardicon-add-to-card-div {
  height:30px;
  width: 90%;
  /* padding: 0 0 15px 0; */
  margin: 0 0 7px 0;
  font-family: "Almarai";
  font-size: 16px;
}
.sedig-cardicon-add-to-card-div-center{
  height: 35px;
  font-size: 20px;
}
.cart-icon-div {
  width: 45px;
  height: 100%;
  margin: 0 10px 0 10px;
  border-radius: 10px;
  background-color: rgb(40, 121, 123);
  color: white;
  /* box-shadow: 3px 3px 5px rgb(192, 192, 192); */

}
.add-to-card-div {
  flex: 1;
  height: 100%;
  background-color: rgb(185, 185, 185);
  border-radius: 10px;
  background-color: rgb(40, 121, 123);
  color: white;
  /* box-shadow: 3px 3px 5px rgb(209, 209, 209); */
}
/* .sedig-card-anchor{
  text-decoration: none;
  color: inherit;
} */

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