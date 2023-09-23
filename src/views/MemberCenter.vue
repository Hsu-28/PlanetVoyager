<template>
    <div id="membercenter">
      <div class="memtitle">
        <h2 v-for="title in titles">{{title}}</h2></div>
      <div class="container">
        <section class="top">
          <div class="info">
              <div class="upload">
                <img src="../assets/image/membercenter/頭像.jpg" alt="頭像">
                <!-- <input type="file" @change="fileSelected">
                    <img v-if="image" :src="image" width="200"/><br>
                <button @click="upload">上傳</button> -->
              </div>
              <div class="mem-box">
                <div class="greeting">
                  <img src="../assets/image/membercenter/level1.svg" alt="icon" class="icon">
                  <p>HI,<span class="nickname">玫瑰</span></p>
                  <!-- <p>HI,<span class="nickname">{{ nickname }}</span></p> -->
                </div>
              <div class="mem-number">
                <p>會員編號<span class="number">0001</span></p>
                <p>今年度捐款金額<br><span class="sum">$20,000</span></p>
              </div>
            </div>
          </div>
        <ul class="tab-mem-title">
          <li v-for="(option, index) in optionCard" :key="option.id" class="option-tab">
          <div class="top-tab" :class="{ 'active': option.id === activeId }">
            <button @click="activeId = option.id">
            <div class="pic" :class="{ 'active-pic': option.id === activeId }" >
              <img :src="option.img" alt="icon"></div>
            {{ option.name }}
            </button>
        </div>
          </li>
        </ul>
      </section>
        <div class="content">
          <div v-if="activeId === 1" class="information"
          style="display: flex; align-items: center; justify-content: center;">
            <form action=""  @submit.prevent="handleSubmit">
              <p class="account-first-title">帳戶資訊</p>

              <div class="name-nickname-container">
                <p id="name"><span >姓名</span><br>
                  <input type="text" required v-model="name"></p>
                <p><span>暱稱</span><br>
                  <input type="text" required v-model="nickname"></p>
              </div>
              <div class="sex-bir-container">
                <p><span >性別</span><br>
                    <select  required v-model="sex" id="sex" style="color:#F0F0F0;">
                        <option value="1" >男性</option>
                        <option value="2" >女性</option>
                        <option value="other">其他</option>
                    </select></p>
                <p><span>生日</span><br>
                    <input type="date"  required v-model="birthday"></p>
              </div>
              <div class="phone-mail-container">
                <p id="mobile"><span>手機號碼</span><br>
                   <input type="text" maxlength="10" oninput="value=value.replace(/[^\d]/g,'')"
                   required v-model="phoneNumber"></p>
                <p><span>E-MAIL</span><br>
                  <input type="email" required v-model="email" ></p>
                </div>
              <div class="address-passport-container">
                <p id="address"><span>收件/聯絡地址</span><br>
                  <input type="text" required v-model="address"></p>
                <p><span>護照號碼</span><br>
                   <input type="text" maxlength="9" oninput="value=value.replace(/[^\d]/g,'')"
                          v-model="passportNumber" ></p> 
              </div>
              <div class="top-box">
                <div class="social">
                  <div class="facebook">
                    <a href="" style="display: flex; align-items: center;">
                      <img src="../assets/image/membercenter/facebook.svg" alt="fb">
                    <p class="fb">FACEBOOK(已綁定) </p></a>
                  </div>
                  <div class="google">
                   <a href="" style="display: flex; align-items: center;">
                      <img src="../assets/image/membercenter/google.svg" alt="google">
                    <p class="google_text">GOOGLE(未綁定) </p></a>
                  </div>
                  <div class="line">
                    <a href="" style="display: flex; align-items: center;">
                      <img src="../assets/image/membercenter/line.svg" alt="line">
                    <p class="line_text">LINE(未綁定) </p></a>
                  </div>
                </div>
                <div class="top-button">
                  <ButtonStyle buttonText="確認修改" buttonBottomText="-PV-"></ButtonStyle>
              </div>
              </div>
              <hr class="account-hr" >
              <div class="password-bottom-container">
                <p class="account-sec-title">修改密碼</p>
                <p><span>舊密碼</span><br>
                  <input type="password" v-model="oldPw"></p>
                <p><span>新密碼</span><br>
                  <input type="password" v-model="newPw"></p>
                <p><span>確認新密碼</span><br>
                  <input type="password" v-model="confirmPw"></p>
              <div class="bottom-button">
                <ButtonStyle buttonText="確認修改" buttonBottomText="-PV-"></ButtonStyle>
              </div>
              </div>
              </form>



          </div>

          <div v-else-if="activeId === 2" class="check-order" >
            <p class="account-first-title">查詢訂單</p><br>
                <div class="odtitle">                
                  <p class="odtitle-name">訂單名稱</p>
                  <p>乘客名單</p>
                  <p>金額</p>
                  <p>訂購日期</p>
                </div>
                <hr class="odtitle-hr">

                <div class="odnames-container">
                <div v-for="(order, index) in orders" :key="index" class="odname">
                <div class="oddetail">
                    <div class="od-sec" >
                      <img v-if="order.img" :src="order.img"  alt="orderpic">
                      <div class="trip-content">
                        <p>行程：{{ order.orderTitle }}</p>
                        <p>人數：{{ order.headcount }}</p>
                        <p class="dpdate">出團日期：<br>{{ order.departureDate }}</p>
                      </div> 
                  </div>
                  <button class="client-accordion" @click="toggleUserExpanded(order)" >
                    <span> {{ order.isExpanded ? '-' : '+' }}</span>
                  </button>
                    <p class="order-amount" >{{ order.amount }}</p>
                    <p class="order-date">{{ order.orderDate }}</p>
                </div>
          
                <Collapse :when="order.isExpanded" :onExpanded="scrollIntoView" class="collapse">
                  <div class="panel">
                    <div class="p-title">
                      <p>編號</p>
                      <p>姓名</p>
                      <p>狀態</p>
                      <p>明細</p>
                    </div>
                    <div v-for="(user, userIndex) in order.users" :key="userIndex" class="journey">
                      <div class="journey-content">
                        <p>{{ user.id }}</p>
                        <p >{{ user.name }}</p>
                        <p >{{ user.status }}</p>
                        <div class="journey-detail">
                        <a href=""><p>{{ user.details }}</p></a></div>
                      </div>
                        <hr class="journey-hr">
                    </div>
                  </div>
                  </Collapse >
              </div>
            </div>
             
          </div>

          <div v-else-if="activeId === 3" class="donate">
            <div class="form">
              <div class="donate-top">
                <p class="account-first-title">捐款紀錄</p>
                <a href="" class="last-year">去年度明細</a>
              </div>
              <div class="form-group">
                <div class="order-title">
                    <p class="donate-title">收據編號</p>
                    <p class="donate-title">金額</p>
                    <p class="donate-title">捐款日期</p>
                    <p class="donate-title">會員狀態</p>
              </div>
              <hr class="order-hr">
            </div>
            <div class="form-group">
              <div v-for="(donate, index) in donates" :key="index" class="donateInfo">
                <div class="donate-order">
                  <div class="donate-cell">  
                    <p>{{ donate.receiptNumber }}</p></div>
                  <div class="donate-cell"> 
                    <p>{{ donate.summary }}</p></div>
                  <div class="donate-cell"> 
                    <p>{{ donate.donateDate }}</p></div>
                  <div class="donate-cell"> 
                    <p>{{ donate.memberStatus }}</p></div>
              </div>
              <hr class="donate-order-hr">
              </div>
            </div>      
          </div>
          </div>

          <div v-else-if="activeId === 4" class="mem-benefit">
            <div class="tab-level">
              <div class="button-list">
                <div class="button-fir">
                  <button @click="showContent = 'content1'; updateButtonColors('content1')" class="button-level"  >會員等級</button>
                  <div class="rectangle" :style="{ backgroundColor: buttonColors.content1 }"></div>
                </div>
                <div class="button-sec">
                  <button @click="showContent = 'content2'; updateButtonColors('content2')" class="button-explain">會員說明</button>
                  <div class="rectangle"  :style="{ backgroundColor: buttonColors.content2 }"></div>
                </div>
                <div class="button-third">
                  <button @click="showContent = 'content3'; updateButtonColors('content3')" class="button-benefits">會員權益</button>
                  <div class="rectangle" :style="{ backgroundColor: buttonColors.content3 }"></div>
                </div>
            </div>

              <div v-if="showContent === 'content1'">
                <div class="progress-bar">
                  <p>離下個等級只剩：<span>$10,000</span></p>
                  <div class="line-box">
                    <div class="line1">
                      <div class="circle">
                        <p>$60,000</p></div>
                    </div>
                    
                  </div>
                </div>
                <div class="mem-benefits-form">
                  <p class="mem-benfit-title">會員等級</p>
                  <p class="mem-benfit-title">累計金額</p>
                  <p class="mem-benfit-title">達成日期</p>
                  <p class="mem-benfit-title">贈品兌換</p>
                </div>
                <hr class="benefit-hr">
                <div class="form-group">
                  <div v-for="(benefit, index) in benefits" :key="index">
                    <div class="benefit-order">
                      <div class="benefit-cell">  
                        <p>{{ benefit.memberLevel }}</p></div>
                      <div class="benefit-cell"> 
                        <p>{{ benefit.amount }}</p></div>
                      <div class="benefit-cell"> 
                        <p>{{ benefit.date }}</p></div>
                      <div class="benefit-cell"> 
                        <div class="input-box">
                          <input type="checkbox" id="gift"  name="gift" v-if="benefit.gift !== '帽子(已兌換)'">
                          <p>{{ benefit.gift }}</p></div>
                        </div>
                    </div>
                  <hr class="benefit-order-hr">
                </div>
                  <a href=""><p class="gift-redemption">贈品兌換</p></a>
              </div>
            </div>
              <div v-if="showContent === 'content2'">
                <div class="mem-benefits-form">
                  <div class="explain-level">
                    <p>會員等級</p>
                    <div class="underline"></div>
                  </div>
                  <div class="explain-level">
                    <p>累計金額</p>
                    <div class="underline"></div>
                  </div>
                  <div class="explain-level">
                    <p>贈品</p>
                    <div class="underline"></div>
                  </div>
              </div>

                  <div class="form-group">
                    <div v-for="(explain, index) in explains" :key="index">
                      <div class="explain-order">
                    <div class="explain-cell" >  
                          <div class="explain-img">
                          <img :src="explain.img" alt="memberlevel"  width="30" ></div>
                          <p>{{ explain.memLevel }}</p></div> 
                        <div class="explaincell">  
                          <p>{{ explain.targetAmount }}</p></div>
                        <div class="explain-cell">  
                          <p>{{ explain.freeGift }}</p></div> 
                      </div>
                    </div>
                  </div>
              </div>

              <div v-if="showContent === 'content3'">
                <div class="mem-benefits-info">
                  <div v-for="(info, index) in infos" :key="index" class="info-content">
                    <p>{{ info.content }}</p> 
                    <a href=""><span>{{ info.link }}</span></a>
                  </div>
                </div>
              </div>


            </div>
          </div>
          
      
  </div> 
  </div> 
</div> 
  </template>

   <style scoped lang="scss">
   @import "~@/assets/sass/page/_rwd.scss";
   @import "~@/assets/sass/page/_membercenter.scss";
   </style>
 
 
  <script>
  import ButtonStyle from '../components/ButtonFlash.vue';
  import SectionTitle from '../components/SectionTitle.vue';
  import { reactive } from 'vue';
  import { Collapse } from 'vue-collapsed';

  export default {
    components: {
      ButtonStyle,  SectionTitle,
    },
  
    data() {
      return {
        titles: ['會員中心', 'MEMBER CENTER'],
        activeId: 1,
        fixedIds: [1, 2, 3, 4],
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
            img: require("@/assets/image/membercenter/level1.svg"),
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
        },
        panelExpanded: false,
        orders: [
          { 
            img: require("@/assets/image/membercenter/moon_order_01.svg"), 
            orderTitle: '太空之心',
            headcount: '4人',
            departureDate:'2024-05-10 15:00',
            amount: 'NT $700萬',
            orderDate: '2023-08-09 14:30',
            isExpanded: false, 
            users:[
              {
              id: 1,
              name: 'Harry',
              status: '健康檢查審核已通過',
              details: '查看',
              },
              {
              id: 2,
              name: 'Ron',
              status: '健康檢查審核已通過',
              details: '查看',
              },
              {
              id: 3,
              name: 'Hermione',
              status: '健康檢查審核已通過',
              details: '查看',
              },
              {
              id: 4,
              name: 'Ginny',
              status: '健康檢查審核未通過',
              details: '查看',
              },
            ]
          },
          { 
            img: require("@/assets/image/membercenter/mars_order_01.svg"), 
            orderTitle: '行星繞行',
            headcount: '2人',
            departureDate: '2023-5-20 19:00',
            amount:'NT $600萬',
            orderDate: '2022-08-20 19:10',
            isExpanded: false,
            users:[
              {
              id: 1,
              name: 'Harry',
              status: '行程已完成',
              details: '查看',
              },
              {
              id: 2,
              name: 'Severus',
              status: '行程已完成',
              details: '查看',
              },
            ]  
          },
          { 
            img: require("@/assets/image/membercenter/mars_check.svg"), 
            orderTitle: '尋找生命之旅',
            headcount: '3人',
            departureDate: '2021-10-20 19:00',
            amount: 'NT $700萬',
            orderDate: '2020-09-23 05:15',
            isExpanded: false, 
            users:[
              {
              id: 1,
              name: 'Harry ',
              status: '取消',
              details: '查看',
              },
              {
              id: 2,
              name: 'Lord',
              status: '取消',
              details: '查看',
              },
              {
              id: 3,
              name: 'Sirius',
              status: '取消',
              details: '查看',
              },
            ]
          },
        ],
        donates:[
          {
            receiptNumber: '#1234-5678',
            summary: '$600',
            donateDate:'2023-08-09 14:30',
            memberStatus: '銅',
          },
          {
            receiptNumber: '#1234-5678',
            summary: '$600',
            donateDate:'2023-08-09 14:30',
            memberStatus: '銅',
          },
          {
            receiptNumber: '#1234-5678',
            summary: '$600',
            donateDate:'2023-08-09 14:30',
            memberStatus: '銅',
          },
          {
            receiptNumber: '#1234-5678',
            summary: '$600',
            donateDate:'2023-08-09 14:30',
            memberStatus: '銅',
          },
        ],
        activeIndex: 0, 
        showContent: 'content1',
        buttonColors: {
          content1: '#01C1FD',
          content2: '#F0F0F0',
          content3: '#F0F0F0',
        },
        benefits:[
          {
            memberLevel: '銅',
            amount: '$20,000',
            date: '2023-08-09',
            gift: '鑰匙圈',
          },
          {
            memberLevel: '銀',
            amount: '$30,000',
            date: '2023-08-09',
            gift: '帽子(已兌換)',
          },
          {
            memberLevel: '金',
            amount: '$50,000',
            gift: 'T恤',
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
      };
    },
    methods: {
      getActiveOption(id) {
      if (this.fixedIds.includes(id)) {
        return this.optionCard.find(option => option.id === id);
      } else {
        return this.optionCard.find(option => option.id === this.activeId);
      }
      },
      toggleUserExpanded(order) {
        this.orders.forEach((o) => {
          if (o === order) {
            o.isExpanded = !o.isExpanded; 
      } else {
        o.isExpanded = false; 
        }
      });
    },
      updateButtonColors(content) {
        for (const key in this.buttonColors) {
          if (key === content) {
            this.buttonColors[key] = '#01C1FD';
          } else {
            this.buttonColors[key] = '#F0F0F0';
          }
        }
      },
  },
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
      // 點擊按鈕時切換訂單的isExpanded屬性
      order.isExpanded = !order.isExpanded;
    },
    handleSubmit() {
      console.log(this.fromData.name, this.fromData.nickname,this.fromData.email,this.fromData.address,
                   this.fromData.passportNumber, 'Submit button clicked');
    },
  }


    const questions = reactive([
  {
    title: 'Question one',
    answer: 'Answer one',
    isExpanded: false // Initial value
  },
  {
    title: 'Question two',
    answer: 'Answer two',
    isExpanded: false
  },
  {
    title: 'Question three',
    answer: 'Answer three',
    isExpanded: false
  }
])

function handleAccordion(selectedIndex) {
  questions.forEach((_, index) => {
    questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
  })
}







  </script>

  
  
 
  