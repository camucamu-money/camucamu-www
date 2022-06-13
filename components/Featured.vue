<i18n>
{
  "en": {
    "titleTag": "Featured",
    "subTitle": "Why we're different"
  },
  "fr": {
    "titleTag": "Fonctionnalités",
    "subTitle": "Pourquoi nous sommes différents"
  }
}
</i18n>

<template>
  <section class="featured">
    <div class="featured--header">
      <h3 class="md-headline">{{ $t('titleTag') }}</h3>
      <div class="md-subheading">{{ $t('subTitle') }}</div>
    </div>
    <div class="featured--items"></div>
  </section>
</template>

<script>
export default {
  name: 'Featured',
  data() {
    return {
      
    };
  },
}
</script>

<style lang="scss" scoped>
.featured {
  &--header {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    
    h3,
    div {
      margin: 0;
    }

    h3 {
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    div {
      font-size: 2rem;
    }
  }
}
</style>
