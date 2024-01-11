import {ADD_TO_CART} from './constants';

const initialState = [];
const reducer = (state = initialState, Action) => {
  switch (Action.type) {
    case ADD_TO_CART:
      return [...state, Action.data];

    default:
      return state;
  }
};
