import scramble from '@/components/Scramble.vue'
export default {
    components: {
          scramble: scramble
      },
  data() {
  
    return {
      i: 0,
      displayText: '',
      showMenu: false, 
      // showFooter: true,
      headericon: true,
      titlelist: [
        {
          titleC: "關於我們" ,
          titleE: "ABOUT US",
          color: "$white",
          path:"aboutus",
        }, {
          titleC: "星際旅程" ,
          titleE: "DESTINATION",
          color: "$blueL",
          path:"destination",
        }, {
          titleC: "訂購旅程" ,
          titleE: "BOOKING",
          color: "$blueL",
          path:"order",
        }, {
          titleC: "行前訓練" ,
          titleE: "TRAINING",
          color: "$blueL",
          path:"training",
        }, {
          titleC: "科技創新" ,
          titleE: "THE VEHICLE",
          color: "$white",
          path:"technology"
        }, {
          titleC: "團隊介紹" ,
          titleE: "TOURIST GUIDE",
          color: "$white",
          path:"teamMembers"
        }, {
          titleC: "支持星際探索" ,
          titleE: "SUPPORT",
          color: "$white",
          path:"donate"
        },{
          titleC: "問與答" ,
          titleE: "FAQs",
          color: "$white",
          path:"faq"
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
      ]
    };
  },
  methods: {
      showMenuF() {
          this.showMenu = true;
          this.headericon = false;
          this.i  = Math.floor(Math.random() * this.tipAll.length);
      },
      closeMenuF() {
          this.showMenu = false;
          this.headericon = true;
      },
      login(){
        fetch('https://tibamef2e.com/cgd103/g1/api/getProducts.php?order=prod_name&limit=9&page=1')
        .then(res=>res.json())
        .then(json => console.log(json))
      },
  },
  computed: {
    showFooter(){
    if(this.$route.name !== "itineraryMoon"  && this.$route.name !== "itineraryVenus"  && this.$route.name !== "itineraryMoon2" && this.$route.name !== "itineraryMars" && this.$route.name !== "itineraryMars2" && this.$route.name !== "itineraryVenus2" && this.$route.name !== "itineraryCombo"){
      return true
    }else{
      return false;
    }
  }
  },
};
