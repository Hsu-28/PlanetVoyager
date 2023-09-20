export default {
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
    }
}