<template>
    <article class="card-planet">
              <div class="planet-atmosphere">
                <div :class="planet.en_name" class="planet-surface"></div>
              </div>
    </article>
</template>
<script>
export default {

    props: ['planet.en_name']
    //mars moon venus
}
</script>
<style scoped lang="scss">
.card-planet {
    width: 90%;
    padding-top: 90%;
    /* 使容器保持正方形，並使其高度等於其寬度 */
    position: relative;
}

/* 大氣層的樣式，使用box-shadow來產生特定的陰影效果。
使用radial-gradient來模擬由中心向外的透明度變化，並且使其呈圓形。*/
.planet-atmosphere {
    box-shadow:
        -5px 0px 10px -4px #999999,
        /* 白色亮外框 */
        inset 10px 0px 12px -2px rgba(255, 255, 255, .3),
        /* 白色亮內框 */
        inset -50px 0px 50px 0px rgb(31, 30, 30);
    /*星球右側陰影*/
    height: 100%;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, 0) 65%);
    border-radius: 50%;
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

.planet-surface {
    transform: rotate(0.034deg) scale(1.2);
    animation: planetRotate 30s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-size: cover;
}

@keyframes planetRotate {
    0% {
        background-position: 0% center;
    }

    100% {
        background-position: -200% center;
    }
}
</style>