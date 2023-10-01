export default {
    data() {
      return {
        titlelist: [
          {
            titleC: "星際繞行" ,
            titleE: "PLANETARY ORBIT",
            psrc: require("@/assets/image/ordertitle/MaskgroupNew.png"),
            bgsrc: require("@/assets/image/ordertitle/PLANETARYORBITBgNew.png"),
            path: "orbit",
          }, 
          {
            titleC: "月球" ,
            titleE: "MOON",
            psrc: require("@/assets/image/ordertitle/moonNew.png"),
            bgsrc: require("@/assets/image/ordertitle/moonbgNew.png"),
            path: "moon",
          },  {
            titleC: "火星" ,
            titleE: "MARS",
            psrc: require("@/assets/image/ordertitle/marsNew.png"),
            bgsrc: require("@/assets/image/ordertitle/marsbgNew.png"),
            path: "mars",
          }, {
            titleC: "金星" ,
            titleE: "VENUS",
            psrc: require("@/assets/image/ordertitle/venusNew.png"),
            bgsrc: require("@/assets/image/ordertitle/venusbgNew.png"),
            path: "venus",
          }
        ],
      };
    },

  };