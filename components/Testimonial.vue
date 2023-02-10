<template>
  <section class="u-section" :id="id">
    <div class="l-container">
      <div class="c-wrapper">
        <h2 class="u-section__title">O que nossos clientes dizem</h2>
        <div>
          <div class="c-carousel">
            <div class="c-carousel__container">
              <div class="c-carousel__slide" data-slideIndex="1">
                <div class="c-card">
                  <div
                    class="c-card__inner  l-flex u-align-items-center u-justify-items-center"
                  >
                    <div class="c-card__thumb">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </div>
                    <h4>
                      Ricardo Guimarães
                    </h4>
                    <p>
                      O atendimento proporcionado pela Kiosk Bank Brasil foi o
                      melhor que já pude experimentar em toda a minha vida.
                    </p>
                  </div>
                </div>
              </div>

              <div class="c-carousel__slide" data-slideIndex="2">
                <div class="c-card">
                  <div
                    class="c-card__inner  l-flex u-align-items-center u-justify-items-center"
                  >
                    <div class="c-card__thumb">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </div>
                    <h4>
                      Maria Vitória
                    </h4>
                    <p>
                      Fui super bem recebida pela equipe da Kiosk Bank Brasil,
                      de imediato já sanaram todas as minhas dúvidas.
                    </p>
                  </div>
                </div>
              </div>

              <div class="c-carousel__slide" data-slideIndex="3">
                <div class="c-card">
                  <div
                    class="c-card__inner  l-flex u-align-items-center u-justify-items-center"
                  >
                    <div class="c-card__thumb">
                      <img
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                      />
                    </div>
                    <h4>
                      Maurício Franz
                    </h4>
                    <p>
                      O serviço de atendimento da Kiosk Bank Brasil é realmente
                      fantástico! resolveram todos os meus problemas com apenas
                      um telefonema.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              @click="navigate('backward')"
              id="back-button"
              class="o-arrow o-arrow--left"
            >
              <i class="bx bx-chevron-left"></i>
            </div>
            <div @click="navigate('forward')" class="o-arrow o-arrow--right">
              <i class="bx bx-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CarouselTestimonial',
  props: {
    /**
     * Unique identifier to this component
     */
    id: {
      type: String,
      default: 'carousel-1'
    }
  },
  methods: {
    /**
     * Carousel slides to the left when clicking on the arrows.
     */
    navigate(position) {
      try {
        const carouselEl = document.getElementById(this.id)
        const slideContainerEl = carouselEl.querySelector(
          '.c-carousel__container'
        )
        const slideEl = carouselEl.querySelector('.c-carousel__slide')
        let slideWidth = slideEl.offsetWidth

        slideContainerEl.scrollLeft = this.getNewScrollPosition(
          position,
          slideContainerEl,
          slideWidth
        )
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * Get a new scrool position to navigate function
     */
    getNewScrollPosition(arg, slideContainerEl, slideWidth) {
      try {
        const maxScrollLeft = slideContainerEl.scrollWidth - slideWidth * 2
        if (arg === 'forward') {
          const x = slideContainerEl.scrollLeft + slideWidth
          return x <= maxScrollLeft ? x : 0
        } else {
          const x = slideContainerEl.scrollLeft - slideWidth
          return x >= 0 ? x : maxScrollLeft
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/*------------------------------------------- 
Use these variables only for examples purpose.
--------------------------------------------*/
$primary-color: #6ec4e9;
$secondary-color: #2c7594;
/*------------------------------------------------------------- 
When start a new project you must delete these colors variables.
--------------------------------------------------------------*/

.c-wrapper {
  z-index: 1;
  padding: 50px;
}

.c-carousel {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  &__container {
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__slide {
    min-width: 100%;
    @media screen and (min-width: $lg-breakpoint) {
      min-width: 50%;
      scroll-snap-align: center;
      position: relative;
    }
  }
}

.c-card {
  width: 100%;
  &__inner {
    &:hover {
      box-shadow: rgba(38, 142, 190, 0.178) 0px 2px 8px 0px;
      transform: translateY(-5px);
    }
    transition: all 0.5s ease;
    margin: 0 15px 0 0;
    flex-direction: column;
    row-gap: 0.5rem;
    height: 300px;
    border-radius: $border-r;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-image: url('/world_shape.png'),
      linear-gradient(15deg, #298ac30d, #298ac30d, #298ac30d);
    background-size: auto;
    background-position: right;
    background-repeat: no-repeat, no-repeat;
    padding: 2rem 4rem;
    h4 {
      display: block;
      margin: 0.5rem 0;
    }
    p {
      font-size: 0.9rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    @media screen and (min-width: $lg-breakpoint) {
      margin: 15px;
    }
  }
  &__thumb {
    display: block;
    overflow: hidden;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px,
      rgb(0 0 0 / 8%) 0px 0px 0px 1px;
    img {
      object-fit: cover;
    }
  }
}

.o-arrow {
  display: none;
  @media screen and (min-width: $lg-breakpoint) {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    top: calc(50% - 25px);
    border: 2px solid $primary-color;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    i {
      color: $primary-color;
      font-size: 1.5rem;
    }
    &.o-arrow--right {
      right: 0;
    }
    &.o-arrow--left {
      left: 0;
    }
  }
}
</style>
