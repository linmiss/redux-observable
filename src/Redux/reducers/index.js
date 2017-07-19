import * as ActionTypes from '../../ActionTypes';

const addNum = (state = {count: null, isOk: false}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NUM:
            return {
                ...state,
                count: action.payload.count,
                isOk: true
            }
        default:
            return state
    }
}

export default addNum;