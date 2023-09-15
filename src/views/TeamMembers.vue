<template>
    <div class="bigImg">
        <img src="@/assets/image/teamMembers/big.svg" alt="big-iamge">
        <div>
            <p>團隊介紹</p>
            <p>TOURIST GUIDE</p>
        </div>
        <div class="introduceTeam">
            <h1>{{ title }}</h1>
            <p>{{ titleText }}</p>
        </div>
    </div>
    <div v-for="(jobContent, jobIndex) in job " :key="'job-' + jobIndex">
        <div>
            <span>{{ jobContent.nameC }}</span>
            <span>{{ jobContent.nameE }}</span>
            <p>{{ jobContent.jobText }}</p>
        </div>
        <div>
            <!-- <div v-for="(thisjob, index) in memberCount(jobIndex) " :key="index"> -->
            <div v-for="(thisjob, memberIndex) in memberCount(jobIndex)" :key="'member-' + memberIndex">

                <!-- <imgSvg :src="thisjob.imgSvg" alt=""> -->
                <!-- <imgSvg :src="require(thisjob.imgSvg)" alt=""> -->
                <img :src="thisjob.imgSvg" alt="團隊照片" class="memberImg">
                <!-- <imgSvg :src="require('../assets/image/teamMembers/memberSvg/ASTRONAUT01.svg')" alt=""> -->

                <span>{{ thisjob.name }}</span>
                <span>{{ thisjob.nameJob }}</span>

            </div>
        </div>


        <div>

        </div>
    </div>
    <!-- <imgSvg src="../assets/image/teamMembers/memberSvg/MEDICAL01.svg" alt=""> -->
    <router-view />
</template>
<style  scoped lang="scss">
@import "~@/assets/sass/page/_teamMembers.scss";
</style>
<script>
export default {
    components: {

    },
    data() {
        return {
            title: "團隊介紹",
            titleText: `我們的團隊由一群對太空充滿熱情的專家組成，願景是將人類帶入太空，體驗浩渺宇宙的魅力。首先，我們的首席太空導航專家，
                        過去曾是NASA的資深工程師，他帶領著一支技術尖端的飛船設計團隊，確保每次旅程的平穩與安全。此外，
                        我們的生物學家和醫生專門研究在太空中如何確保人體健康和適應，提供客戶最佳的太空體驗。不僅如此，
                        我們還擁有一組專業的太空旅遊策劃師，他們根據最新的太空探索資訊，設計出別出心裁的旅遊路線。最後，
                        我們的客戶服務團隊隨時為您解答疑慮。現在開始選擇星際探索， 讓我們的專業團隊帶領您進入一次夢想中的宇宙冒險！`,

            job: [
                {
                    nameC: "工程師",
                    nameE: "ENGINEER",
                    jobText: `我們公司擔任工程師，在火箭設計、推進系統及航太安全技術方面有著深厚的研究和實踐經驗。工程團隊致力於確保每一次的太空旅行都安全，
                                負責設計和優化宇宙飛船的結構，確保其安全、高效且舒適。除了飛船本身，
                                工程師也會參與太空站和其他基礎設施的開發和維護。密切合作與專業團隊解決技術難題，
                                參與最前沿的技術測試和模擬。我們的目標是為遊客提供一個安全且難忘的宇宙旅行體驗，
                                而您的技術專長將是實現這一夢想的關鍵。`,
                },
                {
                    nameC: "航太醫官",
                    nameE: "AEROSPACE MEDICAL OFFICER",
                    jobText: `航太醫官，確保旅客和工作人員在太空環境中的健康和安全。他們負責醫學篩查、制定太空適應策略，
                              並於旅程中監控生命體徵。此外，他們提供急救、醫療處置及心理支持，並協助研究太空對人體的影響，
                              確保長時間的太空旅行健康無虞。`,
                },
                {
                    nameC: "太空人",
                    nameE: "ASTRONAUT",
                    jobText: `承擔著領導和執行太空任務的重責大任。他們接受嚴格的訓練，涵蓋飛船操作、科學研究、
                              生存技能及急救知識。在太空中，太空人確保飛行安全，執行科研任務，並為旅客提供導遊服務。
                              他們的專業能力和堅韌精神，確保每次的太空之旅都是一次難忘的體驗。`,
                },
                {
                    nameC: "太空導遊",
                    nameE: "SPACE TOUR GUIDE",
                    jobText: `太空導遊，負責引導和教育旅客在宇宙旅程中的所有活動。職務包括：確保旅客太空行程的安全，解說太空現象和歷史，
                                提供太空生活技能培訓，以及協助旅客體驗太空相關活動。此外，導遊還需要持續接受專業訓練，
                                以確保他們的知識和技能都是最新的，並能有效應對太空中可能出現的緊急情況。`,
                },

            ],
            member: [
                {
                    name: "DAMON HINES	",
                    nameJob: "首席系統工程師",

                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ENGINEER01.svg"),
                    text: `我們公司擔任工程師，在火箭設計、推進系統及航太安全技術方面有著深厚的研究和實踐經驗。工程團隊致力於確保每一次的太空旅行都安全，
                                負責設計和優化宇宙飛船的結構，確保其安全、高效且舒適。除了飛船本身，
                                工程師也會參與太空站和其他基礎設施的開發和維護。密切合作與專業團隊解決技術難題，
                                參與最前沿的技術測試和模擬。我們的目標是為遊客提供一個安全且難忘的宇宙旅行體驗，
                                而您的技術專長將是實現這一夢想的關鍵。`,
                },
                {
                    name: "VICTOR MCKENZIE	",
                    nameJob: "航空電子、電力和計算系統",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ENGINEER02.svg"),
                    text: `我們公司擔任工程師，在火箭設計、推進系統及航太安全技術方面有著深厚的研究和實踐經驗。工程團隊致力於確保每一次的太空旅行都安全，
                                負責設計和優化宇宙飛船的結構，確保其安全、高效且舒適。除了飛船本身，
                                工程師也會參與太空站和其他基礎設施的開發和維護。密切合作與專業團隊解決技術難題，
                                參與最前沿的技術測試和模擬。我們的目標是為遊客提供一個安全且難忘的宇宙旅行體驗，
                                而您的技術專長將是實現這一夢想的關鍵。`,
                },
                {
                    name: "ROSE YATES",//女
                    nameJob: "飛行系統設計與分析",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ENGINEER03.svg"),
                    text: `我們公司擔任工程師，在火箭設計、推進系統及航太安全技術方面有著深厚的研究和實踐經驗。工程團隊致力於確保每一次的太空旅行都安全，
                                負責設計和優化宇宙飛船的結構，確保其安全、高效且舒適。除了飛船本身，
                                工程師也會參與太空站和其他基礎設施的開發和維護。密切合作與專業團隊解決技術難題，
                                參與最前沿的技術測試和模擬。我們的目標是為遊客提供一個安全且難忘的宇宙旅行體驗，
                                而您的技術專長將是實現這一夢想的關鍵。`,
                },
                {
                    name: "ISABELLE LUNA",//女
                    nameJob: "首席醫官",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL01.svg"),
                    text: `航太醫官，確保旅客和工作人員在太空環境中的健康和安全。他們負責醫學篩查、制定太空適應策略，
                              並於旅程中監控生命體徵。此外，他們提供急救、醫療處置及心理支持，並協助研究太空對人體的影響，
                              確保長時間的太空旅行健康無虞。`,
                },
                {
                    name: "PAISLEE COX",//女
                    nameJob: "太空醫療照護",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL02.svg"),
                    text: `航太醫官，確保旅客和工作人員在太空環境中的健康和安全。他們負責醫學篩查、制定太空適應策略，
                              並於旅程中監控生命體徵。此外，他們提供急救、醫療處置及心理支持，並協助研究太空對人體的影響，
                              確保長時間的太空旅行健康無虞。`,
                },
                {
                    name: "JOEL BECK",
                    nameJob: "健康監控與評估",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL03.svg"),
                    text: `航太醫官，確保旅客和工作人員在太空環境中的健康和安全。他們負責醫學篩查、制定太空適應策略，
                              並於旅程中監控生命體徵。此外，他們提供急救、醫療處置及心理支持，並協助研究太空對人體的影響，
                              確保長時間的太空旅行健康無虞。`,
                },
                {
                    name: "JOURNEY HARVEY", //女
                    nameJob: "指令長",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ASTRONAUT01.svg"),
                    text: `承擔著領導和執行太空任務的重責大任。他們接受嚴格的訓練，涵蓋飛船操作、科學研究、
                              生存技能及急救知識。在太空中，太空人確保飛行安全，執行科研任務，並為旅客提供導遊服務。
                              他們的專業能力和堅韌精神，確保每次的太空之旅都是一次難忘的體驗。`,
                },
                {
                    name: "ETHAN LAMBERT",
                    nameJob: "外部維修",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ASTRONAUT02.svg"),
                    text: `承擔著領導和執行太空任務的重責大任。他們接受嚴格的訓練，涵蓋飛船操作、科學研究、
                              生存技能及急救知識。在太空中，太空人確保飛行安全，執行科研任務，並為旅客提供導遊服務。
                              他們的專業能力和堅韌精神，確保每次的太空之旅都是一次難忘的體驗。`,
                },
                {
                    name: "TRISTAN MCKINNEY",
                    nameJob: "航天器操作與導航",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ASTRONAUT03.svg"),
                    text: `承擔著領導和執行太空任務的重責大任。他們接受嚴格的訓練，涵蓋飛船操作、科學研究、
                              生存技能及急救知識。在太空中，太空人確保飛行安全，執行科研任務，並為旅客提供導遊服務。
                              他們的專業能力和堅韌精神，確保每次的太空之旅都是一次難忘的體驗。`,
                },
                {
                    name: "JAIDEN HARRISON",
                    nameJob: "負責月球地區的導遊",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/TourGuide01.svg"),
                    text: `太空導遊，負責引導和教育旅客在宇宙旅程中的所有活動。職務包括：確保旅客太空行程的安全，解說太空現象和歷史，
                                提供太空生活技能培訓，以及協助旅客體驗太空相關活動。此外，導遊還需要持續接受專業訓練，
                                以確保他們的知識和技能都是最新的，並能有效應對太空中可能出現的緊急情況。`,
                },
                {
                    name: "	ADELAIDE SANTOS",//女
                    nameJob: "負責火星地區的導遊",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/TourGuide02.svg"),
                    text: `太空導遊，負責引導和教育旅客在宇宙旅程中的所有活動。職務包括：確保旅客太空行程的安全，解說太空現象和歷史，
                                提供太空生活技能培訓，以及協助旅客體驗太空相關活動。此外，導遊還需要持續接受專業訓練，
                                以確保他們的知識和技能都是最新的，並能有效應對太空中可能出現的緊急情況。`,
                },
                {
                    name: "BEAU JOSEPH",
                    nameJob: "負責金星地區的導遊",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/TourGuide03.svg"),
                    text: `太空導遊，負責引導和教育旅客在宇宙旅程中的所有活動。職務包括：確保旅客太空行程的安全，解說太空現象和歷史，
                                提供太空生活技能培訓，以及協助旅客體驗太空相關活動。此外，導遊還需要持續接受專業訓練，
                                以確保他們的知識和技能都是最新的，並能有效應對太空中可能出現的緊急情況。`,
                },

            ],
        };
    },
    methods: {
        memberCount(jobIndex) {
            const start = jobIndex * 3;
            const end = start + 3;
            return this.member.slice(start, end);
        }
    }
}
</script>