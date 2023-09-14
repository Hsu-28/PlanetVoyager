<template>
  <!-- <img src="../assets/image/donate/bg.svg" alt="" style="width: 100%;"> -->
  <img src="../assets/image/donate/donate.svg" alt="" style="width: 100%;">
  <div class="donate">
    <section class="preface">
      <div class="down">
        <img src="../assets/image/donate/down.svg" alt="">
      </div>
      <div class="txt">
        <h3>
          太空，是我們人類永遠的夢想，<br>
          我們正站在一個令人振奮的時刻，一個能夠改變世界的時代。<br>
          <br>
          然而，這樣的夢想需要您的支持。<br>
          <br>
          我們將利用這些資源推動太空科技的發展，<br>
          確保星際旅遊變得更加安全、可持續和普及。
        </h3>
      </div>
    </section>
    <section class="content">
      <div class="detail">
        <h2>支持太空，創造未來。</h2>
        <h3>您的捐款將用於太空探索技術的研發、宇航員培訓、環境保護措施以及推動太空旅遊的法規和標準。這不僅是支持一個夢想，更是為我們的子孫後代打開通向星星的大門。</h3>
        <img src="../assets/image/donate/detail01.svg" alt="">
        <h2>星際夢幻之旅 - 捐款抽獎活動</h2>
        <p>您有機會成為太空冒險的幸運者！我們在實現星際夢想的道路上需要您的支持，而現在，捐款不僅可以推動太空探索，還有機會送您上太空！</p>
        <p>每一筆捐款都將是實現太空探索的一步，無論您的捐款金額大小，我們都感激不盡。為了表達謝意，我們將在這次的「星際夢幻之旅」捐款抽獎活動中，送出令人嘆為觀止的獎品。</p>
        <div class="prize">
          <h4>捐款獎品包括：</h4>
          <p>
            ● 太空之旅套餐： 贏得此獎品，您將獲得一趟星際太空旅遊的免費套餐，一生難忘的太空之旅等待著您。<br>
            ● 夜空觀測套件： 這個套件包括高品質的望遠鏡、星空地圖和專業的天文觀測指南，讓您在地球上也能欣賞星星。<br>
            ● 星際冒險寶盒： 這個寶盒中有各種與太空探索有關的禮品，包括太空模型、星星手繪畫、太空書籍等等。<br>
          </p>
        </div>
        <div class="but">
          <ButtonFlashBox :buttonText="'捐款參加抽獎！'" :buttonBottomText="'-pv-'"></ButtonFlashBox>
        </div>
        <p>另外，加入會員還可以根據您的支持程度兌換精美禮品！這是我們對您忠誠支持的感謝，也是實現太空探索的一部分。<br>
          捐款金額擊兌換禮品如以下圖示，歡迎加入Planet Voyager會員計畫，享受這些精彩特典，並一同點亮太空的星星！</p>
        <table>
          <tr>
            <td> </td>
            <td><img style="width: 30px;" src="../assets/image/donate/member.svg" alt=""><br>銀</td>
            <td><img style="width: 30px;" src="../assets/image/donate/member.svg" alt=""><br>金</td>
            <td><img style="width: 30px;" src="../assets/image/donate/member.svg" alt=""><br>白金</td>
            <td><img style="width: 30px;" src="../assets/image/donate/member-top.svg" alt=""><br>鑽石</td>
          </tr>
          <div class="line"></div>
          <tr>
            <td>達標金額</td>
            <td>NT$3,000</td>
            <td>NT$6,000</td>
            <td>NT$20,000</td>
            <td>NT$100,000</td>
          </tr>
          <tr>
            <td>贈品</td>
            <td>鑰匙圈</td>
            <td>棒球帽</td>
            <td>帽T</td>
            <td>太空人頭盔</td>
          </tr>
        </table>
        <div class="bottom">
          <img src="../assets/image/donate/detail02.svg" alt="">
        </div>
      </div>
      <div class="money">
        <div class="sticky">
          <h3>選擇金額</h3>
          <div class="support">
            <h2>我想支持太空，推動科技發展！</h2>
            <div class="choose">
              <button class="amount">3000<br><span>新臺幣</span></button>
              <button class="amount">6000<br><span>新臺幣</span></button>
              <button class="amount">20000<br><span>新臺幣</span></button>
            </div>
            <div class="other">
              新臺幣<input type="text" placeholder="其他金額">
            </div>
            <p>您的捐款將直接支持太空人的訓練、科學實驗以及安全的太空任務執行，讓太空充滿更多的希望和可能性。</p>
            <div class="but2">
              <ButtonFlashBox :buttonText="'我要捐款'" :buttonBottomText="'-pv-'"></ButtonFlashBox>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/sass/page/_donate.scss";
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
      phoneNum: "",
      message: "3000"
    };
  },
}
</script>