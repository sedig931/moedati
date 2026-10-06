<template>
  <div class="container-div flex-column">
    <form v-if="this.insearchForm" class="form-search flex-column" action="" @submit.prevent="this.getElement">
      <input required  v-model="this.itemSku" type="text" placeholder="SKU" name="" id="">
      <label class="itempoint-lbl" for="">{{this.itemPointDisc}}</label>
      <button type="submit" class="btn-search">Search</button>
      <button type="button" class="add-item-button" @click="this.insearchForm = false">Add To Stock</button>
    </form>

    <form v-if="!this.insearchForm" class="form-add flex-column" action="" @submit.prevent="this.putElement">
      <input required  v-model="this.newItem.sku" type="text" placeholder="SKU" name="" id="">
      <input  class="number-input" required  v-model="this.newItem.column" type="number" placeholder="COLUMN" name="" id="">
      <input class="number-input" required  v-model="this.newItem.row" type="number" placeholder="ROW" name="" id="">
      <input class="number-input" required  v-model="this.newItem.ncolumn" type="number" placeholder="N COLUMN" name="" id="">
      <button  class="btn-add">ADD +</button>
    </form>

  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      insearchForm:true,
      //propreties
      elements : [
       [
        [["YT-1","YT-111"],["YT-2","YT-22"],["YT-3","YT-33"]],
       [["YT-6"],["YT-5"],["YT-4"]],
       [["YT-7"],["YT-8"],["YT-9"]],
       [["YT-10"],["YT-11"],["YT-12"]],
       [["YT-13"],["YT-14"],["YT-15"]]
       ],
      //  [[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]],
      //  [[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]],
      //  [[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]],
      //  [[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]],
      ],
      itemSku:'',
      itemPointDisc:'',
      newItem:{
        sku:'',
        column:'',
        row:'',
        ncolumn:''
      }
    };
  },
  methods: {
    getElement (){
      let found = false;
      this.elements.forEach((maincolumn,maincolumnIndex) => {
        maincolumn.forEach((oneRow,oneRowIndex) =>{
           oneRow.forEach((items,itemsIndex) => {
             items.forEach((item,itemIndex) => {
             if(this.itemSku === item){
              console.log('here found..');
              this.itemPointDisc = `Item in : ${maincolumnIndex} => ${oneRowIndex} => ${itemsIndex}`
              found = true ;
             }
            });
           });
        });
      });
      if(!found) this.itemPointDisc = `sorry item not found...`;
    },
    putElement(){
      console.log(this.newItem);
      this.elements[this.newItem.column][this.newItem.row][this.newItem.ncolumn].push(this.newItem.sku);
      console.log(this.elements);
      this.insearchForm = true;
    }
  },
  mounted() {

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
.container-div{
  height: 80%;
  width: 100%;
  max-width: 500px;
  border: 3px solid rgb(71, 165, 180);
  border-radius: 15px;
  background-image: linear-gradient(to bottom right, #ffffff, #f4f4f4);
  padding:0 0 20px 0;
}
.form-search,.form-add{
  height: 100%;
  width: 100%;
}
.itempoint-lbl{
  font-size: 20px;
  margin: 10px 0 10px 0;
  color: #747474;
  font-weight: bold;
}

input[type="text"] {
  width: 80%;
  height: 35px;
  border-radius: 8px;
  padding: 5px;
  font-size: 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border:2px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  text-align: center;
}
input[type="text"]:focus {
  border: 2px solid #35c5f1;
}
input[type="number"] {
  width: 40%;
  height: 35px;
  border-radius: 8px;
  padding: 5px;
  font-size: 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border:2px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  text-align: center;
}
input[type="number"]:focus {
  border: 2px solid #35c5f1;
}

.btn-search{
  width: 50%;
  height: 35px;
  border-radius: 10px;
  border: none;
  background-image: linear-gradient(to right, #30b7a5, #238e90);
  color: white;
  font-size: 20px;
  font-weight: bold;
}
.add-item-button{
  border: none;
  background-image: linear-gradient(to bottom right, #af5ca1, #24999f);
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  padding: 3px 15px 3px 15px;
  margin-top: 15px;
}
.btn-add{
  border: none;
  background-image: linear-gradient(to bottom right, #af5ca1, #24999f);
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  padding: 3px 15px 3px 15px;
  margin-top: 15px;
}
</style>