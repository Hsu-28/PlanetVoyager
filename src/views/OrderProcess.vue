<template>
  <div class="firstM">
    <img src="@/assets/image/orderprocess/moon.png" alt="">
  </div>
  <div class="title">
    <h1>月球體驗之旅</h1>
    <h2>Moon Exploration Journey</h2>
  </div>

  <section class="introduce-container">
    <div class="introduce">
      <div class="button-container">
        <button>月球巡禮</button>
        <button>月球之星</button>
      </div>
      <div class="introduce-p">
        <h3>月球巡禮</h3>
        <h4>用你的一小步 見證人類的一大步</h4>
        <p>由地球出發 一天的航程後，我們將會在第二天登陸月球，朝聖人類的星際里程碑--阿姆斯壯的腳印，之後會遊歷月球上最大的隕石坑---貝利環形山、在滿月海中馳騁、橫越東月大裂谷、參觀台日共構的月球基地，飽覽月球風光後再返回地球。</p>
      </div>
      <div>
        <h3>太空旅遊資訊和退費政策</h3>
        <h4>歡迎參加 PLANET VOYAGER太空旅遊團！</h4>
        
      </div>
      
    </div>

  </section>

  <div class="carousel">
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

  <div class="ordering">

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
      
      imgs: [ 
        {
              slide: require('@/assets/image/orderprocess/moonc1.svg'),
              altp:"在月球等你",
            },    
            {
              slide: require('@/assets/image/orderprocess/moonc2.svg'),
              altp:"太空儀器",
            },{
              slide: require('@/assets/image/orderprocess/moonc3.svg'),
              altp:"月球外星人",
            },{
              slide: require('@/assets/image/orderprocess/moonc4.svg'),
              altp:"太空環境",
            },{
              slide: require('@/assets/image/orderprocess/moonc5.svg'),
              altp:"月球景色",
            },{
              slide: require('@/assets/image/orderprocess/moonc6.svg'),
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
  