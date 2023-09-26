import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
// import { ArrayCamera } from 'three'
import ButtonFlashBox from '@/components/ButtonFlash.vue'
import orderList from "@/components/PerOrder.vue";
export default {
  data() {
    return {
      USD: 0,
      YEN: 0,
      NT: 0,
      A: false,
      B: false,
      j1C: false,
      j2C: false,
      j3C: false,
      j4C: false,
      amount: 6,
      show1: true,
      show2: false,
      btn1: "btn-active",
      btn2: "",
      journey: "月球巡禮",
      j1:["2023/ 11/1~11/10",6,"2023/ 10/30~10/31"],
      j2:["2023/ 12/1~11/10",2,"2023/ 11/29~1/30"],
      j3:["2024/ 1/1~1/10",7,"2023/ 12/30~12/31"],
      j4:["2024/ 3/1~3/10",4,"2024/ 2/27~2/28"],
      date: "",
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
        {
          id: 1,
          p: "每趟旅程有10人的團位限制，最低成團人數為6人。滿團可以報名候補，若報名截止，但該團未達最低出團人數，則取消旅程，已報名者全額退費。",
        },
        {
          id: 2,
          p: "正取人員取消訂單時，我們會通知候補人員，進行遞補。",
        },
        {
          id: 3,
          p: "報名旅程須至指定的醫療院所進行體檢確認體能狀況，並在報名時附上體檢資料。PLANET VOYAGER團隊會進行資料審查，並於三個工作天內寄出審查結果通知信給您。",
        },
        {
          id: 4,
          p: "若因天氣因素而無法出發，則啟航日期向後順延14天，最多順延兩次，若依然因為天氣因素無法成團，則退費70%",
        },
      ],
      currentAmount: "1",

      // subContent: [
      // ],
      
      // formList: [],
    }
  },
  methods: {
    show1F() {
      this.show1 = true;
      this.show2 = false;
      this.btn1 = "btn-active"
      this.btn2 = "";
    },
    show2F() {
      this.show2 = true;
      this.show1 = false
      this.btn2 = "btn-active"
      this.btn1 = "";

    },
    af() {
      this.B = false;
      this.A = !this.Chosen00;
      this.journey = "月球巡禮";
    },
    bf() {
      this.A = false;
      this.B = !this.Chosen01;
      this.journey = "太空之心";
    }, 
    j1f() {
      this.j1C =!this.j1C;
      this.j2C = false;
      this.j3C = false;
      this.j4C = false;
      this.amount = this.j1[1];
      this.date = this.j1[2];
    },
    j2f() {
      this.j2C =!this.j2C;
      this.j1C = false;
      this.j3C = false;
      this.j4C = false;
      this.amount = this.j2[1];
      this.date = this.j2[2];
    },
    j3f() {
      this.j3C =!this.j3C;
      this.j1C = false;
      this.j2C = false;
      this.j4C = false;
      this.amount = this.j3[1];
      this.date = this.j3[2];
    },
    j4f() {
      this.j4C =!this.j4C;
      this.j1C = false;
      this.j2C = false;
      this.j3C = false;
      this.amount = this.j4[1];
      this.date = this.j4[2];
    },
  },
  computed: {
    options() {
      return Array.from({ length: this.amount }, (_, i) => {
        return {
          num: i + 1
        }
      })
    },
    exchange () {
      this.YEN = Math.floor(this.USD*148.91);
      this.NT = Math.floor(this.USD*32.23);

    }
    
  },
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
    ButtonFlashBox: ButtonFlashBox,
    orderList: orderList,
  },


}





