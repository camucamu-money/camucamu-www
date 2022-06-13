<template>
  <header class="header">
    <div class="is__container__img header--logo">
      <logo></logo>
    </div>
    <nav class="header--menu">
      <ul>
        <li>
          <nuxt-link :to="{ path: '/'}">À propos</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ path: '/' }">Fonctionnalités</nuxt-link>
        </li>
      </ul>
    </nav>
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
  height: 3rem;
  justify-content: space-between;
  position: sticky;
  width: 100%;

  &--logo {
    max-width: 6rem;
  }
}
</style>
