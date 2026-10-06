<template>
  <div class="ss5-container">
    <!-- <div class="single-card-div flex-column">
        
    </div> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      products2 : [
  { 
    sku:'YT-39011',
      name: "طقم عدة معزول YT-39011", 
      price: 2010,
      link: "https://moedati.com/ar/%D8%B7%D9%82%D9%85-%D8%B9%D8%AF%D8%A9-%D9%85%D8%B9%D8%B2%D9%88%D9%84/p1495657801?from=search-bar" ,
      imglink:"https://cdn.salla.sa/YgXdEO/7934f334-4034-4a21-9187-85335e471527-1000x1000-VSfyYkhl6E5UHL6UH25leIlWYh3Sp1dvXPsE3ej3.png",
      discri:"العلامة التجارية: ياتو - بولندا ، رمز المنتج: YT-39011 ، المعيار: CE - أوروبا | VDE ١٠٠٠ فولت ، التفاصيل الإجمالية: ٣٩ قطعة ، المادة: CrV، S2، CrV 6150 ، سعة العزل: ١٠٠٠ فولت (باستثناء جهاز الاختبار الكهربائي)"
  },
  { 
      sku:'YT-80627',
      name: "حذاء أمان رياضي YT-80627", 
      price: 155, 
      link: "https://moedati.com/ar/%D8%AD%D8%B0%D8%A7%D8%A1-%D8%A3%D9%85%D8%A7%D9%86-%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A-pubs-sbp-%D9%85%D9%82%D8%A7%D8%B3-46/p711646061?from=search-bar" ,
      imglink:"https://cdn.salla.sa/YgXdEO/2e5bab62-fe5d-4144-ac2e-dcbec58c397e-1000x750-QUYfAUIV6r7be3647EgWW7bP2pbk9f2Ed0wQ9RHA.jpg",
      discri:"العلامة التجارية: ياتو ، المقاس: ٤٦ ، السلسلة: PUBS ، فئة أحذية السلامة: SBP ، المعيار: EN ISO ٢٠٣٤٥:٢٠١١ ، طول القدم: ٣٠٫٢ سم ، طول النعل: ٣٠٫٨ سم"
  },
  { sku:'YT-82976',
      name: "قاعدة لفرشة الزاوية YT-82976", 
      price: 210, 
      link: "https://moedati.com/ar/%D9%82%D8%A7%D8%B9%D8%AF%D8%A9-%D9%84%D9%81%D8%B1%D8%B4%D8%A9-%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-230-%D9%85%D9%85-yato-%D9%85%D9%84%D8%AD%D9%82%D8%A7%D8%AA-%D8%A7%D8%AF%D9%88%D8%A7%D8%AA-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9-yt-82976/p1863252749?from=search-bar" ,
      imglink:"https://cdn.salla.sa/YgXdEO/fdd0a0bf-68ec-4326-8d98-39c2cf7e7fd8-1000x750-fHABEzDZdv8XUawPYwPFeAaMBJyjlRd0wsA0wRgB.jpg",
      discri:"حامل عالمي للعمل مع جلاخة زاوية. قاعدة متينة مصنوعة من الفولاذ المصبوب، ومُدمجة مع ملزمة سريعة الحركة. تسمح مقاطع الدعم الكبيرة ذات المقطع العرضي ونابض الإرجاع المزدوج للجلاحة بالعمل بوزن كبير. زاوية القطع الأفقية مُحددة بدقة بفضل الأقراص."
  },
  {
    sku:'YT-05631',
      name: "مجموعة مفاتيح سداسية طويلة YT-05631", 
      price: 30, 
      link: "https://moedati.com/ar/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D9%85%D9%81%D8%A7%D8%AA%D9%8A%D8%AD-%D8%B3%D8%AF%D8%A7%D8%B3%D9%8A%D8%A9-%D8%B7%D9%88%D9%8A%D9%84%D8%A9-9-%D9%82%D8%B7%D8%B9-15-10-%D9%85%D9%84%D9%85/p402563408?from=search-bar" ,
      imglink:"https://cdn.salla.sa/YgXdEO/37c6f899-866b-4251-a43f-53cac7745715-1000x750-weYEUJlrIrJtXndW5uV995Dvo0zFvBX3jTno0M5z.jpg",
      discri:"تأتي المجموعة في علبة بلاستيكية عملية وسهلة الاستخدام، مع علامات ملونة على المفاتيح، مما يُسهّل عليك البحث عن المقاس المناسب. مصنوعة من فولاذ S2 عالي الجودة، يتميز بالمتانة والمرونة"
  },
  { 
    sku:'60780',
      name: "مجموعة مفكات 50 قطعة - CRV 60780", 
      price: 80, 
      link: "https://moedati.com/ar/مجموعة-مفكات-50-قطعة-crv/p45050264" ,
      imglink:"https://cdn.salla.sa/YgXdEO/d204301c-1753-4cae-9241-182dab4032b9-500x375-1C0hujGw2xt34gGX7AU39hUonBNxkfBW4YSOEo6H.jpg",
      discri:""
  },
  { 
    sku:'YT-82780',
    name: "مجموعة مثقاب لاسلكي ، مع بطارية وشاحن ، 40 نيوتن YT-82780", 
    price: 310, 
    link: "https://moedati.com/ar/مجموعة-مثقاب-لاسلكي-18v-مع-بطارية-وشاحن-40-نيوتن-متر/p832747631" ,
    imglink:"https://cdn.salla.sa/YgXdEO/3c916eb4-9831-4889-9f7f-55ecdf9dabcf-500x375-zrK2IhL82nmUhs7yZUWfO6fTZ8IRKjoVNBj5hbgY.jpg",
    discri:"مثقاب/مفك براغي قوي ومتعدد الاستخدامات من ماركة ياتو، بجهد ١٨ فولت، مزود بعلبة تروس فولاذية متينة. مثالي لحفر المعادن والخشب وربط البراغي."
  },
  { 
    sku:'YT-81983BS',
    name: "مثقاب ألماسي 2800W - أقصى قطر للحفر 300 ملم YT-81983BS", 
    price: 1185, 
    link: "https://moedati.com/ar/مثقاب-ألماسي-2800w-أقصى-قطر-للحفر-300-ملم/p928140594" ,
    imglink:"https://cdn.salla.sa/YgXdEO/a0323085-442e-4385-8b2a-d41fe769b18c-500x375.45454545455-bVOKSNMV5mr2J9B8PVZmqWahSVmGQUt2vhuXzFPC.jpg",
    discri:"مثقاب الماس Yato YT-81983BS أداة قوية ومتعددة الاستخدامات، مناسبة للاستخدام المهني. يتميز بمحرك عالي الأداء يوفر أداءً فعالاً في الحفر في المواد الصلبة."
  },
  { 
    sku:'YT-09033',
    name: "خزانة أدوات مع مساحة تخزين إضافية YT-09033", 
    price: 2766, 
    link: "https://moedati.com/ar/خزانة-أدوات-مع-مساحة-تخزين-إضافية/p1083029310" ,
    imglink:"https://cdn.salla.sa/YgXdEO/3ced2764-ab9a-45b5-ab2e-a571b2701018-500x375-t8w9mFxbTCISjuvBKbAodEWNkN6lNk71MSamex2x.png",
    discri:"٥ أدراج صغيرة: الأبعاد الداخلية ٥٣٣ × ٣٩١ × ٥٨ مم ، درج متوسط: الأبعاد الداخلية ٥٣٣ × ٣٩١ × ١٢٨ مم ، درج كبير: الأبعاد الداخلية ٥٣٣ × ٣٩١ × ١٩٥ مم ، أرفف قابلة للقفل مصممة للأدوات الأكبر حجمًا."
  },
  { 
    sku:'YT-58955',
    name: "بلوك سلسلة 5.0 طن YT-58955", 
    price: 1050, 
    link: "https://moedati.com/ar/بلوك-سلسلة-50-طن/p683354526",
    imglink:"https://cdn.salla.sa/YgXdEO/2365cc63-2ae6-4527-8df2-ea5edb2d816f-500x500-M0hABYpdxDFBpAhjP6iY8eSQPxlZMjHq6mJYCjkR.jpg",
    discri:"رباط سلسلة يدوي مصمم للاستخدام المكثف في الظروف الصناعية، وكذلك في ورش وخدمات الميكانيكا. فعّال في أعمال النقل. لرفع البضائع بدقة ونقلها أفقيًا."
  },
  { 
    sku:'YT-38881',
    name: "مجموعة مقابس YT-38881", 
    price: 624, 
    link: "https://moedati.com/ar/مجموعة-مقابس-14-،-38-،-12-129-قطعة/p993391963",
    imglink:"https://cdn.salla.sa/YgXdEO/e70e7757-2c80-42d1-b6c4-43fd28d34d3a-500x375-ovLf3O20V6wMy7xlaQEI41tOqmGDcJkUTS76RgBa.jpg",
    discri:"تتكون مجموعة أدوات ياتو من ١٢٩ قطعة، موضوعة في علبة بلاستيكية عملية. صُنعت هذه الأدوات بدقة من مواد تضمن موثوقيتها."
  },
  { 
    sku:'YT-82175BS',
    name: "منشار ميتري YT-82175BS", 
      price: 940, 
      link: "https://moedati.com/ar/منشار-ميتري-305-ملم-1800w-مع-ليزر/p1925066002" ,
      imglink:"https://cdn.salla.sa/YgXdEO/c3394dc0-88ad-4bfd-8ac7-b6659f1b6179-500x375-r5DaTqv6by6CIPrtq9OI3gICeXSHYWHqVf1x3hgo.jpg",
      discri:"مفيد لأعمال البناء. يوفر معالجة دقيقة وسريعة للمواد ذات المقاطع العرضية الكبيرة."
    },
    { 
      sku:'22130',
    name: "مجموعة مثاقيب ملتوية 22130", 
    price: 8, 
    link: "https://moedati.com/ar/مجموعة-مثاقيب-ملتوية-hss-15-65-ملم-13-قطعة/p1829635508" ,
    imglink:"https://cdn.salla.sa/YgXdEO/1b948bd5-0a08-4e97-8f32-91921e913927-500x375-8Sqnd52CLhfrq2kfcuxwXFd6SoGqmJkmX54EMuNZ.jpg",
    discri:"مجموعة مثاقيب ملتوية"
  },
  { 
    sku:'YT-24225',
    name: "خرطوم هواء PVC مع وصلات 10 ملم × 20 متر YT-24225", 
    price: 95, 
    link: "https://moedati.com/ar/خرطوم-هواء-pvc-مع-وصلات-10-ملم-20-متر/p1004357096" ,
    imglink:"https://cdn.salla.sa/YgXdEO/b1fa111c-e5f4-4e66-b345-9df16e07da81-500x375-eOFCXOXxHeuWU3w0PcSO1BrEDnFyvx6RtLeUWFzb.jpg",
    discri:""
  },
  { 
    sku:'YT-33015',
    name: "مجموعة فورستنر 5 قطع 15، 20، 26، 30، 35 ملم YT-33015", 
    price: 84, 
    link: "https://moedati.com/ar/مجموعة-فورستنر-5-قطع-15،-20،-26،-30،-35-ملم/p499428529" ,
    imglink:"https://cdn.salla.sa/YgXdEO/5c30a000-202b-4793-bfd6-32da6fbd139f-500x375-2W5PJU9LT3rnxFlnlInHufvQpeqMQBSu2QpFeNwG.jpg",
    discri:""
  },
  { 
    sku:'YT-73127',
    name: "مقياس مسافات بالليزر 60 متر YT-73127", 
    price: 260, 
    link: "https://moedati.com/ar/مقياس-مسافات-بالليزر-60-متر/p80782292" ,
    imglink:"https://cdn.salla.sa/YgXdEO/be4ee9bd-fde2-443e-b33d-96b7cbd44a30-500x375-9cI1Ho6uhmq2bF3YUj2mtVwdmKPAJPg0xc88w8qf.jpg",
    discri:""
 }
],
      //propreties
    };
  },
  methods: {
    sedigAddTax(price){
    return Math.floor((price + (price * 0.15)) * (100 +0.1 )) / 100;
  },
    sedigAddTaxWithDisc(price){
    price = price - (price * 15 / 100);
    return this.sedigAddTax(price);
  },
  makeSS5ContainerMove(){
    const slider = document.querySelector('.ss5-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', e => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => isDown = false);
    slider.addEventListener('mouseup', () => isDown = false);
    slider.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll speed
      slider.scrollLeft = scrollLeft - walk;
      });
      requestAnimationFrame(() => {
        slider.scrollTo({
          left: 500,
          behavior: 'smooth'
          });
          });
          },
          pushProductsTosec5(){
            const cardsContEle = document.querySelector(".ss5-container");
            for (const [i,product] of this.products2.entries()){
              cardsContEle.insertAdjacentHTML(
                "afterbegin",
                `  
          <div class="single-card-div flex-column">
            <div class="sedig-cards-image-div flex-row">
            <img class="product-img" src="${product.imglink}" alt="" />
            </div>
            <div class="body-div flex-column">
            <div class="name-disc-div flex-column rtl-desi">
            <span class="mycard-name-product-span">
            ${product.name}
            </span>
            <span class="mycard-body-product-span">
            ${product.discri}
            </span>
            </div>

            <div class="sedig-price-div flex-row">
            <div class="sedig-single-price-div flex-row">
            <span class="sedig-card-product-price-span">
            ${this.sedigAddTaxWithDisc(product.price)}
            </span>
            <i class="sicon-sar my-sicon-sar"></i>
            </div>
            <div class="sedig-single-price-div sedig-single-old-price-div flex-row">
            <span class="sedig-card-product-price-span sedig-card-product-old-price-span">
            ${this.sedigAddTax(product.price)}
            </span>
            <i class="sicon-sar my-sicon-sar sedig-card-product-old-price-span"></i>
            </div>
            </div>

            <div class="sedig-cardicon-add-to-card-div flex-row">
            <div class="cart-icon-div sedig-cards-btns-hover flex-row">
            <i class="inline-block sicon-cart2"></i>
            </div>
            <div class="add-to-card-div sedig-cards-btns-hover flex-row"
            onclick='window.location.href="${product.link}";'
            >
            <span class="add-to-card-span">شراء الآن</span>
            </div>

            </div>

            </div>
            </div>
          `
        );
        if(i === 6){
          cardsContEle.insertAdjacentHTML(
          "beforeend",
          `
          <div class="single-card-div single-card-div-last-one flex-column">
          <div class="ss5-other-items-imgs flex-row">
          <div class="ss5-single-item-other  flex-row"
          onclick='window.location.href="${this.products2[6].link}";'
          >
            <img src="${this.products2[6].imglink}"  alt="" class="ss5-single-other-item-img">
          </div>
          <div class="ss5-single-item-other ss5-img-tansme flex-row"
          onclick='window.location.href="${this.products2[7].link}";'
          >
            <img src="${this.products2[7].imglink}"  alt="" class="ss5-single-other-item-img">
          </div>
          <div class="ss5-single-item-other flex-row"
          onclick='window.location.href="${this.products2[8].link}";'
          >
            <img src="${this.products2[8].imglink}"  alt="" class="ss5-single-other-item-img">
          </div>
          <div class="ss5-single-item-other ss5-img-tansme flex-row"
          onclick='window.location.href="${this.products2[9].link}";'
          >
            <img src="${this.products2[9].imglink}"  alt="" class="ss5-single-other-item-img">
          </div>
          <div class="ss5-single-item-other flex-row"
          onclick='window.location.href="${this.products2[10].link}";'
          >
            <img src="${this.products2[10].imglink}"  alt="" class="ss5-single-other-item-img">
          </div>
          <div class="ss5-single-item-other ss5-img-tansme flex-row"
          onclick='window.location.href="${this.products2[11].link}";'
          >
            <img src="${this.products2[11].imglink}"  alt="" class="ss5-single-other-item-img">
          </div>
        </div>
        <div class="ss5-btn-show-more-div flex-row"
        onclick='window.location.href="https://moedati.com/ar/redirect/pages/571218989";'
        >
          مشاهدة المزيد
        </div>
        </div>
        `
        );
          break;
        }

      }
    },
  },
  mounted() {
    this.pushProductsTosec5();
    this.makeSS5ContainerMove();
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

/* ------allrady added don't copy this.. */
.single-card-div {
  height: 570px;
  min-width: 360px;
  max-width: 360px;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgb(218, 218, 218);
  justify-content: space-between;
  cursor: pointer;
}
.single-card-div:hover .product-img {
  max-height: 90%;
  max-width: 90%;
}
.single-card-div:hover {
  border-color: rgb(255, 255, 255);
  box-shadow: 0 3px 7px rgb(87, 87, 87);
}
.sedig-cards-image-div {
  flex: 1;
  /* min-height:100%; */
  width: 100%;
  border-radius: inherit;
}
.product-img {
max-height:350px;
  max-width: 100%;
  transition: max-height 0.5s , max-width 0.5s;
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
}
.mycard-name-product-span {
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0 5px 0;
}
.mycard-body-product-span {
  font-size: 13px;
}
.sedig-price-div{
 font-size: 25px;
 /* background-color: bisque; */
}
.sedig-single-old-price-div{
  margin: 0 3px 0 3px;
}
.sedig-card-product-price-span {
  font-weight: bold;
  margin: 3px;
}
.sedig-card-product-old-price-span{
  opacity: 0.5 !important;
  text-decoration: line-through;
  font-size: 20px;
}
.sedig-cardicon-add-to-card-div {
  height: 45px;
  width: 90%;
  padding: 0 0 15px 0;
  color:white;
}
.cart-icon-div {
  width: 45px;
  height: 100%;
  margin: 10px 10px 0 10px;
  border-radius: 15px;
  border: 1px solid #ffffff;
  background-image: linear-gradient(to top, #e32c2c, #fdb0ad);
}
.add-to-card-div {
  flex: 1;
  height: 40px;
  margin-top: 10px;
  background-image: linear-gradient(to top, #e32c2c, #fdb0ad);
  border-radius: 10px;
  border: 1px solid #ffffff;
  font-size: 18px;
}
.sedig-cards-btns-hover:hover {
  background-image: linear-gradient(to top right, #ffffff,#ffffff);
color: #e32c2c;
border-color: #e32c2c;
}
.sedig-showmore-btn{
height : 50px;
width : 200px;
border: 1px solid #ffffff;
background-image: linear-gradient(to top, #e32c2c, #fdb0ad);
color : rgb(255, 255, 255);
border-radius: 10px;
cursor: pointer;
margin : 25px 0 0 0 ;
font-size: 20px;
}
.sedig-showmore-btn:hover{
background-image: linear-gradient(to top right, #ffffff,#ffffff);
background-color: white;
color: #e32c2c;
border-color: #e32c2c;
}
/* ----------- */
.sedig-card-anchor{
  /* direction: none; */
  text-decoration: none;
}
/* --------------new , take this--------------------- */
.ss5-container{
  display: flex;
  align-items: center;
  width: 100%;

  flex-wrap: nowrap;            
  gap: 15px;
  overflow-x: auto;            
  -webkit-overflow-scrolling: touch; 
  scrollbar-width: none;       
  -ms-overflow-style: none;  
  padding: 0 20px 0 20px;
  margin: 25px 0 25px 0;
}
.ss5-container::-webkit-scrollbar {    
  display: none;
}
.ss5-container > div {
  margin: 15px auto; 
}
.ss5-container * {
  user-select: none;
  -webkit-user-drag: none;
}
.single-card-div-last-one{
  height: 490px;
}
.ss5-other-items-imgs{
  flex: 0.7;
  width: 80%;
  flex-wrap: wrap;
}
.ss5-single-item-other{
  height: 110px;
  width: 110px;
  margin: 10px;
  box-shadow: 0 2px 7px rgb(172, 172, 172);
  border-radius: 10px;
}
.ss5-single-item-other:hover{
box-shadow: 0 2px 7px rgb(87, 87, 87);
}
.ss5-single-item-other:hover .ss5-single-other-item-img{
  max-width: 80%;
  max-height: 80%;
}
.ss5-single-other-item-img{
  max-width: 90%;
  max-height: 90%;
  transition: max-width 0.5s , max-height 0.5s;
}
.ss5-btn-show-more-div{
  height: 43px;
  width: 80%;
  background-image: linear-gradient(to bottom, #565656, #313131);
  color: white;
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid white;
   /* margin-bottom: 7px; */
  /* font-size: ; */
  transform: translateY(10px);
}
.ss5-btn-show-more-div:hover{
  background-image: none;
  border-color: #313131;
  color: #313131;
}
.ss5-img-tansme{
  transform: translateY(18px);
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