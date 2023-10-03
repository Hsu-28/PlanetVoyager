<template>
    <div id="technology">
        <div class="banner">
            <div class="container ma-0 mw">
                <h2 v-for="title in titles">{{title}}</h2>
            </div>
            <div class="spaceship-pic">
                <img src="~@/assets/image/technology/spaceship.svg" alt="spaceship">
            </div>
        </div>
        <div class="intro">
            <div class="intro-wrap ma-0 mb mw">
                <div class="intro-pic">
                    <img src="~@/assets/image/technology/太空人.png" alt="太空人">
                </div>
                <div class="intro-txt">
                    <p>科技創新是人類探索宇宙的無限潛力的驅動力之一，而太空服和太空船科技正是這一壯闊使命的堅實基石，讓我們有機會深入了解宇宙的奧秘。在這個令人著迷的世界中，科學家、工程師和太空探險家共同努力，不斷推動著太空科技的發展，為人類在太空中的未來鋪路，這些令人驚嘆的科技將引領我們進入更遼闊的宇宙領域，尋找答案，尋求冒險，並繼續夢想。</p>
                </div>
            </div>
        </div>


        <div class="wrap ma-0 mw">
        
                <SectionTitle cTitle="太空船" eTitle="SPACESHIP" class="mb" id="SPACESHIP"></SectionTitle>
                <div class="spaceship-intro-text ma-0 mb">
                <p>這三款太空船不僅代表了PLANET VOYAGER在太空科技領域的傑出成就，還象徵了我們對太空探索的熱情和承諾。無論是在月球、火星還是國際太空站，我們的太空船將繼續引領人類進行壯舉，開創未來的太空冒險。</p>
                </div>
                
                <div class="spaceship-intro ma-0 mb mw">
                    <div class="spaceship-big neon-border">
                        <h2>{{ selectedShip.name }}</h2>
                        <img :src="selectedShip.image" alt="Spaceship">
                    </div>
                    <div class="thumbnail-list">
                        <div
                            v-for="(ship, index) in spaceships"
                            :key = "index"
                            @click="showSpaceshipInfo(ship)"
                            :class="{ selected: selectedShip === ship }"
                            class="thumbnail neon-border center"
                            >
                            <img :src="ship.image" alt="spaceship-thumbnail">
                        </div>
                    </div>
                    <div class="spaceship-feature neon-border center"> 
                        <p v-if="selectedShip === spaceships[0]" style="white-space: pre-line;">{{selectedShip.feature}}</p>
                        <p v-else-if="selectedShip === spaceships[1]" style="white-space: pre-line;">{{selectedShip.feature}}</p>
                        <p v-else style="white-space: pre-line;">{{selectedShip.feature}}</p>
                    </div>
                    <div class="spaceship-txt neon-border center">
                            <p v-if="selectedShip === spaceships[0]">{{selectedShip.description}}</p>
                            <p v-else-if="selectedShip === spaceships[1]">{{selectedShip.description}}</p>
                            <p v-else>{{selectedShip.description}}</p>
                    </div>
                </div>
            
                
            <section>
                <SectionTitle cTitle="太空服" eTitle="SPACE SUIT" class="mb" id="SPACESUIT"></SectionTitle>
                <div class="space-suit-txt ma-0 mb">
                <p>太空服是一項令人驚奇的工程壯舉，它如同太空人在極端環境中的第二層皮膚。這些太空服不僅需提供充足的氧氣和壓力，以保持生命的正常運行，還必須有效地保護太空人免受宇宙中極端輻射和微重力帶來的威脅。太空服的設計和製造過程極為複雜，是一項充滿挑戰性的工程，需要卓越的工程技術和革新精神。</p>
                </div>
                <div class="space-suit-intro ma-0 mw">
                    <div class="window neon-border">
                        <!-- <div class="bb">
                            <p>consectetur adipisicing elit. Ducimus quidem totam facilis, maiores eveniet id. Error, nulla quibusdam. </p>
                        </div> -->
                        
                        <p>太空人的體溫由一套貼身內衣調節，這件內衣佈滿水管，水泵不斷把水循環，把太空人身體所發出的熱帶走，而水則由升華器所冷卻。
                        </p>
                        
                    </div>
                    <div class="costume">
                        <img src="~@/assets/image/technology/大太空服.svg" alt="">
                        <img src="~@/assets/image/technology/底座.svg" alt="">
                    </div>
                    <div class="window neon-border">
                        <div class="bb">
                            <p>太空衣是保護太空人在太空不受低溫，射線等的侵害並提供人類生存所需的氧氣的保護服。
                            </p>
                        </div>
                        
                        <p>氧氣筒為太空人提供氧氣，太空衣表層則有阻隔輻射的功用。
                        </p>
                        
                    </div>
                </div>
            </section>
      </div>  
     </div> 
</template>

<script>
import SectionTitle from '../components/SectionTitle.vue';

    export default{
        data(){
            return{
                titles: ['科技創新', 'THE VEHICLES'],
                selected: true,
                spaceships: [
                    {
                    name: 'APOLLO',
                    image: require('@/assets/image/technology/spaceship1.svg'),
                    feature:
                    `高度：8.1 米
                    直徑：10 米
                    艙內體積：9.3 立方米
                    推進器部分體積：37 立方米
                    發射酬載量：6,000 公斤
                    返回酬載量：3,000 公斤`,
                    description: 'Apollo可說是太空工程藝術品，它是太空歷史上最經典的太空船之一。憑藉其優秀的遠征能力，Apollo曾成功實現人類首次登陸月球的壯舉。這款太空船代表了PLANET VOYAGER的創新和卓越，並成為人類歷史上的一個重要里程碑。',
                    },
                    {
                    name: 'STARSHIP',
                    image: require('@/assets/image/technology/spaceship2.png'),
                    feature: 
                    `高度：7 米 
                    直徑：5 米
                    艙內體積：8 立方米
                    推進器部分體積：30 立方米
                    發射酬載量：5,000 公斤 
                    返回酬載量：2,500 公斤`,
                    description: 'Starship多次執行太空任務，為太空站提供補給，它代表了我們公司對可持續太空探索的承諾，同時也體現了PLANET VOYAGER在太空科技的貢獻及領先地位。',
                    },
                    {
                    name: 'DRAGON',
                    image: require('@/assets/image/technology/spaceship3.png'),
                    feature:
                    `高度：6 米
                    直徑：6 米
                    艙內體積：12 立方米
                    推進器部分體積：45 立方米
                    發射酬載量：10,000 公斤
                    返回酬載量：5,000 公斤
                    `,
                    description: 'Dragon是在太空探索領域的未來之星。由我們的工程團隊開發，旨在實現更遠的星際探索，包括火星著陸等挑戰性任務。它具有令人驚嘆的負載能力，這將為未來的太空任務提供無限的可能性，同時也展現了PLANET VOYAGER的創新精神。'
                    }
                ],
                selectedShip: 'this.spaceships[0]',
            };
        },
      
        methods:{
        showSpaceshipInfo(ship){
            this.selectedShip = ship;
        },
    },
        components: {
            SectionTitle
        },
        mounted() {
            this.showSpaceshipInfo(this.spaceships[0]);
        }
    };
</script>

<style scoped lang="scss"> 
    @import "@/assets/sass/page/_technology.scss";
</style> 

