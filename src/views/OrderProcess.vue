<template>
  <div>
    <carousel  :items-to-show="3" :wrapAround="true"  :paginationColor="'#FFF'" class="custom-carousel" :autoplay="3000"  >
      <slide v-for="(item, index) in imgs" :key="item.index">
        <div class="cimgs">
         <img :src=item.slide  alt="輪播圖片">
        </div>
      </slide>
  
      <template #addons>
        <navigation /> 
        <pagination />  
      </template>
    </carousel> 
  </div>

  <!-- <h1>{{ one }}</h1>
  <hr>
  <h1>{{ two }}</h1>
  <hr>
  <h1>{{ three }}</h1>


  <div>
    這邊是想顯示的部分
  </div>


  <select name="" id="" v-model="currentAmount">
    <option :value="item.num" v-for="item in options"> {{ item.num }} </option>
  </select>


  <div v-for="form in formList">
    <input type="text" v-model="form.name">
  </div> -->
</template>
  
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
// import { ArrayCamera } from 'three'

export default {
  data() {
    return {
      one: "剩下1",
      two: "剩下2",
      three: "剩下3",
      // totle: [
      //   {
      //     num: '01',

      //   },
      //   {
      //     num: '02',

      //   }, {
      //     num: '03',

      //   }, {
      //     num: '04',

      //   }],
      // subContent: [

      // ],
      // amount: 3,
      // currentAmount: 1,
      // formList: [],
      
      imgs: [ {
              slide: require('@/assets/image/orderProcess/moonc1.svg'),
              altp:"在月球等你",
            },    
            {
              slide: require('@/assets/image/orderProcess/moonc2.svg'),
              altp:"太空儀器",
            },{
              slide: require('@/assets/image/orderProcess/moonc3.svg'),
              altp:"月球外星人",
            },{
              slide: require('@/assets/image/orderProcess/moonc6.svg'),
              altp:"太空環境",
            },{
              slide: require('@/assets/image/orderProcess/moonc5.svg'),
              altp:"月球景色",
            },{
              slide: require('@/assets/image/orderProcess/moonc4.svg'),
              altp:"太空高爾夫",
            }
          ]
              }
            },
  // computed: {
  //   options() {
  //     return Array.from({ length: this.amount }, (_, i) => {
  //       return {
  //         num: i + 1
  //       }
  //     })
  //   },
  // },
  // watch: {
  //   currentAmount(nVal) {
  //     this.setFormList(nVal)
  //   },
  // },
  // methods: {
  //   setFormList(num) {
  //     this.formList = Array.from({ length: num }, (_, i) => {
  //       return {
  //         name: '',
  //         email: ''
  //       }
  //     })
  //   },
  // },
  // mounted(){
  //   this.setFormList(this.currentAmount)
  // },
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}



</script>

<style scoped lang="scss">
@import "~@/assets/sass/page/orderProcess.scss";

</style>
  