<template>
    <div>
      <h3>About view. change</h3>
      <changimg :customImgs="imgs"  />
    </div>
  </template>
  
  <script>
  import changimg from '@/components/Carousel.vue';
                     

  
  export default {
    components: { changimg },
    data() {
      return {
     
        imgs: [
          {
            slide: require('@/assets/image/orderProcess/moonc1.svg'),
            altp: "在月球等你",
          },
          {
            slide: require('@/assets/image/orderProcess/moonc1.svg'),
            altp: "在月球等你",
          },
          {
            slide: require('@/assets/image/orderProcess/moonc1.svg'),
            altp: "在月球等你",
          },
          {
            slide: require('@/assets/image/orderProcess/moonc1.svg'),
            altp: "在月球等你",
          },
          {
            slide: require('@/assets/image/orderProcess/moonc1.svg'),
            altp: "在月球等你",
          },
          {
            slide: require('@/assets/image/orderProcess/moonc1.svg'),
            altp: "在月球等你",
          },
        ],
      };
    },
  };
  </script>
  