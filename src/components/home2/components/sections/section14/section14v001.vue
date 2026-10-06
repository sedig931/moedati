<template>
  <div class="ss14-container flex-row" dir="rtl">
    <div class="ss14-inner-container flex-row"></div>
    <!-- <span class="ss14-star-icon flex-row">★★★★</span>
                        <span class="ss14-star-icon flex-row">☆</span> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      ss14CutomerData: [
        {
          name: "فهد العتيبي",
          stars: 1,
          img: "https://cdn.files.salla.network/products/1157822896/2abaff9c-d860-4e54-8d5f-8cb3cd79c3ab_317x269.webp",
          comment: "تعامل راق شكرا",
        },
        {
          name: "أبو ناصر",
          stars: 2,
          img: "https://cdn.files.salla.network/products/1157822896/cd1c4888-88ab-48c5-9958-ff1004cd37f0_326x274.webp",
          comment: "أول مرة أطلب من المتجر بس يمكن موفقين",
        },
        {
          name: "عبدالله الحربي",
          stars: 3,
          img: "https://cdn.assets.salla.network/prod/admin/cp/assets/images/avatar_male.png",
          comment: "الطلب وصل والسعر نفسه سعر المعرض",
        },
        {
          name: "أحمد محمود",
          stars: 4,
          img: "https://cdn.assets.salla.network/prod/admin/cp/assets/images/avatar_male.png",
          comment: "بصراحة متجر محترم والمنتج جالي زي ما هو بالظبط",
        },
        {
          name: "محمد السيد",
          stars: 4,
          img: "https://cdn.files.salla.network/products/1157822896/cbfed521-3d46-4489-a963-79686990214c_316x286.webp",
          comment: "أسعار كويسة وخدمة العملاء متعاونة",
        },
        {
          name: "محمود حسن",
          stars: 5,
          img: "https://cdn.assets.salla.network/prod/admin/cp/assets/images/avatar_male.png",
          comment: "الشحن تاخر يوم بس الجودة ممتازة",
        },
        {
          name: "أبو عمر",
          stars: 5,
          img: "https://cdn.files.salla.network/products/1157822896/71dd9625-924c-4426-9ad5-9d4de9bfb598_323x273.webp",
          comment: "تعامل محترم وأسعار مناسبة",
        },
        {
          name: "خالد الشامي",
          stars: 4,
          img: "https://cdn.assets.salla.network/prod/admin/cp/assets/images/avatar_male.png",
          comment: "متجر موثوق وخدمة ممتازة من الطلب للاستلام",
        },
        {
          name: "أحمد عصام",
          stars: 4,
          img: "https://cdn.files.salla.network/products/1157822896/088039bc-96e7-49cc-a45a-bb38f230ce5e_322x288.webp",
          comment: "تجربة شراء ممتازة وإن شاء الله هطلب تاني",
        },
        {
          name: "علي الزهراني",
          stars: 5,
          img: "https://cdn.salla.sa/customer_profiles/X4ptzdjRPodCnbSpSCcp7aZTZxRnEj5S4pCuDhTC.jpg",
          comment: "فنانة",
        },
        {
          name: "Fatimah Al jaffar",
          stars: 5,
          img: "https://cdn.salla.sa/customer_profiles/kvuRIxtbqk5YHzy7qZS2CuzSNs2fXO2EJyTENm0X.jpg",
          comment: "المتجر ثقة",
        },
        {
          name: "محمد",
          stars: 5,
          img: "https://cdn.assets.salla.network/prod/admin/cp/assets/images/avatar_male.png",
          comment: "",
        },
      ],
      //propreties
    };
  },
  methods: {
    ss14setCustomers() {
      const customersContainer = document.querySelector(".ss14-inner-container");
      this.ss14CutomerData.forEach((customer, i) => {
        customersContainer.insertAdjacentHTML(
          "afterbegin",
          `
                <div class="ss14-single-cutomer-card flex-column">
                <div class="ss14-c-top-info">
                <div class="ss14-c-img-div flex-row">
                    <img src="${customer.img}" alt="" class="ss14-c-img">
                </div>
                <div class="ss14-cti-txts-div">
                    <span class="ss14-c-name-span">
                    ${customer.name}
                    </span>
                    <div class="ss14-stars-div flex-row" id ="ss14-stars-${i}" >

                    </div>
                </div>    
                </div>
                <div class="ss14-completed-order">
                    <img src="https://cdn.files.salla.network/products/1157822896/ac978e22-8448-4a2a-ae5a-4e97c98085c3_877x853.webp" alt="" class="ss14-order-done-img">
                    <span class="ss14-completed-order-span">طلب مكتمل</span>
                </div>
                <div class="ss14-txt-body-div">
                    <p class="ss14-body-txt">
                    ${customer.comment}
                    </p>
                </div>
                </div>
                `,
        );
      });
    },
    ss14animation() {
      const content = document.querySelector(".ss14-inner-container");
      const clone = content.cloneNode(true);
      content.parentElement.appendChild(clone);
      let x = 0;
      const speed = 0.6;
      function animate() {
        x -= speed;
        const contentWidth = content.offsetWidth;
        if (Math.abs(x) >= contentWidth) {
          x = 0;
        }
        content.style.transform = `translateX(${x}px)`;
        clone.style.transform = `translateX(${x + contentWidth}px)`;
        requestAnimationFrame(animate);
      }
      animate();
    },
    ss14setStars() {
      this.ss14CutomerData.forEach((customer, i) => {
        const elemId = `ss14-stars-${i}`;
        const eleStars = document.getElementById(elemId);
        console.log(elemId);
        console.log(eleStars);

        for (let index = 0; index < customer.stars; index++) {
          eleStars.insertAdjacentHTML(
            "afterbegin",
            `<span class="ss14-star-icon flex-row">★</span>`,
          );
        }
      });
    },
  },
  mounted() {
    this.ss14setCustomers();
    this.ss14setStars();
    this.ss14animation();
  },
};
</script>
<style>
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
.ss14-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 150px;
  z-index: 1;
}
.ss14-inner-container {
  position: absolute;
}
.ss14-single-cutomer-card {
  height: 95px;
  width: 200px;
  min-width: 200px;
  border-radius: 12px;
  box-shadow: 0 2px 7px rgb(213, 213, 213);
  padding: 5px 10px 5px 10px;
  margin: 15px;
  cursor: pointer;
}
.ss14-c-top-info {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}
.ss14-c-img-div {
  height: 100%;
  align-items: flex-start;
  margin: 0px 10px 0 10px;
}
.ss14-c-img {
  height: 35px;
  width: 35px;
  box-shadow: 0 1px 2px rgb(187, 187, 187);
  border-radius: 6px;
}
.ss14-cti-txts-div {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.ss14-c-name-span {
  font-size: 13px;
  height: 20px;
  color: #747474;
}
/* .ss4-stars-div{
} */
.ss14-star-icon {
  font-size: 11px;
  margin: 1px;
  color: #ffc107;
  height: 11px;
}
.ss14-completed-order {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 2px 10px 2px 10px;
  font-size: 10px;
  color: #1ff010;
}
.ss14-order-done-img {
  height: 10px;
  margin: 0 2px 0 2px;
}
.ss14-completed-order-span {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;
}
.ss14-txt-body-div {
  flex: 0.5;
  width: 100%;
  font-size: 11px;
  display: flex;
  align-items: center;
  color: #747474;
  padding: 0px 10px 0 10px;
}
.ss14-body-txt {
  margin: 0;
  padding: 0;
  line-height: 1.3;
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
