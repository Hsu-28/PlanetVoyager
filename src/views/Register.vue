<template>
  <div class="asd">
  <div class="register-form">
      <div class="register-title">
           <div class="black"></div>
           <h1>REGISTER</h1>
      </div>
    <div class="register-border">
      <div class="register-select">
          <div>註冊</div>
          <router-link to="/login">登入</router-link>
      </div>
      <div class="register-from" >  
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
              <button class="cybr-btn">
                送出<span aria-hidden></span>
                <span aria-hidden class="cybr-btn__glitch">送出</span>
                <span aria-hidden class="cybr-btn__tag">-pv-</span>
              </button>
          </form>
      </div>
    </div>
  </div>
</div>
<router-view/>

</template>

<style  scoped lang="scss">
@import "~@/assets/sass/page/register.scss";
</style>
<script>
export default {
  data() {
    return {
      name: "",
      email:"",
      address: "",
      password:"",
      idNum:"",
      phoneNum:""
    };
  }
}
</script>