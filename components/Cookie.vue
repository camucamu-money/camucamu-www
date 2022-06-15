<i18n>
{
  "en": {
    "description": "{appName} uses cookies to offer you a better experience. Click more options button to see details.",
    "firstBtn": "More options",
    "secondBtn": "Accept All | Done",
    "preferences": [
      "Strictly necessary | Essential for the site to function. Always On.",
      "Analytics | Used to analyse user experience and deliver better product"
    ]
  },
  "fr": {
    "description": "{appName} utilise des cookies pour vous offrire une meilleure expérience, cliquez sur le boutton Plus d'options pour plus de détails.",
    "firstBtn": "Plus d'options",
    "secondBtn": "Tout accepter | Terminé",
    "preferences": [
      "Nécessaires | Essentiels pour le bon fonctionnement du site, toujours actif",
      "Analytiques | Utilisé pour analyser l'usage et améliorer votre expérience"
    ]
  }
}
</i18n>

<template>
  <section class="cookie--settings">
    <div class="cookie--settings--global--limit">
      <div class="cookie--settings--global--limit--container container">
        <p class="cookie--settings--global--limit--container--description">
          {{ $t('description', { appName: $store.state.appName }) }}
        </p>
        <nav class="cookie--settings--global--limit--container--buttons">
          <button
            @click="displayPreferences = true"
            v-if="!displayPreferences"
            tabindex="0"
            type="button"
            :aria-label="$t('firstBtn')">
              {{ $t('firstBtn') }}
          </button>
          <button
            @click="validateCookies"
            tabindex="1"
            type="button"
            :aria-label="$t('secondBtn')">
            {{
              displayPreferences
              ? $tc('secondBtn', 0)
              : $tc('secondBtn', 1)
            }}
          </button>
        </nav>
      </div>
      <div class="cookie--settings--global--limit--preferences container" v-if="displayPreferences">
        <section
          v-for="(p, i) in preferences"
          :key="i"
          class="cookie--settings--global--limit--preferences--items">
          <label>
            <p
              v-for="y in 2"
              :key="y">
              {{ $tc(`preferences[${i}]`, y) }}
            </p>
          </label>
          <div class="switch--container">
            <button
            :class="[p.active ? 'active' : 'inactive']"
            :disabled="p.disabled"
            @click="switchCookieSettings(i)">
              <div class="inner" :style="`${p.active ? 'left:12px;' : 'left:0;'}`"></div>
            </button>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'cookiesetting',
  data() {
    return {
      displayPreferences: false,
      preferences: [
        {
          id: 'necessary',
          disabled: true,
          active: true,
        },
        {
          id: 'analytics',
          disabled: false,
          active: false,
        },
      ],
      settings: {
        necessary: true,
      },
    };
  },
  methods: {
    switchCookieSettings(prefIndex) {
      const newPref = [...this.preferences];

      newPref[prefIndex].active = !newPref[prefIndex].active;

      this.settings[newPref[prefIndex].id] = newPref[prefIndex].active;
      this.preferences = newPref;
    },
    validateCookies() {
      if (!this.displayPreferences) {
        const settings = this.preferences.reduce(
          (prev, current) => {
            const newPrev = { ...prev };

            newPrev[current.id] = true;
            return newPrev;
          },
          {},
        );
        this.$cookies.set('camucamu_check_cookie_consent', true, '1m', null, null, null, true);
        this.$cookies.set('camucamu_cookie_consent', JSON.stringify(settings), '1m', null, null, null, true);
        this.$emit('cookieDone', false);
        return true;
      }

      this.$cookies.set('camucamu_check_cookie_consent', true, '1m', null, null, null, true);
      this.$cookies.set('camucamu_cookie_consent', JSON.stringify(this.settings), '1m', null, null, null, true);
      this.$emit('cookieDone', false);
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.cookie--settings {
  bottom: 0;
  left: 0;
  background: rgba(83, 80, 80, 0.9);
  padding: 18px 12px 6px 12px;
  position: fixed;
  transform: translateY(0);
  transition: transform 250ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 100vw;
  z-index: 5000;

  &--global--limit {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;

    &--container {
      align-items: center;
      display: flex;
      flex: 1 0 auto;
      justify-content: space-between;
      margin: auto;
      padding-bottom: 12px;
      width: 100%;

      &--description {
        color: #d1cdc5;
        font-weight: 430;
        font-size: 14px;
        line-height: 1.4em;
        margin: 0;
        padding: 4px;
        text-align: left;
      }

      &--buttons {
        flex-direction: row;
        justify-content: flex-end;
        width: auto;
        max-width: 250px;
        margin-left: 12px;
        margin-top: 0;
        display: flex;
        flex-grow: 1;
        gap: 12px;
        width: 100%;

        button:first-child {
          word-break: break-word;
          white-space: pre-line;
          border-radius: 4px;
          border: 0;
          height: auto;
          font-size: 14px;
          line-height: 1;
          font-weight: 544;
          letter-spacing: 0.00065em;
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
          transition: background 150ms;
          padding: 6px;

          &:hover {
            background: rgba(0,0,0,0.06);
            outline: none;
          }
        }

        button:last-child {
          color: #FFFFFF;
          background: rgba(68, 174, 237, 1);
          border: 1px solid rgba(54, 53, 47, 0.4);
          padding-left: 12px;
          padding-right: 12px;
          min-height: 36px;
          padding-top: 6px;
          padding-bottom: 6px;

          &:hover {
            background: rgba(68, 174, 237, 0.75);
          }
        }
      }
    }

    &--preferences {
      display: grid;
      grid-gap: 19px;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
      padding-bottom: 20px;
      margin: auto;
      width: 100%;

      &--items {
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.12);
        border-radius: 3px;
        padding: 12px;
        display: flex;
        flex-direction: row;
        align-items: start;
        align-self: start;
        justify-content: space-between;
        flex-grow: 1;
        width: 100%;
        height: 100%;

        label {
          p:first-child {
            color: #FFFFFF;
            font-size: 14px;
            font-weight: 544;
            margin: 0;
            padding: 0;
          }

          p:last-child {
            color: #d1cdc5;
            font-size: 14px;
            font-weight: 430;
            margin: 0;
            padding: 0;
          }
        }

        .switch--container {
          flex-grow: 1;
          justify-content: flex-end;
          display: flex;
          margin-left: 10px;

          .active {
            background: #2eaadc;
          }
          .inactive {
            background: rgba(0, 0, 0, 0.2);
          }

          button {
            &:disabled {
              opacity: .3;
              cursor: disabled;
            }

            display: block;
            width: 30px;
            height: 18px;
            border-radius: 30px;
            outline: 0;
            border: 0;
            padding: 2px;

            .inner {
              background: #ffffff;
              width: 14px;
              height: 14px;
              border-radius: 14px;
              position: relative;
              transition: left 150ms;
            }
          }
        }
      }
    }
  }
}
</style>
