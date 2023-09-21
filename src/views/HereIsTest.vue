<template>
  <!-- 要用我的 -->
  <div>
    <h1 @mouseover="triggerScramble">{{ displayText }}</h1>
  </div>
  <img src="@/assets/image/orderProcess/moonc1.svg" alt="">
</template>
  
<script scoped>
export default {
  props: {
    text: {
      type: String,
      default: '關於我們 ABOUT US'
    }
  },
  data() {
    return {
      speed: 12,//有
      shuffleCount: 6,//有
      random: "*&%!1234567ABC$/+=XZ?\\|7<>˙",//有
      LIMIT: 0,//有
      shuffle: 0,//有
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
    triggerScramble() {
      this.shuffle = 0;
      this.mojicount = 0;
      this.displayText = '';
      this.scramble();
    }
  },
  mounted() {
    setInterval(() => {
      this.triggerScramble();
    }, 3000);
  }
};
</script >
<style scoped>
h1 {
  font-size: 60px;
  color: white;
}
</style>