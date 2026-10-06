/* Add custom Js styles below */
/* Add custom Js styles below */
// document.querySelector('head').insertAdjacentHTML('afterend',
//  `
//  <!-- TikTok Pixel Code Start -->
// <script>
// !function (w, d, t) {
// w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
// var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
// ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
// ttq.load('D5S8RVRC77U7L31UJMN0');
// ttq.page();
// }(window, document, 'ttq');
// </script>
// <!-- TikTok Pixel Code End -->
//  `);
//"use strict"
//const script = document.querySelector("script");
// script.src = "index.js";
//script.defer = true;
const sedigAddTax = function (price) {
  // return Math.floor((price + (price * 0.15)) * (100 +0.1 )) / 100;
  return Math.round(price * 1.15 * 100) / 100;
};
const sedigAddTaxWithDisc = function (price) {
  price = price - (price * 10) / 100;
  return sedigAddTax(price);
};
//---sedig body Script----//
//---sedig body Script----//
//---sedig body Script----//
var ss1Lang = [];
var ss1Arabic = [
  "معدات قوية.. لإنجاز",
  "أعمالك بثقة !",
  "أسعار منافسة و أدوات لا غنى عنها لكل ورشة و مهندس",
  "اكتشف المزيد",
  "معدات صيانة المركبات",
  "ادوات السلامة",
  "ادوات يدوية",
  "ادوات كهربائية",
];
var ss1Eng = [
  "Get your work done with",
  "confidence!",
  "Competitive prices... and indispensable tools for every workshop and engineer",
  "Show More",
  "AUTOMOTIVE REPAIR",
  "SAFETY ITEMS",
  "HAND TOOLS",
  "POWER TOOLS",
];
//---section 2 script lang----//
var ss2Lang = [
  "معدات معتمدة ، تلبي معايير الجودة العالمية ",
  "أدوات يدوية ، كهربائية ، آلات التصنيع",
  " كل ما تبحث عنه في مكان واحد ",
  "أختر الأداء العالي",
  "و ودع الأعطال المتكررة",
];
var ss2Eng = [
  "Certified equipment, conforming to international quality standards",
  "Hand tools, power tools, manufacturing machines",
  "Everything you're looking for in one place",
  "Choose high performance",
  "Say goodbye to frequent breakdowns",
];
//---section 3 script lang----//
var ss3Lang = [
  "مفكات مفاتيح، كماشات، شواكيش، شنط عدد عالية الجودة تضمن متانة وأداء موثوق في مختلف الاستخدامات",
  "مفاتيح هوائية، كمبروسرات، مسدسات هواء، مثاقب، صنفرة هوائية بجودة ممتازة تلائم الاستخدام الاحترافي في الورش والمصانع",
  "رافعات عالية الجودة تلبي معايير السلامة وتضمن أداءً موثوقًا وطويل الأمد",
  "اكتشف المزيد",
];
var ss3Eng = [
  "High-quality screwdrivers, wrenches, pliers, hammers, and tool kits ensure durability and reliable performance in various applications",
  "High-quality pneumatic wrenches, compressors, air guns, drills, and air sanders suitable for professional use in workshops and factories",
  "High-quality cranes that meet safety standards and ensure reliable, long-lasting performance",
  "Find out more",
];
//---section 4 script lang----//
var ss4Lng = ["التميز", "أدوات ذات جودة عالية", "جهة توزيع معتمدة رسمياً", "تسوق الآن"];
var ss4Eng = ["PREMIUM", "QUALITY TOOLS", "AUTHORIZED DISTRIBUTOR", "SHOP NOW"];

const params = new URLSearchParams(window.location.search);
// const lang = params.get('lang');
const lang = document.documentElement.lang;
console.log(params);
if (lang === "en") {
  ss1Lang = ss1Eng;
  ss2Lang = ss2Eng;
  ss3Lang = ss3Eng;
  ss4Lng = ss4Eng;
} else if (lang === "ar") {
  ss1Lang = ss1Arabic;
} else {
  ss1Lang = ss1Arabic;
}
//---check if url in home page or not----//
function isHomePage() {
  const { pathname, search } = window.location;
  // Remove possible trailing slashes ("/" or "")
  const cleanPath = pathname.replace(/\/+$/, "");
  // It's homepage if:
  // 1. Path is empty or root ("/")
  // 2. Only query params (like ?lang=en) are present
  return cleanPath === "" || cleanPath === "/moedati" || cleanPath === "/ar" || cleanPath === "/en";
}
//---check if url in home page or not----//
//---section 1 script----//
//---section 1 script----//
//---section 1 script----//
function ss1ClassiMove() {
  const slider = document.querySelector(".ss1-cato-container");
  let isDown = false;
  let startX;
  let scrollLeft;
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => (isDown = false));
  slider.addEventListener("mouseup", () => (isDown = false));
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
}
// function makeCenterImgsStartMotion(){
// const centerImgsElements = document.querySelectorAll('.ss1-center-single-img');
// for(let i = 0 ; i < centerImgsElements.length ; i++){
// setTimeout(()=>{
//         centerImgsElements[i].classList.remove('ss1-center-pro-img-motion');
// },500 + i * 600)
// }
// }
function ss1showClassiContainer() {
  document.querySelectorAll(".ss1-classifi-container").forEach((singleDiv, i) => {
    setTimeout(
      () => {
        singleDiv.classList.remove("ss1-hide-classifi-container");
      },
      100 + i * 150,
    );
  });
}
const ss1SlideImgs = [
  [
    "https://cdn.salla.sa/YgXdEO/ddd2a2de-ce1f-4724-9319-36ee5a0b0b33-1000x801.85185185185-aRCKvKFVqP4w71VuRK7EVurJT7wvdrwGpZ58Usfy.png",
    "https://cdn.files.salla.network/products/1157822896/18ac5754-23a4-4adf-996d-f938b4b110b9_559x509.webp",
    "https://cdn.files.salla.network/products/1157822896/409ef301-e8ef-45af-9089-6abf36be0a9c_558x496.webp",
    "https://cdn.files.salla.network/products/1157822896/faac9b52-10f7-4e43-be9b-003645ac522b_670x548.webp",
  ],
  [
    "https://cdn.salla.sa/YgXdEO/fd3169ce-1608-4e16-af99-0035c92ee148-419.75308641975x1000-1DJktiSvkKlgFZ33iYckejVknTA2y161TjYG7x88.png",
    "https://cdn.salla.sa/YgXdEO/c86c206a-cffa-46d8-9c49-b9af9740b2fe-1000x750-rs1aUdu5o4TyWFysrJn5GbskxbPPOCTun82Ud2UV.png",
    "https://cdn.salla.sa/YgXdEO/347fda50-c1a8-4de3-ac82-daf9bf914766-1000x750-efxpKYPe40vdUAFqqFx8JpcwdNWoly6oORpclgF0.png",
    "https://cdn.salla.sa/YgXdEO/50ff7d7a-7e05-4ab4-a9ca-6fd507988614-627.16049382716x1000-JTo8S7dEF4Y2lelXQuEbAueNgJa6ZdYBUenU0fUo.png",
  ],
  [
    "https://cdn.salla.sa/YgXdEO/72af9f26-c9f9-4013-9ea0-59bc2a664d21-1000x921.2962962963-iaOAgRdPHarHVmOMNwywDIgD6ZiHQszDqAQhokbU.png",
    "https://cdn.salla.sa/YgXdEO/acafc422-9768-4684-a839-ad8e645c4333-1000x1000-HMxySdUyVFH0fJYdWH9nEFqdcQJ0Xy14phbqnlwL.png",
    "https://cdn.salla.sa/YgXdEO/e4a11d56-1c01-4e67-9b78-fb5b4443c2fb-1000x1000-ZuU5NZBGhbs9XZbRkMjVejnYWsMivPZjcyX1ugWQ.png",
    "https://cdn.salla.sa/YgXdEO/74dc261e-895d-4ac2-a502-c9b144adc1b4-1000x808.33333333333-f3V4Q2Ogdm8lkSALe1NZqPLnLzu25esKn1lEhmH7.png",
  ],
  [
    "https://cdn.salla.sa/YgXdEO/2fb59650-0c7c-4d2b-a892-7a5c0a40141e-1000x1000-GbRjsDLBjnPyTbJYJoC9tkQdPfuI0WMCKXSiDyvH.png",
    "https://cdn.salla.sa/YgXdEO/2209bfc3-d038-4b33-8784-000a36d1bf43-1000x750-Snbhasre4ef8g9UXEj9iI1ilqXOB3CLM3vjkwXRt.png",
    "https://cdn.salla.sa/YgXdEO/592a07ec-b853-4327-8f81-47cfd7408d61-1000x750-kINnlnsmgE0IeCrG2mBZWfOvzXGWKIoer0XG0RRn.png",
    "https://cdn.salla.sa/YgXdEO/a7539925-72dd-4e91-96f2-4aa509fa71e8-1000x750-fsxHYbFIVJILpLLgNL2Z6H2D0OMj02PMiR066iAd.png",
  ],
];
const ss1ProductsLink = [
  [
    "https://moedati.com/ar/كومبريسور-هواء-100-لتر-tx2065-100tx2065-100/p1107730822",
    "https://moedati.com/ar/كومبريسور-هواء-كهربائي-50-لتر-2-حصان-10-بار-tx2065-50/p610726096",
    "https://moedati.com/ar/كومبريسور-هواء-كهربائي-24-لتر-2-حصان-10-بار-tx2065-24/p1766162752",
    "https://moedati.com/ar/كومبريسور-هواء-بنزين-70-لتر-7-حصان-10-بار-tx2065-70g/p1089699292",
  ],
  [
    "https://moedati.com/ar/مصباح-يدوي-قابل-لإعادة-الشحن-yato-ادوات-إضائة-yt-085601/p1093003632",
    "https://moedati.com/ar/ضوء-عمل-yato-ادوات-إضاءة-yt-82961/p1364941389",
    "https://moedati.com/ar/كشاف-رأس-yato-ادوات-إضاءة-yt-08592/p1219428294",
    "https://moedati.com/ar/كشاف-محمول-yato-ادوات-إضائة-yt-81811/p1860658540",
  ],
  [
    "https://moedati.com/ar/خزانة-عدد-7-أدراج-مع-الأدوات-189-قطعة/p1951833528",
    "https://moedati.com/ar/خزانة-دوارة-ادوات-يدوية-yt-09031/p1990240317",
    "https://moedati.com/ar/yato-خزانة-ذات-أدراج-ادوات-يدوية-yt-5530s/p486319776",
    "https://moedati.com/ar/خزانة-عدد-بشعار-مضيءled/p2126917821",
  ],
  [
    "https://moedati.com/ar/رافعة-شوكية-yt-37492yt-37492/p2023608964",
    "https://moedati.com/ar/رشاش-ضغط-2-لتر-8950989509/p639750191",
    "https://moedati.com/ar/صندوق-أدوات-yt-08977yt-08977/p535555239",
    "https://moedati.com/ar/مكنسة-كهربائية-خاصة-للورش---yt-85715bsyt-85715bs/p1972828477",
  ],
];
var ss1ActiveSlideIndex = 0;
var ss1Interv = {};
const ss1SetActiveSlide = function () {
  document.querySelector(".ss1-imgs-div").innerHTML = ``;
  document.querySelector(".ss1-imgs-div").insertAdjacentHTML(
    "afterbegin",
    // <img src="${ss1SlideImgs[ss1ActiveSlideIndex][0]}" alt="" class="ss1-single-slide-img">
    `
      <div class="ss1-single-slide-div flex-row ss1-active-slide" id="ss1-slide-0">
        <div class="ss1-single-slide-imgs-div">
          <img src="${ss1SlideImgs[ss1ActiveSlideIndex][0]}" alt="" class="ss1-single-img ss1-single-img-rl ss1-hide-slide-img"
           onclick='window.location.href="${ss1ProductsLink[ss1ActiveSlideIndex][0]}";'
          >
          <img src="${ss1SlideImgs[ss1ActiveSlideIndex][1]}" alt="" class="ss1-single-img ss1-single-img-sm ss1-hide-slide-img"
          onclick='window.location.href="${ss1ProductsLink[ss1ActiveSlideIndex][1]}";'
          >
          <img src="${ss1SlideImgs[ss1ActiveSlideIndex][2]}" alt="" class="ss1-single-img ss1-single-img-sm ss1-hide-slide-img"
          onclick='window.location.href="${ss1ProductsLink[ss1ActiveSlideIndex][2]}";'
          >
          <img src="${ss1SlideImgs[ss1ActiveSlideIndex][3]}" alt="" class="ss1-single-img ss1-single-img-rl ss1-hide-slide-img"
          onclick='window.location.href="${ss1ProductsLink[ss1ActiveSlideIndex][3]}";'
          >
        </div>
      </div>
      `,
  );
  document.querySelectorAll(".ss1-single-img").forEach((ele, index) => {
    setTimeout(
      () => {
        ele.classList.remove("ss1-hide-slide-img");
      },
      400 + index * 100,
    );
  });
};
const ss1RunInerv = function () {
  ss1Interv = setInterval(() => {
    if (ss1ActiveSlideIndex < 3) {
      ss1ActiveSlideIndex++;
    } else ss1ActiveSlideIndex = 0;
    document.querySelectorAll(".ss1-single-img").forEach((ele, index) => {
      ele.classList.add("ss1-hide-slide-img");
    });
    setTimeout(() => {
      ss1SetActiveSlide();
    }, 500);
  }, 6000);
};

//---section 2 script----//
//---section 2 script----//
function changeBackDIRcolor() {
  //check if lang value == en ?
  if (lang === "en") {
    document
      .querySelector(".ss2-right-sqr-banar-div")
      .classList.toggle("ss2-left-sqr-banar-div-bc");
    document
      .querySelector(".ss2-right-sqr-banar-div")
      .classList.toggle("ss2-right-sqr-banar-div-bc");
    document
      .querySelector(".ss2-left-sqr-banar-div")
      .classList.toggle("ss2-right-sqr-banar-div-bc");
    document.querySelector(".ss2-left-sqr-banar-div").classList.toggle("ss2-left-sqr-banar-div-bc");
  }
}

//---section 3 script----//
//---section 3 script----//
var ss3Interv;
var ss3ActiveCardCount = 0;
const ss3RunEnterval = function () {
  ss3Interv = setInterval(() => {
    if (ss3ActiveCardCount < 2) ++ss3ActiveCardCount;
    else ss3ActiveCardCount = 0;
    ss3ShvlView(String(ss3ActiveCardCount));
  }, 4000);
};
function ss3ShvlView(activId) {
  const parent = document.querySelector(".ss3-inner-catog-div");
  const activeCard = document.getElementById("ss3card-" + activId);
  activeCard.classList.add("ss3-tmphide");
  parent.append(activeCard);
  setTimeout(() => {
    activeCard.classList.remove("ss3-tmphide");
  }, 10);
  document.querySelectorAll(".ss3-single-txts-div").forEach((txtDiv) => {
    txtDiv.classList.add("ss3-hide-div");
    if (txtDiv.id === `ss3-txt-div-${activId}`) {
      txtDiv.classList.remove("ss3-hide-div");
    }
  });
  document.querySelectorAll(".ss3-single-shvl-div").forEach((txtDiv) => {
    txtDiv.classList.remove("ss3-active-btn");
    if (txtDiv.id === `ss3btn-${activId}`) {
      txtDiv.classList.add("ss3-active-btn");
    }
  });
  ss3ActiveCardCount = Number(activId);
}
function addEventToShuvlsBtn() {
  document.querySelectorAll(".ss3-single-shvl-div").forEach((shvBtn) => {
    shvBtn.addEventListener("click", (e) => {
      ss3ShvlView(e.target.id[e.target.id.length - 1]);
    });
  });
  document.querySelectorAll(".ss3-mouse-inout").forEach((shvBtn) => {
    shvBtn.addEventListener("mouseenter", (e) => {
      clearInterval(ss3Interv);
    });
    shvBtn.addEventListener("mouseout", (e) => {
      ss3RunEnterval();
    });
  });
}
//---section 3 script----//
//---section 3 script----//

//---section 4 script----//
//---section 4 script----//
let ss4ActiveSlide = 1;
let ss4Interv = {};
const ss4SetActiveSlide = function () {
  ss4ActiveSlide >= 1 ? (ss4ActiveSlide = 0) : ss4ActiveSlide++;
  const ss4Containers = document.querySelectorAll(".ss4-container");
  ss4Containers.forEach((ele, i) => {
    if (Number(ele.id[ele.id.length - 1]) === ss4ActiveSlide) {
      ele.style.display = "flex";
      if (ele.id === "ss4-slide-0") {
        document.querySelector("#ss4-single-point-0").classList.add("ss4-single-point-active");
        document.querySelector("#ss4-single-point-1").classList.remove("ss4-single-point-active");
        setTimeout(() => {
          document.querySelector(".ss4-bottom-span-1").classList.remove("ss4-bottom-span-trans1");
          document.querySelector(".ss4-bottom-span-2").classList.remove("ss4-bottom-span-trans2");
          document.querySelector(".ss4-bottom-span-3").classList.remove("ss4-bottom-span-trans3");
          document.querySelector(".ss4-yato-img").classList.remove("ss4-yato-img-motion");
        }, 100);
        document.querySelector(".ss4-torix-img").classList.add("ss4-yato-img-motion");
        document.querySelector(".ss4-center-copm-img").classList.add("ss4-center-copm-img-motion");
        document.querySelector(".ss4-left-copm-img").classList.add("ss4-left-copm-img-motion");
        document.querySelector(".ss4-right-copm-img").classList.add("ss4-right-copm-img-motion");
      } else {
        document.querySelector("#ss4-single-point-0").classList.remove("ss4-single-point-active");
        document.querySelector("#ss4-single-point-1").classList.add("ss4-single-point-active");
        document.querySelector(".ss4-bottom-span-1").classList.add("ss4-bottom-span-trans1");
        document.querySelector(".ss4-bottom-span-2").classList.add("ss4-bottom-span-trans2");
        document.querySelector(".ss4-bottom-span-3").classList.add("ss4-bottom-span-trans3");
        document.querySelector(".ss4-yato-img").classList.add("ss4-yato-img-motion");
        setTimeout(() => {
          document.querySelector(".ss4-torix-img").classList.remove("ss4-yato-img-motion");
          document
            .querySelector(".ss4-center-copm-img")
            .classList.remove("ss4-center-copm-img-motion");
          document.querySelector(".ss4-left-copm-img").classList.remove("ss4-left-copm-img-motion");
          document
            .querySelector(".ss4-right-copm-img")
            .classList.remove("ss4-right-copm-img-motion");
        }, 100);
      }
    } else {
      ele.style.display = "none";
    }
  });
};
const ss4RunInterval = function () {
  ss4Interv = setInterval(() => {
    ss4SetActiveSlide();
  }, 3000);
};
//---section 4 script----//
//---section 4 script----//

//---section 12 script----//
//---section 12 script----//
const ss12Products = [
  {
    img: "https://cdn.files.salla.network/products/1157822896/b75be85a-699c-4467-8bb4-50e7a7f7a532_1000x750.webp",
    oldPrice: "45",
    newPrice: "43.99",
    link: "https://moedati.com/ar/سكين-قابل-للطي-بشفرة-سوداء-yt-76052/p1004224033",
  },
  {
    img: "https://cdn.files.salla.network/products/1157822896/5b172b8a-9f1d-45ef-8c5b-92698ebf0722_828x899.webp",
    oldPrice: "2100",
    newPrice: "2052.75",
    link: "https://moedati.com/ar/ماكينة-تلميع-وتنظيف-الأرضيات-17-بوصة-1100-واط-bs-a003/p1861422924",
  },
  {
    img: "https://cdn.files.salla.network/products/1157822896/c876d767-c574-4dd7-b494-9358c8e1e69e_595x742.webp",
    oldPrice: "1550",
    newPrice: "1515",
    link: "https://moedati.com/ar/ماكينة-غسيل-ضغط-عالي-إنفرتر-140-بار-3000-واط-للاستخدام-المنزلي-والاحترافي-ies3-2hbies3-2hb/p152241594",
  },
  {
    img: "https://cdn.salla.sa/YgXdEO/ab2b998a-150a-4925-90d2-f3b0ed129e91-1000x733.24572930355-TruenqUHuYfwkjsOgdUop9albATbQhwPVeK3Yot5.png",
    oldPrice: "1750",
    newPrice: "1710",
    link: "https://moedati.com/ar/ضاغط-هواء-tx2065-100tx2065-100/p1107730822",
  },
  {
    img: "https://cdn.salla.sa/YgXdEO/he93ljLORKnzBIhm2YYjTmxBAsz1jDwQBgwe493z.png",
    oldPrice: "2200",
    newPrice: "2150",
    link: "https://moedati.com/ar/خزانة-أدوات-بعجلات/p1676520585",
  },
];
var ss12ActivePro = 0;
var ss12Inerv = {};
function ss12ShowActivePro(ss12ActiveIndex) {
  document.querySelector(".ss12-products-contect-div").innerHTML = "";
  document.querySelector(".ss12-products-contect-div").insertAdjacentHTML(
    "afterbegin",
    `
            <div class="ss12-single-pro-img-div flex-row">
                <img src="${ss12Products[ss12ActiveIndex].img}" alt="" class="ss12-single-pro-img ss12-single-pro-img-scale">
                <div class="ss12-single-old-price-div flex-row">
                    <span class="ss12-old-price-span flex-row">${sedigAddTax(ss12Products[ss12ActiveIndex].oldPrice)}</span>
                    <i class="sicon-sar ss12-raial-icon"></i>
                </div>
                <div class="ss12-single-old-price-div ss12-single-new-price-div flex-row">
                    <span class="ss12-old-price-span ss12-new-price-span flex-row">${sedigAddTaxWithDisc(ss12Products[ss12ActiveIndex].oldPrice)}</span>
                    <i class="sicon-sar ss12-raial-icon"></i>
                </div>
                <div class="ss12-add-to-cart-div">
                    <button class="ss12-add-to-card-btn" 
                    onclick='window.location.href="${ss12Products[ss12ActiveIndex].link}";'
                    >
                         اضافة للسلة
                    </button>
                </div>
            </div>
            `,
  );
  setTimeout(() => {
    document.querySelector(".ss12-single-pro-img").classList.remove("ss12-single-pro-img-scale");
  }, 10);
}
function ss12RunInerv() {
  ss12Inerv = setInterval(() => {
    if (ss12ActivePro < 4) ++ss12ActivePro;
    else ss12ActivePro = 0;
    ss12ShowActivePro(ss12ActivePro);
  }, 4000);
}
//---section 15 script----//
//---section 15 script----//
//---section 15 script----//
function ss15WatchWidth() {
  const ss15CardsDivs = document.querySelectorAll(".ss15-single-card");
  const mq = window.matchMedia("(max-width: 1100px)");
  var ss15ActiveVl = 0;
  var ss15Inerval;
  const ss15StopshvlsFun = function () {
    clearInterval(ss15Inerval);
  };
  const ss15RunshvlsFun = function () {
    ss15Inerval = setInterval(() => {
      if (ss15ActiveVl < 2) ss15ActiveVl++;
      else ss15ActiveVl = 0;
      ss15CardsDivs.forEach((valDiv) => {
        if (valDiv.id !== `ss15-card-${ss15ActiveVl}`) {
          valDiv.classList.add("ss15-hide-val-div");
        } else {
          valDiv.classList.remove("ss15-hide-val-div");
        }
        document.querySelectorAll(".ss15-single-point-div").forEach((el) => {
          el.id === `ss15-p-${ss15ActiveVl}`
            ? el.classList.add("ss15-active-single-point-div")
            : el.classList.remove("ss15-active-single-point-div");
        });
      });
    }, 5000);
  };
  const ss15handleMediaChange = function (e) {
    if (mq.matches) {
      ss15CardsDivs.forEach((valDiv) => {
        if (valDiv.id !== "ss15-card-0") valDiv.classList.add("ss15-hide-val-div");
      });
      ss15RunshvlsFun();
      document.querySelector(".ss15-points-div").classList.remove("ss15-hide-val-div");
    } else {
      ss15CardsDivs.forEach((valDiv) => {
        valDiv.classList.remove("ss15-hide-val-div");
      });
      ss15StopshvlsFun();
      document.querySelector(".ss15-points-div").classList.add("ss15-hide-val-div");
    }
  };
  ss15handleMediaChange(mq);
  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", ss15handleMediaChange);
  }
}
if (isHomePage()) {
  //console.log('You are on the homepage');
  //console.log(window.location.pathname);
  //setTimeout(()=>{
  document.querySelector("header").insertAdjacentHTML(
    "afterend",
    `
<div class="sedig-body-div">
<div class="ss1-container flex-column ss3-mObserve">
<!--
<div class="ss1-back-shape-div ss1-back-shape2-div">
</div>
<div class="ss1-back-shape-div">
</div>
-->
<!-- <img src="https://cdn.files.salla.network/products/1157822896/dfdc96f1-c2aa-4336-aa15-3a2b1730977a-original.webp" alt="" class="ss1-nationalday-img"> -->
<div class="ss1-back-shape-div ss1-back-shape2-div"></div>
<div class="ss1-back-shape-div flex-row">
<!-- <img src="https://cdn.files.salla.network/products/1157822896/46833f0b-9465-4b31-9711-cab4d4937728-original.webp" alt="" class="ss1-nationalday-left-right-img"> -->
</div>
<div class="ss1-back-shape3-div"></div>
<div class="ss1-back-shape4-div flex-row">
<!-- <img src="https://cdn.files.salla.network/products/1157822896/46833f0b-9465-4b31-9711-cab4d4937728-original.webp" alt="" class="ss1-nationalday-left-right-img ss1-nationalday-left-img"> -->
</div>

<div class="ss1-txts-container flex-column">
<div class="ss1-single-txt-div">
<h2 class="ss1-single-span">
${ss1Lang[0]}
</h2>
</div>
<div class="ss1-single-txt-div">
<h2 class="ss1-single-span">
${ss1Lang[1]}
</h2>
</div>
<div class="ss1-single-txt-div">
<span class="ss1-single-span ss1-small-span">
${ss1Lang[2]}
</span>
</div>
<div class="sedig-section1-buy-now-div">
<button class="ss1-buy-now-btn"   onclick='window.location.href="https://salla.sa/moedati/latest-products";'
>${ss1Lang[3]}</button>
</div>
</div>
<div class="ss1-imgs-div flex-row" dir="ltr">
  <!--
  <div class="ss1-tow-img-div ss1-left-tow-img-div">
  <img class="ss1-center-single-img YT-55292-img ss1-center-pro-img-motion" src="https://cdn.salla.sa/YgXdEO/72af9f26-c9f9-4013-9ea0-59bc2a664d21-1000x921.2962962963-iaOAgRdPHarHVmOMNwywDIgD6ZiHQszDqAQhokbU.png" alt=""
              onclick='window.location.href="https://moedati.com/ar/خزانة-عدد-7-أدراج-مع-الأدوات-189-قطعة/p1951833528";'>
  <img class="ss1-center-single-img YT-09031-img ss1-center-pro-img-motion" src="https://cdn.salla.sa/YgXdEO/acafc422-9768-4684-a839-ad8e645c4333-1000x1000-HMxySdUyVFH0fJYdWH9nEFqdcQJ0Xy14phbqnlwL.png" alt=""
              onclick='window.location.href="https://moedati.com/ar/خزانة-دوارة-ادوات-يدوية-yt-09031/p1990240317";'>
  </div>
  <div class="ss1-tow-img-div">
  <img class="ss1-center-single-img YT-828075-img ss1-center-pro-img-motion" src="https://cdn.salla.sa/YgXdEO/e4a11d56-1c01-4e67-9b78-fb5b4443c2fb-1000x1000-ZuU5NZBGhbs9XZbRkMjVejnYWsMivPZjcyX1ugWQ.png" alt=""
              onclick='window.location.href="https://moedati.com/ar/yato-خزانة-ذات-أدراج-ادوات-يدوية-yt-5530s/p486319776";'>
  <img class="ss1-center-single-img YT-09004-img ss1-center-pro-img-motion" src="https://cdn.salla.sa/YgXdEO/74dc261e-895d-4ac2-a502-c9b144adc1b4-1000x808.33333333333-f3V4Q2Ogdm8lkSALe1NZqPLnLzu25esKn1lEhmH7.png" alt=""
              onclick='window.location.href="https://moedati.com/ar/خزانة-عدد-بشعار-مضيءled/p2126917821";'>
  </div>
  -->
</div>

<div class="ss1-cato-container">
      <div class="ss1-classifi-container ss1-hide-classifi-container">
        <div class="ss1-classi-back-img-div flex-row">
          <img
            src="https://cdn.salla.sa/YgXdEO/a4c2cc56-06b8-4237-84e4-a6ba232a890e-666.66666666667x1000-gvllApZWixbqhFyaG1HrfeF0Vx53Kgv7WIcmFbd2.jpg"
            alt=""
            class="ss1-classi-back-img"
          />
        </div>
        <div class="ss1-classi-overlay-div"></div>
        <div class="ss1-cato-imgs-div flex-column">
          <div class="ss1-cato-main-img-div flex-row">
            <img
              src="https://cdn.salla.sa/YgXdEO/7M1BM7bOMMfERhN0ka4zKxOlRRH947YZy94XU6og.png"
              alt=""
              class="ss1-cato-single-main-img"
              onclick="window.location.href = 'https://moedati.com/ar/redirect/categories/540250071'"
            />
          </div>
          <div class="ss1-cato-small-imgs-div flex-row">
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/1e7b6c53-ab7d-47d9-b039-1f02d2adafb4-1000x750-aovugN5mnALPmrTQ5LJ6nOnJjqMlz6Xunte7PTZl.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/fki70xaqJo18vxc18lHy0U9Ox0r4sZnyHR9j3yLx.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/c8b548f2-5bf1-4355-9581-387b3fa2d4b9-1000x958.33333333333-ijA67P7gCiahdiiLrKlDzF8lwFQHhceLzGBtZzvy.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/vvNNwOCIihpaJJS6uNxgIPDayFDefHO79sImqDGm.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
          </div>
        </div>
        <button
          class="ss1-cato-btn"
          onclick="window.location.href = 'https://moedati.com/ar/redirect/categories/540250071'"
        >
          <span class="ss1-ca-btn-span">${ss1Lang[7]}</span>
        </button>
      </div>
      <div class="ss1-classifi-container ss1-hide-classifi-container">
        <div class="ss1-classi-back-img-div flex-row">
          <img
            src="https://cdn.salla.sa/YgXdEO/4a6a243e-5551-4309-9c1f-828d5afc0391-666.66666666667x1000-S4AL9khLZvO0kJNAcoqHPE8YOcMih4cCgfaZqeyl.jpg"
            alt=""
            class="ss1-classi-back-img"
          />
        </div>
        <div class="ss1-classi-overlay-div"></div>
        <div class="ss1-cato-imgs-div flex-column">
          <div class="ss1-cato-main-img-div flex-row">
            <img
              src="https://cdn.salla.sa/YgXdEO/82e1c293-03c3-46ba-8d3c-71dcecf25889-766.66666666667x1000-JFBs8asRdmZGkqS5n8ZwHeZmzv36hvllOLq6dCPQ.png"
              alt=""
              class="ss1-cato-single-main-img"
              onclick="window.location.href = 'https://moedati.com/ar/redirect/categories/1761637467'"
            />
          </div>
          <div class="ss1-cato-small-imgs-div flex-row">
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/8c4abb2a-5845-40a2-9fe0-1f8310b5034d-1000x1000-lVjJjLNHjfkqDRV1Dst5UTztpD01nLMEopUmFjFx.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/592a07ec-b853-4327-8f81-47cfd7408d61-1000x750-kINnlnsmgE0IeCrG2mBZWfOvzXGWKIoer0XG0RRn.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/QzSvhmgMx3g4o6aoo5PCzroHSrfNhPThrpin6z1y.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/RYVJheIWu4eaI2e3nEdGbhuV2WuBpM2ySlf2gnt0.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
          </div>
        </div>
        <button
          class="ss1-cato-btn"
          onclick="window.location.href = 'https://moedati.com/ar/redirect/categories/1761637467'"
        >
          <span class="ss1-ca-btn-span">${ss1Lang[6]}</span>
        </button>
      </div>
      <div class="ss1-classifi-container ss1-hide-classifi-container">
        <div class="ss1-classi-back-img-div flex-row">
          <img
            src="https://cdn.salla.sa/YgXdEO/927785d2-2a20-449b-a917-79f527e983ef-666.66666666667x1000-rpsz41CPg8O0deetOSytvnMCM7kZH3Y3QnIckvr2.jpg"
            alt=""
            class="ss1-classi-back-img"
          />
        </div>
        <div class="ss1-classi-overlay-div"></div>
        <div class="ss1-cato-imgs-div flex-column">
          <div class="ss1-cato-main-img-div flex-row">
            <img
              src="https://cdn.salla.sa/YgXdEO/VEsIx9Wo9MIyCquUNpNFGWPNboy5XnnRo793YZQh.png"
              alt=""
              class="ss1-cato-single-main-img"
              onclick="window.location.href = 'https://moedati.com/ar/عنوان-صحة-ادوات-السلامة/page-199316679'"
            />
          </div>
          <div class="ss1-cato-small-imgs-div flex-row">
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/MsKjH9mphFLebanwAuwT7jf00zzzbeWV9KrkpxYR.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/3chdAzG2wG2BCkGwc2xEeIABpeU0W182oCnHVivM.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/XCRZOvVE4bBZ9Uvv5LPNsWYYIhVKvp1AgcxrxAHk.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/tbuwlcnkO4iyLiaIuowcpg1kWCIDZQj35bcebnOv.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
          </div>
        </div>
        <button
          class="ss1-cato-btn"
          onclick="window.location.href = 'https://moedati.com/ar/عنوان-صحة-ادوات-السلامة/page-199316679'"
        >
          <span class="ss1-ca-btn-span">${ss1Lang[5]}</span>
        </button>
      </div>
      <div class="ss1-classifi-container ss1-hide-classifi-container">
        <div class="ss1-classi-back-img-div flex-row">
          <img
            src="https://cdn.salla.sa/YgXdEO/c263a53c-674f-42fa-8438-13ec66e2d825-666.66666666667x1000-lK8Vsj0s2sEsuTC0xfvPzwrYvDAHzXk0lNhwBkqe.jpg"
            alt=""
            class="ss1-classi-back-img"
          />
        </div>
        <div class="ss1-classi-overlay-div"></div>
        <div class="ss1-cato-imgs-div flex-column">
          <div class="ss1-cato-main-img-div flex-row">
            <img
              src="https://cdn.salla.sa/YgXdEO/e8f6b8ec-fd20-4ef8-957a-f17a372dbf23-1000x750-r4cMayIiKLu7CZ71HfHNMUYcEQcAKEDS3cSipTpD.png"
              alt=""
              class="ss1-cato-single-main-img"
              onclick="window.location.href = 'https://moedati.com/ar/redirect/categories/1058280443'"
            />
          </div>
          <div class="ss1-cato-small-imgs-div flex-row">
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/847568bb-b01e-4a00-9668-54e3d19d9eef-1000x750-blrakC9UHD9ntJkyXmXmUW7DtRD8C689QreXXeCY.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/xIWWbnTADkQDfqqBI51c7f2XKTTMy2Yq9pfZOBwU.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/XpE09WEbaD72R1ZkDk1r6wn7CCKGrFWCwnwGNRnh.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
            <div class="ss1-cato-single-small-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/iNW5mNy1y2EJmE12L0r39IFZLMpfq1gDY5ZYUpdO.png"
                alt=""
                class="ss1-cato-single-small-img"
              />
            </div>
          </div>
        </div>
        <button
          class="ss1-cato-btn flex-row"
          onclick="window.location.href = 'https://moedati.com/ar/redirect/categories/1058280443'"
        >
          <span class="ss1-ca-btn-span flex-row">${ss1Lang[4]}</span>
        </button>
      </div>
      </div>
</div>
<!--  // \\ //  RAMMADAN \\ // \\ -->
<!--  // \\ //  RAMMADAN \\ // \\ -->
   <div class="ss12-outer-container ss3-mObserve">
    <div class="ss12-container flex-row">
        <div class="ss12-back-shape-div2"></div>
        <div class="ss12-back-shape-div"></div>
<!-- backgrond-img deleted -->
        <div class="ss12-contents flex-row">
            <div class="ss12-single-content flex-row" dir="rtl">
                <div class="ss12-products-contect-div flex-row">
                </div>
                <div class="ss12-txts-div flex-column">
  
                    <span class="ss12-top-span">لا تفوت عروض الاسعار </span>
                    <span class="ss12-bottom-span">خصومات تصل حتى 15% !</span>
                    <div class="rs-discount-div flex-row">
                        <span class="rs-10per-span"> %15 </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
<!--  // \\ //  RAMMADAN \\ // \\ -->
<!--  // \\ //  RAMMADAN \\ // \\ -->

<!--  ********* SECTION 15  ********* --> 
<!--  ********* SECTION 15  ********* -->
<!--  ********* SECTION 15  ********* -->
<div class="ss15-container-outer flex-column">
    <div class="ss15-container">
      <div class="ss15-single-card ss15-card-invisible flex-row" id="ss15-card-2">
        <div class="ss15-back-card-div"></div>
        <img
          src="https://cdn.files.salla.network/products/1157822896/f73755fd-f6ab-4ac7-9dc3-21cbdb5bf850-original.webp"
          class="ss15-single-img"
        />
        <div class="ss15-card-txts-div" dir="rtl">
          <span class="ss15-single-card-title-span"> الجودة المضمونة </span>
          <span class="ss15-single-card-body-span">
            نختار المواد بعناية ونلتزم بمعايير تصنيع عالية لضمان أداء يدوم لفترات طويلة</span
          >
        </div>
      </div>
      <div class="ss15-single-card ss15-card-invisible flex-row" id="ss15-card-1">
        <div class="ss15-back-card-div"></div>
        <img
          src="https://cdn.files.salla.network/products/1157822896/d14c67d7-5531-4b65-bd1e-86e7014c3bb9-original.webp"
          class="ss15-single-img"
        />
        <div class="ss15-card-txts-div" dir="rtl">
          <span class="ss15-single-card-title-span"> أداء احترافي </span>
          <span class="ss15-single-card-body-span">
            معدات مصممة لتحمل ظروف العمل الشاقة في الورش والمصانع و المشاريع</span
          >
        </div>
      </div>
      <div class="ss15-single-card ss15-card-invisible flex-row" id="ss15-card-0">
        <div class="ss15-back-card-div"></div>
        <img
          src="https://cdn.files.salla.network/products/1157822896/197e125c-8078-4fc2-b85f-eaa63c290871-original.webp"
          class="ss15-single-img"
        />
        <div class="ss15-card-txts-div" dir="rtl">
          <span class="ss15-single-card-title-span"> تشكيلة متكاملة </span>
          <span class="ss15-single-card-body-span">
            مجموعة واسعة من الأدوات الكهربائية، معدات الحدائق، المولدات، الكومبريسورات والمزيد</span
          >
        </div>
      </div>
    </div>
    <div class="ss15-points-div flex-row">
      <div class="ss15-single-point-div ss15-active-single-point-div" id="ss15-p-0"></div>
      <div class="ss15-single-point-div" id="ss15-p-1"></div>
      <div class="ss15-single-point-div" id="ss15-p-2"></div>
    </div>
  </div>
<!--  ********* SECTION 15  ********* -->
<!--  ********* SECTION 15  ********* -->
<!--  ********* SECTION 15  ********* -->

<!--  // \\ //  section 2 \\ // \\ --> 
<!--  // \\ //  section 2 \\ // \\ --> 

     <div class="ss2-container ss3-mObserve flex-row">
    <div class="ss2-three-banar-container-div">
      <div class="ss2-sqr-banar-div ss2-right-sqr-banar-div ss2-right-sqr-banar-div-bc ss2-right-sqr-banar-div-hidden flex-row">
      <div class="ss2-sqr-back-div ss2-right-sqr-back-div flex-column" dir="ltr">
        <div class="ss2-tow-row-divs flex-row">
          <div class="ss2-left-row-div ss2-my-border-bottom"></div>
          <div class="ss2-right-row-div ss2-right-row-div-right-sqr "></div>
        </div>
      </div>
      <div class="ss2-body-right-sqr-div flex-column">
        <div class="ss2-right-body-sqr-img-div flex-row">
        <div class="ss2-left-sqr-imgs-div flex-row">
          <img class="ss2-left-sqr-img " src="https://cdn.salla.sa/YgXdEO/d28a1155-740e-4015-b876-9938de5e05c9-1000x750-VEW5S4WOBxRvHJhdbwnd4ieGzz5H9foKOZa2G1AB.png" alt="" 
          onclick='window.location.href="https://moedati.com/ar/yt-828075-brushless-impact-wrench/p1409600381";'
          />
        </div>
        <div class="ss2-single-img-left-line ss2-single-img-left-sq-less-height"></div>
        <div class="ss2-left-sqr-imgs-div flex-row">
          <img class="ss2-left-sqr-img" src="https://cdn.salla.sa/YgXdEO/4b21437d-4977-41bb-8e21-39113004d374-1000x750-zDiWGEaDdZuMx16Fl1jL0lYtAi5mW0vfiaJajVr9.png" alt=""
          onclick='window.location.href="https://moedati.com/ar/مجموعة-مفاتيح-ربط-بمسننات-yato-ادوات-يدوية-yt-0208/p1217577328";'
           />
        </div>
        </div>
        <div class="ss2-right-body-sqr-txts-div flex-row">
          <span class="ss2-right-body-sqr-div-span"> ${ss2Lang[0]}</span>
        </div>
      </div>
    </div>
    <div class="ss2-sqr-banar-div ss2-center-sqr-banar-div flex-row">
      <div class="ss2-sqr-back-div ss2-center-sqr-back-div flex-column" dir="ltr">
        <div class="ss2-tow-row-divs flex-row">
          <div class="ss2-left-row-div ss2-my-border-bottom"></div>
          <div class="ss2-right-row-div ss2-my-border-top ss2-border-left"></div>
        </div>
      </div>
      <div class="ss2-center-sqr-body-div flex-column">
        <div class="ss2-center-body-txts-div flex-column">
          <div class="ss2-center-body-single-txts-div flex-row">
<span class="ss2-my-plus-txts">${ss2Lang[1]}</span>
</div>
<div class="ss2-center-body-single-txts-div ss2-center-body-single-txts-bottom-div flex-row">
<span class="ss2-center-body-span"> 
${ss2Lang[2]}
</span>
</div>
</div>
<div class="ss2-center-body-sqr-imgs-div flex-row">
<div class="ss2-center-imgs-div flex-row">
<img class="ss2-center-body-sqr-img" src="https://cdn.salla.sa/YgXdEO/69710425-88b9-4188-89ac-f909e010daa5-1000x750-Cx6QELXUN912fXNfytMsTDSPcHDkvmrIsRV5R0kX.png" alt="" 
          onclick='window.location.href="https://moedati.com/ar/منشار-سلسلة-يعمل-بالبنزين-yato-معدات-بستنة-yt-84910/p265781335";'/>
</div>
</div>
</div>
</div>
<div class="ss2-sqr-banar-div ss2-left-sqr-banar-div ss2-left-sqr-banar-div-bc ss2-left-sqr-banar-div-hidden flex-row">
<div class="ss2-sqr-back-div ss2-left-sqr-back-div flex-column" dir="ltr">
<div class="ss2-tow-row-divs flex-row">
<div class="ss2-left-row-div ss2-left-row-div-left-sqr ss2-my-border-bottom"></div>
<div class="ss2-right-row-div ss2-my-border-top ss2-border-left"></div>
</div>
</div>
<div class="ss2-left-sqr-body-div flex-column">
<div class="ss2-sqr-left-imgs-div flex-row">
<div class="ss2-left-sqr-imgs-div flex-row">
<img class="ss2-left-sqr-img " src="https://cdn.salla.sa/YgXdEO/27c94ac9-747e-49dc-8d80-2a3f8449e37a-1000x750-tKdxe2EphwqUlCzil8v6VJaS1KvTvqKNxE1mKDnj.png" alt="" 
                onclick='window.location.href="https://moedati.com/ar/مجموعة-مفكات-vorel-معدات-يدوية-60780/p45050264";'/>
</div>
<div class="ss2-single-img-left-line "></div>
<div class="ss2-left-sqr-imgs-div flex-row">
<img class="ss2-left-sqr-img " src="https://cdn.salla.sa/YgXdEO/04470244-281a-44d1-bb6e-c6e9755392f6-1000x1000-UrKHkKvMwGcC6vszv01YaU7zdcfRNM2tELauQhla.png" alt="" 
                onclick='window.location.href="https://moedati.com/ar/رافعة-أرضية-طويلة-5-طن-yato-ادوات-المآراب-yt-17226/p653499539";'/>
</div>
<div class="ss2-single-img-left-line "></div>
<div class="ss2-left-sqr-imgs-div flex-row">
<img class="ss2-left-sqr-img " src="https://cdn.salla.sa/YgXdEO/38f477bd-d293-4e67-9cd6-02a69a57d8bc-1000x750-tpfLdHjniaasfJCZsJvr0I88TysjbuMK8qbSJA9Y.png" alt="" 
              onclick='window.location.href="https://moedati.com/ar/زحافة-ورشة-vorel-ادوات-المآراب-81827/p135858415";'/>
</div>
</div>
<div class="ss2-sqr-left-txts-div flex-column">
<span class="ss2-left-sqr-span">${ss2Lang[3]}</span>
<span class="ss2-left-sqr-span ss2-left-bottom-span">${ss2Lang[4]}</span>
</div>
</div>
</div>
</div>
</div>
<!-- ///////\\\\\\ section3 \\\\//// -->
<!-- \\\\\\\////// section3 ////\\\\ -->
<div class="ss3-container flex-row ss3-mObserve ss3-container-hidden">
    <div class="ss3-inner-container flex-column">
     <div class="ss3-catogs-txts-container">
      <div class="ss3-outer-catogs-div flex-row">
      <div class="ss3-inner-catog-div flex-row" dir="ltr">
        <div class="ss3-single-cato-div" id="ss3card-0">
          <div class="sedig-catogery-container-div ss3-catogery-container-div-height flex-row single-img" 
            onclick='window.location.href="https://salla.sa/moedati/redirect/categories/1761637467";'
          >
          <div class="outer-back-ground-shape-div flex-row">
            <div class="sedig-left-line-cat-shape"></div>
            <div class="sedig-bottom-line-cat-shape"></div>
            <div class="back-ground-shape-div flex-row">
              <div class="sedig-left-right-shape-div sedig-left-shape-div "></div>
              <div class="sedig-left-right-shape-div sedig-right-shape-div ">
                <div class="inner-right-shape-div"></div>
              </div>
            </div>
            <div class="bottom-background-shape-div"></div>
          </div>
          <div class="gatogery-body-div flex-column">
            <div class="sedig-cato-imgs-container flex-column">
              <div class="sedig-cato-main-img-div flex-row">
                <img
                  src="https://cdn.salla.sa/YgXdEO/72aa516a-348b-4c24-a570-779b96b777cb-1000x1000-VWjM9qk5g6hx0J5KxOOAdOOYvYgFrvWuNZlX10NX.jpg"
                  alt=""
                  class="sedig-main-cato-img"
                />
              </div>
              <div class="sedig-cato-imgs-div flex-row">
                <div class="sedig-cato-img-div flex-row">
                  <img
                    src="https://cdn.salla.sa/YgXdEO/75a86830-9004-4cf0-9b84-757883419084-1000x750-eWt5c7SuHVLqqL2DrqFa4Je8m7DRVJhMXDPfGeol.jpg"
                    alt=""
                    class="sedig-main-cato-img"
                  />
                </div>
                <div class="sedig-cato-img-div flex-row">
                  <img
                    src="https://cdn.salla.sa/YgXdEO/44cfd57b-3a4f-4112-ad91-a12743f9d587-1000x1000-x2HqSITYxpH73aWOWRPwIbtCUOHLNscTHMz3eMMa.png"
                    alt=""
                    class="sedig-main-cato-img"
                  />
                </div>
                <div class="sedig-cato-img-div flex-row">
                  <img
                    src="https://cdn.salla.sa/YgXdEO/f6efc216-abe8-40f9-9b37-3ed8e4646a18-1000x750-IXkC562deKUoKLpwncD5l2SMUb1WnDQjUmkfoCas.jpg"
                    alt=""
                    class="sedig-main-cato-img"
                  />
                </div>
                <div class="sedig-cato-img-div flex-row">
                  <img
                    src="https://cdn.salla.sa/YgXdEO/ea2004e4-5ac8-47c5-abec-73cd7033fd6d-1000x1000-GUCDqs7h0Jypmkci7CwOPU3mblvEUk8pJGI3AIwW.jpg"
                    alt=""
                    class="sedig-main-cato-img"
                  />
                </div>
              </div>
            </div>
            <div class="sedig-cato-txts flex-column">
              <span class="sedig-cato-span ss3-sedig-cato-span">الأدوات اليدوية</span>
              <span class="sedig-cato-span sedig-cato-span-eng ss3-sedig-cato-span">HAND TOOLS 0</span>
            </div>
          </div>
          </div>
        </div>
       <div class="ss3-single-cato-div" id="ss3card-1">
          <div class="sedig-catogery-container-div flex-row ss3-catogery-container-div-height flex-row single-img-1"
          onclick='window.location.href="https://salla.sa/moedati/redirect/categories/1134363882";'
        >
        <div class="outer-back-ground-shape-div flex-row">
          <div class="sedig-left-line-cat-shape"></div>
          <div class="sedig-bottom-line-cat-shape"></div>
          <div class="back-ground-shape-div flex-row">
            <div class="sedig-left-right-shape-div sedig-left-shape-div ss3-catog-shape-color-2"></div>
            <div class="sedig-left-right-shape-div sedig-right-shape-div ss3-catog-shape-color-2">
              <div class="inner-right-shape-div"></div>
            </div>
          </div>
          <div class="bottom-background-shape-div ss3-catog-shape-color-bottom-2"></div>
        </div>
        <div class="gatogery-body-div flex-column">
          <div class="sedig-cato-imgs-container flex-column">
            <div class="sedig-cato-main-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/1166a361-b48b-4e79-ae3a-ad8162417ddb-1000x750-muzLmamu8mgV9o2zxnl2z8XUnsjR2GXtKqg29Rf2.jpg"
                alt=""
                class="sedig-main-cato-img"
              />
            </div>
            <div class="sedig-cato-imgs-div flex-row">
              <div class="sedig-cato-img-div flex-row">
                <img
                  src="https://cdn.salla.sa/YgXdEO/78a37ad4-32de-4256-99cd-f624fca92da2-1000x750-3X62w2yWKYfMwDqekXBKHvF9CbP7Ts9vi4vXQ8UB.jpg"
                  alt=""
                  class="sedig-main-cato-img"
                />
              </div>
              <div class="sedig-cato-img-div flex-row">
                <img
                  src="https://cdn.salla.sa/YgXdEO/545b25b3-061a-47c5-91fe-5f37114e433f-1000x750-Teq6jwMHcoNcqraSOtA2XokSehqFNMWdeozGP5G5.jpg"
                  alt=""
                  class="sedig-main-cato-img"
                />
              </div>
              <div class="sedig-cato-img-div flex-row">
                <img
                  src="https://cdn.salla.sa/YgXdEO/4f723b23-3e5d-43c8-b6b6-c8797756c9bc-1000x750-XZ3mvqPHmtB9JvXhv6b4vX07kITsWQk37a0qG1rR.jpg"
                  alt=""
                  class="sedig-main-cato-img"
                />
              </div>
              <div class="sedig-cato-img-div flex-row">
                <img
                  src="https://cdn.salla.sa/YgXdEO/1543636f-c710-443b-9cb6-6693f58cd76c-1000x750-oTltzLZ2KVUITjDZSHUOetjzTgr3LpGIMs495NRy.jpg"
                  alt=""
                  class="sedig-main-cato-img"
                />
              </div>
            </div>
          </div>
          <div class="sedig-cato-txts flex-column">
            <span class="sedig-cato-span ss3-sedig-cato-span">معدات تعمل بالهواء</span>
            <span class="sedig-cato-span sedig-cato-span-eng ss3-sedig-cato-span">PNEUNATIC</span>
          </div>
        </div>
      </div>
        </div>
        <div class="ss3-single-cato-div" id="ss3card-2">
        <div class="sedig-catogery-container-div flex-row ss3-catogery-container-div-height single-img-2"
        onclick='window.location.href="https://salla.sa/moedati/redirect/categories/245548943";'>
        <div class="outer-back-ground-shape-div flex-row">
          <div class="sedig-left-line-cat-shape"></div>
          <div class="sedig-bottom-line-cat-shape"></div>
          <div class="back-ground-shape-div flex-row">
            <div class="sedig-left-right-shape-div  sedig-left-shape-div ss3-catog-shape-color"></div>
            <div class="sedig-left-right-shape-div sedig-right-shape-div ss3-catog-shape-color">
              <div class="inner-right-shape-div"></div>
            </div>
          </div>
          <div class="bottom-background-shape-div ss3-catog-shape-color-bottom"></div>
        </div>
        <div class="gatogery-body-div flex-column">
          <div class="sedig-cato-imgs-container flex-column">
            <div class="sedig-cato-main-img-div flex-row">
              <img
                src="https://cdn.salla.sa/YgXdEO/48ac0df5-ca89-43e8-bfd5-69aafa727c6b-1000x1000-VHL5kP3V3lPDXU3KHB0IrX5CzW8sxpsX7DtBuJCE.png"
                alt=""
                class="sedig-main-cato-img"
              />
            </div>
            <div class="sedig-cato-imgs-div flex-row">
              <div class="sedig-cato-img-div flex-row">
                <img
                  src="https://cdn.salla.sa/YgXdEO/839c449d-0288-4f6e-af8f-f8c11e57c8ad-1000x750-WJDmxAxsz6ccxx1feruDxOX6tHI7FiQvVoCFyX4Z.jpg"
                  alt=""
                  class="sedig-main-cato-img"
                />
              </div>
              <div class="sedig-cato-img-div flex-row">
                <img
                  src="https://cdn.salla.sa/YgXdEO/caa08f75-e6b0-4d7d-8cf3-be1012216e3e-1000x750-Fn0hJu7guDk8mp3A5QtvKfmcW8qjFn8loCW1QvLt.jpg"
                  alt=""
                  class="sedig-main-cato-img"
                />
              </div>
              <div class="sedig-cato-img-div flex-row">
                <img
                  src="https://cdn.salla.sa/YgXdEO/3a8acf06-1160-45f8-9c93-4a6faa9e501e-1000x750-iyQIxZPXsQcOdBnnvbvwW2TN0pIQm9SikYFTy1R1.jpg"
                  alt=""
                  class="sedig-main-cato-img"
                />
              </div>
              <div class="sedig-cato-img-div flex-row">
                <img
                  src="https://cdn.salla.sa/YgXdEO/91d0f2e5-acbd-4c7b-9f5b-882eb2116441-1000x750-JVOX4FuTUyECnDKhnMwXPYmBJQRKxDYzOmnvlOdu.png"
                  alt=""
                  class="sedig-main-cato-img"
                />
              </div>
            </div>
          </div>
          <div class="sedig-cato-txts flex-column">
            <span class="sedig-cato-span ss3-sedig-cato-span">معدات الرفع</span>
            <span class="sedig-cato-span sedig-cato-span-eng ss3-sedig-cato-span">LIFTING EQUIPMENT</span>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>  
    <div class="txts-div flex-column">
  <div class="ss3-single-txts-div flex-column ss3-hide-div" id="ss3-txt-div-0">
        <div class="single-txt-div flex-row">
          <span class="ss3-single-txts-span ss3-mouse-inout flex-row" >
            ${ss3Lang[0]}
          </span>
        </div>
      </div>
      <div class="ss3-single-txts-div flex-column ss3-hide-div" id="ss3-txt-div-1">
        <div class="single-txt-div flex-row">
          <span class="ss3-single-txts-span ss3-mouse-inout flex-row" >
          ${ss3Lang[1]}
          </span>
        </div>
      </div>
      <div class="ss3-single-txts-div flex-column" id="ss3-txt-div-2">
        <div class="single-txt-div flex-row">
          <span class="ss3-single-txts-span ss3-mouse-inout flex-row" >
          ${ss3Lang[2]}
          </span>
        </div>
      </div>
<div class="ss3-txts-span-btn-div flex-row">
<span  class="txts-span txts-span-btn ss3-mouse-inout"
onclick='window.location.href="https://moedati.com/ar/redirect/pages/304164840";'
>${ss3Lang[3]}</span>
</div>
    </div>
  </div>
  <div class="ss3-shvls-shomor-div flex-column">
    <div class="ss3-svls-div flex-row">
      <div class="ss3-single-shvl-div ss3-mouse-inout ss3-active-btn" id="ss3btn-0">
      </div>
      <div class="ss3-single-shvl-div ss3-mouse-inout" id="ss3btn-1">
      </div>
      <div class="ss3-single-shvl-div ss3-mouse-inout" id="ss3btn-2">
      </div>
    </div>
  </div>
  </div>
  </div>

<!-- ///////\\\\\\ section18 \\\\//// -->
<!-- \\\\\\\////// section18 ////\\\\ -->
<div class="ss18-outer flex-row">
    <div class="ss18-container flex-row">
      <img src="https://cdn.files.salla.network/products/1157822896/a38685c3-ac78-48c1-bb36-d5d0975a82fb-original.webp" alt="" class="sec18-img sec18-img-lg" />
      <img
        src="https://cdn.files.salla.network/products/1157822896/f50d5e5f-be0d-46c3-a205-52888ff2e00f-original.webp"
        alt=""
        class="sec18-img sec18-img-sm"
      />
      <!-- <img
        src="C:\Users\danaglobPC1\Downloads\sec18mobile.png"
        alt=""
        class="sec18-img sec18-img-sm"
      /> -->
      <div class="sec18-overlay"></div>
      <div class="sec18-txts-div flex-column">
        <P class="sec18-span sec18-title-span flex-row"> موظفونا يعملون على مدار الساعة لخدمتكم </P>
        <button class="sec18-btn flex-row" onclick="window.location.href = 'https://wa.me/+966556399399'">
          اطلب تسعيرة الآن <i class="sicon-whatsapp sec18-whas-icon"></i>
        </button>
        <div class="sec18-social flex-row">
          <div class="sec18-single-social">
            <a href="https://www.instagram.com/moedati_sc">
              <svg
                class="sec18-social-svg"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>instagram</title>
                <path
                  d="M23 32h-14c-4.971 0-9-4.029-9-9v0-14c0-4.971 4.029-9 9-9v0h14c4.971 0 9 4.029 9 9v0 14c0 4.971-4.029 9-9 9v0zM9 2c-3.866 0-7 3.134-7 7v0 14c0 3.866 3.134 7 7 7v0h14c3.866 0 7-3.134 7-7v0-14c0-3.866-3.134-7-7-7v0zM16 24c-4.418 0-8-3.582-8-8s3.582-8 8-8c4.418 0 8 3.582 8 8v0c0 4.418-3.582 8-8 8v0zM16 10c-3.314 0-6 2.686-6 6s2.686 6 6 6c3.314 0 6-2.686 6-6v0c0-3.314-2.686-6-6-6v0zM25 9c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v0c0 1.105-0.895 2-2 2v0zM25 7v0z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="sec18-single-social">
            <a href="https://www.tiktok.com/@moedati.sc">
              <svg
                class="sec18-social-svg"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>tiktok</title>
                <path
                  d="M29.046 7.029c-3.359 0-6.092-2.733-6.092-6.092 0-0.518-0.42-0.938-0.938-0.938h-5.021c-0.518 0-0.938 0.42-0.938 0.938v20.585c0 1.975-1.606 3.581-3.581 3.581s-3.581-1.606-3.581-3.581c0-1.975 1.606-3.581 3.581-3.581 0.518 0 0.938-0.42 0.938-0.938v-5.021c0-0.518-0.42-0.938-0.938-0.938-5.777 0-10.477 4.7-10.477 10.477s4.7 10.477 10.477 10.477c5.777 0 10.477-4.7 10.477-10.477v-9.112c1.866 0.995 3.942 1.514 6.092 1.514 0.518 0 0.938-0.42 0.938-0.938v-5.021c0-0.518-0.42-0.938-0.938-0.938zM28.108 12.011c-2.001-0.166-3.902-0.866-5.544-2.047-0.285-0.206-0.662-0.234-0.975-0.073s-0.51 0.482-0.51 0.834v10.798c0 4.743-3.859 8.602-8.602 8.602s-8.602-3.859-8.602-8.602c0-4.427 3.361-8.083 7.665-8.552v3.176c-2.563 0.446-4.519 2.687-4.519 5.376 0 3.009 2.447 5.456 5.456 5.456s5.456-2.448 5.456-5.456v-19.648h3.201c0.429 3.645 3.329 6.545 6.974 6.974z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="sec18-single-social">
            <a href="https://www.facebook.com/profile.php?id=61581156782664">
              <svg
                class="sec18-social-svg"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>facebook</title>
                <path
                  d="M19 32h-6c-0.552 0-1-0.448-1-1v0-13h-3c-0.552 0-1-0.448-1-1v0-5c0-0.552 0.448-1 1-1v0h3v-4c0-3.866 3.134-7 7-7v0h4c0.552 0 1 0.448 1 1v0 5c0 0.552-0.448 1-1 1v0h-2c-0.552 0-1 0.448-1 1v0 3h5c0.552 0 1 0.448 1 1 0 0.134-0.026 0.262-0.074 0.379l0.002-0.007-2 5c-0.152 0.371-0.51 0.628-0.928 0.628h-3v13c0 0.552-0.448 1-1 1v0zM14 30h4v-13c0-0.552 0.448-1 1-1v0h3.324l1.2-3h-4.524c-0.552 0-1-0.448-1-1v0-4c0-1.657 1.343-3 3-3v0h1v-3h-3c-2.761 0-5 2.239-5 5v0 5c0 0.552-0.448 1-1 1v0h-3v3h3c0.552 0 1 0.448 1 1v0z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- ///////\\\\\\ section18 \\\\//// -->
<!-- \\\\\\\////// section18 ////\\\\ -->
<!-- ///////\\\\\\ section4 \\\\//// -->
<!-- \\\\\\\////// section4 ////\\\\ -->
 <div class="ss4-outer-container ss3-mObserve ss4-outer-container-motion flex-column" dir="rtl">
    <div class="ss4-container flex-column" id="ss4-slide-0">
      <div class="ss4-top-div flex-row">
        <div class="ss4-inner-top-div flex-row">
          <img
            src="https://cdn.salla.sa/YgXdEO/7adb908f-eb53-45e0-9818-0fe393f0e1cb-1000x289.56763189211-vzQhcHUxfgvJLvip8Vd1OBPdePbA0y5QjBCRvc7w.png"
            alt=""
            class="ss4-yato-img ss4-yato-img-motion"
          />
        </div>
      </div>
      <div class="ss4-bottom-div flex-row">
        <div class="ss4-inner-bottom-div">
          <span
            class="ss4-bottom-span ss4-bottom-span-1 ss4-bottom-span-WHITE ss4-bottom-span-trans1"
            >${ss4Lng[0]}</span
          >
          <span
            class="ss4-bottom-span ss4-bottom-span-2 ss4-bottom-span-WHITE ss4-bottom-span-trans2"
            >${ss4Lng[1]}</span
          >
          <div class="ss4-bottom-div-txts-btn">
            <span class="ss4-bottom-span ss4-bottom-span-3 ss4-bottom-span- ss4-bottom-span-trans3"
              >${ss4Lng[2]}</span
            >
            <button
              class="ss4-buy-now-btn"
              onclick="window.location.href = 'https://moedati.com/ar/redirect/brands/684503155'"
            >
               ${ss4Lng[3]}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="ss4-container flex-column" id="ss4-slide-1">
      <div class="ss4-top-div flex-row">
        <div class="ss4-inner-top-div flex-row">
          <img
            src="https://cdn.salla.sa/YgXdEO/e7486d22-39c2-4cca-becc-9b9594971e02-1000x419.53028430161-Ev9gHPhvlpT596oZn5svSVZ1dF46GSPGOiVkdkqy.png"
            alt=""
            class="ss4-yato-img ss4-torix-img ss4-yato-img-motion"
          />
        </div>
      </div>
      <div class="ss4-bottom-div ss4-bottom-div-slide1 flex-row">
        <div class="ss4-inner-bottom-div ss4-inner-bottom-div-slide-1">
          <div class="ss4-comprossor-imgs flex-row">
            <img
              src="https://cdn.salla.sa/YgXdEO/ddd2a2de-ce1f-4724-9319-36ee5a0b0b33-1000x801.85185185185-aRCKvKFVqP4w71VuRK7EVurJT7wvdrwGpZ58Usfy.png"
              alt=""
              class="ss4-left-copm-img"
            />
            <img
              src="https://cdn.salla.sa/YgXdEO/8b85ecf2-f4e3-4e3a-95e1-cb7c2a959994-1000x666.66666666667-NYxKHVarecBhFn3T3sYR80Vp39kq5VWvY6lMDNOT.png"
              alt=""
              class="ss4-center-copm-img ss4-center-copm-img-motion"
            />
            <img
              src="https://cdn.salla.sa/YgXdEO/75d17a07-9d2c-4f65-82e3-aed6bb1f9b78-1000x666.66666666667-B7w95pSYg1PiL6QR0uUenZpZE1trWzBjlK6o9FR3.png"
              alt=""
              class="ss4-right-copm-img"
            />
          </div>
          <div class="ss4-bottom-div-slide-1 flex-row">
            <button
              class="ss4-buy-now-btn"
              onclick="window.location.href = 'https://moedati.com/ar/TORIX/brand-50008540'"
            >
              ${ss4Lng[3]}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="ss4-shuvles-points-div flex-row">
      <div class="ss4-single-point" id="ss4-single-point-0"></div>
      <div class="ss4-single-point" id="ss4-single-point-1"></div>
    </div>
  </div>
  <!-- ///////\\\\\\ section4 \\\\//// -->
  <!-- \\\\\\\////// section4 ////\\\\ -->
</div>
`,
  );
  //},500);
} else {
  //console.log('Not the homepage');
  //console.log(window.location.pathname);
}

//---sedig body Script----//
//---sedig body Script----//
//---sedig body Script----//

const sedigIso = new IntersectionObserver(
  function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      if (entry.target.classList.contains("ss3-container")) {
        clearInterval(ss3Interv);
        return;
      }
      if (entry.target.classList.contains("ss10-container")) {
        clearInterval(ss10Interv);
        return;
      }
      if (entry.target.classList.contains("ss1-container")) {
        clearInterval(ss1Interv);
        return;
      }
      if (entry.target.classList.contains("ss12-outer-container")) {
        clearInterval(ss12Inerv);
        return;
      }
      if (entry.target.classList.contains("ss4-outer-container")) {
        clearInterval(ss4Interv);
        return;
      }
      return;
    }
    //--section3 observe
    if (entry.target.classList.contains("ss3-container")) {
      ss3RunEnterval();
      entry.target.classList.remove("ss3-container-hidden");
      // observer.unobserve(entry.target);
      // console.log('here...');
    }
    //--section1 observe
    if (entry.target.classList.contains("ss1-container")) {
      ss1RunInerv();
    }
    //--section2 observe
    if (entry.target.classList.contains("ss2-container")) {
      document
        .querySelector(".ss2-right-sqr-banar-div")
        .classList.remove("ss2-right-sqr-banar-div-hidden");
      document
        .querySelector(".ss2-left-sqr-banar-div")
        .classList.remove("ss2-left-sqr-banar-div-hidden");
      observer.unobserve(entry.target);
    }
    //--section4 observe
    if (entry.target.classList.contains("ss4-outer-container")) {
      document.querySelector(".ss4-outer-container").classList.remove("ss4-outer-container-motion");
      ss4SetActiveSlide();
      ss4RunInterval();
    }
    // ---section11 observe
    if (entry.target.classList.contains("ss11-container")) {
      setTimeout(() => {
        document.querySelector(".ss11-left-span-trans").classList.remove("ss11-span-left-tran");
        document.querySelector(".ss11-back-img").classList.remove("ss11-back-img-trans");
      }, 500);
      setTimeout(() => {
        document.querySelector(".ss11-right-span-trans").classList.remove("ss11-span-left-tran");
      }, 1000);
      observer.unobserve(entry.target);
    }
    // ---section10 observe
    if (entry.target.classList.contains("ss10-container")) {
      ss10RunInterval();
    }
    // RAMADDAN--------------------
    if (entry.target.classList.contains("ss12-outer-container")) {
      // setTimeout(()=>{
      // document.querySelector('.ss12-outer-container').classList.remove('rs-hidden');
      // },100);
      ss12RunInerv();
      // observer.unobserve(entry.target);
    }
    // RAMADDAN--------------------
  },
  {
    root: null,
    threshold: 0.15,
  },
);
// const sElmentNeedObs = document.querySelectorAll(".ss3-mObserve");
// sElmentNeedObs.forEach(function (elment) {
// sedigIso.observe(elment);
// });
if (isHomePage()) {
  // makeCenterImgsStartMotion()
  ss1ClassiMove();
  ss1showClassiContainer();
  ss1SetActiveSlide();
  changeBackDIRcolor();
  addEventToShuvlsBtn();
  ss12ShowActivePro(0);
  ss15WatchWidth();
}

//---sedig body Script----//
//---sedig body Script----//
//---sedig body Script----//

//LOCATION PAGE SCRIPT
//LOCATION PAGE SCRIPT
//LOCATION PAGE SCRIPT

const runLocationTxtsSlow = function () {
  const locationTxtsDiv = document.querySelectorAll(".single-location-txt-div");
  console.log(locationTxtsDiv);
  for (let i = 0; i < locationTxtsDiv.length; i++) {
    setTimeout(
      () => {
        locationTxtsDiv[i].classList.remove("trans-txts-div");
      },
      1500 + i * 1000,
    );
  }
};
const runLocationImgsSlow = function () {
  setTimeout(() => {
    document.querySelector(".dammam-img-div").classList.remove("dammam-img-trans");
  }, 1000);
  setTimeout(() => {
    document.querySelector(".khobar-img-div").classList.remove("khobar-img-trans");
  }, 1500);
  setTimeout(() => {
    document.querySelector(".ryiadh-img-div").classList.remove("ryiadh-img-trans");
  }, 500);
};
if (!isHomePage()) {
  setTimeout(() => {
    runLocationTxtsSlow();
    runLocationImgsSlow();
  }, 500);
}
//LOCATION PAGE SCRIPT
//LOCATION PAGE SCRIPT
//LOCATION PAGE SCRIPT

//add cards to my div
//add cards to my div
//add cards to my div
const products = [
  {
    sku: "YT-39011",
    name: "طقم عدة معزول YT-39011",
    price: 2010,
    link: "https://moedati.com/ar/%D8%B7%D9%82%D9%85-%D8%B9%D8%AF%D8%A9-%D9%85%D8%B9%D8%B2%D9%88%D9%84/p1495657801?from=search-bar",
    imglink:
      "https://cdn.salla.sa/YgXdEO/670578b7-1904-4147-bfa1-a47e28bcc978-1000x875-8TTQKKJuukKqjFtqffVxN3AZSAyZHjnrfb3f1FGt.png",
    discri:
      "العلامة التجارية: ياتو - بولندا ، رمز المنتج: YT-39011 ، المعيار: CE - أوروبا | VDE ١٠٠٠ فولت ، التفاصيل الإجمالية: ٣٩ قطعة...",
  },
  {
    sku: "YT-80838",
    name: "حذاء امان متوسط القطع YT-80838",
    price: 216,
    link: "https://moedati.com/ar/حذاء-أمان-متوسط-القطع-ticat-s3s-مقاس-45-yt-80838/p2025162696",
    imglink:
      "https://cdn.salla.sa/YgXdEO/ca8ca181-cee5-464c-91e4-e892961c7975-1000x750-IwdOSlIm5UFAWkG2s8MExhBl2Vi2y7cn1wqI5LoB.png",
    discri:
      "أحذية العمل خفيفة الوزن من سلسلة TICAT S3S هي طراز مزود بجزء أمامي من الألياف الزجاجية المقاومة للصدمات، وجزء داخلي مرن مضاد للثقب مصنوع من مادة تستخدم في تصنيع السترات الواقية",
  },
  {
    sku: "YT-82976",
    name: "قاعدة لفرشة الزاوية YT-82976",
    price: 230,
    link: "https://moedati.com/ar/%D9%82%D8%A7%D8%B9%D8%AF%D8%A9-%D9%84%D9%81%D8%B1%D8%B4%D8%A9-%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-230-%D9%85%D9%85-yato-%D9%85%D9%84%D8%AD%D9%82%D8%A7%D8%AA-%D8%A7%D8%AF%D9%88%D8%A7%D8%AA-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9-yt-82976/p1863252749?from=search-bar",
    imglink:
      "https://cdn.salla.sa/YgXdEO/fdd0a0bf-68ec-4326-8d98-39c2cf7e7fd8-1000x750-fHABEzDZdv8XUawPYwPFeAaMBJyjlRd0wsA0wRgB.jpg",
    discri:
      "حامل عالمي للعمل مع جلاخة زاوية. قاعدة متينة مصنوعة من الفولاذ المصبوب، ومُدمجة مع ملزمة سريعة الحركة. تسمح مقاطع الدعم الكبيرة ذات المقطع العرضي ونابض الإرجاع المزدوج للجلاحة بالعمل بوزن كبير. زاوية القطع الأفقية مُحددة بدقة بفضل الأقراص.",
  },
  {
    sku: "YT-05631",
    name: "مجموعة مفاتيح سداسية طويلة YT-05631",
    price: 35,
    link: "https://moedati.com/ar/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D9%85%D9%81%D8%A7%D8%AA%D9%8A%D8%AD-%D8%B3%D8%AF%D8%A7%D8%B3%D9%8A%D8%A9-%D8%B7%D9%88%D9%8A%D9%84%D8%A9-9-%D9%82%D8%B7%D8%B9-15-10-%D9%85%D9%84%D9%85/p402563408?from=search-bar",
    imglink:
      "https://cdn.salla.sa/YgXdEO/37c6f899-866b-4251-a43f-53cac7745715-1000x750-weYEUJlrIrJtXndW5uV995Dvo0zFvBX3jTno0M5z.jpg",
    discri:
      "تأتي المجموعة في علبة بلاستيكية عملية وسهلة الاستخدام، مع علامات ملونة على المفاتيح، مما يُسهّل عليك البحث عن المقاس المناسب. مصنوعة من فولاذ S2 عالي الجودة، يتميز بالمتانة والمرونة",
  },
  {
    sku: "60780",
    name: "مجموعة مفكات 50 قطعة - CRV 60780",
    price: 90,
    link: "https://moedati.com/ar/مجموعة-مفكات-50-قطعة-crv/p45050264",
    imglink:
      "https://cdn.salla.sa/YgXdEO/d204301c-1753-4cae-9241-182dab4032b9-500x375-1C0hujGw2xt34gGX7AU39hUonBNxkfBW4YSOEo6H.jpg",
    discri: "",
  },
  {
    sku: "YT-82780",
    name: "مجموعة مثقاب لاسلكي ، مع بطارية وشاحن ، 40 نيوتن YT-82780",
    price: 330,
    link: "https://moedati.com/ar/مجموعة-مثقاب-لاسلكي-18v-مع-بطارية-وشاحن-40-نيوتن-متر/p832747631",
    imglink:
      "https://cdn.salla.sa/YgXdEO/3c916eb4-9831-4889-9f7f-55ecdf9dabcf-500x375-zrK2IhL82nmUhs7yZUWfO6fTZ8IRKjoVNBj5hbgY.jpg",
    discri:
      "مثقاب/مفك براغي قوي ومتعدد الاستخدامات من ماركة ياتو، بجهد ١٨ فولت، مزود بعلبة تروس فولاذية متينة. مثالي لحفر المعادن والخشب وربط البراغي.",
  },
  {
    sku: "YT-81983BS",
    name: "مثقاب ألماسي 2800W - أقصى قطر للحفر 300 ملم YT-81983BS",
    price: 1350,
    link: "https://moedati.com/ar/مثقاب-ألماسي-2800w-أقصى-قطر-للحفر-300-ملم/p928140594",
    imglink:
      "https://cdn.salla.sa/YgXdEO/a0323085-442e-4385-8b2a-d41fe769b18c-500x375.45454545455-bVOKSNMV5mr2J9B8PVZmqWahSVmGQUt2vhuXzFPC.jpg",
    discri:
      "مثقاب الماس Yato YT-81983BS أداة قوية ومتعددة الاستخدامات، مناسبة للاستخدام المهني. يتميز بمحرك عالي الأداء يوفر أداءً فعالاً في الحفر في المواد الصلبة.",
  },
  {
    sku: "YT-09033",
    name: "خزانة أدوات مع مساحة تخزين إضافية YT-09033",
    price: 2850,
    link: "https://moedati.com/ar/خزانة-أدوات-مع-مساحة-تخزين-إضافية/p1083029310",
    imglink:
      "https://cdn.salla.sa/YgXdEO/3ced2764-ab9a-45b5-ab2e-a571b2701018-500x375-t8w9mFxbTCISjuvBKbAodEWNkN6lNk71MSamex2x.png",
    discri:
      "٥ أدراج صغيرة: الأبعاد الداخلية ٥٣٣ × ٣٩١ × ٥٨ مم ، درج متوسط: الأبعاد الداخلية ٥٣٣ × ٣٩١ × ١٢٨ مم ، درج كبير: الأبعاد الداخلية ٥٣٣ × ٣٩١ × ١٩٥ مم ، أرفف قابلة للقفل مصممة للأدوات الأكبر حجمًا.",
  },
  {
    sku: "YT-58955",
    name: "بلوك سلسلة 5.0 طن YT-58955",
    price: 1050,
    link: "https://moedati.com/ar/بلوك-سلسلة-50-طن/p683354526",
    imglink:
      "https://cdn.salla.sa/YgXdEO/2365cc63-2ae6-4527-8df2-ea5edb2d816f-500x500-M0hABYpdxDFBpAhjP6iY8eSQPxlZMjHq6mJYCjkR.jpg",
    discri:
      "رباط سلسلة يدوي مصمم للاستخدام المكثف في الظروف الصناعية، وكذلك في ورش وخدمات الميكانيكا. فعّال في أعمال النقل. لرفع البضائع بدقة ونقلها أفقيًا.",
  },
  {
    sku: "YT-38881",
    name: "مجموعة مقابس YT-38881",
    price: 624,
    link: "https://moedati.com/ar/مجموعة-مقابس-14-،-38-،-12-129-قطعة/p993391963",
    imglink:
      "https://cdn.salla.sa/YgXdEO/e70e7757-2c80-42d1-b6c4-43fd28d34d3a-500x375-ovLf3O20V6wMy7xlaQEI41tOqmGDcJkUTS76RgBa.jpg",
    discri:
      "تتكون مجموعة أدوات ياتو من ١٢٩ قطعة، موضوعة في علبة بلاستيكية عملية. صُنعت هذه الأدوات بدقة من مواد تضمن موثوقيتها.",
  },
  {
    sku: "YT-82175BS",
    name: "منشار ميتري YT-82175BS",
    price: 1200,
    link: "https://moedati.com/ar/منشار-ميتري-305-ملم-1800w-مع-ليزر/p1925066002",
    imglink:
      "https://cdn.salla.sa/YgXdEO/c3394dc0-88ad-4bfd-8ac7-b6659f1b6179-500x375-r5DaTqv6by6CIPrtq9OI3gICeXSHYWHqVf1x3hgo.jpg",
    discri: "مفيد لأعمال البناء. يوفر معالجة دقيقة وسريعة للمواد ذات المقاطع العرضية الكبيرة.",
  },
  {
    sku: "22130",
    name: "مجموعة مثاقيب ملتوية 22130",
    price: 15,
    link: "https://moedati.com/ar/مجموعة-مثاقيب-ملتوية-hss-15-65-ملم-13-قطعة/p1829635508",
    imglink:
      "https://cdn.salla.sa/YgXdEO/1b948bd5-0a08-4e97-8f32-91921e913927-500x375-8Sqnd52CLhfrq2kfcuxwXFd6SoGqmJkmX54EMuNZ.jpg",
    discri: "مجموعة مثاقيب ملتوية",
  },
  {
    sku: "YT-24225",
    name: "خرطوم هواء PVC مع وصلات 10 ملم × 20 متر YT-24225",
    price: 120,
    link: "https://moedati.com/ar/خرطوم-هواء-pvc-مع-وصلات-10-ملم-20-متر/p1004357096",
    imglink:
      "https://cdn.salla.sa/YgXdEO/b1fa111c-e5f4-4e66-b345-9df16e07da81-500x375-eOFCXOXxHeuWU3w0PcSO1BrEDnFyvx6RtLeUWFzb.jpg",
    discri: "",
  },
  {
    sku: "YT-33015",
    name: "مجموعة فورستنر 5 قطع 15، 20، 26، 30، 35 ملم YT-33015",
    price: 84,
    link: "https://moedati.com/ar/مجموعة-فورستنر-5-قطع-15،-20،-26،-30،-35-ملم/p499428529",
    imglink:
      "https://cdn.salla.sa/YgXdEO/5c30a000-202b-4793-bfd6-32da6fbd139f-500x375-2W5PJU9LT3rnxFlnlInHufvQpeqMQBSu2QpFeNwG.jpg",
    discri: "",
  },
  {
    sku: "YT-73127",
    name: "مقياس مسافات بالليزر 60 متر YT-73127",
    price: 260,
    link: "https://moedati.com/ar/مقياس-مسافات-بالليزر-60-متر/p80782292",
    imglink:
      "https://cdn.salla.sa/YgXdEO/be4ee9bd-fde2-443e-b33d-96b7cbd44a30-500x375-9cI1Ho6uhmq2bF3YUj2mtVwdmKPAJPg0xc88w8qf.jpg",
    discri: "",
  },
];
// const sedigAddTax = function (price){
// // return Math.floor((price + (price * 0.15)) * (100 +0.1 )) / 100;
//   return Math.round((price * 1.15) * 100) / 100;
// }
// const sedigAddTaxWithDisc = function (price){
// price = price - (price * 10 / 100);
// return sedigAddTax(price);
// }
let cardsNumToDisplay = 6;
let lastCardPushedIndex = 0;
let cardNumCount = 0;
const pushCards = function () {
  const cardsContEle = document.querySelector(".sedig-cards-div");

  if (lastCardPushedIndex === products.length) {
    return;
  }

  products.forEach((product, i) => {
    if (i >= lastCardPushedIndex && cardNumCount < cardsNumToDisplay) {
      cardsContEle.insertAdjacentHTML(
        "beforeend",
        `
<a  class="sedig-card-anchor" href="${product.link}">
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
${sedigAddTaxWithDisc(product.price)}
</span>
<i class="sicon-sar my-sicon-sar"></i>
</div>
<div class="sedig-single-price-div flex-row">
<span class="sedig-card-product-price-span sedig-card-product-old-price-span ">
${sedigAddTax(product.price)}
</span>
<i class="sicon-sar my-sicon-sar sedig-card-product-old-price-span"></i>
</div>
</div>

<div class="sedig-cardicon-add-to-card-div flex-row">
<div class="cart-icon-div sedig-cards-btns-hover flex-row">
<i class="inline-block sicon-cart2"></i>
</div>
<div class="add-to-card-div sedig-cards-btns-hover flex-row">
<sedig>شراء الآن</sedig>
</div>

</div>

</div>
</div>
</a>
`,
      );
      cardNumCount++;
      //added new
    }
  });
  lastCardPushedIndex += cardNumCount;
  cardNumCount = 0;
  if (lastCardPushedIndex === products.length) {
    document.querySelector(".sedig-showmore-btn").classList.add("sedig-hide-some-element");
  }
  //console.log(cardsContEle);
};
if (!isHomePage()) {
  setTimeout(() => {
    document.querySelector(".sedig-showmore-btn").addEventListener("click", () => {
      pushCards();
      //console.log("sho me !");
    });

    pushCards();
  }, 1500);
}

setTimeout(() => {
  //document.querySelector("#main-slider-1-0").style.backgroundSize = "contain";
  //document.querySelector("#main-slider-1-0").style.backgroundPosition = "center";
  //document.querySelector("#main-slider-1-0").style.backgroundColor = "#ffffff";
  //const secOut = document.querySelector("#main-slider-1-0");
  //const mainH2 = secOut.querySelector("div > h2");
  //const mainP = secOut.querySelector("div > p");
  //mainH2.style.backdropFilter = "blur(2px)";
  //mainP.style.backdropFilter = "blur(3px)";
  //mainP.style.filter = "drop-shadow(1px 1px 1px #ebebeb)";
}, 1500);
//add cards to my div
//add cards to my div
//add cards to my div
//add cards to my div
//add cards to my div
//add cards to my div
//add cards to my div
//add cards to my div
//add cards to my div

//*********** warp product img *****************//
//*********** warp product img *****************//
//*********** warp product img *****************//
//*********** warp product img *****************//
//*********** warp product img *****************//

function wrapElement(el, wrapperTag = "div") {
  if (!el || !el.parentNode) return;
  const wrapper = document.createElement(wrapperTag);
  wrapper.className = "sedig931-wrapped";
  el.parentNode.insertBefore(wrapper, el);

  wrapper.appendChild(el);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    const productsImgContainer = document.querySelectorAll(".product-entry__image-wrap");

    productsImgContainer.forEach((element) => {
      element.insertAdjacentHTML(
        "afterbegin",
        `<div class = "salla-background-img-product-container" dir="rtl">

<div class="background-img-product-container" style="width: 100%">

<img class="image-back" src="https://cdn.salla.sa/YgXdEO/f41ade14-1ce8-4f55-a97f-7a61376efc59-1000x750-JaKeBJrJmooagewWoqYr0QmfubQRjxGDJYuNTK5M.jpg" alt="">

<div class="top-color-div">
</div>

<div class="line-container-div">
<div class="bottom-line-div" style="border-left: 115px solid transparent">
</div>
</div>

<!-- added new... -->
<!--
<div class ="prands-div flex-row">
<img class="prands-img-my" src="https://cdn.salla.sa/YgXdEO/W4kPH5fnhrlGglAZRem2OkRtrK1kSfF5jJJI1jmh.png"
/>
<img class="prands-img-my" src="https://cdn.salla.sa/YgXdEO/ZlfgRqUfXN7f89iBVIp5AAWmxw1Nau7PH5pStyF4.png"
/>
<img class="prands-img-my" src="https://cdn.salla.sa/YgXdEO/43TU3lRkCXpqJH5Y6pi7ckIv6eFrY7E5kwVQfFmo.png"
/>
<img class="prands-img-my" src="https://cdn.salla.sa/YgXdEO/E3WzbpYksXKVFc4Wg2E3HQeOOz9MnrMquME4dhJS.png"
/>
<!-- 
<img class="dana-prands-img-my" src="https://cdn.salla.sa/YgXdEO/products/bYaxM7REfGmhfF4BEUlLfOf79ERPtInTzdIAFoL9.png"
/>
 -->
</div>
-->
<!-- added new... -->

<div class="more-white-space-div"></div>

</div>

</div>

</div>

</div>`,
      );

      wrapElement(element.children[1].children[0]);
      const bachimg = element.children[0].children[0];
      const backImgwidth = window.getComputedStyle(bachimg).width;
      //console.log(backImgwidth );
      const bottomLineElement = element.children[0].children[0].children[2].children[0];
      //bottomLineElement.style.borderLeft //=`${backImgwidth} solid transparent`;
    });
  }, 1500);
});

window.addEventListener("click", () => {
  setTimeout(() => {
    const productsImgContainer = document.querySelectorAll(".product-entry__image-wrap");
    productsImgContainer.forEach((element) => {
      if (element.querySelector(".salla-background-img-product-container")) {
        //console.log("doing nothing");
      } else {
        element.insertAdjacentHTML(
          "afterbegin",
          `<div class = "salla-background-img-product-container" dir="rtl">
<div class="background-img-product-container" style="width: 100%">
<img class="image-back" src="https://cdn.salla.sa/YgXdEO/f41ade14-1ce8-4f55-a97f-7a61376efc59-1000x750-JaKeBJrJmooagewWoqYr0QmfubQRjxGDJYuNTK5M.jpg" alt="">
<div class="top-color-div">
</div>
<div class="line-container-div">
<div class="bottom-line-div" style="border-left: 115px solid transparent">
</div>
<div class="more-white-space-div"></div>
</div>

</div>

</div>

</div>`,
        );

        wrapElement(element.children[1].children[0]);
        const bachimg = element.children[0].children[0];
        const backImgwidth = window.getComputedStyle(bachimg).width;
        //console.log(backImgwidth );
        const bottomLineElement = element.children[0].children[0].children[2].children[0];
        //bottomLineElement.style.borderLeft //=`${backImgwidth} solid transparent`;
      }
    });
  }, 1500);
});
//console.log(document.querySelector(".product-entry__image-wrap"));

//*********** warp product img *****************//
//*********** warp product img *****************//
//*********** warp product img *****************//
//*********** warp product img *****************//
//*********** warp product img *****************//

//****** push section in any order ************//
//****** push section in any order ************//
//****** push section in any order ************//
//****** push section in any order ************//
//****** push section in any order ************//

//****** section 5 ************//
//****** section 5 ************//
//****** section 5 ************//
//****** section 5 ************//
var moedatiSections = document.querySelector(".app-inner").querySelectorAll("section");
const makeSS5ContainerMove = function () {
  const slider = document.querySelector(".ss5-container");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => (isDown = false));
  slider.addEventListener("mouseup", () => (isDown = false));
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
  requestAnimationFrame(() => {
    slider.scrollTo({
      left: -500,
      behavior: "smooth",
    });
  });
};
const pushProductsTosec5 = function () {
  const cardsContEle = document.querySelector(".ss5-container");
  for (const [i, product] of products.entries()) {
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
${sedigAddTaxWithDisc(product.price)}
</span>
<i class="sicon-sar my-sicon-sar"></i>
</div>
<div class="sedig-single-price-div sedig-single-old-price-div flex-row">
<span class="sedig-card-product-price-span sedig-card-product-old-price-span">
${sedigAddTax(product.price)}
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
`,
    );
    if (i === 6) {
      cardsContEle.insertAdjacentHTML(
        "beforeend",
        `
<div class="single-card-div single-card-div-last-one flex-column">
<div class="ss5-other-items-imgs flex-row">
<div class="ss5-single-item-other  flex-row"      onclick='window.location.href="${products[6].link}";'
 >
<img src="${products[6].imglink}"  alt="" class="ss5-single-other-item-img">
</div>
<div class="ss5-single-item-other ss5-img-tansme flex-row"
 onclick='window.location.href="${products[7].link}";'
>
<img src="${products[7].imglink}"  alt="" class="ss5-single-other-item-img">
</div>
<div class="ss5-single-item-other flex-row"
onclick='window.location.href="${products[8].link}";'
>
<img src="${products[8].imglink}"  alt="" class="ss5-single-other-item-img">
</div>
<div class="ss5-single-item-other ss5-img-tansme flex-row"
onclick='window.location.href="${products[9].link}";'
>
<img src="${products[9].imglink}"  alt="" class="ss5-single-other-item-img">
</div>
<div class="ss5-single-item-other flex-row"
onclick='window.location.href="${products[10].link}";'
>
<img src="${products[10].imglink}"  alt="" class="ss5-single-other-item-img">
</div>
<div class="ss5-single-item-other ss5-img-tansme flex-row"
onclick='window.location.href="${products[11].link}";'
>
<img src="${products[11].imglink}"  alt="" class="ss5-single-other-item-img">
</div>
</div>
<div class="ss5-btn-show-more-div flex-row"
onclick='window.location.href="https://moedati.com/ar/redirect/pages/571218989";'
>
مشاهدة المزيد
</div>
</div>
`,
      );
      break;
    }
  }
};
const pushSec5 = function (index) {
  moedatiSections[index].insertAdjacentHTML(
    "afterend",
    `
  <section >
  <div class="ss5-container">
  </div>
  </section>
`,
  );
};
//****** section 6 ************//
//****** section 6 ************//
//****** section 6 ************//
//****** section 6 ************//
const pushSec6 = function (index) {
  moedatiSections[index].insertAdjacentHTML(
    "afterend",
    `
  <section >
<div class="ss6-container flex-column" dir="ltr">
    <div class="ss6-items-cont flex-row">
     
    </div>
    <div class="ss6-next-prev-div flex-row">
        <div class="ss6-single-next-prev-div ss6-single-back-div ss6-single-back flex-row" id="ss6-back-btn" >
          <img src="https://cdn.salla.sa/YgXdEO/WZN6GRCRBTpZMdakJerS5ghCeV0UJhTLNKr2dNwV.png" class="ss6-arrow-img" alt="">
        </div>
        <div class="ss6-single-next-prev-div ss6-single-next-div ss6-single-next  flex-row" id="ss6-next-btn" >
          <img src="https://cdn.salla.sa/YgXdEO/YgFtxeCJ3DXncP4s2WYnR5R56MqXLKx8itQ98drx.png" class="ss6-arrow-img" alt="">
        </div>
    </div>
  </div>
  </section>
`,
  );
};
var ss6ActiveItem = 0;
const ss6ItemsData = [
  {
    itemImg:
      "https://cdn.salla.sa/YgXdEO/69f702f7-81cd-4ffe-a67a-6dbc92929a55-1000x750-ul4UgUPX3meFY3zpX6yKdlsWy1NGfoM9IISPNndT.png",
    itemLink: "https://moedati.com/ar/sport-safety-shoes-pubs-sbp-yt-80627/p711646061",
    itemBody: ["أمان وراحة", "عمل بثقة طوال اليوم"],
    itemBtnTxt: " شراء الآن",
  },
  {
    itemImg:
      "https://cdn.salla.sa/YgXdEO/cf289f34-7850-4b26-b7bb-c1707f4666f3-1000x750-6HHyt703KD1fMKEVmOt5rocRkvgnKyRGeSd9rxKU.png",
    itemLink: "https://salla.sa/moedati/redirect/categories/540250071",
    itemBody: ["ادوات قطع وصقل", "مصممة للأعمال الاحترافية"],
    itemBtnTxt: "رؤية المزيد",
  },
  {
    itemImg:
      "https://cdn.salla.sa/YgXdEO/55df91a4-96f3-4b15-8a48-58d292ad1a88-1000x1000-ZeLgaIYfSUPQCn2j0LbHBHcfY0WfpxU39KNBREYe.png",
    itemLink: "https://moedati.com/ar/pressure-washeryt-85910bs/p696287143",
    itemBody: ["قوة تنظيف", " تزيل أصعب الأوساخ في ثوانٍ"],
    itemBtnTxt: " شراء الآن",
  },
  {
    itemImg:
      "https://cdn.salla.sa/YgXdEO/2de5e4b3-3737-4d63-939a-0a343099060e-1000x750-ruro15MzhbzfOEjAAbh4lfJeSIge1gItpHIzKKqJ.png",
    itemLink:
      "https://moedati.com/ar/جهاز-تنظيف-بالبخار-بقدرة-1350-واط-yato-ادوات-كهربائية-yt-85760/p1877688790",
    itemBody: ["نظافة احترافية", "منظف البخار يمنحك قوة تنظيفة", "عميقة تزيل الأوساخ العنيدة"],
    itemBtnTxt: " شراء الآن",
  },
  {
    itemImg:
      "https://cdn.salla.sa/YgXdEO/b8161859-089a-4845-b1ab-ed87deb36a9c-1000x750-9DFQ51PjXSIPFWpLKd3UOQb0VXvPnbao4jJsLGDR.png",
    itemLink: "https://moedati.com/ar/drawers/p121603456",
    itemBody: ["تصمصم فريد ، قفل محكم", "تتسع لما يصل إلى 157 أداة ", "احترافية"],
    itemBtnTxt: "شراء الآن",
  },
];
const ss6outerFun = function (ind) {
  var string1 = "";
  ss6ItemsData[ind].itemBody.forEach((singTxt, txi) => {
    string1 = string1 += `
        <div class="ss6-single-txts-div ${txi === 0 ? "ss6-single-txts-right-div" : ""} flex-row">
                <span  class="ss6-shoes-btn-span flex-row">
                 ${singTxt}
                </span>
        </div>
        `;
  });
  return string1;
};
const ss6PushItems = function () {
  ss6ItemsData.forEach((item, i) => {
    document.querySelector(".ss6-items-cont").insertAdjacentHTML(
      "afterbegin",
      `
          <div class="ss6-single-item-cont" id="ss6-${i}">
            <div class="ss6-imgs-div flex-row">
              <div class="ss6-imgs-back-div ss6-imgs-back2-div"></div>
              <div class="ss6-imgs-back-div"></div>
              <div class="ss6-imgs-back2"></div>
              <div class="ss6-imgs-back2 ss6-imgs-back3"></div>
              <img src="${item.itemImg}" alt="" class="ss6-item-img ${i !== 0 ? "ss6-item-img-others" : ""}"
                onclick='window.location.href="${item.itemLink}";'
              >
            </div>
            <div class="ss6-txts-div flex-column">
               ${ss6outerFun(i)}
              <div class="ss6-shoes-btn flex-row"
                onclick='window.location.href="${item.itemLink}";'
              >
              <span class="ss6-shoes-btn-span flex-row">
               ${item.itemBtnTxt}
              </span>
              </div>
            </div>
          </div>
          `,
    );
  });
};
const ss6MoveRightLeft = function (leftRightClass, itemId) {
  document
    .getElementById(`ss6-${itemId}`)
    .querySelector(".ss6-txts-div")
    .classList.add(`${leftRightClass}`);
  document
    .getElementById(`ss6-${itemId}`)
    .querySelector(".ss6-item-img")
    .classList.add(`${leftRightClass}`);
  setTimeout(() => {
    document
      .getElementById(`ss6-${itemId}`)
      .querySelector(".ss6-txts-div")
      .classList.remove(`${leftRightClass}`);
    document
      .getElementById(`ss6-${itemId}`)
      .querySelector(".ss6-item-img")
      .classList.remove(`${leftRightClass}`);
  }, 100);
};
const ss6SetActiveItem = function (itemId, btnID) {
  document.querySelectorAll(".ss6-single-item-cont").forEach((singleItem) => {
    singleItem.classList.add("ss6HideItem");
  });
  document.getElementById(`ss6-${itemId}`).classList.remove("ss6HideItem");

  if (!btnID) {
    ss6MoveRightLeft("ss6-txts-div-fromleft-slow", itemId);
  } else {
    if (btnID === "ss6-next-btn") {
      ss6MoveRightLeft("ss6-txts-div-fromleft-slow", itemId);
    } else {
      ss6MoveRightLeft("ss6-txts-div-fromRight-slow", itemId);
    }
  }
};
const addBackNextEvent = function () {
  document.querySelectorAll(".ss6-single-next-prev-div").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.currentTarget.id === "ss6-next-btn") {
        if (ss6ActiveItem < ss6ItemsData.length - 1) {
          ss6SetActiveItem(++ss6ActiveItem, e.currentTarget.id);
        } else {
          ss6ActiveItem = 0;
          ss6SetActiveItem(ss6ActiveItem, e.currentTarget.id);
        }
      } else {
        if (ss6ActiveItem > 0) {
          ss6SetActiveItem(--ss6ActiveItem, e.currentTarget.id);
        } else {
          ss6ActiveItem = ss6ItemsData.length - 1;
          ss6SetActiveItem(ss6ActiveItem, e.currentTarget.id);
        }
      }
    });
  });
};
//****** section 7 ************//
//****** section 7 ************//
//****** section 7 ************//
//****** section 7 ************//
const pushSec7 = function (index) {
  moedatiSections[index].insertAdjacentHTML(
    "afterend",
    `
  <section >
  <div class="ss7-couter-container flex-row">
  <div class="ss7-container" dir="rtl">
   
  </div>
  </div>
  </section>
`,
  );
};
const ss7BlogData = [
  {
    blogImg: "https://cdn.salla.sa/YgXdEO/Apz6DJqaP16SHRbObYMZgzR2LD92vvhJtyUVSlH3.jpg",
    blogLink: "https://moedati.com/ar/المعدات-الكهربائية-و-الميكانيكية/page-91153789",
    blogTitle: "عالم الأدوات الاحترافية: أفضل معدات الكهرباء والميكانيكا",
    blogBody:
      "تعدّ المعدات الكهربائية والميكانيكية أساس أي ورشة ناجحة، فهي تمنح أداءً أسرع ونتائج أكثر دقة. اختيار الأدوات المناسبة يصنع فرقًا كبيرًا في جودة العمل",
  },
  {
    blogImg:
      "https://cdn.salla.sa/YgXdEO/c95604f9-880b-4120-8ff0-2e08862ae419-1000x666.66666666667-Z5P9ZH51GBLZCbwXfXOn8lFPNZ8uhJ4PWAIUnv5o.jpg",
    blogLink: "https://moedati.com/ar/redirect/pages/446398156",
    blogTitle: " لماذا منتجات السلامة ليست خيارًا… بل ضرورة في كل موقع عمل !",
    blogBody:
      " تقدم YATO تجهيزات سلامة عالية الجودة من الخوذ والقفازات إلى النظارات والأحذية المقاومة للصدمات. معدات صُممت لتمنحك أمانًا أقوى وراحة أكبر في كل مهمة. اكتشف المزيد،،",
  },
  {
    blogImg: "https://cdn.salla.sa/YgXdEO/9r4IHuxefr2TtKgqxDZm1yEt8bnfenf9NE1UF4O5.jpg",
    blogLink: "https://moedati.com/ar/الأسئلة-الشائعة/page-729441129",
    blogTitle: "دليل الأسئلة الشائعة من العملاء",
    blogBody:
      "خصصنا هذه الصفحة للإجابة على أكثر الاستفسارات التي قد تخطر في بالك أثناء تصفح المنتجات أو إتمام الطلب. ستجد فيها توضيحات سريعة تساعدك على اتخاذ قرار شراء واعٍ وتمنحك تجربة تسوق أكثر سهولة واطمئنانًا",
  },
  {
    blogImg:
      "https://cdn.salla.sa/YgXdEO/2adabc52-17b8-4379-8ab1-2cc0fb30d4c9-1000x666.66666666667-lQaqfLL9JR5itQyRiPg7KNnGzP6oN8uaeXZaP3Uh.jpg",
    blogLink: "https://moedati.com/ar/أدوات-ياتو-اليدوية/page-249822236",
    blogTitle: "أدوات ياتو اليدوية | الدليل الشامل لاختيار أفضل أدوات YATO للورشة والمنزل",
    blogBody:
      "إذا كنت تبحث عن أدوات قوية، متينة وموثوقة للاستخدام المهني أو المنزلي، فإن أدوات ياتو YATO تعد من أفضل الخيارات في سوق الأدوات اليدوية. حيث تُستخدم منتجاتها من قبل،،",
  },
];
const ss7PushBlog = function () {
  ss7BlogData.forEach((blog) => {
    document.querySelector(".ss7-container").insertAdjacentHTML(
      "afterbegin",
      `
            <div class="ss7-single-blog-link-div flex-column">
              <div class="ss7-single-bl-img-div flex-row">
                <img src="${blog.blogImg}"  alt="" class="ss7-single-blog-link-img">
              </div>
                <div class="ss7-single-blog-link-body-div flex-column">
                    <span class="ss7-single-bl-title-span">
                    ${blog.blogTitle}
                    </span>
                    <div class="ss7-single-bl-body-txts-span flex-row">
                    <span class="ss7-single-bl-body-txts-span">
                    ${blog.blogBody}
                    </span>
                    </div>
                    <button class="ss7-single-bl-btn"
                      onclick='window.location.href="${blog.blogLink}";'
                    >
                       إقرأ المزيد
                    </button>
                </div>
            </div>
          `,
    );
  });
};
const makeSS7ContainerMove = function () {
  const slider = document.querySelector(".ss7-container");
  let isDown = false;
  let startX;
  let scrollLeft;
  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => (isDown = false));
  slider.addEventListener("mouseup", () => (isDown = false));
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });
  requestAnimationFrame(() => {
    slider.scrollTo({
      left: 500,
      behavior: "smooth",
    });
  });
};
//****** section 8 ************//
//****** section 8 ************//
//****** section 8 ************//
//****** section 8 ************//
const pushSec8 = function (index) {
  moedatiSections[index].insertAdjacentHTML(
    "afterend",
    `
  <section>
   <div class="ss8-container flex-row">
    <div class="ss8-single-val-div ss8-single-val-div-trans-2 flex-column" id="ss8-v-2">
        <div class="ss8-single-val-img-div flex-row">
            <img src="https://cdn.salla.sa/YgXdEO/yoa2Gg3zLII9TbFUNPfst2OVDWP6uuw1QtWOpMBy.jpg" alt="" class="ss8-single-val-img">
        </div>
        <div class="ss8-single-val-header-txt-div">
            <span class="ss8-single-val-header-txt-span">
                 خدمات ما بعد البيع
            </span>
        </div>
        <div class="ss8-single-val-body-txt-div flex-row">
            <span class="ss8-single-val-body-txt-span" dir="rtl">
                خدمات صيانة ودعم ما بعد البيع تضمن لك الاستفادة الكاملة من منتجاتك حتى بعد الشراء فريق متخصص جاهز لمساعدتك وحل أي مشكلة بسرعة، لتبقى تجربتك معنا أفضل دائمًا
            </span>
        </div>
    </div>
    <div class="ss8-single-val-div ss8-single-val-div-trans-1 flex-column" id="ss8-v-1">
        <div class="ss8-single-val-img-div  flex-row">
            <img src="https://cdn.salla.sa/YgXdEO/9Q36DAnRbAvrDPE5h9lFHfIt8sCQlxcmUlcbk6w7.jpg" alt="" class="ss8-single-val-img">
        </div>
        <div class="ss8-single-val-header-txt-div">
            <span class="ss8-single-val-header-txt-span">
                 توصيل سريع لجميع مناطق المملكة
            </span>
        </div>
        <div class="ss8-single-val-body-txt-div flex-row">
            <span class="ss8-single-val-body-txt-span" dir="rtl">
                توصيل سريع ومضمون إلى جميع مناطق المملكة بالتعاون مع شركات شحن موثوقة في السعودية، استلم طلباتك أينما كنت، بخيارات شحن مرنة تتناسب مع احتياجاتك
            </span>
        </div>
    </div>
    <div class="ss8-single-val-div ss8-single-val-div-trans-0 flex-column" id="ss8-v-0">
        <div class="ss8-single-val-img-div  flex-row">
            <img src="https://cdn.salla.sa/YgXdEO/5KHtMAOCW9o0yGyuldEEkIn2KImbWDvER9OUB4o1.jpg" alt="" class="ss8-single-val-img">
        </div>
        <div class="ss8-single-val-header-txt-div">
            <span class="ss8-single-val-header-txt-span">
                نظام دفع آمن ، وأسعار منافسة
            </span>
        </div>
        <div class="ss8-single-val-body-txt-div flex-row">
            <span class="ss8-single-val-body-txt-span" dir="rtl">
             استمتع بتجربة تسوّق مريحة مع نظام دفع آمن يحافظ على سرية معلوماتك ، معاملاتك المالية تتم عبر بروتوكولات حماية متقدمة تمنحك ثقة كاملة عند الشراء
            </span>
        </div>
    </div>
    <div class="ss8-points-div flex-row">
        <div class="ss8-single-point-div ss8-active-single-point-div" id="ss8-p-0">

        </div>
        <div class="ss8-single-point-div" id="ss8-p-1">

        </div>
        <div class="ss8-single-point-div" id="ss8-p-2">

        </div>
    </div>
  </div>
  </section>
  `,
  );
};
const ss8WatchWidth = function () {
  const ss8ValDivs = document.querySelectorAll(".ss8-single-val-div");
  const mq = window.matchMedia("(max-width: 1200px)");
  var ss8ActiveVl = 0;
  var ss8Inerval;
  const ss8StopshvlsFun = function () {
    clearInterval(ss8Inerval);
  };
  const ss8RunshvlsFun = function () {
    ss8Inerval = setInterval(() => {
      if (ss8ActiveVl < 2) ss8ActiveVl++;
      else ss8ActiveVl = 0;
      ss8ValDivs.forEach((valDiv) => {
        if (valDiv.id !== `ss8-v-${ss8ActiveVl}`) {
          valDiv.classList.add("ss8-hide-val-div");
        } else {
          valDiv.classList.remove("ss8-hide-val-div");
        }
        document.querySelectorAll(".ss8-single-point-div").forEach((el) => {
          el.id === `ss8-p-${ss8ActiveVl}`
            ? el.classList.add("ss8-active-single-point-div")
            : el.classList.remove("ss8-active-single-point-div");
        });
      });
    }, 3000);
  };
  const ss8handleMediaChange = function (e) {
    if (mq.matches) {
      ss8ValDivs.forEach((valDiv) => {
        if (valDiv.id !== "ss8-v-0") valDiv.classList.add("ss8-hide-val-div");
      });
      ss8RunshvlsFun();
      document.querySelector(".ss8-points-div").classList.remove("ss8-hide-val-div");
    } else {
      ss8ValDivs.forEach((valDiv) => {
        valDiv.classList.remove("ss8-hide-val-div");
      });
      ss8StopshvlsFun();
      document.querySelector(".ss8-points-div").classList.add("ss8-hide-val-div");
    }
  };
  ss8handleMediaChange(mq);
  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", ss8handleMediaChange);
  }
};
//****** section 9 ************//
//****** section 9 ************//
//****** section 9 ************//
//****** section 9 ************//
const pushSec9 = function (index) {
  moedatiSections[index].insertAdjacentHTML(
    "afterend",
    `
  <section>
  <div class="ss9-container-outer flex-row" dir="ltr">
  <div class="ss9-container">
    <div class="ss9-back-sqrs-container flex-column">
        <div class="ss9-single-sqrs-container ss9-top-left-sqr-conatiner  flex-row">
            <div class="ss9-single-sqr-back ss9-top-left-sqr"></div>
            <div class="ss9-single-sqr-back ss9-top-right-sqr "></div>
        </div>
        <div class="ss9-single-sqrs-container ss9-middle-sqr-conatiner  flex-row">
            <div class="ss9-single-sqr-back ss9-middle-sqr"></div>
        </div>
        <div class="ss9-single-sqrs-container ss9-bottom-right-sqr-conatiner  flex-row">
            <div class="ss9-single-sqr-back ss9-bottom-right-sqr"></div>
        </div>
    </div>
    
    <div class="ss9-banar-body-container">
        <div class="ss9-left-body-imgs-container flex-row">
            <div class="ss9-single-imgs-container-outer flex-row">
            <div class="ss9-single-imgs-container flex-column" id="ss9-left-scroller">
                <div class="ss9-single-img-container flex-row"
                 onclick='window.location.href="https://moedati.com/ar/قفازات-جلد-صناعي-بنقاط-سيليكون-ضد-الانزلاق-yato-أدوات-السلامة-yt-74665/p682207678";'
                >
                    <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/c82214f2-3e79-4e08-836d-2cfa331cfc81-1000x750-7FHBVwNIdA4SKHBlLumRhlnGHMiDWeJz02fD8KFu.jpg" alt="">
                </div>
                <div class="ss9-single-img-container flex-row"
                 onclick='window.location.href="https://moedati.com/ar/عربة-أدوات-بثلاث-قطع-مع-أدوات-ادوات-يدوية-yato-yt-09104/p51913717";'
                 >
                    <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/products/6NzqTaX4KHMp6jcFnNIiAlQ9RDYnEaPnhitNQyD6.jpg" alt="">
                </div>
                <div class="ss9-single-img-container flex-row"
                 onclick='window.location.href="https://moedati.com/ar/قرص-قطع-معدني-yt-5925/p432054710";'
                >
                    <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/b62f8448-a8e2-441b-8442-9d66aae97eff-1000x750-0Tvhj5IJhfrmCglSIeDbNb8ZCWjsv7VQlymrqYCD.jpg" alt="">
                </div>
                <div class="ss9-single-img-container flex-row"
                 onclick='window.location.href="https://moedati.com/ar/وصلة-كهربائية-yato-ادوات-كهربائية-yt-8108/p857296051";'
                >
                    <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/627839a9-0d66-4893-a4f3-4906d4c1abc2-1000x750-BXlOF3YFL1etFI7y5sGluhOO3fjnEOSYAliuDCCD.jpg" alt="">
                </div>
                <div class="ss9-single-img-container flex-row "
                 onclick='window.location.href="https://moedati.com/ar/حذاء-أمان-منخفض-الرقبة-plato-s3s-esd-المقاس-42-yt-80663/p2015780418";'
                 >
                    <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/3650834e-65d9-40f8-ac57-b52a036cf911-1000x750-G1Kw18KbZLnrzFPMb8pGFf5qVfZ1HgNgZUeLuWR2.jpg" alt="">
                </div>
            </div>
            <div class="ss9-bulr-div"></div>
            <div class="ss9-bulr-div-bottom"></div>
            </div>
            <div class="ss9-single-imgs-container-outer flex-row">
            <div class="ss9-single-imgs-container flex-column" id="ss9-center-scroller">
                <div class="ss9-single-img-container flex-row"
                 onclick='window.location.href="https://moedati.com/ar/كماشة-قطع-جانب-معزولة-180-مم-بمعيار-vde/p511234707";'
                >
                    <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/9f965992-5a68-4acf-81bf-4c3ffd7e198d-1000x750-PagsZD43AvrKMDfFOU60IcJV20C6lmTUqm8chiJD.jpg" alt="">
                </div>
                <div class="ss9-single-img-container flex-row"
                 onclick='window.location.href="https://moedati.com/ar/مضخة-مياه-بنزين-yato-ادوات-قياس-رقمية-yt-85403/p871436964";'
                >
                    <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/225919f0-b864-4655-838d-69008c901424-1000x750-A9KGVoBkfYfK7HVbOfluVQRhpsNwX9acBevG6Ir9.jpg" alt="">
                </div>
                <div class="ss9-single-img-container flex-row"
                 onclick='window.location.href="https://moedati.com/ar/منشار-معدني-بطول-300-ملم-yato-ادوات-يدوية-yt-31612/p889584012";'
                >
                    <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/943d9f4e-80bd-42d4-9afe-0e2fcaf6f7f5-1000x750-RPAnErdmgQy78bvJPRFQtus4p8tJfKLo0YK24F9H.png" alt="">
                </div>  
                <div class="ss9-single-img-container flex-row"
                 onclick='window.location.href="https://moedati.com/ar/مقص-أعشاب-وشجيرات-لاسلكي-yato-معدات-بستنة-yt-828355/p2131154553";'
                >
                    <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/1503db8f-bc8b-43c8-a04c-b2dd08e1d525-1000x750-AeOpS0LLKkkfcF9U2Vc5yVzOM7je7TuAL6cuR62m.png" alt="">
                </div>  
                <div class="ss9-single-img-container flex-row"
                 onclick='window.location.href="https://moedati.com/ar/ضوء-عمل-yato-ادوات-إضاءة-yt-82961/p1364941389";'
                >
                    <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/5de9590b-9d6f-4a5e-b557-c74ca61960c4-1000x750-qBmltcW1pxCQYbtYgsSlaISVN6VHmuFuWI2H0t5k.jpg" alt="">
                </div>  
            </div>
            <div class="ss9-bulr-div"></div>
            <div class="ss9-bulr-div-bottom"></div>
            </div>
            <div class="ss9-single-imgs-container-outer flex-row">
            <div class="ss9-single-imgs-container  flex-column" id="ss9-right-scroller">
              <div class="ss9-single-img-container  flex-row"
                 onclick='window.location.href="https://moedati.com/ar/مصباح-يدوي-قابل-لإعادة-الشحن-yato-ادوات-إضائة-yt-085607/p318900337";'
              >
                <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/61cdd225-636d-48f1-b740-2127e628b2f9-1000x750-ykN2qJRmxHNfnz2markHS4RvSoKV5Fi2WTzof8f2.jpg" alt="">
              </div>
              <div class="ss9-single-img-container  flex-row"
                 onclick='window.location.href="https://moedati.com/ar/شريط-قياس-yato-ادوات-قياس-yt-71070/p1019017281";'
              >
                <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/7e3620e3-c8d6-4636-ae85-8af61f6919a8-1000x750-GhtmXHrs4dCZgKfPWsdwE04BqXn1TlpeRbZ6J6kL.jpg" alt="">
              </div>
              <div class="ss9-single-img-container  flex-row"
                 onclick='window.location.href="https://moedati.com/ar/مثقاب-دقاق-كهربائي-yato-ادوات-كهربائية-yt-82791/p645338052";'
              >
                <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/0ea80a88-b2a9-4040-9372-2c8c977e1394-1000x750-wS4K7k851lIALaai13tkBy6iWW36EqTyo7PMsRCy.jpg" alt="">
              </div>
             <div class="ss9-single-img-container flex-row"
                 onclick='window.location.href="https://moedati.com/ar/portable-battery-station-yt-83091/p847971125";'
              >
                <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/13056784-56fb-4f22-a343-be3539a9e08a-1000x750-2OdYyOOkF2YUTseoqdM7pON9Iw5qPVgnD8gW1QxF.jpg" alt="">
              </div> 
             <div class="ss9-single-img-container flex-row"
                 onclick='window.location.href="https://moedati.com/ar/آلة-قطع-بلاط-600-ملم-yato-ادوات-بناء-yt-3707/p2110900041";'
              >
                <img class="ss9-single-img" src="https://cdn.salla.sa/YgXdEO/545e13b0-91be-4488-a152-0837f92f868f-1000x750-hwxrQj1yYNOk3bhO38BajYlkn7wHYxkUWSS3EiWh.jpg" alt="">
              </div> 
            </div>
            <div class="ss9-bulr-div"></div>
            <div class="ss9-bulr-div-bottom"></div>
            </div>
        </div>
        <div class="ss9-right-txts-body-div-container flex-column">
            <div class="ss9-brand-img-div">
                <img class="ss9-brand-img" src="https://cdn.salla.sa/YgXdEO/7adb908f-eb53-45e0-9818-0fe393f0e1cb-1000x289.56763189211-vzQhcHUxfgvJLvip8Vd1OBPdePbA0y5QjBCRvc7w.png" alt="">
            </div>
            <div class="ss9-txts-div ss9-top-txts-div flex-row">
                <span class="ss9-single-txts-span">المتانة وإتقان التنفيذ</span>
            </div>
            <div class="ss9-txts-div bottom-txts-div">
                <span class="ss9-single-txts-span">
                🥇 و المواد الممتازة 
                </span>
            </div>
        </div>
    </div>
  </div>
  </div>
  </section>
  `,
  );
};
const ss9animateRightCont = function () {
  const content = document.getElementById("ss9-right-scroller");
  const clone = content.cloneNode(true);
  content.parentElement.appendChild(clone);
  let y = 0;
  const speed = 0.6;
  function animate() {
    y -= speed;
    const contentHeight = content.offsetHeight;
    if (Math.abs(y) >= contentHeight) {
      y = 0;
    }
    content.style.transform = `translateY(${y}px)`;
    clone.style.transform = `translateY(${y + contentHeight}px)`;
    requestAnimationFrame(animate);
  }

  animate();
};
const ss9animateCenterCont = function () {
  const content = document.getElementById("ss9-center-scroller");
  const clone = content.cloneNode(true);
  content.parentElement.appendChild(clone);
  let y = 0;
  const speed = 0.6;
  function animate() {
    y -= speed;
    const contentHeight = content.offsetHeight;
    if (Math.abs(y) >= contentHeight) {
      y = 0;
    }
    content.style.transform = `translateY(${-y}px)`;
    clone.style.transform = `translateY(${-y + -contentHeight}px)`;
    requestAnimationFrame(animate);
  }

  animate();
};
const ss9animateLeftCont = function () {
  const content = document.getElementById("ss9-left-scroller");
  const clone = content.cloneNode(true);
  content.parentElement.appendChild(clone);
  let y = 0;
  const speed = 0.6;
  function animate() {
    y -= speed;
    const contentHeight = content.offsetHeight;
    if (Math.abs(y) >= contentHeight) {
      y = 0;
    }
    content.style.transform = `translateY(${y}px)`;
    clone.style.transform = `translateY(${y + contentHeight}px)`;
    requestAnimationFrame(animate);
  }

  animate();
};
//****** section 10 ************//
//****** section 10 ************//
//****** section 10 ************//
//****** section 10 ************//
const pushSec10 = function (index) {
  moedatiSections[index].insertAdjacentHTML(
    "afterend",
    `
<section>
  <div class="ss10-container flex-row ss3-mObserve">
    <div class="ss10-body-div" dir="rtl">
      <div class="ss10-backshpe-div"></div>
      <div class="ss10-backshpe-div ss10-backshpe2-div"></div>
        <div class="ss10-txts-div ss10-gifts-txts-div flex-column">
          <div class="ss10-single-txts-div flex-row">
            <span class="ss10-txts-span flex-row" dir="rtl">هدايــا وأكثــر !</span>
          </div>
          <div class="ss10-gifts-mainimg-div flex-row">
            <img src="https://cdn.salla.sa/YgXdEO/0d919578-06f8-4f03-8da9-c519df1d9e88-1000x1000-U34AOfn5Idm7kWrG6naav1tfnwnPUw2I1mUN1qGZ.png" class="ss10-gifts-mainimg" alt="">
          </div>
        </div>
        <div class="ss10-gifts-img-div ss10-gifts-txts-div flex-row" dir="ltr">
          <div class="ss10-gifts-body-div flex-column">
            <div class="ss10-gifts-body-back-img-div flex-row">
              <img src="https://cdn.salla.sa/YgXdEO/482dbac2-0515-4da4-9bac-56e9c97e41c0-1000x1000-yPZCTICzuHXTzup9tQe9IWzTo3FiMdZoe28tYy8J.png" alt="" class="ss10-gifts-body-back-img">
            </div>
            <div class="ss10-single-gifts-body-div flex-column" id="ss10-gb-0">
            </div>
            <div class="ss10-gifts-body-dots flex-row">
              <div class="ss10-single-gifts-body-dot ss10-single-point-div ss10-active-single-point-div" id="ss10-dot-0"></div>
              <div class="ss10-single-gifts-body-dot ss10-single-point-div" id="ss10-dot-1"></div>
              <div class="ss10-single-gifts-body-dot ss10-single-point-div" id="ss10-dot-2"></div>
              <div class="ss10-single-gifts-body-dot ss10-single-point-div" id="ss10-dot-3"></div>
              <div class="ss10-single-gifts-body-dot ss10-single-point-div" id="ss10-dot-4"></div>
            </div>
          </div>
        </div>
    </div>
    </div>
  </section>
  `,
  );
};
const ss10GiftsData = [
  {
    imgs: [
      "https://cdn.salla.sa/YgXdEO/57fa4635-e7d9-4e04-b4f9-316538890ee5-1000x1000-mnsjDxMNTvJcMUkqtcYJgsxpZMDVnjerT6NxJLNQ.jpg",
      "https://cdn.salla.sa/YgXdEO/19c3cdfb-2cda-4f31-b38f-06aa67bf8fed-1000x750-94PecXLRIeKxa7EeHqlxfmEc8Bu0mpxWvevLRVy9.jpg",
      "https://cdn.salla.sa/YgXdEO/d3ce4542-7984-4e41-820b-11e26ab8603e-998.00399201597x1000-U3vOlMM0MHkp8IdEAE6UlMGCPo8PaWnyt9B6TKWQ.jpg",
    ],
    txts: "استفد من العروض الحصرية على طلباتك",
  },
  {
    imgs: [
      "https://cdn.salla.sa/YgXdEO/19c3cdfb-2cda-4f31-b38f-06aa67bf8fed-1000x750-94PecXLRIeKxa7EeHqlxfmEc8Bu0mpxWvevLRVy9.jpg",
      "https://cdn.salla.sa/YgXdEO/d3ce4542-7984-4e41-820b-11e26ab8603e-998.00399201597x1000-U3vOlMM0MHkp8IdEAE6UlMGCPo8PaWnyt9B6TKWQ.jpg",
      "https://cdn.salla.sa/YgXdEO/48454091-3f1c-4729-b10a-aabc6f53af21-1000x1000-9r9GOPibPR2NiQmgAYguJFN3NsxlIJN60d2VoQnx.png",
    ],
    txts: "استفد من العروض الحصرية على طلباتك",
  },
  {
    imgs: [
      "https://cdn.salla.sa/YgXdEO/d3ce4542-7984-4e41-820b-11e26ab8603e-998.00399201597x1000-U3vOlMM0MHkp8IdEAE6UlMGCPo8PaWnyt9B6TKWQ.jpg",
      "https://cdn.salla.sa/YgXdEO/48454091-3f1c-4729-b10a-aabc6f53af21-1000x1000-9r9GOPibPR2NiQmgAYguJFN3NsxlIJN60d2VoQnx.png",
      "https://cdn.salla.sa/YgXdEO/57fa4635-e7d9-4e04-b4f9-316538890ee5-1000x1000-mnsjDxMNTvJcMUkqtcYJgsxpZMDVnjerT6NxJLNQ.jpg",
    ],
    txts: "استفد من العروض الحصرية على طلباتك",
  },
  {
    imgs: [
      "https://cdn.salla.sa/YgXdEO/48454091-3f1c-4729-b10a-aabc6f53af21-1000x1000-9r9GOPibPR2NiQmgAYguJFN3NsxlIJN60d2VoQnx.png",
      "https://cdn.salla.sa/YgXdEO/57fa4635-e7d9-4e04-b4f9-316538890ee5-1000x1000-mnsjDxMNTvJcMUkqtcYJgsxpZMDVnjerT6NxJLNQ.jpg",
      "https://cdn.salla.sa/YgXdEO/6da1b6bf-fb91-4c40-b124-dc7d5c49d476-1000x750-Rz1KZdINlHrtPePUnFpOPCsXM1Xx8lAEiROmitXB.jpg",
    ],
    txts: "استفد من العروض الحصرية على طلباتك",
  },
  {
    imgs: [
      "https://cdn.salla.sa/YgXdEO/57fa4635-e7d9-4e04-b4f9-316538890ee5-1000x1000-mnsjDxMNTvJcMUkqtcYJgsxpZMDVnjerT6NxJLNQ.jpg",
      "https://cdn.salla.sa/YgXdEO/6da1b6bf-fb91-4c40-b124-dc7d5c49d476-1000x750-Rz1KZdINlHrtPePUnFpOPCsXM1Xx8lAEiROmitXB.jpg",
      "https://cdn.salla.sa/YgXdEO/19c3cdfb-2cda-4f31-b38f-06aa67bf8fed-1000x750-94PecXLRIeKxa7EeHqlxfmEc8Bu0mpxWvevLRVy9.jpg",
    ],
    txts: "استفد من العروض الحصرية على طلباتك",
  },
];
var ss10ActiveGiftIndex = 0;
var ss10Interv = {};
const ss10SetActiveGift = function (activeGift) {
  ss10ActiveGiftIndex = activeGift;
  document.querySelectorAll(".ss10-single-gifts-body-dot").forEach((btn) => {
    btn.id[btn.id.length - 1] === ss10ActiveGiftIndex
      ? btn.classList.add("ss10-active-single-point-div")
      : btn.classList.remove("ss10-active-single-point-div");
  });
  document.querySelector(".ss10-single-gifts-body-div").innerHTML = "";
  document.querySelector(".ss10-single-gifts-body-div").insertAdjacentHTML(
    "afterbegin",
    `
              <div class="ss10-gb-imgs-div flex-row">
                <div class="ss10-gb-single-img-div ss10-gb-single-img-l-div ss10-gb-single-img-trans flex-row">
                  <img src="${ss10GiftsData[ss10ActiveGiftIndex].imgs[0]}" alt="" class="ss10-gb-single-img">
                  <div class="ss10-gb-single-img-bulr-div"></div>
                </div>
                <div class="ss10-gb-single-img-div ss10-gb-single-img-c-div ss10-gb-single-img-trans flex-row">
                  <img src="${ss10GiftsData[ss10ActiveGiftIndex].imgs[1]}" alt="" class="ss10-gb-single-img">
                </div>
                <div class="ss10-gb-single-img-div ss10-gb-single-img-r-div ss10-gb-single-img-trans flex-row">
                  <img src="${ss10GiftsData[ss10ActiveGiftIndex].imgs[2]}" alt="" class="ss10-gb-single-img">
                  <div class="ss10-gb-single-img-bulr-div"></div>
                </div>
              </div>
              <div class="ss10-txts-body-div  flex-row">
                <p class="ss10-txts-body-pragf">
                  ${ss10GiftsData[ss10ActiveGiftIndex].txts}
                </p>
              </div>
        `,
  );
  document.querySelectorAll(".ss10-gb-single-img-div").forEach((elem, i) => {
    setTimeout(
      () => {
        elem.classList.remove("ss10-gb-single-img-trans");
      },
      (i + 1) * 100,
    );
  });
};
const ss10AddBtnsEvent = function () {
  document.querySelectorAll(".ss10-single-gifts-body-dot").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      ss10SetActiveGift(e.target.id[e.target.id.length - 1]);
    });
    btn.addEventListener("mouseenter", () => {
      clearInterval(ss10Interv);
    });
    btn.addEventListener("mouseout", () => {
      ss10RunInterval();
    });
  });
};
const ss10RunInterval = function () {
  ss10Interv = setInterval(() => {
    ss10ActiveGiftIndex < 4 ? ss10ActiveGiftIndex++ : (ss10ActiveGiftIndex = 0);
    ss10SetActiveGift(String(ss10ActiveGiftIndex));
  }, 5000);
};
//****** section 11 ************//
//****** section 11 ************//
//****** section 11 ************//
//****** section 11 ************//
const pushSec11 = function (index) {
  moedatiSections[index].insertAdjacentHTML(
    "afterend",
    `
  <section>
  <div class="ss11-container flex-row ss3-mObserve" dir="ltr">
    <div class="ss11-inner-container">
      <div class="ss11-lines-div"></div>
      <div class="ss11-lines-div ss11-lines-div-2"></div>
      <div class="ss11-txts-div flex-column" dir="rtl">
        <div class="ss11-inner-txts-div flex-column">
          <div class="s11-single-txt-div s11-single-txt-top-div flex-row">
            <span class="ss11-single-span ss11-left-span-trans ss11-span-left-tran">
              اقوى صناديق العدد اليدوية
            </span>
          </div>
          <div class="s11-single-txt-div flex-row">
            <span class="ss11-single-span ss11-right-span-trans ss11-span-left-tran">
              متكاملة.. جودة عالية.. احترافية
            </span>
          </div>
        </div>
        <div class="s11-single-btn-div flex-row">
          <button class="ss11-discover-btn"
          onclick='window.location.href="https://moedati.com/ar/صناديق-عدد-يدوية/c12337959";'
          >
            اكتشف المزيد
          </button>
        </div>
      </div>
      <div class="ss11-image-div flex-column">
        <img src="https://cdn.salla.sa/YgXdEO/cbe95493-2fe3-458d-87b7-65b5e3f2e6cb-1000x666.66666666667-VFOfiHCzui8HLMG90xA0ZcHb95YyyQPK521yWtqJ.png" alt="" class="ss11-back-img ss11-back-img-trans">
      </div>
    </div>
  </div>
  </section>
  `,
  );
};
//****** section 13 ************//
//****** section 13 ************//
//****** section 13 ************//
//****** section 13 ************//
const pushSec13 = function (index) {
  moedatiSections[index].insertAdjacentHTML(
    "afterend",
    `
  <section>
      <div class="ss13-outer-container flex-row">
        <div class="ss13-container flex-row">
        <div class="ss13-framevid-overlaydiv flex-row">
          <div class="ss13-vid-overlay ss13-vid-overlay-top" style="z-index: 1"></div>
          <div class="ss13-vid-overlay ss13-vid-overlay-bottom flex-row" style="z-index: 1">
            <button
              class="ss13-show-pro-btn"
              onclick="
                window.location.href =
                  'https://moedati.com/ar/هيلتي-شحن-18-فولت-بدون-فحم-24-مم-مع-بطاريتين-4-أمبير-yt-827724yt-827724/p2021489293'
              "
            >
              شراء الآن
            </button>
          </div>
          <iframe
            class="ss13-vid-div"
            src="https://player.cloudinary.com/embed/?cloud_name=dpvuuyg6w&public_id=WhatsApp_Video_2026-09-16_at_18.57.08_qggku8"
            frameborder="0"
            allowfullscreen
          >
          </iframe>
        </div>
        <div class="ss13-framevid-overlaydiv flex-row">
          <div class="ss13-vid-overlay ss13-vid-overlay-top" style="z-index: 1"></div>
          <div class="ss13-vid-overlay ss13-vid-overlay-bottom flex-row" style="z-index: 1">
            <button
              class="ss13-show-pro-btn"
              onclick="
                window.location.href =
                  'https://moedati.com/ar/غسالة-يد-yato-ادوات-يدوية-yt-01234t/p374950419'
              "
            >
              شراء الآن
            </button>
          </div>
          <iframe
            class="ss13-vid-div"
            src="https://player.cloudinary.com/embed/?cloud_name=dpvuuyg6w&public_id=WhatsApp_Video_2026-09-16_at_18.57.07_tp0ido"
            frameborder="0"
            allowfullscreen
          >
          </iframe>
        </div>
        <div class="ss13-framevid-overlaydiv flex-row">
        <div class="ss13-vid-overlay ss13-vid-overlay-top" style="z-index: 1"></div>
        <div class="ss13-vid-overlay ss13-vid-overlay-bottom flex-row" style="z-index: 1">
          <button
            class="ss13-show-pro-btn"
            onclick="
              window.location.href =
                'https://moedati.com/ar/هيلتي-شحن-18-فولت-بدون-فحم-24-مم-مع-بطاريتين-4-أمبير-yt-827724yt-827724/p2021489293'
            "
          >
            شراء الآن
          </button>
        </div>
        <iframe
          class="ss13-vid-div"
          src="https://player.cloudinary.com/embed/?cloud_name=dpvuuyg6w&public_id=InShot_20260917_095126469_bz9upo"
          frameborder="0"
          allowfullscreen
        >
        </iframe>
      </div>
            <div class="ss13-framevid-overlaydiv flex-row">
                <div class="ss13-vid-overlay ss13-vid-overlay-top" style="z-index: 1;"></div>
                <div class="ss13-vid-overlay ss13-vid-overlay-bottom flex-row" style="z-index: 1;">
                    <button class="ss13-show-pro-btn"
                    onclick="window.location.href = 'https://moedati.com/ar/redirect/categories/540250071'"
                    >
                        شراء الآن
                    </button>
                </div>
                <iframe class="ss13-vid-div"
                src="https://player.cloudinary.com/embed/?cloud_name=dpvuuyg6w&public_id=InShot_20260326_133634682_sgfuka"
                frameborder="0" allowfullscreen>
                </iframe>
            </div>
            <div class="ss13-framevid-overlaydiv flex-row">
                <div class="ss13-vid-overlay ss13-vid-overlay-top" style="z-index: 1;"></div>
                <div class="ss13-vid-overlay ss13-vid-overlay-bottom flex-row" style="z-index: 1;">
                    <button class="ss13-show-pro-btn"
                    onclick="window.location.href = 'https://moedati.com/ar/مفك-براغي-لاسلكي-yato-ادوات-كهربائية-yt-82760/p369064557'"
                    >
                        شراء الآن
                    </button>
                </div>
                <iframe class="ss13-vid-div"
                src="https://player.cloudinary.com/embed/?cloud_name=dpvuuyg6w&public_id=InShot_20260328_154624244_c4fhef"
                frameborder="0" allowfullscreen>
                </iframe>
            </div>
            
            <div class="ss13-framevid-overlaydiv flex-row">
                <div class="ss13-vid-overlay ss13-vid-overlay-top" style="z-index: 1;"></div>
                <div class="ss13-vid-overlay ss13-vid-overlay-bottom flex-row" style="z-index: 1;">
                    <button class="ss13-show-pro-btn"
                    onclick='window.location.href="https://moedati.com/ar/عربة-أدوات-بثلاث-قطع-مع-أدوات-ادوات-يدوية-yato-yt-09104/p51913717";'
                    >
                        شراء الآن
                    </button>
                </div>
                <iframe class="ss13-vid-div"
                src="https://player.cloudinary.com/embed/?cloud_name=dpvuuyg6w&public_id=InShot_20260318_115146363_fprjr5"
                frameborder="0" allowfullscreen>
                </iframe>
            </div>
            <div class="ss13-framevid-overlaydiv flex-row">
                <div class="ss13-vid-overlay ss13-vid-overlay-top" style="z-index: 1;"></div>
                <div class="ss13-vid-overlay ss13-vid-overlay-bottom flex-row" style="z-index: 1;">
                    <button class="ss13-show-pro-btn"
                    onclick='window.location.href="https://moedati.com/ar/مضخة-هواء-yato-ادوات-كهربائية-yt-82894/p2110146409";'
                    >
                        شراء الآن
                    </button>
                </div>
                <iframe class="ss13-vid-div"
                src="https://player.cloudinary.com/embed/?cloud_name=dpvuuyg6w&public_id=InShot_20260205_142829610_qxwrrb"
                frameborder="0" allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>
  </section>
  `,
  );
};

const makeSS13ContainerMove = function () {
  const slider = document.querySelector(".ss13-container");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => (isDown = false));
  slider.addEventListener("mouseup", () => (isDown = false));
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.3; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });
  requestAnimationFrame(() => {
    slider.scrollTo({
      left: 500,
      behavior: "smooth",
    });
  });
};
//****** section 14 ************//
//****** section 14 ************//
//****** section 14 ************//
//****** section 14 ************//
const pushSec14 = function (index) {
  moedatiSections[index].insertAdjacentHTML(
    "afterend",
    `
  <section>
    <div class="ss14-container flex-row">
      <div class="ss14-inner-container flex-row"></div>
    </div>
  </section>
  `,
  );
};
const ss14CutomerData = [
  {
    name: "فهد العتيبي",
    stars: 4,
    img: "https://cdn.files.salla.network/products/1157822896/2abaff9c-d860-4e54-8d5f-8cb3cd79c3ab_317x269.webp",
    comment: "تعامل راق شكرا",
  },
  {
    name: "أبو ناصر",
    stars: 2,
    img: "https://cdn.files.salla.network/products/1157822896/cd1c4888-88ab-48c5-9958-ff1004cd37f0_326x274.webp",
    comment: "أول مرة أطلب من المتجر بس كويس موفقين",
  },
  {
    name: "عبدالله الحربي",
    stars: 3,
    img: "https://cdn.assets.salla.network/prod/admin/cp/assets/images/avatar_male.png",
    comment: "الطلب وصل والسعر نفسه سعر المعرض",
  },
  {
    name: "ahmad mahmoud",
    stars: 4,
    img: "https://cdn.assets.salla.network/prod/admin/cp/assets/images/avatar_male.png",
    comment: "بصراحة متجر محترم والمنتج جالي زي ما هو بالظبط",
  },
  {
    name: "محمد السيد",
    stars: 1,
    img: "https://cdn.files.salla.network/products/1157822896/cbfed521-3d46-4489-a963-79686990214c_316x286.webp",
    comment: "أسعار كويسة وخدمة العملاء متعاونة",
  },
  {
    name: "محمود حسن",
    stars: 3,
    img: "https://cdn.assets.salla.network/prod/admin/cp/assets/images/avatar_male.png",
    comment: "الشحن تاخر يوم بس الجودة ممتازة",
  },
  {
    name: "أبو عمر",
    stars: 4,
    img: "https://cdn.files.salla.network/products/1157822896/71dd9625-924c-4426-9ad5-9d4de9bfb598_323x273.webp",
    comment: "تعامل محترم وأسعار مناسبة",
  },
  {
    name: "khalid el-shamii",
    stars: 2,
    img: "https://cdn.assets.salla.network/prod/admin/cp/assets/images/avatar_male.png",
    comment: "متجر موثوق وخدمة ممتازة من الطلب للاستلام",
  },
  {
    name: "أحمد عصام",
    stars: 2,
    img: "https://cdn.files.salla.network/products/1157822896/088039bc-96e7-49cc-a45a-bb38f230ce5e_322x288.webp",
    comment: "تجربة شراء ممتازة وإن شاء الله هطلب تاني",
  },
  {
    name: "علي الزهراني",
    stars: 4,
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
];
const ss14setCustomers = function () {
  const customersContainer = document.querySelector(".ss14-inner-container");
  ss14CutomerData.forEach((customer, i) => {
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
                    <div class="ss14-stars-div flex-row" id ="ss14-stars-${i}">
                        
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
};
const ss14animation = function () {
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
};
const ss14setStars = function () {
  ss14CutomerData.forEach((customer, i) => {
    const elemId = `ss14-stars-${i}`;
    const eleStars = document.getElementById(elemId);
    for (let index = 0; index < customer.stars; index++) {
      eleStars.insertAdjacentHTML("afterbegin", `<span class="ss14-star-icon flex-row">★</span>`);
    }
  });
};
//****** section 16 ************//
//****** section 16 ************//
//****** section 16 ************//
//****** section 16 ************//
const pushSec16 = function (index) {
  moedatiSections[index].insertAdjacentHTML(
    "afterend",
    `
  <section>
  <div class="ss16-container">
  </div>
  </section>
  `,
  );
};
const ss16Products = [
  {
    img: "https://cdn.files.salla.network/products/1157822896/4a558325-029e-4c8a-b0ea-907fc6be8e38-original.webp",
    name: "مولد كهرباء بنزين BS10500 بقدرة قصوى 9 كيلوواط، تشغيل كهربائي، ملف نحاسي",
    price: 4330,
    link: "https://moedati.com/ar/مولد-كهرباء-بنزين-bs10500-بقدرة-قصوى-9-كيلوواط،-تشغيل-كهربائي،-ملف-نحاسي/p1657935936",
  },
  {
    img: "https://cdn.salla.sa/YgXdEO/products/Zp00tRJsm4FNZKatFSU3tk7qBDIQmFjY3hxAOozU.jpg",
    name: "ماكينة غسيل ضغط عالي بنزين 200 بار للمزارع والسيارات والمعدات BS-180DSP",
    price: 1350,
    link: "https://moedati.com/ar/ماكينة-غسيل-ضغط-عالي-بنزين-200-بار-للمزارع-والسيارات-والمعدات-bs-180dspbs-180dsp/p1395756505",
  },
  {
    img: "https://cdn.salla.sa/YgXdEO/82106e63-df6d-44f3-837b-dfafbba4e2bf-1000x983.34540188269-P07wUEUuinqSZFfLgQURKMTc1QX1xx7KlSza8WA6.jpg",
    name: "كماشة كبس مواسير PEX متعددة المقاسات للسباكة الاحترافية YT-21731",
    price: 1950,
    link: "https://moedati.com/ar/كماشة-كبس-مواسير-pex-متعددة-المقاسات-للسباكة-الاحترافية-yt-21731yt-21731/p2108862084",
  },
  {
    img: "https://cdn.salla.sa/YgXdEO/14692979-d105-4070-b69d-ce72dbfaa1e9-1000x750-TggtoK6PYmfC2aI9U5cTDUTjBrZYIzdXAubfs1lK.jpg",
    name: "ماكينة لحام مواسير بلاستيك YT-82251BS",
    price: 160,
    link: "https://moedati.com/ar/ماكينة-لحام-مواسير-بلاستيك-yt-82251bsyt-82251bs/p770563509",
  },
  {
    img: "https://cdn.files.salla.network/products/1157822896/35852f51-68ef-4c9b-a62a-f24696f13cca_559x509.webp",
    name: "كومبريسور هواء كهربائي 50 لتر 2 حصان 10 بار TX2065-50",
    price: 800,
    link: "https://moedati.com/ar/كومبريسور-هواء-كهربائي-50-لتر-2-حصان-10-بار-tx2065-50/p610726096",
  },
  {
    img: "https://cdn.files.salla.network/products/1157822896/746561f4-0435-4942-aef6-f3bed9ad0ab8_610x437.webp",
    name: "آلة قطع الأسفلت تعمل بالديزل 14 حصانًاقصى قطر للقرص 20 بوصة BS-Q500D",
    price: 3500,
    link: "https://moedati.com/ar/آلة-قطع-الأسفلت-تعمل-بالديزل-14-حصانًاقصى-قطر-للقرص-20-بوصة-bs-q500d/p2026996844",
  },
  {
    img: "https://cdn.salla.sa/YgXdEO/59e84965-574b-4c9e-b3e5-afa16bb9d792-1000x750-6BxqmKJuNYkthxv3P4XUF29IFpbv6XhPsnMWdQvR.jpg",
    name: "YT-74753 قفازات عمل بوليستر مطلية PU مقاس 10",
    price: 6,
    link: "https://moedati.com/ar/yt-74753-قفازات-عمل-بوليستر-مطلية-pu-مقاس-10yt-74753/p1245050163",
  },
  {
    img: "https://cdn.salla.sa/YgXdEO/a33259c3-88a3-4162-a3ba-095e6a718058-1000x750-qoQf7XPCohfBQYMUHyVDQ7EtsfVVj4hDiMrJAWNk.jpg",
    name: "YT-60622 185x36Tx 20mm شفرة TCT للخشب",
    price: 25,
    link: "https://moedati.com/ar/yt-60622-185x36tx-20mm-شفرة-tct-للخشبyt-60622/p1554425904",
  },
  {
    img: "https://cdn.salla.sa/YgXdEO/9d1eeb5c-cc0b-4b0e-9102-6c9b33817911-1000x750-VKg7N21bsb7Y9zGY20PSi3UfGcFgXe4BbeKBCTwF.jpg",
    name: "YT-82826 صاروخ شحن 5 بوصة 18 فولت بدون سلك لقص وجلخ المعادن",
    price: 355,
    link: "https://moedati.com/ar/yt-82826-صاروخ-شحن-5-بوصة-18-فولت-بدون-سلك-لقص-وجلخ-المعادنyt-82826/p250156499",
  },
  {
    img: "https://cdn.salla.sa/YgXdEO/516466fd-f358-4c05-bf32-c12b2ca89599-1000x750-cenQ2X5o8ba8LrFe40brAjy6PuOCVnylwEE3hgVP.jpg",
    name: "حذاء سلامة منخفض الرقبة S3 مقاس 46 YT-80559",
    price: 85,
    link: "https://moedati.com/ar/حذاء-سلامة-منخفض-الرقبة-s3-مقاس-46-yt-80559yt-80559/p2020256613",
  },
  {
    img: "https://cdn.salla.sa/YgXdEO/0a90b422-1722-4146-b084-76f09fdaee0b-1000x1000-am0Fke3mZliPHmxezUclJByFBav2sPEMpBqRNdvT.jpg",
    name: "قرص قطع إينوكس 230x1.8x22.23ملم  YT-61068",
    price: 4.85,
    link: "https://moedati.com/ar/قرص-قطع-إينوكس-230x1.8x22.23ملم-yt-61068yt-61068/p1199468090",
  },
];
const ss16PushCard = function () {
  const ss16CardsContainer = document.querySelector(".ss16-container");
  ss16Products.forEach((product, i) => {
    ss16CardsContainer.insertAdjacentHTML(
      "beforeend",
      `
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
                                        ${sedigAddTax(product.price)}
                                    </span>
                                    <i class="sicon-sar my-sicon-sar"></i>
                                </div>
                                <div class="price-reyal-div  flex-row">
                                    <span class="ss16-discount-price-span">
                                        ${sedigAddTaxWithDisc(product.price)}
                                    </span>
                                    <i class="sicon-sar my-sicon-sar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
    );
  });
};
const ss16ContainerMove = function () {
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
  slider.addEventListener(
    "click",
    (e) => {
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
        hasDragged = false;
      }
    },
    true,
  );
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
};
//****** push sections ************//
//****** push sections ************//
//****** push sections ************//
if (isHomePage()) {
  // push sec16
  pushSec16(0);
  ss16PushCard();
  ss16ContainerMove();
  // push sec11
  moedatiSections = document.querySelector(".app-inner").querySelectorAll("section");
  pushSec11(2);
  //push sec13
  moedatiSections = document.querySelector(".app-inner").querySelectorAll("section");
  pushSec13(3);
  makeSS13ContainerMove();
  // push sec6
  moedatiSections = document.querySelector(".app-inner").querySelectorAll("section");
  pushSec6(4);
  ss6PushItems();
  addBackNextEvent();
  ss6SetActiveItem(0);
  // push sec5
  moedatiSections = document.querySelector(".app-inner").querySelectorAll("section");
  pushSec5(5);
  makeSS5ContainerMove();
  pushProductsTosec5();
  // push se9
  moedatiSections = document.querySelector(".app-inner").querySelectorAll("section");
  pushSec9(6);
  ss9animateRightCont();
  ss9animateCenterCont();
  ss9animateLeftCont();
  // push sec7
  moedatiSections = document.querySelector(".app-inner").querySelectorAll("section");
  pushSec7(7);
  ss7PushBlog();
  makeSS7ContainerMove();
  // push sec14
  moedatiSections = document.querySelector(".app-inner").querySelectorAll("section");
  pushSec14(8);
  ss14setCustomers();
  ss14setStars();
  ss14animation();
  // push sec10
  moedatiSections = document.querySelector(".app-inner").querySelectorAll("section");
  pushSec10(9);
  ss10AddBtnsEvent();
  ss10SetActiveGift("0");
  // push sec8
  moedatiSections = document.querySelector(".app-inner").querySelectorAll("section");
  pushSec8(10);
  ss8WatchWidth();
}
const sElmentNeedObs = document.querySelectorAll(".ss3-mObserve");
sElmentNeedObs.forEach(function (elment) {
  sedigIso.observe(elment);
});
//****** seafty page ************//
//****** seafty page ************//
//****** seafty page ************//
function isSeaftyPage() {
  const { pathname, search } = window.location;
  // Remove possible trailing slashes ("/" or "")
  const cleanPath = pathname.replace(/\/+$/, "");
  // It's homepage if:
  // 1. Path is empty or root ("/")
  // 2. Only query params (like ?lang=en) are present
  // return cleanPath === '' || cleanPath === '/moedati' || cleanPath === '/ar' || cleanPath === '/en';
  if (cleanPath.includes("page-199316679")) {
    const slider = document.querySelector(".sss2-cards-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => (isDown = false));
    slider.addEventListener("mouseup", () => (isDown = false));
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll speed
      slider.scrollLeft = scrollLeft - walk;
    });
    requestAnimationFrame(() => {
      slider.scrollTo({
        left: -100,
        behavior: "smooth",
      });
    });
    const sss4Products = [
      {
        proName: "حذاء سلامة متوسط الارتفاع S3 مقاس 46  YT-80801",
        proImg:
          "https://cdn.salla.sa/YgXdEO/ca61bb88-392c-4137-a173-6917f77aaca4-1000x750.90909090909-r5xdVuVqUrd1cnJvfwKuZ6gogUbkS5TzX0AXuOU9.jpg",
        proPrice: 85,
        proLink:
          "https://moedati.com/ar/حذاء-سلامة-متوسط-الارتفاع-s3-مقاس-46-yt-80801yt-80801/p1668860231",
      },
      {
        proName: "حذاء أمان رياضي PUBS SBP مقاس 47 YT-80628",
        proImg:
          "https://cdn.salla.sa/YgXdEO/0477df26-81b0-41f7-a2e0-56fe6d44fef7-1000x750-vPEUGEptaCYWk0Xpvu2yMy2Tx6SWbpTZHkV7gvVn.jpg",
        proPrice: 155,
        proLink:
          "https://moedati.com/ar/حذاء-أمان-رياضي-pubs-sbp-مقاس-47-yt-80628yt-80628/p436509557",
      },
      {
        proName: "جاكيت سوفت شيل XXL  YT-80394",
        proImg:
          "https://cdn.salla.sa/YgXdEO/99c2cbc3-7717-40c2-a49f-62d67f1c4182-891.16859946476x1000-AKoyi0Bv3mLzM32q4GDoAD4KCC9sPIbxb76QdsXu.jpg",
        proPrice: 165,
        proLink: "https://moedati.com/ar/جاكيت-سوفت-شيل-xxl-yt-80394yt-80394/p1554476315",
      },
      {
        proName: "حذاء سلامة منخفض الرقبة S3 مقاس 46 YT-80559",
        proImg:
          "https://cdn.salla.sa/YgXdEO/67f8be55-814f-4430-9bbc-d4ae6cf17662-1000x750-Myee1M9hvhu9hV1u0fSAKjD6EXrVXNGEpiOTKlg9.jpg",
        proPrice: 85,
        proLink:
          "https://moedati.com/ar/حذاء-سلامة-منخفض-الرقبة-s3-مقاس-46-yt-80559yt-80559/p2020256613",
      },
      {
        proName: "L سترة سلامة 74664",
        proImg:
          "https://cdn.salla.sa/YgXdEO/8f95a075-1f57-44d6-b35b-9395d336b834-1000x750-2Y9iEhtQkPYYIWi1m6Bgiq6Kr4dbDVh8JMYMtNmb.jpg",
        proPrice: 10,
        proLink: "https://moedati.com/ar/l-سترة-سلامة-7466474664/p1975348164",
      },
      {
        proName: "قفازات نايترايل مقاومة قص 50 قطعة  YT-74743 XL",
        proImg:
          "https://cdn.salla.sa/YgXdEO/8f9c4e5d-2c6f-4458-87dc-89884c9a3b19-1000x1000-GzLJAk3IwaTGcQaQpSS0J0FBlzS47dQlN7iWviEL.png",
        proPrice: 25,
        proLink:
          "https://moedati.com/ar/قفازات-نايترايل-مقاومة-قص-50-قطعة-yt-74743-xlyt-74743/p777161700",
      },
      {
        proName: "قفازات عمل بوليستر 74077",
        proImg:
          "https://cdn.salla.sa/YgXdEO/7199010e-c443-4dc4-a944-bdf0e6c90072-1000x750-GMipTmNiNEwD4WZSN1QPpneV8LWvIfP33ISJOen7.jpg",
        proPrice: 28,
        proLink: "https://moedati.com/ar/قفازات-عمل-بوليستر/p967860439",
      },
      {
        proName: "احذية سلامة رياضية PACS SBP الحجم 45 YT-80638",
        proImg:
          "https://cdn.salla.sa/YgXdEO/36efedd9-da0e-4c2b-894e-718e1b6a249a-1000x750-0b6LsP3RXqAoVQMywgBVrW49l0L4W4qnMDUJTZBS.jpg",
        proPrice: 155,
        proLink:
          "https://moedati.com/ar/أحذية-السلامة-الرياضية-yato-أدوات-السلامة-yt-80638/p1313537506",
      },
      {
        proName: "حذاء سلامة مريح القطع  المقاس 46",
        proImg:
          "https://cdn.salla.sa/YgXdEO/0ab309aa-2ca0-45a6-9431-3b33543ac110-1000x750-dbNsterf73Oc9poxviuAEbCns4dUQgFujTEd7kle.jpg",
        proPrice: 216,
        proLink: "https://moedati.com/ar/سيفتي-شوز-مريح-القطع-مقاس-46/p302916309",
      },
      {
        proName: "بنطال عمل بحمالات المقاس : L  YT-80914",
        proImg:
          "https://cdn.salla.sa/YgXdEO/cbd5eee3-efdb-4986-bad1-ae926fe0fa2b-1000x750-avTgjapWYN5GhOXCAM9UAueLtw4Y66bCPXrEgeWq.jpg",
        proPrice: 100,
        proLink:
          "https://moedati.com/ar/بنطال-عمل-بحمالات-المقاس-yato-أدوات-السلامة-yt-80914/p1063384474",
      },
      {
        proName: "قفازات جلد صناعي بنقاط سيليكون ضد الانزلاق، المقاس 9 YT-74665",
        proImg:
          "https://cdn.salla.sa/YgXdEO/c82214f2-3e79-4e08-836d-2cfa331cfc81-1000x750-7FHBVwNIdA4SKHBlLumRhlnGHMiDWeJz02fD8KFu.jpg",
        proPrice: 35,
        proLink:
          "https://moedati.com/ar/قفازات-جلد-صناعي-بنقاط-سيليكون-ضد-الانزلاق-yato-أدوات-السلامة-yt-74665/p682207678",
      },
      {
        proName: "ممتص صدمات بأقصى حمولة 100 كجم YT-74227",
        proImg:
          "https://cdn.salla.sa/YgXdEO/8bc1b9e4-d753-46d7-9cde-5702037191f2-1000x750-OmsjEyIZp0aTIseedszfkYKXxwYtcFSgZE4Xxxbp.jpg",
        proPrice: 50,
        proLink:
          "https://moedati.com/ar/ممتص-صدمات-بأقصى-حمولة-yato-أدوات-السلامة-yt-74227/p216427452",
      },
      {
        proName: "بدلة عمل مقاس L YT-80196",
        proImg:
          "https://cdn.salla.sa/YgXdEO/b8bff86c-537f-43e3-8529-a89219328d64-1000x1000-rEtwIojSqI27BtBIcyFeOOTlA3NnXseqjwEaXU39.png",
        proPrice: 145,
        proLink: "https://moedati.com/ar/بدلة-عمل-مقاس-yato-أدوات-السلامة-yt-80196/p884553306",
      },
      {
        proName: "احذية سلامة منخفضة الرقبة PLATO S3S ESD المقاس 43 YT-80664",
        proImg:
          "https://cdn.salla.sa/YgXdEO/9fbeee2f-1ac2-4291-9902-e715126994f6-1000x750-jEqlaxzM2reIHDbBzPlC060Rwe3iYrM9s1RrV6hf.jpg",
        proPrice: 145,
        proLink:
          "https://moedati.com/ar/حذاء-أمان-منخفض-الرقبة-yato-ادوات-سلامة-yt-80664/p1133763150",
      },
      {
        proName: "بنطال عمل برباط بحجم XL YT-80174",
        proImg:
          "https://cdn.salla.sa/YgXdEO/74b0cc11-2fbe-46b7-97c3-0b28e17bd714-1000x750-1qGaRVmheuDAEfAMIki4XQJopO1AzHCS67t4FPTA.jpg",
        proPrice: 110,
        proLink: "https://moedati.com/ar/بنطال-عمل-برباط-yato-أدوات-السلامة-yt-80174/p812889403",
      },
      {
        proName: "جاكيت عمل DUERO المقاس XXL YT-8024-TS",
        proImg:
          "https://cdn.salla.sa/YgXdEO/ce6053c8-bbec-4331-a8f2-0d289797d927-1000x750-69ZePwKFEEqXPdBL4FgJxASLQPAaaqfNnIInkZ86.jpg",
        proPrice: 75,
        proLink: "https://moedati.com/ar/جاكيت-عمل-yato-أدوات-السلامة-yt-8024/p1937239100",
      },
      {
        proName: "سماعات أذن 34 ديسيبل YT-74630",
        proImg:
          "https://cdn.salla.sa/YgXdEO/260d7476-dcab-4a5a-a550-2d8560498686-1000x750-oSrqBYSlgEFXKL4UJlUdtY4rr27EWOsxq8UYSbbo.jpg",
        proPrice: 35,
        proLink:
          "https://moedati.com/ar/سماعات-أذن-34-ديسيبل-yato-ادوات-سلامة-yt-74630/p1676627153",
      },
      {
        proName: "نظارات واقية مع تهوية غير مباشرة YT-73831",
        proImg:
          "https://cdn.salla.sa/YgXdEO/53462a01-1bde-4400-a891-e9572cc5c1d0-1000x750-Bh09OGUpLRlbGRvFVopzVH1ZcnHSKy4zLQ2zjZJ7.jpg",
        proPrice: 15,
        proLink:
          "https://moedati.com/ar/نظارات-واقية-مع-تهوية-غير-مباشرة-yato-ادوات-سلامة-yt-73831/p369241552",
      },
      {
        proName: "بنطال عمل برباط بحجم XL YT-80174",
        proImg:
          "https://cdn.salla.sa/YgXdEO/74b0cc11-2fbe-46b7-97c3-0b28e17bd714-1000x750-1qGaRVmheuDAEfAMIki4XQJopO1AzHCS67t4FPTA.jpg",
        proPrice: 110,
        proLink: "https://moedati.com/ar/بنطال-عمل-برباط-yato-أدوات-السلامة-yt-80174/p812889403",
      },
      {
        proName: "قفازات جلد صناعي بنقاط سيليكون ضد الانزلاق، المقاس 9 YT-74665",
        proImg:
          "https://cdn.salla.sa/YgXdEO/c82214f2-3e79-4e08-836d-2cfa331cfc81-1000x750-7FHBVwNIdA4SKHBlLumRhlnGHMiDWeJz02fD8KFu.jpg",
        proPrice: 35,
        proLink:
          "https://moedati.com/ar/قفازات-جلد-صناعي-بنقاط-سيليكون-ضد-الانزلاق-yato-أدوات-السلامة-yt-74665/p682207678",
      },
    ];
    let sss4LastIndex = 0;

    const sss4pushcarts = function () {
      const sss4Cont = document.querySelector(".sss4InnerContainer");
      for (let i = 0; i < sss4Products.length; i++) {
        if (i >= sss4LastIndex) {
          if (sss4LastIndex === 18) {
            sss4LastIndex++;
            window.location.href = "https://moedati.com/ar/redirect/categories/1044224189";
          }
          if (i !== 0 && i % 6 === 0 && i !== sss4LastIndex) {
            sss4LastIndex += 6;
            break;
          }
          sss4Cont.insertAdjacentHTML(
            "beforeend",
            `
                <div class="sss4-single-small-card flex-column"
                    onclick='window.location.href="${sss4Products[i].proLink}";'
                >
                    <div class="sss4-img-div flex-row">
                        <img class="sss4-pro-img" src="${sss4Products[i].proImg}" alt="">
                    </div>
                    <div class="sss4-smll-card-disc flex-column">
                        <p class="sss4-pro-name">
                        ${sss4Products[i].proName}
                        </p>
                        <div class="sss4-line-div"></div>
                        <div class="sss4-pro-price-addtocrt flex-row">
                            <div class="sss4-price-div flex-column">
                                <div class="sss4-single-price-div flex-row">
                                    <span class="sss4-price-span sss4-new-price-span">
                                        ${sedigAddTaxWithDisc(sss4Products[i].proPrice)}    
                                    </span>
                                    <i class="sicon-sar sss4-new-price-span"></i>
                                </div> 
                                <div class="sss4-single-price-div flex-row">
                                    <span class="sss4-price-span sss4-old-price-span">
                                    ${sedigAddTax(sss4Products[i].proPrice)}    
                                    </span>
                                    <i class="sicon-sar sss4-old-price-span"></i>
                                </div>
                            </div>
                            <div class="sss4-addto-cart-div flex-row">
                                <span class="s-button-text"><i class="inline-block sicon-cart2"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                `,
          );
        }
      }
    };

    const sss4addBtnEvent = function () {
      document.querySelector(".sss4-showmore-btn").addEventListener("click", () => {
        sss4pushcarts();
      });
    };

    sss4addBtnEvent();
    sss4pushcarts();
  }
}
isSeaftyPage();

//****** push section in any order ************//
//****** push section in any order ************//
//****** push section in any order ************//
//****** push section in any order ************//
//****** push section in any order ************//
// إضافة صورة البانر فوق كل الصفحة
// document.querySelector("header").insertAdjacentHTML("afterend", `
// <div class="banner-container">
//     <img src="https://i.ibb.co/SDtrW9qn/Frame-1171275625.png" class="banner-img">
// </div>
// `);

// إضافة CSS للصورة
const style = document.createElement("style");
style.innerHTML = `
.banner-container{
    width: 100%;
    overflow: hidden;
    margin-bottom: 10px; /* المسافة بين البانر وباقي الصفحة */
}
.banner-img{
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover; /* يملأ العرض بالكامل مع الحفاظ على الأبعاد */
}
`;
// document.head.appendChild(style);
