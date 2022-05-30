import {DATA_LIST_REQUEST,DATA_LIST_SUCCESS,DATA_LIST_FAIL} from '../constants/dataConstant'


export const dataListReducer = (state = { userData: [] }, action) => {
    switch (action.type) {
      case DATA_LIST_REQUEST:
        return { loading: true };
      case DATA_LIST_SUCCESS:
        return { loading: true, DATA: action.payload };
      case DATA_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };