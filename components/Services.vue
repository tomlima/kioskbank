<template>
  <section class="c-services u-section" id="services">
    <img class="c-services__frame" src="/shape.png" data-not-lazy alt="Frame" />
    <div class="l-container">
      <h2 class="u-section__title">
        Conheça nossos serviços
      </h2>

      <div class="c-services__list">
        <div class="c-services__card">
          <i class="bx bx-building-house c-services__icon"></i>
          <h3>Crédito imobiliário</h3>
        </div>

        <div class="c-services__card">
          <i class="bx bxs-car c-services__icon"></i>
          <h3>Crédito para veículos</h3>
        </div>

        <div class="c-services__card">
          <i class="bx bxs-credit-card c-services__icon"></i>
          <h3>Crédito bancário</h3>
        </div>

        <div class="c-services__card">
          <i class="bx bxs-cart-download c-services__icon"></i>
          <h3>Saque FGTS</h3>
        </div>

        <div class="c-services__card">
          <i class="bx bx-money-withdraw c-services__icon"></i>
          <h3>Consórcio</h3>
        </div>

        <div class="c-services__card">
          <i class="bx bx-money c-services__icon"></i>
          <h3>Empréstimos</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-services {
  position: relative;
  &__frame {
    position: absolute;
    z-index: -1;
    right: 15%;
    top: 50%;
    animation: float 2s linear infinite alternate;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 35px;
  }
  &__card {
    cursor: pointer;
    width: 350px;
    background: #ffffff;
    box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
    border-radius: 20px;
    padding: 50px 30px;
    &:hover .c-services__icon {
      transform: translateY(-0.5rem);
      color: $secondary-color;
    }
    i {
      font-size: 5rem;
      transition: all 0.5s ease;
      color: $primary-color;
      padding: 30px 0px;
    }
    h3 {
      padding-bottom: 10px;
    }
  }
}
</style>
