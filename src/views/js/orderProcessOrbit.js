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
      showAlert: false,
      activeId: "",
      jpRate: 0,
      ntRate: 0,
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
      journey: "星際繞行",
      imgs: [
        {
          slide: require('@/assets/image/orderProcess/orbit2.jpg'),
          altp: "繞行照片",
        },
        {
          slide: require('@/assets/image/orderProcess/orbit1.jpg'),
          altp: "繞行照片",
        }, {
          slide: require('@/assets/image/orderProcess/orbit3.jpg'),
          altp: "繞行照片",
        }, {
          slide: require('@/assets/image/orderProcess/orbit4.jpg'),
          altp: "繞行照片",
        }, {
          slide: require('@/assets/image/orderProcess/orbit5.jpg'),
          altp: "繞行照片",
        }, {
          slide: require('@/assets/image/orderProcess/orbit6.jpg'),
          altp: "繞行照片",
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
      subtitle: [
        {
          "planet_subtitle": "",
          "content_title": '',
          "introduction": ''
        },
        {
          "planet_subtitle": "",
          "content_title": '',
          "introduction": ''
        },
        {
          "planet_subtitle": "",
          "content_title": '',
          "introduction": ''
        },
        {
          "planet_subtitle": "",
          "content_title": '',
          "introduction": ''
        }, {
          "planet_subtitle": "",
          "content_title": '',
          "introduction": ''
        },
        {
          "planet_subtitle": "",
          "content_title": '',
          "introduction": ''
        },
        {
          "planet_subtitle": "",
          "content_title": '',
          "introduction": ''
        },
        {
          "planet_subtitle": "",
          "content_title": '',
          "introduction": ''
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
      this.journey = this.subtitle[0].planet_subtitle;
    },
    bf() {
      this.A = false;
      this.B = !this.Chosen01;
      this.journey = this.subtitle[4].planet_subtitle;
    },
    udpateForm(form, index) {
      console.log(form, index)
      this.formList[index] = form;
    },
    disOrder() {
      this.orderCheck = !this.orderCheck
    },
    checkOrder() {
      this.orderCheck = true
    },
    checkOrderInfo() {
      const inputs = Array.from(document.getElementsByName("infos"));
      const checkbox = document.querySelector('.infoscheck');
      const seats = document.querySelector('.seats').innerText
      for (let input of inputs) {
        if (input.value.trim() === "" || !checkbox.checked || seats == "") {

          this.orderCheck = false
          this.showAlert = true
          // alert("還有資料尚未填寫")
        }
      }
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
    exchange() {
      this.YEN = Math.floor(this.USD * this.jpRate.toFixed(2));
      this.NT = Math.floor(this.USD * this.ntRate.toFixed(2));

    },
    MJ1() {
      return this.subtitle.filter(v => v.planet_subtitle === "星際繞行")
    },
    Addorder() {
      const formData = [];

      if (this.formList.length > 0) {
        this.formList.forEach(item => {
          formData.push({
            lastName: item.lastName,
            name: item.name,
            gender: item.gender,
            birthday: item.birthday,
            nation: item.nation,
            passId: item.passId,
            size: item.size,
            // status: item.status,
            other: item.other,
            seatIndex: item.seatIndex,
            ssize: item.ssize,
            scolor: item.scolor
          });
        });
      }

      // 發送formData到伺服器
      fetch(`${this.$store.state.phpPublicPath}order.php`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // 可以在這邊進行操作，例如跳轉頁面或成功消息
        })
        .catch(error => {
          console.error('請求錯誤:', error);
        });
    }
  },
  watch: {
    currentAmount() {
      this.formList = []
    },
    activeId: {
      handler(newActiveId) {
        const index = this.MJ1.findIndex(v => v.trip_no === newActiveId)
        if (index === -1) return
        this.amount = this.MJ1[index].signup_num;
        this.date = this.MJ1[index].trip_date;
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
    $.get('https://openexchangerates.org/api/latest.json', { app_id: '738d67de7ed043e690b7b729c87953c1' }, data => {
      this.ntRate = data.rates.TWD;
      this.jpRate = data.rates.JPY;
    });

    // 發起HTTP GET 請求
    axios.get(`${this.$store.state.phpPublicPath}orderprocessOrbit.php`)
      .then(response => {
        this.subtitle = response.data;
      })
      .catch(error => {
        console.error(error);
      });

    //登入狀態驗證
    fetch(`${this.$store.state.phpPublicPath}verifyLogin.php`, {
      mode: "cors",
      credentials: "include",
    })
      .then(response => response.json())
      .then(data => {
        if (data.msg === "未登入") {
          alert('請先登入會員再報名旅程！');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }


}





