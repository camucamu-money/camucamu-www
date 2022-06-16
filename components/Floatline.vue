<i18n>
{
  "en": {
    "title": "Manage your bank accounts easily !",
    "subtitle": "Developed with the aim of making the management of bank accounts simpler, CamuCamu allows you to make your accounts easily and securely. No more illegible excel spreadsheet save your banking transactions and find them whenever you want.",
    "cta": "Start"
  },
  "fr": {
    "title": "Faîtes vos comptes plus facilement !",
    "subtitle": "Développé dans le but de rendre la gestion des comptes bancaires plus simples, CamuCamu vous permet de faire vos comptes en toute simplicité et de manière sécurisé. Plus de tableau excel illisible enregistrez vos opérations bancaires et retrouvez-les quand vous le voulez.",
    "cta": "Commencer"
  }
}
</i18n>

<template>
  <section class="floatline container">
    <div class="floatline--content">
      <h1 class="md-display-3">{{ $t('title') }}</h1>
      <h2 class="md-subheading">{{ $t('subtitle')}}</h2>
      <md-button class="md-raised md-primary" :href="$store.state.appUrl">{{ $t('cta') }}</md-button>
    </div>
    <div class="floatline--img">
      <div class="is__container__img">
        <floatline-illu></floatline-illu>
      </div>
    </div>
  </section>
</template>

<script>
import FloatlineIllu from '@/assets/img/floatline.svg?inline';

export default {
  name: 'FloatLine',
  components: {
    FloatlineIllu,
  },
}
</script>

<style lang="scss" scoped>
.floatline {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: calc(90vh - 4rem);

  &--content {
    margin-right: 2rem;
    max-width: 60%;

    h1,
    h2 {
      margin: 0;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 2rem;
      line-height: 4.5rem;
    }

    h2 {
      font-size: .9rem;
      line-height: 23px;
      margin-bottom: 1rem;
    }

    button {
      margin-left: 0;
    }
  }

  &--img {
    flex: 0 0 50%;
  }
}
</style>