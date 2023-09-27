<template>
  <section class="per-order">
    <div class="order-i">

      <h4>旅客{{ numOrder }}</h4>
      <input type="text" placeholder="姓氏(請以英文輸入)" v-model="form.lastName">
      <input type="text" placeholder="名字"  v-model="form.name">
      <select type="text" placeholder="性別" v-model="form.gender" class="gender">
        <option value="" disabled selected>選擇性別</option>
              <option value="男性" >男性 </option>
              <option value="女性">女性</option>
              <option value="其他">其他</option>
      </select>


      <input type="date" placeholder="出生日期" v-model="form.birthday" class="birthday">
      <input type="text" placeholder="國籍" v-model="form.nation">
      <input type="text" placeholder="護照號碼" v-model="form.passId">
      <div class="c-s">
        <div class="clothe">訓練服尺寸:
          <div class="chose-size">
            <select name="" id="" placeholder="訓練服尺寸" v-model="form.size">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>
        <div class="status">
          {{ status }}
        </div>
      </div>


      <div class="remark">
        餐食備註:<br>
        <textarea name="" id="" cols="50" rows="10" class="remark-t" v-model="form.other">

  </textarea>
      </div>

      <div class="check">
        <input type="checkbox">我已經詳閱健康規定與訂購注意事項。
      </div>
      <div class="upload"> 上傳體檢報告</div>
    </div>

    <div class="order-s">
      <div class="order-c">
        <h4>選擇艙位</h4>
        <p>Choose Cabin Seat</p>
      </div>
      <div class="cabin">
        <!-- <div class="cabin-all">
          <div class="cabin-per" v-for="i in 10" :class="{'disable': alreadySelectSeatIndex.includes(i)}" @click="form.seatIndex = i"></div>
        </div> -->
        <div class="cabin-all">

            <div v-for="i in 10" :key="i" :class="['cabin-per', `class${i}`, { 'disable': alreadySelectSeatIndex.includes(i) }]" @click="form.seatIndex = i"></div>
            <div class="cabin-chose"><span>{{ form.seatIndex }}</span></div>
          </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["numOrder", "status", "list"],
  data() {
    return {
      form: {
        lastName:'',
        name: '',
        gender: '',
        birthday: '',
        nation:'',
        passId:'',
        size:'s',
        other:'',
        seatIndex: "",
      }
    }
  },
  computed: {
    alreadySelectSeatIndex() {
      return this.list.map(v => v.seatIndex);
    },
  },
  watch: {
    form: {
      handler(nVal) {
        this.$emit('update-data', nVal)
      },
      deep: true,
    }
  },
  // emits
}
</script>

<style scoped lang="scss">
@import "~@/assets/sass/page/orderProcess.scss";
</style>


