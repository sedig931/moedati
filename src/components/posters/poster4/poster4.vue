<template>
    <div> 
        <!-- <InstaSinglePost/> -->
        <InstaStory/>
        <!-- <InstaGroup/> -->
        <!-- <NatDay/> -->
        <!-- <SnapWebAdd/> -->
    </div>
</template>
<script>
import InstaSinglePost from "./instagram/post/singlePost.vue";
import InstaStory from "./instagram/story/story.vue";
import InstaGroup from "./instagram/post/group.vue";
import SnapWebAdd from "./snapshat/adds/webadd.vue";
import NatDay from "./nationalDayAdd/natDay.vue";
export default {
  components: {
    InstaSinglePost,
    InstaStory,
    InstaGroup,
    SnapWebAdd,
    NatDay
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