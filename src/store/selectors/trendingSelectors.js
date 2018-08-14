
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
  