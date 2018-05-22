import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CONNECT COMPONENTS TO REDUX STORE
import { connect } from 'react-redux';
// IMPORT ACTIONS
import { functionName } from '../actions/sampleAction';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Gainor!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // THIS KEY WILL GET EXPOSED TO CURRENT COMPONENT AS A PROP
  // example: state.keyFromReducer
});

// EXPOSES FUNCTIONNAME AS A PROP TO THE CURRENT COMPONENT
export default connect(mapStateToProps, { functionName })(App);
