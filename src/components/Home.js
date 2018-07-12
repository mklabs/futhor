import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render () {
    return (
      <div>
        Home component {this.props.view}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  };
};

export default connect(mapStateToProps)(Home);
