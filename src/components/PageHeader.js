import React from 'react';
import { connect } from 'react-redux';

class PageHeader extends React.Component {
  render () {
    const { projectedCredits, tradepileCredits, tradepileProfits, transferListSize, sales } = this.props;

    return (
      <div className="row tile-count">
        <div className="tile-stats-count">
          <span className="count_top"><i className="fa fa-euro"></i> Projected Credits</span>
          <div className="count green">{ projectedCredits }</div>
        </div>
        <div className="tile-stats-count">
          <span className="count_top"><i className="fa fa-money"></i> Tradepile Value</span>
          <div className="count">{ tradepileCredits }</div>
        </div>
        <div className="tile-stats-count">
          <span className="count_top"><i className="fa fa-money"></i> Tradepile Profits</span>
          <div className="count">{ tradepileProfits }</div>
        </div>
        <div className="tile-stats-count">
          <span className="count_top"><i className="fa fa-briefcase"></i> Elements in tradepile</span>
          <div className="count">{ transferListSize }</div>
        </div>
        <div className="tile-stats-count">
          <span className="count_top"><i className="fa fa-exchange"></i> Elements sold</span>
          <div className="count">{ sales.length }</div>
        </div>
      </div>
    );
  }
}

export default connect(({ tradepile, user }) => {
  const tradepileCredits = Math.floor(tradepile.filter(item => item.tradeState !== 'closed').reduce((sum, item) => {
    return sum + item.buyNowPrice * 0.95;
  }, 0));

  const tradepileProfits = Math.floor(tradepile.filter(item => item.tradeState !== 'closed').reduce((sum, item) => {
    const profit = item.buyNowPrice * 0.95 - item.lastSalePrice;
    return sum + profit;
  }, 0));

  return {
    tradepileCredits,
    tradepileProfits,
    projectedCredits: user.credits + tradepileCredits,
    transferListSize: tradepile.length,
    sales: tradepile.filter(item => item.tradeState === 'closed')
  };
})(PageHeader);
