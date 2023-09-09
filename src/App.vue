<template>

   <div class="menu-btn">

    <img class="menu-btn" src="~@/assets/image/headerfooter/menu.svg" alt="menu">
   </div>

   <div  class="login-btn">
    <router-link to="/login">  <img src="~@/assets/image/headerfooter/login.svg" alt="login"> 
    </router-link>
   </div>

   <section class="menu">
    <div class="menu-nav">
      <img src="~@/assets/image/headerfooter/close.svg" alt="">
      <img src="~@/assets/image/pvlogo.svg" alt="">
      <img src="~@/assets/image/headerfooter/login.svg" alt="">
    </div>
    <div class="dddd">
      <ul>
        <li>  <router-link to="/about"> 關於我們 </router-link></li>
        <li><router-link to="/about"> 星際旅程 </router-link>  </li>
        <li> <router-link to="/order"> 訂購旅程 </router-link></li>
        <li><router-link to="/training"> 行前訓練 </router-link></li>
        <li><router-link to="/technology"> 科技創新 </router-link></li>
        <li><router-link to="/teamMembers"> 團隊介紹 </router-link></li>
        <li><router-link to="/donate"> 支持星際探索 </router-link></li>
        <li><router-link to="/faq"> 問與答 </router-link></li>
      </ul>
    </div>
    <div class="kkkk">
      <div>
      太空曉之是
      </div>
      <div>
          <h4>社群</h4>
          <div class="youtube">  <a href="https://www.youtube.com/" target="_blank" >icon YOUTUBE</a> </div>
          <div class="twitter">  <a href="https://twitter.com/?lang=zh-Hant" target="_blank" > icon TWITTER </a></div>
          <div class="instagram">  <a href="https://www.instagram.com/" target="_blank" > icon INSTAGRAM</a></div>
          <div class="facebook">  <a href="https://www.facebook.com/?ref=tn_tnmn" target="_blank" > icon FACEBOOK </a> </div>
      </div>
    </div>
    


    <div>
      <div>
        <img src="" alt="">
        <div>
          <h4>訂閱我們</h4>
          <p>第一時間接收我們的最新消息</p>
        </div>
        <div>
          <p>SUBSCRIBE US NOW</p>
          icon  

        </div>
      </div>

    </div>

   </section>
      
    
    
    

  <router-view/>

  <footer class="footer">
    <div>Social Media<router-link to="/about"></router-link></div>
    <div>facebook<router-link to="/about"></router-link></div>
    <div>instragram<router-link to="/about"></router-link></div>
    <div>Twitter<router-link to="/about"></router-link></div>
    <div>Youtube<router-link to="/about"></router-link></div>
  </footer>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
// div{
//   color: $priveColor;
// }'

div.menu-btn{
  cursor: pointer;
  left: 100px;
  top: 50px;
  position: absolute;
   
}
div.login-btn{
  cursor: pointer;
  right: 100px;
  top: 50px;
  position: absolute;
}

div.menu-btn img{
  @include wh(70px, 50px);
}

div.login-btn img{
  @include wh(50px, 50px);
}
footer.footer{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  position: absolute;
  bottom: 20px;
  background-color: black;
  font-size: 20px;
  left: 50%;
  transform: translateX(-50%);
  
}
.menu{
  @include wh(1920px, 1200px);
  position: fixed;
  left: 0;
  right: 0;
  background-color: pink;
  z-index: 10;
  display: flex;
  flex-flow: row wrap;
}

.menu-nav{
  width: 100%;
  height: 100px;
} 
.kkkk,
.dddd{
  height: 100%;
  width: 500px;
}

</style>
