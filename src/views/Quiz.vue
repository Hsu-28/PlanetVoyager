<template>
    <div id="quiz">
  
      <!-- 開場動畫 -->
      <transition name="fade"  @after-leave="handleAfterLeave">
        <div v-if="showIntro && !showTest" class="intro">
      <!-- 星戰開頭 -->
           <div class="star-war-intro">
              <div class="intro-text">
                <p>歡迎來到Planet Voyager</p>
                <p>準備好試試自己適合什麼樣的旅程了嗎?</p>
              </div>
  
              <div class="intro-img">
                <img src="../assets/image/quiz/star-war-style.png" alt=" title">
              </div> 
               </div>
               <!-- <div class="star-war-intro">
  
              <div class="intro-text">
                <p>歡迎來到Planet Voyager</p>
                <p>準備好試試自己適合什麼樣的旅程了嗎?</p>
              </div>
  
              <div class="intro-img">
                <img src="../assets/image/quiz/star-war-style.png" alt=" title">
              </div> 
              </div>  -->
        </div>
      </transition> 
  
  
     <!-- 輸入暱稱 -->
     <transition name="fade" @after-enter="showFormElements">
        <div v-if="showFormElements && showIntro">
          <label for="userName">請輸入暱稱</label>
          <input type="text" name="UserName" id="userName">
          <button type="submit" value="Submit">送出</button>
          <button class="effect effect-4" @click="startQuiz">Start Quiz</button>
        </div>
    </transition>
  
      <!-- 開始測驗 -->
      <transition name="fade" @after-leave="showResult"> 
      <div v-if="showTest && !quizCompleted " class="test" :style="{ backgroundImage: `url(${getBackgroundImage()})` }">
        <h2>{{ currentQuestion.title }}</h2>
   
        <ul class="test-options">
  
          <li v-for="(option, index) in currentQuestion.options" :key="index" >
            <input
              type="radio"
              v-model="selectedOption"
              :value="option.score"
              :id="`option${index}`"
              required 
            />
            <div class="label-box">
              <label :for="`option${index}`">{{ option.text }}</label>
            </div>
          </li>
  
        </ul>
  
        <button @click="nextQuestion" :disabled="isNextButtonDisabled">Next</button>
      </div>
    </transition>
    
  
    <!-- 測驗結果 -->
      <transition name="fade">
        <div v-if="quizCompleted" class="result">
          <p>您適合的行程是<br><span> {{ getResultCategory(totalScore) }}</span></p>
          <img v-if="getResultCategory(totalScore) === '金星-夢幻祕境探險之旅'" src="../assets/image/quiz/venus-04.png"  alt="Image 1">
          <img v-if="getResultCategory(totalScore) === '金星-人文遺跡之旅'" src="../assets/image/quiz/venus-02.png" alt="Image 2">
          <img v-if="getResultCategory(totalScore) === '火星-尋找生命之旅'" src="../assets/image/quiz/mars-04.png" alt="Image 3">
          <img v-if="getResultCategory(totalScore) === '火星-奧林帕斯山脈之旅'" src="../assets/image/quiz/mars-01.png" alt="Image 4">
          <img v-if="getResultCategory(totalScore) === '月球-太空之心'" src="../assets/image/quiz/moon-04.png" alt="Image 5">
          <img v-if="getResultCategory(totalScore) === '月球-月球巡禮'" src="../assets/image/quiz/moon-02.png" alt="Image 6">
          <img v-if="getResultCategory(totalScore) === '行星繞行'" src="../assets/image/quiz/tour01.png" alt="Image 7">
          <img v-if="getResultCategory(totalScore) === '留在地球'" src="../assets/image/quiz/stay-earth.png" alt="Image 8">
          <button @click="leave" class="leave">查看行程</button>
          <button @click="tryAgain" class="tryAgain">再玩一次</button>
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
        if (!this.showFormElements) {
          this.showFormElements = true;
        } else {
          this.showIntro = false;
          this.showTest = true;
        }
      },
  
  
      nextQuestion() {
        if (this.selectedOption !== null) {
          this.totalScore += this.selectedOption;
        }
  
        this.selectedOption = null;
        this.currentQuestionIndex++;
  
        if (this.currentQuestionIndex === this.questions.length) {
          this.quizCompleted = true;
        }
      },
      getResultCategory(score) {
        // 根據總分計算結果級距
        if (score >= 90) return "金星-夢幻秘境探險之旅";
        if (score >= 80) return "火星-尋找生命之旅";
        if (score >= 70) return "月球-太空之心";
        if (score >= 60) return "金星-人文遺跡之旅";
        if (score >= 50) return "火星-奧林帕斯山脈之旅";
        if (score >= 40) return "月球-月球巡禮";
        if (score >= 4) return "行星繞行";
        return "留在地球";
      },
      tryAgain() {
        // 重新初始化狀態
        this.currentQuestionIndex = 0;
        this.selectedOption = null;
        this.totalScore = 0;
        this.quizCompleted = false;
  
        // 啟動開場動畫
        this.startQuiz();
      },
      getBackgroundImage() {
        // 獲取背景圖像 URL
        const backgroundImageMap = {
          0: require("@/assets/image/quiz/bg1.gif"),
          1: "../path/to/image2.jpg",
          2: require("@/assets/image/quiz/bg3.gif"),
        
        };
        return backgroundImageMap[this.currentQuestionIndex] || "";
      },
  
    }
  };
  </script>
  
  <style scoped lang="scss">
  @import "~@/assets/sass/page/_quiz.scss";
  </style>
  
  