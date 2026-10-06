<template>
  <div class="ss6-container flex-column" dir="ltr">
    <div class="ss6-items-cont flex-row">
      <!-- <div class="ss6-single-item-cont" id="ss6-0">
        <div class="ss6-imgs-div flex-row">
          <div class="ss6-imgs-back-div ss6-imgs-back2-div"></div>
          <div class="ss6-imgs-back-div"></div>
          <div class="ss6-imgs-back2"></div>
          <div class="ss6-imgs-back2 ss6-imgs-back3"></div>
          <img src="https://cdn.salla.sa/YgXdEO/69f702f7-81cd-4ffe-a67a-6dbc92929a55-1000x750-ul4UgUPX3meFY3zpX6yKdlsWy1NGfoM9IISPNndT.png" alt="" class="ss6-item-img "
            onclick='window.location.href="https://moedati.com/ar/sport-safety-shoes-pubs-sbp-yt-80627/p711646061";'
          >
        </div>
        <div class="ss6-txts-div flex-column">
          <div class="ss6-single-txts-div ss6-single-txts-right-div flex-row">
            <p class="ss6-txts-p">
              أمان وراحة
            </p>
          </div>
          <div class="ss6-single-txts-div  flex-row">
            <p class="ss6-txts-p">عمل بثقة طوال اليوم</p>
          </div>
          <div class="ss6-shoes-btn flex-row"
            onclick='window.location.href="https://moedati.com/ar/sport-safety-shoes-pubs-sbp-yt-80627/p711646061";'
          >
          <span class="ss6-shoes-btn-span">
          شراء الآن
          </span>
          </div>
        </div>
      </div> -->
      <!-- <div class="ss6-single-item-cont" id="ss6-1">
        <div class="ss6-imgs-div flex-row">
          <div class="ss6-imgs-back-div ss6-imgs-back2-div"></div>
          <div class="ss6-imgs-back-div"></div>
          <div class="ss6-imgs-back2"></div>
          <div class="ss6-imgs-back2 ss6-imgs-back3"></div>
          <img src="https://cdn.salla.sa/YgXdEO/cf289f34-7850-4b26-b7bb-c1707f4666f3-1000x750-6HHyt703KD1fMKEVmOt5rocRkvgnKyRGeSd9rxKU.png" alt="" class="ss6-item-img ss6-item-img-1"
            onclick='window.location.href="https://salla.sa/moedati/redirect/categories/540250071";'
          >
        </div>
        <div class="ss6-txts-div flex-column">
          <div class="ss6-single-txts-div ss6-single-txts-right-div flex-row">
            <p class="ss6-txts-p">
              ادوات قطع وصقل    
            </p>
          </div>
          <div class="ss6-single-txts-div  flex-row">
            <p class="ss6-txts-p">
              مصممة للأعمال الاحترافية   
            </p>
          </div>
          <div class="ss6-shoes-btn flex-row"
            onclick='window.location.href="https://salla.sa/moedati/redirect/categories/540250071";'
          >
          <span class="ss6-shoes-btn-span">
           رؤية المزيد 
          </span>
          </div>
        </div>
      </div> -->
      <!-- <div class="ss6-single-item-cont" id="ss6-2">
        <div class="ss6-imgs-div flex-row">
          <div class="ss6-imgs-back-div ss6-imgs-back2-div"></div>
          <div class="ss6-imgs-back-div"></div>
          <div class="ss6-imgs-back2"></div>
          <div class="ss6-imgs-back2 ss6-imgs-back3"></div>
          <img src="https://cdn.salla.sa/YgXdEO/55df91a4-96f3-4b15-8a48-58d292ad1a88-1000x1000-ZeLgaIYfSUPQCn2j0LbHBHcfY0WfpxU39KNBREYe.png" alt="" class="ss6-item-img ss6-item-img-2"
            onclick='window.location.href="https://moedati.com/ar/pressure-washeryt-85910bs/p696287143";'
          >
        </div>
        <div class="ss6-txts-div flex-column">
          <div class="ss6-single-txts-div ss6-single-txts-right-div flex-row">
            <p class="ss6-txts-p">
             قوة تنظيف 
            </p>
          </div>
          <div class="ss6-single-txts-div  flex-row">
              تزيل أصعب الأوساخ في ثوانٍ
          </div>
          <div class="ss6-shoes-btn flex-row"
            onclick='window.location.href="https://moedati.com/ar/pressure-washeryt-85910bs/p696287143";'
          >
          <span class="ss6-shoes-btn-span">
          شراء الآن
          </span>
          </div>
        </div>
      </div> -->
    </div>
    <div class="ss6-next-prev-div flex-row">
      <div
        class="ss6-single-next-prev-div ss6-single-back-div ss6-single-back flex-row"
        id="ss6-back-btn"
      >
        <img src="./ss6left.png" class="ss6-arrow-img" alt="" />
      </div>
      <div
        class="ss6-single-next-prev-div ss6-single-next-div ss6-single-next flex-row"
        id="ss6-next-btn"
      >
        <img src="./ss6right.png" class="ss6-arrow-img" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      ss6ActiveItem: 0,
      ss6ItemsData: [
        {
          itemImg:
            "https://cdn.salla.sa/YgXdEO/69f702f7-81cd-4ffe-a67a-6dbc92929a55-1000x750-ul4UgUPX3meFY3zpX6yKdlsWy1NGfoM9IISPNndT.png",
          itemLink: "https://moedati.com/ar/sport-safety-shoes-pubs-sbp-yt-80627/p711646061",
          itemBody: ["أمان وراحة،،", "عمل بثقة طوال اليوم"],
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
          itemBody: [
            "نظافة احترافية",
            "منظف البخار يمنحك قوة تنظيفة",
            "عميقة تزيل الأوساخ العنيدة",
          ],
          itemBtnTxt: " شراء الآن",
        },
        {
          itemImg:
            "https://cdn.salla.sa/YgXdEO/b8161859-089a-4845-b1ab-ed87deb36a9c-1000x750-9DFQ51PjXSIPFWpLKd3UOQb0VXvPnbao4jJsLGDR.png",
          itemLink: "https://moedati.com/ar/drawers/p121603456",
          itemBody: ["تصمصم فريد ، قفل محكم،،", "تتسع لما يصل إلى 157 أداة ", "احترافية"],
          itemBtnTxt: "شراء الآن",
        },
        // {
        //   itemImg :'',
        //   itemLink :'',
        //   itemHeader :'',
        //   itemBody:'',
        //   itemBtnTxt:''
        // },
      ],
      //propreties
    };
  },
  methods: {
    ss6outerFun(ind) {
      var string1 = "";
      this.ss6ItemsData[ind].itemBody.forEach((singTxt, txi) => {
        string1 = string1 += `
        <div class="ss6-single-txts-div ${txi === 0 ? "ss6-single-txts-right-div" : ""} flex-row">
                <span  class="ss6-shoes-btn-span flex-row">
                 ${singTxt}
                </span>
        </div>
        `;
      });
      return string1;
    },
    ss6PushItems() {
      this.ss6ItemsData.forEach((item, i) => {
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
            ${this.ss6outerFun(i)}
              <div class="ss6-shoes-btn flex-row"
                onclick='window.location.href="${item.itemLink}";'
              >
              <span class="ss6-shoes-btn-span">
               ${item.itemBtnTxt}
              </span>
              </div>
            </div>
          </div>
          `,
        );
      });
    },
    ss6MoveRightLeft(leftRightClass, itemId) {
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
    },
    ss6SetActiveItem(itemId, btnID) {
      document.querySelectorAll(".ss6-single-item-cont").forEach((singleItem) => {
        singleItem.classList.add("ss6HideItem");
      });
      document.getElementById(`ss6-${itemId}`).classList.remove("ss6HideItem");

      if (!btnID) {
        this.ss6MoveRightLeft("ss6-txts-div-fromleft-slow", itemId);
      } else {
        if (btnID === "ss6-next-btn") {
          this.ss6MoveRightLeft("ss6-txts-div-fromleft-slow", itemId);
        } else {
          this.ss6MoveRightLeft("ss6-txts-div-fromRight-slow", itemId);
        }
      }
    },
    addBackNextEvent() {
      document.querySelectorAll(".ss6-single-next-prev-div").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          if (e.currentTarget.id === "ss6-next-btn") {
            if (this.ss6ActiveItem < this.ss6ItemsData.length - 1) {
              this.ss6SetActiveItem(++this.ss6ActiveItem, e.currentTarget.id);
            } else {
              this.ss6ActiveItem = 0;
              this.ss6SetActiveItem(this.ss6ActiveItem, e.currentTarget.id);
            }
          } else {
            if (this.ss6ActiveItem > 0) {
              this.ss6SetActiveItem(--this.ss6ActiveItem, e.currentTarget.id);
            } else {
              this.ss6ActiveItem = this.ss6ItemsData.length - 1;
              this.ss6SetActiveItem(this.ss6ActiveItem, e.currentTarget.id);
            }
          }
        });
      });
    },
  },
  mounted() {
    this.ss6PushItems();
    this.ss6SetActiveItem(0);
    this.addBackNextEvent();
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

.ss6-container {
  width: 100%;
  height: 500px;
  margin: 15px 0 15px 0;
}
.ss6-items-cont {
  width: 100%;
  height: 100%;
}
.ss6-single-item-cont {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  background-image: linear-gradient(to top, #ffffff, #f0f0f0);
  overflow: hidden;
}
.ss6-imgs-div,
.ss6-txts-div {
  flex: 1;
  height: 100%;
}
.ss6-imgs-div {
  position: relative;
}
.ss6-imgs-back-div {
  position: absolute;
  height: 130px;
  width: 400px;
  left: -70px;
  bottom: 35px;
  transform: rotate(10deg) scale(1);
  background-image: linear-gradient(to top left, #e32c2c, #fdb0ad);
  border-radius: 0px 90px 90px 0%;
}
.ss6-imgs-back2-div {
  bottom: 50px;
  background-image: linear-gradient(to right, #4d4d4f, #4d4d4f);
}
.ss6-imgs-back2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 40px;
  border-bottom: 4px solid #ffffff;
  border-right: 4px solid #ffffff;
  border-radius: 0 0 60px 0;
}
.ss6-imgs-back3 {
  width: 400px;
  height: 20px;
}

.ss6-item-img {
  position: absolute;
  max-height: 100%;
  max-width: 70%;
  transform: rotate(40deg) translateY(0px);
  transition:
    opacity 0.5s,
    transform 0.5s,
    max-width 0.5s;
  cursor: pointer;
}
.ss6-item-img:hover {
  max-width: 65%;
}
.ss6-item-img-others {
  transform: rotate(-3deg) scale(1);
}

.ss6-txts-div {
  font-size: 40px;
  font-family: "Almarai";

  color: #474747;
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.ss6-single-txts-div {
  font-weight: bold;
  width: 85%;
}
.ss6-single-txts-right-div {
  justify-content: end;
}
.ss6-shoes-btn {
  margin-top: 30px;
  padding: 2px 50px 2px 50px;
  width: 70%;
  border: 1px solid white;
  border-radius: 10px;
  background-image: linear-gradient(to top, #e32c2c, #fdb0ad);
  color: white;
  cursor: pointer;
}
.ss6-shoes-btn:hover {
  background-image: linear-gradient(to top, #ffffff, #ffffff);
  color: #e32c2c;
  border-color: #e32c2c;
}
.ss6-shoes-btn-span {
  height: 100%;
  text-align: center !important;
}
.ss6-txts-div-fromleft-slow {
  opacity: 0;
  transform: translateX(470px);
}
.ss6-txts-div-fromRight-slow {
  opacity: 0;
  transform: translateX(-470px);
}
.ss6-next-prev-div {
  width: 75%;
  margin: 20px 0 0 0;
}
.ss6-single-next-prev-div {
  width: 40px;
  height: 40px;
  background-color: #f1f1f1;
  border-radius: 100%;
  border: 1px solid #f1f1f1;
  margin: 0 15px 0 15px;
  cursor: pointer;
  transition:
    background-color 0.2s,
    border-color 0.2s;
  box-shadow: 0 2px 7px rgb(199, 199, 199);
}
.ss6-single-next-prev-div:hover {
  background-color: #ffffff;
  border-color: #f1f1f1;
}
.ss6-active-btn {
  border-color: #f5afaf;
  background-image: linear-gradient(to top, #e32c2c, #fdb0ad);
}
.ss6-arrow-img {
  height: 20px;
  height: 20px;
}
.ss6HideItem {
  display: none;
}
@media (min-width: 700px) and (max-width: 1120px) {
  .ss6-txts-div {
    font-size: 26px;
  }
}
@media (max-width: 700px) {
  .ss6-container {
    height: 80vh;
  }
  .ss6-single-item-cont {
    flex-direction: column;
  }
  .ss6-imgs-div,
  .ss6-txts-div {
    width: 100%;
  }
  .ss6-txts-div {
    font-size: 19px;
  }
  .ss6-imgs-back-div {
    position: absolute;
    height: 90px;
    width: 200px;
    left: -10px;
    bottom: 85px;
  }
  .ss6-imgs-back2-div {
    bottom: 75px;
    left: -12px;
  }
  .ss6-shoes-btn-span {
    height: 32px;
  }
  .ss6-shoes-btn {
    height: 30px;
    width: 160px;
    font-size: 18px;
  }
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
