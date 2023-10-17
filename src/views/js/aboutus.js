import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/effect-cards';
// import { onMounted } from 'vue'; //聊天機器人
import { gsap, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


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
                    image: require("@/assets/image/aboutUs/company01.jpg"),
                    alt: "公司外觀",
                    title: "公司外觀",
                    text: "本公司因有開發需求，故將位置選在離市區較遠的桃園市W52區",
                    page: "1/5"
                },
                {
                    image: require("@/assets/image/aboutUs/company02.jpg"),
                    alt: "環境監測中心",
                    title: "環境監測中心",
                    text: "我們對太空環境進行持續監測，以確保旅客和工作人員的安全。我們使用先進的儀器來監測輻射水平、溫度變化、太空碎片等因素，並隨時調整太空船和設施的運作以確保安全。",
                    page: "2/5"
                },
                {
                    image: require("@/assets/image/aboutUs/company03.jpg"),
                    alt: "科學實驗室",
                    title: "科學實驗室",
                    text: "科學實驗室配備了各種先進的實驗設備，包括光學和電子顯微鏡、光譜儀、質譜儀、氣相層析儀等。這些設備可用於分析太空中的物質、觀察星體、測量宇宙輻射等。",
                    page: "3/5"
                },
                {
                    image: require("@/assets/image/aboutUs/company04.jpg"),
                    alt: "訓練中心",
                    title: "訓練中心",
                    text: "為太空旅遊的參與者提供全面的訓練和體驗，以確保他們在太空中的安全和準備充分。訓練項目包含重力模擬區域、太空船模擬、緊急情況模擬及生存訓練等。",
                    page: "4/5"
                },
                {
                    image: require("@/assets/image/aboutUs/company05.jpg"),
                    alt: "訓練住宿房間",
                    title: "訓練住宿房間",
                    text: "房間的設計旨在提供舒適、安靜和放鬆的環境，以確保太空旅行者在經過訓練後能夠得到適當的休息和恢復。",
                    page: "5/5"
                }
            ],
            timeline: [
                {
                    title: "公司成立",
                    text: "在1999年，我們敢於夢想，創立了PlanetVoyager。我們的團隊由夢想家和科學家組成，致力於太空旅遊的可能性。"
                },
                {
                    title: "首次登陸",
                    text: "第二年(2000年)，我們成功進行了旅行團首次月球登陸。這次歷史性的登陸為我們的公司帶來了全球關注，標誌著太空旅遊的新紀元。"
                },
                {
                    title: "擴展與合作",
                    text: "2005年開始擴大我們的太空旅遊項目，新增火星及金星，並建立了與太空科技公司的合作夥伴關係，以提供更多選擇和更高的安全標準。"
                },
                {
                    title: "星際旅遊",
                    text: "2008年見證了星際旅遊的崛起，客戶可以在太空站中度過豪華且深度的假期。這一年，我們的服務超越了地球。"
                },
                {
                    title: "科學探索",
                    text: "2010我們開始支持科學家進行太空實驗，以研究太陽系中的神秘之處。我們成為太空科學的夥伴，推動知識的邊緣。"
                },
                {
                    title: "太空旅遊的未來",
                    text: "我們將目光投向更遠的未來，計劃更遠的目的地和更多的太空冒險。我們將繼續領先，實現太空夢！"
                }
            ],
        };
    },
    methods: {
        // 創辦人介紹
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
            };
        },
    },
    mounted() {
        this.accordionEvent()

        // 初始化GSAP和ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // 每個.timeline元素
        const timelines = document.querySelectorAll('.timeline');
        timelines.forEach((timeline) => {
            gsap.set(timeline.querySelectorAll('.item'), {
                opacity: 0,
                y: '30%',
            });

            ScrollTrigger.batch(timeline.querySelectorAll('.item'), {
                onEnter: (batch) =>
                    gsap.to(batch, {
                        opacity: 1,
                        y: 0,
                        stagger: {
                            each: 0.25,
                            from: 'start',
                        },
                    }),
                start: 'center center', // 在螢幕中才開始動作
            });

            ScrollTrigger.addEventListener('refreshInit', () =>
                gsap.set(timeline.querySelectorAll('.item'), {
                    opacity: 0,
                    y: '30%',
                })
            );
        });
    },
    setup() {
        return {
            modules: [EffectCards],
        };
    },
}