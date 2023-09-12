<template>

   <div class="menu-btn" @click="showMenuF" v-show="headericon">
    <img class="menu-btn" src="~@/assets/image/headerfooter/menu.svg" alt="menu">
   </div>

   <div  class="login-btn" v-show="headericon">
    <router-link to="/login">  <img src="~@/assets/image/headerfooter/login.svg" alt="login"> 
    </router-link>
   </div>
   <section class="menu" v-show="showMenu">
    <div class="menu-nav">
      <img src="~@/assets/image/headerfooter/close.svg" alt="" @click="closeMenuF">
      <img src="~@/assets/image/pvlogo.svg" alt="">
      <img src="~@/assets/image/headerfooter/login.svg" alt="">
    </div>
    <div class="list">
      <ul >
        <li  v-for="item in titlelist" :key="index"><router-link :to="item.path" style="color: item.color;"> {{item.titleC}} &nbsp; {{item.titleE}}</router-link></li>
      </ul>
    </div>
    <div class="mediaLink">
      <div class="tipsContainer">
        <h3>太空冷知識</h3>
      <div class="tips">
        在太空中，由於微重力環境，火焰的行為與地球上的不同。在地球上，火焰通常是尖頭向上的，因為熱空氣上升，冷空氣下降，形成了一個自然的對流。然而，在太空中，沒有上下的方向，因此火焰表現出不同的形狀。在太空中，火焰呈現出一種稱為"球狀火焰"的現象，其中火焰周圍形成了一個球體。這是因為火焰不再受到重力的約束，所以熱氣體不會上升，而是擴散開來形成一個球形的形狀。
      </div>
      </div>
      
      <h4>追蹤我們</h4>
      <div class="socialMediaLink">
          <div class="youtube">  <a href="https://www.youtube.com/" target="_blank" >
            <img src="~@/assets/image/headerfooter/youtube.svg" alt="youtube">
            
            YOUTUBE</a> </div>
          <div class="twitter">  <a href="https://twitter.com/?lang=zh-Hant" target="_blank" >
            <img src="~@/assets/image/headerfooter/twitter.svg" alt="youtube">
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
      
    
  <router-view/>
  <!-- <footer class="footer">
    <div class="footer-content">
      <div><a href="">Social Media </a> </div>
      <div><a href="https://www.facebook.com/?ref=tn_tnmn" target="_blank" >  FACEBOOK </a></div>
      <div><a href="https://www.instagram.com/" target="_blank" > INSTAGRAM</a></div>
      <div><a href="https://twitter.com/?lang=zh-Hant" target="_blank" >  TWITTER </a></div>
      <div><a href="https://www.youtube.com/" target="_blank" > YOUTUBE </a> </div>
    </div> 
  </footer> -->
</template>

<script src="./views/js/app.js"></script>
<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{ 
  font-family: 'Oswald', 'Roboto Mono','Noto Serif JP', 'Noto Serif TC',  serif;

}
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
.footer{
  width: 100%;
  background-color: $blackBG;
  height: 60px;
  position: absolute;
  bottom: 0px;
  left: 0;
}

.footer-content{
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

}
.footer-content a{
  color: $white;
}
.menu{
  @include wh(1920px, 1200px);
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.86);
  z-index: 10;
  display: flex;
  flex-flow: row wrap;
}

.menu-nav{
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
} 
.menu-nav img{
  margin: 20px;
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
//   color: $turquoise;
// }

.list ul li:nth-child(2) a,
.list ul li:nth-child(3) a,
.list ul li:nth-child(4) a{
  color: $turquoise;
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
  padding: 10px;
}
.tipsContainer{
  border: 3px solid $turquoise;
  margin-bottom: 10px;

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
  text-align: start;
  font-size: 32px;
  margin-bottom: -10px;
  color: $blue;
}
.twitterImg{
  @include wh(30px, 30px)
}
.youtubeImg{
  @include wh(50px, 32px)
}
.socialMediaLink img{
  transform: translateY(10px);
}
img.facebookImg,
img.instagramImg{
  transform: translateY(15px);
}

.menu-nav :first-of-type:hover{
  cursor: pointer;
}
.menu-nav :last-of-type:hover{
  cursor: pointer;
}

</style>
