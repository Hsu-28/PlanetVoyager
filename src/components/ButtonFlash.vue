<template>
    <button class="cybr-btn">
        <div class="proText">
              {{ buttonText }}
        </div>
      <span aria-hidden></span>
        <span aria-hidden class="cybr-btn__glitch">{{ buttonText }}</span>
        <span aria-hidden class="cybr-btn__tag">{{ buttonBottomText }}</span>
    </button>
</template>
<style scoped lang="scss">
@import "@/assets/sass/component/_buttonFlash.scss";
</style>
<script>
export default {
    props: ["buttonText", "buttonBottomText"],
    // emits
}
</script>