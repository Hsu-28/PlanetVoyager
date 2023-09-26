<template>
    <main>
        <h1 class="banner">
            <img src="~@/assets/image/index/banner.svg" alt="banner圖片">
        </h1>
        <section class="arrow">
            <img class="clickdown" src="~@/assets/image/index/clickdown.svg" alt="向下引導箭頭">
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
        <section class="imgcarousel">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item, index) in imgcarousel" :key="index">
                    <div class="imgcarousel-img">
                        <img :src="item.img" :alt="item.note">
                    </div>
                    <div class="imgcarousel-note">{{ item.note }}</div>
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
                    <img class="aboutus-img" src="~@/assets/image/index/aboutus.svg" alt="太空船艙">
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
                        <tbody>
                            <tr v-for="(news, number) in news" :key="number" :class="{ 'active': activeId === news.id }"
                                class="news-tr">
                                <td class="news-title" @click="activeId = news.id" v-html="news.title"></td>
                                <td class="news-date" @click="activeId = news.id">{{ news.date }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-for="(news, number) in news" :key="number" v-show="activeId === news.id" class="more">
                    <div class="more-inf">
                        <div class="more-base">
                            <div class="more-base-scroll">
                                <span class="close" @click="hideMore">&times</span>
                                <img class="more-img" :src="news.img" :alt="news.title">
                                <p>
                                <span class="more-title" v-html="news.title"></span>
                                <p class="more-text" v-html="news.info">
                                </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="rwd-container">
            <div class="destination-rwd-group">

                <div class="col-5 title-group">
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
                            <div class="outside-border">
                                <div class="memberContent inside-border">
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
            imgcarousel: [
                {
                    note: '航空基地',
                    img: require("@/assets/image/index/carouselbase.jpg"),
                },
                {
                    note: '第一次出航',
                    img: require("@/assets/image/index/carouselman.jpg"),
                },
                {
                    note: '第一次探勘月球',
                    img: require("@/assets/image/index/carouselmoon.jpg"),
                },
                {
                    note: '火箭發射',
                    img: require("@/assets/image/index/carouselrocket.jpg"),
                },
                {
                    note: '太空漫步',
                    img: require("@/assets/image/index/carouselspace.jpg"),
                }
            ],
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
            news: [
                {
                    id: '1',
                    title: '太空探索的里程碑：<br>人類登陸月球',
                    date: '2023-03-17',
                    info: '自從古代，月亮一直是人類夜空中的夢想和奇迹。它在眾多文化的神話和故事中佔有重要的地位。但在1969年7月20日，月亮不再是遙不可及的天體，當阿波羅11號的阿姆斯特朗踏上其表面時，它成為了人類探索的里程碑。<br>這次的月球著陸不僅是一個技術上的壯舉，更是人類意志力和決心的象徵。從肯尼迪總統於1961年設定的目標，到真正達成此目標，整個過程充滿了挑戰和不確定性。但透過無數的試驗和失敗，科學家、工程師和太空人成功地克服了所有困難，完成了這項史無前例的任務。<br>這次的成功登陸也開啟了後續的月球探索任務。它不僅讓我們對月球有了更深入的認識，也為未來的宇宙探索打下了堅實的基礎。總之，阿波羅11號的成功登陸是人類太空史上最偉大的一刻，也是我們不斷追求夢想和突破極限的最佳證明。<br>',
                    img: require("@/assets/image/index/ship.svg"),
                },
                {
                    id: '2',
                    title: '火星殖民：<br>人類的下一步',
                    date: '2023-04-20',
                    info: '自從人類首次觀望星空以來，我們就一直夢想著遠足於其他星球。近年來，隨著科技的進步和太空探索的蓬勃發展，火星殖民的話題已經引起了大家的廣泛關注。<br>但是，火星上的生活真的可能嗎？火星，被稱為:紅色星球，與地球有著許多相似之處。它的白天和夜晚的長度與地球相近，而且其季節的變化也與我們的藍色星球類似。<br>但這只是表面的相似。火星的大氣主要由二氧化碳組成，氣候寒冷，表面充滿了沙塵暴，這些都使得火星的生存環境非常嚴酷。儘管有這些挑戰，但科學家和工程師已經開始計劃如何在火星上建立殖民地。<br>透過先進的太空技術，例如生命維持系統和居住艙，我們可以在火星上建立一個封閉的生態環境。<br>此外，火星的地下水冰資源也為我們提供了飲用水和生產氧氣的可能性。目前，許多私人企業和國家太空機構都已經展開了火星探索任務。它們的目標不僅是尋找火星上的生命跡象，更重要的是為未來的火星殖民做好準備。總的來說，火星殖民是人類太空探索的重要里程碑。<br>雖然挑戰重重，但隨著科技的發展，這一夢想將不再遙不可及。',
                    img: require("@/assets/image/index/ship.svg"),
                },
                {
                    id: '3',
                    title: '太空垃圾：<br>宇宙中的隱藏危機',
                    date: '2023-05-16',
                    info: '自從1957年蘇聯發射了第一顆人造衛星「史波特尼克1號」以來，人類開始了宇宙探索的新篇章。但與此同時，我們也意外地在太空中留下了大量的碎片和殘骸，這些碎片稱為「太空垃圾」。隨著太空探索和利用的持續擴大，太空垃圾問題已成為我們必須正視的隱藏危機。<br>太空垃圾不只是舊的人造衛星或火箭部件，它還包括碎片、失效的儀器、漆屑、冷凝的微小液滴等等。這些碎片在低地球軌道上以每小時數萬公里的速度運行，使它們具有巨大的破壞性。即使是小到幾公分的碎片，由於其高速移動，也足以對太空中的衛星或宇宙船造成嚴重損害。<br>隨著每次太空發射活動，太空垃圾的數量也在逐步增加。當這些碎片彼此碰撞時，它們可能會分裂成更多更小的碎片，從而引發一連串的連鎖反應，這一現象被稱為「克essler症候群」。如果不加控制，低地球軌道可能會充斥著大量的太空碎片，嚴重威脅到未來的太空活動。<br目前，國際上已有多項協議和建議，呼籲各國採取措施減少太空垃圾的產生，並優先發射那些設計有自我除役能力的衛星。然而，只有少數國家遵循這些建議，許多發射任務仍然沒有考慮到太空碎片的問題。<br>除了預防措施外，科學家和工程師也在研究如何清理已經存在的太空垃圾。其中一些想法包括使用巨大的太空網捕捉碎片，或使用雷射束將其推出軌道。這些技術仍然處於初步階段，但它們帶來了希望，也許未來我們能夠解決這一迫在眉睫的問題。<br>總的來說，太空垃圾問題是人類太空探索所面臨的重要挑戰之一。為了確保太空的可持續利用，我們需要加強國際合作，共同努力減少太空垃圾的產生，並探索清理現有垃圾的有效方法。只有這樣，我們才能確保未來的太空探索活動能夠安全、高效地進行。<br>',
                    img: require("@/assets/image/index/ship.svg"),
                },
                {
                    id: '4',
                    title: '黑洞的神秘之旅',
                    date: '2023-06-27',
                    info: '在宇宙的深處，存在著一個神秘且令人著迷的天體——黑洞。它擁有強大的引力，以至於任何物體、甚至光也不能從其逃脫。黑洞的存在早在20世紀初便被預測，但真正的證據直到近年才被確認。<br>儘管我們對黑洞知之甚少，但這並不妨礙我們對其的好奇心。科學家一直在探索黑洞的性質和起源，以及它們在宇宙中的角色。透過對這些神秘天體的研究，我們可以更好地了解宇宙的結構和演化。<br>近年來，隨著觀測技術的進步，我們已經獲得了許多有關黑洞的新發現。例如，我們已經觀測到了超大質量黑洞在銀河中心的存在，並透過重力波觀測到了黑洞的合併事件。這些發現不僅豐富了我們對黑洞的認識，也為我們提供了研究宇宙的新方法。',
                    img: require("@/assets/image/index/ship.svg"),
                },
                {
                    id: '5',
                    title: '宇宙中的生命：<br>外星人的可能性',
                    date: '2023-09-10',
                    info: '人類一直對宇宙中是否存在其他生命形式抱有著深厚的興趣。隨著太空技術和天文學的進步，我們已經開始尋找外星生命的跡象。<br>近年來，科學家已經在其他星系和行星上發現了可能支持生命存在的條件。例如，在某些太陽系外行星上，我們已經發現了可能存在液態水和適合生命生存的大氣。這些發現使得尋找外星生命的可能性變得更加真實。<br>然而，尋找外星生命並不容易。儘管我們已經發現了許多可能存在生命的星球，但我們仍然沒有找到確鑿的證據。但這並不意味著我們應該放棄。透過進一步的研究和觀測，我們有望揭開宇宙中生命的奧秘。<br>在尋找外星生命的過程中，我們不僅可以更好地了解宇宙，也可以更加珍惜我們自己的星球和生命。畢竟，無論宇宙中是否存在其他生命形式，我們都是這片浩瀚宇宙中的一部分。',
                    img: require("@/assets/image/index/ship.svg"),
                }
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

    }
}



</script>