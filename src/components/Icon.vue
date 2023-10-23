<template>
  <div class="icon">
    <img src="../assets/images/icon-star.svg" alt="">
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "StarIcon"
})
</script>

<style scoped lang="scss">
.icon {
  width: 3rem;
  height: 3rem;
  background-color: var(--color-medium-grey);
  border-radius: 50%;
  margin-bottom: 2rem;

  img {
    width: 1rem;
    height: 1rem;
    translate: 16px 16px;
  }
}
</style>

<script setup>
</script>
