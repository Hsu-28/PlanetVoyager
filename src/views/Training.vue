<template>
  <div id="all">
    <div class="Preparation">
      <div class="bigTitle">
        <h1>{{ bigTitle.titleC }}</h1>
        <span>{{ bigTitle.titleE }}</span>
      </div>
      <p class="br">{{ bigTitle.text }}</p>
    </div>
    <div class="buttonContainer">
      <ul>
        <li v-for="(itemTitle, index) in PreparationItem" :key="index" :class="'button-' + index">
          <a v-bind:href=itemTitle.aLink>
            <!-- <router-link :to="{ path: '', hash:itemTitle.aLink} " class="buttonAll"> -->
            <!-- <router-link :to="{ path: '', hash: 'H2Style2' }" class="buttonAll"> -->

            <button class="buttonAll">
              {{ itemTitle.titleC }}
            </button>
            <!-- </router-link> -->
          </a>
        </li>
      </ul>
    </div>
    <div v-for="(allItem, index) in PreparationItem" :key="index" class="PreparationAll">

      <H2Style :cTitle="allItem.titleC" :eTitle="allItem.titleE" class="H2Style" :id="['H2Style' + index]"></H2Style>
      <div class="item-flex">
        <div v-for="(itemContainer, index) in allItem.itemContent" :key="index" class="PreparationItem br">

          <div class="imgSvg">
            <img :src="itemContainer.imgSvg">
          </div>
          <div class="PreparationText">
            <div>
              {{ itemContainer.textTitle }}
            </div>
            <div>
              {{ itemContainer.textP }}
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<style  scoped lang="scss">
@import "~@/assets/sass/page/_training";
</style>

<script>
import H2Style from '../components/SectionTitle.vue';
export default {
  components: {
    H2Style
  },

  data() {
    return {
      bigTitle: {

        titleC: '行前準備',
        titleE: 'PREPARATION',
        text: '行程訓練內容(每位旅客都需要參加，以確保旅客的安全與舒適)：\n1. 上傳健康評估。\n2. 參與為期七天的訓練課程。\n3. 太空服尺寸測量。\n4. 安排心理輔導師幫助旅客適應太空的心理壓力。\n\n我們承諾透過這套行前準備，每位旅客都能夠安心地踏上這次太空之旅。',
      },

      PreparationItem: [

        {
          aLink: '#H2Style0',
          titleC: '太空環境介紹',
          titleE: ' INTRODUCTION TO SPACE ENVIROMENT',

          itemContent: [
            {
              textTitle: "微重力環境",
              textP: `一旦離開地球的重力井，旅客將體驗到一種飄浮的感覺。\n\n對於初次進入太空的旅客，這種飄浮感可能會造成一些不適，在微重力環境中移動需要使用一種全新的技巧。`,
              imgSvg: require("@/assets/image/training/flyWater.jpg"),


            },
            {
              textTitle: "宇宙輻射",
              textP: `我們的航天器都配備了專門的屏蔽材料，以最大程度地減少宇宙輻射對旅客的影響。\n\n我們建議旅客在太空中停留的時間不要過長，以確保他們的安全。`,
              imgSvg: require("@/assets/image/training/radiation.jpg"),
            },
            {
              textTitle: "太空中的日夜循環",
              textP: `在太空站或太空船上，可能每90分鐘就會經歷一次日出和日落。\n\n這意味著每天將有16次日出和16次日落！這種快速的日夜變化可能會對人的生物鍾產生影響。`,
              imgSvg: require("@/assets/image/training/sun.jpg"),
            },
            // {
            //   textTitle: "太空真空與溫度變化",
            //   textP: `太空被描述為一個真空，意味著它幾乎完全沒有氣體，因此也沒有空氣可供呼吸。這使得保護旅客不受真空和相關危險影響的生命維護系統變得至關重要。此外，太空中的溫度差異極大。當處於直接陽光下時，太空的溫度可以升高到攝氏120度或更高，而在陰影中，溫度可能下降到零下150度。`,
            //   imgSvg:'',
            // }
          ]

        },
        {
          aLink: '#H2Style1',
          titleC: '生活與工作在太空',
          titleE: ' LIVING AND WORKING IN SPACE',
          itemContent: [
            {
              textTitle: "個人衛生與健康管理",
              textP: `在太空環境中，沐浴和洗手都需要使用特殊的方法。\n\n此外，太空中的微重力環境會對人體骨骼和肌肉產生影響，所以每天的運動是必要的日常活動。`,
              imgSvg: require("@/assets/image/training/bath.jpg"),


            },
            {
              textTitle: "飲食系統",
              textP: `旅客將了解太空船的資源循環系系統是如何使用的，\n\n如何在太空中用餐、節約水資源，並了解這些系統對於長期太空旅行的重要性。`,
              imgSvg: require("@/assets/image/training/resource.jpg"),

            },

            {
              textTitle: "休息和睡眠",
              textP: `在太空中睡覺是一種獨特的體驗，由於沒有地心引力，旅客將在太空袋中飄浮地睡覺。\n\n太空站內部的光線會模擬地球上的日夜循環，幫助維持旅客的生物鍾。`,
              imgSvg: require("@/assets/image/training/sleep.jpg"),

            },
            // {
            //   textTitle: "個人衛生與健康管理",
            //   textP: `在太空環境中，個人衛生需要特殊的注意。沐浴和洗手都需要使用特殊的方法。太空站上有專門的濕巾和乾洗手液供。此外，太空中的微重力環境會對人體骨骼和肌肉產生影響，所以每天的運動必要的日常活動。`,
            //   imgSvg:'',
            // }



          ]



        },
        {
          aLink: '#H2Style2',
          // 與應急處理
          titleC: '安全守則與應急處理',
          titleE: 'SAFETY REGULATIONS AND EMERGENCY PROCEDURES',
          itemContent: [
            {
              textTitle: "穿戴太空裝備",
              textP: `學習正確穿著太空裝備不僅保護您免受宇宙輻射和微小隕石的傷害，而且確保旅客在真空中有足夠的氧氣供應。\n\n太空裝備必須在指定區域內穿著，並且在穿脫時必須遵循正確的程序，以確保其正確運作。`,
              imgSvg: require("@/assets/image/training/sapceman.svg"),


            },
            {
              textTitle: "太空船的重要設備",
              textP: `認識太空站內的精密和關鍵的儀器，並告知其重要性,\n\n除非得到許可或在專業人員的指導下，否則請避免觸碰任何儀器或控制面板。誤操作可能導致嚴重的後果。`,
              imgSvg: require("@/assets/image/training/equipment.jpg"),

            },

            {
              textTitle: "緊急撤離程序",
              textP: `如果太空站發生緊急情況，如火災或氧氣泄露，旅客應迅速而冷靜地遵循緊急撤離程序。\n\n每位旅客在太空旅行前都會接受撤離訓練，熟悉所有緊急出口和救生艙的位置`,
              imgSvg: require("@/assets/image/training/exit.jpg"),

            },
            // {
            //   textTitle: "備用通訊訓練",
            //   textP: ` 雖然太空旅遊公司確保太空站的主要通訊系統始終保持操作，但在太空環境中，總是存在意外的可能性。旅客會接受備用通訊設備的基礎訓練，以確保在主要通訊失效的情況下，他們能夠使用備用系統與太空站其他部分或地球基地保持聯繫。`,
            //   imgSvg:'',

            // }



          ]

        },
      ]



    }

  },
  methods: {

  }

}

</script>