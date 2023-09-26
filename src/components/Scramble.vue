<template>
    <!-- 要用我的 -->

      <h1 @mouseover="triggerScramble" @mouseout="cancelScramble">{{ displayText }}</h1>

  </template>
    
  <script scoped>
  export default {
    props: {
      text: {
        type: String,
        default: ' '
      }
    },
    data() {
      return {
        speed: 12,
        shuffleCount: 6,
        random: "*&%!1234567ABC$/+=XZ?\\|7<>˙",
        LIMIT: 0,
        shuffle: 0,
        mojicount: 0,
        displayText: '',
        timer: null,
      };
    },
    methods: {
      clear() {
        clearTimeout(this.timer)
      },
      scramble() {
        this.LIMIT =this.$props.text.length 
        const PROGRESS = this.displayText.length;
  
        if (PROGRESS < this.LIMIT) {
          if (this.shuffle < this.shuffleCount) {
            const mix = Math.floor(Math.random() * this.random.length);
            const output = this.$props.text.slice(0, this.mojicount);
            this.displayText = output + this.random[mix];
            this.shuffle++;
            this.timer = setTimeout(this.scramble, this.speed);
          } else {
            this.mojicount++;
            this.shuffle = 0;
            this.scramble();
          }
        } else {
          this.displayText = this.$props.text;
        }
      },
      // triggerScramble() {
      //   setTimeout(() => {
      //     this.shuffle = 0;
      //   this.mojicount = 0;
      //   this.displayText = '';
      //   this.scramble();
      //   }, 2000);  
      // },

  triggerScramble() {
    this.cancelTimeout = setTimeout(() => {
      this.shuffle = 0;
      this.mojicount = 0;
      this.displayText = '';
      this.scramble();
    }, 800);
  },
  cancelScramble() {
    if (this.cancelTimeout) {
      clearTimeout(this.cancelTimeout);
      this.cancelTimeout = null;
    }
  },
    },

      mounted() {
      
        this.triggerScramble();
      ;
    }
  };
  </script >