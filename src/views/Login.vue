<template>
<<<<<<< HEAD
    <div class="login-section">
      <h3>LOGIN</h3>
      <div class="button_group">
        <button id="register">註冊</button>
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
  <style>
  @import "@/assets/sass/page/_login.scss";
  </style>
=======
 
  <h3>this is login.</h3>
  <Button type="primary">test.  change</Button>
  <router-view/>

</template>
>>>>>>> 1f56db2b3c502e4bb88d476eecaf28ee3602db64
