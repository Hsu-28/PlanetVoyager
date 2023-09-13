<template>
  <div class="asd">
  <div class="register-form">
      
      
      <svg class="register-title" width="230px" height="40px">
                <path d="M 10,0 Q 0,0 0,10 L 0,40 L 230,40 L 190,0 L 10,0" 
                stroke="rgba(13, 242, 242, 0.88)" />

                <!-- <polygon points="0,0 190,0 230,40 0,40"  stroke="rgba(13, 242, 242, 0.88)"/> -->
                <rect  x="15" y="15" width="10" height="10"/>
                <text x="50"  y="28" 
                  font-weight="700"
                  font-size="20">REGISTER</text>
      </svg>
      
   
    <div class="register-border">
      <div class="register-select">
          <div>註冊</div>
          <router-link to="/login">登入</router-link>
      </div>
      <div class="register-from-con" >  
          <div></div>
          <p>請輸入以下資訊</p> 
          <form action="">
            
              <label ></label>
              <input type="text" placeholder="姓名" required v-model="name">
              <label ></label>
              <input type="text" placeholder="信箱" required v-model="email">
              <label ></label>
              <input type="password" placeholder="密碼" required>
              <label ></label>
              <input type="password" placeholder="再次輸入密碼" required v-model="password">
              <label ></label>
              <input type="text" placeholder="身分證號碼/居留證號" required v-model="idNum">
              <label ></label>
              <input type="text" placeholder="手機號碼" required v-model="phoneNum">
              <label ></label>
              <input type="text" placeholder="收件/聯絡地址" required v-model="address">
              <!-- <button class="cybr-btn">
                送出<span aria-hidden></span>
                <span aria-hidden class="cybr-btn__glitch">送出</span>
                <span aria-hidden class="cybr-btn__tag">-pv-</span>
              </button> -->
              <ButtonFlashBox :buttonText="'送出'" :buttonBottomText="'-pv-'" @click="submitForm">
              </ButtonFlashBox>
          </form>
      </div>
    </div>
  </div>
</div>
<!-- <router-view/> -->

</template>

<style  scoped lang="scss">
@import "~@/assets/sass/page/register.scss";
</style>
<script>
import ButtonFlashBox from '@/components/ButtonFlash.vue' 
export default {
    components: {
      ButtonFlashBox: ButtonFlashBox
    },
  data() {
    return {
      name: "",
      email:"",
      address: "",
      password:"",
      idNum:"",
      phoneNum:""
    };
  } ,
  methods: {
  //  submitForm(){

  //   alert("aaaa");
  //  }
  }
}
 
</script>