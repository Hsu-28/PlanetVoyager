import $ from 'jquery'
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
// import { ArrayCamera } from 'three'
import ButtonFlashBox from '@/components/ButtonFlash.vue'
import orderList from "@/components/PerOrder.vue";
export default {
  data() {
    return {
      activeId: "",
      phpData: '',
      jpRate:0,
      ntRate:0,
      orderCheck: false,
      USD: 0,
      YEN: 0,
      NT: 0,
      A: false,
      B: false,
      amount: 6,
      date: "",
      show1: true,
      show2: false,
      btn1: "btn-active",
      btn2: "",
      journey: "月球巡禮",
      imgs: [
        {
           slide: require('@/assets/image/orderProcess/moonc1.jpg'),
           altp: "在月球等你",
         },
         {
           slide: require('@/assets/image/orderProcess/moonc2.jpg'),
           altp: "太空儀器",
         }, {
           slide: require('@/assets/image/orderProcess/moonc3.jpg'),
           altp: "月球外星人",
         }, {
           slide: require('@/assets/image/orderProcess/moonc4.jpg'),
           altp: "太空環境",
         }, {
           slide: require('@/assets/image/orderProcess/moonc5.jpg'),
           altp: "月球景色",
         }, {
           slide: require('@/assets/image/orderProcess/moonc6.jpg'),
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
      journeyAll: [
        {
          id:1,
          traveDate:"2023/ 11/1~11/10",
          traningDate:"2023/ 11/1~11/10",
          order: 6,
          Alternate: 0,
          state: this.j1C,
          function: this.j1f,
        },{
          id:2,
          traveDate:"2023/ 12/1~11/10",
          traningDate:"2023/ 11/29~1/30",
          order: 2,
          Alternate: 0,
          state: this.j2C,
          function: this.j2f,
        },{
          id:3,
          traveDate:"2024/ 1/1~1/10",
          traningDate:"2023/ 12/30~12/31",
          order: 7,
          Alternate: 0,
          state: this.j3C,
          function: this.j3f,
        },{
          id:4,
          traveDate:"2024/ 3/1~3/10",
          traningDate:"2024/ 2/27~2/28",
          order: 4,
          Alternate: 0,
          state: this.j4C,
          function: this.j4f,
        }
      ],
      currentAmount: "1",

      // subContent: [
      // ],
      
      formList: [],
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
    udpateForm(form, index) {
      console.log(form, index)
      this.formList[index] = form;
    },
    disOrder(){
      this.orderCheck = !this.orderCheck
    },
    checkOrder(){
      this.orderCheck = true
    }
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
      this.YEN = Math.floor(this.USD*this.jpRate.toFixed(2));
      this.NT = Math.floor(this.USD*this.ntRate.toFixed(2));

    }
    
    
  },
  watch: {
    currentAmount() {
      this.formList = []
    },
      activeId: {
        handler(newActiveId) {
          this.amount = this.journeyAll[newActiveId-1].order;
          this.date = this.journeyAll[newActiveId-1].traningDate;
          // if (newActiveId === 1) {
          //   this.amount = this.journeyAll[0].order;
          //   this.date = this.journeyAll[0].traningDate;
          // } else if (newActiveId === 2) {
          //   this.amount = this.journeyAll[1].order;
          //   this.date = this.journeyAll[1].traningDate;
          // } else if (newActiveId === 3) {
          //   this.amount = this.journeyAll[2].order;
          //   this.date = this.journeyAll[2].traningDate;
          // } else if (newActiveId === 4) {
          //   this.amount = this.journeyAll[3].order;
          //   this.date = this.journeyAll[3].traningDate;
          // }
        },

      }
    
  },
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    ButtonFlashBox: ButtonFlashBox,
    orderList: orderList,
  },
  created() {
    // 在 Vue 的 created 鉤子中發送請求
    $.get('https://openexchangerates.org/api/latest.json', {app_id: '738d67de7ed043e690b7b729c87953c1'}, data => {
        this.ntRate = data.rates.TWD;
        this.jpRate = data.rates.JPY;
    });

    // 發起HTTP GET 請求
    axios.get('http://localhost/PV/phptest.php')
      .then(response => {
        this.phpData = response.data;
      })
      .catch(error => {
        console.error(error);
      });
}


}





