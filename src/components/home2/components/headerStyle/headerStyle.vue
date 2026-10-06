<template>
  <div class="header-div">
    <div class="header-button"></div>
    <div class="header-button flex-row">salla</div>
    <input type="text" class="input-search">
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
.header-div{
    width: 100%;
    /* background-color: #818181; */
    display: flex;
    justify-content: space-evenly;
}
.input-search {
  width: 300px;
  height: 50px;
  border-radius: 22px;
  padding: 5px;
  font-size: 10px;
  outline: none;
  border: 1px solid #ebebeb;
  /* background-image:linear-gradient(to right, #f1f1f1, #ffffff); */
  background-image:linear-gradient(to right, #f1f1f1, #ffffff);
  box-shadow: 0 3px 10px rgb(204, 204, 204);

}
.input-search:focus {
  /* border: 1px solid #cacaca; */
  box-shadow: none;
}
.back-to-me{
  flex-wrap: wrap;
  overflow: hidden;
  transform: translateY(-15px);
  transform: rotate(-40deg) scale(1);
  background-image:linear-gradient(to right, #e51e25, #e75b5b);
  filter: drop-shadow(10px 10px 5px #818181);
  box-shadow: 0 3px 10px rgb(213, 213, 213);
  font-family: "Almarai";
  background-color: #368185;
}
.header-button{
    height: 50px;
    width: 100px;
    border: 1px solid #ebebeb;
    border-radius: 22px;
  background-image:linear-gradient(to right, rgb(255, 95, 95), rgba(255, 12, 12, 0.833));
  box-shadow: 0 3px 10px rgb(204, 204, 204);
  transition: transform 0.5s;
  cursor: pointer;
/* color: rgb(212, 43, 43); */
color: white;
opacity: 0.8;
/* font-weight: bold; */
font-size: 20px;

}
.header-button:hover{
transform: translateY(-4px);
}

/* ------SALLA CARD HOVER------- */
/* ------SALLA CARD HOVER------- */
/* ------SALLA CARD HOVER------- */
.product-entry__inner:hover{
border-color: rgb(255, 255, 255);
color: rgb(87, 87, 87);

}
</style>