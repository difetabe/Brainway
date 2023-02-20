<template>
  <header class="header">
    <div class="container">
      <div class="header__body">
        <div class="header__logo"/>
        <div class="header__main-menu">

          <nav class="nav-menu_header">
            <a
                class="nav-menu__item_header"
                v-for="link of navLinks"
                @click="toPage(link.name)"
            >
              {{ link.title }}
            </a>
          </nav>

          <a class="header__contact-button button">Contact us</a>

          <!--no active -->
          <div class="change-lang">
            <div class="change-lang__decor-icon"></div>
            <div class="change-lang__select">
              <div class="selected-lang">EN</div>
              <svg class="change-lang__down-shift-icon" width="10" height="8" viewBox="0 0 10 8"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M5.86603 7.5C5.48112 8.16667 4.51887 8.16667 4.13397 7.5L0.669873 1.5C0.284972 0.833333 0.766098 5.89981e-08 1.5359 1.26296e-07L8.4641 7.31979e-07C9.2339 7.99277e-07 9.71503 0.833334 9.33013 1.5L5.86603 7.5Z"
                      fill="url(#paint0_linear_67_8388)"/>
                <defs>
                  <linearGradient id="paint0_linear_67_8388" x1="11" y1="3" x2="-1" y2="3"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6A11CB"/>
                    <stop offset="1" stop-color="#2575FC"/>
                  </linearGradient>
                </defs>
              </svg>
              <div class="change-lang__item">RU</div>
              <div class="change-lang__item">RU</div>
            </div>
          </div>
        </div>
        <!--  -->

      </div>
    </div>

  </header>
</template>

<script setup>
  import router from "../router.js";

  const navLinks = [
    {
      title: 'Home',
      name: 'main',
    },
    {
      title: 'Process',
      name: 'process',
    },
    {
      title: 'Company',
      name: 'company',
    },
    {
      title: 'Why us',
      name: 'why-us',
    }
  ]

  function toPage(pageLink) {
    router.push(pageLink)
  }
</script>

<style scoped lang="scss">
  .header {
    position: relative;
    padding: 32px 0 30px 0;
    z-index: 100;

    &__logo {
      position: absolute;
      left: 0;
      top: -10px;
      width: 218px;
      height: 63px;
      background-image: url("../assets/styles/logo.svg");
    }
  }

  .header__body {
    position: relative;
  }

  .header__main-menu {
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 46px;

    font-size: 0.85rem;
    line-height: 1rem;
  }

  .nav-menu_header {
    display: flex;
    justify-content: space-between;
    max-width: 345px;
    width: 100%;
    box-sizing: border-box;
  }

  .nav-menu__item_header {
    position: relative;
    text-align: center;
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .nav-menu__item_header:hover {
    text-shadow: 1px 1px 2px black;
  }

  .nav-menu__item-normal_header {
    opacity: 1;
    font-weight: 400;
  }

  .nav-menu__item-bold_header {
    opacity: 0;
    position: absolute;
    top: 0;
    right: -2%;
    font-weight: 700;
    width: 105%;
  }

  .nav-menu__item_header:hover .nav-menu__item-normal_header{
    opacity: 0;
    cursor: pointer;
  }

  .nav-menu__item_header:hover .nav-menu__item-bold_header {
    opacity: 1;
  }


  .nav-menu__item_header_active {
    display: inline-block;
    color: inherit;
    font-weight: 500;
    text-decoration: none;
    position: relative;
  }

  .nav-menu__item_header_active:hover {
    cursor: default;
  }

  .nav-menu__item_header_active::before {
    position: absolute;
    bottom: -7px;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 5px;
    background: var(__accent-color);
    content: "";
    z-index: 1;
  }

  .change-lang {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    width: 65px;
  }

  .change-lang__:hover {
    cursor: pointer;
  }

  .change-lang__decor-icon {
    width: 22px;
    height: 22px;
    background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z' stroke='%235533FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1 11H21' stroke='%235533FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11 1C13.5013 3.73835 14.9228 7.29203 15 11C14.9228 14.708 13.5013 18.2616 11 21C8.49872 18.2616 7.07725 14.708 7 11C7.07725 7.29203 8.49872 3.73835 11 1V1Z' stroke='%235533FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  }

  .change-lang__select {
    box-sizing: border-box;
    padding: 0 3px 0 2px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 39px;
    height: 25px;
    align-items: flex-start;
    overflow-y: hidden;
  }

  .change-lang__select_active {
    height: max-content;
    background: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  }

  .change-lang__item {
    position: relative;
    margin-bottom: 0.25rem;
  }

  .change-lang__item::before {
    opacity: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: var(__footer-accent-font-color);

    content: "";
  }

  .change-lang__item:hover {
    color: #2575FC;
    background-image: var(__accent-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .change-lang__item:hover::before {
    opacity: 1;
  }

  .selected-lang {
    position: relative;
    margin-bottom: 0.25rem;
  }

  .change-lang__down-shift-icon {
    position: absolute;
    top: 6px;
    right: 2px;
  }



</style>
