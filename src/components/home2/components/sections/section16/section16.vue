<template>
  <div class="ss16-container" dir="rtl">
    <!-- <div class="ss16-single-card-div flex-row">
        <div class="ss16-img-discount-div flex-row">
            <img src="https://cdn.files.salla.network/products/1157822896/4a558325-029e-4c8a-b0ea-907fc6be8e38-original.webp" alt="" class="ss16-img">
        </div>
        <div class="ss16-txts-div">
            <div class="ss16-name-div">
                <span>BS10500 9 kW Max Gasoline Generator with Electric Start and Copper-Wire Alternator</span>
            </div>
            <div class="ss16-price-div flex-row">
                <span class="ss16-price-title-span">تخفيض</span>
                <div class="price-discount-div flex-row">
                    <div class="price-reyal-div discount-price-reyal-div flex-row">
                        <span class="ss16-price-span">4,979.50</span>
                    </div>
                    <div class="price-reyal-div  flex-row">
                        <span class="ss16-discount-price-span">4,232.58</span>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
    ss16Products:[
        {
            img:'https://cdn.files.salla.network/products/1157822896/4a558325-029e-4c8a-b0ea-907fc6be8e38-original.webp',
            name:'مولد كهرباء بنزين BS10500 بقدرة قصوى 9 كيلوواط، تشغيل كهربائي، ملف نحاسي',
            price:4330,
            link:'https://moedati.com/ar/مولد-كهرباء-بنزين-bs10500-بقدرة-قصوى-9-كيلوواط،-تشغيل-كهربائي،-ملف-نحاسي/p1657935936'
        },
        {
            img:'https://cdn.salla.sa/YgXdEO/products/Zp00tRJsm4FNZKatFSU3tk7qBDIQmFjY3hxAOozU.jpg',
            name:'ماكينة غسيل ضغط عالي بنزين 200 بار للمزارع والسيارات والمعدات BS-180DSP',
            price:1350,
            link:'https://moedati.com/ar/ماكينة-غسيل-ضغط-عالي-بنزين-200-بار-للمزارع-والسيارات-والمعدات-bs-180dspbs-180dsp/p1395756505'
        },
        {
            img:'https://cdn.salla.sa/YgXdEO/82106e63-df6d-44f3-837b-dfafbba4e2bf-1000x983.34540188269-P07wUEUuinqSZFfLgQURKMTc1QX1xx7KlSza8WA6.jpg',
            name:'كماشة كبس مواسير PEX متعددة المقاسات للسباكة الاحترافية YT-21731',
            price:1950,
            link:'https://moedati.com/ar/كماشة-كبس-مواسير-pex-متعددة-المقاسات-للسباكة-الاحترافية-yt-21731yt-21731/p2108862084'
        },
        {
            img:'https://cdn.salla.sa/YgXdEO/14692979-d105-4070-b69d-ce72dbfaa1e9-1000x750-TggtoK6PYmfC2aI9U5cTDUTjBrZYIzdXAubfs1lK.jpg',
            name:'ماكينة لحام مواسير بلاستيك YT-82251BS',
            price:160,
            link:'https://moedati.com/ar/ماكينة-لحام-مواسير-بلاستيك-yt-82251bsyt-82251bs/p770563509'
        },
        {
            img:'https://cdn.files.salla.network/products/1157822896/35852f51-68ef-4c9b-a62a-f24696f13cca_559x509.webp',
            name:'كومبريسور هواء كهربائي 50 لتر 2 حصان 10 بار TX2065-50',
            price:800,
            link:'https://moedati.com/ar/كومبريسور-هواء-كهربائي-50-لتر-2-حصان-10-بار-tx2065-50/p610726096'
        },
        {
            img:'https://cdn.files.salla.network/products/1157822896/746561f4-0435-4942-aef6-f3bed9ad0ab8_610x437.webp',
            name:'آلة قطع الأسفلت تعمل بالديزل 14 حصانًاقصى قطر للقرص 20 بوصة BS-Q500D',
            price:3500,
            link:'https://moedati.com/ar/آلة-قطع-الأسفلت-تعمل-بالديزل-14-حصانًاقصى-قطر-للقرص-20-بوصة-bs-q500d/p2026996844'
        },
        {
            img:'https://cdn.salla.sa/YgXdEO/59e84965-574b-4c9e-b3e5-afa16bb9d792-1000x750-6BxqmKJuNYkthxv3P4XUF29IFpbv6XhPsnMWdQvR.jpg',
            name:'YT-74753 قفازات عمل بوليستر مطلية PU مقاس 10',
            price:6,
            link:'https://moedati.com/ar/yt-74753-قفازات-عمل-بوليستر-مطلية-pu-مقاس-10yt-74753/p1245050163'
        },
        {
            img:'https://cdn.salla.sa/YgXdEO/a33259c3-88a3-4162-a3ba-095e6a718058-1000x750-qoQf7XPCohfBQYMUHyVDQ7EtsfVVj4hDiMrJAWNk.jpg',
            name:'YT-60622 185x36Tx 20mm شفرة TCT للخشب',
            price:25,
            link:'https://moedati.com/ar/yt-60622-185x36tx-20mm-شفرة-tct-للخشبyt-60622/p1554425904'
        },
        {
            img:'https://cdn.salla.sa/YgXdEO/9d1eeb5c-cc0b-4b0e-9102-6c9b33817911-1000x750-VKg7N21bsb7Y9zGY20PSi3UfGcFgXe4BbeKBCTwF.jpg',
            name:'YT-82826 صاروخ شحن 5 بوصة 18 فولت بدون سلك لقص وجلخ المعادن',
            price:355,
            link:'https://moedati.com/ar/yt-82826-صاروخ-شحن-5-بوصة-18-فولت-بدون-سلك-لقص-وجلخ-المعادنyt-82826/p250156499'
        },
        {
            img:'https://cdn.salla.sa/YgXdEO/516466fd-f358-4c05-bf32-c12b2ca89599-1000x750-cenQ2X5o8ba8LrFe40brAjy6PuOCVnylwEE3hgVP.jpg',
            name:'حذاء سلامة منخفض الرقبة S3 مقاس 46 YT-80559',
            price:85,
            link:'https://moedati.com/ar/حذاء-سلامة-منخفض-الرقبة-s3-مقاس-46-yt-80559yt-80559/p2020256613'
        },
        {
            img:'https://cdn.salla.sa/YgXdEO/0a90b422-1722-4146-b084-76f09fdaee0b-1000x1000-am0Fke3mZliPHmxezUclJByFBav2sPEMpBqRNdvT.jpg',
            name:'قرص قطع إينوكس 230x1.8x22.23ملم  YT-61068',
            price:4.85,
            link:'https://moedati.com/ar/قرص-قطع-إينوكس-230x1.8x22.23ملم-yt-61068yt-61068/p1199468090'
        },
    ]
      //propreties
    };
  },
  methods: {
    sedigAddTax (price) {
        return Math.round(price * 1.15 * 100) / 100;
    },
    sedigAddTaxWithDisc (price) {
        price = price - (price * 15) / 100;
        return this.sedigAddTax(price);
    },
    ss16PushCard(){
        const ss16CardsContainer = document.querySelector('.ss16-container');
        this.ss16Products.forEach((product,i)=>{
            ss16CardsContainer.insertAdjacentHTML('beforeend',`
                <div class="ss16-single-card-div flex-row" 
                     onclick="window.location.href ='${product.link}'"
                >
                    <div class="ss16-img-discount-div flex-row">
                        <img src="${product.img}" alt="" class="ss16-img">
                    </div>
                    <div class="ss16-txts-div">
                        <div class="ss16-name-div">
                            <span>
                                ${product.name}
                            </span>
                        </div>
                        <div class="ss16-price-div">
                            <span class="ss16-price-title-span flex-row">تخفيض</span>
                            <div class="price-discount-div flex-row">
                                <div class="price-reyal-div discount-price-reyal-div flex-row">
                                    <span class="ss16-price-span">
                                        ${this.sedigAddTax(product.price)}
                                    </span>
                                </div>
                                <div class="price-reyal-div  flex-row">
                                    <span class="ss16-discount-price-span">
                                        ${this.sedigAddTaxWithDisc(product.price)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `); 
        });
    },
    ss16ContainerMove() {
      const slider = document.querySelector(".ss16-container");
      let isDown = false;
      let hasDragged = false;
      let startX;
      let scrollLeft;
      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        hasDragged = false;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => (isDown = false));
      slider.addEventListener("mouseup", () => (isDown = false));
        slider.addEventListener("click", (e) => {
            if (hasDragged) {
            e.preventDefault();
            e.stopPropagation();
            hasDragged = false;
            }
        }, true);
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; // scroll speed
        if (Math.abs(x - startX) > 5) {
            hasDragged = true;
        }
        slider.scrollLeft = scrollLeft - walk;
      });
    },
  },
  mounted() {
    this.ss16PushCard();
    this.ss16ContainerMove();
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
/* .ss16-container{
    width: 100%;
    padding: 25px 0 25px 0;
    background-image: linear-gradient(
    to left,
    rgb(255, 255, 255) 25%,
    rgb(240, 240, 240) 40%,
    rgb(255, 255, 255) 96%
  );
} */
.ss16-container {
    padding: 35px;
    background-image: linear-gradient(
    to left,
    rgb(255, 255, 255) 25%,
    rgb(240, 240, 240) 40%,
    rgb(255, 255, 255) 96%
    );
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.ss16-container::-webkit-scrollbar {
  display: none;
}
.ss16-container > div {
  margin: 15px auto;
}
.ss16-container * {
  user-select: none;
  -webkit-user-drag: none;
}
.ss16-single-card-div{
    height: 170px;
    width: 370px;
    min-width: 370px;
    margin: 0 12px 0 12px;
    border: 1px solid #e0e0e0;
    background-color: white;
    border-radius: 30px;
    box-shadow: 0 2px 10px rgb(214, 214, 214);
    cursor: pointer;
}
.ss16-single-card-div:hover .ss16-img{
    transform: scale(0.9);
}
.ss16-single-card-div:hover{
    box-shadow: 0 2px 10px rgb(186, 186, 186);
}
.ss16-img-discount-div{
    position: relative;
    flex: 0.5;
    height: 100%;
}
.ss16-img{
    max-height: 90%;
    max-width: 90%;
    transition: transform 0.5s;
    border-radius: 12px;
}
.ss16-txts-div{
    flex :1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 20px 10px 20px 10px;
    color: #474747;
}
.ss16-name-div{
    width: 100%;
    text-align: start;
    font-size: 14px;
    font-weight: bold;
}
.ss16-price-div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.ss16-price-title-span{
  background-color: yellow;
  color: rgb(179, 179, 60);
  padding: 1px 10px 1px 10px;
  border-radius: 15px;
  border: 1px solid rgb(243, 237, 195);
  height: 25px;
  font-size: 13px;
}
.price-reyal-div{
    min-width: 60px;
    height: 25px;
    margin: 0 5px 0 5px;
    padding: 0 10px 0 10px;
    border-radius: 15px;
    font-size: 13px;
    background-color: rgba(168, 239, 168, 0.4);
    color: #1e7733;
}
.discount-price-reyal-div{
    background-color: rgba(239, 168, 168, 0.4);
    color: #e43232;
}
.ss16-discount-price-span .ss16-price-span{
    margin: 0 2px 0 2px;
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
