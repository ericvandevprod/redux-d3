import { FETCH_WEATHER } from '../actions/index';
import moment from 'moment';
import _ from 'lodash';

const getConvertedTime = (timestamp) => {
  return moment.unix(timestamp).format('MM-DD-YYYY');
};

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      let data = action.payload.data;

      if (data && _.isArray(data.daily.data)) {
        data.daily.data.map(function(day, i, days) {
          let amendIndex = false;

          if (days[0].hasOwnProperty('time') && data.currently.hasOwnProperty('time')) {
            amendIndex = getConvertedTime(days[0].time) !== getConvertedTime(data.currently.time);
          }
          if (amendIndex && i === 0) {
            days.splice(day, 1);
          }
        });
      }
      return _.isUndefined(action.payload) ? state : [ data, ...state ];
  }
  return state;
}