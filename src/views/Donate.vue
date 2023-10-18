<template>
  <div class="banner">
    <div class="tit">
      <h1>支持星際探險</h1>
      <span>SUPPORT</span>
    </div>
  </div>
  <div class="donate">
    <section class="preface">
      <div class="down">
        <img src="../assets/image/donate/down.svg" alt="">
      </div>
      <div class="txt">
        <h3 class="pre-formatted">{{ Preface }}</h3>
      </div>
    </section>
    <section class="content">
      <div class="detail">
        <h2>{{ detail.title1 }}</h2>
        <h3>{{ detail.content }}</h3>
        <div class="detail-pic">
          <img :src="detail.img1" :alt="detail.alt">
        </div>
        <h2>{{ detail.title2 }}</h2>
        <p>{{ detail.p1 }}</p>
        <p>{{ detail.p2 }}</p>
        <div class="prize">
          <h4>{{ detail.title3 }}</h4>
          <p class="pre-formatted">{{ detail.p3 }}</p>
        </div>
        <!-- <div class="btn1">
          <ButtonFlashBox :buttonText="'捐款參加抽獎！'" :buttonBottomText="'-pv-'" class="btn1-ls"></ButtonFlashBox>
        </div> -->
        <p class="pre-formatted">{{ detail.p4 }}</p>
        <div class="tb-l">
          <table>
            <tr>
              <td v-for="(item, index) in tableL1" :key="index"><img :src="item.imgSrc" :alt="item.alt"
                  class="member"><br>{{
                    item.content }}</td>
            </tr>
            <tr>
              <td v-for="(item, index) in tableL2" :key="index">{{
                item.amount }}</td>
            </tr>
            <tr>
              <td v-for="(item, index) in tableL3" :key="index">{{
                item.giveaway }}</td>
            </tr>
          </table>
        </div>
        <div class="tb-c">
          <table>
            <tr>
              <td v-for="(item, index) in tableC1" :key="index">{{
                item.td }}</td>
            </tr>
            <tr>
              <td v-for="(item, index) in tableC2" :key="index"><img :src="item.imgSrc" :alt="item.alt">
                {{ item.content }}{{ item.td }}
              </td>
            </tr>
            <tr>
              <td v-for="(item, index) in tableC3" :key="index"><img :src="item.imgSrc" :alt="item.alt">
                {{ item.content }}{{ item.td }}
              </td>
            </tr>
            <tr>
              <td v-for="(item, index) in tableC4" :key="index"><img :src="item.imgSrc" :alt="item.alt">
                {{ item.content }}{{ item.td }}
              </td>
            </tr>
            <tr>
              <td v-for="(item, index) in tableC5" :key="index"><img :src="item.imgSrc" :alt="item.alt">
                {{ item.content }}{{ item.td }}
              </td>
            </tr>
          </table>
        </div>
        <div class="bottom">
          <img :src="detail.img2" :alt="detail.alt">
        </div>
      </div>
      <div class="money" id="section1">
        <div class="sticky">
          <h3>{{ money.title1 }}</h3>
          <div class="support" v-if="status == 'donate'">
            <h2>{{ money.title2 }}</h2>
            <div class="choose">
              <button v-for="(item, index) in btn" :key="index" class="amount" @click="updateInput(index, item.amount)">
                {{ item.amount }}<br><span>{{ item.span }}</span>
              </button>
            </div>
            <form @submit="changetomember">
              <div class="other">
                新臺幣<input type="text" v-model="inputText" placeholder="其他金額" required>
              </div>
              <p>{{ money.p1 }}</p>
              <div class="but2">
                <ButtonFlashBox type="submit" :buttonText="'我要捐款'" :buttonBottomText="'-pv-'" class="btn2-ls">
                </ButtonFlashBox>
              </div>
            </form>
          </div>
          <div v-else-if="status == 'checkinfo'" class="donation-data">
            <h2>確認您的會員資料</h2>
            <div class="form-container">
              <form @submit="changetopay">
                <label for="name">姓名：</label>
                <input type="text" id="name" v-model="name" required><br><br>

                <label for="email">信箱：</label>
                <input type="email" id="email" v-model="email" required><br><br>

                <label for="address">聯絡地址：</label>
                <input type="text" id="address" v-model="address" required><br><br>
                <div class="but2">
                  <ButtonFlashBox type="submit" :buttonText="'下一步 填寫信用卡'" :buttonBottomText="'-pv-'" class="btn2-ls">
                  </ButtonFlashBox>
                </div>
              </form>
            </div>
          </div>
          <div v-else-if="status == 'pay'" class="donation-data">
            <h2>填寫信用卡</h2>
            <div class="form-container">
              <!-- <form @submit.prevent="submitCreditCard"> -->
              <form @submit="changetofinish">
                <label for="creditCard">信用卡號碼：</label> <br>
                <!--  required:欄位必填  maxlength:限制欄位最大長度pattern:使用正則表達式 驗證欄位資料 -->
                <input class="card" type="text" required maxlength="4" pattern="\d{4}" name=""
                  oninput="value=value.replace(/[^\d]/g,'')" @input="dochange"> -
                <input class="card" type="text" required maxlength="4" pattern="\d{4}" name=""
                  oninput="value=value.replace(/[^\d]/g,'')" @input="dochange"> -
                <input class="card" type="text" required maxlength="4" pattern="\d{4}" name=""
                  oninput="value=value.replace(/[^\d]/g,'')" @input="dochange"> -
                <input class="card" type="text" required maxlength="4" pattern="\d{4}" name=""
                  oninput="value=value.replace(/[^\d]/g,'')" @input="dochange">
                <!-- <button type="submit">SUBMIT</button> -->
                <!-- <input type="text" id="creditCard" v-model="creditCard" required><br><br> -->

                <br><br>

                <label for="expiryDate">有效期限 MM/YY：</label>
                <input class="card" type="text" required maxlength="2" pattern="\d{2}" name=""
                  oninput="value=value.replace(/[^\d]/g,'')" @input="dochange"> /
                <input class="card" type="text" required maxlength="2" pattern="\d{2}" name=""
                  oninput="value=value.replace(/[^\d]/g,'')" @input="dochange">
                <!-- <input type="text" id="expiryDate" v-model="expiryDate" required><br><br> -->

                <br><br>

                <label for="safetyCode">安全碼：</label>
                <input type="text" id="safetyCode" v-model="safetyCode" required maxlength="3" pattern="\d{3}" name=""
                  oninput="value=value.replace(/[^\d]/g,'')"><br><br>
                <!-- 
                <div class="but2">
                  <ButtonFlashBox type="submit" :buttonText="'立即捐款'" :buttonBottomText="'-pv-'" class="btn2-ls">
                  </ButtonFlashBox>
                </div> -->

                <div class="but2">
                  <ButtonFlashBox type="submit" :buttonText="'立即捐款'" :buttonBottomText="'-pv-'" class="btn2-ls">
                  </ButtonFlashBox>
                </div>
              </form>
            </div>
          </div>

          <div v-else-if="status == 'loading'" id="loading">
            <!-- 顯示 loading 界面 -->
            <div class="spinner-box" id="loading">
              <div class="blue-orbit leo"></div>
              <div class="green-orbit leo"></div>
              <div class="red-orbit leo"></div>
              <div class="white-orbit w1 leo"></div>
              <div class="white-orbit w2 leo"></div>
              <div class="white-orbit w3 leo"></div>
              <div style="position: absolute;bottom: 20px;">
                <p style="color: #fff;">請稍等...</p>
              </div>
            </div>
          </div>

          <div v-else-if="status == 'success'" id="success" class="donation-data">
            <!-- 顯示下一個畫面 -->
            <h2>捐款完成</h2>
            <p>謝謝您的捐款 捐款明細請至會員中心查詢</p>
            <div class="but2">
              <ButtonFlashBox @click="resetToDefault" :buttonText="'繼續捐款'" :buttonBottomText="'-pv-'" class="btn2-ls">
              </ButtonFlashBox>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="btn-bottom-c">
      <a href="#section1" class="btn-bottom">我要捐款</a>
    </div>
  </div>
  <router-view />
</template>

<style scoped lang="scss">
@import "@/assets/sass/page/_donate.scss";
</style>
<script src="./js/donate.js"></script>