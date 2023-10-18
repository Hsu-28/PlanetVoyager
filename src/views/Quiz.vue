<template>
  <div id="quiz">

  <!-- 開頭動畫 -->
  <transition name="fade">
    <div v-if="showIntro" class="intro">
      <div class="overlay"></div>
      <img class="bg" src="../assets/image/quiz/1.gif"  alt="bg"> 
       <!-- 星戰開頭 -->
       <div class="star-war-intro">
    
           <div class="intro-text">
            <h2 class="hero paths">WELCOME  <br>TO <br>PLANET <br>VOYAGER</h2>
            <!-- <p>歡迎來到Planet Voyager</p>
            <p>準備好試試自己適合什麼樣的旅程了嗎?</p> -->
          </div>
          <!-- <div class="intro-img"><img src="../assets/image/quiz/star-war-style.png" alt=" title"></div>  -->
      </div>
      <button @click="startQuiz" class="shareButton"  v-if="!isMobile">開始</button>
      <button @click="startQuiz" class="shareButtonRwd"  v-if="isMobile">開始</button>
    </div>
  </transition>

  <!-- 输入暱稱 -->
  <transition name="fade">
      <div v-if="showNameInput" class="nickName">
        <h3>請輸入暱稱：</h3>
        <input v-model="nickname" placeholder="例：新莊新園結依">
        <button @click="proceedToQuiz" class="shareButton" >確認</button>
      </div>
    </transition>

  <!-- 測驗内容 -->
    <div v-if="showTest && !quizCompleted " class="test" 
    :style="{ backgroundImage: `url(${getBackgroundImage()})`, backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }">
        <div class="overlay"></div>
        <h4>{{ currentQuestion.title }}</h4>
        <ul class="test-options">
          <li v-for="(option, index) in currentQuestion.options" :key="index" >
            <input
              type="radio"
              v-model="selectedOption"
              :value="option.score"
              :id="`option${index}`"
              required 
            />
            <div class="label-box" @click="handleLabelBoxClick" :class="{ 'clicked': isClicked }">
              <label :for="`option${index}`" :class="{ 'selected': selectedOption === option.score }">{{ option.text }}</label>
            </div>
          </li>
        </ul>
        <button v-if="!isMobile" @click="nextQuestion" :disabled="isNextButtonDisabled"  class="shareButton">Next</button>
        <button v-if="isMobile" @click="nextQuestion" :disabled="isNextButtonDisabled"  class="shareButtonRwd">Next</button>
      </div>
  

  <!-- 測驗結果 -->
  <transition name="fade">
    <div v-if="quizCompleted" class="result">
      <div class="result-content">
          <p>{{ nickname }}適合的行程是<br><span class="tripName"> {{ getResultCategory(totalScore) }}</span></p>

          <img v-if="getResultCategory(totalScore) === '金星-夢幻秘境探險之旅'" src="../assets/image/quiz/venus-dream.png" alt="Image 1" class="kenburns-top">
          <img v-if="getResultCategory(totalScore) === '金星-人文遺跡之旅'" src="../assets/image/quiz/venus2.png" alt="Image 2" class="kenburns-top">
          <img v-if="getResultCategory(totalScore) === '火星-尋找生命之旅'" src="../assets/image/quiz/mars-life.png" alt="Image 3" class="kenburns-top">
          <img v-if="getResultCategory(totalScore) === '火星-奧林帕斯山脈之旅'" src="../assets/image/quiz/mars2.png" alt="Image 4" class="kenburns-top">
          <img v-if="getResultCategory(totalScore) === '月球-太空之心'" src="../assets/image/quiz/moon-heart.png" alt="Image 5" class="kenburns-top">
          <img v-if="getResultCategory(totalScore) === '月球-月球巡禮'" src="../assets/image/quiz/moon2.png" alt="Image 6" class="kenburns-top">
          <img v-if="getResultCategory(totalScore) === '行星繞行'" src="../assets/image/quiz/combo.png" alt="Image 7" class="kenburns-top">
          <img v-if="getResultCategory(totalScore) === '留在地球'" src="../assets/image/quiz/stay-earth.png" alt="Image 8" class="kenburns-top">
          <div class="overlay2"></div>

          <div v-if="!isMobile" class="resultButton">
          <router-link v-if="getResultCategory(totalScore) === '金星-夢幻秘境探險之旅'"  :to="'/itineraryVenus'">
          <button class="leave">查看行程</button></router-link>
          <router-link v-else-if="getResultCategory(totalScore) === '金星-人文遺跡之旅'" :to="'/itineraryVenus2' ">
          <button class="leave">查看行程</button></router-link>
          <router-link v-else-if="getResultCategory(totalScore) === '火星-尋找生命之旅'" :to="'/itineraryMars2'">
          <button class="leave">查看行程</button></router-link>
          <router-link v-else-if="getResultCategory(totalScore) === '火星-奧林帕斯山脈之旅'" :to="'/itineraryMars'">
          <button class="leave">查看行程</button> </router-link>
          <router-link v-else-if="getResultCategory(totalScore) === '月球-太空之心'" :to="'/itineraryMoon2'">
          <button class="leave">查看行程</button></router-link>
          <router-link v-else-if="getResultCategory(totalScore) === '月球-月球巡禮'" :to="'/itineraryMoon'">
          <button class="leave">查看行程</button></router-link>
          <router-link v-else-if="getResultCategory(totalScore) === '行星繞行'" :to="'/itineraryCombo'">
          <button class="leave">查看行程</button></router-link>
          <button @click="tryAgain" class="tryAgain">再玩一次</button>
          </div>
       

        <div class="optionButton"  v-if="isMobile">
          <div class="rwdOption">
            <router-link v-if="getResultCategory(totalScore) === '金星-夢幻秘境探險之旅'"  :to="'/itineraryVenus'">
            <button class="leaveRwd">查看行程</button></router-link>
            <router-link v-else-if="getResultCategory(totalScore) === '金星-人文遺跡之旅'" :to="'/itineraryVenus2' ">
            <button class="leaveRwd">查看行程</button></router-link>
            <router-link v-else-if="getResultCategory(totalScore) === '火星-尋找生命之旅'" :to="'/itineraryMars2'">
            <button class="leaveRwd">查看行程</button></router-link>
            <router-link v-else-if="getResultCategory(totalScore) === '火星-奧林帕斯山脈之旅'" :to="'/itineraryMars'">
            <button class="leaveRwd">查看行程</button> </router-link>
            <router-link v-else-if="getResultCategory(totalScore) === '月球-太空之心'" :to="'/itineraryMoon2'">
            <button class="leaveRwd">查看行程</button></router-link>
            <router-link v-else-if="getResultCategory(totalScore) === '月球-月球巡禮'" :to="'/itineraryMoon'">
            <button class="leaveRwd">查看行程</button></router-link>
            <router-link v-else-if="getResultCategory(totalScore) === '行星繞行'" :to="'/itineraryCombo'">
            <button class="leaveRwd">查看行程</button></router-link>
          </div>
          <button @click="tryAgain" class="tryAgainRwd">再玩一次</button>
        </div> 
        
      </div>
    </div>
  </transition>


  </div>
</template>

<script>


export default {
  data() {
    return {
      showIntro: true,
      showFormElements: false,
      showTest: false,
      showNameInput: false,
      nickname: '',
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
            { text: "不了，我想要先在村子附近探勘環境", score: 10 },
            { text: "好想要一起去，可是又好想看看附近有什麼喔", score: 1 }
          ]
        },
        {
          title: "走到一半時，突然看到一個奇怪的安全帽男手上拿著一個巨大螢光棒，此時你會...?",
          options: [
            { text: "那個螢光棒是什麼~先走過去再說", score: 30 },
            { text: "先報警再說", score: 0 },
            { text: "那男的太可疑了，你好再見", score: 20 },
            { text: "不管那是甚麼，先給我來一支", score: 1 }
          ]
        },
      ],
      currentQuestionIndex: 0,
      selectedOption: null,
      totalScore: 0,
      quizCompleted: false, 
      isMobile: false, 
      isClicked: false,
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

  mounted() {
        //檢常窗口是否是行動裝置
        // this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
  },


  methods: {
    //開場動畫
    startQuiz() {
      this.showIntro = false;
      this.showNameInput = true;
    },

    proceedToQuiz() {
      this.showNameInput = false;
      this.showTest = true;
    },

    finishQuiz() {
      this.showTest = false;
      this.quizCompleted = true;
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

  // 根據總分計算結果級距
    getResultCategory(score) {
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

      // 重置到星戰開頭
      this.showIntro = true;
      this.showNameInput = false;
      this.showTest = false;
    },

    // 獲取背景圖像 URL
    getBackgroundImage() {
       const backgroundImageMap = {
        0: require("@/assets/image/quiz/2.gif"),
        1: require("@/assets/image/quiz/3.gif"),
        2: require("@/assets/image/quiz/5.gif"),
        3: require("@/assets/image/quiz/7.gif"),
       };
       return backgroundImageMap[this.currentQuestionIndex] || "";
    },

    //確定輸入暱稱
    proceedToQuiz() {
    // 檢查暱稱是否存在並且不為空
    if (this.nickname.trim() !== '') {
      if (this.showIntro) {
        this.showIntro = false;
        this.showTest = true;
      } else {
        this.showNameInput = false;
        this.showTest = true; 
      }
    } else {
      alert('請輸入暱稱');
    }
    },
    
    checkMobile() {
    // 根據窗口寬度判斷是否爲行動裝置
        this.isMobile = window.innerWidth <= 768;
      },
    // 判斷是否是行動裝置（小於等於 768px）
    checkMobile() {
        const screenWidth = window.innerWidth;
        this.isMobile = screenWidth <= 768;
      },
      beforeUnmount() {
            // 在元件銷燬前移除窗口大小監聽器
         window.removeEventListener('resize', this.checkMobile);
    },

    handleLabelBoxClick() {
      // this.$refs.labelBox.classList.add('clicked'); 
      this.isClicked = true;
    },

  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/sass/page/_quiz.scss";
</style>
