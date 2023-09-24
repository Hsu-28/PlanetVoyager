export default {
    data() {
      return {
        titlelist: [
          {
            titleC: "星際繞行" ,
            titleE: "PLANETARY ORBIT",
            psrc: require("@/assets/image/ordertitle/Maskgroup.svg"),
            bgsrc: require("@/assets/image/ordertitle/PLANETARYORBITBg.svg"),
            path: "orderprocess",
          }, 
          {
            titleC: "月球" ,
            titleE: "MOON",
            psrc: require("@/assets/image/ordertitle/moon.svg"),
            bgsrc: require("@/assets/image/ordertitle/moonbg.svg"),
            path: "moon",
          },  {
            titleC: "火星" ,
            titleE: "MARS",
            psrc: require("@/assets/image/ordertitle/mars.svg"),
            bgsrc: require("@/assets/image/ordertitle/marsbg.svg"),
            path: "mars",
          }, {
            titleC: "金星" ,
            titleE: "VENUS",
            psrc: require("@/assets/image/ordertitle/venus.svg"),
            bgsrc: require("@/assets/image/ordertitle/venusbg.svg"),
            path: "orderprocess",
          }
        ],
      };
    },

  };