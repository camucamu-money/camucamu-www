<i18n>
{
  "en": {
    "titleTag": "Featured",
    "subTitle": "Why we're different",
    "items": [
      "Add your different bank balances | You can add as many bank balances as you want once created, save the different banking operations that pass between your different accounts.",
      "Organize your banking transactions | Enter your bank transactions manually, automatically obtain the balance after transactions, sort, filter your transactions by bank accounts or for all your accounts, the choice is yours.",
      "Safety is our priority | You will not be asked for any bank identifiers, you enter your banking operations manually, your data is secure and only accessible by you alone !"
    ]
  },
  "fr": {
    "titleTag": "Fonctionnalités",
    "subTitle": "Ce que nous proposons",
    "items": [
      "Ajoutez vos différents soldes bancaires | Vous pouvez ajoutez autant de soldes bancaires que vous désirez une fois crées, enregistrez les différentes opérations bancaires qui transitent entre vos différents comptes.",
      "Organisez vos opérations bancaires | Inscrivez vos opérations bancaires manuellement, obtenez automatiquement le solde après opérations, triez, filtrez vos opérations par comptes bancaires ou bien pour tous vos comptes c'est vous qui choissisez.",
      "La sécurité est notre priorité | Aucun identifiants bancaires ne vous sera demandé, vous rentrez manuellement vos opérations bancaires, vos données sont sécurisées et seulement accessibles par vous seul !"
    ]
  }
}
</i18n>

<template>
  <section class="featured container" id="featured">
    <div class="featured--header">
      <h3 class="md-headline">{{ $t('titleTag') }}</h3>
      <div class="md-subheading">{{ $t('subTitle') }}</div>
    </div>
    <div class="featured--items">
      <div
      v-for="(i) in items"
      :key="i"
      class="featured--items--item">
        <h4 class="md-title">{{ $tc(`items[${i - 1}]`, 1) }}</h4>
        <h5 class="md-subheading">{{ $tc(`items[${i - 1}]`, 0) }}</h5>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Featured',
  data() {
    return {
      items: 3,
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

  &--items {
    margin: 6rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &--item:nth-child(2) {
      margin: 0 1rem;
    }

    &--item {
      align-items: center;
      display: flex;
      flex-direction: column;
      flex: 0 0 30%;
      min-height: 16rem;

      h4,
      h5 {
        text-align: center;
        margin: 0;
      }

      h4 {
        font-size: 1.6rem;
        line-height: 2rem;
        margin-bottom: 1rem;
        min-height: 64px;
      }

      h5 {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
}
</style>
