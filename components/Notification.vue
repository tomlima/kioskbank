<template>
  <div id="notification" class="notification">
    <span>Obrigado pelo seu contato!</span>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  transform: translateX(100%);
  background-color: #fff;
  border-radius: 20px 0 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  bottom: 10%;
  z-index: 5000;
  height: 100px;
  width: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 1s ease;
  span {
    color: $primary-color;
    font-weight: 700;
  }
  &.is-active {
    transition: all 1s ease;
    transform: translateX(0);
  }
}
</style>
