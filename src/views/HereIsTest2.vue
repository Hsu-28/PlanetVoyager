<template>
  <article class="card-planet">
    <div class="planet__atmosphere">
      <div class="moon planet__surface"></div>
    </div>
  </article>

  <article class="card-planet2">
    <div class="planet__atmosphere">
      <div class="moon planet__surface"></div>
    </div>
  </article>
</template>

<style>

@keyframes planetRotate {
    0% {
        background-position: -200% center;
    }

    100% {
        background-position: -0% center;
    } 
} 
.mars {
    background-image: url(/src/assets/image/destination/mars.jpg);
}

.moon {
    background-image: url(/src/assets/image/orderProcess/moont.jpg);
}

.venus {
    background-image: url(/src/assets/image/destination/venus.jpg);
}
.card-planet{
    height: 600px;
    width: 100%;
    margin-top: 50px;

/* 大氣層的樣式，使用box-shadow來產生特定的陰影效果。
使用radial-gradient來模擬由中心向外的透明度變化，並且使其呈圓形。*/
.planet__atmosphere {
    box-shadow:
        
         -5px 0px 10px -4px #555555a3, 
        /* 白色亮外框 */
         inset -10px 10px 10px -2px rgba(255, 255, 255, 0.397),/*右上光暈*/
        /* 白色亮內框 */
        inset -100px 80px 30px 20px rgba(136, 136, 136, 0.148),
        inset -120px 100px 40px 20px rgba(41, 41, 41, 0.308),
        inset -120px 100px 40px 40px rgba(96, 96, 96, 0.619),
        /*inset 80px -80px  90px 0px rgba(255, 255, 0, 0.196),左下黃色打光*/
        inset 30px -30px 50px 10px rgba(255, 225, 0, 0.295);/*左下黃色打光*/
       
       
      /*星球右側陰影*/
    /* <水平偏移量>
        <垂直偏移量>
        <模糊半徑>
        <擴展半徑>
        <顏色> */
      /* inset 10px 10px 6px 0px rgb(121, 121, 121);  */
      /*星球右側陰影*/
    height: 30vw;
    width: 30vw;
    margin: 0 auto 0 70%;
    position: relative;
    background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, 0) 65%);
    border-radius: 100%;
    overflow: hidden;
    
}

/* 行星地表的樣式。並且有一個旋轉和縮放的效果，模仿行星的自轉。
planetRotate的動畫，該動畫將背景位置由0%移動到-200%。 
佔據其父元素（即大氣層）的整個空間，並將其背景圖像大小設置為cover以填充整個元素。*/


.planet__surface {
    transform: rotate(0.034deg) scale(1.2);
    animation: planetRotate 36s linear infinite;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-size: cover;
}

  @keyframes planetRotate {
    0% {
        background-position: -200% center;
    }

    100% {
        background-position: -0% center;
    } 
}  

.info {
    margin: 10% 0;

}

.slideshow{
    margin: 5% 0;
    width:90%;
    min-height: 202px;
    overflow: hidden;
    position: relative;
}
.slider-container {
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    position: absolute;
    top: 0; 
}
.travel-img-li{
    list-style: none;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
}
.travel-img{
    width: 310px;
    margin: 5px;
}





}



/* 分界1 */
.card-planet2{
    .card-planet{
    height: 600px;
    width: 100%;
    margin-top: 50px;
}
/* 大氣層的樣式，使用box-shadow來產生特定的陰影效果。
使用radial-gradient來模擬由中心向外的透明度變化，並且使其呈圓形。*/
.planet__atmosphere {
    box-shadow:
        
       
        inset 0px 10px 10px -2px rgba(255, 255, 255, 0.527),/*方上光源*/
        inset 1px 10px 50px 2px rgba(160, 160, 160, 0.24),/*光暈圈*/
        inset 0px 0px 200px 140px rgb(0, 0, 0),/*黑色遮罩*/
        inset 0px 100px 40px 0px rgba(245, 245, 245, 0.58),/*上方光圈漸層*/
        0px 2px 10px 1px rgba(252, 252, 251, 0.763),
        0px 2px 10px 10px rgba(252, 252, 251, 0.331),
        0px 2px 40px 40px rgba(252, 252, 251, 0.114);
      
      /*星球右側陰影*/
    /* <水平偏移量>
        <垂直偏移量>
        <模糊半徑>
        <擴展半徑>
        <顏色> */
      /* inset 10px 10px 6px 0px rgb(121, 121, 121);  */
      /*星球右側陰影*/
    height: 30vw;
    width: 30vw;
    margin: 0 auto;
    position: relative;
    background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, 0) 65%);
    border-radius: 100%;
    overflow: hidden;
    
}


.planet__surface {
    transform: rotate(0.034deg) scale(1.2);
    animation: planetRotate 30s linear infinite;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-size: cover;
}

  /* @keyframes planetRotate {
    0% {
        background-position: -200% center;
    }

    100% {
        background-position: -0% center;
    } 
}  */

.info {
    margin: 10% 0;

}

.slideshow{
    margin: 5% 0;
    width:90%;
    min-height: 202px;
    overflow: hidden;
    position: relative;
}
.slider-container {
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    position: absolute;
    top: 0; 
}
.travel-img-li{
    list-style: none;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
}
.travel-img{
    width: 310px;
    margin: 5px;
}

}


</style>
