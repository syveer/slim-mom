// Daily Rate Selectors

export const getDailyRate = state =>
  state.dailyRate ? state.dailyRate.dailyRate : null;
export const getDataUser = state =>
  state.dailyRate ? state.dailyRate.dataUser : null;
export const getNotAllowedProducts = state =>
  state.dailyRate ? state.dailyRate.notAllowedProducts : [];
export const getSummaries = state =>
  state.dailyRate ? state.dailyRate.summaries : [];
export const getDate = state =>
  state.dailyRate ? state.dailyRate.currentDate : null;
export const getIsLoading = state =>
  state.dailyRate ? state.dailyRate.loading : false;
export const getError = state =>
  state.dailyRate ? state.dailyRate.error : null;
