import { FETCH_WEATHER } from '../actions/index';
import _ from 'lodash';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return _.isUndefined(action.payload) ? state : [ action.payload.data, ...state ];
  }
  return state;
}