<template>
    <main>
        <h1 class="banner" v-for="(banner, index) in banner" :key="index">
            <img :src="require(`@/assets/image/index/${banner.banner_pic}`)" alt="banner圖片">
        </h1>
        <section class="arrow">
            <img class="clickdown" src="~@/assets/image/index/clickdown.svg" alt="向下引導箭頭">
        </section>
        <section>
            <div class="landing-title">
                SO FAR,WE HAVE COMPLETED
            </div>
            <div>
                <div class="rwd-container">
                    <div class="rwd-group">
                        <div v-for="(landing, index) in landing" :key="index" class="col-4 landing-group">
                            <div :id="landing.containerid">
                                <span :id="landing.groupid">0</span>
                            </div>
                            <span v-html="landing.total" class="landing-text"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="imgcarousel">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(imgcarousel, index) in imgcarousel" :key="index">
                    <div class="imgcarousel-img">
                        <img :src="require(`@/assets/image/index/${imgcarousel.carouse_image}`)" :alt="imgcarousel.carouse_title">
                    </div>
                    <div class="imgcarousel-note">{{imgcarousel.carouse_title }}</div>
                </el-carousel-item>
            </el-carousel>
        </section>
        <section class="rwd-container">
            <div class="rwd-group">
                <div class="col-9 col-md-4 title-group">
                    <h2style h2ch="關於我們" h2en="ABOUT US"></h2style>
                    <router-link to="aboutus">
                        <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
                    </router-link>
                </div>
                <div class="col-9 col-md-4">
                    <img class="aboutus-img" src="~@/assets/image/index/aboutus.png" alt="太空船艙">
                </div>
            </div>
        </section>
        <section>
            <div class="marquee">
                <div class="scroll">
                    <span class="marquee-en">&nbsp; NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS
                        NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS
                        NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS</span>
                    <span class="marquee-en">&nbsp; NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS
                        NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS
                        NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS</span>
                </div>
            </div>
            <div class="marquee">
                <div class="scroll scroll-ch">
                    <span class="marquee-ch">&nbsp; 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息
                        最新消息 最新消息 最新消息 最新消息 最新消息 最新消息</span>
                    <span class="marquee-ch">最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息 最新消息
                        最新消息 最新消息 最新消息 最新消息</span>
                </div>
            </div>
            <div class="marquee">
                <div class="scroll">
                    <span class="marquee-en">&nbsp; NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS
                        NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS
                        NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS</span>
                    <span class="marquee-en">&nbsp; NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS
                        NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS
                        NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS</span>
                </div>
            </div>
            <div>
                <div class="outside-border news-container">
                    <table class="inside-bodrer news-group">
                        <tbody class="tbodyscroll">
                            <tr v-for="(news, news_no) in news" :key="news_no"
                                :class="{ 'active': activeId === news.news_no }" class="news-tr">
                                <td class="news-title" @click="activeId = news.news_no" v-html="news.news_title"></td>
                                <td class="news-date" @click="activeId = news.news_no">{{ news.news_date }}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div v-for="(news, news_no) in news" :key="news_no" v-show="activeId === news.news_no" class="more">
                    <div class="more-base">
                        <div class="more-base-scroll">
                            <span class="close" @click="hideMore">&times</span>
                            <img class="more-img" :src="require(`@/assets//image/index/${news.news_image}`)"
                                :alt="news.news_title">
                            <p>
                                <span class="more-title" v-html="news.news_title"></span>
                            <p class="more-text" v-html="news.news_content">
                            </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="rwd-container">
            <div class="destination-rwd-group">

                <div class="col-5 title-group">
                    <h2style h2ch="星際介紹" h2en="DESTINATION"></h2style>
                    <router-link to="destination">
                        <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
                    </router-link>
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
        <section>
            <div class="title-group vehicles-title">
                <h2style h2ch="科技創新" h2en="THE VEHICLES"></h2style>
            </div>
            <div class="rwd-container" v-for="(vehicles, h3en) in vehicles" :key="h3en">
                <div class="vehicles-rwd-group">
                    <div class="col-11 col-md-4 title-group">
                        <h3>
                            <span class="h3-ch">{{ vehicles.h3ch }}</span>
                            <br>
                            <span class="h3-en">{{ vehicles.h3enbig }}</span>
                        </h3>
                        <router-link :to="{ name: 'technology', hash: `#${vehicles.h3enbig}` }">
                            <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
                        </router-link>
                    </div>
                    <div class="col-11 col-md-7">
                        <img :class="vehicles.h3en" :src="vehicles.img" alt="太空船">
                    </div>
                </div>
            </div>
        </section>
        <section class="rwd-container">
            <div class="tourist-rwd-group">
                <div class="title-group">
                    <h2style h2ch="團隊介紹" h2en="TOURIST GUIDE"></h2style>
                    <router-link to="teamMembers">
                        <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
                    </router-link>
                </div>
                <div class="col-11 col-md-8">
                    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
                        :coverflowEffect="{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="(members, Index) in members" :key="Index" class="swiper-slide">
                            <div class="outside-border">
                                <div class="memberContent inside-border">
                                    <img class="member-img"
                                        :src="require(`@/assets/image/teamMembers/memberSvg/${members.team_memimage}`)"
                                        :alt="members.team_memname">
                                    <div class="members-info">
                                        <span class="members-name">{{ members.team_memname }}</span>
                                        <span class="members-job">{{ members.team_memjob }}</span>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </section>
        <div class="bottom"></div>
    </main>
</template>

<style  scoped lang="scss">
@import "~@/assets/sass/page/_index";
@import "~@/assets/sass/page/rwd.scss";
</style>
<script>
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router';
import { gsap, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
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
            modules: [EffectCoverflow],
        };
    },
    data() {
        return {
            banner: [],
            imgcarousel:[],
            landing: [
                {
                    containerid: 'launchesOutside',
                    groupid: 'launches',
                    people: '255',
                    total: 'TOTAL<br>LAUNCHES'
                },
                {
                    containerid: 'landingOutside',
                    groupid: 'landing',
                    people: '217',
                    total: 'TOTAL<br>LANDING'
                },
                {
                    containerid: 'reflightsOutside',
                    groupid: 'reflights',
                    people: '190',
                    total: 'TOTAL<br>REFLIGHTS'
                },
            ],
            activeId: 1,
            
            news: [],

            vehicles: [
                {
                    h3en: 'spaceship',
                    h3enbig: 'SPACESHIP',
                    h3ch: '太空船',
                    img: require("@/assets/image/index/ship.png"),

                },
                {
                    h3en: 'spacesuit',
                    h3enbig: 'SPACESUIT',
                    h3ch: '太空裝',
                    img: require("@/assets/image/index/suit.png"),
                },
            ],
            members: [],
        }
    },
    methods: {
        hideMore() {
            this.activeId = 0;
        }
    },
    mounted() {

        const num = document.getElementById("launchesOutside");
        const num1 = document.getElementById("landingOutside");
        const num2 = document.getElementById("reflightsOutside");
        const obj = { value: 0 };

        gsap.to(obj, 2, {
            value: 255, ease: Power0.easeIn,
            roundProps: {
                value: 1
            },
            scrollTrigger: {
                trigger: "#launches",
                start: "top 50%",
                end: "bottom 50%",
                toggleActions: "restart none none none"
            },
            onUpdate: function () {
                num.innerHTML = obj.value;
            }
        })

        gsap.to(obj, 2, {
            value: 217, ease: Power0.easeIn,
            roundProps: {
                value: 1
            },
            scrollTrigger: {
                trigger: "#landing",
                start: "top 50%",
                end: "bottom 50%",
                toggleActions: "restart none none none"
            },
            onUpdate: function () {
                num1.innerHTML = obj.value;
            }
        })

        gsap.to(obj, 2, {
            value: 190, ease: Power0.easeIn,
            roundProps: {
                value: 1
            },
            scrollTrigger: {
                trigger: "#reflights",
                start: "top 50%",
                end: "bottom 50%",
                toggleActions: "restart none none none"
            },
            onUpdate: function () {
                num2.innerHTML = obj.value;
            }
        })
    },
    created() {
        axios.get(`${this.$store.state.phpPublicPath}Indexbanner.php`)
            .then(response => {
                this.banner = response.data;
                console.log(this.banner);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get(`${this.$store.state.phpPublicPath}IndexCarousel.php`)
            .then(response => {
                this.imgcarousel = response.data;
                console.log(this. imgcarousel);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get(`${this.$store.state.phpPublicPath}IndexNews.php`)
            .then(response => {
                this.news = response.data;
                console.log(this.news);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get(`${this.$store.state.phpPublicPath}teammembers.php`)
            .then(response => {
                this.members = response.data;
                console.log(this.members);
            })
            .catch(error => {
                console.error(error);
            });
    }
}



</script>