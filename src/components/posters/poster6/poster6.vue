<template>
    <div> 
      <!-- <SnapWebAdd/> -->
      <!-- <CatAdd/> -->
      <ProductAdd/>
      <!-- <ProductAddSize11/> -->
      <!-- <InstawebAdd11/> -->
      <!-- <InstawebAdd191/> -->
    </div>
</template>
<script>
import SnapWebAdd from "./snap/adds/webadd.vue"
import CatAdd from "./snap/adds/catoAdd.vue"
import ProductAdd from "./snap/adds/productAdd.vue"
import ProductAddSize11 from "./snap/adds/productAddSize11.vue"
import InstawebAdd11 from "./insta/adds/webadd11.vue";
import InstawebAdd191 from "./insta/adds/webadd191.vue";
export default {
  components: {
    SnapWebAdd,
    CatAdd,
    ProductAdd,
    ProductAddSize11,
    InstawebAdd11,
    InstawebAdd191
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