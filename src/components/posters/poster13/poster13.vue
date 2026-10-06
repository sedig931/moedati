<template>
  <div class="outer-container flex-row">
    <div class="backimg-div">
      <img
        src="C:\Users\danaglobPC1\Documents\dana-global\src\components\posters\poster12\imgs\backimg.png"
        alt=""
        class="back-img"
      />
    </div>
    <div class="body-div flex-column">
      <div class="dana-brand flex-row">
        <img
          src="C:\Users\danaglobPC1\Documents\dana-global\src\assets\brandsicons\danaglobal.png"
          alt=""
          class="dana-brand-img"
        />
      </div>
      <!-- <div class="moedati-icon-div-outer">
      <div class="moedati-icon-div flex-column">
        <img class="moedati-img" src="C:\Users\danaglobPC1\Documents\dana-global\src\assets\brandsicons\moedati.png" alt="">
      </div>
      </div> -->
      <div class="title-div flex-row">
        <span>MITER SAW 305MM 1800W WITH LASER</span>
      </div>
      <div class="pro-det-div flex-row">
        <div class="single-pro-det-div flex-column">
          <img
            src="C:\Users\danaglobPC1\Documents\dana-global\src\assets\brandsicons\yato.png"
            alt=""
            class="brand-img"
          />
          <img src="./imgs/YT-82175.png" alt="" class="pro-img pro-img-left" />
          <div class="pro-name">
            <span> SPACIFICATIONS </span>
          </div>
          <div class="pro-discription">
            <p>
              The **YATO** YT-82175 is a powerful professional miter saw designed for precise
              cutting of wood, panels, laminates, plastics, joists, and similar materials. It
              features a robust **1800 W motor** with a speed of **5000 rpm**, operating on
              **220–240 V AC**. The saw uses a **305 mm blade** (30 mm bore, max 3 mm thickness, 40
              teeth) and delivers large cutting capacities up to **105 × 340 mm** at 0° settings,
              with versatile angled and bevel cutting options for flexible workshop use. A built-in
              **red Class 2 laser** improves cutting accuracy, while the **3 m power cord**, **Class
              II insulation**, and **IP20 protection** ensure safe operation. Despite its solid **21
              kg** build for stability, it remains practical thanks to included accessories such as
              a dust collection bag, blade, dual table extensions, work clamp, and table locking
              screw—making it a complete, ready-to-use solution for professional cutting tasks.
            </p>
          </div>
        </div>
        <!-- <div class="single-pro-det-div ms-2 me-2 flex-column">
                <img src="C:\Users\danaglobPC1\Documents\dana-global\src\assets\brandsicons\yato.png" alt="" class="brand-img">
                <img src="./imgs/YT-55302.png" alt="" class="pro-img pro-img-right">
                <div class="pro-name">
                    <span>
                      tool cabinet with 400 pieces of tools
                    </span>
                </div>
                <div class="pro-discription">
                    <p>    
                    Combination Wrench Set (Metric Sizes) <br>
                    Double Ring Wrench Set <br>
                    Ratchet Wrenches <br>
                    Complete Socket Set (1/4", 3/8", 1/2") <br>
                    Deep Sockets <br>
                    Spark Plug Sockets <br>
                    Ratchet Handles <br>
                    Sliding T-Handle <br>
                    Breaker Bar <br>
                    Socket Extension Bars <br>
                    Universal Joint Adapters <br>
                    Bit Sockets (Phillips, Slotted, Torx, Hex) <br>
                    Hex Key Set (L-Type Allen Keys) <br>
                    Torx Key Set <br>
                    Screwdriver Set <br>
                    Precision Screwdrivers <br>
                    Pliers Set (Combination, Long Nose, Diagonal, Water Pump) <br>
                    Adjustable Wrench <br>
                    Hammer , Utility Knife ,Measuring Tape <br>
                    Magnetic Bit Holder & Accessories <br>
                    Assorted Tool Accessories & Adaptors <br>
                    </p>
                </div>
            </div> -->
      </div>
    </div>

    <div class="deleveryicon-taby-outer">
      <div class="deleveryicon-taby flex-row">
        <img
          src="C:\Users\danaglobPC1\Documents\dana-global\src\components\home2\components\weeklycontent\imgs\deliveryicon.png"
          alt=""
          class="delevery-img"
        />
        <img
          src="https://cdn.salla.network/cdn-cgi/image/fit=scale-down,width=70,height=70,onerror=redirect,format=auto/images/sbc.png?v=2.0.5"
          alt=""
          class="mothoq-img"
        />
        <img
          src="C:\Users\danaglobPC1\Documents\dana-global\src\components\home2\components\weeklycontent\imgs\Tabby-01.png"
          alt=""
          class="tabby-img"
        />
        <img
          src="C:\Users\danaglobPC1\Documents\dana-global\src\components\home2\components\weeklycontent\imgs\card.png"
          alt=""
          class="card-img"
        />
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
.outer-container {
  position: relative;
  height: 800px;
  width: 800px;
}
.backimg-div {
  position: absolute;
  height: 100%;
  width: 100%;
}
.back-img {
  height: 100%;
  width: 100%;
}
.body-div {
  position: absolute;
  height: 100%;
  width: 100%;
}
.dana-brand {
  position: absolute;
  top: 10px;
  width: 100%;
}
.dana-brand-img {
  height: 50px;
}
.title-div {
  width: 100%;
  font-size: 35px;
  font-weight: bold;
  color: #e31212;
  margin: 0 0 50px;
  transform: translateY(40px);
}
.pro-det-div {
  width: 100%;
  font-family: "Almarai";
  align-items: start;
  padding: 0px 15px 0 15px;
}
.single-pro-det-div {
  flex: 1;
  padding: 10px;
  box-shadow: 0 3px 5px rgb(226, 226, 226);
  z-index: 1;
}
.brand-img {
  width: 120px;
  margin: 0 0 15px 0;
  padding: 5px;
  box-shadow: 0 3px 5px rgb(200, 200, 200);
}
.pro-img {
  width: 500px;
  filter: drop-shadow(3px 2px 2px #666666);
}
.pro-name {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0 10px 0;
  color: #e31212;
}
.pro-discription {
  font-size: 12px;
  color: #474747;
}
.deleveryicon-taby-outer {
  position: absolute;
  bottom: 12px;
  /* right: 5px; */
  height: 30px;
  width: 160px;
  /* background-color: rgba(255, 0, 0, 0.9); */
  background-color: #eaeaea;
  backdrop-filter: blur(1px);
  box-shadow: 0 3px 7px rgb(197, 197, 197);
  border-radius: 10px;
}
.deleveryicon-taby {
  height: 100%;
  width: 100%;
  padding: 0 5px 0 5px;
  justify-content: space-between;
  border-radius: 10px;
}
.delevery-img {
  height: 18px;
  filter: drop-shadow(1px 1px 1px #7f7f7f);
}
.tabby-img {
  height: 18px;
  filter: drop-shadow(1px 1px 1px #7f7f7f);
}
.card-img {
  height: 18px;
  max-width: 30px;
  filter: drop-shadow(1px 1px 1px #7f7f7f);
}
.mothoq-img {
  height: 18px;
  filter: drop-shadow(1px 1px 1px #7f7f7f);
}
.moedati-icon-div-outer {
  position: absolute;
  top: 0;
  height: 40px;
  width: 120px;
  /* background-color: #2ffb18; */
}
.moedati-icon-div {
  height: 100%;
  width: 100%;
  background-color: #e42024;
  /* background-color: #ffffff; */
  justify-content: end;
  border-radius: 0 0 15px 15px;
  padding: 10px;
  box-shadow: 0 1px 2px rgb(0, 0, 0);
}
.moedati-img {
  max-width: 100%;
  border-radius: 3px;
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
