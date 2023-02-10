<template>
  <header class="c-header js-header">
    <nav
      class="c-nav l-container l-flex u-justify-content-between u-align-items-center"
    >
      <NuxtLink class="c-nav__logo l-flex  u-align-items-center" to="/">
        <img src="/kiosk_logo.jpeg" alt="Logo Saúde" />
      </NuxtLink>

      <div class="c-nav__menu js-nav__menu">
        <ul class="c-nav__list l-flex u-align-items-center">
          <li class="c-nav__item">
            <a
              class="c-nav__link js-anchor"
              anchor-to="services"
              href="javascript:void(0)"
              >Serviços</a
            >
          </li>
          <li class="c-nav__item">
            <a
              class="c-nav__link js-anchor"
              anchor-to="sobre"
              href="javascript:void(0)"
              >Sobre</a
            >
          </li>

          <li class="c-nav__item">
            <a
              class="c-nav__link c-nav__link--cta js-anchor"
              anchor-to="contact"
              href="javascript:void(0)"
              >Contato</a
            >
          </li>
        </ul>

        <div @click="closeMenu()" class="c-nav__close">
          <i class="bx bx-x"></i>
        </div>
      </div>

      <div @click="openMenu()" class="c-nav__toggle">
        <i class="bx bx-grid-alt"></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  mounted() {
    this.handleMenuClick()
    this.handleHeaderState()
  },
  methods: {
    /**
     * Open menu on mobile
     */
    openMenu() {
      try {
        const navMenu = document.querySelector('.js-nav__menu')
        navMenu.classList.add('is-open')
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * Close menu on mobile
     */
    closeMenu() {
      try {
        const navMenu = document.querySelector('.js-nav__menu')
        navMenu.classList.remove('is-open')
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * Close menu on item click
     */
    handleMenuClick() {
      try {
        let headerLinks = document.querySelectorAll('.c-nav__link')
        const navMenu = document.querySelector('.js-nav__menu')
        for (var i = 0; i < headerLinks.length; i++) {
          headerLinks[i].addEventListener('click', function() {
            navMenu.classList.remove('is-open')
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * Change header class when scroll downs
     */
    handleHeaderState() {
      window.addEventListener('scroll', function() {
        let header = document.querySelector('header')
        if (window.pageYOffset > 400) {
          header.classList.add('is-sticky')
        } else {
          header.classList.remove('is-sticky')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.c-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
  background-color: #fff;
  transition: all 0.8s ease;
  &.is-sticky {
    transition: all 0.8s ease;
    box-shadow: 0 1px 4px hsla(0, 4%, 15%, 0.1);
  }
}
.c-nav {
  height: 70px;
  &__logo {
    font-size: 1.5rem;
    img {
      width: 50px;
    }
  }
  &__toggle {
    display: inline-flex;
    font-size: 1.25rem;
    cursor: pointer;
    color: $primary-color;
  }
  &__list {
    flex-direction: column;
    row-gap: 1.5rem;
  }
  &__link {
    color: $primary-color;
    font-weight: 600;
    transition: 0.3s;
    font-size: 1.05rem;
    &.c-nav__link--cta {
      background-color: $primary-color;
      padding: 12px 30px;
      color: #fff;
      border-radius: 8px;
    }
  }
  &__close {
    font-size: 2rem;
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    cursor: pointer;
  }
  @media screen and (min-width: $md-breakpoint) {
    height: 100px;
    column-gap: 3rem;
    &__logo {
      img {
        width: 100px;
      }
    }
    &__menu {
      margin-left: auto;
    }
    &__toggle,
    &__close {
      display: none;
    }
    &__list {
      flex-direction: row;
      column-gap: 3rem;
    }
  }
  @media screen and (max-width: $md-breakpoint) {
    &__menu {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      padding: 4rem 0;
      border-radius: 0 0 1.5rem 1.5rem;
      box-shadow: 0 1px 4px hsla(0, 4%, 15%, 0.1);
      transition: 2s all ease;
      background-color: #fff;
      &.is-open {
        top: 0;
        transition: 0.5s all ease;
      }
    }
  }
}
</style>
