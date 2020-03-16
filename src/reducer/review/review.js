import {extend} from '../../utils.js';

const LoadingStatus = {
  DEFAULT: `DEFAULT`,
  SUCCESS: `SUCCESS`,
  FAILED: `FAILED`
};

const initialState = {
  loadingStatus: LoadingStatus.DEFAULT
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
        status: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
