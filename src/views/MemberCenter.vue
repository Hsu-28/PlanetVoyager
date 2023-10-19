<template>
    <div id="membercenter">
      <router-view>
      <div class="memtitle"><h2 v-for="title in titles">{{title}}</h2></div>
      <!-- 上方會員資訊 -->
      <div class="container">
        <section class="top">
          <div class="info">
      <!-- 會員資訊 -->
              <div class="mem-box">
                <div class="greeting" >
                <img  :src="getIconPath()" alt="icon" class="icon" >
                <p>HI,<span class="nickname" v-if="phpData && phpData[0] && phpData[0].mem_nickname">{{ phpData[0].mem_nickname }}</span></p>
                </div>
                <div class="mem-number">
                <p>會員編號<span class="number"  v-if="phpData && phpData[0] && phpData[0].mem_no">{{  phpData[0].mem_no }}</span></p>
                <p>今年度捐款金額<br><span class="sum"  v-if="phpData && phpData[0] && phpData[0].donate_sum">${{  phpData[0].donate_sum }}</span></p>
                </div>
            </div>
          </div>
          
      <!-- 切換頁面 -->
            <ul class="tab-mem-title">
              <li v-for="(option, index) in optionCard" :key="option.id" class="option-tab">
              <div class="top-tab" :class="{ 'active': option.id === activeId }">
              <button @click="handleOptionClick(option)">
              <div class="pic" :class="{ 'active-pic': option.id === activeId }" >
                <img :src="option.img" alt="icon"></div>{{ option.name }}
              </button>
            </div>
            </li>
          </ul>
        </section>


      <div class="content">
      <!-- 帳戶資料 -->
          <div v-if="activeId === 1" class="information">
            <form action=""  @submit.prevent="handleSubmit"  v-if="phpData && phpData[0]">
              <p class="account-first-title">帳戶資訊</p>
              <div class="top-input">
              <div class="all-input">
              <div class="control-container">
                  <p id="name">姓名<br><input type="text" required  v-model="phpData[0].mem_name"></p>
                  <p>暱稱<br><input type="text" required v-model="phpData[0].mem_nickname" ></p>
              </div>
              <div class="control-container">
                  <p><span >性別</span><br>
                  <select  required v-model="phpData[0].mem_gender" id="sex" style="color:#F0F0F0;">
                  <option v-for="(option, index) in genderOptions" :key="index" :value="option.value">
                  {{ option.label }}</option></select></p>
                  <p>生日<br><input type="date"  id="bir" required v-model="phpData[0].mem_birthday"></p>
              </div>
              <div class="control-container">
                  <p id="mobile">手機號碼<br><input type="text" maxlength="10" oninput="value=value.replace(/[^\d]/g,'')" required v-model="phpData[0].mem_phone"></p>
                  <p>E-MAIL<br><input type="email" required v-model="phpData[0].email" ></p>
              </div>
              <div class="control-container">
                  <p id="address">收件/聯絡地址<br><input type="text" required v-model="phpData[0].address"></p>
                  <p>護照號碼<br><input type="text" maxlength="9" oninput="value=value.replace(/[^\d]/g,'')" v-model="phpData[0].mem_passport" ></p> 
              </div>
            </div>

              <div class="top-box">
              <div class="social">
                  <div class="facebook">
                    <a href="" style="display: flex; align-items: center;">
                    <img src="../assets/image/membercenter/facebook.svg" alt="fb">
                    <p class="fb">FACEBOOK(已綁定)</p></a>
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
                    <ButtonStyle buttonText="確認修改" buttonBottomText="-PV-"  @click="saveBtn()"></ButtonStyle>
                  </div>
              </div>
              </div>
                  <hr class="account-hr" >
                  <form action="" >
                  <div class="password-bottom-container">
                    <p class="account-sec-title">修改密碼</p>
                    <span class="pw">舊密碼<br>
                    <span v-if="passwordDuplicate">密碼正確</span>
                      <input :type='pwdFlag?"password":"text"' size='10' v-model="phpData[0].mem_pw" @blur="checkOldPassword">
                      <img :src='pwdFlag?textIcon:pwdIcon' @click="changePwd" style="width:16px;"></span>      

                    <span class="pw">新密碼 <br>
                      <input :type='pwdFlag?"password":"text"' size='10' v-model="newPassword"  @keyup="handleKeyUp" 
                      placeholder="8~12字元，需包含英文小寫和數字">
                      <img :src='pwdFlag?textIcon:pwdIcon' @click="changePwd" style="width:16px;"></span>

                    <span class="pw">確認新密碼 
                      <span v-if="!consistent" class="red"> *密碼不一致</span><br>
                      <input :type='pwdFlag?"password":"text"' size='10'  maxlength="12" 
                      v-model="confirmPassword" @keyup="updatePassword">
                      <img :src='pwdFlag?textIcon:pwdIcon' @click="changePwd" style="width:16px;"></span>
                  <div class="bottom-button">
                    <ButtonStyle buttonText="確認修改" buttonBottomText="-PV-" @click="updatePwd"></ButtonStyle> 
                  </div>
              </div>
            </form>

          </form>
         </div>

       <!-- 查詢訂單 -->
          <div v-else-if="activeId === 2" class="check-order">
            <p class="account-first-title">查詢訂單</p><br>
                <div class="odtitle">                
                  <p class="odtitle-name">訂單名稱</p>
                  <p>乘客名單</p>
                  <p>金額</p>
                  <p>訂購日期</p>
                </div>
                <hr class="odtitle-hr">

                <div class="odnames-container">
                <div  class="odname">
                <div class="oddetail">
                    <div class="od-sec" >
                      <img :src="getItineraryImagePath(phpData4[0].planet_subtitle)" alt="orderpic">
                      <div class="trip-content"> 
                        <p>行程：{{ phpData4[0].planet_subtitle }}</p>
                        <p>人數：{{ phpData3[0].ord_people }}人</p>
                        <p>出團日期：<br>{{ phpData2[0].trip_date}}</p>
                        <p class="rwdDate" v-if="isMobile">訂購日期：<br>{{ phpData3[0].orders_date }}</p>
                      </div> 
                    </div>
                    <button v-if="!isMobile" class="client-accordion" @click="toggleExpanded">
                      <span v-if="isExpanded !== undefined" class="accordion-icon" 
                      :class="{ 'expanded': isExpanded }"></span>
                    </button> 

                   <div class="rwdPassanger" v-if="isMobile">
                    <button v-if="isMobile" class="client-accordion" @click="toggleExpanded">
                    <p>乘客名單</p><br>
                    <span v-if="isExpanded !== undefined " class="accordion-icon" 
                    :class="{ 'expanded': isExpanded}"></span>
                    </button>
                    </div> 
                    <p class="order-amount" v-if="!isMobile">{{ phpData3[0].total_amount }}</p>
                    <p class="order-date" v-if="!isMobile">{{ phpData3[0].orders_date }}</p>    
                </div>
          
          <!-- 手風琴下開內容     -->
                <Collapse :when="{ 'expanded': isExpanded }" :onExpanded="scrollIntoView" class="collapse">
                  <div class="panel" v-if="isExpanded">
                    <div class="p-title">
                      <p>編號</p>
                      <p>姓名</p>
                      <p>狀態</p>
                      <p>明細</p>
                    </div>
                    <div v-for="(user, userIndex) in members" :key="user.id" class="journey">
                      <div class="journey-content">
                        <p>{{ userIndex +1 }}</p>
                        <p>{{ user.passenger_name  }}</p>
                        <p>{{ user.passenger_status }}</p>
                        <div class="journey-detail" @click="showBookingDetails(user)"  v-if="!isMobile">
                          <p>查看</p></div>
                        <div class="journey-detail-rwd" @click="showBookingDetails(user)" v-if="isMobile">
                          <span>查看</span></div>
                      </div>
                        <hr class="journey-hr">
                    </div>
                  </div>

                <!-- 遮罩 -->
                <div class="overlay" v-if="isPopupVisible"></div>
                <!-- 明細查看彈窗 -->
                <div class="popupBooking" v-if="isPopupVisible">
                    <div v-for="(user, index) in bookings" :key="user.id" class="bookingInfo">
                      <button  @click="isPopupVisible = !isPopupVisible">CLOSE</button>
                      <p class="bookingTitle">旅程訂購資訊</p>
                      <div class="bookingInfoBox"> 
                        <div class="bookingForm">
                          <p class="bookingTotalPassanger"> 旅客人數:<span>{{ phpData3[0].ord_people }}</span>人</p>
                          
                            <div class="container-control">
                              <p class="bookingId">乘客</p>
                              <div class="booking-container">
                                  <div class="bookingLastName">
                                      <span class="bookingSecondTitle">姓名</span>
                                      <p>{{ selectedUser ? selectedUser.passenger_name : '' }}</p></div>
                                  <div class="bookingBirthday">
                                      <span class="bookingSecondTitle">出生日期</span>
                                      <p>{{ selectedUser ? selectedUser.birthday : '' }}</p></div>
                              </div>
                              
                              <div class="booking-container">
                                  <div class="bookingSex">
                                      <span class="bookingSecondTitle">性別</span>
                                      <p>{{ selectedUser ? selectedUser.passenger_gender : '' }}</p></div>
                                    <div class="bookingPassport">
                                      <span class="bookingSecondTitle">身分證或護照號碼</span>
                                      <p>{{ selectedUser ? selectedUser.passport : ''}}</p></div>
                              </div>

                              <div class="booking-container">
                                    <div class="bookingCountry">
                                      <span class="bookingSecondTitle">國籍</span>
                                      <p>{{ selectedUser ? selectedUser.passenger_nationality : '' }}</p></div>
                                    <div class="bookingDiet">
                                      <span class="bookingSecondTitle">飲食習慣</span>
                                      <p class="diet">{{ selectedUser ? selectedUser.passenger_diet : '' }}</p></div> 
                              </div>

                                <div class="booking-container">
                                    <div class="bookingSize">
                                      <span class="bookingSecondTitle">訓練服尺寸</span>
                                      <p>{{ selectedUser ? selectedUser.shirt_size : '' }}</p></div>
                                    <div class="bookingTravelStatus">
                                      <span class="bookingSecondTitle">旅位狀態</span>
                                      <p>{{ selectedUser ? selectedUser.passenger_status : ''}}</p></div>     
                                </div>

                              <div class="booking-container">
                                  <div class="bookingCheck" v-if="!isMobile">
                                    <input type="checkbox" id="myCheckbox" class="myCheckbox" v-model="isChecked" :disabled="isDisabled" @click="preventCheckboxChange">
                                    <p>我已經詳閱健康規定</p></div>

                              <!-- for rwd -->
                              <div class="bookingCheck" v-if="isMobile">
                                    <input type="checkbox" id="myCheckbox" class="myCheckboxRwd" v-model="isChecked" :disabled="isDisabled" @click="preventCheckboxChange">
                                    <p >我已經詳閱健康規定</p></div>                         
                             </div>

                              <div class="bookingLineBox">
                                  <div class="bookingLine">
                                    <div class="bookingLine2"></div>
                                  <div class="circleContent">
                                      <div class="bookingCircle"> </div>
                                      <p class="paymentStatus">付款狀態:<br><span>已付款</span></p>
                                  </div>
                                  <div class="circleContent">
                                      <div class="bookingCircle2"> </div>
                                      <p class="paymentStatus2">健康審核:<br><span>已通過</span></p>
                                  </div>
                                  <div class="circleContent">
                                      <div class="bookingCircle3"></div>
                                      <p class="paymentStatus3">行前訓練</p> 
                                  </div>         
                                </div>
                              </div> 
                            </div>
                        <p class="notice">*若您需要取消訂單，請致電03-466-8490</p>
                    </div>
                </div>
              </div>
            </div>
          </Collapse >
        </div>
      </div>
    </div>

        <!-- 捐款明細 -->
          <div v-else-if="activeId === 3" class="donate">
            <div class="form">
              <div class="donate-top">
                <p class="account-first-title">捐款紀錄</p>
                <span  class="last-year" v-if="!isMobile"  @click="isPopupVisible = !isPopupVisible">去年度明細</span>
                
              <!-- 遮罩 -->
              <div class="overlay" v-if="isPopupVisible"></div>
              <!-- 去年度明細彈窗 -->
              <div class="popup" v-if="isPopupVisible" >
                <p class="last-year-according">2022年捐款紀錄</p>
                <div class="receipt">
                  <div class="form-group">
                    <div class="receipt-title">
                        <p class="donate-title">收據編號</p>
                        <p class="donate-title">金額</p>
                        <p class="donate-title">捐款日期</p>
                        <p class="donate-title">狀態</p>
                    </div>
                        <div class="black-box"></div>
                        <hr class="receipt-hr">
                  </div>
                      <div class="form-group">
                         <div v-for="(user, index) in phpData7" :key="index" class="receiptInfo"> 
                          <div class="receipt-order">
                            <div class="receipt-cell"><p>{{ index+1  }}</p></div>
                            <div class="receipt-cell"><p>{{ user.donate_amount }}</p></div>
                            <div class="receipt-cell"><p>{{ user.donate_date }}</p></div>
                            <div class="receipt-cell"><p>{{ user.donate_stat }}</p></div>
                          </div>
                        <hr class="receipt-order-hr">
                       </div>
                    </div>
                  <button @click="isPopupVisible = !isPopupVisible">CLOSE</button>
                </div>
              </div>       
          </div>

          <!-- 捐款明細 -->
              <div class="form-group">
                <div class="order-title">
                    <p class="donate-title">收據編號</p>
                    <p class="donate-title">金額</p>
                    <p class="donate-title">捐款日期</p>
                    <p class="donate-title">狀態</p>
              </div>
              <hr class="order-hr">
            </div>
            <div class="form-group">
              <div v-for="(donation, donationIndex) in phpData6" :key="donationIndex" class="donateInfo">
                <div class="donate-order">
                  <div class="donate-cell"><p>{{ donationIndex + 1 }}</p></div>
                  <div class="donate-cell"><p>{{ donation.donate_amount }}</p></div>
                  <div class="donate-cell"><p>{{ donation.donate_date }}</p></div>
                  <div class="donate-cell"><p>{{ donation.donate_stat }}</p></div>
              </div>
              <hr class="donate-order-hr">
              </div>
              <span  class="rwdLast" v-if="isMobile"  @click="isPopupVisible = !isPopupVisible">去年度明細</span>
            </div>      
          </div>
          </div>
          
          <!-- 會員等級 -->
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

            <!-- 贈品兌換 -->
              <div v-if="showContent === 'content1'">
                <div class="progress-bar">
                  <div class="level-box">
                    <p class="nowLevel" v-if= "isMobile">目前會員等級：<span>{{  phpData[0].mem_level }}</span></p>
                    <p class="nextLevel">離下一個等級還剩：
                      <span >{{  calculateNextLevelAmount(phpData[0].mem_level) }}</span></p></div>
                  <div class="line-box" v-if="!isMobile">
                    <div class="line1">
                      <div class="circle3"><p>{{  phpData[0].mem_level }}</p></div>
                      <div class="circle2"></div>
                      <div class="circle"><p>{{ calculateNextLevelDifference() }}</p></div> 
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
                  <div v-for="(user, userIndex) in benefits" :key="index">
                    <div class="benefit-order">
                      <div class="benefit-cell">  
                        <p>{{ user.memberLevel }}</p></div>
                      <div class="benefit-cell"> 
                        <p>{{ user.amount }}</p></div>
                      <div class="benefit-cell"> 
                        <p>{{ user.date }}</p></div>
                      <div class="benefit-cell"> 
                        <div class="input-box">
                          <input type="checkbox" :id="'gift-' + user.id"   name="gift" 
                          v-if="user.gift !== '棒球帽(已兌換)'"  :disabled="user.id === 'b'"
                          @click="handleGiftSelection(user)" >
                          <p>{{ user.gift }}</p></div>
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
                    <p class="successful" >兌換成功</p>
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
                      <p class="exchangeProduct">您兌換的商品為<span>{{ selectedGift }}</span>1個</p>
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
</router-view>
</div> 
  </template>

<script src="./js/membercenter.js"></script>

<style scoped lang="scss">
   @import "~@/assets/sass/page/_membercenter.scss";
</style>
 
 


  
  
 
  