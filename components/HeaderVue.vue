<i18n>
{
  "en": {
    "nav": [
      "About",
      "Features"
    ],
    "cta": "Start"
  },
  "fr": {
    "nav": [
      "À propos",
      "Fonctionnalités"
    ],
    "cta": "Commencer"
  }
}
</i18n>

<template>
  <header class="header">
    <div class="is__container__img header--logo">
      <logo></logo>
    </div>
    <md-tabs md-alignment="right" style="margin-left:auto;">
      <md-tab :md-label="$t('nav[0]')" :to="{ path: '/' }"></md-tab>
      <md-tab :md-label="$t('nav[1]')" :to="{ path: '/' }"></md-tab>
    </md-tabs>
    <md-button class="md-raised md-primary">{{ $t('cta') }}</md-button>
  </header>
</template>

<script>
import Logo from '@/assets/img/logo.svg?inline';

export default {
  name: 'HeaderVue',
  components: {
    Logo,
  },
}
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  height: 4rem;
  position: sticky;
  width: 100%;

  &--logo {
    max-width: 6rem;
  }
}
</style>
