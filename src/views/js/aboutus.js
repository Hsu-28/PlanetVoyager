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
        }
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