<template>
  <div class="datasheet-div flex-column">
    <div class="all-component-container flex-column">
      <div class="logos-div flex-row">
        <img
          src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\yato.png"
          alt=""
          class="logo-img"
        />
        <img
          src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\bison.png"
          alt=""
          class="logo-img"
        />
        <img
          src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\torix.png"
          alt=""
          class="logo-img"
        />
        <img
          src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\moedati.png"
          alt=""
          class="logo-img"
        />
        <img
          src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\dana-logo.png"
          alt=""
          class="dana-logo-img"
        />
      </div>
      <div class="brand-sku-div flex-row">
        <div class="brands-div flex-row">
          <img
            src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\yato.png"
            alt=""
            class="brand-img"
            v-if="this.proBrand === 'yato'"
          />
          <img
            src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\bison.png"
            alt=""
            class="brand-img"
            v-if="this.proBrand === 'bison'"
          />
          <img
            src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\torix.png"
            alt=""
            class="brand-img"
            v-if="this.proBrand === 'torix'"
          />
          <img
            src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\sthor.png"
            alt=""
            class="brand-img more-size-brand"
            v-if="this.proBrand === 'sthor'"
          />
          <img
            src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\vorel.png"
            alt=""
            class="brand-img more-size-brand"
            v-if="this.proBrand === 'vorel'"
          />
          <img
            src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\flo.png"
            alt=""
            class="brand-img more-size-brand"
            v-if="this.proBrand === 'flow'"
          />
          <img
            src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\poweraction.png"
            alt=""
            class="brand-img more-size-brand"
            v-if="this.proBrand === 'poweraction'"
          />
        </div>
        <div class="sku-div flex-row">
          <div class="sku-span-div flex-row">
            <div class="tringle-div"></div>
            <span class="sku-span exo-font"> {{ this.product.sku }} </span>
          </div>
        </div>
      </div>
      <div class="pro-names-div flex-column">
        <span class="pro-name-span pro-name-span-en exo-font">{{ this.product.name.eng }}</span>
        <span class="pro-name-span pro-name-span-ar">{{ this.product.name.ar }}</span>
      </div>
      <div class="pro-img-div flex-row">
        <!-- <div class="img-pro-back"></div> -->
        <img :src="this.product.imgLink" alt="" class="pro-img" />
      </div>
      <div class="fetch-specific-div flex-row">
        <div class="specific-div flex-column">
          <div class="specific-header-div flex-row">
            <div class="specific-eng-div flex-row">
              <div class="tringle-specific-eng-div"></div>
              <span class="spacific-eng-span exo-font"> Specifications </span>
            </div>
            <span class="spacific-ar-span">المواصفات الفنية</span>
          </div>
          <div class="specific-body-div flex-row">
            <div class="spec-table">
              <div class="table-header">
                <div>Specification</div>
                <div>Value</div>
              </div>
              <div class="table-row exo-font" v-for="speci in this.product.specis">
                <div>{{ speci.name }}</div>
                <div>{{ speci.val }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="fetch-div flex-column">
          <div class="fetch-header-div flex-row">
            <div class="specific-eng-div flex-row">
              <div class="tringle-specific-eng-div"></div>
              <span class="spacific-eng-span exo-font"> Features </span>
            </div>
            <span class="spacific-ar-span">المميزات</span>
          </div>
          <div class="fetch-body-div flex-column">
            <div class="fetch-icon-txts-div flex-row" v-for="featch in this.product.featchers">
              <div class="fetch-icon-div flex-column">
                <i class="bi bi-check-circle-fill check-icon flex-row"></i>
              </div>
              <div class="fetch-txts-div flex-column">
                <div class="fetch-eng-txt flex-row exo-font">
                  <span class="fetch-txt-span">{{ featch.eng }}</span>
                </div>
                <div class="fetch-eng-txt flex-row">
                  <span class="fetch-txt-span fetch-txt-ar-span">{{ featch.ar }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-div flex-row">
        <div class="single-footer-elem flex-column">
          <img
            src="C:\Users\danaglobPC1\Documents\dana-global\src\components\home2\components\qrcode\imgs\qrcode_moedati.png"
            alt=""
            class="qr-img"
          />
        </div>
        <div class="fotter-line"></div>
        <div class="single-footer-elem single-footer-span-ele flex-column">
          <span class="footer-span flex-row exo-font">
            <i class="bi bi-globe2 flex-row footer-icon"></i>
            https://moedati.com/
          </span>
          <span class="footer-span flex-row exo-font">
            <i class="bi bi-envelope-at flex-row footer-icon"></i>
            {{ this.activeEmp.email }}
          </span>
        </div>
        <div class="fotter-line"></div>
        <div class="single-footer-elem single-footer-span-ele flex-column">
          <span class="footer-span flex-row exo-font">
            <i class="bi bi-whatsapp flex-row footer-icon"></i>
            {{ this.activeEmp.phone }}
          </span>
          <span class="footer-span flex-row exo-font">
            <i class="bi bi-geo-alt flex-row footer-icon"></i>
            KSA - Dammam - Khobar
          </span>
        </div>
      </div>
    </div>
    <div class="dashboard-container flex-row">
      <form class="speci-form flex-column" @submit.prevent="this.addSpeci">
        <input
          v-model="this.speciVals.eng"
          placeholder="eng speci"
          type="text"
          class="speci-input-name"
          required
        />
        <input
          v-model="this.speciVals.ar"
          placeholder="ar speci"
          type="text"
          class="speci-input-name"
          required
        />
        <button type="submit" class="add-speci-btn">add</button>
      </form>
      <form class="fetch-form flex-column" @submit.prevent="this.addFeatch">
        <input
          v-model="this.featchVals.eng"
          placeholder="eng speci"
          type="text"
          class="speci-input-name"
          required
        />
        <input
          v-model="this.featchVals.ar"
          placeholder="ar speci"
          type="text"
          class="speci-input-name"
          required
        />
        <button type="submit" class="add-featch-btn">add</button>
      </form>
      <form class="fetch-form flex-column">
        <input
          v-model="this.product.name.eng"
          placeholder="eng name"
          type="text"
          class="speci-input-name"
          required
        />
        <input
          v-model="this.product.name.ar"
          placeholder="ar name"
          type="text"
          class="speci-input-name"
          required
        />
        <div class="active-emp-div flex-row">
          <button
            class="single-emp-btn"
            :class="emp.name === this.activeEmp.name ? 'active-emp-btn' : ''"
            type="button"
            @click="this.setAciveEmp(emp.name)"
            v-for="emp in this.emps"
          >
            {{ emp.name }}
          </button>
        </div>
      </form>
      <form class="fetch-form flex-column">
        <input
          v-model="this.product.sku"
          placeholder="sku"
          type="text"
          class="speci-input-name"
          required
        />
        <input
          v-model="this.product.imgLink"
          placeholder="img link"
          type="text"
          class="speci-input-name"
          required
        />
        <div class="brands-form-div flex-row">
          <button
            type="button"
            :class="this.proBrand === 'yato' ? 'active-brand' : ''"
            class="single-brand-btn flex-row"
            @click="this.setBrand"
            id="yato"
          >
            <img
              src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\yato.png"
              alt=""
              class="btn-logo-img"
            />
          </button>
          <button
            type="button"
            :class="this.proBrand === 'bison' ? 'active-brand' : ''"
            class="single-brand-btn flex-row"
            @click="this.setBrand"
            id="bison"
          >
            <img
              src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\bison.png"
              alt=""
              class="btn-logo-img"
            />
          </button>
          <button
            type="button"
            :class="this.proBrand === 'torix' ? 'active-brand' : ''"
            class="single-brand-btn flex-row"
            @click="this.setBrand"
            id="torix"
          >
            <img
              src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\torix.png"
              alt=""
              class="btn-logo-img"
            />
          </button>
          <button
            type="button"
            :class="this.proBrand === 'sthor' ? 'active-brand' : ''"
            class="single-brand-btn flex-row"
            @click="this.setBrand"
            id="sthor"
          >
            <img
              src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\sthor.png"
              alt=""
              class="btn-logo-img"
            />
          </button>
          <button
            type="button"
            :class="this.proBrand === 'vorel' ? 'active-brand' : ''"
            class="single-brand-btn flex-row"
            @click="this.setBrand"
            id="vorel"
          >
            <img
              src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\vorel.png"
              alt=""
              class="btn-logo-img"
            />
          </button>
          <button
            type="button"
            :class="this.proBrand === 'flow' ? 'active-brand' : ''"
            class="single-brand-btn flex-row"
            @click="this.setBrand"
            id="flow"
          >
            <img
              src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\flo.png"
              alt=""
              class="btn-logo-img"
            />
          </button>
          <button
            type="button"
            :class="this.proBrand === 'poweraction' ? 'active-brand' : ''"
            class="single-brand-btn flex-row"
            @click="this.setBrand"
            id="poweraction"
          >
            <img
              src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\poweraction.png"
              alt=""
              class="btn-logo-img"
            />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      speciVals: { eng: "", ar: "" },
      featchVals: { eng: "", ar: "" },
      proBrand: "yato",
      emps: [
        {
          name: "moedati",
          phone: "+966 55 639 9399",
          email: "Support@danaglobal.com.sa",
        },
        {
          name: "shibil",
          phone: "+966 55 902 0222",
          email: "M.shibil@danaglobal.com.sa",
        },
        {
          name: "m.shikh",
          phone: "+966 54 865 3207",
          email: "salese1@danaglobal.com.sa",
        },
        {
          name: "jamal",
          phone: "+966 54 969 0928",
          email: "jamal@danaglobal.com.sa",
        },
        {
          name: "Mr.Shafi Ullah",
          phone: "+966 555800578",
          email: "ryd.sm@danaglobal.com.sa",
        },
      ],
      activeEmp: {},
      product: {
        sku: "",
        name: {
          eng: "product name",
          ar: "اسم المنتج",
        },
        imgLink: "/raqndom.jpg",
specis:[
    {name:'Brand',val:'YATO'},
    {name:'Model',val:'YT-82088BS'},
    {name:'Product Type',val:'Electric Angle Grinder'},
    {name:'Disc Diameter',val:'115 mm'},
    {name:'Power',val:'760 W'},
    {name:'No-Load Speed',val:'11000 RPM'},
    {name:'Voltage',val:'220-240 V'},
    {name:'Frequency',val:'50-60 Hz'},
    {name:'Spindle Thread',val:'M14'},
    {name:'Weight',val:'2.0 kg'},
    {name:'Restart Protection',val:'Yes'}
],

featchers:[
    {
        eng:'760W powerful motor',
        ar:'محرك قوي بقدرة 760 واط'
    },
    {
        eng:'11000 RPM high-speed operation',
        ar:'سرعة دوران عالية 11000 دورة/دقيقة'
    },
    {
        eng:'115mm cutting and grinding disc',
        ar:'قرص قطع وجلخ بقطر 115 مم'
    },
    {
        eng:'Restart protection function',
        ar:'وظيفة حماية من إعادة التشغيل'
    },
    {
        eng:'Includes essential accessories',
        ar:'يشمل الملحقات الأساسية للاستخدام'
    }
],
      },
    };
  },
  methods: {
    addSpeci() {
      this.product.specis.push({
        name: this.speciVals.eng,
        val: this.speciVals.ar,
      });
      this.speciVals.eng = "";
      this.speciVals.ar = "";
    },
    addFeatch() {
      this.product.featchers.push({
        eng: this.featchVals.eng,
        ar: this.featchVals.ar,
      });
      this.featchVals.eng = "";
      this.featchVals.ar = "";

      // good screen shot size 880w * 1000h , %75
    },
    setBrand(e) {
      this.proBrand = e.currentTarget.id;
    },
    setAciveEmp(empName) {
      this.emps.forEach((emp) => {
        if (emp.name === empName) {
          this.activeEmp = emp;
        }
      });
      console.log(this.activeEmp);
    },
  },
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
.exo-font {
  font-family: "Ubuntu Sans", sans-serif;
  /* font-optical-sizing: auto; */
  font-weight: 450;
  font-style: normal;
}
.datasheet-div {
  width: 100%;
  height: 100%;
  padding: 20px;
}
.all-component-container {
  height: 900px;
  width: 720px;
  justify-content: space-between;
  /* border: 1px solid rgb(213, 213, 213); */
  /* margin: 20px; */
}
.logos-div {
  width: 95%;
  height: 50px;
  align-items: flex-end;
  margin: 20px 0 20px 0;
  padding: 0px 0 10px 0;
  border-bottom: 1px solid rgb(213, 213, 213);
}
.logo-img {
  height: 17px;
  margin: 0 10px 0 10px;
}
.dana-logo-img {
  height: 40px;
  margin: 0 10px 0 10px;
}
.brand-sku-div {
  width: 100%;
}
.brands-div,
.sku-div {
  flex: 1;
}
.sku-div {
  justify-content: end;
}
.brand-img {
  height: 23px;
}
.more-size-brand {
  height: 50px;
}
.pro-brand {
  width: 50px;
}
.sku-span-div {
  position: relative;
  width: 180px;
  padding: 1px 0 1px 0;
  background-image: linear-gradient(to top right, #0e8f91, #4dd8db);
}
.tringle-div {
  position: absolute;
  left: 0;
  top: 0;
  border-top: 23px solid #ffffff;
  border-right: 18px solid transparent;
}
.sku-span {
  font-size: 18px;
  font-weight: bold;
  color: white;
}
.pro-img-div {
  position: relative;
  width: 95%;
  padding: 20px 0 20px 0;
  border-bottom: 1px solid #cbd5d5;
}
.img-pro-back {
  position: absolute;
  height: 70%;
  width: 30px;
  left: 20px;
  background-image: linear-gradient(to top right, rgba(27, 226, 230, 0.3), rgba(30, 136, 144, 0.3));
  border-radius: 5px 20px 10px 30px;
}
.pro-img {
  height: 250px;
  z-index: 1;
}
.pro-names-div {
  width: 100%;
  padding: 0 15px 0 15px;
  align-items: flex-end;
  font-size: 18px;
}
.pro-name-span-en {
  color: #6b6b6b;
  font-weight: 700;
}
.pro-name-span-ar {
  font-family: "Almarai";
}
.fetch-specific-div {
  /* height: 200px; */
  width: 100%;
  padding: 10px 5px 10px 5px;
  align-items: flex-start;
}
.specific-div,
.fetch-div {
  flex: 1;
  height: 100%;
  margin: 5px;
  justify-content: start;
}
.specific-header-div,
.fetch-header-div {
  width: 100%;
  border-bottom: 1.5px solid #48bec0;
  margin: 5px 0 10px 0;
  justify-content: space-between;
}
.specific-eng-div {
  position: relative;
  width: 120px;
  height: 20px;
  justify-content: start;
  background-image: linear-gradient(to top right, #0e8f91, #4dd8db);
  border-radius: 5px 0px 0 0;
}
.tringle-specific-eng-div {
  position: absolute;
  right: 0px;
  top: 0;
  border-top: 17px solid #ffffff;
  border-left: 17px solid transparent;
}
.spacific-eng-span {
  padding: 0px 10px 0px 10px;
  color: white;
  font-size: 13px;
}
.spacific-ar-span {
  color: #099c9e;
  font-size: 13px;
  font-family: "Almarai";
}
.specific-body-div {
  width: 100%;
  align-items: flex-start;
}
.spec-table {
  width: 100%;
  border: 1px solid #cfcfcf;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  font-size: 8.5px;
}
.table-header,
.table-row {
  display: grid;
  grid-template-columns: 40% 60%;
}
.table-header {
  background: #f0f0f0;
  color: #000000;
  font-weight: bold;
  border-radius: 4px 4px 0 0;
}
.table-header div,
.table-row div {
  padding: 2px 0px 2px 7px;
  border-right: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
}
.table-header div:last-child,
.table-row div:last-child {
  border-right: none;
}
.table-row div:first-child {
  font-weight: 600;
  color: #555555;
}

.table-row div:last-child {
  color: #555555;
}
.fetch-header-div {
  width: 100%;
}
.fetch-body-div {
  /* height: 100%; */
  width: 100%;
  justify-content: start;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid rgb(213, 213, 213);
}
.fetch-icon-txts-div {
  width: 100%;
  align-items: flex-start;
}
.fetch-icon-div {
  height: 100%;
  font-size: 10px;
  justify-content: start;
  padding: 4px 3px 4px 3px;
}
.check-icon {
  color: #099c9e;
}
.fetch-txts-div {
  flex: 1;
  font-size: 11px;
}
.fetch-eng-txt {
  width: 100%;
  justify-content: start;
  padding: 1px 5px 1px 5px;
}
.fetch-txt-span {
  color: #474747;
}
.fetch-txt-ar-span {
  font-family: "Almarai";
}
.dashboard-container {
  width: 100%;
  flex-wrap: wrap;
  margin: 20px;
}
.speci-form {
  flex: 1;
  max-width: 300px;
  min-width: 270px;
  height: 210px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 10px;
}
.add-speci-btn {
  width: 70px;
  height: 25px;
  background-color: #84daf6;
  border: none;
  border-radius: 10px;
  font-size: 11px;
  color: #323232;
}
.add-featch-btn {
  width: 70px;
  height: 25px;
  background-color: #ff4e4b;
  border: none;
  border-radius: 10px;
  font-size: 11px;
  color: #ffffff;
}
.fetch-form {
  flex: 1;
  height: 210px;
  background-color: #f7f7f7;
  border-radius: 10px;
  margin: 20px;
  max-width: 300px;
  min-width: 270px;
}
.footer-div {
  width: 100%;
  height: 100px;
  /* min-height: 90px; */
  background-color: #3c4950;
  border-top: 4px solid #0e8f91;
}
.single-footer-elem {
  flex: 1;
  height: 100%;
  margin: 0 5px 0 5px;
}
.fotter-line {
  height: 60%;
  width: 2px;
  border-radius: 1px;
  background-color: #0e8f91;
}
.qr-img {
  height: 70px;
  border-radius: 3px;
}
.single-footer-span-ele {
  align-items: flex-start;
}
.footer-span {
  font-size: 13px;
  color: white;
  margin: 2px;
}
.footer-icon {
  margin: 0 5px 0 5px;
}
.brands-form-div {
  width: 100%;
  height: 20px;
  margin: 10px 0 0 0;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* background-color: #099c9e; */
}
.single-brand-btn,
.single-emp-btn {
  width: 50px;
  height: 23px;
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  margin: 4px;
  border: 1px solid #eaeaea;
}
.btn-logo-img {
  width: 27px;
}
.active-brand,
.active-emp-btn {
  /* background-color: #fcbaba; */
  background-color: #c6c6c6;
  border-color: #b2b1b1;
}
.single-emp-btn {
  font-size: 10px;
}

input[type="text"] {
  width: 190px;
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
  border: 1px solid #178796;
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
