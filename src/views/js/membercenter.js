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
          mem_name: "",
          mem_nickname: "",
          mem_birthday: "",
          mem_gender: "",
          // selectedGender: '' ,
          mem_phone: "",
          email: "",
          address: " ",
          mem_passport: " ",
          mem_pw: " ",
          passportNumber: '',
          showPhoneError: false,
          newPassword: '',
          confirmPassword: '',
        },
        genderOptions: [
            { value: '男', label: '男性' },
            { value: '女', label: '女性' }
          ],
        panelExpanded: false,
        isExpanded: false, 
        users:[],
        members: [],
        itineraryNoImage: null,
        donates:[],
        activeIndex: 0, 
        showContent: 'content1',
        bookings: [],
        buttonColors: {
          content1: '#01C1FD',
          content2: '#F0F0F0',
          content3: '#F0F0F0',
        },
        receipts:[],
        benefits:[
          {
            memberLevel: '銅',
            amount: '$3,000',
            date: '2023-10-15 18:13:51',
            gift: '鑰匙圈',
            selected: false,
            selectedGift: '', 
          },
          {
            memberLevel: '銀',
            amount: '$6,000',
            date: '2023-10-15 21:38:20',
            gift: '棒球帽(已兌換)',
            selected: false,
            selectedGift: '', 
          },
          {
            // id: 'b',
            memberLevel: '金',
            amount: '$20,000',
            date: '2023-10-16 00:00:00',
            gift: '帽T',
            selected: false,
            selectedGift: '', 
          },
          {
            id: 'b',
            memberLevel: '鑽',
            amount: '$100,000',
            date: '',
            gift: '太空人頭盔',
            selected: false,
            selectedGift: '', 
          },
        ],
        selectedGift: [],
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
        isMobile: false,
        isPopupVisible:false,
        currentTime: '' ,
        isChecked: true ,
        validPassword: true,//密碼小於8個
        consistent: true,//確認密碼
        memId: '' ,
        pwdFlag:true,//控制眼睛開閉
        textIcon: require("@/assets/image/membercenter/open.png"),//打開眼睛
        pwdIcon: require("@/assets/image/membercenter/close.png"),//關閉眼睛
      };
    },
    computed: {
      memid() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.mem_no) {
          // 重定向到登錄或進行適當處理
          return null;
        }
        return user.mem_no;
      }
    
    },
    created(){
      //引入api
      // axios.get( 'http://localhost/PV/PlanetVoyager/public/php/membercenter1.php')
      axios.get(`${this.$store.state.phpPublicPath}membercenter1.php`,{
        params:{
          id:this.memid
        }
      })
      .then(response => {
        this.phpData= response.data;
      })
      .catch(error => {
        console.error(error);
      });

      // axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter2.php')
      axios.get(`${this.$store.state.phpPublicPath}membercenter2.php`, {
        params:{
          id:this.memid
        }
      })
       .then(response => {
        this.phpData2 = response.data; 
        const trip_date = this.phpData2[0].trip_date;
        console.log('trip_date from membercenter2.php:', trip_date);
      })
       .catch(error => {
        console.error(error);
      });

      // axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter3.php')
      axios.get(`${this.$store.state.phpPublicPath}membercenter3.php`,{
        params:{
          id:this.memid
        }
      })
      .then(response => {
        this.phpData3 = response.data;
        this.bookings = response.data;
        const ord_people = this.phpData3[0].ord_people;
        // const OrdPeople = this.bookings.map(booking => booking.ord_people);
        const orders_date = this.phpData3[0].orders_date;
        const total_amount = this.phpData3[0].total_amount;
        console.log('ord_people from membercenter3.php:', ord_people);
        console.log('orders_datee from membercenter3.php:', orders_date);
        console.log('total_amount from membercenter3.php:', total_amount);
      })
      .catch(error => {
        console.error(error);
      });

      // axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter4.php')
      axios.get(`${this.$store.state.phpPublicPath}membercenter4.php`,{
        params:{
          id:this.memid
        }
        
      })
      .then(response => {
        this.phpData4 = response.data; 

        const planetSubtitle = this.phpData4[0].planet_subtitle;
        // this.itineraryImagePath = this.getItineraryImagePath(planetSubtitle);
        console.log('Planet Subtitle from membercenter4.php:', planetSubtitle);
      })
      .catch(error => {
        console.error(error);
      });

      //axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter5.php')
      axios.get(`${this.$store.state.phpPublicPath}membercenter5.php`,{
        params:{
          id:this.memid
        }
      })
       .then(response => {
        this.members = response.data;
        this.bookings = response.data;
        this.phpData5 = response.data;
        const passenger_no = this.phpData5[0].passenger_no;
        const passenger_name = this.phpData5[0].passenger_name;
        const passenger_status = this.phpData5[0].passenger_status;
        console.log('passenger_no from membercenter5.php:', passenger_no);
        console.log('passenger_name from membercenter5.php:', passenger_name);
        console.log('passenger_status from membercenter5.php:', passenger_status);
      })
      .catch(error => {
        console.error(error);
      });

      //axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter6.php')
      axios.get(`${this.$store.state.phpPublicPath}membercenter6.php`,{
        params:{
          id:this.memid
        }
      })
      .then(response => {
        this.phpData7 = []; // 清空 phpData7
        // this.donates = this.phpData6;
        this.phpData6 = response.data;
        
        const donate_no = this.phpData6[0].donate_no;
        const donate_amount = this.phpData6[0].donate_amount ;
        const donate_date  = this.phpData6[0].donate_date ;
        const donate_stat  = this.phpData6[0].donate_stat ;
        console.log('donate_no from membercenter6.php:', donate_no);
        console.log('donate_amount from membercenter6.php:', donate_amount);
        console.log('donate_date from membercenter6.php:', donate_date);
        console.log('donate_stat from membercenter6.php:', donate_stat);
      })
      .catch(error => {
         console.error(error);
      });

      // axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter7.php')
      axios.get(`${this.$store.state.phpPublicPath}membercenter7.php`,{
        params:{
          id:this.memid
        }
      })
      .then(response => {
        this.receipts = this.phpData7;
        this.phpData7 = response.data;

         const donate_no = this.phpData7[0].donate_no;
         const donate_amount = this.phpData7[0].donate_amount ;
         const donate_date  = this.phpData7[0].donate_date ;
         const donate_stat  = this.phpData7[0].donate_stat ;
        console.log('從membercenter7.php獲取的收據數據：', this.receipts);
        console.log('donate_no from membercenter7.php:', donate_no);
        console.log('donate_amount from membercenter7.php:', donate_amount);
        console.log('donate_date from membercenter7.php:', donate_date);
        console.log('donate_stat from membercenter7.php:', donate_stat);
      })
      .catch(error => {
         console.error(error);
      });

      //抓取會員等級icon
      this.getIconPath();
      //抓取行程圖片
      this.getItineraryImagePath();
    },

    mounted() {
        //檢常窗口是否是行動裝置
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
        //抓取時間
        this.updateDateTime();
        //抓取id
        this.memId = sessionStorage.getItem('memId'); 
        this.allow = sessionStorage.getItem('forget'); 
    },
    
    methods: {
     
      //上方按鈕點擊切換頁面
      getActiveOption(id) {
          if (this.fixedIds.includes(id)) {
            return this.optionCard.find(option => option.id === id);
          } else {
            return this.optionCard.find(option => option.id === this.activeId);
          }
      },

      //改變眼睛開關
      changePwd:function(){
           this.pwdFlag=!this.pwdFlag;
      },

      //檢查密碼
      validatePwd() {
       const accountRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,12}$/i;  //英數字混合帳號8~12位
       if (!accountRegex.test(this.newPassword)) {
          this.validPassword = false;
          this.account ="";
          return;
          }
          this.validPassword = true;
      },
      updatePassword() {
       if (this.confirmPassword !== '' && this.newPassword === this.confirmPassword) {
          // 密碼一致，執行修改密碼的程式碼
          this.consistent = true;
          console.log('執行修改密碼的程式碼');
          } else {
          //密碼不一致，顯示錯誤提示
          this.consistent = false;
          }
      },
      handleKeyUp(){
          this.validatePwd();
          this.updatePassword();
      },
      //將新密碼傳到資料庫
       updatePwd() {
          // const url = 'http://localhost/PV/PlanetVoyager/public/php/updatePassword.php';
          const url = `${this.$store.state.phpPublicPath}updatePassword.php`;
          const formData = new FormData();
          formData.append("mem_pw", this.newPassword);
          formData.append("mem_no", this.phpData[0].mem_no);

          console.log("New Password:", this.newPassword);
          console.log("Member Number:", this.phpData[0].mem_no);

          
          fetch(url, {
            method: "POST",
            body: formData,

          })
          .then((response) => {
            if ( response.ok ) {
              console.log(response);
              alert('編輯成功');
            } else {
              throw new Error("編輯失敗"); 
            }

          })
          .catch((error) => {
            console.log(error.message);
          });

     },
    
         //修改會員資料  
         saveBtn() {
          //const url = 'http://localhost/PV/PlanetVoyager/public/php/editMemberProfile.php';
          const url = `${this.$store.state.phpPublicPath}editMemberProfile.php`;
          const formData = new FormData();
          formData.append("mem_no", this.phpData[0].mem_no);
          formData.append("mem_name", this.phpData[0].mem_name);
          formData.append("mem_nickname", this.phpData[0].mem_nickname);
          formData.append("mem_gender", this.phpData[0].mem_gender);
          formData.append("mem_birthday", this.phpData[0].mem_birthday);
          formData.append("mem_phone", this.phpData[0].mem_phone);
          formData.append("email", this.phpData[0].email);
          formData.append("address", this.phpData[0].address);
          formData.append("mem_passport", this.phpData[0].mem_passport);
          
        
          fetch(url, {
            method: "POST",
            body: formData,
            // mode: 'cors',
          })

            .then((response) => {
              if ( response.ok ) {
                console.log(response);
                alert('編輯成功');
              } else {
                throw new Error("編輯失敗"); 
              }

            })
            .catch((error) => {
              console.log(error.message);
            });
      },

       

      //抓取會員等級icon
      async loadData() {
        try {
          //const response = await axios.get('http://localhost/PV/PlanetVoyager/public/php/membercenter1.php');
          const response = await axios.get(`${this.$store.state.phpPublicPath}membercenter1.php`);
          this.phpData = response.data;
        } catch (error) {
          console.error(error);
        }

        // 遍歷 donate 數據，計算每個等級的總金額
      // const levelSums = {};
      // this.phpData.forEach(donation => {
      //   const level = this.levels.find(l => l.amount === donation.donate_amount);
      //   if (level) {
      //     levelSums[level.name] = (levelSums[level.name] || 0) + donation.donate_amount;
      //   }
      // });
  
        // 更新 benefits 數據中的 amount 和 selectedGift
      // this.benefits.forEach(benefit => {
      //   // const totalAmount = levelSums[benefit.memberLevel] || 0;
      //   // benefit.amount = `$${totalAmount.toLocaleString()}`;
      // });

      },

      getIconPath() {
        if (this.phpData && this.phpData[0] && this.phpData[0].mem_level) {
          const memLevel = this.phpData[0].mem_level;
          return this.getIconPathByLevel(memLevel);
        }

      },

      getIconPathByLevel(memLevel) {
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
      //抓取行程圖片
      getItineraryImagePath(planetSubtitle) {
          switch (planetSubtitle) {
              case '星際繞行':
                  return require('@/assets/image/membercenter/c12.jpg');
              case '月 球 巡 禮':
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

        // 在 methods 中添加一個方法，用於處理彈窗顯示及數據的設定
        // showBookingDetails(user) {
        //   // 根據 user.passenger_no 過濾 bookings 數據
        //   const bookingDetails = this.bookings.find(booking => booking.passenger_no === user.passenger_no);
      
        //   // 如果找到相應的預訂信息，則設定到數據中
        //   if (bookingDetails) {
        //     this.selectedBooking = bookingDetails;
        //     this.isPopupVisible = true;
        //   }
        // },

        showBookingDetails(user, userIndex) {
          this.selectedUser = user;
          this.selectedUserIndex = userIndex;
          console.log("selectedUserIndex:", this.selectedUserIndex); 
          this.isPopupVisible = true;
      },

  
       // 登出
       async handleOptionClick(optionId) {
        //const response = await axios.get('http://localhost/PV/PlanetVoyager/public/php/logout.php');
        // const response = await axios.get(`${this.$store.state.phpPublicPath}logout.php`);
        if (optionId === 5) {
          this.$router.push('/');
        } else {
          this.activeId = optionId;
        }
      },


     //計算與下一個level還有多少差額
      calculateNextLevelAmount(currentLevel) {
        switch (currentLevel) {
          case '銅':
            return '$' + (this.phpData[0].donate_sum0 -300 );
          case '銀':
            return '$' + ( this.phpData[0].donate_sum- 6000);
          case '金':
            return '$' + ( this.phpData[0].donate_sum- 20000);
          case '鑽':
            return '$' + ( this.phpData[0].donate_sum- 100000);
          default:
            return '未知等級';
        }
      },

        // 检查选项ID是否冲突
  // checkOptionIdConflict() {
  //   const idSet = new Set();
  //   let conflict = false;
    
  //   for (const option of this.optionCard) {
  //     if (idSet.has(option.id)) {
  //       conflict = true;
  //       console.error(`Option ID ${option.id} is duplicated!`);
  //     } else {
  //       idSet.add(option.id);
  //     }
  //   }
    
  //   if (idSet.has(this.activeId)) {
  //     conflict = true;
  //     console.error(`Active ID ${this.activeId} conflicts with an option ID!`);
  //   }
    
  //   if (conflict) {
  //     console.error('Option IDs must be unique, and Active ID must not conflict with an option ID.');
  //   }
  // }

      //計算下一個level應該要達到的金額
      calculateNextLevelDifference() {
        // 取得當前累積金額
        const currentSum = this.phpData[0].donate_sum;
    
        // 定義各個等級及對應的金額
        const levels = [
          { name: '銅', amount: 3000 },
          { name: '銀', amount: 6000 },
          { name: '金', amount: 20000 },
          { name: '鑽', amount: 100000 }
        ];
    
        const currentLevelIndex = levels.findIndex(level => level.name === this.phpData[0].mem_level);
        const nextLevel = levels[currentLevelIndex + 1];
      
        return nextLevel
          ? `$${nextLevel.amount }`
          : '已達最高等級';
      },

       // 點擊 input 時更新 selectedGift
       handleGiftSelection(benefit) {
        this.selectedGift.push(benefit.gift);
      },

      
      // 根據窗口寬度判斷是否爲行動裝置
      checkMobile() {  
        this.isMobile = window.innerWidth <= 768;
      },

      //點擊+,、展開
      toggleExpanded() {
        this.isExpanded = !this.isExpanded;
        console.log('isExpanded:', this.isExpanded);
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

      //手風琴效果 點擊+號展開
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
},
}