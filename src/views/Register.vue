<template>
  <div class="register-all">
    <div class="register-form">


      <svg class="register-title" width="184px" height="32px">
        <path d="M 10,0 Q 0,0 0,10 L 0,32 L 184,32 L 154,0 L 10,0" stroke="rgba(13, 242, 242, 0.88)" />

        <!-- <polygon points="0,0 190,0 230,40 0,40"  stroke="rgba(13, 242, 242, 0.88)"/> -->
        <rect x="20" y="11" width="8" height="9" />
        <text x="40" y="23" font-weight="700" font-size="16">REGISTER</text>
      </svg>


      <div class="register-border">
        <div class="register-select">
          <div>註冊</div>
          <router-link to="/login">登入</router-link>
        </div>
        <div class="register-from-con">
          <div class="black"></div>
          <p>請輸入以下資訊</p>
          <form @submit.prevent="signup">

            <label></label>
            <input type="text" placeholder="姓名" required v-model="name" name="mem_name">
            <label></label>
            <input type="text" placeholder="信箱" required v-model="email" name="email">
            <label></label>
            <input type="password" placeholder="密碼" required>
            <label></label>
            <input type="password" placeholder="再次輸入密碼" required v-model="password" name="mem_pw">
            <label></label>
            <input type="text" placeholder="身分證號碼/居留證號" required v-model="idNum" name="mem_passport">
            <label></label>
            <input type="text" placeholder="手機號碼" required v-model="phoneNum" name="mem_phone">
            <label></label>
            <input type="text" placeholder="收件/聯絡地址" required v-model="address" name="address">
            <!-- <button class="cybr-btn">
                    送出<span aria-hidden></span>
                    <span aria-hidden class="cybr-btn__glitch">送出</span>
                    <span aria-hidden class="cybr-btn__tag">-pv-</span>
                  </button> -->
            <ButtonFlashBox :buttonText="'送出'" :buttonBottomText="'-pv-'" @click="submitForm" type="submit">
            </ButtonFlashBox>
          </form>
        </div>
      </div>
    </div>
    <div class="imgContent">
      <img class="sapcemanRight" src="../assets/image/register/sapcemanRight.svg" alt="sapcemanRight">
    </div>
    <!-- <img src="../assets/image/register/sapcemanRight.svg" alt="sapcemanRight"> -->
  </div>
  <!-- <router-view/> -->
</template>

<style  scoped lang="scss">
@import "~@/assets/sass/page/_register.scss";
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
      email: "",
      address: "",
      password: "",
      idNum: "",
      phoneNum: ""
    };
  },

  methods: {
    signup() {

      const info = new FormData();
      info.append("mem_name", this.name);
      info.append("email", this.email);
      info.append("address", this.address);
      info.append("mem_pw", this.password);
      info.append("mem_passport", this.idNum);
      info.append("mem_phone", this.phoneNum);
      console.log(info);

      fetch('http://localhost/PV/PlanetVoyager/public/php/register.php', {
        method: 'POST',
        body: info,
      })
        .then(res => res.json())
        .then(() => {
          this.$router.push('/registerv')
        })
        .catch(error => {
          console.error(error);
        })

    }
  }
  //  submitForm(){

  //   alert("aaaa");
  //  }
}

</script>