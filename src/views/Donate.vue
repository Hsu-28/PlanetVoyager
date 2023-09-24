<template>
  <div class="banner">
    <div class="tit">
      <h1>支持星際探險</h1>
      <span>SUPPORT</span>
    </div>
  </div>
  <div class="donate">
    <section class="preface">
      <div class="down">
        <img src="../assets/image/donate/down.svg" alt="">
      </div>
      <div class="txt">
        <h3 class="pre-formatted">{{ Preface }}</h3>
      </div>
    </section>
    <section class="content">
      <div class="detail">
        <h2>{{ detail.title1 }}</h2>
        <h3>{{ detail.content }}</h3>
        <div class="detail-pic">
          <img :src="detail.img1" :alt="detail.alt">
        </div>
        <h2>{{ detail.title2 }}</h2>
        <p>{{ detail.p1 }}</p>
        <p>{{ detail.p2 }}</p>
        <div class="prize">
          <h4>{{ detail.title3 }}</h4>
          <p class="pre-formatted">{{ detail.p3 }}</p>
        </div>
        <div class="btn1">
          <ButtonFlashBox :buttonText="'捐款參加抽獎！'" :buttonBottomText="'-pv-'" class="btn1-ls"></ButtonFlashBox>
        </div>
        <p class="pre-formatted">{{ detail.p4 }}</p>
        <div class="tb-l">
          <table>
            <tr>
              <td v-for="(item, index) in tableL1" :key="index"><img :src="item.imgSrc" :alt="item.alt"
                  class="member"><br>{{
                    item.content }}</td>
            </tr>
            <tr>
              <td v-for="(item, index) in tableL2" :key="index">{{
                item.amount }}</td>
            </tr>
            <tr>
              <td v-for="(item, index) in tableL3" :key="index">{{
                item.giveaway }}</td>
            </tr>
          </table>
        </div>
        <div class="tb-c">
          <table>
            <tr>
              <td v-for="(item, index) in tableC1" :key="index">{{
                item.td }}</td>
            </tr>
            <tr>
              <td v-for="(item, index) in tableC2" :key="index"><img :src="item.imgSrc" :alt="item.alt">
                {{ item.content }}{{ item.td }}
              </td>
            </tr>
            <tr>
              <td v-for="(item, index) in tableC3" :key="index"><img :src="item.imgSrc" :alt="item.alt">
                {{ item.content }}{{ item.td }}
              </td>
            </tr>
            <tr>
              <td v-for="(item, index) in tableC4" :key="index"><img :src="item.imgSrc" :alt="item.alt">
                {{ item.content }}{{ item.td }}
              </td>
            </tr>
            <tr>
              <td v-for="(item, index) in tableC5" :key="index"><img :src="item.imgSrc" :alt="item.alt">
                {{ item.content }}{{ item.td }}
              </td>
            </tr>
          </table>
        </div>
        <div class="bottom">
          <img :src="detail.img2" :alt="detail.alt">
        </div>
      </div>
      <div class="money" id="section1">
        <div class="sticky">
          <h3>{{ money.title1 }}</h3>
          <div class="support">
            <h2>{{ money.title2 }}</h2>
            <div class="choose">
              <button v-for="(item, index) in btn" :key="index" class="amount" @click="updateInput(index, item.amount)">
                {{ item.amount }}<br><span>{{ item.span }}</span>
              </button>
            </div>
            <div class="other">
              新臺幣<input type="text" v-model="inputText" placeholder="其他金額">
            </div>
            <p>{{ money.p1 }}</p>
            <div class="but2">
              <ButtonFlashBox :buttonText="'我要捐款'" :buttonBottomText="'-pv-'" class="btn2-ls"></ButtonFlashBox>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="btn-bottom-c">
      <a href="#section1" class="btn-bottom">我要捐款</a>
    </div>
  </div>
  <router-view />
</template>

<style scoped lang="scss">
@import "@/assets/sass/page/_donate.scss";
</style>
<script src="./js/donate.js"></script>