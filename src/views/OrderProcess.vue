<template>
  <div class="firstM">
    <img src="@/assets/image/orderProcess/moon.png" alt="">
  </div>
  <div class="title">
    <h1>月球體驗之旅</h1>
    <h2>Moon Exploration Journey</h2>
  </div>
<!-- 月球左右到，介紹、退費、行程 -->
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
      <hr>
      
      <div class="travelInfo-conatiner">
        <h3>太空旅遊資訊和退費政策</h3>
        <h4>歡迎參加 PLANET VOYAGER太空旅遊團！</h4>
        <ul class="travelInfo">
          <li>
            <div>1</div>
            <div>每趟旅程有10人的團位限制，最低成團人數為6人。滿團可以報名候補，若報名截止，但該團未達最低出團人數，則取消旅程，已報名者全額退費。</div>
          </li>
         

        </ul>
        
      </div>
      
    </div>

  </section>

<!-- 選擇行程、時間 -->
<section>
  <div> <h4>選擇行程</h4>  <p>Choose Itinerary</p></div>
  <div>月球巡禮</div>
  <div>太空之心</div>
</section>

<section>
  <div>
    <h4>選擇行程時間</h4>  <p>Choose Itinerary</p>
    <div>
      <h5>航程日期: </h5>
      <p>2023/ 11/1~11/10</p>

      <h5>訓練日期:</h5>
      <p>2023/ 10/30~10/31</p>

      <div>
        團位:  10   可售: 2   候補: 0
      </div>

    </div>
  </div>
</section>


<!-- 輪播 -->
  <div class="carousel">
    <carousel  :items-to-show="3" :wrapAround="true"  :paginationColor="'#FFF'" class="custom-carousel" :autoplay="3000"  >
      <slide v-for="(item, index) in imgs" :key="item.index">
        <div class="cimgs">
         <img :src=item.slide  alt="輪播圖片">
        </div>
      </slide>
  
      <template #addons>
        
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
              slide: require('@/assets/image/orderProcess/moonc4.svg'),
              altp:"太空環境",
            },{
              slide: require('@/assets/image/orderProcess/moonc5.svg'),
              altp:"月球景色",
            },{
              slide: require('@/assets/image/orderProcess/moonc6.svg'),
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
  