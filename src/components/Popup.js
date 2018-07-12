import React from 'react';
import { connect } from 'react-redux';

class Popup extends React.Component {
  render () {
    const { logged } = this.props;
    return (
      <p>{ logged ? 'Logged in' : 'Not logged in'}</p>
    );
  }
}

const mapStateToProps = (state) => ({
  logged: state.logged
});

export default connect(mapStateToProps)(Popup);
