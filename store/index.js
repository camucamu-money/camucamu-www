export const state = () => ({
  appUrl: process.env.NODE_ENV === 'development' ? 'https://app-dev.camucamu.money' : 'https://app-dev.camucamu.money',
  language: 'fr',
  appName: 'camcamu',
  wwwUrl: process.env.NODE_ENV === 'development' ? 'https://dev.camucamu.money' : 'https://dev.camucamu.money'
});

export const mutations = {
  switchLang(state, newLang) {
    state.language = newLang;
  },
};