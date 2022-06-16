<i18n>
{
  "en": {
    "columnFirstTitle": "Product",
    "columnSecondTitle": "Company",
    "termsPrivacy": "Terms & privacy",
    "cookieSettings": "Cookie settings",
    "about": "About",
    "contact": "Contact us"
  },
  "fr": {
    "columnFirstTitle": "Produit",
    "columnSecondTitle": "Entreprise",
    "termsPrivacy": "Conditions d'utilisation et confidentialité",
    "cookieSettings": "Paramétres des cookies",
    "about": "À propos",
    "contact": "Nous contacter par mail"
  }
}
</i18n>

<template>
  <footer class="px-3 container">
    <section class="container-fluid">
      <nav class="row d-flex footer-nav-top">
        <div class="logo-wrap">
          <div class="is__container__img">
            <logo></logo>
          </div>
        </div>
        <div class="columns-wrap">
          <div
          v-for="(colData, i) in columns"
          :key="i"
          class="column">
            <div class="label">{{ $t(colData.titlei18n) }}</div>
            <ul
            class="list"
            v-for="(listData, y) in colData.list"
            :key="y">
              <li class="list-item">
                <router-link
                v-if="listData.link"
                :to="listData.link">
                  {{ $t(listData.contenti18n) }}
                </router-link>
                <a
                v-else-if="listData.externalLink"
                target="_blank"
                :href="listData.externalLink">
                  {{ $t(listData.contenti18n) }}
                </a>
                <a v-else-if="listData.isMail" target="_blank" :href="listData.content">
                  {{ $t('contact') }}
                </a>
                <a v-else class="is__inactive" href="#" @click.prevent="">
                  {{ $t(listData.contenti18n) }}
                  <span>In coming</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="row footer-nav-bottom d-flex align-items-center">
        <ul class="link-list d-flex align-items-center">
          <li
          v-for="(col, i) in columnsBottom"
          :key="i">
            <div v-if="col.dropdown" class="language-picker-wrap d-flex align-items-center">
              <div
              v-for="(dp, y) in col.dropdown"
              :key="y"
              class="d-flex align-items-center dropdown"
              @click="columnsBottom[i].showPopup = !columnsBottom[i].showPopup">
                <template v-if="dp.active">
                  <div class="globe-icon" :style="`${!dp.active && 'display:none;'}`">
                    <globe></globe>
                  </div>
                  <div>{{ dp.name }}</div>
                </template>
              </div>
              <div
                class="dropdown-popup"
                v-if="col.showPopup">
                <div class="popup-inner">
                  <p></p>
                  <ul class="popup-list">
                    <li
                    v-for="(c, index) in col.dropdown" :key="index" class="popup-list-item">
                      <div class="popup-list-item-content" @click="switchLang(c.code)">
                        {{ c.name }}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button
            v-else-if="col.isBtn"
            class="list-item-btn"
            @click="$emit('cookieDone', true)"
            >
              {{ $t(col.contenti18n) }}
            </button>
            <a
              v-else-if="col.isLink && !col.isLinkInactive"
              class="list-item-link"
              :href="col.href">
              {{ $t(col.contenti18n) }}
            </a>
            <a
            v-else-if="col.isLink && col.isLinkInactive"
            class="is__inactive"
            href="#"
            @click.prevent="">
              {{ col.content }}
              <span>In coming</span>
            </a>
            <div v-else>{{ col.content }}</div>
          </li>
        </ul>
      </nav>
    </section>
  </footer>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Logo from '@/assets/img/logo.svg?inline';
import Globe from '@/assets/img/globe.svg?inline';

export default {
  name: 'FooterVue',
  components: {
    Logo,
    Globe,
  },
  computed: {
    ...mapState(['language']),
  },
  data() {
    return {
      columns: [
        {
          titlei18n: 'columnFirstTitle',
          list: [
            {
              contenti18n: 'termsPrivacy',
              externalLink: 'https://luctst.notion.site/Terms-privacy-7ed2dcae110d44e385876530a8340243',
            },
          ],
        },
        {
          titlei18n: 'columnSecondTitle',
          list: [
            {
              contenti18n: 'about',
              link: {
                path: '/',
                hash: '#about',
              },
            },
            {
              content: 'mailto:contact@camucamu.money',
              isMail: true,
            },
          ],
        },
      ],
      columnsBottom: [
        {
          showPopup: false,
          dropdown: this.$i18n.locales.map((lg) => ({
            ...lg,
            active: this.$route.path === `/${lg.code}`,
          })),
        },
        {
          contenti18n: 'cookieSettings',
          isBtn: true,
        },
        {
          content: this.$i18n.locale === 'en' ? 'Status' : 'Incidents',
          isLink: true,
          isLinkInactive: true,
        },
        {
          content: `@${new Date().getFullYear()} ${this.$store.state.appName}, inc`,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(['switchLang']),
  },
  watch: {
    language(newValue) {
      const newColumnsBottom = this.columnsBottom.map((column) => {
        const newColumn = { ...column };

        if (newColumn.dropdown) {
          newColumn.dropdown = newColumn.dropdown.map((dp) => {
            const newDp = { ...dp };

            if (newDp.code === newValue) {
              newDp.active = true;
              return newDp;
            }

            newDp.active = false;
            return newDp;
          });
        }

        return newColumn;
      });

      this.columnsBottom = [...newColumnsBottom];
      this.$router.replace(this.switchLocalePath(newValue));
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  overflow: hidden;
  background: #FFFEFC;
  position: relative;
  z-index: 12;

  section {
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    .footer-nav-top {
      display: flex;
      padding: 60px 0;

      .logo-wrap {
        margin-right: 2rem;
        width: 10%;
      }

      .columns-wrap {
        display: grid;
        grid-column-gap: 20px;
        grid-template-columns: repeat(4,1fr);
        grid-row-gap: 0;
        width: calc(100% / 5 * 4);

        .column {
          .label {
            color: rgba(17, 17, 17, 1);
            font-size: 15px;
            font-weight: bold;
          }

          .list {
            font-weight: 544;
            margin: 0;
            padding: 0;

            .list-item {
              list-style: none;
              font-size: 14px;
              font-weight: 430;
              margin: 5px 0px;

              a {
                color: rgba(17, 17, 17, 1);
                text-decoration: none;
                list-style: none;
                cursor: pointer;

                &:hover {
                  text-decoration: underline;
                  color: rgb(235, 87, 87);
                }
              }

              .is__inactive {
                &:hover {
                  text-decoration: line-through;
                  color: rgba(0, 0, 0, 0.6);
                  cursor: not-allowed;
                }

                text-decoration: line-through;
                opacity: .5;

                span {
                  background: rgba(55,53,47,0.08);
                  color: rgba(0, 0, 0, 0.6);
                  font-size: 14px;
                  font-weight: 430;
                  margin-left: .5em;
                  border-radius: 3px;
                  display: inline;
                  font-size: 9px;
                  font-weight: 400;
                  letter-spacing: 0.1em;
                  padding: 2px 3px 2px 4px;
                  text-transform: uppercase;
                  text-decoration: none;
                  vertical-align: text-top;
                  white-space: nowrap;
                }
              }
            }
          }
        }
      }
    }

    .footer-nav-bottom {
      display: flex;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      font-size: 14px;
      font-weight: 544;
      padding: 15px 0;

      .link-list {
        align-items: center;
        display: flex;
        list-style: none;
        letter-spacing: 0.00065em;
        margin: 0;
        padding: 0;

        li {
          margin-right: 1em;
          font-weight: 544;
          letter-spacing: 0.00065em;
          list-style: none;

          .language-picker-wrap {
            align-items: center;
            display: flex;
            height: 30px;
            padding: 2px 8px;
            border-radius: 3px;
            position: relative;

            div {
              align-items: center;
              display: flex;
            }

            &:hover {
              cursor: pointer;
            }

            .dropdown {
              border-radius: 3px;
              padding: 2px 8px;

              &:hover {
                background: #F9F5F1;
              }
            }

            .globe-icon {
              position: relative;
              top: 1px;
              margin-right: 5px;
            }

            .dropdown-popup {
              position: absolute;
              z-index: 500;
              top: 0px;
              transform: translateY(-108%);

              .popup-inner {
                background: rgb(255, 255, 255) none repeat scroll 0% 0%;
                width: 200px;
                padding: 0px;
                box-shadow: rgba(84, 70, 35, 0.3) 0px 6px 20px, rgba(84, 70, 35, 0.5) 0px 0px 1px;
                border-radius: 3px;

                .popup-list {
                  margin: 0;
                  padding: 6px 0px;

                  .popup-list-item {
                    &:hover {
                      background: rgb(249, 245, 241) none repeat scroll 0% 0%;
                    }

                    list-style: none;
                    margin: 0;
                    padding: 0;

                    .popup-list-item-content {
                      color: rgba(17, 17, 17, 1);
                      font-size: 14px;
                      text-decoration: none;
                      padding: 5px 15px;
                    }
                  }
                }
              }
            }
          }

          .list-item-btn {
            &:hover {
              background: #F9F5F1;
            }

            cursor: pointer;
            display: flex;
            align-items: center;
            height: 30px;
            padding: 2px 8px;
            border-radius: 3px;
            background: none;
            margin: 0;
            appearance: none;
            font: inherit;
            border: none;
          }

          .list-item-link {
            color: rgba(17, 17, 17, 1);
            text-decoration: none;
            list-style: none;
            cursor: pointer;

            &:hover {
              text-decoration: underline;
              color: rgb(235, 87, 87);
            }
          }

          .is__inactive {
            color: rgba(17, 17, 17, 1);

            &:hover {
              text-decoration: line-through;
              color: rgba(0, 0, 0, 0.6);
              cursor: not-allowed;
            }

            text-decoration: line-through;
            opacity: .5;

            span {
              background: rgba(55,53,47,0.08);
              color: rgba(0, 0, 0, 0.6);
              font-size: 14px;
              font-weight: 430;
              margin-left: .5em;
              border-radius: 3px;
              display: inline;
              font-size: 9px;
              font-weight: 400;
              letter-spacing: 0.1em;
              padding: 2px 3px 2px 4px;
              text-transform: uppercase;
              text-decoration: none;
              vertical-align: text-top;
              white-space: nowrap;
            }
          }

          div {
            font-weight: 430;
          }
        }
      }
    }
  }
}
</style>
