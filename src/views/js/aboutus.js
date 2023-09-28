import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/effect-cards';


export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            container: [
                {
                    name: "Alex Edwards",
                    introduce: "Alex在航空和太空領域擁有豐富的經驗，曾是一家著名太空科技公司的高級工程師，對太空探索有著深刻的熱情，並致力於讓太空旅遊成為現實。",
                    class: "active bg1"
                },
                {
                    name: "David Smith",
                    introduce: "David對於太空科學領域擁有卓越的專業知識。他曾參與多個太空任務，包括國際太空站的建設和月球探測計劃。",
                    class: "bg2"
                },
                {
                    name: "Mark Anderson",
                    introduce: "Mark曾在全球領先的投資銀行擔任高級副總裁，對金融和資本市場有深刻的了解，且熱衷於將資源引入太空旅遊行業，以實現夢想。",
                    class: "bg3"
                },
            ],
            cards: [
                {
                    image: require("@/assets/image/aboutUs/company01.svg"),
                    alt: "公司外觀",
                    title: "公司外觀",
                    text: "本公司因有開發需求，故將位置選在離市區較遠的桃園市W52區",
                    page: "1/5"
                },
                {
                    image: require("@/assets/image/aboutUs/company02.svg"),
                    alt: "環境監測中心",
                    title: "環境監測中心",
                    text: "我們對太空環境進行持續監測，以確保旅客和工作人員的安全。我們使用先進的儀器來監測輻射水平、溫度變化、太空碎片等因素，並隨時調整太空船和設施的運作以確保安全。",
                    page: "2/5"
                },
                {
                    image: require("@/assets/image/aboutUs/company03.svg"),
                    alt: "科學實驗室",
                    title: "科學實驗室",
                    text: "科學實驗室配備了各種先進的實驗設備，包括光學和電子顯微鏡、光譜儀、質譜儀、氣相層析儀等。這些設備可用於分析太空中的物質、觀察星體、測量宇宙輻射等。",
                    page: "3/5"
                },
                {
                    image: require("@/assets/image/aboutUs/company04.svg"),
                    alt: "訓練中心",
                    title: "訓練中心",
                    text: "為太空旅遊的參與者提供全面的訓練和體驗，以確保他們在太空中的安全和準備充分。訓練項目包含重力模擬區域、太空船模擬、緊急情況模擬及生存訓練等。",
                    page: "4/5"
                },
                {
                    image: require("@/assets/image/aboutUs/company05.svg"),
                    alt: "訓練住宿房間",
                    title: "訓練住宿房間",
                    text: "房間的設計旨在提供舒適、安靜和放鬆的環境，以確保太空旅行者在經過訓練後能夠得到適當的休息和恢復。",
                    page: "5/5"
                }
            ],
            //聊天機器人
            isChatOpen: false,
            messages: [
                {
                    text: "公司回覆1",
                    icon: require("@/assets/image/donate/member.svg"),
                    isCustomer: false
                },
                {
                    text: "顧客問題1",
                    isCustomer: true
                },
                {
                    text: "公司回覆2",
                    icon: require("@/assets/image/donate/member.svg"),
                    isCustomer: false
                },
                {
                    text: "顧客問題2",
                    isCustomer: true
                },
                {
                    text: "公司回覆3",
                    icon: require("@/assets/image/donate/member.svg"),
                    isCustomer: false
                },
                {
                    text: "顧客問題3",
                    isCustomer: true
                },
            ],
        };
    },
    methods: {
        accordionEvent() {
            const panels = document.querySelectorAll(".panel");

            panels.forEach((panel) => {
                panel.addEventListener("click", () => {
                    removeActiveclasses();
                    panel.classList.add("active");
                });
            });

            function removeActiveclasses() {
                panels.forEach((panel) => {
                    panel.classList.remove("active");
                });
            }
        },

        // 聊天機器人
        toggleChat() {
            this.isChatOpen = !this.isChatOpen;
        },
        closeChat() {
            this.isChatOpen = false;
        },
    },
    mounted() {
        this.accordionEvent()
    },
    setup() {
        return {
            modules: [EffectCards],
        };
    },


}