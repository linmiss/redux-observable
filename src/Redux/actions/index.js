import * as ActionTypes from '../ActionTypes.js'

export function addNum(count) {
    return {
        type: ActionTypes.ADD_NUM,
        payload: {
            count
        }
    }
}