<template>
  
<div id="login">
  <div class="astronaut-pic">
    <img src="~@/assets/image/login/loginastronaut.svg" alt="astronaut">
  </div>
  <div class="wrap">  
      <svg class="login-tag" height="45" width="200">
        <polygon points="0,0 140,0 160,47 0,47"
        style="fill:#5B13EC; stroke:turquoise ;stroke-width:3" />
        <rect  x="15" y="18" width="10" height="10"/>
        <text x="40" y="33" fill="black" font-size="20" font-weight="700" letter-spacing="2">LOGIN</text>
        
      </svg>
      <div class="login-section">   
        <div class="button_group">
          <button id="register-btn">
            <router-link to="/register">
              註冊
            </router-link>
          </button>
          <button id="login-btn">登入</button>
        </div>
        <form action="">
          <P>請輸入信箱與密碼</P>
          <input type="email" :value="value" @input="updateValue" placeholder="信箱"/><br>
          <input type="password" :value="value" @input="updateValue" placeholder="密碼"/>
          <button class="cybr-btn">登入<span aria-hidden class="cybr-btn__glitch">登入</span><span aria-hidden class="cybr-btn__tag">&emsp;&emsp;-PV-</span></button>
          <p class="go-register">還沒有帳戶嗎？<span>註冊一個吧！</span></p>
          <p>忘記密碼</p>
        </form>
      </div>
   </div>
  </div>  
  </template>
  <script>
    export default {
      data() {
    return {
      headericon: false // 初始化为false，隐藏登录按钮
    };
  },

    props: {
      value: String
    },
    methods: {
      updateValue(newValue) {
        this.$emit('input', newValue);
      }
    }
  };

  </script>


  <style scoped lang="scss"> 
  @import "@/assets/sass/page/_login.scss";
  </style>
