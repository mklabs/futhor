import React from 'react';
import { connect } from 'react-redux';
import { getTradepileItems, getUserInfo } from '../utils';
import { v4 } from 'uuid';
import TradepileItem from './TradepileItem';
import PageHeader from './PageHeader';

class Sales extends React.Component {
  async componentDidMount () {
    console.log('mount sales');
    const items = await getTradepileItems();
    const user = getUserInfo();
    this.props.dispatch({ type: 'SET_TRADEPILE', items });
    this.props.dispatch({ type: 'SET_USER', user });
  }

  componentWillUnmount () {
    console.log('unmount sales');
  }

  render () {
    const { tradepile } = this.props;
    const sales = tradepile.filter(item => item.tradeState === 'closed');

    return (
      <div>
        <PageHeader />

        <section className="list-view sectioned-item-list">
          <header className="list-view-header">
            <h2>Sales</h2>
          </header>

          <ul className="itemList">
            { sales.map(item => <TradepileItem key={v4()} item={item} />) }
          </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ tradepile }) => {
  return {
    tradepile
  };
};

export default connect(mapStateToProps)(Sales);
