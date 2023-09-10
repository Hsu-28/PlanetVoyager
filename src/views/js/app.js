export default {
    data() {
      return {
        showMenu: false, 
        headericon: true,
        titlelist: [
          {
            titleC: "關於我們" ,
            titleE: "ABOUT US",
            color: "$white"
          }, {
            titleC: "星際旅程" ,
            titleE: "DESTINATION",
            color: "$turquoise"
          }, {
            titleC: "訂購旅程" ,
            titleE: "BOOKING",
            color: "$turquoise"
          }, {
            titleC: "行前訓練" ,
            titleE: "TRAINING",
            color: "$turquoise"
          }, {
            titleC: "科技創新" ,
            titleE: "THE VEHICLE",
            color: "$white"
          }, {
            titleC: "團隊介紹" ,
            titleE: "TOURIST GUIDE",
            color: "$white"
          }, {
            titleC: "支持星際探索" ,
            titleE: "SUPPORT",
            color: "$white"
          },{
            titleC: "問與答" ,
            titleE: "FAQS",
            color: "$white"
          }       
        ],
      };
    },
    methods: {
        showMenuF() {
            this.showMenu = true;
            this.headericon = false;
        },
        closeMenuF() {
            this.showMenu = false;
            this.headericon = true;
        }
    },
    computed: {
      choosecreator() {
        // 使用 Array.filter() 過濾 memid 為 1 的資料
        return this.songlists.filter((item, index, array) => {
          if (this.currentType === 0) return true;
          if (this.currentType === 1) return item.memid == 1;
          return item.memid !== 1;
        });
      },
    },
  };