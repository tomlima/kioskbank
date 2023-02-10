<template>
  <section class="c-content u-section" id="contact">
    <div class="l-container l-grid c-content__container">
      <div class="c-content__image">
        <div class="overlay"></div>
        <img src="/online.jpg" alt="" />
      </div>
      <div class="c-content__text">
        <img src="/shape.png" data-not-lazy alt="Shape" />
        <h2 class="c-content__title u-mb-2">
          Agende uma consultoria <b>gratuitamente</b> com um de nossos
          especialistas.
        </h2>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="Mensagem"
          ></textarea>
          <button
            type="button"
            @click="sendContact()"
            class="c-button c-button--primary"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    sendContact: function() {
      const notificationBox = document.getElementById('notification')
      notificationBox.classList.add('is-active')
      this.closeNotification()
    },
    closeNotification() {
      setTimeout(() => {
        const notificationBox = document.getElementById('notification')
        notificationBox.classList.remove('is-active')
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-content {
  background-color: #2a87fb0d;
  padding: 50px 0;
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
    ul {
      margin: 0;
      li {
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 15px;
        i {
          font-size: 2rem;
          color: $primary-color;
        }
      }
    }
  }
  &__description {
    padding: 0 2rem;
    font-size: 1.3rem;
    font-weight: 200;
    color: #7d79879d;
  }

  @media screen and (min-width: $md-breakpoint) {
    &__container {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
    &__image {
      height: 500px;
    }
    &__text {
      text-align: initial;
      grid-column: 2;
      grid-row: 1;
      ul {
        li {
          justify-content: flex-start;
        }
      }
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
      column-gap: 5rem;
    }
    &__img {
      width: 100%;
    }
    &__description {
      padding-right: 8rem;
    }
  }
}
form {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}
</style>
