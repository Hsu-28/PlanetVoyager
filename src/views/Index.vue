<template>
    <main>
        <h1 class="banner">
            <img src="~@/assets/image/index/banner.svg" alt="banner圖片">
        </h1>
        <section class="rwd-container">
            <div class="rwd-group">
                <div>SO FAR,WE HAVE BEEN COMPLETED</div>
                <div>
                    <div v-for="(landing, index) in landing" :key="landing.index">
                        <span>{{ landing.people }}</span>
                        <span v-html="landing.total"></span>
                    </div>
                </div>
            </div>
        </section>
        <section class="rwd-container">
            <div class="rwd-group">
                <div>本公司第一次出團</div>
                <div><img src="" alt=""></div>
            </div>
        </section>
        <section class="rwd-container">
            <div class="rwd-group">
                <div class="col-11 col-md-4">
                    <h2style h2ch="關於我們" h2en="ABOUT US"></h2style>
                    <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
                </div>
                <div class="col-11 col-md-4">
                    <img src="~@/assets/image/index/aboutus.svg" alt="太空船艙">
                </div>
            </div>
        </section>
        <section class="rwd-container">
            <div class="rwd-group">
                <div class="marquee">
                    <div class="scroll">
                        <span class="news"> 最新消息 NEWS 最新消息 NEWS 最新消息 NEWS</span>
                        <span class="news"> 最新消息 NEWS 最新消息 NEWS 最新消息 NEWS</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="rwd-container">
            <div class="rwd-group">

                <div class="destination-group">
                    <h2style h2ch="星際介紹" h2en="DESTINATION"></h2style>
                    <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
                </div>


                <div class="planet-group">
                    <div class="outside">
                        <ul class="solarsystem">
                            <li class="venusring">
                                <planet cardPlanet="venusring-return" planetName="venus "></planet>
                            </li>
                            <li class="earthring">
                                <planet cardPlanet="earthring-return" planetName="earth"></planet>
                                <span class="moonring">
                                    <planet cardPlanet="moonring-return" planetName="moon"></planet>
                                </span>
                            </li>
                            <li class="rocketring">
                                <img class="rocket" src="~@/assets/image/index/rocket.svg" alt="">
                            </li>
                            <li class="marsring">
                                <planet cardPlanet="marsring-return" planetName="mars"></planet>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
        <section class="rwd-container">
            <div class="rwd-group">
                <h2style h2ch="科技創新" h2en="THE VEHICLES"></h2style>
                <div>
                    <div>
                        <h3>
                            <span class="h3-ch">太空船</span>
                            <br>
                            <span class="h3-en">SPACESHIP</span>
                        </h3>
                        <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
                    </div>
                    <div>
                        <img src="~@/assets/image/index/ship.svg" alt="太空船">
                    </div>
                </div>
                <div>
                    <h3>
                        <span class="h3-ch">太空服</span>
                        <br>
                        <span class="h3-en">SPACESUIT</span>
                    </h3>
                    <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
                </div>
                <div>
                    <img src="~@/assets/image/index/suit.svg" alt="太空服">
                </div>
            </div>
        </section>
        <section class="rwd-container">
            <div class="rwd-group">
                <h2style h2ch="團隊介紹" h2en="TOURIST GUIDE"></h2style>
                <div class="team-card">
                    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
                        :coverflowEffect="{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }" :pagination="none" :modules="modules" class="mySwiper">
                        <swiper-slide><img
                                src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide><swiper-slide><img
                                src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide><swiper-slide><img
                                src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide><swiper-slide><img
                                src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide><swiper-slide><img
                                src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide><swiper-slide><img
                                src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide><swiper-slide><img
                                src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide><swiper-slide><img
                                src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide><swiper-slide><img
                                src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide>
                    </swiper>
                </div>
            </div>
        </section>
    </main>
</template>

<style  scoped lang="scss">
@import "~@/assets/sass/page/_index";
</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import ButtonStyle from '../components/ButtonFlash.vue';
import h2style from '../components/IndexH2.vue';
import planet from '../components/Planet.vue';
export default {
    components: {
        ButtonStyle,
        h2style,
        planet,
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            modules: [EffectCoverflow, Pagination],
        };
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
    },
    mounted() {


    }
}





</script>