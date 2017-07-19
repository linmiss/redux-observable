import { combineEpics } from 'redux-observable';
import * as ActionTypes from '../../ActionTypes';

export const addNum = action$ => (
     action$.ofType(ActionTypes.ADD_NUM)
    // If you wanted to do an actual access check you
    // could do so here then filter by failed checks.
    .delay(20000)
)

export default combineEpics(
    addNum
);
