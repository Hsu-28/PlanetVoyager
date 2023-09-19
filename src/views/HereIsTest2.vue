<template>
  <article class="card-planet">
    <div class="planet__atmosphere">
      <div class="moon planet__surface"></div>
    </div>
  </article>
</template>

<style>
.card-planet{
    height: 600px;
    width: 100%;
}
/* 大氣層的樣式，使用box-shadow來產生特定的陰影效果。
使用radial-gradient來模擬由中心向外的透明度變化，並且使其呈圓形。*/
.planet__atmosphere {
    box-shadow:
        -5px 0px 10px -4px #999999,
        /* 白色亮外框 */
        inset 10px 0px 12px -2px rgba(255, 255, 255, .3),
        /* 白色亮內框 */
        inset -120px 0px 120px 0px rgb(31, 30, 30),
      /*星球右側陰影*/
      inset 80px -20px 60px 0px rgb(252, 236, 19);
      /*星球右側陰影*/
    height: 30vw;
    width: 30vw;
    margin: 0 auto;
    position: relative;
    background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, 0) 65%);
    border-radius: 100%;
    overflow: hidden;
    
}

/* 行星地表的樣式。並且有一個旋轉和縮放的效果，模仿行星的自轉。
planetRotate的動畫，該動畫將背景位置由0%移動到-200%。 
佔據其父元素（即大氣層）的整個空間，並將其背景圖像大小設置為cover以填充整個元素。*/
.mars {
    background-image: url(/src/assets/image/destination/mars.jpg);
}

.moon {
    background-image: url(/src/assets/image/destination/moon.jpg);
}

.venus {
    background-image: url(/src/assets/image/destination/venus.jpg);
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

  @keyframes planetRotate {
    0% {
        background-position: 0% center;
        transform: scale(1.5);
    }

    100% {
        background-position: -100% center;
        transform: scale(1);
    }

    100% {
        background-position: -200% center;
        transform: scale(1.5);
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
</style>
