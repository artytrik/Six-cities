import {extend} from '../../utils';

const LoadingStatus = {
  DISABLED: `DISABLED`,
  SUCCESS: `SUCCESS`,
  FAILED: `FAILED`
};

const initialState = {
  loadingStatus: ``
};

const ActionType = {
  CHANGE_LOADING_STATUS: `CHANGE_LOADING_STATUS`
};

const ActionCreator = {
  changeLoadingStatus: (status) => ({
    type: ActionType.CHANGE_LOADING_STATUS,
    payload: status
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOADING_STATUS:
      return extend(state, {
        loadingStatus: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, LoadingStatus};
