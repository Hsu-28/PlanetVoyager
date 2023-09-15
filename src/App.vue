<template>
  <nav class="indexNav">
    <div class="menu-btn" @click="showMenuF" v-show="headericon">
      <img class="menu-btn" src="~@/assets/image/headerfooter/menu.svg" alt="menu">
    </div>

    <router-link to="/">
      <img src="~@/assets/image/pvlogo.svg" alt="" class="indexLogo" v-show="headericon" router-link to="/">
    </router-link>

    <div class="login-btn" v-show="headericon">
      <router-link to="/login">
        <img src="~@/assets/image/headerfooter/login.svg" alt="login">
      </router-link>
    </div>
  </nav>

  <router-view />

  <section class="menu" v-show="showMenu">
    <div class="menu-nav">
      <img src="~@/assets/image/headerfooter/close.svg" alt="" @click="closeMenuF">
      <router-link to="/">
        <img src="~@/assets/image/pvlogo.svg" alt="" class="indexLogo">
      </router-link>
      <router-link to="/login">
        <img src="~@/assets/image/headerfooter/login.svg" alt="" @click="closeMenuF">
      </router-link>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in titlelist" :key="index"> <strong><router-link @click="closeMenuF" :to="item.path"
              style="color:item.color;">
              {{ item.titleC }} &nbsp; {{ item.titleE }}</router-link>
          </strong></li>
      </ul>
    </div>
    <div class="mediaLink">
      <div class="tipsContainer">
        <h3> <strong> 太空冷知識 </strong></h3>
        <div class="tips">
          <p>
            在太空中，由於微重力環境，火焰的行為與地球上的不同。在太空中，沒有上下的方向，火焰呈現出一種稱為"球狀火焰"的現象，其中火焰周圍形成了一個球體。這是因為火焰不再受到重力的約束，而是擴散開來形成一個球形的形狀。
          </p>
        </div>
      </div>

      <h4> <strong>追蹤我們</strong> </h4>
      <div class="socialMediaLink">
        <div class="youtube"> <a href="https://www.youtube.com/" target="_blank">
            <img src="~@/assets/image/headerfooter/youtube.svg" alt="youtube">


            YOUTUBE</a> </div>
        <div class="twitter"> <a href="https://twitter.com/?lang=zh-Hant" target="_blank">
            <img src="~@/assets/image/headerfooter/twitter.svg" alt="youtube" class="twitterImg">
            TWITTER </a></div>
        <div class="instagram"> <a href="https://www.instagram.com/" target="_blank">
            <img class="instagramImg" src="~@/assets/image/headerfooter/instagram.svg" alt="youtube">
            INSTAGRAM</a></div>
        <div class="facebook"> <a href="https://www.facebook.com/?ref=tn_tnmn" target="_blank">
            <img class="facebookImg" src="~@/assets/image/headerfooter/facebook.svg" alt="youtube">
            FACEBOOK </a> </div>
      </div>
      <div>
        <img src="" alt="">
        <div>
          <h4> <strong> 訂閱我們 </strong></h4>
          <p>第一時間接收我們的最新消息</p>
        </div>
        <div>
          <p>SUBSCRIBE &nbsp;US &nbsp; NOW
            <img src="~@/assets/image/headerfooter/globle.svg" alt="">
          </p>


        </div>
      </div>
    </div>

  </section>



  <footer class="footer">
    <div class="footer-content">
      <div><a href="">Social Media </a> </div>
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

<style lang="scss">
@import "~@/assets/sass/component/headerFooter.scss";
</style>
