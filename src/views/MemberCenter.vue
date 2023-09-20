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
        <ul class="tab-title">
          <li v-for="(option, index) in optionCard" :key="option.id" class="option-tab" :class="{ 'active': activeId === option.id }">
          <button @click="activeId = option.id">
            <img :src="getActiveOption(option.id).img" alt="icon">
            {{ option.name }}
          </button>
          </li>
        </ul>
      </section>
        <div class="content">
          <div v-if="activeId === 1" class="information"
          style="display: flex; align-items: center; justify-content: center;">
            <form action=""  @submit.prevent="handleSubmit">
              <p class="account-first-title">帳戶資訊</p>
              <div class="name-nickname-container">
                <p id="name" ><span >姓名</span><br>
                  <input type="text" v-model="name" :style="{ 'background-color': name ? 'lightgreen' : '' }"></p>
                <p><span>暱稱</span><br>
                  <input type="text" v-model="nickname"></p>
              </div>
              <div class="sex-bir-container">
                <p><span >性別</span><br>
                    <select v-model="sex" id="sex">
                        <option value="1" >男性</option>
                        <option value="2" >女性</option>
                        <option value="other">其他</option>
                    </select></p>
                <p><span>生日</span><br>
                    <input type="date" v-model="birthday"></p>
              </div>
              <div class="phone-mail-container">
                <p id="mobile"><span>手機號碼</span><br>
                   <input type="text" maxlength="10" oninput="value=value.replace(/[^\d]/g,'')"
                          v-model="phoneNumber"></p>
                    <!-- <div v-if="showPhoneError" class="error-message">
                      請輸入正確的手機號碼格式（09xxxxxxxx）
                    </div> -->
                <p><span>E-MAIL</span><br>
                  <input type="email" v-model="email"></p>
                </div>
              <div class="address-passport-container">
                <p id="address"><span>收件/聯絡地址</span><br>
                  <input type="text" v-model="address"></p>
                <p><span>護照號碼</span><br>
                   <input type="text" maxlength="9" oninput="value=value.replace(/[^\d]/g,'')"
                          v-model="passportNumber"></p> 
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
                <button class="cybr-btn">確認修改<span aria-hidden class="cybr-btn__glitch">確認修改</span><span aria-hidden class="cybr-btn__tag">&emsp;&emsp;-PV-</span></button>
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
                <button class="cybr-btn">確認修改<span aria-hidden class="cybr-btn__glitch">確認修改</span><span aria-hidden class="cybr-btn__tag">&emsp;&emsp;-PV-</span></button>
              </div>
              </div>
              </form>



          </div>
          <div v-else-if="activeId === 2" class="check-order" >
            <p class="account-first-title">查詢訂單</p><br>
                <div class="odtitle">                
                  <p>訂單名稱</p>
                  <p class="p">乘客名單</p>
                  <p>金額</p>
                  <p>訂購日期</p>
                </div><br>
              <div v-for="(order, index) in orders" :key="index"  class="odname">
                  <div @click="toggleUserExpanded(order)" class="oddetail">
                    <div class="od-sec">
                      <img v-if="order.img" :src="order.img" width="120" height="120" alt="orderpic">
                        <div> 
                          <p>行程：{{ order.orderTitle }}</p><br>
                          <p>人數：{{ order.headcount }}</p><br>
                          <p class="dpdate">出團日期：<br>{{ order.departureDate }}</p>
                        </div> 
                      </div>
                    <button class="client-accordion" >
                      <div class="panel" v-show="order.isExpanded">
                        <p>編號</p>
                        <p>姓名</p>
                        <p>狀態</p>
                        <p>明細</p>
                      <div v-for="(user, userIndex) in order.users" :key="userIndex" class="journey">
                        <p>{{ user.id }}</p>
                        <p>{{ user.name }}</p>
                        <p>{{ user.status }}</p>
                        <p>{{ user.details }}</p>
                      </div>
                    </div>
                    </button>
                </div>
                <p class="order-amount" >{{ order.amount }}</p>
                <p class="order-date">{{ order.orderDate }}</p>
              </div> 
             
          </div>
          <div v-else-if="activeId === 3" class="donate">
            <div class="form">
              <div class="donate-top">
                <p class="account-first-title">捐款紀錄</p>
                <div class="last-year">
                  <a href="">去年度明細</a></div>
              </div>
              <div class="form-group">
                <div class="order-title">
                  <div class="order">
                    <p class="donate-title">收據編號</p>
                  </div>
                  <div class="total">
                      <p class="donate-title">金額</p>
                  </div>
                  <div class="date">
                      <p class="donate-title">捐款日期</p>
                  </div>
                  <div class="status">
                      <p class="donate-title">會員狀態</p>
                  </div> 
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
          <div v-else-if="activeId === 4">会员等级的内容</div>
      
      
  </div> 
  </div> 
</div> 
  </template>
  
  <script>
  import ButtonStyle from '../components/ButtonFlash.vue';
  import SectionTitle from '../components/SectionTitle.vue';
  
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
            img: require("@/assets/image/membercenter/memberlevel.svg"),
          },
        ],
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
            name: 'Harry Potter',
            status: '健康檢查審核已通過',
            details: '查看',
            },
            {
            id: 2,
            name: 'Ron Weasly',
            status: '健康檢查審核已通過',
            details: '查看',
            },
            {
            id: 3,
            name: 'Hermione Granger',
            status: '健康檢查審核已通過',
            details: '查看',
            },
            {
            id: 4,
            name: 'Ginny Weasley',
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
            name: 'Harry Potter',
            status: '行程已完成',
            details: '查看',
            },
            {
            id: 2,
            name: 'Severus Snape',
            status: '行程已完成',
            details: '查看',
            },
          ]  
         },
         { 
           img: require("@/assets/image/membercenter/lunar orbit_order_01.svg"), 
           orderTitle: '奧林帕斯山脈之旅',
           headcount: '3人',
           departureDate: '2021-10-20 19:00',
           amount: 'NT $700萬',
           orderDate: '2020-09-23 05:15',
           isExpanded: false, 
           users:[
            {
            id: 1,
            name: 'Harry Potter',
            status: '健康檢查審核已通過',
            details: '查看',
            },
            {
            id: 2,
            name: 'Lord Voldemort',
            status: '健康檢查審核未通過',
            details: '查看',
            },
            {
            id: 3,
            name: 'Sirius Black',
            status: '健康檢查審核已通過',
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
      ]
  
      };
    },
    methods: {
      // 根据 activeId 获取当前选中的选项
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
        o.isExpanded = !o.isExpanded; // 切换当前面板的展开状态
      } else {
        o.isExpanded = false; 
        }
      });
    },
    
      accordionEvent() {
        const acc = document.getElementsByClassName("client-accordion");
            for (let i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function () {
                  this.classList.toggle("active");
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
    }
  },
       handleSubmit() {
        //  var reg = /^09[0-9]{8}$/;  
        //  if (!reg.test(this.fromData.phoneNumber)) {
        //  this.showPhoneError = true;
        //  return;  
        //  }
       console.log(this.fromData.name, this.fromData.nickname,this.fromData.email,this.fromData.address,
                   this.fromData.passportNumber, 'Submit button clicked');
       },
    }

   
      

  



    
      
 
  


  </script>

  
  
  <style scoped lang="scss">
  @import "~@/assets/sass/page/_membercenter.scss";
  </style>

  