<template>
  <div>
    <carousel :items-to-show="3" :wrapAround="true" class="custom-carousel" :autoplay="3000">
      <slide v-for="(item, index) in customImgs" :key="index">
        <div class="cimgs">
          <img :src="item.slide" :alt="item.altp">
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
//引入Carousel之後   expoet default裡面要放一imgs的資料  當作你要渲染的照片
  import 'vue3-carousel/dist/carousel.css';  //這邊是基本的引入設定
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';  //這邊是基本的引入設定

  export default {
  props: {
      customImgs: Array,  // 這邊設定有一筆資料 型態是array 也就是我們要放的輪播照片陣列
  },
  components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
  },
  };
</script>

<style scoped lang="scss">
div {
width: 90%;
background-color: transparent;
margin: 40px auto 0 auto;
height: auto;
}

h1 {
font-size: 60px;
}

.pagination {
color: gray;
}

.cimgs {
margin-top: 30px;
margin-bottom: 20px;
width: 84%;

img {
  width: 100%;
}
}
</style>
