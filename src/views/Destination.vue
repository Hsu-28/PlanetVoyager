<template>
  <main>
    <h1><span class="h1-ch">星際旅程</span> <span class="h1-en">DESTINATION</span></h1>

    <H2Style cTitle="行星介紹" eTitle="INTRODUCTION"></H2Style>
    <ul class="tab-title">
      <li v-for="(planet, index) in planetCard" :key="planet.id" class="planet-tab"
        :class="{ 'active': activeId === planet.id }">
        <button @click="activeId = planet.id">{{ planet.ch_name}}{{ planet.en_namebig }}</button>
      </li>
    </ul>


    <article v-for="(planet, index) in planetCard" v-show="activeId === planet.id" :key="planet.id" class="planet-info">
      <h3>{{ planet.ch_name }} <span>{{ planet.en_namebig }}</span></h3>
      <article class="card-planet">
        <div class="planet__atmosphere">
          <div :class="planet.en_name" class="planet__surface"></div>
        </div>
      </article>
      <p class="info">{{ planet.info }}</p>
    </article>

    <article v-for="(travel, index) in travelCard" v-show="activeId === travel.id" :key="travel.en_name" class="planet-info">
      <H2Style :cTitle="travel.ch_name" :eTitle="travel.en_namebig"></H2Style>
      <article>
        <div>
          <div>
            <img :src="travel.img1" :alt="travel.title1">
          </div>
          <div>
            <img :src="travel.img2" :alt="travel.title1">
          </div>
        </div>
        <div>
          <div>
            <h3>{{ travel.title1 }}</h3>
            <p class="note">{{ travel.note1 }}</p>
            <ButtonStyle buttonText="訂購" buttonBottomText="-PV-"></ButtonStyle>
          </div>
          <div>
            <p class="info">{{ travel.info1 }}</p>
            <button>READ&nbspMORE</button>
          </div>
        </div>
      </article>
      <article>
        <div>
          <div>
            <img :src="travel.img3" :alt="travel.title2">
          </div>
          <div>
            <img :src="travel.img4" :alt="travel.title2">
          </div>
        </div>
        <div>
          <div>
            <h3>{{ travel.title2 }}</h3>
            <p class="note">{{ travel.note2 }}</p>
            <button>訂購</button>
          </div>
          <div>
            <p class="info">{{ travel.info2 }}</p>
            <button>READ&nbspMORE</button>
          </div>
        </div>
      </article>
    </article>



  </main>
</template>


<style  scoped lang="scss">
@import "~@/assets/sass/page/destination.scss";
</style>

<script>

import H2Style from '../components/SectionTitle.vue';
import ButtonStyle from '../components/ButtonFlash.vue';
export default {
  components: {
    H2Style, ButtonStyle
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
          img1: require("@/assets/image/destination/mars01.svg"),
          img2: require("@/assets/image/destination/mars02.svg"),
          title1: '奧林帕斯山脈之旅',
          note1: '眾神的童話世界',
          info1: '踏上一場壯闊的冒險，親臨太陽系最大的火山—奧林帕斯山。在這趟旅程中，遊客將體驗火星的獨特地貌、探索古老的火山結構，並從高空俯瞰其壯觀景色，感受宇宙中的偉大奧秘。',
          img3: require("@/assets/image/destination/mars03.svg"),
          img4: require("@/assets/image/destination/mars04.svg"),
          title2: '尋找生命之旅',
          note2: '你與我的起源',
          info2: '探索生命存在的可能性。從巡遊壯觀的水手峽谷，到深入隱秘的地下水道，體驗火星獨特的生態與地質特徵。在這趟冒險之旅中，參與者不僅能使用先進科技親手探測微生物跡象，更可以透過氣候與大氣觀測深入了解其生命潛質。此旅程不僅是探索宇宙的奇妙之旅，追尋生命起源，帶領你挑戰未知，感受宇宙的浩瀚與生命的神奇。',
        },
        {
          id: 2,
          en_namebig: 'MOON',
          ch_name: '月球',
          img1: require("@/assets/image/destination/moon01.svg"),
          img2: require("@/assets/image/destination/moon02.svg"),
          title1: '月球巡禮',
          note1: '用你的一小步<br>見證人類的一大步',
          info1: ' 一天的航程後，我們將會在第二天登陸月球，朝聖人類的星際里程碑--阿姆斯壯的腳印，之後會遊歷月球上最大的隕石坑---貝利環形山、在滿月海中馳騁、橫越東月大裂谷、參觀台日共構的月球基地，飽覽月球風光後再返回地球。',
          img3: require("@/assets/image/destination/moon03.svg"),
          img4: require("@/assets/image/destination/moon04.svg"),
          title2: '太空之心',
          note2: '月球七天六夜奇幻之旅',
          info2: '抵達在月球基地後，您將穿上太空服，遊覽著名的月球撞擊坑，體驗月面散步的刺激。不僅如此，您還會採集珍貴的岩石和月壤樣本，並進行科學實驗。以及夜晚的天文觀測和無光污染。最後一天，盡情享受自由活動。最後登上太空船，啟程返回地球，締造您太空之旅的完美結局。',
        },
        {
          id: 3,
          en_namebig: 'VENUS',
          ch_name: '金星',
          img1: require("@/assets/image/destination/venus01.svg"),
          img2: require("@/assets/image/destination/venus02.svg"),
          title1: '人文遺跡之旅',
          note1: '知識解謎探索',
          info1: '沉浸於麥田圈迷宮的神秘符號，融入蜥蜴人社區，學習語言、文化，共享美食，追隨遺跡，穿越城市廢墟，發現寶藏，探索過去文明，挑戰銀河砂流，感受宇宙冒險。',
          img3: require("@/assets/image/destination/venus03.svg"),
          img4: require("@/assets/image/destination/venus04.svg"),
          title2: '金星夢幻秘境',
          note2: '地脈探索',
          info2: '金星地形豐富，充滿奇特的自然地貌，有宇宙公園之稱，是一生必去的星球！這趟旅程將帶您前往伊師塔高地以及首都瑞茲城，除了驚奇美景，也能見證金星人文之美。',
        },

      ]
      // {
      //   en_namebig: 'TOUR',
      //   ch_name: '套裝行程',
      //   img1: '',
      //   img2: '',
      //   title: '行星繞行',
      //   note: '一次探索所有星球',
      //   info: '七天的壯遊，在太空中飄浮，感受銀河的奧秘。我們從地球出發，抵達月球探索未知的生物和美麗的地貌；於金星探索這炎熱的星球，發現更多驚奇；火星尋找遠古遺跡，感受生命的謎團。最後，第五天回歸地球，帶著難以忘懷的回憶，沉浸在銀河的壯麗美景中。',
      // },

    };
  },
  methods: {
    
  },
  mounted() {

  }
}


</script>
