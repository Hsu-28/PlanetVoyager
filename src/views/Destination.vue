<template>
  <main>
    <div class="h1-back"><img src="~@/assets/image/destination/destination-back.jpg" alt="標題背景圖"></div>
    <h1 class="intro"><span class="h1-ch ">星際旅程</span> <span class="h1-en">DESTINATION</span></h1>
    <H2Style cTitle="行星介紹" eTitle="INTRODUCTION"></H2Style>

    <article class="plant-rwd-container intro ">
      <div class="plant-rwd-group">
        <article class="col-5 col-md-3 planet-list">
          <ul class="tab-ul">
            <li v-for="(planet, index) in planetCard" :key="planet.id" class="tab-li"
              :class="{ 'active': activeId === planet.id }">
              <button @click="activeId = planet.id; $router.push({ query: { planet: planet.id } })" class="planet-button">
                <span v-show="activeId === planet.id">
                  <img class="button-icon" src="~@/assets/image/destination/icon-planets.svg" alt="星球icon">
                </span>
                {{ planet.ch_name }}{{ planet.en_namebig }}
              </button>
            </li>
          </ul>
        </article>
        <article class="col-7 col-md-5 planet-img-group">
          <article v-for="(planet, index) in planetCard" v-show="activeId === planet.id" :key="planet.id"
            class="planet-img">
            <h3 class="planet-h3 intro">
              <span class="h3-ch">{{ planet.ch_name }}</span>
              <span class="h3-en">{{ planet.en_namebig }}</span>
              <span class="h3-dec1"></span>
              <span class="h3-dec2"></span>
              <span class="h3-dec3"></span>
              <span class="h3-dec4"></span>
            </h3>

            <article class="card-planet intro2">
              <img class="dec-planet" src="~@/assets/image/destination/decoration_earth.svg" alt="星球裝飾">
              <div class="planet-atmosphere">
                <div :class="planet.en_name" class="planet-surface"></div>
              </div>
            </article>
          </article>
        </article>
        <article v-for="(planet, index) in planetCard" v-show="activeId === planet.id" :key="planet.id"
          class="col-10 col-md-4 planet-text">
          <h3 class="planet-h3 intro">
            <span class="h3-ch">{{ planet.ch_name }}</span>
            <span class="h3-en">{{ planet.en_namebig }}</span>
            <span class="h3-dec1"></span>
            <span class="h3-dec2"></span>
            <span class="h3-dec3"></span>
            <span class="h3-dec4"></span>
            <img class="dec-planet-h3" src="~@/assets/image/destination/decoration_planet_h3.svg" alt="星球箭頭">
          </h3>
          <p class="info planet-info intro2">{{ planet.info }}</p>
        </article>
        <img class="dec-planet-up" src="~@/assets/image/destination/decoration_planet_up.svg" alt="星球裝飾線">
        <img class="dec-planet-down" src="~@/assets/image/destination/decoration_planet_down.svg" alt="星球裝飾線">
      </div>
    </article>

    <article class="travel-rwd-container">
      <div class="travel-rwd-group">
        <article v-for="(travel, index) in travelCard" v-show="activeId === travel.id || travel.id === 4"
          :key="travel.title" class="travel-info">
          <H2Style :cTitle="travel.ch_name" :eTitle="travel.en_namebig" v-if="travel.en_namebig"></H2Style>
          <article class="col-11 outside-border ">
            <el-carousel class="inside-border">
              <el-carousel-item v-for="(img, index) in travel.imgs" :key="index">
                <img class="travel-img" :src="img.img_src">
                <img class="travel-img" :src="img.img_src2">
              </el-carousel-item>
            </el-carousel>
          </article>
          <article class="col-11 outside-border outside-border-img">
            <article class="travel-info-rwd-container inside-border text-inside-border ">
              <div class="travel-info-rwd-group">
                <article class="col-11 col-md-5">
                  <h3 class="travel-h3">{{ travel.title }}</h3>
                  <p class="travel-note" v-html="travel.note"></p>
                  <router-link :to="travel.en_name">
                    <ButtonStyle buttonText="訂購" buttonBottomText="-PV-"></ButtonStyle>
                  </router-link>
                </article>
                <article class="col-11 col-md-7 ">
                  <p class="info travel-text">{{ travel.info }}</p>
                  <router-link :to="travel.link">
                    <button class="read-more">READ&nbspMORE</button>
                  </router-link>
                </article>
              </div>
            </article>
          </article>
        </article>
      </div>
    </article>

    <!-- 旅程測驗 -->
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

  </main>
</template>
  
  
<style  scoped lang="scss">
@import "~@/assets/sass/page/rwd.scss";
@import "~@/assets/sass/page/destination.scss";
</style>
  
<script>
import axios from 'axios';
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
    Navigation,
  },

  data() {
    return {
      activeId: 1,
      planetCard: [
        {
          id: 1,
          en_name: 'venus',
          en_namebig: 'VENUS',
          info: '金星是太陽系內第二顆行星，距離地球最近。它擁有厚重的大氣，富含二氧化碳，引發強烈的溫室效應，使表面溫度高達攝氏約465度。金星表面充滿火山平原、山脈和撞擊坑，但沒有水體存在。其大氣層包括有毒的硫酸雲層。金星的日子比地球長，但自轉非常緩慢，導致一天比一年還短。儘管表面條件極端，金星仍然吸引科學家的研究，以深入了解行星氣候和溫室效應，為太空探索提供了有趣的目標。',
          ch_name: '金星',

        },
        {
          id: 2,
          en_name: 'mars',
          en_namebig: 'MARS',
          info: '火星是太陽系內的第四顆行星，距離地球約2.27億千米。它因其橙紅色外觀而得名，擁有火山、撞擊坑、峽谷和沙丘等地形特徵。火星的大氣非常稀薄，主要由二氧化碳組成，無法支持人類呼吸。然而，科學家發現火星表面有跡象表明古代可能存在液態水，這引發了尋找生命的興趣。多個探測器和火星漫遊車已經或正在研究火星，以深入了解其地質、氣候和潛在的生命跡象。火星也是未來太空探索和殖民的目標之一。',
          ch_name: '火星',
        },
        {
          id: 3,
          en_name: 'moon',
          en_namebig: 'MOON',
          info: '月球是地球唯一的自然衛星，距離地球約38.4萬千米。它沒有大氣層，沒有液態水，因此氣候極端。月球表面分為高地和低地，前者佈滿撞擊坑，後者相對平坦。著名特徵包括巨大的撞擊坑，最著名的是環形山。月球還有古老的火山平原，被稱為月海。月球對地球產生引潮力，導致潮汐現象。人類首次登月是在1969年阿波羅11號任務中，月球一直是太空探索的關鍵目標，未來可能成為太空基地，支持更深入的太空探索。',
          ch_name: '月球',
        },
      ],

      travelCard: [
        {
          id: 1,
          link: 'ItineraryVenus2',
          en_name: 'venus',
          en_namebig: 'VENUS',
          ch_name: '金星',
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
          title: '金星',
          note: '地脈',
          info: '',


        },
        {
          id: 1,
          link: 'ItineraryVenus',
          en_name: 'venus',
          en_namebig: '',
          ch_name: '',
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
          title: '人文',
          note: '知識',
          info: '',
        },
        {
          id: 2,
          link: 'ItineraryMars2',
          en_name: 'mars',
          en_namebig: 'MARS',
          ch_name: '火星',
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
          info: '',

        },
        {
          id: 2,
          link: 'ItineraryMars',
          en_name: 'mars',
          en_namebig: '',
          ch_name: '',
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
          info: '',
        },
        {
          id: 3,
          link: 'ItineraryMoon2',
          en_name: 'moon',
          en_namebig: 'MOON',
          ch_name: '月球',
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
          info: '',

        },
        {
          id: 3,
          link: 'ItineraryMoon',
          en_name: 'moon',
          en_namebig: '',
          ch_name: '',
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
          info: '',
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
          info: '',
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

    window.addEventListener('scroll', this.scrollAppear);
    this.scrollAppear();
    window.addEventListener('scroll', this.scrollAppear2);
    this.scrollAppear2();

    this.activeId = this.$route.query?.planet ? +this.$route.query.planet : 1
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollAppear);
    window.removeEventListener('scroll', this.scrollAppear2);
  },
  created() {
    axios.get('http://localhost/PV/PlanetVoyager/public/php/DestinationItinerary.php')
      .then(response => {
        const responseData = response.data;
        console.log('travelCard', this.travelCard);
        console.log('data', responseData);
        this.travelCard = this.travelCard.map((card, index) => {
          if (responseData[index]) {
            return {
              ...card,
              title: responseData[index].planet_subtitle || card.title,
              note: responseData[index].content_title || card.note,
              info: responseData[index].introduction || card.info
            };
          }
          return card;
        });

        console.log(this.travelCard);
      })
      .catch(error => {
        console.error(error);
      });
    axios.get('http://localhost/PV/PlanetVoyager/public/php/DestinationItineraryPhoto.php')
      .then(response => {
          let banners = response.data;
          console.log('banner',banners);
          let filter_no = '1'
          let floder =''
          this.travelCard = this.travelCard.map((card, index) => {
          let newCard = { ...card };
          let newCardLink = newCard.link
          if (newCardLink =="ItineraryVenus2"){
            filter_no = "6"
            floder = 'itinerary_venus'
          }
          if (newCardLink =="ItineraryVenus"){
            filter_no = "7"
            floder = 'itinerary_venus1'
          }
          if (newCardLink =="ItineraryMars2"){
            filter_no = "5"
            floder ='itinerary_mars2'
          }
          if (newCardLink =="ItineraryMars"){
            filter_no = "4"
            floder='itinerary_mars1'
          }
          const filteredData = banners.filter(item => [filter_no].includes(item.itinerary_no));
          console.log('filteredData',filteredData)
          console.log(newCardLink)
          console.log('imgs',newCard.imgs)
          newCard.imgs = card.imgs.map(img => {
          const randomIndex = Math.floor(Math.random() * filteredData.length);
          const randomBanner = filteredData[randomIndex];
          console.log('itinerary_pic',randomBanner.itinerary_pic)
          if (newCardLink =="ItineraryVenus2"){
            return {
              ...img,
              img_src: require("@/assets/image/itinerary_venus/"+randomBanner.itinerary_pic),
              // img_src2: require("@/assets/image/itinerary_combo/c53.svg"),
            };
          }
          if (newCardLink =="ItineraryVenus"){
            return {
              ...img,
              img_src: require("@/assets/image/itinerary_venus1/"+randomBanner.itinerary_pic),
            };
          }
          if (newCardLink =="ItineraryMars2"){
            return {
              ...img,
              img_src: require("@/assets/image/itinerary_mars2/"+randomBanner.itinerary_pic),
            };
          }
          if (newCardLink =="ItineraryMars"){
              return {
              ...img,
              img_src:require("@/assets/image/itinerary_venus/"+randomBanner.itinerary_pic),
            };
          }
        });
        return newCard;
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

}


</script>