<template>
    <main>
        <h1 class="banner">
            <img src="~@/assets/image/index/banner.svg" alt="banner圖片">
        </h1>
        <section class="arrow">
            向下箭頭
        </section>
        <section>
            <div class="landing-title">
                SO FAR,WE HAVE BEEN COMPLETED
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
        <section class="rwd-container">
            <div class="rwd-group">
                <div>本公司第一次出團</div>
                <div><img src="" alt=""></div>
            </div>
        </section>
        <section class="rwd-container">
            <div class="rwd-group">
                <div class="col-9 col-md-4 title-group">
                    <h2style h2ch="關於我們" h2en="ABOUT US"></h2style>
                    <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
                </div>
                <div class="col-9 col-md-4">
                    <img class="aboutus-img" src="~@/assets/image/index/aboutus.svg" alt="太空船艙">
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
        <section>
            <div class="vehicles-title">
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
                        <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
                    </div>
                    <div class="col-11 col-md-7">
                        <img :class="vehicles.h3en" :src="vehicles.img" alt="太空船">
                    </div>
                </div>
            </div>
        </section>
        <section class="rwd-container">
            <div class="tourist-rwd-group">
                <div>
                    <h2style h2ch="團隊介紹" h2en="TOURIST GUIDE"></h2style>
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
                        <swiper-slide v-for="(member, Index) in member" :key="Index" class="swiper-slide">
                            <div class="outside-boder">
                                <div class="memberContent inside-boder">
                                    <img class="member-img" :src="member.imgSvg" :alt="member.name">
                                    <div class="members-info">
                                        <div class="member-text">
                                            <span class="members-name">{{ member.name }}</span>
                                            <span class="members-job">{{ member.nameJob }}</span>
                                        </div>
                                        <ButtonStyle buttonText="EXPLORE" buttonBottomText="-PV-"></ButtonStyle>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </section>
    </main>
</template>

<style  scoped lang="scss">
@import "~@/assets/sass/page/_index";
@import "~@/assets/sass/page/rwd.scss";
</style>
<script>
import { gsap, Power0 } from "gsap";
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
            vehicles: [
                {
                    h3en: 'spaceship',
                    h3enbig: 'SPACESHIP',
                    h3ch: '太空船',
                    img: require("@/assets/image/index/ship.svg"),

                },
                {
                    h3en: 'spacesuit',
                    h3enbig: 'SPACESUIT',
                    h3ch: '太空服',
                    img: require("@/assets/image/index/suit.svg"),
                },
            ],
            member: [
                {
                    name: "DAMON HINES",
                    nameJob: "首席系統工程師",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ENGINEER01.svg"),
                },
                {
                    name: "VICTOR MCKENZIE	",
                    nameJob: "電子、電力計算系統工程師",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ENGINEER02.svg"),
                },
                {
                    name: "ROSE YATES",//女
                    nameJob: "飛行系統設計與分析",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ENGINEER03.svg"),
                },
                {
                    name: "ISABELLE LUNA",//女
                    nameJob: "首席醫官",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL01.svg"),
                },
                {
                    name: "PAISLEE COX",//女
                    nameJob: "太空醫療照護",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL02.svg"),
                },
                {
                    name: "JOEL BECK",
                    nameJob: "健康監控與評估",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL03.svg"),

                },
                {
                    name: "JOURNEY HARVEY", //女
                    nameJob: "指揮長",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ASTRONAUT01.svg"),
                },
                {
                    name: "ETHAN LAMBERT",
                    nameJob: "外部維修",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ASTRONAUT02.svg"),
                },
                {
                    name: "TRISTAN MCKINNEY",
                    nameJob: "航天器操作與導航",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ASTRONAUT03.svg"),
                },
                {
                    name: "JAIDEN HARRISON",
                    nameJob: "月球導遊",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/TourGuide01.svg"),
                },
                {
                    name: "	ADELAIDE SANTOS",//女
                    nameJob: "火星導遊",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/TourGuide02.svg"),

                },
                {
                    name: "BEAU JOSEPH",
                    nameJob: "金星導遊",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/TourGuide03.svg"),
                },
            ]
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

    }

}



</script>