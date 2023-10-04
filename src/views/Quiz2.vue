<template>
  <div id="quiz">

  <!-- 开场动画 -->
  <transition name="fade">
    <div v-if="showIntro">
      <h1>歡迎來到測驗！</h1>
      <button @click="startQuiz">開始</button>
    </div>
  </transition>

  <!-- 输入暱稱 -->
  <transition name="fade">
    <div v-if="showNameInput" class="nickName">
      <h2>請輸入你的暱稱：</h2>
      <input v-model="nickname" placeholder="請輸入暱稱">
      <button @click="proceedToQuiz">確認</button>
    </div>
  </transition>

  <!-- 測驗内容 -->
  <div v-if="showQuiz">
    <h3>題目1: ...</h3>
    <!-- 在这里添加測驗的其他内容 -->
    <button @click="finishQuiz">完成測驗</button>
  </div>

  <!-- 測驗結果 -->
  <transition name="fade">
    <div v-if="showResult">
      <h2>測驗結果：</h2>
      <!-- 在这里显示測驗結果 -->
    </div>
  </transition>


  </div>
</template>

<script>
import ButtonStyle from '../components/ButtonFlash.vue';

export default {
  data() {
    return {
      showIntro: true,
      showFormElements: false,
      showTest: false,
      questions: [
        {
          title: "睜開眼，發現自己身處在一個陌生的環境，你覺得會是什麼樣的環境呢?",
          options: [
            { text: "都可以欸~", score: 1 },
            { text: "不用擦防曬的永晝", score: 10 },
            { text: "熱到變人乾的地方", score: 20 },
            { text: "被帥哥美女包圍的環境", score: 0 },
          ]
        },
        {
          title: "你走了很久，已經餓到頭昏眼花。突然間終於看到不遠處的景象開始長得不一樣了，你覺得自己將會看到...?",
          options: [
            { text: "路上都是坑坑巴巴的岩石區", score: 10 },
            { text: "到~處~都~是~沙", score: 20 },
            { text: "上面兩個不可以一次擁有嗎?", score: 1 },
            { text: "這個夢好真實阿~", score: 0}
          ]
        },
        {
          title: "原來來到一個村子的入口。這時遇到一群村民走出來，並詢問你是否要跟他們一同去騎太空機車，此時你會...?",
          options: [
            { text: "為什麼長得跟哆啦x夢有99分像", score: 0 },
            { text: "好啊好啊我+1", score: 20 },
            { text: "不了，我想要先在村子附近探勘環境，看看有沒有古蹟", score: 10 },
            { text: "好想要一起去，可是又好想看看附近有什麼喔", score: 1 }
          ]
        },
        {
          title: "走到一半時，突然看到一個奇怪的安全帽男手上拿著一個巨大螢光棒，此時你會...?",
          options: [
            { text: "那個螢光棒是什麼~先走過去再說", score: 30 },
            { text: "先報警再說", score: 0 },
            { text: "那男的太可疑了，你好再見", score: 10 },
            { text: "不管那是甚麼，先給我來一支", score: 1 }
          ]
        },
      ],
      currentQuestionIndex: 0,
      selectedOption: null,
      totalScore: 0,
      quizCompleted: false,
      showIntro: true,
    showNameInput: false,
    showQuiz: false,
    showResult: false,
    nickname: ''
      
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    //一定要點擊選項才能跳轉下一頁
    isNextButtonDisabled() {
      return this.selectedOption === null;
  },
  },
  methods: {
    handleAfterLeave() {
      // 開場動畫結束後執行的邏輯，例如顯示表單元素
      this.showFormElements = true;
    },
    //開場動畫
    startQuiz() {
      this.showIntro = false;
      this.showNameInput = true;
    },


    proceedToQuiz() {
      this.showNameInput = false;
      this.showQuiz = true;
    },
    finishQuiz() {
      // 处理測驗結果的逻辑
      this.showQuiz = false;
      this.showResult = true;
    }

  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/sass/page/_quiz.scss";
</style>
