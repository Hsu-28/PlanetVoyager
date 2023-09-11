<template>
  <nav class="indexNav">
    <div class="menu-btn" @click="showMenuF" v-show="headericon">
      <img class="menu-btn" src="~@/assets/image/headerfooter/menu.svg" alt="menu">
    </div>

    <router-link to="/" >
      <img src="~@/assets/image/pvlogo.svg" alt="" class="indexLogo" v-show="headericon" router-link to="/">
    </router-link>

   <div  class="login-btn" v-show="headericon">
    <router-link to="/login">  
      <img src="~@/assets/image/headerfooter/login.svg" alt="login" >
    </router-link>
   </div>
  </nav>

  <router-view/>
    
   <section class="menu" v-show="showMenu">
    <div class="menu-nav">
      <img src="~@/assets/image/headerfooter/close.svg" alt="" @click="closeMenuF">
      <router-link to="/" >
        <img src="~@/assets/image/pvlogo.svg" alt="" class="indexLogo">
      </router-link >
      <router-link to="/login">  
      <img src="~@/assets/image/headerfooter/login.svg" alt="" @click="closeMenuF">
      </router-link >  
    </div>
    <div class="list">
      <ul >
        <li  v-for="item in titlelist" :key="index" @click="closeMenuF"><router-link :to="item.path" style="color: item.color;"> {{item.titleC}} &nbsp; {{item.titleE}}</router-link></li>
      </ul>
    </div>
    <div class="mediaLink">
      <div class="tipsContainer">
        <h3>太空冷知識</h3>
      <div class="tips">
        <p>
          在太空中，由於微重力環境，火焰的行為與地球上的不同。在太空中，沒有上下的方向，火焰呈現出一種稱為"球狀火焰"的現象，其中火焰周圍形成了一個球體。這是因為火焰不再受到重力的約束，而是擴散開來形成一個球形的形狀。
        </p>
      </div>
      </div>
      
      <h4>追蹤我們</h4>
      <div class="socialMediaLink">
          <div class="youtube">  <a href="https://www.youtube.com/" target="_blank" >
            <img src="~@/assets/image/headerfooter/youtube.svg" alt="youtube">
            
            YOUTUBE</a> </div>
          <div class="twitter">  <a href="https://twitter.com/?lang=zh-Hant" target="_blank" >
            <img src="~@/assets/image/headerfooter/twitter.svg" alt="youtube" class="twitterImg">
            TWITTER </a></div>
          <div class="instagram">  <a href="https://www.instagram.com/" target="_blank" > 
            <img class="instagramImg" src="~@/assets/image/headerfooter/instagram.svg" alt="youtube">
            INSTAGRAM</a></div>
          <div class="facebook">  <a href="https://www.facebook.com/?ref=tn_tnmn" target="_blank" > 
            <img class="facebookImg" src="~@/assets/image/headerfooter/facebook.svg" alt="youtube">
            FACEBOOK </a> </div>
      </div>
      <div>
      <img src="" alt="">
      <div>
        <h4>訂閱我們</h4>
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
      <div><a href="https://www.facebook.com/?ref=tn_tnmn" target="_blank" >  FACEBOOK </a></div>
      <div><a href="https://www.instagram.com/" target="_blank" > INSTAGRAM</a></div>
      <div><a href="https://twitter.com/?lang=zh-Hant" target="_blank" >  TWITTER </a></div>
      <div><a href="https://www.youtube.com/" target="_blank" > YOUTUBE </a> </div>
    </div> 
    <div class="footer-content-info">
      本網站為緯育TibaMe前端設計工程師班第86期第三組學員專題成果作品，本平台僅供學習、展示之用。
    </div>
    
  </footer>

 
</template>

<script src="./views/js/app.js"></script>

<style lang="scss">
body{ 
  font-family: 'Oswald', 'Roboto Mono','Noto Serif JP', 'Noto Serif TC',  serif;

}
#app{
  width: 100%;
}
nav{
  position: relative;
  height: 104px;
}


.indexLogo{
  width: 120px;
}
div.menu-btn img
{
  @include wh(70px, 50px);
}

div.login-btn img{
  @include wh(50px, 50px);
}
.footer{
  display: flex;
  width: 100%;
  background-color: $blackBG;
  height: 80px;
  position: relative;
  bottom: 0px;
  left: 0;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
}

.footer-content{
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 20px;
  margin-bottom: 10px;
}

.footer-content-info{
  color: $white;
}

.footer-content a{
  color: $white;
}
.menu{
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.86);
  z-index: 10;
  display: flex;
  flex-flow: row wrap;
}

.menu-nav,
.indexNav{
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
} 
.menu-nav img,
.indexNav img{
  margin: 20px;
  cursor: pointer;
}

.list,
.socialLink{
  height: 100%;
  width: 50%;
}

.list li {
  font-size: 46px;
  text-align: start;
  margin-bottom: 24px;
  margin-left: 14%;
}
 .list a {
   color: $white;
}
// .list a:nth-of-type(2){
//   color: $blueL;
// }

.list ul li:nth-child(2) a,
.list ul li:nth-child(3) a,
.list ul li:nth-child(4) a{
  color: $blueL;
}

div.mediaLink{
  display: flex;
  flex-flow: column nowrap;
  font-size: $c1;
  width: 26%;
  margin: 0 auto 0 auto;
}
.tips{
  @include wh(100%, 300px);
  margin: 10px auto 20px auto;
  padding: 10px  60px 60px 50px;
}

.tipsContainer{
  height: 350px;
  border: 3px solid $blueL;
  margin-bottom: 10px;
  background-image: url(~@/assets/image/headerfooter/tipsbg.svg);
  background-position: 100px -20px;
  background-size: 120%;
}
.tipsContainer h3{
margin-top: 20px;
}
 .socialMediaLink  a{
   color: $white;
 }


 .mediaLink{
   color: $white;
}
.socialMediaLink{
  display: flex;
  flex-flow: row wrap;

}

.socialMediaLink div{
  width: 50%;
}
.mediaLink div{
 text-align: start;
 font-size: $c1;
 line-height: 1.8;
}
.mediaLink h3{
  font-size: $titleS;
  color: $blue;
  text-align: center;
  
}
.mediaLink h4{
  margin-top: 10px;
  margin-bottom: 4px;
  text-align: start;
  font-size: 32px;
  color: $blue;
}
.socialMediaLink img{
  width: 32px;
  transform: translateY(5px);
}
.socialMediaLink .twitterImg{
  width: 28px;
}
img.facebookImg,
img.instagramImg{
  transform: translateY(10px);
}

nav img{
  cursor: pointer;
}


</style>
