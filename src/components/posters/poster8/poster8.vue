<template>
  <div>
    <!-- <ProductAddsqr /> -->
    <!-- <ProductAdd /> -->
    <!-- <ProductAddTraingle/> -->
    <!-- <SnapProductAdd/> -->
    <CapCut/>
  </div>
</template>
<script>
import ProductAddsqr from "./insta/productAddsqr.vue";
import ProductAdd from "./insta/productAdd.vue";
import SnapProductAdd from "./snap/productAdd.vue";
import ProductAddTraingle from "./insta/productAddtringle.vue";
import CapCut from "./capcut.vue";
export default {
  components: {
    ProductAdd,
    ProductAddsqr,
    ProductAddTraingle,
    SnapProductAdd,
    CapCut
  },
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
