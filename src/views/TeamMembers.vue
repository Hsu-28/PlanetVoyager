<template>
    <div class="bigImg">
        <img src="@/assets/image/teamMembers/big.jpg" alt="big-iamge">
        <div class="introduceTitle">
            <p>團隊介紹</p>
            <p>TOURIST GUIDE</p>
        </div>
    </div>
    <div class="jobAll">

        <div class="introduceTeam">
            <!-- <h1>{{ title }}</h1> -->
            <p class="br">{{ titleText }}</p>
        </div>
        <div v-for="(jobContent, jobIndex) in job " :key="'job-' + jobIndex" class="jobContent">
            <div class="jobTitle">
                <p>
                    {{ jobContent.nameC }}
                    <span>
                        {{ jobContent.nameE }}
                    </span>
                </p>

                <p class="br">{{ jobContent.jobText }}</p>
            </div>
            <div class='memberComtent'>
                <!-- <div v-for="(thisjob, index) in memberCount(jobIndex) " :key="index"> -->
                <div v-for="(thisjob, memberIndex) in memberCount(jobIndex)" :key="'member-' + memberIndex"
                    class="individual" @click="detailShow(thisjob)">



                    <div class="imgContent">
                        <img :src="thisjob.imgSvg" alt="團隊照片" class="memberImg">
                    </div><!-- <imgSvg :src="require('../assets/image/teamMembers/memberSvg/ASTRONAUT01.jpg')" alt=""> -->
                    <div class="membersSpan">
                        <p>{{ thisjob.name }}</p>
                        <p class="jobTitleMem">{{ thisjob.nameJob }}</p>
                        <div class="number">{{ thisjob.number }}</div>
                    </div>
                </div>
            </div>

            <div v-if="showDetail" class="allDetail" @click="detailClose">
                <div class="memberDetail" @click.stop>
                    <div class="blur"></div>
                    <button @click="detailClose">CLOSE</button>
                    <p class="clickName">{{ detailContent.name }}</p>
                    <p class="clickTitle">{{ detailContent.nameJob }}</p>
                    <div class="memberContent">
                        <div class="detailImg">
                            <img :src="detailContent.imgSvg" alt="團隊照片" class="memberImg">
                        </div>
                        <p class="br">{{ detailContent.text }}</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
    <!-- <div class="footerImg">
        <img  src="../assets/image/teamMembers/footerImg.svg" alt="">

    </div> -->

    <router-view />
</template>
<style  scoped lang="scss">
@import "~@/assets/sass/page/_teamMembers.scss";
</style>
<script>
import axios from'axios';
export default {
    components: {

    },
    data() {
        return {
            phpData: '',
            title: "團隊介紹",
            titleText: `我們的團隊由一群對太空充滿熱情的專家組成，\n願景是將人類帶入太空，體驗浩渺宇宙的魅力。\n相信PlanetVoyager，\n讓我們帶領您進入夢想中的宇宙冒險吧！`,
            showDetail: false,
            detailContent: [],
            job: [
                {
                    nameC: "工程師",
                    nameE: "ENGINEER",
                    jobText: `工程團隊致力於確保每一次的太空旅行都安全，負責設計和優化宇宙飛船的結構。\n除了飛船本身，工程師也會參與太空站和其他基礎設施的開發和維護。`,
                },
                {

                    nameC: "航太醫官",
                    nameE: "AEROSPACE MEDICAL OFFICER",
                    jobText: `負責醫學篩查、制定太空適應策略，並於旅程中監控生命體徵。\n此外，他們提供急救及心理支持，並協助研究太空對人體的影響。`,
                },
                {
                    nameC: "太空人",
                    nameE: "ASTRONAUT",
                    jobText: `承擔著領導和執行太空任務的重責大任。\n涵蓋飛船操作、科學研究、生存技能及急救知識等。`,
                },
                {
                    nameC: "太空導遊",
                    nameE: "SPACE TOUR GUIDE",
                    jobText: `負責引導和教育旅客在宇宙旅程中的所有活動。\n確保旅客太空行程的安全，解說太空現象和歷史，提供太空生活技能培訓。`,
                },

            ],
            member: [
                {
                    number: "001",
                    name: "DAMON HINES",
                    nameJob: "首席系統工程師",

                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ENGINEER01.svg"),
                    text: `姓名：DAMON HINES\n
                    學歷：麻省理工學院航天工程系博士\n
                    經歷：於太空界超過20年，曾經參與多次火星和月球的探測任務，並負責核心系統的設計和維護，且多次獲得國際航天獎項。`,
                },
                {
                    number: "002",
                    name: "VICTOR MCKENZIE	",
                    nameJob: "電子、電力計算系統工程師",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ENGINEER02.svg"),
                    text: `姓名：VICTOR MCKENZIE\n
                    學歷：斯坦福大學航天電力系博士。\n
                    經歷：MCKENZIE研發的節能太空電力系統已多次在太空探險中得到應用。他負責監督和創新所有航天器的電子系統，確保在太空的極端環境中都能保持最佳性能。`,
                },
                {
                    number: "003",
                    name: "ROSE YATES",//女
                    nameJob: "飛行系統設計與分析",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ENGINEER03.svg"),
                    text: `姓名：ROSE YATES\n
                    學歷：美國史丹福大學博士\n
                    經歷：YATES早期在印度空間研究組織(ISRO)工作，在飛行系統設計和分析方面建立了卓越的聲譽，這也使她成為火星探索團隊的核心成員。`,
                },
                {
                    number: "001",
                    name: "ISABELLE LUNA",//女
                    nameJob: "首席醫官",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL01.svg"),
                    text: `姓名：ISABELLE LUNA\n
                    學歷：哈佛醫學院太空醫學系博士\n
                    經歷：LUNA專注於研究微重力環境下對人體生理的影響，並成為太空醫學領域的先鋒，她曾成功提出數個創新方案以增強航天員在長期太空任務中的生理和心理健康。`,
                },
                {
                    number: "002",
                    name: "PAISLEE COX",//女
                    nameJob: "太空醫療照護",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL02.svg"),
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL02.svg"),
                    text: `姓名：PAISLEE COX\n
                    學歷：麻省理工學院太空醫學系博士\n
                    經歷：PAISLEE在多次國際太空任務中擔任醫療照護專家，她的專業知識不僅止於太空醫學，她還熟悉跨文化醫療照護，能夠針對不同文化背景的航天員提供個性化的醫療方案。`,
                },
                {
                    number: "003",
                    name: "JOEL BECK",
                    nameJob: "健康監控與評估",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL03.svg"),
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL03.svg"),
                    text: `姓名：JOEL BECK\n
                    學歷：加州理工學院生物醫學工程系博士\n
                    經歷：BECK深耕於遙感健康監測技術領域，尤其針對太空環境，並多次參與國際太空站的健康監控任務。`,
                },
                {
                    number: "001",
                    name: "JOURNEY HARVEY", //女
                    nameJob: "指揮長",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ASTRONAUT01.svg"),
                    text: `姓名：JOURNEY HARVEY\n
                    學歷：莫斯科航空學院飛行員\n
                    經歷：超過10000小時的太空飛行時間，為國際太空站的主要操作員，參與多次關鍵任務。並於PlanetVoyager擔任太空人指揮長。`,
                },
                {
                    number: "002",
                    name: "ETHAN LAMBERT",
                    nameJob: "外部維修",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ASTRONAUT02.svg"),
                    text: `姓名：ETHAN LAMBERT\n
                    學歷：悉尼科技大學機械工程系博士\n
                    經歷：曾於NASA擔任太空機械維護的職位，並且是首批專門受訓於太空外部維修的工程師之一，曾多次成功完成國際太空站的緊急維修任務。`,
                },
                {
                    number: "003",
                    name: "TRISTAN MCKINNEY",
                    nameJob: "航天器操作與導航",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ASTRONAUT03.svg"),
                    text: `姓名：TRISTAN MCKINNEY\n
                    學歷：加州理工學院航天系博士\n
                    經歷：MCKINNEY擁有廣泛的太空導航和航天器操作經驗，參與過多件國際太空任務，負責設計和測試太空船的導航和飛行系統。`,
                },
                {
                    number: "001",
                    name: "JAIDEN HARRISON",
                    nameJob: "月球導遊",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/TourGuide01.svg"),
                    text: `姓名：JAIDEN HARRISON\n
                    學歷：羅馬大學天文學系博士\n
                    經歷：擁有15年的月球探索經驗，JAIDEN是國際上少數參與實地月球探險的專家之一，他深厚的知識和現場經驗使他成為月球地質和歷史的權威。`,
                },
                {
                    number: "002",
                    name: "	ADELAIDE SANTOS",//女
                    nameJob: "火星導遊",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/TourGuide02.svg"),
                    text: `姓名：ADELAIDE SANTOS\n
                    學歷：加州理工學院火星地質與氣候學系博士\n
                    經歷：ADELAIDE參與了多次火星探索任務，是業界公認的火星環境專家。透過她的專業解說，遊客能深入了解火星的地質、氣候和可能的生命跡象。`,
                },
                {
                    number: "003",
                    name: "BEAU JOSEPH",
                    nameJob: "金星導遊",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/TourGuide03.svg"),
                    text: `姓名：BEAU JOSEPH\n
                    學歷：加州大學金星大氣科學博士\n
                    經歷：JOSEPH憑藉超過12年對金星的研究，多次參與國際性的金星探測任務，並擔任主要研究員。能夠帶領遊客近距離感受到金星的獨特魅力和未知之謎。`,
                },

            ],
        };
    },
    methods: {
        memberCount(jobIndex) {
            const start = jobIndex * 3;
            const end = start + 3;
            return this.member.slice(start, end);

        },
        detailShow(selectedMember) {
            this.showDetail = true;
            this.detailContent = selectedMember;
            // document.body.classList.add('no-scroll');

        }, detailClose() {
            this.showDetail = false;
            this.detailContent = '';
            // document.body.classList.remove('no-scroll');

        }
    },
    // created() {
    //     axios.get(http://localhost/Backend/teamintro.php){
    //         .then(response => {
    //     this.phpData = response.data;
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })
        
    // }
}
</script>