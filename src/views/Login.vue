<template>
  
<div id="login">
  <img src="~@/assets/image/login/loginastronaut.svg" alt="astronaut">
  <div class="wrap">  
    <div class="login-tag">
      <svg height="45" width="200">
        <text x="10" y="10" fill="black">LOGIN</text>
        <polygon points="0,0 120,0 140,47 0,47"
        style="fill:#5B13EC; stroke:turquoise ;stroke-width:3" />
      </svg>
    </div>  
      <div class="login-section">   
        <div class="button_group">
          <button id="register-btn">
            <router-link to="/register" >
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
