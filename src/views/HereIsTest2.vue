<template>
    <div id="login">

        <!-- <div class=" d-order">
            
        </div> -->
        <!-- <div class="astronaut-pic">
            <img src="~@/assets/image/login/loginastronaut.svg" alt="astronaut">
        </div>
        <div class="astronaut-pic glitchL c-glitch">
            <div class="c-glitch__img"></div>
            <div class="c-glitch__img"></div>
            <div class="c-glitch__img"></div>
            <div class="c-glitch__img"></div>
            <div class="c-glitch__img"></div>
        </div> -->
      <div class="astronaut-pic ">
        <div class="c-glitch__img"></div>
            <div class="c-glitch__img"></div>
            <div class="c-glitch__img"></div>
            <div class="c-glitch__img"></div>
            <div class="c-glitch__img"></div>
      </div>
        <div class="wrap">
            <svg class="login-tag" height="45" width="200">
                <polygon points="0,0 140,0 160,47 0,47" style="fill:#5B13EC; stroke:turquoise ;stroke-width:3" />
                <rect x="15" y="18" width="10" height="10" />
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
                    <input type="email" v-model="userid" @input="updateValue" placeholder="信箱" /><br>
                    <input type="password" v-model="userpswvv" @input="updateValue" placeholder="密碼" />
                    <button class="cybr-btn" @click="signin">登入<span aria-hidden class="cybr-btn__glitch">登入</span><span
                            aria-hidden class="cybr-btn__tag">&emsp;&emsp;-PV-</span></button>
                    <p class="go-register">還沒有帳戶嗎？<router-link to="/register"><span>註冊一個吧！</span></router-link></p>
                    <p>忘記密碼</p>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie';
export default {
    data() {
        return {
            userid: '',
            userpswvv: '',
            token: '',
            useridtrue: 'test@gmail.com',
            userpswtrue: '1111',
            headericon: false,

            //test
            username: 'mor_2314',
            pswdddv: '83r5^_'
        };
    },
    methods: {
        // loginCheck(){
        //       if(this.userid == this.useridtrue && this.userpswvv == this.userpswtrue){
        //         this.$router.push('/loginSuccess')
        //       }else{
        //         this.$router.push('/loginFail')
        //       }
        //     },

        signin() {
            console.log(1);

            // console.log(this.username);
            // console.log(this.pswdddv);
            fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
                body: JSON.stringify({
                    username: this.username,
                    password: this.pswdddv
                })
            })
                .then(res => res.json())
                .then(json => {
                    if (json && json.token) {
                        localStorage.setItem('token', json.token)
                        this.$router.push('/loginSuccess')
                    }
                })
                .catch(error => {
                    console.error(json)
                    //....
                })
            //   fetch('https://fakestoreapi.com/auth/login',{
            //         method:'POST',
            //         body:JSON.stringify({
            //             username: "mor_2314",
            //             password: "83r5^_"
            //         })
            //     })
            //         .then(res=>res.json())
            //         .then(json=>{
            //           if(json.token){
            //             localStorage.setItem('token', json.token)
            //             this.$router.push('loginSuccess')
            //           }
            //         })
            //       }

            // },
        },
        //   {
        //   handleLogin() {
        //     const token = 'asds32adsavrAS3Fadf5567' // token本身就是加密過的字串，隨意
        //     let username = this.userid
        //     let password = this.userpswvv
        //     // 帳號密碼需驗證不能為空
        //     if (username !== '' && password !== '') {
        //       this.loginForm.token = token
        //     } else {
        //       alert('帳號密碼不能為空')
        //     }

        //     Cookies.set('login', JSON.stringify(this.loginForm), { expires: 1 })
        //     console.log(this.loginForm)

        //     // cookie當中有token被設置才能改變路由
        //     if (Cookies.get('login') && this.loginForm.token) {
        //       this.$router.push({name: 'Dashboard'})
        //     }
        //   },

        //   // 將Cookies清除的測試用button事件
        //   removeCookie() {
        //     Cookies.remove('login')
        //   }
        // }
        //   },
        // }
    }
}
</script>
    
    
<style scoped lang="scss"> @import "@/assets/sass/page/_login.scss";
 @import "@/assets/sass/component/_glitchLogin.scss";
</style>
    