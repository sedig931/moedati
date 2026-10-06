<template>
  <div class="main-page-div flex-row">
    <!-- <ItemCard/> -->
    <Classifi/>
  </div>
</template>
<script>
import ItemCard from './itemCard.vue'
import Classifi from './calssif.vue'
export default {
  components: {
    ItemCard,
    Classifi
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
.main-page-div{
    background-color: #ccc;
    height: 100%;
    width: 100%;
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