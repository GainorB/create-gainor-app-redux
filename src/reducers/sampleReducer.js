// IMPORT ACTIONS
import * as actions from '../actions';

// CREATE INITIAL STATE
// AN OBJECT CONTAINING THE INITIAL STRUCTURE OF YOUR DATA

const initialState = {};

// A PURE FUNCTION
// EVALUATES WHAT TYPE OF ACTION WE ARE DEALING WITH
// ACTION INCLUDES A TYPE THAT WE ARE EVALUATING
export default function(state = initialState, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case actions.ACTION_NAME:
      return {};

    default:
      return state;
  }

  // NEVER MUTATE STATE, ALWAYS RETURN A BRAND NEW COPY OF STATE
  // ADDING TO STATE: MAP, CONCAT, OBJECT.ASSIGN()
  // UPDATING STATE: MAP
  // REMOVING FROM STATE: FILTER
}
