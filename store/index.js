export const state = () => ({
  appUrl: process.env.NODE_ENV === 'development' ? 'https://app-dev.camucamu.money' : 'https://app.camucamu.money',
  language: 'fr',
  appName: 'camcamu',
});

export const mutations = {
  switchLang(state, newLang) {
    state.language = newLang;
  },
};