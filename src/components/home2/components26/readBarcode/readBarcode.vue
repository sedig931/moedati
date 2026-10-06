<template>
  <div class="barcode">
    <video ref="video" width="500" autoplay playsinline></video>
  </div>
</template>
<script>
import { BrowserMultiFormatReader } from "@zxing/browser";
export default {
  components: {},
  data() {
    return {
      codeReader: null,
      barcodes: [],
      //propreties
    };
  },
  methods: {
    async startCamera() {
      this.codeReader = new BrowserMultiFormatReader();
    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: true
        });

        this.$refs.video.srcObject = stream;

    } catch (e) {
        console.error(e);
    }
    },
  },
  mounted() {
    this.startCamera();
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
.barcode {
  display: flex;
  justify-content: center;
}

video {
  width: 300px;
  max-width: 100%;
  border-radius: 10px;
  border: 2px solid #ddd;
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
