<template>
  <div class="classi-outer-div flex-row">
    <div class="sqrs-collection-div">
    <div class="sqr-shape sqr-shape"></div>
    <div class="sqr-shape sqr-shape1"></div>
    <div class="sqr-shape sqr-shape2"></div>
    </div>
    <div class="sqrs-collection-div sqrs-collection-div1">
    <div class="sqr-shape sqr-shape"></div>
    <div class="sqr-shape sqr-shape1"></div>
    <div class="sqr-shape sqr-shape2"></div>
    </div>
    <div class="sqrs-collection-div sqrs-collection-div2">
    <div class="sqr-shape sqr-shape"></div>
    <div class="sqr-shape sqr-shape1"></div>
    <div class="sqr-shape sqr-shape2"></div>
    </div>
    <div class="rects-outer-div">
    </div>
    <div class="rect-div">
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
.classi-outer-div{
    position: relative;
    height: 700px;
    width: 700px;
    border: 1px solid ;
}
.sqrs-collection-div{
    position: absolute;
    top: 50px;
    left: 120px;
}
.sqrs-collection-div1{
    top: 250px;
    left: 70px;
}
.sqrs-collection-div2{
    top: 450px;
    left: 20px;
}
.sqr-shape{
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width: 80px;
    border: 2px solid rgb(116, 37, 37);
    border-radius: 10px;
}
.sqr-shape1{
    top: 30px;
    left: 30px;
}
.sqr-shape2{
    top: 60px;
    left: 60px;
}
.rects-outer-div{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* background-color: rgba(219, 82, 69, 0.9); */
      background-image: linear-gradient(to right, rgba(105, 6, 0, 0.9), rgba(206, 99, 89, 0.9));
}
.rect-div{
    position: absolute;
    right: 0;
    bottom: 0;
    border-bottom: 600px solid rgb(255, 255, 255);
    border-left: 600px solid transparent;
    background-color: transparent;
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
</style>