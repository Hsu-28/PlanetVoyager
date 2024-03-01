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
        <form @submit.prevent="login()">
          <p>請輸入信箱與密碼</p>
          <input type="email" name="memId" v-model="username" placeholder="信箱" id="username" /><br>
          <input type="password" name="memPsw" v-model="pswdddv" placeholder="密碼" id="pswdddv" />
          <button type="submit" class="cybr-btn" @click="signInmem">登入<span aria-hidden class="cybr-btn__glitch">登入</span><span aria-hidden
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
      pswdddv: '',
      signInAPI: null,
      mem_name: this.$store.state.userName,
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
        console.log("帳號密碼："+info);
        console.log("是否登入："+this.$store.state.isLogin);

        fetch(`${this.$store.state.phpPublicPath}logincheck.php`, {
          method: 'POST',
          body: info,
        })
          .then(res => res.json())
          .then((result) => {
            if (result.memId == this.username && result.memPsw == this.pswdddv) {
              let user = JSON.stringify(result.result)
              localStorage.setItem('user', user)
              let id =result.result.mem_no
              console.log('mem-id: '+id);
              this.$store.commit('getinfo', id)
              this.$store.commit('setUserName', id)
              this.$store.commit('setLoginState', true);
              this.$router.push('/loginSuccess')
            } else {
              this.$router.push('/loginFail')
            }
          })
          .catch(error => {
            console.error(error);
          })

      }
    },

    

  //   signInMem() {
  //     const formData = new FormData();

  //     let memId = this.username;
  //     let memPsw = this.pswdddv;
  //     formData.append("memId", memId);
  //     formData.append("mem_psw", mem_psw);
  //     fetch('http://localhost/PV/PlanetVoyager/public/php/loginCheck.php', {
  //       method: "post",
  //       body: formData,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (Array.isArray(data) && data.length === 0) {
  //           alert("帳號或密碼錯誤");
  //           return;
  //         } else if (data[0].mem_state == 1) {
  //           alert("此帳號已遭封鎖");
  //           return;
  //         }
  //         this.signInAPI = data;
  //         // this.$store.state.userName = this.signInAPI[0].mem_name;
  //         this.$store.commit("setUserName", data[0].mem_name);
  //         this.$store.state.memId = data[0].mem_id;
  //         this.$store.state.memPsw = memPsw;
  //         console.log("this.$store.state.userName", this.$store.state.userName);
  //         console.log(this.signInAPI);

  //         this.$store.state.storeShowLogin = false;
  //         this.$store.state.isUserLoggedIn = true;
  //       });
  // },
  },

}
</script>
  
  
<style scoped lang="scss">
  #login{
  padding-top: 30px;
  display: flex;
  justify-content: center;

  .astronaut-pic{
    margin-top: 5%;
    width: 47%;
    position: relative;
    object-fit: contain;
    img{
      max-width: 60%;
    }
  }
  //X光掃描
    .astronaut-pic::after{
      content: "";
      display: block;
      position: absolute;
      z-index: 10;
      top: 0px;
      left: 0px;
      width: 70%;
      height: 3px;
      background-color: #5B13EC;
      box-shadow: 0px 0px 10px 4px #5B13EC;
      animation-name: scannedh;
      animation-duration: 6s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-direction: alternate;
        
      }
    
    
    @keyframes scannedh {
      0% {
        top: 0px;
      }
      50% {
      }
      51% {
      }
      100% {
        top: 80vh;
      }
    }
  .wrap{
    margin-top: 5%;
    width: 357px;
  }
  .login-section{
      padding: 40px;
      font-size: $p2-l;
      font-weight: 700;
      margin: 0 auto;
      border-radius: 0px 20px 20px 20px;
      border: 2px solid $blueL;
      background-color: $blueO;
  }
  .button_group{
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid $blueL;
  }
  #register-btn, #login-btn{
      border-radius: 5px;
      width: 85px;
      font-weight: 700;
      padding-top: 5px;
      padding-bottom: 7px;
  }
  #register-btn{
      cursor: pointer;
      border: 2px solid #01C1FD;
      background:rgba(1, 193, 253, 0.40);
      color: #043260;
      &:hover{
        background-color: $blueL;
      }
  }
  #login-btn{
      border: 2px solid #0DF2F2;
      background: #0DF2F2;
      color: #043260;
  }
  form{
    margin: 0 auto;
    text-align: center;
  }
  input{
      width: 229px;
      border-radius: 5px;
      background-color: rgba(217, 217, 217, 60%);
      margin-top: 25px;
      padding: 5px;
      height: 35px;
      border: none;
      outline: none;
      &:focus{
          outline: 2px solid rgba(13, 242, 242, 88%);
      }
  }
  p{
      color: #0DF2F2;
      margin-top: 20px;
  }
  p:last-of-type{
    font-size: 12px;
    margin-top: 10px;
    cursor: pointer;
}
  .go-register{
      font-size: 12px;
      span{
          color:$white;
      }
  }
  button{
                  
      margin-top: 27px;
      margin-bottom: 20px;
    
  }
  //button效果
  @font-face {
      font-family: Cyber;
      src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
      font-display: swap;
    }
    
    * {
      box-sizing: border-box;
    }
    
    body {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;
      font-family: 'Cyber', sans-serif;
    }
    
    body .cybr-btn + .cybr-btn {
      margin-top: 2rem;
    }
    
    .cybr-btn {
      --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%));
      --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);
      --primary-hue: 260;
      --primary-lightness: 50;
      --color: hsl(0, 0%, 100%);
      --font-size: 16px;
      --shadow-primary-hue: 180;
      --label-size: 9px;
      --shadow-secondary-hue: 60;
      --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
      --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);
      --border: 4px;
      --shimmy-distance: 5;
      --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
      --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
      --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
      --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
      --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
      --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
      --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
      font-family: 'Cyber', sans-serif;
      color: var(--color);
      cursor: pointer;
      background: transparent;
      text-transform: uppercase;
      font-size: var(--font-size);
      outline: transparent;
      letter-spacing: 2px;
      position: relative;
      font-weight: 700;
      border: 0;
      width: 229px;
      height: 50px;
      line-height: 50px;
      transition: background 0.2s;
    }
    
    .cybr-btn:hover {
      --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.8%));
    }
    .cybr-btn:active {
      --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.6%));
    }
    
    .cybr-btn:after,
    .cybr-btn:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      clip-path: var(--clip);
      z-index: -1;
    }
    
    .cybr-btn:before {
      background: var(--shadow-primary);
      transform: translate(var(--border), 0);
    }
    
    .cybr-btn:after {
      background: var(--primary);
    }
    
    .cybr-btn__tag {
      position: absolute;
      padding: 1px 4px;
      letter-spacing: 1px;
      line-height: 1;
      bottom: -5%;
      right: 5%;
      font-weight: normal;
      color: #fff;
      font-size: var(--label-size);
    }
    
    .cybr-btn__glitch {
      position: absolute;
      top: calc(var(--border) * -1);
      left: calc(var(--border) * -1);
      right: calc(var(--border) * -1);
      bottom: calc(var(--border) * -1);
      background: var(--shadow-primary);
      text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
      clip-path: var(--clip);
      animation: glitch 2s infinite;
      display: none;
    }
    
    .cybr-btn:hover .cybr-btn__glitch {
      display: block;
    }
    
    .cybr-btn__glitch:before {
      content: '';
      position: absolute;
      top: calc(var(--border) * 1);
      right: calc(var(--border) * 1);
      bottom: calc(var(--border) * 1);
      left: calc(var(--border) * 1);
      clip-path: var(--clip);
      background: var(--primary);
      z-index: -1;
    }
    
    @keyframes glitch {
      0% {
        clip-path: var(--clip-one);
      }
      2%, 8% {
        clip-path: var(--clip-two);
        transform: translate(calc(var(--shimmy-distance) * -1%), 0);
      }
      6% {
        clip-path: var(--clip-two);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      9% {
        clip-path: var(--clip-two);
        transform: translate(0, 0);
      }
      10% {
        clip-path: var(--clip-three);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      13% {
        clip-path: var(--clip-three);
        transform: translate(0, 0);
      }
      14%, 21% {
        clip-path: var(--clip-four);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      25% {
        clip-path: var(--clip-five);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      30% {
        clip-path: var(--clip-five);
        transform: translate(calc(var(--shimmy-distance) * -1%), 0);
      }
      35%, 45% {
        clip-path: var(--clip-six);
        transform: translate(calc(var(--shimmy-distance) * -1%));
      }
      40% {
        clip-path: var(--clip-six);
        transform: translate(calc(var(--shimmy-distance) * 1%));
      }
      50% {
        clip-path: var(--clip-six);
        transform: translate(0, 0);
      }
      55% {
        clip-path: var(--clip-seven);
        transform: translate(calc(var(--shimmy-distance) * 1%), 0);
      }
      60% {
        clip-path: var(--clip-seven);
        transform: translate(0, 0);
      }
      31%, 61%, 100% {
        clip-path: var(--clip-four);
      }
    }
  }

 @media screen and (max-width:768px) {
  .astronaut-pic{
    display: none;
  }
  .wrap{
    margin-top: 10vh;
  }
 }
</style>