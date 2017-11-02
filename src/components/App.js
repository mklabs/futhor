
import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello World!! {this.props.count}</h1>
        <button onClick={() => this.props.dispatch({ type: 'ADD_COUNT' })}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
