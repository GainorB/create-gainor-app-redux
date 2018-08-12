import React from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// IMPORT ACTIONS
import { functionName } from './actions/sampleAction';

// COMPONENTS
import Home from './components/Home';

const App = () => (
  <div>
    <h1>Hello Gainor!</h1>
    <Route path="/" exact component={Home} />
  </div>
);

// App.propTypes = {};

const mapStateToProps = state => ({
  // THIS KEY WILL GET EXPOSED TO CURRENT COMPONENT AS A PROP
  // example: state.keyFromReducer becomes this.props.example
});

// EXPOSES FUNCTIONNAME AS A PROP TO THE CURRENT COMPONENT => this.props.functionName()
export default connect(mapStateToProps, { functionName })(App);
