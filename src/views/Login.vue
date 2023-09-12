<template>
    <div class="login-tag">LOGIN</div>   
   <div class="login-section">
      
      <div class="button_group">
        <button id="register">
          <router-link to="/register" >
            註冊
          </router-link>
        </button>
        <button id="login">登入</button>
      </div>
      <form action="">
        <P>請輸入信箱與密碼</P>
        <input type="email" :value="value" @input="updateValue" placeholder="信箱"/><br>
        <input type="password" :value="value" @input="updateValue" placeholder="密碼"/>
        <button class="cybr-btn">登入<span aria-hidden class="cybr-btn__glitch">登入</span></button>
        <p class="go-register">還沒有帳戶嗎？<span>註冊一個吧！</span></p>
      </form>
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

  <style scoped lang="scss"> //這是正確寫法 這邊一開始沒有scpoed 所以污染
  @import "@/assets/sass/page/_login.scss";
  </style>
