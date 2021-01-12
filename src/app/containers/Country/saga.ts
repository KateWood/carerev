import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './actions';

export function* fetchCountry(req) {
  const requestURL = `https://api.carerev.com/api/v1/countries/${req.payload}`;

  try {
    const country = yield call(request, requestURL);
    console.log(country);
    if (country) {
      yield put(actions.fetchCountrySuccess(country));
    } else {
      yield put(actions.fetchCountryError('No country found.'));
    }
  } catch (err) {
    yield put(actions.fetchCountryError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* saga() {
  yield takeLatest(actions.fetchCountry.type, fetchCountry);
}
