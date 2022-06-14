<i18n>
{
  "en": {
    "mainTitle": "Why we even exist ?"
  },
  "fr": {
    "mainTitle": "Qui sommes-nous ?",
    "firstContent": "Application web disponible seulement sur ordinateurs, CamuCamu a pour objectif de faciliter la gestion des comptes bancaires des particuliers.",
    "secondContent": "En associant sécurité et simplicité nous avons à coeur de vous fournir le meilleur service disponible qui vous permettra de gagner du temps lorsque vous organisez vos comptes bancaires, vous aurez la possibilité d'inscrire vos différentes opérations bancaires de vos différents soldes de maniére sécurisée. Aucun identifiants bancaires n'est demandé !",
    "thirdContent": "Nous pensons que la gestion des comptes bancaires est encore trop compliqué et qu'il n'existe pas de services permettant par exemple de retrouver simplement le montant de votre solde après X opérations, d'avoir une interface digitale intuitive et simple ou en clin d'oeil vous retrouvez les opérations pour vos différents soldes bancaires...",
    "fourContent": "Tous ces points sont importants, c'est pourquoi nous travaillons chaque jour pour améliorer nos services qui peuvent vous permettre de gagner un précieux temps."
  }
}
</i18n>

<template>
  <section class="about">
    <div class="about--title">
      <h2 class="md-display-2">{{ $t('mainTitle') }}</h2>
    </div>
    <div class="about--content">
      <md-content>{{ $t('firstContent') }}</md-content>
      <md-content>{{ $t('secondContent') }}</md-content>
      <md-content>{{ $t('thirdContent') }}</md-content>
      <md-content>{{ $t('fourContent') }}</md-content>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
.about {
  min-height: 100vh;

  &--title,
  &--content {
    max-width: 45vw;
  }

  &--title {
    h2 {
      margin-top: 0;
    }
  }

  &--content {
    div {
      font-size: 1.2rem;
      line-height: 1.8rem;
      margin-bottom: 2rem;
    }
  }
}
</style>