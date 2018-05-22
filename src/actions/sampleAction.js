// IMPORT TYPES
import * as actions from './actions';
import api from '../utils/api';

// EXPORT A FUNCTION TO BE USED IN COMPONENT TO DISPATCH ACTIONS

// EX:
// export function functionName() {
// RETURNS A FUNCTION WITH DISPATCH AS A PARAMETER
//   return function(dispatch) {
//     // DO SOMETHING
//     dispatch({
//       type: actions.ACTION_NAME,
//       payload: data,
//     });
//   };
// }

// EX ES6:
// export const functionName = () => dispatch => {
//   // DO SOMETHING
//   dispatch({
//     type: actions.ACTION_NAME,
//     payload: data,
//   });
// };
