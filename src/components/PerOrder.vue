<!-- <template>
  <section class="per-order">
    <div class="order-i">

      <h4>旅客{{ numOrder }}</h4>
      <input type="text" placeholder="姓氏(請以英文輸入)" v-model="form.name">
      <input type="text" placeholder="名字">
      <input type="text" placeholder="性別">
      <input type="text" placeholder="出生日期">
      <input type="text" placeholder="國籍">
      <input type="text" placeholder="護照號碼">
      <div class="c-s">
        <div class="clothe">訓練服尺寸:
          <div class="chose-size">
            <select name="" id="" placeholder="訓練服尺寸">
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
            </select>
          </div>
        </div>
        <div class="status">
          {{ status }}
        </div>
      </div>


      <div class="remark">
        餐食備註:<br>
        <textarea name="" id="" cols="50" rows="10" class="remark-t">

  </textarea>
      </div>

      <div class="check">
        <input type="checkbox">我已經詳閱健康規定與訂購注意事項。
      </div>
      <button class="upload"> 上傳體檢報告</button>
    </div>

    <div class="order-s">
      <div class="order-c">
        <h4>選擇艙位</h4>
        <p>Choose Cabin Seat</p>
      </div>
      <div class="cabin">
        <div class="cabin-all">
          <div class="cabin-per" v-for="i in 10" :class="{'disable': alreadySelectSeatIndex.includes(i)}" @click="form.seatIndex = i"></div>
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
        name: '',
        seatIndex: -1,
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
</style> -->
<template></template>

