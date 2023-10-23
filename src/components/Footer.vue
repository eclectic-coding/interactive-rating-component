<template>
  <footer>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://www.linkedin.com/in/dev-chuck-smith/" target="_blank" aria-label="Dev profile (new window)">Chuck Smith</a>.
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "TheFooter"
})
</script>

<style lang="scss" scoped>
footer {
  display: grid;
  grid-area: footer;
  align-items: center;
  justify-content: center;


  .attribution {
    font-size: 11px;
    color: var(--text-card-body);

    a {
      color: var(--color-primary);
    }
  }
}

</style>
