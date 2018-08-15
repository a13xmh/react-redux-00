import { takeEvery, all } from "redux-saga/effects";
import {
  ACTION_TRENDING_GET_DATA_REQUEST
} from "./actions";
import * as trendingSagas from "./sagas/trendingSagas";

export default function* rootSaga() {
  yield all([
    takeEvery(
      ACTION_TRENDING_GET_DATA_REQUEST,
      trendingSagas.sagaTrendingGetDataRequest
    )
  ]);
}
