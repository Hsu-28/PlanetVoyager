<template>
  <nav class="indexNav">
    <div class="menu-btn" @click="showMenuF" v-show="headericon">
      <img src="~@/assets/image/headerfooter/menu.svg" alt="menu">
      <div class="menu-p1">MENU</div>
    </div>

    <router-link to="/">
      <img src="~@/assets/image/pvlogo.svg" alt="" class="indexLogo" v-show="headericon" router-link to="/">
    </router-link>

    <div ref="loginButton" class="login-btn" v-show="headericon">
      <router-link to="/login">
        <img src="~@/assets/image/headerfooter/login.svg" alt="login" class="login">

      </router-link>
      <div class="menu-p2">Member</div>
    </div>
  </nav>
  <div>
    <h1 @mouseover="triggerScramble">{{ displayText }}</h1>
  </div>
  <router-view />

  <section class="menu" v-show="showMenu">
    <div class="menu-nav">
      <img src="~@/assets/image/headerfooter/close.svg" alt="" @click="closeMenuF" class="close-btn">

      <router-link to="/" @click="closeMenuF">
        <img src="~@/assets/image/pvlogo.svg" alt="" class="indexLogo">
      </router-link>

      <div class="login-btn-menu">
        <router-link to="/login">
          <img src="~@/assets/image/headerfooter/login.svg" alt="" @click="closeMenuF">

        </router-link>
        <div class="login-m">Member</div>
      </div>

    </div>


    <section class="menu-content">
      <div class="list">
        <ul>
          <li v-for="(item, index) in titlelist" :key="index">
            <strong>
              <router-link @click="closeMenuF" :to="item.path" :style="{ color: item.color }">
                <scramble :text="`${item.titleC} ${item.titleE}`" />
              </router-link>
            </strong>
          </li>
        </ul>
      </div>
      <div class="mediaLink">
        <div class="tipsContainer">
          <h3> <strong> 太空冷知識 </strong></h3>
          <div class="tips">
            <p>
              {{ tipAll[i] }}
            </p>
          </div>
        </div>

        <h4> <strong>追蹤我們</strong> </h4>
        <div class="socialMediaLink">

          <div class="youtube"> <a href="https://www.youtube.com/" target="_blank">
              <img src="~@/assets/image/headerfooter/yt.svg" alt="youtube">
              YOUTUBE</a> </div>
          <div class="twitter"> <a href="https://twitter.com/?lang=zh-Hant" target="_blank">
              <img src="~@/assets/image/headerfooter/twitter.svg" alt="youtube">
              TWITTER </a></div>
          <div class="instagram"> <a href="https://www.instagram.com/" target="_blank">
              <img class="instagramImg" src="~@/assets/image/headerfooter/ig.svg" alt="youtube">
              INSTAGRAM</a></div>
          <div class="facebook"> <a href="https://www.facebook.com/?ref=tn_tnmn" target="_blank">
              <img class="facebookImg" src="~@/assets/image/headerfooter/fb.svg" alt="youtube">
              FACEBOOK </a> </div>
        </div>
        <div class="dec-container">
          <div class="subus">
            <img src="~@/assets/image/headerfooter/dec.svg" alt="" class="dec">
            <div class="subus-contain">
              <h4 class="dec-h4"> <strong> 訂閱我們 </strong></h4>
              <p class="dec-p">第一時間接收我們的最新消息</p>
            </div>
          </div>
          <div id="happy">

            <subscribe :buttonText="'- SUBCRIBE US  NOW- '" :buttonBottomText="'  -pv-'"> <img
                src="~@/assets/image/headerfooter/globle.svg" alt="" class="btn-c"></subscribe>
          </div>
          <!-- <div class="btn-container">
              <p class="btn-p">SUBSCRIBE &nbsp;US &nbsp; NOW
                
                
              </p>
  
            </div> -->
        </div>
      </div>
    </section>

  </section>


  <!-------------- 聊天機器人 -------------->
  <button id="chatButton" class="cb">
    <div class="cb__img"></div>
    <div class="cb__img"></div>
    <div class="cb__img"></div>
    <div class="cb__img"></div>
    <div class="cb__img"></div>
  </button>
  <!-- 聊天室 -->
  <div id="chatRoom">
    <div id="chatHeader">PlanetVoyager小幫手</div>
    <div id="chatMessages">
      <!-- 使用 v-for 渲染消息列表 -->
      <div class="message" :class="message.isCustomer ? 'sent' : 'received'" v-for="(message, index) in  messages "
        :key="index">
        <!-- {{ message.text }} -->
        <span v-if="message.isCustomer">{{ message.text }}</span>
        <span v-else v-html="message.text"></span>
      </div>
    </div>
    <!-- 快速按鈕 -->
    <div id="btnInput">
      <button v-for="( btnMessage, index ) in btnMessages" :key="index" @click="handleButtonClick(index)" id="btnMessage">
        {{ btnMessage.text }}
      </button>
    </div>
    <div id="chatInput">
      <input type="text" id="messageInput" placeholder="Type your message..." v-model="newMessageText">
      <button id="sendButton" @click="sendMessage"><img src="~@/assets/image/chatbot/send.svg" alt=""></button>
    </div>
  </div>
  <!-------------- 聊天機器人結束 -------------->


  <router-link to="order">
    <div class="d-order">
      <div class="c-glitch ">
        <div class="c-glitch__img"></div>
        <div class="c-glitch__img"></div>
        <div class="c-glitch__img"></div>
        <div class="c-glitch__img"></div>
        <div class="c-glitch__img"></div>
      </div>
    </div>

    <!-- <img class="d-order" src="~@/assets/image/headerfooter/dorder.svg" alt=""> -->
  </router-link>


  <footer v-if='showFooter' class="footer">
    <div class="footer-content">
      <div class="Social-Media"> Social Media </div>
      <div><a href="https://www.facebook.com/?ref=tn_tnmn" target="_blank"> FACEBOOK </a></div>
      <div><a href="https://www.instagram.com/" target="_blank"> INSTAGRAM</a></div>
      <div><a href="https://twitter.com/?lang=zh-Hant" target="_blank"> TWITTER </a></div>
      <div><a href="https://www.youtube.com/" target="_blank"> YOUTUBE </a> </div>
    </div>
    <div class="footer-content-info">
      本網站為緯育TibaMe前端設計工程師班第86期第三組學員專題成果作品，本平台僅供學習、展示之用。
    </div>

  </footer>
</template>
  
<script src="./views/js/app.js"></script>
  
<style lang="scss" >
@import "~@/assets/sass/component/glitch.scss";
@import "~@/assets/sass/component/headerFooter.scss";
@import "~@/assets/sass/component/chatbot.scss"; //聊天機器人

#happy .cybr-btn:after {
  background: rgba(91, 19, 236, 80%);
}

#happy .cybr-btn {
  min-width: 0px;
  max-width: 100%;
  margin-top: -10px;
  height: 10px;

}

#happy button.cybr-btn {
  font-size: 20px;
  width: 60%;
  height: 50px;
}

#happy .cybr-btn__glitch:before {

  background: $white;
}
</style>