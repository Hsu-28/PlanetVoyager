<template>
    <carousel :items-to-show="3" :wrapAround="true">
      <slide v-for="slide in 10" :key="slide">
        {{ slide }}
      </slide>
  
      <template #addons>
        <navigation /> 
        <pagination />
      </template>
    </carousel>







    
  </template>
  
  <script>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  
  export default {
    name: 'App',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  }
  </script>
  