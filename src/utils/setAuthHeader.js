import axios from 'axios';

// SET TOKEN IN HEADER ON EVERY REQUEST FROM CLIENT
export default (token = null) => {
  if (token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
