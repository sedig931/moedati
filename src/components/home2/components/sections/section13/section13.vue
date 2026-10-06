<template>
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
          src="https://player.cloudinary.com/embed/?cloud_name=dpvuuyg6w&public_id=InShot_20260917_095126469_bz9upo"
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
                'https://moedati.com/ar/مضخة-هواء-yato-ادوات-كهربائية-yt-82894/p2110146409'
            "
          >
            شراء الآن
          </button>
        </div>
        <iframe
          class="ss13-vid-div"
          src="https://player.cloudinary.com/embed/?cloud_name=dpvuuyg6w&public_id=InShot_20260205_142829610_qxwrrb"
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
            onclick="window.location.href = 'https://moedati.com/ar/redirect/categories/540250071'"
          >
            شراء الآن
          </button>
        </div>
        <iframe
          class="ss13-vid-div"
          src="https://player.cloudinary.com/embed/?cloud_name=dpvuuyg6w&public_id=InShot_20260326_133634682_sgfuka"
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
                'https://moedati.com/ar/عربة-أدوات-بثلاث-قطع-مع-أدوات-ادوات-يدوية-yato-yt-09104/p51913717'
            "
          >
            شراء الآن
          </button>
        </div>
        <iframe
          class="ss13-vid-div"
          src="https://player.cloudinary.com/embed/?cloud_name=dpvuuyg6w&public_id=InShot_20260318_115146363_fprjr5"
          frameborder="0"
          allowfullscreen
        >
        </iframe>
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
  methods: {
    makeSS13ContainerMove() {
      const slider = document.querySelector(".ss13-container");
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
        const walk = (x - startX) * 1.3; // scroll speed
        slider.scrollLeft = scrollLeft - walk;
      });
      requestAnimationFrame(() => {
        slider.scrollTo({
          left: 500,
          behavior: "smooth",
        });
      });
    },
  },
  mounted() {
    this.makeSS13ContainerMove();
  },
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
.ss13-outer-container {
  width: 100%;
}
.ss13-container {
  display: flex;
  width: 100%;
  /* max-width: 1400px; */
  justify-content: space-evenly;
  flex-wrap: nowrap;
  gap: 30px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 23px 20px 23px 20px;
}
.ss13-container::-webkit-scrollbar {
  display: none;
}
.ss13-container * {
  user-select: none;
  -webkit-user-drag: none;
}
.ss13-framevid-overlaydiv {
  position: relative;
}
.ss13-vid-overlay {
  position: absolute;
}
.ss13-vid-overlay-top {
  top: 0;
  height: 40%;
  width: 100%;
}
.ss13-vid-overlay-bottom {
  bottom: 0;
  height: 40%;
  width: 100%;
}
.ss13-show-pro-btn {
  border: 1px solid #f06767;
  border-radius: 7px;
  font-size: 13px;
  padding: 3px 22px 3px 22px;
  transform: translateY(40px);
  box-shadow: 0 1px 4px rgb(42, 42, 42);
  background-image: linear-gradient(to top, #e32c2c, #fdb0ad);
  color: white;
}
.ss13-show-pro-btn:hover {
  color: #e32c2c;
  background-image: linear-gradient(to top, rgb(255, 255, 255), rgb(255, 255, 255));
  /* box-shadow: 0 1px 4px rgb(171, 171, 171); */
}
.ss13-vid-div {
  height: 530px;
  width: 298px;
  border-radius: 15px;
  /* border: 1px solid rgb(173, 173, 173); */
  box-shadow: 0 2px 6px rgb(173, 173, 173);
  z-index: 0;
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
