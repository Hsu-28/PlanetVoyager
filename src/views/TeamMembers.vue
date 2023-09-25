<template>
    <div class="bigImg">
        <img src="@/assets/image/teamMembers/big.svg" alt="big-iamge">
        <div class="introduceTitle">
            <p>團隊介紹</p>
            <p>TOURIST GUIDE</p>
        </div>
    </div> 
    <div class="jobAll">

        <div class="introduceTeam">
            <!-- <h1>{{ title }}</h1> -->
            <p>{{ titleText }}</p>
        </div>
        <div v-for="(jobContent, jobIndex) in job " 
            :key="'job-' + jobIndex"
            class="jobContent">
            <div class="jobTitle"> 
                <p> 
                    {{ jobContent.nameC }}  
                    <span>
                        {{ jobContent.nameE }}
                    </span>
                </p>
              
                <p>{{ jobContent.jobText }}</p>
            </div>
            <div class='memberComtent'>
                <!-- <div v-for="(thisjob, index) in memberCount(jobIndex) " :key="index"> -->
                <div v-for="(thisjob, memberIndex) in memberCount(jobIndex)" 
                    :key="'member-' + memberIndex" class="individual" @click="detailShow(thisjob)">
                    

            
                    <div class="imgContent">
                        <img :src="thisjob.imgSvg" alt="團隊照片" class="memberImg">
                    </div><!-- <imgSvg :src="require('../assets/image/teamMembers/memberSvg/ASTRONAUT01.svg')" alt=""> -->
                    <div class="membersSpan">
                        <p>{{ thisjob.name }}</p>
                        <p class="jobTitleMem">{{ thisjob.nameJob }}</p>
                        <div class="number">{{ thisjob.number }}</div>
                    </div>
                </div>
            </div>

            <div v-if="showDetail" class="allDetail"  @click="detailClose">
                <div class="memberDetail" @click.stop > 
                    <div class="blur"></div>
                    <button @click="detailClose">CLOSE</button>
                    <p class="clickName">{{ detailContent.name }}</p>
                    <p class="clickTitle">{{ detailContent.nameJob }}</p>
                    <div class="memberContent">
                        <div class="detailImg">               
                            <img :src="detailContent.imgSvg" alt="團隊照片" class="memberImg">
                        </div>
                        <p>{{detailContent.text}}</p>
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
            showDetail:false,
            detailContent:[],
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
                    number: "001",
                    name: "DAMON HINES",
                    nameJob: "首席系統工程師",

                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ENGINEER01.svg"),
                    text: `DAMON HINES畢業於麻省理工學院航天工程系，以他超過20年的專業經驗成為業界的領軍人物。
                            他曾經參與多次火星和月球的探測任務，並負責核心系統的設計和維護。他的工作精確且注重細節，多次獲得國際航天獎項。在業界，
                            被視為最值得信賴的工程師之一，他的領導和專業知識被廣大同行所尊重。`,
                },
                {
                    number: "002",
                    name: "VICTOR MCKENZIE	",
                    nameJob: "電子、電力計算系統工程師",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ENGINEER02.svg"),
                    text: `VICTOR MCKENZIE一位電子工程天才，在美國阿拉巴馬州奧本市奧本大學完成他的電子工程學士學位，之後在斯坦福大學進修，
                            專攻航天電力系統。憑藉超過10年的專業經驗，他已成為太空電子和計算系統設計的領先人物。他研發的節能太空電力系統已在多次太空探險中得到應用。在太空旅遊公司他負責監督和創新所有航天器的電子系統，確保在太空的極端環境中都能保持最佳性能。他的熱情、知識和持續創新使他在太空工程界中受到極高的讚譽。`,
                },
                {
                    number: "003",
                    name: "ROSE YATES",//女
                    nameJob: "飛行系統設計與分析",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ENGINEER03.svg"),
                    text: `ROSE YATES出生於印度，早期在印度空間研究組織(ISRO)工作，後至美國史丹福大學進修。憑藉其獨特的背景，
                            Rahul在飛行系統設計和分析方面建立了卓越的聲譽。他參與的每一項任務都獲得了巨大的成功，這也使她成為火星探索團隊的核心成員
                            。她不僅是一名優秀的工程師，還是一名領導者，她的創新思維和協作能力獲得了同事們的高度評價。`,
                },
                {
                    number: "001",
                    name: "ISABELLE LUNA",//女
                    nameJob: "首席醫官",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL01.svg"),
                    text: `ISABELLE LUNA是一位來自法國巴黎的傑出醫學博士，她於索邦大學完成她的醫學學位，隨後赴哈佛醫學院專攻太空醫學
                            。在她超過15年的醫學職業生涯中，她專注於研究微重力環境下對人體生理的影響。透過她在國際太空站上的研究，
                            ISABELLE LUNA 成為太空醫學領域的先鋒，尤其在太空生理適應和太空生活中的急救照護方面。
                            她曾成功提出數個創新方案以增強航天員在長期太空任務中的生理和心理健康。她的領導力、專業知識以及對航天員健康的堅定承諾使她成為太空旅遊公司的首席醫官，肩負著確保每次太空旅程的醫療安全和健康管理。`,
                },
                {
                    number: "002",
                    name: "PAISLEE COX",//女
                    nameJob: "太空醫療照護",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL02.svg"),
                    text: `PAISLEE COX是一位印度裔美國人，於耶魯大學完成醫學學位，隨後在麻省理工學院研修太空醫學。
                           PAISLEE在多次國際太空任務中擔任醫療照護專家，專注於提供在微重力環境下的即時醫療解決方案。
                           她獨到的研究使得太空旅行中的醫療救治更為迅速與專業。她的專業知識不僅止於太空醫學，她還熟悉跨文化醫療照護，
                           能夠針對不同文化背景的航天員提供個性化的醫療方案。在太空旅遊公司中負責策劃和實施所有太空健康和醫療程序，
                           確保每位遊客在太空旅行中的身體健康。`,
                },
                {
                    number: "003",
                    name: "JOEL BECK",
                    nameJob: "健康監控與評估",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/MEDICAL03.svg"),
                    text: `JOEL BECK原籍墨西哥，是一位具有生物醫學工程背景的專家。畢業於加州理工學院，他深耕於遙感健康監測技術領域，
                            尤其針對太空環境。經過多次參與國際太空站的健康監控任務，
                            我們發展出了一套結合先進的生物感測技術和數據分析的監控系統，此系統能即時偵測和預測太空中可能出現的健康問題。
                            作為太空旅遊公司的健康監控與評估員，其的專業能力確保了每位太空旅客的健康狀態都在最佳的監控之下，為太空旅行帶來更高的安全性與信賴度。`,
                          
                },
                {
                    number: "001",
                    name: "JOURNEY HARVEY", //女
                    nameJob: "指揮長",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ASTRONAUT01.svg"),
                    text: `JOURNEY HARVEY空軍的退役飛行員，經歷過超過1000小時的太空飛行時間。在莫斯科航空學院完成飛行訓練後，
                            她成為國際太空站的主要操作員，參與多次關鍵任務。由於她在緊急狀況下的出色領導和決策能力，
                            JOURNEY被譽為一名出色的指揮者。她對航天器的操作和系統有深入的了解，使他能在各種情況下確保太空船的安全和有效操作。
                            在太空旅遊公司中，作為太空船指揮長，他的卓越領導確保了每一次太空旅程的流暢和安全。`,
                },
                {
                    number: "002",
                    name: "ETHAN LAMBERT",
                    nameJob: "外部維修",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ASTRONAUT02.svg"),
                    text: `ETHAN LAMBERT澳大利亞出生，是太空機械工程的先驅者。他在悉尼科技大學完成她的機械工程學位，後在美國太空機構NASA深化其太空機械維護的技能。她是首批專門受訓於太空外部維修的工程師之一，曾多次成功完成國際太空站的緊急維修任務。ETHAN的工作不只是維護，她還參與了許多太空船設計的創新，使其更適應外部維修。在太空旅遊公司，Sienna 負責確保所有航天器在太空旅行中的結構完整與功能正常，她的技能和經驗對於旅行的順利與旅客的安全至關重要。`,
                },
                {
                    number: "003",
                    name: "TRISTAN MCKINNEY",
                    nameJob: "航天器操作與導航",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/ASTRONAUT03.svg"),
                    text: `承擔著領導和執行太空任務的重責大任。他們接受嚴格的訓練，涵蓋飛船操作、科學研究、
                              生存技能及急救知識。在太空中，太空人確保飛行安全，執行科研任務，並為旅客提供導遊服務。
                              他們的專業能力和堅韌精神，確保每次的太空之旅都是一次難忘的體驗。`,
                },
                {
                    number: "001",
                    name: "JAIDEN HARRISON",
                    nameJob: "月球導遊",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/TourGuide01.svg"),
                    text: `一位出生於意大利羅馬的天文學者，於羅馬大學完成天文學博士學位，後在美國進行月球地質研究。擁有15年的月球探索經驗，
                            JAIDEN是國際上少數參與實地月球探險的專家之一。他深厚的知識和現場經驗使他成為月球地質和歷史的權威。於太空旅遊公司中，
                            JAIDEN負責帶領遊客遊覽月球，生動地講解月球的地質結構、歷史和太空探索的足跡。他的熱情和專業知識為遊客帶來了一次又一次難忘的月球之旅。`,
                },
                {
                    number: "002",
                    name: "	ADELAIDE SANTOS",//女
                    nameJob: "火星導遊",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/TourGuide02.svg"),
                    text: `ADELAIDE SANTOS出生於西班牙的瓦倫西亞，是一位傑出的行星地質學者。她於馬德里自治大學完成其地質學學位，後於加州理工學院進修，專攻火星的地質與氣候系統。ADELAIDE參與了多次火星探索任務，是業界公認的火星環境專家。擁有深厚的火星知識和探索經驗，她在太空旅遊公司負責帶領遊客探索火星的神秘與魅力。透過她的專業解說，遊客能深入了解火星的地質、氣候和可能的生命跡象。Isabella 的熱情和專業為遊客提供了一次獨一無二的火星冒險之旅。`,
                },
                {
                    number: "003",
                    name: "BEAU JOSEPH",
                    nameJob: "金星導遊",
                    imgSvg: require("@/assets/image/teamMembers/memberSvg/TourGuide03.svg"),
                    text: `BEAU JOSEPH，一名具有法國和印度混血背景的宇宙學家，早年於巴黎索邦大學深入研究行星大氣科學，後來在加州大學洛杉磯分校完成他的博士學位，主攻金星的大氣和氣候變遷。憑藉超過12年對金星的研究，Beau 成為了該領域的領先專家。他不僅多次參與國際性的金星探測任務，還曾是幾次金星地表偵測項目的主要研究員。於太空旅遊公司中，Beau 負責引導遊客深入了解金星的神秘之處，透過他的詳盡解說，遊客能夠近距離感受到金星的獨特魅力和未知之謎。`,
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
        detailShow(selectedMember){
                this.showDetail=true;
                this.detailContent= selectedMember;
                // document.body.classList.add('no-scroll');

        },detailClose(){
            this.showDetail=false;
            this.detailContent= '';
            // document.body.classList.remove('no-scroll');

        }
    },
    
}
</script>