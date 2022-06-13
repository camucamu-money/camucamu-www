export const state = () => ({
  appUrl: process.env.NODE_ENV === 'development' ? 'https://app-dev.camucamu.money' : 'https://app.camucamu.money',
});