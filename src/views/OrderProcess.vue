<template>
  <!-- <carousel :items-to-show="3" :wrapAround="true">
      <slide v-for="slide in 10" :key="slide">
        {{ slide }}
      </slide>
  
      <template #addons>
        <navigation /> 
        <pagination />
      </template>
    </carousel> -->
  <h1>{{ one }}</h1>
  <hr>
  <h1>{{ two }}</h1>
  <hr>
  <h1>{{ three }}</h1>


  <div>
    這邊是想顯示的部分
  </div>


  <select name="" id="" v-model="currentAmount">
    <option :value="item.num" v-for="item in options"> {{ item.num }} </option>
  </select>


  <div v-for="form in formList">
    <input type="text" v-model="form.name">
  </div>
</template>
  
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ArrayCamera } from 'three'

export default {
  data() {
    return {
      one: "剩下1",
      two: "剩下2",
      three: "剩下3",
      totle: [
        {
          num: '01',

        },
        {
          num: '02',

        }, {
          num: '03',

        }, {
          num: '04',

        }],
      subContent: [

      ],
      amount: 3,
      currentAmount: 1,
      formList: []
    }
  },
  computed: {
    options() {
      return Array.from({ length: this.amount }, (_, i) => {
        return {
          num: i + 1
        }
      })
    },
  },
  watch: {
    currentAmount(nVal) {
      this.setFormList(nVal)
    },
  },
  methods: {
    setFormList(num) {
      this.formList = Array.from({ length: num }, (_, i) => {
        return {
          name: '',
          email: ''
        }
      })
    },
  },
  mounted(){
    this.setFormList(this.currentAmount)
  },
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}



</script>

<style>
h1 {
  font-size: 60px;
}
</style>
  