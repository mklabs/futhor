import React from 'react';

class TradepileItem extends React.Component {
  render () {
    const { item } = this.props;

    return (
      <li className="listFUTItem has-auction-data">
        <div className="rowContent">
          <div className="entityContainer">
            <div className={item.classname}>
              <div className="statusOverlay"></div>
              <div className="infoTab"></div>
              <div className="trainingBoost"></div>
              <div className="playerOverview">
                <div className="rating">{item.rating}</div>
                <div className="position">{item.position}</div>
                <img src={item.club} className="badge" />
                <img src={item.flag} className="flag" />
              </div>
              <img src={item.photo} className="photo" />
            </div>
            <div className="name">{item.name}</div>
            <div className="secondary player-stats-data-component">
              <ul>
                <li><span className="label">PAC</span><span className="value">{item.stats.PAC}</span></li>
                <li><span className="label">SHO</span><span className="value">{item.stats.SHO}</span></li>
                <li><span className="label">PAS</span><span className="value">{item.stats.PAS}</span></li>
                <li><span className="label">DRI</span><span className="value">{item.stats.DRI}</span></li>
                <li><span className="label">DEF</span><span className="value">{item.stats.DEF}</span></li>
                <li><span className="label">PHY</span><span className="value">{item.stats.PHY}</span></li>
              </ul>
              <span className="slot-position"></span>
            </div>
          </div>
          <div className="auction">
            <div className="auctionValue">
              <span className="label">Buy Now</span>
              <span className="coins value">{item.buyNowPrice}</span>
            </div>
            <div className="auctionValue">
              <span className="label">Purchased for</span>
              <span className="coins value">{item.lastSalePrice}</span>
            </div>
            <div className="auctionValue">
              <span className="label">Profit</span>
              <span className="coins value">{item.profit}</span>
            </div>
            <div className="auction-state">
              <span className="label">Temps</span>
              <span className="time">{item.time}</span>
            </div>
            <div className="auction-state">
              <span className="label">Status</span>
              <span className="time">{item.tradeState}</span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default TradepileItem;
