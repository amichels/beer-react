import {fetchBeer} from './brew';
import {put, take, fork} from 'redux-saga/effects';

export function* loadBeer() {
  const beer = yield fetchBeer();
  try {
    yield put({type: 'BEER_LOADED', beer});
  } catch(error) {
    yield put({type: 'BEER_LOAD_FAILURE', error})
  }
}

export function* watchForLoadBeer() {
  while(true) {
    yield take('LOAD_BEER');
    yield fork(loadBeer);
  }
}