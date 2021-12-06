import $ from 'jquery';


const asyncFunctionMiddleware = storeAPI => next => action => {
  // If the "action" is actually a function instead...
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState)
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action)
}

const fetchApi = storeAPI => next => action => {
  if (action.type === 'fetchApi') {
    const {val1, val2, val3} = action.payload
    $.get(`http://mingyang.pythonanywhere.com/model?last_fico_range_low=${val1}&last_fico_range_high=${val2}&total_rec_prncp=${val3}`, 
    res => {
      return res
    }
    );
  }

  return next(action)
}