<template>
        <article class="col-11  quiz">
      <H2Style cTitle="旅程測驗" eTitle="TRAVEL QUIZ"></H2Style>
      <div class="quizIntro">
        <p>踏上一場獨特的旅行，通過我們的旅程測驗深入了解你的旅遊風格。<br>
          這個快速而有趣的測驗將提供關於你的冒險程度、文化好奇心和旅遊習慣的見解。<br>
          你是一位勇敢的探險家，還是更喜歡寧靜的度假勝地？<br>
          這個測驗將為你揭示旅行中的隱藏特質，或者激發你探索新目的地的慾望。<br>
          無論你是旅遊新手還是經驗豐富的冒險家，這個測驗都將帶你走向更深層次的旅行體驗。<br>
          快來開始你的旅程吧！<br></p>
          <router-link :to="{ name: 'quiz' }">
            <ButtonStyle buttonText="開始測驗" buttonBottomText="-PV-"></ButtonStyle>
          </router-link>
      </div>
   
    </article>
</template>
<style lang="scss" scoped>
.intro {
    opacity: 0;
    transform: translateY(20px);
    transition: 1s all ease-in-out;
}

.intro-appear {
    opacity: 1;
    transform: translateY(0px);
}

.intro2 {
    opacity: 0;
    transform: translateY(20px);
    transition: 1.5s all ease-in-out;
}

.intro-appear2 {
    opacity: 1;
    transform: translateY(0px);
}


main {
    margin-top: 10%
}

$gap: 10px;

.plant-rwd-container {
    max-width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    padding-left: $gap;
    padding-right: $gap;

}

.plant-rwd-group {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-left: calc($gap * -1);
    margin-right: calc($gap * -1);
    position: relative;
}

p {
    color: $white;
}

.h1-back {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image:
        linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent),
        url('~@/assets/image/destination/destination-back.jpg');
    mask-image: linear-gradient(to top, transparent, black);
    background-size: cover;
    z-index: -2;

}

.h1-back img {
    width: 99%;
    z-index: -5;
    opacity: 0;
}

h1 {
    font-size: $h1-s;
    color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15% 0 30%;
}

.h1-ch {
    letter-spacing: 0.5rem;
}

.h1-en {
    margin-top: 1rem;
    font-weight: bolder;
}

.section-title {
    margin-bottom: 20%;
}

//h2 

.button-icon {
    width: 1.5rem;
}

.tab-ul {
    z-index: 3;
    position: relative;
    margin: 0 1.5rem;
    padding: 30% 0;

    &::before {
        content: ""; //繪製直線
        position: absolute;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: $gray;
        mask-image: linear-gradient(to bottom, transparent, black, black, transparent),
    }
    &::after {
        content: "";
        position: absolute;
        top:-25%;
        left: 0;
        width: 120%;
        height: 150%;
        background-color: $black;
        z-index: -2;
        mask-image: 
        linear-gradient(to bottom, transparent, black, black, transparent); 
    }
}

.tab-li {
    padding-top: 2rem;
    padding-bottom: 2rem;
    &:first-child {
        padding-top: 4rem;
    }
    &:last-child {
        padding-bottom: 4rem;
    }

}

$buttonLeft: 2rem;
$circle: 1.3rem;
$circleborder: 1.8rem;

.planet-button {
    cursor: pointer;
    background-color: transparent;
    margin-left: $buttonLeft;
    border: 0;
    color: $gray;
    font-size: 16px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    position: relative;

    &::after {
        //圓點
        content: "";
        position: absolute;
        left: calc(($circle/2 + $buttonLeft) * -1);
        top: 0;
        bottom: 0;
        width: $circle;
        height: $circle;
        border-radius: 50%;
        background-color: $gray;
    }
}

.active button {
    color: $white;

    &::after {
        background-color: $purple;
        filter: blur($circle/4);
        //filter模糊效果 blur(模糊半徑)
    }

    &::before {
        content: "";
        position: absolute;
        left: calc(($circleborder/2 + $buttonLeft) * -1);
        top: calc((#{$circleborder} - #{$circle}) / 2 * -1);
        ;
        bottom: 0;
        width: $circleborder;
        height: $circleborder;
        border-radius: 50%;
        border: 1px dashed $white;
        z-index: -1;
    }
}

.planet-info {
    margin-left: 1.5rem;
}

h3 {
    color: $white;
    font-size: $h2-s;
}

.planet-img-group {
    padding: 2%;
    box-sizing: border-box;
}

.planet-h3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10% auto;
    padding: 0.5rem 0;
    align-items: center;
    border: 1px solid $white;
    position: relative;
}

.h3-ch {
    width: 80%;
    text-align: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid $white ;
}

.h3-en {
    width: 80%;
    text-align: center;
    padding: 0.5rem 0;
}

.h3-dec1 {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: $white;
    position: absolute;
    top: -0.15rem;
    left: -0.15rem;
}

.h3-dec2 {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: $white;
    position: absolute;
    bottom: -0.15rem;
    left: -0.15rem;
}

.h3-dec3 {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: $white;
    position: absolute;
    bottom: -0.15rem;
    right: -0.15rem;
}

.h3-dec4 {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: $white;
    position: absolute;
    top: -0.15rem;
    right: -0.15rem;
}

.dec-planet-up {
    display: none;
}

.dec-planet-down {
    display: none;
}

.planet-text {
    padding: 0 4%;

    h3 {
        display: none;
    }
}

.card-planet {
    width: 90%;
    margin: 0 auto;
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

.dec-planet {
    display: none;
}

.info {
    font-size: $p2-s;
    line-height: 1.5;
}

.planet-info {
    margin: 10% 0;
}

.travel-rwd-container {
    max-width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 20%;
    margin-bottom: 30%;
    padding-left: $gap;
    padding-right: $gap;
}

.travel-rwd-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-left: calc($gap * -1);
    margin-right: calc($gap * -1);
}


.outside-border {
    margin: 0 auto;
    margin-bottom: 5%;
    padding: 1.5%; //10.73px
    border: 0.1rem solid $white; //3.3px
    border-radius: 0.2rem; //10px
    box-shadow: 0 0 1rem 0.2rem $blue; //40px 10px
    position: relative;

    &::before {
        content: "";
        border: 0.1rem solid $blue; //6.6px
        border-radius: 0.1rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        pointer-events: none;
    }

    &::after {
        content: "";
        border: 0.4rem solid rgba(91, 19, 236, 20%); //10.73px
        border-radius: 0.3rem; //6px
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        pointer-events: none;
    }
}


.inside-border {
    &::after {
        content: "";
        border: 0.3rem solid $blue; //12px
        border-radius: 0.15rem;
        filter: blur($circle/4);
        position: absolute;
        top: -2%;
        left: -0.5%;
        right: -0.5%;
        height: 104%;
        pointer-events: none;
    }

    &::before {
        content: "";
        border: 0.2rem solid $blueL;
        border-radius: 0.25rem;
        position: absolute;
        top: -3%;
        left: -0.8%;
        right: -0.8%;
        height: 106%;
        pointer-events: none;
    }
}

.el-carousel {
    height: 300px;
}

:deep(.el-carousel__item) {
    display: flex;
    align-items: center;

}

.travel-img {
    width: 100%;
}

.text-inside-border {
    &::after {
        content: "";
        border: 0.3rem solid $blue; //12px
        border-radius: 0.15rem;
        filter: blur($circle/4);
        position: absolute;
        top: 0.4%;
        left: 0.3%;
        right: 0.3%;
        height: 99%;
        pointer-events: none;
    }

    &::before {
        content: "";
        border: 0.2rem solid $blueL;
        border-radius: 0.25rem;
        position: absolute;
        top: 0;
        left: 0.2%;
        right: 0.2%;
        height: 100%;
        pointer-events: none;
    }
}



// .slideshow {

//     width: 90%;
//     min-height: 202px;
//     overflow: hidden;
//     position: relative;
// }

// .custom-carousel {
//     list-style: none;
//     padding: 0px;
//     margin: 0px;
//     display: flex;
//     position: absolute;
//     top: 0;
// }

// .travel-img-li {
//     list-style: none;
//     padding: 0px;
//     margin: 0px;
//     cursor: pointer;
// }

// .travel-img {
//     width: 310px;
//     margin: 5px;
// }


.travel-info-rwd-container {
    max-width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    padding-left: $gap;
    padding-right: $gap;
}

.travel-info-rwd-group {
    z-index: 5;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 3% 0;
    margin-left: calc($gap * -1);
    margin-right: calc($gap * -1);
}


.travel-info {
    margin-top: 10%;
}


.travel-h3 {
    margin: 5% 0;
}

.travel-note {
    margin: 5% 0;
}

//訂購按鈕
.cybr-btn {
    min-width: 0px;
    width: 15rem;
}

.travel-text {
    margin: 5% 0;
    font-size: $p2-s;
    text-align: left;
}

.read-more {
    background-color: transparent;
    font-size: $p2-s;
    color: $white;
    border: 0;
    padding-top:3%;
    margin-left: auto;
    margin-bottom: 8%;
    display: block;
    cursor: pointer;
}

//旅程測驗

.quiz{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
}

.quizIntro{
    line-height: 1.5;
    margin-top: -10%;
    margin-bottom: 10%;
    & p{
        margin: 5% 0;
    }
}

@media screen and (min-width: 700px) {
    h1 {
        font-size: $h1-m;
        margin-right: 25%;
    }

    .h1-ch {
        writing-mode: vertical-lr;
        letter-spacing: 2rem;
    }

    h3 {
        font-size: $h2-m;
    }

    .planet-button {
        font-size: 22px;
    }

    .tab-ul {
        &::before {
            top: -60%;
            height: 230%;
        }
    }

    .info {
        font-size: $p2-m;
    }

    .planet-list {
        order: 0;
        //html 區域調整順序
    }

    .planet-text {
        order: 1;

        h3 {
            display: flex;
        }
    }

    .dec-planet-h3 {
        position: absolute;
        width: 100%;
        top: 70%;
        left: -100%;
    }

    .dec-planet-up {
        position: absolute;
        display: block;
        width: 100%;
        top: -10%;
    }

    .dec-planet-down {
        position: absolute;
        display: block;
        width: 100%;
        bottom: -20%;
    }

    .planet-img-group {
        order: 2;

        h3 {
            display: none;
        }
    }

    .planet-atmosphere {
        height: 150%;
        width: 150%;
        top: 0;
        left: -50%;
    }

    .planet-surface {
        height: 150%;
        width: 150%;
    }

    .dec-planet {
        display: block;
        position: absolute;
        width: 77%;
        top: -45%;
        left: 10%;
        z-index: -1;
    }

    .travel-info-rwd-group {
        justify-content: space-between;
        padding: 3%;
    }

    .travel-text {
        margin: 0;
        font-size: $p2-m;
    }

    .read-more {
        background-color: transparent;
        font-size: $p2-m;
        margin-bottom: 0;
    }

    .outside-border {
        padding: 0.5%; //10.73px
        border: 0.2rem solid $white; //3.3px
        border-radius: 0.4rem; //10px
        box-shadow: 0 0 1.2rem 0.4rem $blue; //40px 10px

        &::before {
            content: "";
            border: 0.3rem solid $blue; //6.6px
            border-radius: 0.3rem;
        }

        &::after {
            content: "";
            border: 0.8rem solid rgba(91, 19, 236, 20%); //10.73px
            border-radius: 0.4rem; //6px
        }
    }

    .travel-img {
        width: 50%;

    }
}

.inside-border {
    &::after {
        content: "";
        border: 0.6rem solid $blue; //12px
        border-radius: 0.3rem;
    }
}

.text-inside-border {
    &::after {
        content: "";
        border: 0.6rem solid $blue; //12px
        border-radius: 0.3rem;
    }

    &::before {
        top: 0;
        left: 0.2%;
        right: 0.2%;
        height: 100%;
    }

 
}

@media screen and (min-width: 1024px) {
    h1 {
        font-size: $h1-l;
    }

    h3 {
        font-size: $h2-l;
    }

    .planet-button {
        font-size: 24px;
    }

    .info {
        font-size: $p2-l;
    }

    .planet-info {
        margin-bottom: 30%;
        font-size: $p1-l;
    }

    .section-title {
        margin-bottom: 10%
    }

    .dec-planet-h3 {
        top: 50%;
    }

    .planet-atmosphere {
        top: 10%;
    }


}


@media screen and (min-width: 1800px) {
    .plant-rwd-container {
        max-width: 1800px;
    }

    .h1-ch {
        letter-spacing: 3rem;
    }

    .tab-ul {
        &::before {
            top: -70%;
            height: 300%;
        }
    }

    .dec-planet-h3 {
        top: 30%;
        left: -100%;
    }

    .planet-atmosphere {
        top: 10%;
        left: -70%;
    }

    // main .section-title:first-child {
    //     margin-bottom: 0;
    // }
    // //h2 

    .dec-planet {
        top: -30%;
        z-index: -1;
    }

}
</style>
<script>
  import H2Style from '../components/SectionTitle.vue';
import ButtonStyle from '../components/ButtonFlash.vue';

export default {
  components: {
    H2Style, ButtonStyle,
    Carousel,
    Slide,
    Navigation,
  },

  data() {
    return {
      activeId: 1,
      planetCard: [
        {
          id: 1,
          en_name: 'mars',
          en_namebig: 'MARS',
          info: '火星是太陽系內的第四顆行星，距離地球約2.27億千米。它因其橙紅色外觀而得名，擁有火山、撞擊坑、峽谷和沙丘等地形特徵。火星的大氣非常稀薄，主要由二氧化碳組成，無法支持人類呼吸。然而，科學家發現火星表面有跡象表明古代可能存在液態水，這引發了尋找生命的興趣。多個探測器和火星漫遊車已經或正在研究火星，以深入了解其地質、氣候和潛在的生命跡象。火星也是未來太空探索和殖民的目標之一。',
          ch_name: '火星',
        },
        {
          id: 2,
          en_name: 'moon',
          en_namebig: 'MOON',
          info: '月球是地球唯一的自然衛星，距離地球約38.4萬千米。它沒有大氣層，沒有液態水，因此氣候極端。月球表面分為高地和低地，前者佈滿撞擊坑，後者相對平坦。著名特徵包括巨大的撞擊坑，最著名的是環形山。月球還有古老的火山平原，被稱為月海。月球對地球產生引潮力，導致潮汐現象。人類首次登月是在1969年阿波羅11號任務中，月球一直是太空探索的關鍵目標，未來可能成為太空基地，支持更深入的太空探索。',
          ch_name: '月球',
        },
        {
          id: 3,
          en_name: 'venus',
          en_namebig: 'VENUS',
          info: '金星是太陽系內第二顆行星，距離地球最近。它擁有厚重的大氣，富含二氧化碳，引發強烈的溫室效應，使表面溫度高達攝氏約465度。金星表面充滿火山平原、山脈和撞擊坑，但沒有水體存在。其大氣層包括有毒的硫酸雲層。金星的日子比地球長，但自轉非常緩慢，導致一天比一年還短。儘管表面條件極端，金星仍然吸引科學家的研究，以深入了解行星氣候和溫室效應，為太空探索提供了有趣的目標。',
          ch_name: '金星',
        },
      ],

      travelCard: [
        {
          id: 1,
          link: 'ItineraryMars',
          en_name: 'mars',
          en_namebig: 'MARS',
          ch_name: '火星',
          imgs: [
            {
              img_src: require("@/assets/image/itinerary_mars1/d12.jpg"),
              img_src2: require("@/assets/image/itinerary_mars1/d13.jpg"),
            },
            {
              img_src: require("@/assets/image/itinerary_mars1/d21.jpg"),
              img_src2: require("@/assets/image/itinerary_mars1/d23.jpg"),
            },
            {
              img_src: require("@/assets/image/itinerary_mars1/d32.jpg"),
              img_src2: require("@/assets/image/itinerary_mars1/d33.jpg"),
            },
            {
              img_src: require("@/assets/image/itinerary_mars1/d42.jpg"),
              img_src2: require("@/assets/image/itinerary_mars1/d43.jpg"),
            },


          ],

          title: '奧林帕斯山脈之旅',
          note: '眾神的童話世界',
          info: '踏上一場壯闊的冒險，親臨太陽系最大的火山—奧林帕斯山。在這趟旅程中，遊客將體驗火星的獨特地貌、探索古老的火山結構，並從高空俯瞰其壯觀景色，感受宇宙中的偉大奧秘。',
        },
        {
          id: 1,
          link: 'ItineraryMars2',
          en_name: 'mars',
          en_namebig: '',
          ch_name: '',
          imgs: [

            {
              img_src: require("@/assets/image/itinerary_mars2/m21.jpg"),
              img_src2: require("@/assets/image/itinerary_mars2/m23.jpg"),
            },
            {
              img_src: require("@/assets/image/itinerary_mars2/m32.jpg"),
              img_src2: require("@/assets/image/itinerary_mars2/m33.jpg"),
            },
            {
              img_src: require("@/assets/image/itinerary_mars2/m42.jpg"),
              img_src2: require("@/assets/image/itinerary_mars2/m43.jpg"),
            },
            {
              img_src: require("@/assets/image/itinerary_mars2/m52.jpg"),
              img_src2: require("@/assets/image/itinerary_mars2/m53.jpg"),
            },

          ],

          title: '尋找生命之旅',
          note: '你與我的起源',
          info: '探索生命存在的可能性。從巡遊壯觀的水手峽谷，到深入隱秘的地下水道，體驗火星獨特的生態與地質特徵。在這趟冒險之旅中，參與者不僅能使用先進科技親手探測微生物跡象，更可以透過氣候與大氣觀測深入了解其生命潛質。此旅程不僅是探索宇宙的奇妙之旅，追尋生命起源，帶領你挑戰未知，感受宇宙的浩瀚與生命的神奇。',
        },
        {
          id: 2,
          link: 'ItineraryMoon',
          en_name: 'moon',
          en_namebig: 'MOON',
          ch_name: '月球',
          imgs: [

            {
              img_src: require("@/assets/image/itinerary_moon/mo21.svg"),
              img_src2: require("@/assets/image/itinerary_moon/mo23.svg"),
            },
            {
              img_src: require("@/assets/image/itinerary_moon/mo32.svg"),
              img_src2: require("@/assets/image/itinerary_moon/mo33.svg"),
            },
            {
              img_src: require("@/assets/image/itinerary_moon/mo42.svg"),
              img_src2: require("@/assets/image/itinerary_moon/mo43.svg"),
            },
            {
              img_src: require("@/assets/image/itinerary_moon/mo52.svg"),
              img_src2: require("@/assets/image/itinerary_moon/mo53.svg"),
            },

          ],

          title: '月球巡禮',
          note: '用你的一小步<br>見證人類的一大步',
          info: ' 一天的航程後，我們將會在第二天登陸月球，朝聖人類的星際里程碑--阿姆斯壯的腳印，之後會遊歷月球上最大的隕石坑---貝利環形山、在滿月海中馳騁、橫越東月大裂谷、參觀台日共構的月球基地，飽覽月球風光後再返回地球。',
        },
        {
          id: 2,
          link: 'ItineraryMoon2',
          en_name: 'moon',
          en_namebig: '',
          ch_name: '',
          imgs: [

            {
              img_src: require("@/assets/image/itinerary_moon2/mo221.jpg"),
              img_src2: require("@/assets/image/itinerary_moon2/mo223.jpg"),
            },
            {
              img_src: require("@/assets/image/itinerary_moon2/mo232.jpg"),
              img_src2: require("@/assets/image/itinerary_moon2/mo233.jpg"),
            },
            {
              img_src: require("@/assets/image/itinerary_moon2/mo242.jpg"),
              img_src2: require("@/assets/image/itinerary_moon2/mo243.jpg"),
            },
            {
              img_src: require("@/assets/image/itinerary_moon2/mo252.jpg"),
              img_src2: require("@/assets/image/itinerary_moon2/mo253.jpg"),
            },
          ],

          title: '太空之心',
          note: '月球七天六夜奇幻之旅',
          info: '抵達在月球基地後，您將穿上太空服，遊覽著名的月球撞擊坑，體驗月面散步的刺激。不僅如此，您還會採集珍貴的岩石和月壤樣本，並進行科學實驗。以及夜晚的天文觀測和無光污染。最後一天，盡情享受自由活動。最後登上太空船，啟程返回地球，締造您太空之旅的完美結局。',
        },
        {
          id: 3,
          link: 'ItineraryVenus2',
          en_name: 'venus',
          en_namebig: 'VENUS',
          ch_name: '金星',
          imgs: [

            {
              img_src: require("@/assets/image/itinerary_venus1/v21.svg"),
              img_src2: require("@/assets/image/itinerary_venus1/v23.svg"),
            },
            {
              img_src: require("@/assets/image/itinerary_venus1/v32.svg"),
              img_src2: require("@/assets/image/itinerary_venus1/v33.svg"),
            },
            {
              img_src: require("@/assets/image/itinerary_venus1/v42.svg"),
              img_src2: require("@/assets/image/itinerary_venus1/v43.svg"),
            },
            {
              img_src: require("@/assets/image/itinerary_venus1/v52.svg"),
              img_src2: require("@/assets/image/itinerary_venus1/v53.svg"),
            },
          ],
          title: '人文遺跡之旅',
          note: '知識解謎探索',
          info: '沉浸於麥田圈迷宮的神秘符號，融入蜥蜴人社區，學習語言、文化，共享美食，追隨遺跡，穿越城市廢墟，發現寶藏，探索過去文明，挑戰銀河砂流，感受宇宙冒險。',
        },
        {
          id: 3,
          link: 'ItineraryVenus',
          en_name: 'venus',
          en_namebig: '',
          ch_name: '',
          imgs: [
            {
              img_src: require("@/assets/image/itinerary_venus/v221.svg"),
              img_src2: require("@/assets/image/itinerary_venus/v223.svg"),
            },
            {
              img_src: require("@/assets/image/itinerary_venus/v232.svg"),
              img_src2: require("@/assets/image/itinerary_venus/v231.svg"),
            },
            {
              img_src: require("@/assets/image/itinerary_venus/v242.svg"),
              img_src2: require("@/assets/image/itinerary_venus/v243.svg"),
            },
            {
              img_src: require("@/assets/image/itinerary_venus/v252.svg"),
              img_src2: require("@/assets/image/itinerary_venus/v253.jpg"),
            },
          ],
          title: '金星夢幻秘境',
          note: '地脈探索',
          info: '金星地形豐富，充滿奇特的自然地貌，有宇宙公園之稱，是一生必去的星球！這趟旅程將帶您前往伊師塔高地以及首都瑞茲城，除了驚奇美景，也能見證金星人文之美。',
        },

        {
          id: 4,
          link: 'ItineraryCombo',
          en_name: 'orbit',
          en_namebig: 'TOUR',
          ch_name: '套裝行程',
          imgs: [

            {
              img_src: require("@/assets/image/itinerary_combo/c21.svg"),
              img_src2: require("@/assets/image/itinerary_combo/c23.svg"),
            },
            {
              img_src: require("@/assets/image/itinerary_combo/c32.svg"),
              img_src2: require("@/assets/image/itinerary_combo/c33.svg"),
            },
            {
              img_src: require("@/assets/image/itinerary_combo/c42.svg"),
              img_src2: require("@/assets/image/itinerary_combo/c43.svg"),
            },
            {
              img_src: require("@/assets/image/itinerary_combo/c52.svg"),
              img_src2: require("@/assets/image/itinerary_combo/c53.svg"),
            },
          ],
          title: '行星繞行',
          note: '一次探索所有星球',
          info: '七天的壯遊，在太空中飄浮，感受銀河的奧秘。我們從地球出發，抵達月球探索未知的生物和美麗的地貌；於金星探索這炎熱的星球，發現更多驚奇；火星尋找遠古遺跡，感受生命的謎團。最後，第五天回歸地球，帶著難以忘懷的回憶，沉浸在銀河的壯麗美景中。',
        },
      ]

    };
  },
  methods: {
    //文字漸出
    scrollAppear() {
      let introTexts = document.querySelectorAll('.intro');
      let screenPosition = window.innerHeight / 1;
      //screenPostion 來存取視窗中的innerHeight 
      introTexts.forEach(introText => {
        let introPosition = introText.getBoundingClientRect().top;
        //用 getBoundingClientRect()來計算 introText 區域Top的位置
        if (introPosition < screenPosition) {
          introText.classList.add('intro-appear');
        }
        //如果當 introPosition 小於 screenPostion頁面視窗的高度時，則讓 introText 添加 css 的效果
      });
    },
    scrollAppear2() {
      let introTexts = document.querySelectorAll('.intro2');
      let screenPosition = window.innerHeight / 1;
      //screenPostion 來存取視窗中的innerHeight 
      introTexts.forEach(introText => {
        let introPosition = introText.getBoundingClientRect().top;
        //用 getBoundingClientRect()來計算 introText 區域Top的位置
        if (introPosition < screenPosition) {
          introText.classList.add('intro-appear2');
        }
        //如果當 introPosition 小於 screenPostion頁面視窗的高度時，則讓 introText 添加 css 的效果
      });
    }
  },
  mounted() {

    // let oUl = document.querySelector('.slider-container');
    // let oLi = document.querySelectorAll('.slider-container li');

    // let ulWidth = 0;
    // oLi.forEach(li => {
    //   ulWidth += li.offsetWidth;
    // });

    // oUl.innerHTML += oUl.innerHTML;
    // oUl.style.width = ulWidth * 2 + 'px';

    // let position = 0;
    // const slideSpeed = 1;

    // function moveSlide() {
    //   position -= slideSpeed;
    //   if (position <= -ulWidth) {
    //     position = 0;
    //   }
    //   oUl.style.left = position + 'px';
    //   requestAnimationFrame(moveSlide);
    // }

    // moveSlide();
    window.addEventListener('scroll', this.scrollAppear);
    this.scrollAppear();
    window.addEventListener('scroll', this.scrollAppear2);
    this.scrollAppear2();

    this.activeId = this.$route.query?.planet ? +this.$route.query.planet : 1 
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollAppear);
    window.removeEventListener('scroll', this.scrollAppear2);
  }
}

</script>