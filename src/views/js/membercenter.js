import ButtonStyle from '@/components/ButtonFlash.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { reactive } from 'vue';
import { Collapse } from 'vue-collapsed';
import axios from 'axios';

  export default {
    components: {
      ButtonStyle,  SectionTitle,
    },
  
    data() {
      return {
        phpData: [],
        // dataLoaded: false,
        titles: ['會員中心', 'MEMBER CENTER'],
        memberLevelIcon: '', 
        imgsData: {},
        activeId: 1,
        fixedIds: [1, 2, 3, 4, 5],
        optionCard: [
          {
            id: 1,
            name: '帳戶資料',
            img: require("@/assets/image/membercenter/account.svg"),
          },
          {
            id: 2,
            name: '查詢訂單',
            img: require("@/assets/image/membercenter/order.svg"),
          },
          {
            id: 3,
            name: '捐款明細',
            img: require("@/assets/image/membercenter/捐款.svg"),
          },
          {
            id: 4,
            name: '會員等級',
            img: require("@/assets/image/membercenter/copper.svg"),
          },
          {
            id: 5,
            name: '登出',
            img: require("@/assets/image/membercenter/log-out.svg"),
          },
        ],
        showContent: null,
       
        el: 'content',
        fromData: {
          image: '',
          name: '',
          nickname: '',
          birthday: '',
          selectedGender: '' ,
          email: '',
          address: '',
          passportNumber: '',
          showPhoneError: false,
          oldPw: '',
          newPw: '',
          confirmPw: '',
          nicknameFromPHP: '',
          nameFromPHP: '',
          sexFromPHP: '',
          birthdayFromPHP: '',
          phoneNumberFromPHP: '',
          emailFromPHP: '',
          addressFromPHP: '',
          passportNumberFromPHP: '',
          oldPwFromPHP: '',
        },
        genderOptions: [
            { value: '男', label: '男性' },
            { value: '女', label: '女性' }
          ],
        panelExpanded: false,
        isExpanded: false, 
        users:[],
        members: null,
        itineraryNoImage: null,
        orders: null,
        donates:[],
        activeIndex: 0, 
        showContent: 'content1',
        bookings: null,
        buttonColors: {
          content1: '#01C1FD',
          content2: '#F0F0F0',
          content3: '#F0F0F0',
        },
        benefits:[
          {
            memberLevel: '銅',
            amount: '$3,000',
            date: '2022-08-09',
            gift: '鑰匙圈',
            selected: false,
          },
          {
            memberLevel: '銀',
            amount: '$6,000',
            date: '2023-08-10',
            gift: '棒球帽(已兌換)',
            selected: false,
          },
          {
            id: 'b',
            memberLevel: '金',
            amount: '$20,000',
            gift: '帽T',
            selected: false,
          },
        ],
        explains:[
          {
            img: require("@/assets/image/membercenter/level1_1.svg"),
            memLevel: "銅",
            targetAmount : 'NT$3,000',
            freeGift : '鑰匙圈',
          },
          {
            img: require("@/assets/image/membercenter/level2.svg"),
            memLevel: "銀",
            targetAmount : 'NT$6,000',
            freeGift : '棒球帽',
          },
          {
            img: require("@/assets/image/membercenter/level3.svg"),
            memLevel:'金',
            targetAmount : 'NT$20,000',
            freeGift : '帽T',
          },
          {
            img: require("@/assets/image/membercenter/level4.svg"),
            memLevel: '鑽',
            targetAmount : 'NT$100,000',
            freeGift : '太空人頭盔',
          },
        ],
        infos:[
          {
            content: ' ‧會員金額累計時間以申辦日開始一年起算。',
          },
          {
            content: ' ‧贈品兌換需於一年內於會員頁面申請領取。',
          },
          {
            content: ' ‧本公司保留隨時變更使用規則之權利，最新使用規則請網站公告為準。',
          },
          {
            content: ' ‧其他相關規範：',
          },
          {
            link: ' 個人資料保護法',
          },
          {
            link: '隱私權政策',
          },
        ],
        isMobile: false,// 默認不是行動裝置
        isPopupVisible:false,
        receipts:[],
        currentTime: '' ,
        isChecked: true ,
        
      };
    },

    created(){
      //發起HTTP GET請求
      //  axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter.php') 
      //  .then(response => {
      //   this.phpData = response.data;
      //   // 調用方法以更新memberLevelIcon
      //   this.updateMemberLevelIcon();

      // })
      // .catch(error =>{
      //   console.error(error);
      // });

       axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter1.php')
       .then(response => {
        this.phpData = response.data;
        // nickname改成phpData看看
       })
       .catch(error => {
         console.error(error);
       });
      //  axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter2.php')
      //  .then(response => {
      //    this.journeyAll2 = response.data;
      //  })
      //  .catch(error => {
      //    console.error(error);
      //  });
      //  axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter3.php')
      //  .then(response => {
      //    this.journeyAll3 = response.data;
      //  })
      //  .catch(error => {
      //    console.error(error);
      //  });
      //  axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter4.php')
      //  .then(response => {
      //    this.journeyAll4 = response.data;
      //  })
      //  .catch(error => {
      //    console.error(error);
      //  });
      //  axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter5.php')
      //  .then(response => {
      //    this.journeyAll = response.data;
      //  })
      //  .catch(error => {
      //    console.error(error);
      //  });
      //  axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter2.php')
      // .then(response => {
      //   this.journeyAll = response.data;
      // })
      // .catch(error => {
      //   console.error(error);
      // });
      //抓取會員等級icon
      this.getIconPath();
      // this.fetchMemberData();

  
    },

 

    mounted() {
        //檢常窗口是否是行動裝置
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
        //抓取時間
        this.updateDateTime();

        
        //抓取php資料
        //  this.fetchData().then((data) => {
        //    this.phpData = data;
        //    this.dataLoaded = true;
        //  });
        // console.log('phpData:', this.phpData);

    },
    

    methods: {
       updateMemberLevelIcon() {
        //  if (this.phpData.result1 && this.phpData.result1.length > 0) {
        //    const memLevel = this.phpData.result1[0].mem_level;
        //    this.memberLevelIcon = this.getIconPath(memLevel);
        //  } else {
        //    console.error('No result1 data available.');
        //  }
       },

      //抓取會員等級icon
      getIconPath(memLevel) {
        switch (memLevel) {
            case '銅':
                return require('@/assets/image/membercenter/copper.svg');
            case '銀':
                return require('@/assets/image/membercenter/sliver.svg');
            case '金':
                return require('@/assets/image/membercenter/gold.svg');
            case '鑽':
                return require('@/assets/image/membercenter/diamond.svg');
        }
    },

     updateItineraryImage() {
      //  const planet_subtitle = this.phpData.result4[0].planet_subtitle;
      //  this.itineraryImage = this.getItineraryImagePath( planet_subtitle);
     },

    //抓取行程圖片
      getItineraryImagePath(planetSubtitle) {
          switch (planetSubtitle) {
              case '星際繞行':
                  return require('@/assets/image/membercenter/c12.jpg');
              case '月球巡禮':
                  return require('@/assets/image/membercenter/moon2_booking.jpg');
              case '太空之心':
                  return require('@/assets/image/membercenter/moon_heart_marsLife_booking.jpg');
              case '奧林帕斯山脈之旅':
                  return require('@/assets/image/membercenter/mars_mountain_booking.jpg');
              case '尋找生命之旅':
                  return require('@/assets/image/membercenter/marsLife_booking.jpg');
              case '人文遺跡之旅':
                  return require('@/assets/image/membercenter/venusLife_booking.jpg');
              case '金星夢幻秘境':
                  return require('@/assets/image/membercenter/venusDream_booking.jpg');
            }
        },

  
    //從資料庫抓取資料放到input裡
    async fetchMemberData() {
        try {
      // 從 PHP 獲取數據
          const response = await fetch('http://localhost/PV/PlanetVoyager/public/php/membercenter1.php');
          // const phpData = await response.json();

    //     // 設置昵稱值
    //      this.nicknameFromPHP = data.result1.length > 0 ? data.result1[0].mem_nickname : 'N/A';
    //      this.nameFromPHP =data.result1.length > 0 ? data.result1[0].mem_name : 'N/A';
    //      this.sexFromPHP = data.result1.length > 0 ? data.result1[0].mem_gender : 'N/A';
    //      this.birthdayFromPHP = data.result1.length > 0 ? data.result1[0].mem_birthday : 'N/A';
    //      this.phoneNumberFromPHP = data.result1.length > 0 ? data.result1[0].mem_phone : 'N/A';
    //      this.emailFromPHP = data.result1.length > 0 ? data.result1[0].mem_email : 'N/A';
    //      this.addressFromPHP = data.result1.length > 0 ? data.result1[0].mem_birthday : 'N/A';
    //      this.passportNumberFromPHP = data.result1.length > 0 ? data.result1[0].mem_passport : 'N/A';
    //      this.oldPwFromPHP =  data.result1.length > 0 ? data.result1[0].mem_pw : 'N/A';
    //      this.orders = data.result4;
    //      this.members = data.result5;
    //      this.bookings = data.result5;
    //     console.log(this.members);

       } catch (error) {
          console.error('獲取會員數據時發生錯誤：', error);
        }
      },
    
      //從資料庫抓取資料
      //  fetchData() {
      //     return fetch('http:localhost/PV/PlanetVoyager/public/php/membercenter.php')
      //       .then((response) => response.json())
      //       .catch((error) => {
      //         console.error('Fetch Error:', error);
      //       });
      //  },


      
      //登出
      handleOptionClick(option) {
      if (option.id === 5) {
        this.$router.push('/');
      } else {
        this.activeId = option.id;
      }
    },


      checkMobile() {
            // 根據窗口寬度判斷是否爲行動裝置
            this.isMobile = window.innerWidth <= 768;
      },

      getActiveOption(id) {
            if (this.fixedIds.includes(id)) {
              return this.optionCard.find(option => option.id === id);
            } else {
              return this.optionCard.find(option => option.id === this.activeId);
            }
      },

      toggleUserExpanded(order) {
        this.isExpanded = !this.isExpanded;
      },

      //改編輸入後input的底色
      updateButtonColors(content) {
            for (const key in this.buttonColors) {
              if (key === content) {
                this.buttonColors[key] = '#01C1FD';
              } else {
                this.buttonColors[key] = '#F0F0F0';
              }
            }
      },
      //獲取電腦時間
      updateDateTime(){
            const now = new Date();
            // 格式化日期爲字串（例如：YYYY-MM-DD）
            const year = now.getFullYear();
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const day = now.getDate().toString().padStart(2, '0');
            this.currentDate = `${year}-${month}-${day}`;
            
            // 格式化時間爲字串（例如：HH:MM:SS）
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            this.currentTime = `${hours}:${minutes}`;

            // 每隔一秒鐘更新一次日期和時間
            const _this = this; // Reference to the component
            setTimeout(function () {
              _this.updateDateTime();
            }, 1000);
      },

        // 計算給定id的總金額
      getTotalAmountForId(id) {
        let totalAmount = 0;
        for (const benefit of this.benefits) {
          if (benefit.memberLevel === id) {
            totalAmount += parseInt(benefit.amount.replace(/\$|,/g, ''), 10);
          }
        }
        return totalAmount;
      },

      // 阻止默认点击事件
      preventCheckboxChange() {
      event.preventDefault();
  },
  },

      //手風琴效果 點擊+號展開
      accordionEvent() {
        const acc = document.getElementsByClassName("client-accordion");
            for (let i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function () {this.classList.toggle("active");
                const panel = this.nextElementSibling;
                  if (panel.style.maxHeight) { 
                      panel.style.maxHeight = null;
                      this.$data.showPanelContent = false;
              } else {
                  panel.style.maxHeight = panel.scrollHeight + "px";
                  this.$data.showPanelContent = true;
              }
          });
        }
      },

      toggleAccordion(order) {
        order.isExpanded = !order.isExpanded;
    },

      handleSubmit() {
          console.log(this.fromData.name, this.fromData.nickname,this.fromData.email,this.fromData.address,
                    this.fromData.passportNumber, 'Submit button clicked');
      },

    // 判斷是否是行動裝置（小於等於 768px）
      checkMobile() {
            const screenWidth = window.innerWidth;
            this.isMobile = screenWidth <= 768;
      },

      beforeUnmount() {
            // 在元件銷燬前移除窗口大小監聽器
            window.removeEventListener('resize', this.checkMobile);
      },
 
    
};