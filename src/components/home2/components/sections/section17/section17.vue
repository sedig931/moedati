<template>
  <div class="sec17-container-div flex-row">
    <div class="sec17-slides-div flex-row">
        <div class="sec17-back-shape flex-row">
          <div class="sec17-top-back-shape"></div>
          <div class="sec17-top-back-shape2"></div>
        </div>
        <button class="sec17-btns flex-row" id="1-sec17">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M7 4L13 10L7 16"
                stroke="#474747"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="sec17-btns sec17-goleft-btn flex-row" id="0-sec17">
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13 4L7 10L13 16"
                    stroke="#474747"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
        <div class="sec17-single-slide flex-row">
            <!-- <div class="sec17-img-div flex-row">
                <img src="C:\Users\danaglobPC1\Downloads\sec17img.png" alt="" class="sec17-img" id="sec17-img-0">
            </div>
            <div class="sec17-txts-div flex-column">
                <button class="sec17-button">
                     الكومبريسورات 
                </button>
            </div> -->
        </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sec17ActiveIndex:0,     
      sec17Products:[
        {
          img:'https://cdn.files.salla.network/products/1157822896/962fe43e-6ba8-42ae-b713-95d382f5e540-original.webp',
          link:'',
        },
        {
          img:'https://cdn.files.salla.network/products/1157822896/962fe43e-6ba8-42ae-b713-95d382f5e540-original.webp',
          link:'',
        },
        {
          img:'https://cdn.files.salla.network/products/1157822896/962fe43e-6ba8-42ae-b713-95d382f5e540-original.webp',
          link:'',
        }
      ],
      sec17lang:[
        'الكومبريسورات',
        'ادوات التنظيف',
        'درلات'
      ],
      sec17EngLang:['Compressors']
      //propreties
    };
  },
  methods: {
    sec17PushSlide(index){
      if(Number(index[0]) === 1){
        if(this.sec17ActiveIndex < this.sec17Products.length - 1)
          this.sec17ActiveIndex++;
        else this.sec17ActiveIndex = 0;
      }
      else {
        if(this.sec17ActiveIndex > 0)
          this.sec17ActiveIndex--;
        else this.sec17ActiveIndex = this.sec17Products.length - 1 ;
      }
      console.log(this.sec17ActiveIndex);
      const activeSlide = document.querySelector('.sec17-single-slide');
      activeSlide.innerHTML = '';
      activeSlide.insertAdjacentHTML('afterbegin',
        `
            <div class="sec17-img-div flex-row">
                <img src="${this.sec17Products[this.sec17ActiveIndex].img}" alt="" class="sec17-img sec17-img-setscale" id="sec17-img-0">
            </div>
            <div class="sec17-txts-div flex-column">
                <button class="sec17-button">
                ${this.sec17lang[this.sec17ActiveIndex]}
                </button>
            </div>
        `
      );
      setTimeout(()=>{
        document.querySelector('.sec17-img').classList.remove('sec17-img-setscale');
      },10)
    },
    sec17AddBtnEvents(){
      document.querySelectorAll('.sec17-btns').forEach(btn => {
        btn.addEventListener('click',(e)=>{
         this.sec17PushSlide(e.currentTarget.id);
        });
      })
    },
  },
  mounted() {
    this.sec17AddBtnEvents();
    this.sec17PushSlide('1-sec17');
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
.sec17-container-div{
    height: 200px;
    width: 100%;
    /* border-bottom: 1px solid #ccc; */
}
.sec17-slides-div{
    position: relative;
    height: 150px;
    width: 550px;
    border: 1px solid #ececec;
    border-radius: 15px;
}
.sec17-back-shape{
    position: absolute;
    width: 70%;
    height: 80%;
    z-index: -1;
    background-color: rgba(198, 198, 198, 0.2);
    border: 1px solid #efefef;
    border-radius: 15px;
}
.sec17-top-back-shape{
  position: absolute;
  top: -1px;
  width:100px;
  height: 20%;
  border-radius: 0 0 100px 100px;
  border-bottom:1px solid #efefef ;
  border-left:1px solid #efefef ;
  border-right:1px solid #efefef ;
  background-color: white;
}
.sec17-top-back-shape2{
  position: absolute;
  bottom: -1px;
  width:100px;
  height: 20%;
  border-radius:100px 100px 0 0;
  border-top:1px solid #efefef ;
  border-left:1px solid #efefef ;
  border-right:1px solid #efefef ;
  background-color: white;
}
.sec17-single-slide{
    height: 100%;
    width: 100%;
    border-radius: inherit;
}
.sec17-img-div,.sec17-txts-div{
    height: 100%;
    flex: 1;
    border-radius: inherit;
    padding: 15px;
}
.sec17-img{
    width: 100%;
    max-height: 100%;
    transition: transform 1s , opacity 1s;
}
.sec17-img-setscale{
  transform: scale(0.5);
  opacity: 0;
}
.sec17-button{
    width: 150px;
    padding: 5px;
    border: 1px solid rgb(253, 253, 253);
    font-size: 14px;
    border-radius: 12px;
    background-image: linear-gradient(to top, #e32c2c, #fdb0ad);
    font-family: "Almarai";
    color: white;
}
.sec17-btns{
  position: absolute;
  right: -14px;
  background-color: white;
  border: 1px solid #ececec;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  /* box-shadow: 0 2px 3px rgb(217, 217, 217); */
}
.sec17-goleft-btn{
  left:-14px;
}
/* .sec17-img-div{
    background-color: #6ef695;
} */
/* .sec17-txts-div{
    background-color: #a6e7ea;
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
