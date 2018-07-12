import React from 'react';
import { connect } from 'react-redux';
import { getTradepileItems, getUserInfo } from '../utils';
import { v4 } from 'uuid';
import TradepileItem from './TradepileItem';
import PageHeader from './PageHeader';

class Tradepile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: props.tradepile,
      filter: 'all'
    };
  }

  async componentDidMount () {
    const items = await getTradepileItems();
    const user = getUserInfo();
    this.props.dispatch({ type: 'SET_TRADEPILE', items });
    this.props.dispatch({ type: 'SET_USER', user });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ items: nextProps.tradepile });
  }

  filter(state) {
    const { tradepile } = this.props;
    const items = state === 'all' ? tradepile : tradepile.filter(item => item.tradeState === state);
    this.setState({ items, filter: state });
  }

  render () {
    const { items, filter } = this.state;
    return (
      <div>
        <PageHeader />

        <section className="list-view sectioned-item-list">
          <header className="list-view-header">
            <h2>Tradepile</h2>
            <div role="button" className={'btn btn-raised ' + (filter === 'active' ? 'call-to-action' : '')} onClick={() => this.filter('active') }>
              <span className="btn-text">Unsold</span>
            </div>
            <div role="button" className={'btn btn-raised ' + (filter === 'closed' ? 'call-to-action' : '')} onClick={() => this.filter('closed') }>
              <span className="btn-text">Sold</span>
            </div>
            <div role="button" className={'btn btn-raised ' + (filter === 'all' ? 'call-to-action' : '')} onClick={() => this.filter('all') }>
              <span className="btn-text">All</span>
            </div>
          </header>

          <ul className="itemList">
            { items.map(item => <TradepileItem key={v4()} item={item} />) }
          </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tradepile: state.tradepile
  };
};

export default connect(mapStateToProps)(Tradepile);
