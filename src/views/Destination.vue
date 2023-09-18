<template>
  <main>
    <h1><span class="h1-ch">星際旅程</span> <span class="h1-en">DESTINATION</span></h1>

    <H2Style cTitle="行星介紹" eTitle="INTRODUCTION"></H2Style>

    <article class="plant-rwd-container">
      <div class="plant-rwd-group">
        <article class="col-5 col-md-4 planet-list">
          <ul class="tab-ul">
            <li v-for="(planet, index) in planetCard" :key="planet.id" class="tab-li"
              :class="{ 'active': activeId === planet.id }">
              <button @click="activeId = planet.id" class="planet-button">
                <span v-show="activeId === planet.id">
                  <img class="button-icon" src="~@/assets/image/destination/icon-planets.svg" alt="星球icon">
                </span>
                {{ planet.ch_name }}{{ planet.en_namebig }}
              </button>
            </li>
          </ul>
        </article>
        <article class="col-7 col-md-5 planet-img">
          <article v-for="(planet, index) in planetCard" v-show="activeId === planet.id" :key="planet.id"
            class="planet-info">
            <h3 class="planet-h3">
              <span class="h3-ch">{{ planet.ch_name }}</span>
              <span class="h3-en">{{ planet.en_namebig }}</span>
              <span class="h3-dec1"></span>
              <span class="h3-dec2"></span>
              <span class="h3-dec3"></span>
              <span class="h3-dec4"></span>
            </h3>
            <article class="card-planet">
              <div class="planet-atmosphere">
                <div :class="planet.en_name" class="planet-surface"></div>
              </div>
            </article>
          </article>
        </article>
        <article v-for="(planet, index) in planetCard" v-show="activeId === planet.id" :key="planet.id"
          class="col-10 col-md-3 planet-text">
          <h3 class="planet-h3">
            <span class="h3-ch">{{ planet.ch_name }}</span>
            <span class="h3-en">{{ planet.en_namebig }}</span>
            <span class="h3-dec1"></span>
            <span class="h3-dec2"></span>
            <span class="h3-dec3"></span>
            <span class="h3-dec4"></span>
          </h3>
          <p class="info planet-info">{{ planet.info }}</p>
        </article>
      </div>
    </article>

    <article class="travel-rwd-container">
      <div class="travel-rwd-group">
        <article v-for="(travel, index) in travelCard" v-show="activeId === travel.id || travel.id === 4"
          :key="travel.title" class="travel-info">
          <H2Style :cTitle="travel.ch_name" :eTitle="travel.en_namebig" v-if="travel.en_namebig"></H2Style>
          <article class="col-11 slideshow">
            <carousel :items-to-show="2" :wrapAround="true" class="custom-carousel" :autoplay="3000">
              <slide v-for="(img, index) in travel.imgs" :key="index">
                <div class="cimgs">
                  <img class="travel-img" :src="img.img_src">
                </div>
              </slide>
              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>

            <!-- <ul class="slider-container">
              <li class="travel-img-li">
                <img class="travel-img" :src="travel.img1" :alt="travel.title1">
              </li>
              <li class="travel-img-li">
                <img class="travel-img" :src="travel.img2" :alt="travel.title1">
              </li>
            </ul> -->
          </article>
          <article class="col-12">
            <article class="travel-info-rwd-container">
              <div class="travel-info-rwd-group">
                <article class="col-11 col-md-4">
                  <h3 class="travel-h3">{{ travel.title }}</h3>
                  <p class="travel-note" v-html="travel.note"></p>
                  <ButtonStyle buttonText="訂購" buttonBottomText="-PV-"></ButtonStyle>
                </article>
                <article class="col-11 col-md-7">
                  <p class="info travel-text">{{ travel.info }}</p>
                  <button class="read-more">READ&nbspMORE <a href=""></a></button>
                </article>
              </div>
            </article>
          </article>
        </article>
      </div>
    </article>



  </main>
</template>


<style  scoped lang="scss">
@import "~@/assets/sass/page/rwd.scss";
@import "~@/assets/sass/page/destination.scss";
</style>

<script>

import H2Style from '../components/SectionTitle.vue';
import ButtonStyle from '../components/ButtonFlash.vue';
//引入Carousel之後   expoet default裡面要放一imgs的資料  當作你要渲染的照片
import 'vue3-carousel/dist/carousel.css';  //這邊是基本的引入設定
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';  //這邊是基本的引入設定

export default {
  components: {
    H2Style, ButtonStyle,
    Carousel,
    Slide,
    Pagination,
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
          en_namebig: 'MARS',
          ch_name: '火星',
          imgs: [
            {
              img_src: require("@/assets/image/destination/mars01.svg"),
            },
            {
              img_src: require("@/assets/image/destination/mars02.svg"),
            },
          ],
          // img1:require("@/assets/image/destination/mars01.svg") ,
          // img2:require("@/assets/image/destination/mars02.svg") ,
          title: '奧林帕斯山脈之旅',
          note: '眾神的童話世界',
          info: '踏上一場壯闊的冒險，親臨太陽系最大的火山—奧林帕斯山。在這趟旅程中，遊客將體驗火星的獨特地貌、探索古老的火山結構，並從高空俯瞰其壯觀景色，感受宇宙中的偉大奧秘。',
        },
        {
          id: 1,
          en_namebig: '',
          ch_name: '',
          imgs: [
            {
              img_src: require("@/assets/image/destination/mars03.svg"),
            },
            {
              img_src: require("@/assets/image/destination/mars04.svg"),
            },
          ],
          // img1:require("@/assets/image/destination/mars03.svg") ,
          // img2:require("@/assets/image/destination/mars04.svg") ,
          title: '尋找生命之旅',
          note: '你與我的起源',
          info: '探索生命存在的可能性。從巡遊壯觀的水手峽谷，到深入隱秘的地下水道，體驗火星獨特的生態與地質特徵。在這趟冒險之旅中，參與者不僅能使用先進科技親手探測微生物跡象，更可以透過氣候與大氣觀測深入了解其生命潛質。此旅程不僅是探索宇宙的奇妙之旅，追尋生命起源，帶領你挑戰未知，感受宇宙的浩瀚與生命的神奇。',
        },
        {
          id: 2,
          en_namebig: 'MOON',
          ch_name: '月球',
          imgs: [
            {
              img_src:require("@/assets/image/destination/moon01.svg"),
            },
            {
              img_src:require("@/assets/image/destination/moon02.svg"),
            },
          ],
          // img1:require("@/assets/image/destination/moon02.svg") ,
          // img2:require("@/assets/image/destination/moon02.svg") ,
          title: '月球巡禮',
          note: '用你的一小步<br>見證人類的一大步',
          info: ' 一天的航程後，我們將會在第二天登陸月球，朝聖人類的星際里程碑--阿姆斯壯的腳印，之後會遊歷月球上最大的隕石坑---貝利環形山、在滿月海中馳騁、橫越東月大裂谷、參觀台日共構的月球基地，飽覽月球風光後再返回地球。',
        },
        {
          id: 2,
          en_namebig: '',
          ch_name: '',
          imgs: [
            {
              img_src:require("@/assets/image/destination/moon03.svg"),
            },
            {
              img_src:require("@/assets/image/destination/moon04.svg"),
            },
          ],
          // img1: require("@/assets/image/destination/moon03.svg"),
          // img2: require("@/assets/image/destination/moon04.svg"),
          title: '太空之心',
          note: '月球七天六夜奇幻之旅',
          info: '抵達在月球基地後，您將穿上太空服，遊覽著名的月球撞擊坑，體驗月面散步的刺激。不僅如此，您還會採集珍貴的岩石和月壤樣本，並進行科學實驗。以及夜晚的天文觀測和無光污染。最後一天，盡情享受自由活動。最後登上太空船，啟程返回地球，締造您太空之旅的完美結局。',
        },
        {
          id: 3,
          en_namebig: 'VENUS',
          ch_name: '金星',
          imgs: [
            {
              img_src:require("@/assets/image/destination/venus01.svg"),
            },
            {
              img_src:require("@/assets/image/destination/venus02.svg"),
            },
          ],
          // img1: require("@/assets/image/destination/venus01.svg"),
          // img2: require("@/assets/image/destination/venus02.svg"),
          title: '人文遺跡之旅',
          note: '知識解謎探索',
          info: '沉浸於麥田圈迷宮的神秘符號，融入蜥蜴人社區，學習語言、文化，共享美食，追隨遺跡，穿越城市廢墟，發現寶藏，探索過去文明，挑戰銀河砂流，感受宇宙冒險。',
        },
        {
          id: 3,
          en_namebig: '',
          ch_name: '',
          imgs: [
            {
              img_src:require("@/assets/image/destination/venus01.svg"),
            },
            {
              img_src:require("@/assets/image/destination/venus02.svg"),
            },
          ],
          // img1: require("@/assets/image/destination/venus01.svg"),
          // img2: require("@/assets/image/destination/venus02.svg"),
          title: '金星夢幻秘境',
          note: '地脈探索',
          info: '金星地形豐富，充滿奇特的自然地貌，有宇宙公園之稱，是一生必去的星球！這趟旅程將帶您前往伊師塔高地以及首都瑞茲城，除了驚奇美景，也能見證金星人文之美。',
        },

        {
          id: 4,
          en_namebig: 'TOUR',
          ch_name: '套裝行程',
          imgs: [
            {
              img_src:require("@/assets/image/destination/tour01.svg"),
            },
            {
              img_src:require("@/assets/image/destination/tour02.svg"),
            },
          ],
          // img1: require("@/assets/image/destination/tour01.svg"),
          // img2: require("@/assets/image/destination/tour02.svg"),
          title: '行星繞行',
          note: '一次探索所有星球',
          info: '七天的壯遊，在太空中飄浮，感受銀河的奧秘。我們從地球出發，抵達月球探索未知的生物和美麗的地貌；於金星探索這炎熱的星球，發現更多驚奇；火星尋找遠古遺跡，感受生命的謎團。最後，第五天回歸地球，帶著難以忘懷的回憶，沉浸在銀河的壯麗美景中。',
        },
      ]

    };
  },
  methods: {

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
  }
}


</script>
