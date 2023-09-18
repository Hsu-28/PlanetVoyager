<template>
    <div id="technology">
        <div class="banner">
            <div class="container ma-0">
                <h2 v-for="title in titles">{{title}}</h2>
            </div>
            <div class="spaceship-pic">
                <img src="~@/assets/image/technology/spaceship.svg" alt="spaceship">
            </div>
        </div>
        <div class="intro">
            <div class="intro-wrap ma-0">
                <div class="intro-pic">
                    <img src="~@/assets/image/technology/太空人.png" alt="太空人">
                </div>
                <div class="intro-txt">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ab recusandae sunt vitae omnis veritatis sint cum molestiae placeat maxime. Tenetur voluptates similique eligendi cupiditate a nulla neque in sequi.</p>
                </div>
            </div>
        </div>
        <div class="wrap ma-0">
            <section>
                <SectionTitle cTitle="太空船" eTitle="SPACESHIP"></SectionTitle>
                <div class="spaceship-intro ma-0">
                    <div v-for=" (box, index) in spaceIntro" :class="box.class" class="neon-border center">
                        <img :src="box.imgSrc" alt="">
                    </div>
                    <div class="spaceship-feature neon-border center"> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ex quaerat porro nobis iure officiis, sint numquam blanditiis ipsam perspiciatis quibusdam aspernatur? Perspiciatis sapiente molestias eius sed nihil dignissimos incidunt?</p>
                    </div>
                    <div class="spaceship-txt neon-border center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugiat vitae animi dolorum fuga dolor. Provident, corrupti excepturi similique, labore expedita explicabo eveniet consequuntur illo optio cupiditate recusandae quidem quos.</p>
                    </div>
                </div>
            </section>


            <section>
                <SectionTitle cTitle="太空服" eTitle="SPACE SUIT"></SectionTitle>
                <div class="space-suit-intro">
                    <div class="window neon-border">
                        <div class="neon-border">

                        </div>
                    </div>
                    <div>
                        <img src="~@/assets/image/technology/大太空服.svg" alt="">
                        <img src="~@/assets/image/technology/底座.svg" alt="">
                    </div>
                    <div class="window neon-border">
                        <div class="neon-border">

                        </div>
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
                spaceIntro: [
                                {
                                    class:'spaceship-pic', 
                                    imgSrc: require('@/assets/image/technology/spaceship1.svg')
                                },
                                {
                                    class:'spaceship-pic', 
                                    imgSrc: require('@/assets/image/technology/spaceship2.png')
                                },
                                {
                                    class:'spaceship-pic',
                                    imgSrc: require('@/assets/image/technology/spaceship3.png')
                                },
                                // {class:'spaceship-feature', imgSrc:''},
                                // {class:'spaceship-pic', imgSrc:''},
                        ],
            };
        },
        components: {
            SectionTitle
        },
    };
</script>

<style scoped lang="scss"> 
    @import "@/assets/sass/page/_technology.scss";
</style>
