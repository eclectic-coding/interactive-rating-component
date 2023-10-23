<template>
  <div class="card" v-show="!isVoted">
    <StarIcon />
    <h1>How did we do?</h1>
    <p>Please let us know how we did with your support request. All feedback is appreciated
      to help us improve our offering!</p>
    <div class="card__ratings">
      <button @click="setRating($event)" class="rateBtn1" :class="{'isClicked':rateValue==='1'}" value="1">1</button>
      <button @click="setRating($event)" class="rateBtn2" :class="{'isClicked':rateValue==='2'}" value="2">2</button>
      <button @click="setRating($event)" class="rateBtn3" :class="{'isClicked':rateValue==='3'}" value="3">3</button>
      <button @click="setRating($event)" class="rateBtn4" :class="{'isClicked':rateValue==='4'}" value="4">4</button>
      <button @click="setRating($event)" class="rateBtn5" :class="{'isClicked':rateValue==='5'}" value="5">3</button>
    </div>
    <button class="button" @click="clickSubmit">Submit</button>
  </div>

  <div v-show="isVoted">
    <div class="card">
      <img src="../assets/images/illustration-thank-you.svg" alt="Thank you" class="thank-you__img">
      <p class="thank-you__selected">You selected {{ rateValue }} out of 5</p>
      <h1 class="thank-you__header">Thank you</h1>
      <p class="thank-you__info">We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import StarIcon from "@/components/Icon.vue";

const rateValue = ref(0);
const isSelected = ref(false);
const isVoted = ref(false);

function setRating(event) {
  rateValue.value = event.target.value;
  isSelected.value = true
}

function clickSubmit() {
  isVoted.value = true
  console.log(`send ${rateValue.value} to backend`)
}
</script>

<style lang="scss" scoped>
.isClicked {
  background-color: var(--color-light-grey) !important;
  color: var(--color-white) !important;
}

.card {
  width: 25.75rem;
  background-image: linear-gradient(hsla(215, 20%, 17%, 1), hsla(215, 24%, 12%, 1));
  border-radius: 30px;
  padding: 2rem;

  h1 {
    font-size: 1.75rem;
    font-weight: bold;
    color: var(--text-card-heading);
    margin-bottom: 1rem;
  }

  p {
    font-size: 15px;
    line-height: 1.5;
    color: var(--text-card-body);
  }

  &__ratings {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 0;
  }

  .rateBtn1, .rateBtn2, .rateBtn3, .rateBtn4, .rateBtn5 {
    border: none;
    border-radius: 50%;
    width: 3.1875rem;
    height: 3.1875rem;
    background-color: var(--color-medium-grey);
    font-weight: bold;
    color: var(--color-body) !important;
    cursor: pointer;

    &:hover {
      background-color: var(--color-primary);
    }
  }

  .button {
    height: 45px;
    width: 100%;
    margin-bottom: 0;
    border-radius: 25px;
    background-color: var(--color-primary);
    border-color: transparent;
    color: var(--color-white);
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      background-color: var(--color-white);
      color: var(--color-primary);
    }
  }
}

.thank-you {
  &__img {
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
  }

  &__selected {
    background-color: var(--color-very-dark-blue);
    padding: 0.7rem 2rem;
    border-radius: 2rem;
    color: var(--color-primary) !important;
    margin: 0;
  }

  &___info {
    margin-top: 0;
    text-align: center;
  }

  &__header {
    text-align: center;
  }
}
</style>
