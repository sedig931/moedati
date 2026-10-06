<template>
  <div class="sss4-container flex-column" dir="rtl">
    <div class="sss4InnerContainer flex-row">
   
    </div>
    <button class="sss4-showmore-btn">تحميل المزيد</button>
  </div>

</template>
<script>
export default {
  components: {},
  data() {
    return {
        sss4Products:[
        {
            proName:'حذاء سلامة متوسط الارتفاع S3 مقاس 46  YT-80801',
            proImg:'https://cdn.salla.sa/YgXdEO/ca61bb88-392c-4137-a173-6917f77aaca4-1000x750.90909090909-r5xdVuVqUrd1cnJvfwKuZ6gogUbkS5TzX0AXuOU9.jpg',
            proPrice:85,
            proLink:'https://moedati.com/ar/حذاء-سلامة-متوسط-الارتفاع-s3-مقاس-46-yt-80801yt-80801/p1668860231'
        },
        {
            proName:'حذاء أمان رياضي PUBS SBP مقاس 47 YT-80628',
            proImg:'https://cdn.salla.sa/YgXdEO/0477df26-81b0-41f7-a2e0-56fe6d44fef7-1000x750-vPEUGEptaCYWk0Xpvu2yMy2Tx6SWbpTZHkV7gvVn.jpg',
            proPrice:155,
            proLink:'https://moedati.com/ar/حذاء-أمان-رياضي-pubs-sbp-مقاس-47-yt-80628yt-80628/p436509557'
        },
        {
            proName:'جاكيت سوفت شيل XXL  YT-80394',
            proImg:'https://cdn.salla.sa/YgXdEO/99c2cbc3-7717-40c2-a49f-62d67f1c4182-891.16859946476x1000-AKoyi0Bv3mLzM32q4GDoAD4KCC9sPIbxb76QdsXu.jpg',
            proPrice:165,
            proLink:'https://moedati.com/ar/جاكيت-سوفت-شيل-xxl-yt-80394yt-80394/p1554476315'
        },
        {
            proName:'حذاء سلامة منخفض الرقبة S3 مقاس 46 YT-80559',
            proImg:'https://cdn.salla.sa/YgXdEO/67f8be55-814f-4430-9bbc-d4ae6cf17662-1000x750-Myee1M9hvhu9hV1u0fSAKjD6EXrVXNGEpiOTKlg9.jpg',
            proPrice:85,
            proLink:'https://moedati.com/ar/حذاء-سلامة-منخفض-الرقبة-s3-مقاس-46-yt-80559yt-80559/p2020256613'
        },
        {
            proName:'L سترة سلامة 74664',
            proImg:'https://cdn.salla.sa/YgXdEO/8f95a075-1f57-44d6-b35b-9395d336b834-1000x750-2Y9iEhtQkPYYIWi1m6Bgiq6Kr4dbDVh8JMYMtNmb.jpg',
            proPrice:10,
            proLink:'https://moedati.com/ar/l-سترة-سلامة-7466474664/p1975348164'
        },
        {
            proName:'قفازات نايترايل مقاومة قص 50 قطعة  YT-74743 XL',
            proImg:'https://cdn.salla.sa/YgXdEO/8f9c4e5d-2c6f-4458-87dc-89884c9a3b19-1000x1000-GzLJAk3IwaTGcQaQpSS0J0FBlzS47dQlN7iWviEL.png',
            proPrice:25,
            proLink:'https://moedati.com/ar/قفازات-نايترايل-مقاومة-قص-50-قطعة-yt-74743-xlyt-74743/p777161700'
        },
        {
            proName:'قفازات عمل بوليستر 74077',
            proImg:'https://cdn.salla.sa/YgXdEO/7199010e-c443-4dc4-a944-bdf0e6c90072-1000x750-GMipTmNiNEwD4WZSN1QPpneV8LWvIfP33ISJOen7.jpg',
            proPrice:28,
            proLink:'https://moedati.com/ar/قفازات-عمل-بوليستر/p967860439'
        },
        {
            proName:'احذية سلامة رياضية PACS SBP الحجم 45 YT-80638',
            proImg:'https://cdn.salla.sa/YgXdEO/36efedd9-da0e-4c2b-894e-718e1b6a249a-1000x750-0b6LsP3RXqAoVQMywgBVrW49l0L4W4qnMDUJTZBS.jpg',
            proPrice:155,
            proLink:'https://moedati.com/ar/أحذية-السلامة-الرياضية-yato-أدوات-السلامة-yt-80638/p1313537506'
        },
        {
            proName:'حذاء سلامة مريح القطع  المقاس 46',
            proImg:'https://cdn.salla.sa/YgXdEO/0ab309aa-2ca0-45a6-9431-3b33543ac110-1000x750-dbNsterf73Oc9poxviuAEbCns4dUQgFujTEd7kle.jpg',
            proPrice:216,
            proLink:'https://moedati.com/ar/سيفتي-شوز-مريح-القطع-مقاس-46/p302916309'
        },
        {
            proName:'بنطال عمل بحمالات المقاس : L  YT-80914',
            proImg:'https://cdn.salla.sa/YgXdEO/cbd5eee3-efdb-4986-bad1-ae926fe0fa2b-1000x750-avTgjapWYN5GhOXCAM9UAueLtw4Y66bCPXrEgeWq.jpg',
            proPrice:100,
            proLink:'https://moedati.com/ar/بنطال-عمل-بحمالات-المقاس-yato-أدوات-السلامة-yt-80914/p1063384474'
        },
        {
            proName:'قفازات جلد صناعي بنقاط سيليكون ضد الانزلاق، المقاس 9 YT-74665',
            proImg:'https://cdn.salla.sa/YgXdEO/c82214f2-3e79-4e08-836d-2cfa331cfc81-1000x750-7FHBVwNIdA4SKHBlLumRhlnGHMiDWeJz02fD8KFu.jpg',
            proPrice:35,
            proLink:'https://moedati.com/ar/قفازات-جلد-صناعي-بنقاط-سيليكون-ضد-الانزلاق-yato-أدوات-السلامة-yt-74665/p682207678'
        },
        {
            proName:'ممتص صدمات بأقصى حمولة 100 كجم YT-74227',
            proImg:'https://cdn.salla.sa/YgXdEO/8bc1b9e4-d753-46d7-9cde-5702037191f2-1000x750-OmsjEyIZp0aTIseedszfkYKXxwYtcFSgZE4Xxxbp.jpg',
            proPrice:50,
            proLink:'https://moedati.com/ar/ممتص-صدمات-بأقصى-حمولة-yato-أدوات-السلامة-yt-74227/p216427452'
        },
        {
            proName:'بدلة عمل مقاس L YT-80196',
            proImg:'https://cdn.salla.sa/YgXdEO/b8bff86c-537f-43e3-8529-a89219328d64-1000x1000-rEtwIojSqI27BtBIcyFeOOTlA3NnXseqjwEaXU39.png',
            proPrice:145,
            proLink:'https://moedati.com/ar/بدلة-عمل-مقاس-yato-أدوات-السلامة-yt-80196/p884553306'
        },
        {
            proName:'احذية سلامة منخفضة الرقبة PLATO S3S ESD المقاس 43 YT-80664',
            proImg:'https://cdn.salla.sa/YgXdEO/9fbeee2f-1ac2-4291-9902-e715126994f6-1000x750-jEqlaxzM2reIHDbBzPlC060Rwe3iYrM9s1RrV6hf.jpg',
            proPrice:145,
            proLink:'https://moedati.com/ar/حذاء-أمان-منخفض-الرقبة-yato-ادوات-سلامة-yt-80664/p1133763150'
        },
        {
            proName:'بنطال عمل برباط بحجم XL YT-80174',
            proImg:'https://cdn.salla.sa/YgXdEO/74b0cc11-2fbe-46b7-97c3-0b28e17bd714-1000x750-1qGaRVmheuDAEfAMIki4XQJopO1AzHCS67t4FPTA.jpg',
            proPrice:110,
            proLink:'https://moedati.com/ar/بنطال-عمل-برباط-yato-أدوات-السلامة-yt-80174/p812889403'
        },
        {
            proName:'جاكيت عمل DUERO المقاس XXL YT-8024-TS',
            proImg:'https://cdn.salla.sa/YgXdEO/ce6053c8-bbec-4331-a8f2-0d289797d927-1000x750-69ZePwKFEEqXPdBL4FgJxASLQPAaaqfNnIInkZ86.jpg',
            proPrice:75,
            proLink:'https://moedati.com/ar/جاكيت-عمل-yato-أدوات-السلامة-yt-8024/p1937239100'
        },
        {
            proName:'سماعات أذن 34 ديسيبل YT-74630',
            proImg:'https://cdn.salla.sa/YgXdEO/260d7476-dcab-4a5a-a550-2d8560498686-1000x750-oSrqBYSlgEFXKL4UJlUdtY4rr27EWOsxq8UYSbbo.jpg',
            proPrice:35,
            proLink:'https://moedati.com/ar/سماعات-أذن-34-ديسيبل-yato-ادوات-سلامة-yt-74630/p1676627153'
        },
        {
            proName:'نظارات واقية مع تهوية غير مباشرة YT-73831',
            proImg:'https://cdn.salla.sa/YgXdEO/53462a01-1bde-4400-a891-e9572cc5c1d0-1000x750-Bh09OGUpLRlbGRvFVopzVH1ZcnHSKy4zLQ2zjZJ7.jpg',
            proPrice:15,
            proLink:'https://moedati.com/ar/نظارات-واقية-مع-تهوية-غير-مباشرة-yato-ادوات-سلامة-yt-73831/p369241552'
        },
              {
            proName:'بنطال عمل برباط بحجم XL YT-80174',
            proImg:'https://cdn.salla.sa/YgXdEO/74b0cc11-2fbe-46b7-97c3-0b28e17bd714-1000x750-1qGaRVmheuDAEfAMIki4XQJopO1AzHCS67t4FPTA.jpg',
            proPrice:110,
            proLink:'https://moedati.com/ar/بنطال-عمل-برباط-yato-أدوات-السلامة-yt-80174/p812889403'
        },
              {
            proName:'قفازات جلد صناعي بنقاط سيليكون ضد الانزلاق، المقاس 9 YT-74665',
            proImg:'https://cdn.salla.sa/YgXdEO/c82214f2-3e79-4e08-836d-2cfa331cfc81-1000x750-7FHBVwNIdA4SKHBlLumRhlnGHMiDWeJz02fD8KFu.jpg',
            proPrice:35,
            proLink:'https://moedati.com/ar/قفازات-جلد-صناعي-بنقاط-سيليكون-ضد-الانزلاق-yato-أدوات-السلامة-yt-74665/p682207678'
        },

    ],
    sss4LastIndex:0,
      //propreties
    };
  },
  methods: {
    sss4addBtnEvent(){
        document.querySelector('.sss4-showmore-btn').addEventListener('click',()=>{
            this.sss4pushcarts();
        })
    },
    sedigAddTax(price){
    return Math.round((price * 1.15) * 100) / 100;
    },
    sedigAddTaxWithDisc(price){
    price = price - (price * 15 / 100);
    return this.sedigAddTax(price);
    },
    sss4pushcarts(){
        const sss4Cont = document.querySelector('.sss4InnerContainer');
        for(let i = 0; i < this.sss4Products.length ; i++){
            if( i >= this.sss4LastIndex){
                if(this.sss4LastIndex === 18){
                    this.sss4LastIndex ++;
                    console.log('here..');
                    window.location.href = "https://moedati.com/ar/redirect/categories/1044224189";
                }
                if(i !== 0 && i % 6 === 0 && i !== this.sss4LastIndex) {
                    this.sss4LastIndex += 6;
                    break;
                }
                sss4Cont.insertAdjacentHTML('beforeend',`
                <div class="sss4-single-small-card flex-column"
                    onclick='window.location.href="${this.sss4Products[i].proLink}";'
                >
                    <div class="sss4-img-div flex-row">
                        <img class="sss4-pro-img" src="${this.sss4Products[i].proImg}" alt="">
                    </div>
                    <div class="sss4-smll-card-disc flex-column">
                        <p class="sss4-pro-name">
                        ${this.sss4Products[i].proName}
                        </p>
                        <div class="sss4-line-div"></div>
                        <div class="sss4-pro-price-addtocrt flex-row">
                            <div class="sss4-price-div flex-column">
                                <div class="sss4-single-price-div flex-row">
                                    <span class="sss4-price-span sss4-new-price-span">
                                        ${this.sedigAddTaxWithDisc(this.sss4Products[i].proPrice)}    
                                    </span>
                                    <i class="sicon-sar sss4-new-price-span"></i>
                                </div> 
                                <div class="sss4-single-price-div flex-row">
                                    <span class="sss4-price-span sss4-old-price-span">
                                        ${this.sedigAddTax(this.sss4Products[i].proPrice)}    
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
                `);
            }      
        };
    }
  },
  mounted() {
      this.sss4addBtnEvent();
      this.sss4pushcarts();
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
.sss4-container{
    width: 100%;
}
.sss4InnerContainer{
    width: 100%;
    flex-wrap: wrap;
}
.sss4-single-small-card{
    height: 400px;
    width: 250px;
    border-radius: 10px;
    padding: 10px;
    margin: 15px;
    box-shadow: 0 3px 10px rgb(213, 213, 213);
    cursor: pointer;
}
.sss4-single-small-card:hover{
    box-shadow: 0 3px 10px rgb(155, 153, 153);
}
.sss4-single-small-card:hover .sss4-img-div{
    transform: scale(1.05) !important;
}
.sss4-img-div{
    flex: 1.3;
    width: 100%;
    padding: 4px;
    border: 1px solid #e5e5e5;
    border-radius: 12px 0 12px 0;
    transition: transform 0.5s;
}
.sss4-pro-img{
    max-height: 200px;
    max-width: 100%;
}
.sss4-smll-card-disc{
    flex: 1;
    width: 100%;
    justify-content: space-evenly;
}
.sss4-pro-name{
    color: #5d5d5d;
    font-weight: bold;
    font-size: 16px;
}
.sss4-line-div{
    width: 97%;
    height: 1px;
    background-color: #eeeeee;
}
.sss4-pro-price-addtocrt{
    width: 90%;
    justify-content: space-between;
}
.sss4-price-span{
    margin: 0 1px 0 1px;
}
.sss4-new-price-span{
    color: #f55157;
    font-weight: bold;
}
.sss4-old-price-span{
    color: #747474;
    text-decoration: line-through;
}
.sss4-addto-cart-div{
    height: 50px;
    width: 50px;
    background-color: #f1f1f1;
    border: 1px solid rgb(223, 223, 223);
    border-radius: 7px;
}
.sss4-addto-cart-div:hover{
    background-color: #2f3d55;
    color: white;
}
.sss4-showmore-btn{
    height: 40px;
    width: 120px;
    border: none;
    background-color: #025355;
    color: #ceffff;
    border-radius: 7px;
    font-size: 14px;
    margin-top: 20px;
    font-weight: bold;
}
.sss4-showmore-btn:hover{
    background-color: #036061;
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