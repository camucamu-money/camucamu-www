<i18n>
{
  "en": {
    "cta": "Start"
  },
  "fr": {
    "cta": "Commencer"
  }
}
</i18n>

<template>
  <section class="bandeau">
    <md-button :href="$store.state.appUrl" target="_blank">{{ $t('cta') }}</md-button>
  </section>
</template>

<script>
export default {
  name: 'Bandeau',
}
</script>

<style lang="scss" scoped>
.bandeau {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 140, 95) none repeat scroll 0% 0%;
  height: 20vh;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 4rem;
    height: auto;
  }
}
</style>