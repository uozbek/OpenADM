import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable.from([]);

export default handleActions({
  USER_LOGGED_IN: (state, action) => ({
    ...state,
    ...action.payload,
  }),

  /**
   * { controller, type, os, cpu, mem_used, mem_total, mem_free }
   */
  ALL_DATA: (state, { payload }) => payload.controllers,

  CONTROLLER: (state, { payload }) => state.map(d => (
    d.controller === payload.controller ? payload : d
  )),

  RESET_DATASTORE_RESP: (state, { payload }) => {
    console.log('RESET_DATASTORE_RESP', payload);
    return state;
  },

}, initialState);
