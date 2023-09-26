<template>
    <div id="membercenter">
      <div class="memtitle">
        <h2 v-for="title in titles">{{title}}</h2></div>
      <div class="container">
        <section class="top">
          <div class="info">
              <div class="upload">
                <!-- <img src="~@/assets/image/membercenter/avatar.png" alt="頭像"> -->
                <!-- <label for="title"  class="upload-title">上傳圖片</label> -->
                  <div class="UploadImg">
                      <div class="img" v-for="i in 1" :key="i">
                        <label class="custom-file-upload">
                          <p  @mousedown="triggerFileInput(i)">＋</p>
                          <input type="file" accept="image/*" ref="fileInput" style="display: none" @change="handleFileUpload(i, $event)">
                          <img v-if="imgsData[i]" :src="uploadedImages[i]" alt="">
                        </label>
                    </div>
                </div>
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
          <div v-if="activeId === 1" class="information">
            <form action=""  @submit.prevent="handleSubmit">
              <p class="account-first-title">帳戶資訊</p>
              <div class="top-input">
                <div class="all-input">
                  <div class="control-container">
                    <p id="name"><span >姓名</span><br>
                      <input type="text" required v-model="name"></p>
                    <p><span>暱稱</span><br>
                      <input type="text" required v-model="nickname"></p>
                  </div>
                  <div class="control-container">
                      <p><span >性別</span><br>
                          <select  required v-model="sex" id="sex" style="color:#F0F0F0;">
                              <option value="1" >男性</option>
                              <option value="2" >女性</option>
                              <option value="other">其他</option>
                          </select></p>
                      <p><span>生日</span><br>
                          <input type="date"  id="bir" required v-model="birthday"></p>
                  </div>
                  <div class="control-container">
                    <p id="mobile"><span>手機號碼</span><br>
                      <input type="text" maxlength="10" oninput="value=value.replace(/[^\d]/g,'')"
                      required v-model="phoneNumber"></p>
                    <p><span>E-MAIL</span><br>
                      <input type="email" required v-model="email" ></p>
                    </div>
                  <div class="control-container">
                    <p id="address"><span>收件/聯絡地址</span><br>
                      <input type="text" required v-model="address"></p>
                    <p><span>護照號碼</span><br>
                      <input type="text" maxlength="9" oninput="value=value.replace(/[^\d]/g,'')"
                              v-model="passportNumber" ></p> 
                  </div>
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
                        <p>出團日期：<br>{{ order.departureDate }}</p>
                        <p class="rwdAmount" v-if="isMobile">金額：{{ order.amount }}</p>
                        <p class="rwdDate" v-if="isMobile">訂購日期：<br>{{ order.orderDate }}</p>
                      </div> 
                  </div>
                  <button v-if="!isMobile" class="client-accordion" @click="toggleUserExpanded(order)" >
                    <span> {{ order.isExpanded ? '-' : '+' }}</span>
                  </button>
                  <div class="rwdPassanger" v-if="isMobile">
                   
                      <button  class="client-accordion" @click="toggleUserExpanded(order)" >
                      <span> {{ order.isExpanded ? '-' : '+' }}</span>
                      <p>乘客名單</p><br>
                    </button>
                </div>
                    <p class="order-amount" v-if="!isMobile">{{ order.amount }}</p>
                    <p class="order-date" v-if="!isMobile">{{ order.orderDate }}</p>
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
                <span  class="last-year" v-if="!isMobile"  @click="isPopupVisible = !isPopupVisible">去年度明細</span>
                <span  class="rwdLast" v-if="isMobile"  @click="isPopupVisible = !isPopupVisible">去年度明細</span>

                <!-- 遮罩 -->
                <div class="overlay" v-if="isPopupVisible"></div>
                <!-- 彈窗 -->
                 <div class="popup" v-if="isPopupVisible" >
                  <p class="last-year-according">2022年捐款紀錄</p>
                    <div class="receipt">
                      <div class="form-group">
                        <div class="receipt-title">
                          <p class="donate-title">收據編號</p>
                          <p class="donate-title">金額</p>
                          <p class="donate-title">捐款日期</p>
                          <p class="donate-title">會員狀態</p>
                        </div>
            
                        <div class="black-box"></div>
                        <hr class="receipt-hr">
                      </div>
                      <div class="form-group">
                        <div v-for="(receipt, index) in receipts" :key="index" class="receiptInfo">
                          <div class="receipt-order">
                            <div class="receipt-cell">  
                              <p>{{ receipt.receiptNumber }}</p>
                            </div>
                            <div class="receipt-cell"> 
                              <p>{{ receipt.summary }}</p>
                            </div>
                            <div class="receipt-cell"> 
                              <p>{{ receipt.donateDate }}</p>
                            </div>
                            <div class="receipt-cell"> 
                              <p>{{ receipt.memberStatus }}</p>
                            </div>
                          </div>
                          <hr class="receipt-order-hr">
                        </div>
                      </div>
                      <button  @click="isPopupVisible = !isPopupVisible">CLOSE</button>
                    </div>
                  </div> 
                  
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
                  <div class="rectangle" v-if="!isMobile" :style="{ backgroundColor: buttonColors.content1 }"></div>
                </div>
                <div class="button-sec">
                  <button @click="showContent = 'content2'; updateButtonColors('content2')" class="button-explain">會員說明</button>
                  <div class="rectangle" v-if="!isMobile" :style="{ backgroundColor: buttonColors.content2 }"></div>
                </div>
                <div class="button-third">
                  <button @click="showContent = 'content3'; updateButtonColors('content3')" class="button-benefits">會員權益</button>
                  <div class="rectangle" v-if="!isMobile" :style="{ backgroundColor: buttonColors.content3 }"></div>
                </div>
            </div>

              <div v-if="showContent === 'content1'">
                <div class="progress-bar">
                  <div class="level-box">
                    <p class="nowLevel" v-if= "isMobile">目前已累積：<span>$10,000</span></p>
                    <p class="nextLevel">離下個等級只剩：<span>$10,000</span></p></div>
                  <div class="line-box" v-if="!isMobile">
                    <div class="line1">
                      <div class="circle3"><p>銀</p></div>
                      <div class="circle2"></div>
                      <div class="circle">
                        <p>$20,000</p></div> 
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
                          <input type="checkbox" :id="'gift-' + benefits.id"   name="gift" 
                          v-if="benefit.gift !== '棒球帽(已兌換)'"  :disabled="benefit.id === 'b'" >
                          <p>{{ benefit.gift }}</p></div>
                      </div>
                    </div>
                  <hr class="benefit-order-hr">
                </div>
                <span class="gift-redemption" v-if="!isMobile" @click="isPopupVisible = !isPopupVisible">贈品兌換</span>
                <span class="gift-redemption-rwd" v-if="isMobile" @click="isPopupVisible = !isPopupVisible">贈品兌換</span>
              </div>
            </div>
            
            <!-- 贈品兌換彈窗 -->
             <!-- 遮罩 -->
             <div class="overlay" v-if="isPopupVisible"></div>
            <!-- 彈窗 -->
                <div class="popupGift" v-if="isPopupVisible" >
                    <p class="successful" v-if="!isMobile" >兌換成功</p>
                    <spa class="successfulRwd" v-if="isMobile" >兌換成功</spa>
                <div class="tick">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                        width="180" height="180"  viewBox="0 0 80 80">
                      <title>tick-mark</title>
                      <path class="path-circle" stroke="#111111" stroke-width="3"
                        fill="none" stroke-linecap="butt" stroke-linejoin="butt"
                        d="M 75,40 A 35,35   0 0 1 40,75  M40,75 A 35,35   0 0 1 5,40  M5,40 A 35,35   0 0 1 40,5  M40,5 A 35,35   0 0 1 75,40"/>
                      <path class="path-tick" stroke="#111111" stroke-width="3"
                        fill="none" stroke-linecap="butt" stroke-linejoin="butt"
                        d="M 25,45 35,55 60,30"/></svg>
                </div>
                  <div class="exchangeText">
                      <p class="exchangeProduct">您兌換的商品為<span>鑰匙圈</span>1個</p>
                      <p class="exchangeDate">兌換日期為<span>{{ currentDate }} {{ currentTime }}</span></p>
                      <p class="exchangeInfo">我們將於一星期內將商品寄出，<br>
                        若希望寄送至其他地址，<br>請與客服聯繫，謝謝。</p>
                  </div>   
                  <button  @click="isPopupVisible = !isPopupVisible">CLOSE</button>
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

              

              <div v-if="showContent === 'content3'" >
                <div class="mem-benefits-info" v-if="!isMobile">
                  <div v-for="(info, index) in infos" :key="index" class="info-content">
                    <p>{{ info.content }}</p> 
                    <a href=""><span>{{ info.link }}</span></a>
                  </div>
                </div>
                <div class="mem-benefits-info-rwd" v-if="isMobile">
                 <div class="rwdBenefitsInfo">
                    <p>‧會員金額累計時間以申辦日開始一年起算。</p>
                    <p>‧贈品兌換需於一年內於會員頁面申請領取。</p>
                    <p>‧本公司保留隨時變更使用規則之權利，<br>最新使用規則請網站公告為準。</p>
                    <p>‧其他相關規範：</p>
                    <a href=""><span>‧個人資料保護法</span></a><br>
                    <a href=""><span>‧隱私權政策</span></a>
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
        uploadedImages: {}, 
        imgsData: {},
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
        receipts:[
          {
            receiptNumber: '#2022-1234',
            summary: '$600',
            donateDate:'2022-08-09 14:30',
            memberStatus: '銅',
          },
          {
            receiptNumber: '#2022-1989',
            summary: '$600',
            donateDate:'2022-10-09 19:30',
            memberStatus: '銅',
          },
          {
            receiptNumber: '#2022-2222',
            summary: '$600',
            donateDate:'2022-11-09 19:30',
            memberStatus: '銅',
          },
        ],
        currentTime: '' ,
      };
    },

    mounted() {
        //檢常窗口是否是行動裝置
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
        //抓取時間
        this.updateDateTime();


    },
    

    methods: {
      //上傳圖片
      triggerFileInput(index) {
            this.$refs.fileInput[index -1].click();
      },
  
      handleFileUpload(index, event) {
            const fileInput = event.target;
            const files = fileInput.files;
            console.log(`Handling files for index ${index}`);
            console.log(fileInput);
            console.log(files);
            // 处理选定的文件
            for (let j = 0; j < files.length; j++) {
                const file = files[j];

                this.uploadedImages[index] = URL.createObjectURL(file);
                this.imgsData[index] = true;
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
            this.orders.forEach((o) => {
              if (o === order) {
                o.isExpanded = !o.isExpanded; 
            } else {
              o.isExpanded = false; 
              }
            });
      },

      updateButtonColors(content) {
            //改編輸入後input的底色
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

      getTotalAmountForId(id) {
        // 計算給定id的總金額
        let totalAmount = 0;
        for (const benefit of this.benefits) {
          if (benefit.memberLevel === id) {
            totalAmount += parseInt(benefit.amount.replace(/\$|,/g, ''), 10);
          }
        }
        return totalAmount;
      },
  },

      accordionEvent() {
        //點擊+號展開
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

  
      checkMobile() {
          // 判斷是否是行動裝置（小於等於 768px）
            const screenWidth = window.innerWidth;
            this.isMobile = screenWidth <= 768;
      },

      beforeUnmount() {
            // 在元件銷燬前移除窗口大小監聽器
            window.removeEventListener('resize', this.checkMobile);
    },
  };


  // function handleAccordion(selectedIndex) {
  //   questions.forEach((_, index) => {
  //     questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
  //   })
  // }


  </script>

  
  
 
  