<template>
  <div id="login">
    <div class="astronaut-pic">
      <img src="~@/assets/image/login/loginastronaut.svg" alt="astronaut">
    </div>
    <div class="wrap">
      <svg class="login-tag" height="45" width="200">
        <polygon points="0,0 140,0 160,47 0,47" style="fill:#5B13EC; stroke:turquoise ;stroke-width:3" />
        <rect x="15" y="18" width="10" height="10" />
        <text x="40" y="33" fill="black" font-size="20" font-weight="700" letter-spacing="2">LOGIN</text>

      </svg>
      <div class="login-section">
        <div class="button_group">
          <router-link to="/register">
            <button id="register-btn">
              註冊
            </button>
          </router-link>
          <button id="login-btn">登入</button>
        </div>
        <form @submit.prevent="login">
          <p>請輸入信箱與密碼</p>
          <input type="email" name="memId" v-model="username" placeholder="信箱" id="username" /><br>
          <input type="password" name="memPsw" v-model="pswdddv" placeholder="密碼" id="pswdddv" />
          <button type="submit" class="cybr-btn">登入<span aria-hidden class="cybr-btn__glitch">登入</span><span aria-hidden
              class="cybr-btn__tag">&emsp;&emsp;-PV-</span></button>
          <p class="go-register">還沒有帳戶嗎？<router-link to="/register"><span>註冊一個吧！</span></router-link></p>
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
      username: '',
      pswdddv: ''
    };
  },
  methods: {

    login() {
      if (this.username == '' || this.pswdddv == '') {
        alert('請輸入帳號和密碼')
      } else {
        const info = new FormData();
        info.append("memId", this.username);
        info.append("memPsw", this.pswdddv);
        console.log(info);

        fetch('http://localhost/PV/PlanerVoyager/public/php/logincheck.php', {
          method: 'POST',
          body: info,
        })
          .then(res => res.json())
          .then((result) => {
            if (result.memId == this.username && result.memPsw == this.pswdddv) {
              this.$router.push('/loginSuccess')
            } else {
              this.$router.push('/loginFail')
            }
          })
          .catch(error => {
            console.error(error);
          })

      }
    }
  },
}
</script>
  
  
<style scoped lang="scss"> @import "@/assets/sass/page/_login.scss";
</style>