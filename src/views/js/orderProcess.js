
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
// import { ArrayCamera } from 'three'
import ButtonFlashBox from '@/components/ButtonFlash.vue'
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    ButtonFlashBox: ButtonFlashBox,
  },

data() {
    return {
        show1: true,
        show2: false,
        btn1: "btn-active",
        btn2: "",
        planetIndex: 0,
        

      imgs: [
       {
          slide: require('@/assets/image/orderProcess/moonc1.svg'),
          altp: "在月球等你",
        },
        {
          slide: require('@/assets/image/orderProcess/moonc2.svg'),
          altp: "太空儀器",
        }, {
          slide: require('@/assets/image/orderProcess/moonc3.svg'),
          altp: "月球外星人",
        }, {
          slide: require('@/assets/image/orderProcess/moonc4.svg'),
          altp: "太空環境",
        }, {
          slide: require('@/assets/image/orderProcess/moonc5.svg'),
          altp: "月球景色",
        }, {
          slide: require('@/assets/image/orderProcess/moonc6.svg'),
          altp: "太空高爾夫",
        }
      ],
      tourInfo: [
        {id: 1,
          p: "每趟旅程有10人的團位限制，最低成團人數為6人。滿團可以報名候補，若報名截止，但該團未達最低出團人數，則取消旅程，已報名者全額退費。",
        },
        {id: 2,
            p: "正取人員取消訂單時，我們會通知候補人員，進行遞補。",
          },
          {id: 3,
            p: "報名旅程須至指定的醫療院所進行體檢確認體能狀況，並在報名時附上體檢資料。PLANET VOYAGER團隊會進行資料審查，並於三個工作天內寄出審查結果通知信給您。",
          },
          {id: 4,
            p: "若因天氣因素而無法出發，則啟航日期向後順延14天，最多順延兩次，若依然因為天氣因素無法成團，則退費70%",
          },        
      ],
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
    }
  },
  methods: {
    show1F () {
       this.show1 = true;
       this.show2 = false;
       this.btn1 = "btn-active"
       this.btn2 = ""
    },
    show2F () {
        this.show2 = true;
        this.show1 = false
        this.btn2 = "btn-active"
        this.btn1 = ""
        
     },
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
  mounted() {
    console.log(this.$route.query)
    const sectionId = this.$route.query?.section;
    if (sectionId) {
      this.planetIndex = +sectionId
    }
  },
}



