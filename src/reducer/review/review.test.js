import {reducer, ActionType, ActionCreator, LoadingStatus} from './review.js';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    loadingStatus: ``
  });
});

it(`Reducer should change loadingStatus by a given value`, () => {
  expect(reducer({
    loadingStatus: ``
  }, {
    type: ActionType.CHANGE_LOADING_STATUS,
    payload: LoadingStatus.SUCCESS,
  })).toEqual({
    loadingStatus: LoadingStatus.SUCCESS
  });
});

it(`Action creator for changing loading status return correct action`, () => {
  expect(ActionCreator.changeLoadingStatus(LoadingStatus.SUCCESS)).toEqual({
    type: ActionType.CHANGE_LOADING_STATUS,
    payload: LoadingStatus.SUCCESS
  });
});
