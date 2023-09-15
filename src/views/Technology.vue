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
                <div class="spaceship-intro">


                </div>
            </section>


            <section>
                <SectionTitle cTitle="太空服" eTitle="SPACE SUIT"></SectionTitle>
        
                <div class="space-suit-intro">
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
