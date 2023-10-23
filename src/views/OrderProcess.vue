<template>
  <div class="firstM">
    <img src="@/assets/image/orderProcess/moon.png" alt="">
  </div>
  <div class="title">
    <h1>月球體驗之旅</h1>
    <h2>Moon Exploration Journey</h2>
  </div>

  <!-- 輪播 -->
  <div class="carousel">
    <carousel :items-to-show="3" :wrapAround="true" :paginationColor="'#FFF'" class="custom-carousel" :autoplay="3000">
      <slide v-for="(item, index) in imgs" :key="item.index">
        <div class="cimgs">
          <img :src=item.slide alt="輪播圖片">
        </div>
      </slide>

      <template #addons>

        <pagination />
      </template>
    </carousel>
  </div>

  <!-- 月球左右到，介紹、退費、行程 -->
  <section class="place1">
    <section class="introduce-container">
      <div class="introduce">
        <div class="button-container">
          <button :class="btn1" @click="show1F">{{ subtitle[0].planet_subtitle }}</button>
          <button :class="btn2" @click="show2F">{{ subtitle[4].planet_subtitle }}</button>
        </div>
        <div class="introduce-p" v-show="show1">
          <h3>{{ subtitle[0].planet_subtitle }}</h3>
          <h4>{{ subtitle[0].content_title }}</h4>
          <p> {{ subtitle[0].introduction }}</p>
        </div>
        <div class="introduce-p" v-show="show2">
          <h3>{{ subtitle[4].planet_subtitle }}</h3>
          <h4>{{ subtitle[4].content_title }}</h4>
          <p> {{ subtitle[4].introduction }}</p>
        </div>
      </div>



    </section>
    <article class="card-planet">
      <div class="location">
        <div class="planet__atmosphere">
          <div class="moon planet__surface"></div>
        </div>
      </div>
    </article>
  </section>

  <!-- 退費政策 -->

  <section class="place2">
    <div class="travelInfo-conatiner">
      <h3>太空旅遊資訊和退費政策</h3>
      <h4>歡迎參加 PLANET VOYAGER太空旅遊團！</h4>
      <ul class="travelInfo">
        <li v-for="(item, index) in tourInfo" :key="id">
          <div class="box">{{ item.id }}</div>
          <div class="itemp">{{ item.p }}</div>
        </li>
        <li>

          <div class="box"> <img src="@/assets/image/orderProcess/icon.svg" alt=""></div>

          <div class="itemp"><strong>行前訓練</strong><br>您須於旅程三個月前參與為期一週的訓練，並於結訓時接受評估，若行前訓練評估未通過則退費70% 。欲了解行前訓練內容，請
            <router-link to="/training">點擊此處 </router-link>。
          </div>


        </li>
        <li>
          <div class="box"><img src="@/assets/image/orderProcess/icon.svg" alt=""></div>
          <div class="itemp"><strong>退費政策</strong><br>出發日期半年以前取消行程可全額退費，前5個月取消退費90%，前4個月取消退費70%，前3個月取消退費60%，三個月內不退費。</div>
        </li>


      </ul>

    </div>
    <article class="card-planet2">
      <div class="location">
        <div class="planet__atmosphere">
          <div class="moon planet__surface"></div>
        </div>
      </div>

    </article>
  </section>

  <!-- 選擇行程 、時間 -->

  <section class="place3">
    <section class="itinerary-cotainer">
      <div class="itinerary-c">
        <h4>選擇行程
          <br>Choose Itinerary
        </h4>
      </div>
      <div class="itinerary-d" @click="af" :class="{ 'chosen': A }">
        <img src="@/assets/image/orderProcess/z.svg" alt="">
        {{ subtitle[0].planet_subtitle }}
      </div>
      <div class="itinerary-d" @click="bf" :class="{ 'chosen': B }">
        <img src="@/assets/image/orderProcess/z.svg" alt="">
        {{ subtitle[4].planet_subtitle }}
      </div>
    </section>
    <section class="itinerary-cotainer2">
      <div class="inL">
        <div class="itinerary-c">
          選擇行程時間
          <br>Choose Itinerary
        </div>
      </div>
      <div class="inR">
        <div v-for="(item, index) in MJ1" class="itinerary-d" @click="activeId = item.trip_no" :key="trip_no"
          :class="{ 'chosen': activeId === item.trip_no }">

          <h5>航程日期: </h5>
          <p>{{ item.trip_date }}</p>
          <h5>訓練日期:</h5>
          <p>{{ item.training_date }}</p>

          <p class="space">團位: 10 可售: {{ item.vacancy_num }} 候補: {{ item.waiting_people }}</p>
        </div>
      </div>
    </section>
    <article class="card-planet3">
      <div class="location">
        <div class="planet__atmosphere">
          <div class="moon planet__surface"></div>
        </div>
      </div>

    </article>

  </section>


  <section class="passengerInfo">


    <section class="order-info">
      <div class="p-num">
        乘客人數:
        <select name="" id="" v-model="currentAmount">
          <option v-for="item in options" :value="item.num"> {{ item.num }} </option>
        </select>
      </div>
      <section>
        <orderList v-for="n in currentAmount" :key="n" :numOrder="n" :status="'正取'" :list="formList"
          @update-data="udpateForm($event, n - 1)"></orderList>
      </section>

    </section>

    <div class="order-detail">
      <div class="order-card">
        <h4>ORDER DETAIL</h4>
        <div class="order-title">{{ journey }}</div>
        <div class="order-num">
          <p>旅客人數: {{ currentAmount }} 人</p>
        </div>
        <div class="order-money">
          <p>總金額: {{ 500 * currentAmount }} 萬美金 </p>
        </div>
        <div class="order-date">
          <p>航程日期: {{ date }}</p>
        </div>
        <div class="click" @click="checkOrderInfo()">

        </div>
        <ButtonFlashBox :buttonText="'確認訂購'" :buttonBottomText="'-pv-'" class="kkss"
          @click="checkLoginState(), checkOrder()"></ButtonFlashBox>

      </div>
      <div class="exchange-rate">
        <div>快速換算:<input placeholder="0" v-on:input="exchange" v-model="USD" min="0">萬美元 </div>
        <div>日幣: &nbsp;{{ YEN }} &nbsp; 萬元 </div>
        <div>台幣: &nbsp;{{ NT }} &nbsp; 萬元 </div>

      </div>
    </div>
  </section>


  <!-- <h1>{{ one }}</h1>
  <hr>
  <h1>{{ two }}</h1>
  <hr>
  <h1>{{ three }}</h1>


  <div>
    這邊是想顯示的部分
  </div>


  <select name="" id="" v-model="currentAmount">
    <option :value="item.num" v-for="item in options"> {{ item.num }} </option>
  </select>


  <div v-for="form in formList">
    <input type="text" v-model="form.name">
  </div> -->
  <section class="confirm-Order" v-if="orderCheck">
    <div class="confirm-contain">
      <div class="confirm-title">
        <h2>{{ journey }}</h2>
        <h3> 旅客人數: {{ currentAmount }}</h3>
        <h3>旅費金額: {{ 500 * currentAmount }}萬美金</h3>
        <h3>航程日期: {{ date }}</h3>
        <!-- <h3>旅程編號: {{no}}</h3> -->
      </div>
      <div class="confirm-content-container">
        <div class="confirm-content" v-for="(item, index) in formList" :key="index" v-if="formList.length > 0">
          <h2>旅客{{ index + 1 }}</h2>
          <div>姓氏:{{ item.lastName }}</div>
          <div>名字:{{ item.name }}</div>
          <div>性別:{{ item.gender }}</div>
          <div>出生日期:{{ item.birthday }}</div>
          <div>國籍:{{ item.nation }}</div>
          <div>護照號碼:{{ item.passId }}</div>
          <div>訓練服尺寸:{{ item.size }}</div>
          <!-- <div>旅位狀態:{{ status }}</div> -->
          <div> 餐食備註:{{ item.other }}</div>
          <div> 艙位號碼: {{ item.seatIndex }}</div>
          <div> 太空服尺寸: {{ item.ssize }}</div>
          <div> 太空服顏色: {{ item.scolor }}</div>
        </div>

      </div>
      <div class="order-finall">

        <div class="order-finall-btn btn-Cancle" @click="disOrder">修改資料</div>
        <router-link to="OrderSuccess" id="submitBtn">
          <div class="order-finall-btn btn-Check" @click="Addorder">確認訂購</div>
        </router-link>

      </div>

    </div>

  </section>

  <section class="alert" v-if="showAlert">
    <p @click="showAlert = false"><img src="@/assets/image/orderProcess/X.jpg" alt=""></p>
    尚有資料未填寫完成，請確認
  </section>

  <section id="login-sect" v-if="showLogin">
    <div class="black-cover">
      <div class="wrap">
        <svg class="login-tag" height="45" width="200">
          <polygon points="0,0 140,0 160,47 0,47" style="fill:#5B13EC; stroke:turquoise ;stroke-width:3" />
          <rect x="15" y="18" width="10" height="10" />
          <text x="40" y="33" fill="black" font-size="20" font-weight="700" letter-spacing="2">LOGIN</text>

        </svg>
        <div class="login-section">
          <div class="button_group">
            <router-link to="/register">
              <button id="register-btn">
                註冊
              </button>
            </router-link>
            <button id="login-btn">登入</button>
          </div>
          <form @submit.prevent="login">
            <p>請輸入信箱與密碼</p>
            <input type="email" name="memId" v-model="username" placeholder="信箱" id="username" /><br>
            <input type="password" name="memPsw" v-model="pswdddv" placeholder="密碼" id="pswdddv" />
            <button type="submit" class="cybr-btn" @click="signInmem">登入<span aria-hidden
                class="cybr-btn__glitch">登入</span><span aria-hidden class="cybr-btn__tag">&emsp;&emsp;-PV-</span></button>
            <p class="go-register">還沒有帳戶嗎？<router-link to="/register"><span>註冊一個吧！</span></router-link></p>
            <p>忘記密碼</p>
          </form>
        </div>
      </div>
    </div>

  </section>
</template>
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
<script src="@/views/js/orderProcess.js"></script>


<style scoped lang="scss">
@import "~@/assets/sass/page/orderProcess.scss";
@import "~@/assets/sass/page/orderProcessP.scss";
</style>

  