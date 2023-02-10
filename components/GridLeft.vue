<template>
  <section class="c-content u-section" id="about">
    <a
      anchor-to="services"
      class="c-content__arrow js-anchor"
      href="javascript:void(0)"
    >
      <i class="bx bxs-chevrons-down"></i>
    </a>
    <div class="l-container l-grid c-content__container">
      <div class="c-content__image">
        <div class="overlay"></div>
        <img data-not-lazy src="/home.jpg" alt="" />
      </div>
      <div class="c-content__text">
        <img src="/shape.png" data-not-lazy alt="Shape" />
        <h1 class="c-content__title u-mb-2">
          <b> Serviços financeiros </b> para você, pessoa física ou jurídica.
        </h1>
        <p class="c-content__description u-mb-2-5">
          A Kiosk Bank Brasil é uma empresa especializada na prestação de
          serviços financeiros com agilidade e sem burocracia.
        </p>
        <button
          anchor-to="services"
          class="c-button c-button--primary js-anchor"
        >
          Saiba mais
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-content {
  background-color: #2a87fb0d;
  padding: 50px 0;
  margin: 0;
  position: relative;
  b {
    color: $primary-color;
  }
  button {
    background-color: $primary-color;
    &:hover {
      background-color: $secondary-color;
    }
  }
  &__arrow {
    animation: bounce 2.5s infinite;
    position: absolute;
    bottom: -30px;
    width: 60px;
    height: 60px;
    background-color: $primary-color;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.6rem;
    left: 50%;
    cursor: pointer;
    display: none;
  }
  &__container {
    row-gap: 1.5rem;
  }
  &__image {
    height: 300px;
    position: relative;
    border-radius: 80px 80px 80px 80px;
    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: rgba(7, 35, 70, 0.452);
      border-radius: 80px 80px 80px 80px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 80px 80px 80px 80px;
    }
  }
  &__text {
    text-align: center;
    img {
      display: none;
    }
  }
  &__description {
    padding: 0 2rem;
    font-size: 1.3rem;
    font-weight: 200;
    color: #7d79879d;
  }

  @media screen and (min-width: $md-breakpoint) {
    &__arrow {
      display: flex;
    }
    &__container {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
    &__image {
      height: 500px;
    }
    &__text {
      text-align: initial;
      grid-column: 1;
      grid-row: 1;
      img {
        position: absolute;
        left: 10%;
        top: 30%;
        display: block;
        animation: float 2s linear infinite alternate;
      }
    }
    &__description {
      padding: 0;
    }
  }
  @media screen and (min-width: $lg-breakpoint) {
    &__container {
      column-gap: 1rem;
    }
    &__img {
      width: 100%;
    }
    &__description {
      padding-right: 8rem;
    }
  }
}
</style>
