<template>
  <div class="firstM">
    <img src="@/assets/image/orderProcess/moon.png" alt="">
  </div>
  <div class="title">
    <h1>月球體驗之旅</h1>
    <h2>Moon Exploration Journey</h2>
    <div>{{  }}</div>
    <div>{{  }}</div>
  </div>

  <!-- 輪播 -->
  <div class="carousel">
    <carousel :items-to-show="3" :wrapAround="true" :paginationColor="'#FFF'" class="custom-carousel" :autoplay="3000">
      <slide v-for="(item, index) in imgs" :key="item.index">
        <div class="cimgs">
          <img :src=item.slide alt="輪播圖片">
        </div>
      </slide>

      <template #addons>

        <pagination />
      </template>
    </carousel>
  </div>

  <!-- 月球左右到，介紹、退費、行程 -->
  <section class="place1">
    <section class="introduce-container">
      <div class="introduce">
        <div class="button-container">
          <button :class="btn1" @click="show1F">月球巡禮</button>
          <button :class="btn2" @click="show2F">太空之心</button>
        </div>
        <div class="introduce-p" v-show="show1" >
          <h3>月球巡禮</h3>
          <h4>用你的一小步 見證人類的一大步</h4>
          <p>由地球出發
            一天的航程後，我們將會在第二天登陸月球，朝聖人類的星際里程碑--阿姆斯壯的腳印，之後會遊歷月球上最大的隕石坑---貝利環形山、在滿月海中馳騁、橫越東月大裂谷、參觀台日共構的月球基地，飽覽月球風光後再返回地球。
          </p>
        </div>
        <div class="introduce-p" v-show="show2">
          <h3>太空之心</h3>
          <h4>月球七天六夜奇幻之旅</h4>
          <p>
            行程簡介：抵達在月球基地後，您將穿上太空服，遊覽著名的月球撞擊坑，體驗月面散步的刺激。不僅如此，您還會採集珍貴的岩石和月壤樣本，並進行科學實驗。以及夜晚的天文觀測和無光污染。最後一天，盡情享受自由活動。最後登上太空船，啟程返回地球，締造您太空之旅的完美結局。
          </p>
        </div>
      </div>



    </section>
    <article class="card-planet">
      <div class="location">
        <div class="planet__atmosphere">
          <div class="moon planet__surface"></div>
        </div>
      </div>
    </article>
  </section>

  <!-- 退費政策 -->

  <section class="place2">
    <div class="travelInfo-conatiner">
      <h3>太空旅遊資訊和退費政策</h3>
      <h4>歡迎參加 PLANET VOYAGER太空旅遊團！</h4>
      <ul class="travelInfo">
        <li v-for="(item, index) in tourInfo" :key="id">
          <div class="box">{{ item.id }}</div>
          <div class="itemp">{{ item.p }}</div>
        </li>
        <li>

          <div class="box"> <img src="@/assets/image/orderProcess/icon.svg" alt=""></div>

          <div class="itemp"><strong>行前訓練</strong><br>您須於旅程三個月前參與為期一週的訓練，並於結訓時接受評估，若行前訓練評估未通過則退費70% 。欲了解行前訓練內容，請
            <router-link to="/training">點擊此處 </router-link>。
          </div>


        </li>
        <li>
          <div class="box"><img src="@/assets/image/orderProcess/icon.svg" alt=""></div>
          <div class="itemp"><strong>退費政策</strong><br>出發日期半年以前取消行程可全額退費，前5個月取消退費90%，前4個月取消退費70%，前3個月取消退費60%，三個月內不退費。</div>
        </li>


      </ul>

    </div>
    <article class="card-planet2">
      <div class="location">
        <div class="planet__atmosphere">
          <div class="moon planet__surface"></div>
        </div>
      </div>

    </article>
  </section>

  <!-- 選擇行程 、時間 -->

  <section class="place3">
    <section class="itinerary-cotainer">
      <div class="itinerary-c">
        <h4>選擇行程
          <br>Choose Itinerary
        </h4>
      </div>
      <div class="itinerary-d" @click="af" :class="{ 'chosen': A }">
        <img src="@/assets/image/orderProcess/z.svg" alt="">
        月球巡禮
      </div>
      <div class="itinerary-d" @click="bf" :class="{ 'chosen': B }">
        <img src="@/assets/image/orderProcess/z.svg" alt="">
        太空之心
      </div>
    </section>
    <section class="itinerary-cotainer2">
      <div class="inL">
        <div class="itinerary-c">
          選擇行程時間
          <br>Choose Itinerary
        </div>
      </div>
      <div class="inR">
        <div  v-for="(item ,index) in journeyAll" 
          class="itinerary-d" 
          @click="activeId = item.id " 
          :key="id" 
          :class="{ 'chosen': activeId === item.id }"  
          >
        
          <h5>航程日期: </h5>
          <p>{{item.traveDate}}</p>
          <h5>訓練日期:</h5>
          <p>{{item.traningDate}}</p>

          <p class="space">團位: 10 可售: {{ item.order }} 候補:  {{ item. Alternate }}</p>
        </div>
      </div>
    </section>
    <article class="card-planet3">
      <div class="location">
        <div class="planet__atmosphere">
          <div class="moon planet__surface"></div>
        </div>
      </div>

    </article>

  </section>


  <section class="passengerInfo">


<section class="order-info">
  <div class="p-num">
    乘客人數:
    <select name="" id="" v-model="currentAmount">
      <option v-for="item in options" :value="item.num"> {{ item.num }} </option>
    </select>
  </div>
  <section >
    <orderList v-for="n in currentAmount" :key="n" :numOrder="n" :status="'正取'" :list="formList" @update-data="udpateForm($event, n-1)"></orderList>
  </section>

</section>

<div class="order-detail">
  <div class="order-card">
    <h4>ORDER DETAIL</h4>
    <div class="order-title">{{journey}}</div>
    <div class="order-num">
      <p>旅客人數: {{currentAmount}} 人</p>
    </div>
    <div class="order-money">
      <p>總金額: {{600*currentAmount}} 萬美金 </p>
    </div>
    <div class="order-date">
      <p>航程日期: {{date}}</p>
    </div>
    <div class="click">
      <ButtonFlashBox :buttonText="'確認訂購'" :buttonBottomText="'-pv-'" class="kkss"  @click="checkOrder"></ButtonFlashBox>
    </div>

  </div>
  <div class="exchange-rate">
    <div>快速換算:<input  placeholder="0" v-on:input="exchange" v-model="USD" min="0">萬美元 </div>
    <div>日幣: &nbsp;{{YEN}} &nbsp; 萬元 </div>
    <div>台幣: &nbsp;{{NT}} &nbsp; 萬元 </div>

  </div>
</div>
</section>


  <!-- <h1>{{ one }}</h1>
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
  </div> -->
  <section class="confirm-Order" v-if="orderCheck">
    <div class="confirm-contain">
      <div class="confirm-title">
        <h2>{{ journey }}</h2>
        <h3> 旅客人數: {{ currentAmount }}</h3>
        <h3>旅費金額: {{ 600 * currentAmount }}萬美金</h3>
        <h3>航程日期: {{ date }}</h3>
      </div>
      <div class="confirm-content-container">
        <div class="confirm-content" v-for="(item, index) in formList" :key="index" v-if="formList.length > 0">
          <h2>旅客{{ index + 1 }}</h2>
          <div>姓氏:{{ item.lastName }}</div>
          <div>名字:{{ item.name }}</div>
          <div>性別:{{ item.gender }}</div>
          <div>出生日期:{{ item.birthday }}</div>
          <div>國籍:{{ item.nation }}</div>
          <div>護照號碼:{{ item.passId }}</div>
          <div>訓練服尺寸:{{ item.size }}</div>
          <div>旅位狀態:{{ status }}</div>
          <div> 餐食備註:{{ item.other }}</div>
          <div>艙位號碼: {{ item.seatIndex }}</div>

        </div>

      </div>
      <div class="order-finall">

        <div class="order-finall-btn btn-Cancle" @click="disOrder">修改資料</div>
        <router-link to="OrderSuccess"> <div class="order-finall-btn btn-Check">確認訂購</div></router-link>
       
      </div>

    </div>
    <!-- <div class="confirm-content" >
        <h2>{{ formList[0].name }}</h2>
        <div>旅客1</div>

        <div>姓氏:{{ formList[0].lastName }}</div>
        <div>名字:{{ formList[0].name }}</div>
        <div>性別:{{ formList[0].gender }}</div>
        <div>出生日期:{{ formList[0].birthday }}</div>
        <div>國籍:{{ formList[0].nation }}</div>
        <div>護照號碼:{{ formList[0].passId }}</div>
        <div>訓練服尺寸:{{ formList[0].size }}</div>
        <div>旅位狀態:{{ status }}</div>
        <div> 餐食備註:{{ formList[0].other }}</div>
        <div>艙位號碼: {{ formList[0].seat }}</div>
      </div> -->
    <!-- </div> -->

  </section>
</template>
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
<script src="@/views/js/orderProcess.js"></script>


<style scoped lang="scss">
@import "~@/assets/sass/page/orderProcess.scss";
@import "~@/assets/sass/page/orderProcessP.scss";
</style>

  