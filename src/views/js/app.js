import scramble from '@/components/Scramble.vue'
import subscribe from '@/components/ButtonFlash.vue'
import { onMounted } from 'vue';
import axios from 'axios';

export default {
  components: {
    scramble: scramble,
    subscribe: subscribe,
  },
  data() {

    return {
      isLogin: false,
      i: 0,
      displayText: '',
      showMenu: false,
      // showFooter: true,
      headericon: true,
      titlelist: [
        {
          titleC: "關於我們",
          titleE: "ABOUT US",
          color: "$white",
          path: "aboutus",
        }, {
          titleC: "-星際旅程",
          titleE: "DESTINATION-",
          color: "$blueL",
          path: "destination",
        }, {
          titleC: "-訂購旅程",
          titleE: "BOOKING-",
          color: "$blueL",
          path: "order",
        }, {
          titleC: "行前訓練",
          titleE: "TRAINING",
          color: "$white",
          path: "training",
        }, {
          titleC: "科技創新",
          titleE: "THE VEHICLE",
          color: "$white",
          path: "technology"
        }, {
          titleC: "團隊介紹",
          titleE: "TOURIST GUIDE",
          color: "$white",
          path: "teamMembers"
        }, {
          titleC: "支持星際探索",
          titleE: "SUPPORT",
          color: "$white",
          path: "donate"
        }, {
          titleC: "問與答",
          titleE: "FAQs",
          color: "$white",
          path: "faq"
        }
      ],
      tipAll: [
        "金星的表面溫度高達900攝氏度，是太陽系中最熱的行星，其大氣中的壓力也非常高，可以將金屬融化",
        "在太空中火焰出呈現球狀火焰，火焰周圍形成了一個球體。這是因為火焰不再受到重力的約束，而是擴散開成球形。",
        "太陽每秒釋放的能量相當於10億顆核彈爆炸的'龐大能量，而這個過程已經持續了數十億年。",
        "火星上的晚霞是藍色的，與地球上的晚霞不同，因為火星的大氣中的塵埃顆粒會散射藍光。",
        "太陽系中的行星之間的距離是如此之大，以至於光從太陽照射到地球需要大約8分鐘，而從太陽照射到冥王星需要約5小時。",
        "國際空間站以每小時28,000公里的速度繞地球飛行，這意味著它每90分鐘繞地球一圈。",
        "火星上有一座巨大的火山，奧林匹斯山，它是太陽系中最高的山脈，高度約為13.6英里（22公里）",
        "太陽比地球大約109倍，但它的質量大約是地球的33萬倍，占據太陽系99.86%的總質量。",
        "尼勒維亞火山是太陽系中最高的火山，它位於火星上，高度超過火星表面的大氣層。",
        "由於相對論效應，太空中的時間流逝較慢，這意味著在太空中度過一段時間後，地球上的人會比太空中的人年輕。",
        "太空中的溫度極低，遠低於零下270攝氏度，因為宇宙背景輻射不斷吸收熱量。"
      ],
      //聊天機器人
      messages: [ // 聊天消息列表
        {
          text: "您好，歡迎來到PlanetVoyager，有什麼能幫助您的嗎？",
          isCustomer: false
        },
        // 其他消息
      ],
      newMessageText: "", // 用於綁定新消息的文本
      btnMessages: {},
      // btnMessages: [
      //   {
      //     text: "可以造訪哪些星球？"
      //   },
      //   {
      //     text: "我想了解行程"
      //   },
      //   {
      //     text: "行程訓練要準備什麼呢？"
      //   },
      //   {
      //     text: "捐款可以兌換什麼？"
      //   },
      //   {
      //     text: "忘記密碼"
      //   }
      // ]
    };
  },
  methods: {
    showMenuF() {
      this.showMenu = true;
      this.headericon = false;
      this.i = Math.floor(Math.random() * this.tipAll.length);
    },
    closeMenuF() {
      this.showMenu = false;
      this.headericon = true;
    },
    login() {
      fetch('https://tibamef2e.com/cgd103/g1/api/getProducts.php?order=prod_name&limit=9&page=1')
        .then(res => res.json())
        .then(json => console.log(json))
    },
    // 聊天機器人輸入訊息回覆
    sendMessage() {
      const messageText = this.newMessageText.trim();
      if (messageText !== '') {
        // 添加新消息到列表中
        this.messages.push({
          text: messageText,
          isCustomer: true // 假設這是顧客發送的消息
        });
        this.newMessageText = ''; // 清空輸入框

        // 機器人回覆
        setTimeout(() => {
          this.messages.push({
            text: '我不明白您的問題',
            isCustomer: false // 假設這是機器人的回覆
          });
        }, 1000);
      }
    },

    // 聊天機器人點擊按鈕回覆
    handleButtonClick(index) {
      // 添加新消息到列表中
      this.messages.push({
        text: this.btnMessages[index]["keyword"],
        isCustomer: true // 假設這是顧客發送的消息
      });
      // 機器人回覆
      setTimeout(() => {
        this.replyToUser(index);
      }, 1000);
    },
    replyToUser(index) {
      this.messages.push({
        text: this.btnMessages[index]["chat_ans"],
        isCustomer: false
      });
      // 根據按鈕回覆不同內容
      // switch (index) {
      //   case 0:
      //     this.messages.push({
      //       text: "您可以造訪月球、火星及金星。",
      //       isCustomer: false
      //     });
      //     break;
      //   case 1:
      //     this.messages.push({
      //       text: "行程詳情請至<a href='/destination'>星際旅程</a>了解~",
      //       isCustomer: false
      //     });
      //     break;
      //   case 2:
      //     this.messages.push({
      //       text: "需要上傳健康評估、並參與七天訓練課程，其餘詳情請至<a href='/training'>行前準備</a>！",
      //       isCustomer: false
      //     });
      //     break;
      //   case 3:
      //     this.messages.push({
      //       text: "會員等級達到銀可兌換鑰匙圈、金兌換棒球帽、白金兌換帽T、鑽石兌換太空人頭盔，還有機會抽中大獎喔！快去<a href='/donate'>支持星際探索</a>看看！",
      //       isCustomer: false
      //     });
      //     break;
      //   case 4:
      //     this.messages.push({
      //       text: "若您忘記了密碼，您可以在登入頁面點擊“忘記密碼”並按照指示重置密碼。",
      //       isCustomer: false
      //     });
      //     break;
      //   default:
      //     this.messages.push({
      //       text: "我不明白您的問題",
      //       isCustomer: false
      //     });
      // }
    }
  },
  computed: {
    showFooter() {
      if (this.$route.name !== "itineraryMoon" && this.$route.name !== "itineraryVenus" && this.$route.name !== "itineraryMoon2" && this.$route.name !== "itineraryMars" && this.$route.name !== "itineraryMars2" && this.$route.name !== "itineraryVenus2" && this.$route.name !== "itineraryCombo") {
        return true
      } else {
        return false;
      }
    }
  },
  setup() {
    // 聊天機器人
    onMounted(() => {
      chatbot();
    });
    function chatbot() {
      const chatButton = document.getElementById('chatButton');
      // 點擊聊天機器人按鈕時顯示/隱藏聊天室
      chatButton.addEventListener('click', () => {
        chatRoom.style.display = chatRoom.style.display === 'block' ? 'none' : 'block';
      });
    };
  },
  created() {
    // 發起HTTP GET 請求
    axios.get(`${this.$store.state.phpPublicPath}chatbot.php`)
      .then(response => {
        this.btnMessages = response.data;
        console.log(this.btnMessages)
      })
      .catch(error => {
        console.error(error);
      });
    //登入狀態驗證
    fetch('https://tibamef2e.com/chd103/g3/php/verifyLogin.php', {
      mode: "cors",
      credentials: "include",
    })
      .then(response => response.json())
      .then(data => {
        if (data.msg === "已登入") {
          this.isLogin = true;
        }
      })
      .catch(error => {
        console.error(error);
      });

  }
};
