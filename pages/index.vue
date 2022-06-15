<template>
  <section>
    <header-vue></header-vue>
    <floatline></floatline>
    <about></about>
    <featured></featured>
    <bandeau></bandeau>
    <footer-vue @cookieDone="cookieDone"></footer-vue>
    <cookie v-if="showCookieSettings" @cookieDone="cookieDone"></cookie>
  </section>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      showCookieSettings: false,
    };
  },
  methods: {
    cookieDone(shouldShow) {
      this.showCookieSettings = shouldShow;
    }
  },
}
</script>
