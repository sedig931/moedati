<template>
  <div class="new-css-trick-container flex-column">
        <div class="border-point-div setMargin"></div>
        <span class="text-shadow setMargin">Look At Me</span>
        <div class="clip-path"></div>
        <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\customer1.png" alt="" class="mask-img">
        <div class="mix-blend-div flex-row">
          <img src="C:\Users\danaglobPC1\Downloads\danaGlob-projects-imgs\BS-HC90B.jpeg" alt="" class="mix-blend-img">
        </div>
        <div class="box setMargin"></div>
        <div class="box2 setMargin flex-row">
          <div class="box2-body"></div>
        </div>
        <div class="box3 setMargin"></div>
        <div class="box4 setMargin"></div>
        <span class="c-clamp-span setMargin">Try to make me small witout media query</span>
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
.setMargin{
    margin: 30px;
}
.new-css-trick-container{
    width: 100%;
    height: 100%;
    /* background-color: #f5f5f5; */
}
.text-shadow{
    font-size: 70px;
    color: #9e9e9e;
    color:#f16558;
    text-shadow:0 2px 7px rgba(0, 0, 0, 0.3);
    text-shadow:0 2px 4px rgba(0,0,0,.2),0 8px 18px rgba(0,0,0,.3);
    text-shadow: 0 2px 2px #fff,0 4px 10px rgba(0,0,0,.35);
    color:#ff0000;
    text-shadow:0 0 5px red,0 0 15px red,0 0 30px red;
    color:#fff;
    text-shadow:0 0 5px #fff,0 0 10px #00ffff,0 0 20px #00ffff,0 0 40px #00ffff;
    color:#ddd;
    text-shadow:1px 1px 0 #fff,-1px -1px 0 #999;
    /* color:white;
    text-shadow:1px 1px #888,2px 2px #777,3px 3px #666,4px 4px #555,5px 5px #444;
    color:#222;
    text-shadow:0 1px 2px rgba(255,255,255,.6); */
}
.border-point-div{
  height: 200px;
  width: 300px;
  border: 1px dashed #7c7c7c;
  border-radius: 15px;
}
.clip-path{
    width:200px;
    height:200px;
    background-color:#47d1ff;
    clip-path: polygon(50% 0%,100% 100%,0% 100%);
    clip-path: polygon(
        0 0,
        90% 0,
        100% 15%,
        100% 100%,
        0 100%
    );
    clip-path: polygon(
        25% 0%,
        75% 0%,
        100% 50%,
        75% 100%,
        25% 100%,
        0% 50%
    );
    clip-path: polygon(
        0 0,
        100% 0,
        92% 100%,
        0 100%
    );
    clip-path: polygon(
        0 0,
        100% 0,
        100% 82%,
        0 100%
    );
    clip-path: ellipse(80% 100% at 50% 0%);
    clip-path: polygon(
        50% 0,
        100% 50%,
        50% 100%,
        0 50%
    );
    clip-path: polygon(
        0 0,
        80% 0,
        80% 20%,
        100% 50%,
        80% 80%,
        80% 100%,
        0 100%
    );
    clip-path: polygon(
        0 0,
        95% 0,
        100% 8%,
        100% 100%,
        5% 100%,
        0 92%
    );
  }
  
.mask-img{
    margin: 20px;
    height: 400px;
    mask-image:linear-gradient(
    to bottom,
    black 60%,
    transparent
    );
    mask-image:linear-gradient(
    to left,
    black,
    transparent
    );
    mask-image:
    linear-gradient(
    to right,
    transparent,
    black 20%,
    black 80%,
    transparent
    );
    mask-image:
    radial-gradient(
    circle,
    black 50%,
    transparent
    );
}
.mix-blend-div{
  height: 300px;
  width: 300px;
  margin: 20px;
  background-color: #079063;
}
.mix-blend-img{
  height: 200px;
  mix-blend-mode:multiply;
  mix-blend-mode:screen;
  mix-blend-mode:overlay;
  mix-blend-mode:difference;
  mix-blend-mode:color-dodge;
  mix-blend-mode:luminosity;
  mix-blend-mode:color;
}
/* --------------///////////////-------------- */
/* --------------///////////////-------------- */
/* --------------///////////////-------------- */
@property --angle{
  syntax:"<angle>";
  inherits:false;
  initial-value:0deg;
}
@property --deg{
  syntax:"<angle>";
  inherits:false;
  initial-value:0deg;
}
@property --x{
  syntax:"<percentage>";
  inherits:false;
  initial-value:0%;
}
@property --radius{
  syntax:"<length>";
  inherits:false;
  initial-value:2px;
}
.box{
  height: 60px;
  width: 60px;
  background-color: #404b4b;
  border-radius: 12px;
  animation:spin 5s linear infinite;
  transform:rotate(var(--angle));
  /* transform: translateX(var(--angle)); */
}
.box2{
  position: relative;
  height: 60px;
  width: 60px;
  border-radius: 12px;
  box-shadow: 1px 1px 5px rgb(120, 120, 120);
  background:
  conic-gradient(
    from var(--deg),
    red,
    orange,
    yellow,
    red
    );
  animation:rotate 4s linear infinite;
}
.box2-body{
  position: absolute;
  height: 89%;
  width: 89%;
  border-radius: inherit;
  background-color: #eaeaea;
  /* box-shadow: 1PX 1px 2px rgb(118, 118, 118); */
}
.box3{
  height: 60px;
  width: 60px;
  border-radius: 12px;
  background:
  linear-gradient(
  90deg,
  red var(--x),
  blue
  );
  animation:move 2s infinite alternate;
}
.box4{
  height: 160px;
  width: 160px;
  background-color: #1ede78;
  border-radius:var(--radius);
  animation:round 2s infinite alternate;
  }
@keyframes spin{
  to{
  --angle:360deg;
  }
}
@keyframes rotate{
  to{
  --deg:360deg;
  }
}
@keyframes move{
  to{
  --x:100%;
  }
}
@property --radius{
  syntax:"<length>";
  inherits:false;
  initial-value:10px;
}
@keyframes round{
  to{
  --radius:50px;
  }
}
/* --------------///////////////-------------- */
/* --------------///////////////-------------- */
/* --------------///////////////-------------- */
.c-clamp-span{
  /* font-size:50px */
  background-color: #00ffff;
  font-size: clamp(10px,3vw,50px);
  width: clamp(250px,1400px,90%);
  padding: clamp(10px,1vw,30px);
  border-radius:clamp(5px,2vw,50px);
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
