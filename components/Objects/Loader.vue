<template>
  <div id="loading" class="loading">
    <div class="loading__box"></div>
  </div>
</template>

<script>
export default {
  created() {
    this.$nuxt.$on('start-load', () => {
      const el = document.getElementById('loading')
      el.classList.add('is-active')
    })
    this.$nuxt.$on('stop-load', () => {
      const el = document.getElementById('loading')
      el.classList.remove('is-active')
    })
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  z-index: 300;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.384);
  left: 0;
  top: 0;
  display: none;
  &.is-active {
    display: initial;
  }
  &__box {
    width: 50px;
    height: 50px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &:before {
      content: '';
      width: 50px;
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: 59px;
      left: 0;
      border-radius: 50%;
      animation: shadow 0.5s linear infinite;
    }
    &:after {
      content: '';
      width: 50px;
      height: 50px;
      background: rgba(139, 166, 189, 0.288);
      animation: animate 0.5s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
  }
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}

body,
html {
  background: #ccc;
  overflow: hidden;
  height: 100%;
}
</style>
