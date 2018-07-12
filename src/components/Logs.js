import React from 'react';
import { connect } from 'react-redux';

class Logs extends React.Component {
  render () {
    return (
      <div>
        Logs component
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  };
};

export default connect(mapStateToProps)(Logs);
