export default {
<<<<<<< HEAD
  data() {
    return {
      showMenu: false,
      headericon: true,
      titlelist: [
        {
          titleC: "關於我們",
          titleE: "ABOUT US",
          color: "$white",
          path: "aboutus",
        }, {
          titleC: "星際旅程",
          titleE: "DESTINATION",
          color: "black",
          path: "aboutus",
        }, {
          titleC: "訂購旅程",
          titleE: "BOOKING",
          color: "$blueL",
          path: "order",
        }, {
          titleC: "行前訓練",
          titleE: "TRAINING",
          color: "$blueL",
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
=======
    data() {
      return {
        showMenu: false, 
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
>>>>>>> eb4a4e5fd66189e8653db4716f567d031c97a697
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