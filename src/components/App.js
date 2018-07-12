import React from 'react';
import { connect } from 'react-redux';
import TabMenu from './TabMenu';
import Tradepile from './Tradepile';
import Sales from './Sales';
import Logs from './Logs';

class App extends React.Component {
  componentDidMount () {
    console.log('Did mount');
  }

  componentWillUnmount () {
    console.log('unmount');
  }

  render () {
    const { view } = this.props;
    return (
      <div>
        <TabMenu buttons={['Tradepile', 'Sales', 'Logs']}/>
        <section className="split-screen" style={{ marginTop: '52px' }}>
          {
            view === 'Tradepile' ? <Tradepile /> :
            view === 'Sales' ? <Sales /> :
            view === 'Logs' ? <Logs /> :
            null
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  };
};

export default connect(mapStateToProps)(App);
