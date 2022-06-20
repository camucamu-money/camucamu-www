<i18n>
{
  "en": {
    "nav": [
      "About",
      "Features"
    ],
    "cta": "Start",
    "dropdownLabel": "Language"
  },
  "fr": {
    "nav": [
      "À propos",
      "Fonctionnalités"
    ],
    "cta": "Commencer",
    "dropdownLabel": "Langage"
  }
}
</i18n>

<template>
  <header class="header container" ref="h">
    <div class="is__container__img header--logo">
      <logo></logo>
    </div>
    <md-tabs md-alignment="right" style="margin-left:auto;">
      <md-tab :md-label="$t('nav[0]')" :to="{ path: $route.path, hash: '#about' }"></md-tab>
      <md-tab :md-label="$t('nav[1]')" :to="{ path: $route.path, hash: '#featured' }"></md-tab>
    </md-tabs>
    <md-button :href="$store.state.appUrl" target="_blank">{{ $t('cta') }}</md-button>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import Logo from '@/assets/img/logo.svg?inline';

export default {
  name: 'HeaderVue',
  components: {
    Logo,
  },
  computed: {
    ...mapState(['language']),
  },
  created() {
    if (process.browser) {
      let lastScrollTop = 0;
  
      window.addEventListener('scroll', () => {
        if (!this.$refs.h) return false;
        const header = this.$refs.h;
        const isDisplayNone = 'is__header_hidden';
        const isHeaderVisible = 'is__header__visible';
        const st = window.pageYOffset || document.documentElement.scrollTop;
  
        if (st > lastScrollTop) {
          lastScrollTop = st <= 0 ? 0 : st;
          if (header.classList.contains(isDisplayNone)) {
            return false;
          };
          header.classList.add(isDisplayNone);
          header.classList.remove(isHeaderVisible);
          return true;
        }
  
        lastScrollTop = st <= 0 ? 0 : st;
        if (header.classList.contains(isDisplayNone)) {
          header.classList.remove(isDisplayNone);
          header.classList.add(isHeaderVisible);
        }
        return true;
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #FFF;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  height: 4rem;
  position: sticky;
  transition: top .5s;
  width: 100%;

  &--logo {
    max-width: 6rem;
  }
}
</style>
