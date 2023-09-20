<template>
    <main>
        <div class="banner"><img src="~@/assets/image/index/banner.svg" alt="banner圖片"></div>

        <div>
            <div>SO FAR,WE HAVE BEEN COMPLETED</div>
            <div>
                <div v-for="(landing, index) in landing" :key="landing.index">
                    <span>{{ landing.people }}</span>
                    <span v-html="landing.total"></span>
                </div>
            </div>
        </div>
        <div>
            <div>本公司第一次出團</div>
            <div><img src="" alt=""></div>
        </div>
        <div>
            <div>
                <h2style h2ch="星際介紹" h2en="DESTINATION"></h2style>
                <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
            </div>
            <div><img src="" alt=""></div>
        </div>
        <marquee direction="right" height="30" scrollamount="5" behavior="alternate">跑馬燈測試</marquee>
        <!-- 方向設定：direction="參數值"；可設定 up（向上）、dun（向下）、left（向左）、right（向右）。
對齊設定：align="參數值"；可設定 top（向上對齊）、midden（垂直至中）、botton（向下對齊）。
速度設定：scrollamount="參數值" ；可設定為數字，通常設定 1~10 的範圍，數字越大跑得越快。
長度設定：height="參數值"；數字，自行設定。
寬度設定：width="參數值"；數字，自行設定。
行為設定：behavior="參數值"；可設定 alternate（來回跑）、slide（跑入後停止）。
背景顏色：bgcolor="參數值"；可設定為顏色的色碼，不設定則沒有顏色。 -->
        <div class="clearfix">
            <ul class="solarsystem">
                <li class="venus"><a href="#venus"><span>Venus</span></a></li>
                <li class="earth"><a href="#earth"><span>Earth<span class="moon"> &amp; Moon</span></span></a></li>
                <li class="mars"><a href="#mars"><span>Mars</span></a></li>
            </ul>
        </div>
        <div>
            <h2style h2ch="科技創新" h2en="THE VEHICLES"></h2style>
            <div>
                <div>
                    <h3>
                        <span class="h3-ch">太空船</span>
                        <span class="h3-en">SPACESHIP</span>
                    </h3>
                    <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
                </div>
                <div><img   alt="太空船"></div>
                <!-- src="~@/assets/image/index/spaceship.svg" -->
            </div>
            <div>
                <h3>
                    <span class="h3-ch">太空服</span>
                    <span class="h3-en">SPACESUIT</span>
                </h3>
                <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
            </div>
            <div><img  alt="太空服"></div>
        </div>
        <div>
            <h2style h2ch="團隊介紹" h2en="TOURIST GUIDE"></h2style>
        </div>
    </main>
</template>

<style  scoped lang="scss">
@import "~@/assets/sass/page/_index";
</style>
<script>
import ButtonStyle from '../components/ButtonFlash.vue';
import h2style from '../components/index_h2.vue';
export default {
    components: {
        ButtonStyle,
        h2style,
    },
    data() {
        return {
            landing: [
                {
                    people: '255',
                    total: 'TOTAL<br>LAUNCHES'
                },
                {
                    people: '217',
                    total: 'TOTAL<br>LANDING'
                },
                {
                    people: '190',
                    total: 'TOTAL<br>REFLIGHTS'
                },
            ]
        }
    }
}

</script>