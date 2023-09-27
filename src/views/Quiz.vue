<template>
 <script>
export default {
  data() {
    return {
      showIntro: true,
      showQuestion: false,
      showResultScreen: false,
      introText: "Welcome to the Interstellar Quiz! Get ready for some exciting questions about space travel.",
      currentQuestionIndex: 0,
      questions: [
        {
          title: "What is the fastest spacecraft ever built?",
          options: ["Voyager 1", "New Horizons", "Parker Solar Probe"],
          correctAnswer: "Parker Solar Probe"
        },
        {
          title: "Which planet is known as the 'Red Planet'?",
          options: ["Venus", "Mars", "Jupiter"],
          correctAnswer: "Mars"
        },
        {
          title: "What is the name of the first human to orbit the Earth?",
          options: ["Yuri Gagarin", "Neil Armstrong", "John Glenn"],
          correctAnswer: "Yuri Gagarin"
        }
      ],
      selectedOption: null,
      score: 0
    };
  },
  methods: {
    startQuiz() {
      this.showIntro = false;
      this.showQuestion = true;
      this.introText = "";
    },
    nextQuestion() {
      if (this.showQuestion) {
        this.showQuestion = false;
        this.showResultScreen = false;
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
          this.showQuestion = true;
        }
      }
    },
    checkAnswer() {
      if (this.selectedOption === this.questions[this.currentQuestionIndex].correctAnswer) {
        this.score++;
      }
      this.nextQuestion();
    },
    showResult() {
      if (this.currentQuestionIndex >= this.questions.length && !this.showResultScreen) {
        this.showResultScreen = true;
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Additional styling can be added based on your design preferences */
</style>

</template>