
export const getTestData_1 = (state = {}) =>
  state.TEST !== undefined &&
  state.TEST.payload !== undefined &&
  state.TEST.payload.data_1 !== undefined
    ? state.TEST.payload.data_1
    : state;

export const getTestData_2 = (state = {}) =>
    state.TEST !== undefined &&
    state.TEST.payload !== undefined &&
    state.TEST.payload.data_2 !== undefined
      ? state.TEST.payload.data_2
      : state;

export const getMeta = (state = {}) =>
    state.ACTION_TRENDING_GET_DATA_RESPONSE !== undefined &&
    state.ACTION_TRENDING_GET_DATA_RESPONSE.payload !== undefined &&
    state.ACTION_TRENDING_GET_DATA_RESPONSE.payload.meta !== undefined
        ? state.ACTION_TRENDING_GET_DATA_RESPONSE.payload.meta
        : state;
    