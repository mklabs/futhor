const toFutItem = (item) => {
  const data = item.getStaticData();
  const auction = item.getAuctionData();
  const meta = item.getMetaData();
  const [ PAC, SHO, PAS, DRI, DEF, PHY ] = item.getAttributes();
  const level = item.isLegend() ? 'legend' :
    item.isTeamOfTheSeason() ? 'tots' :
    item.isTeamOfTheWeek() ? 'TOTW gold' :
    item.isTeamOfTheYear() ? 'TOTY gold' :
    item.isSilverRating() ? 'silver' :
    item.isBronzeRating() ? 'bronze' :
    item.isGoldRating() ? 'gold' :
    '';

  const classname = `small player item ${item.isRare() ? 'rare' : 'common'} ${level}`;
  const profit = (auction.buyNowPrice * 0.95) - item.lastSalePrice;

  return {
    name: data.name,
    firstName: data.firstName,
    lastName: data.lastName,
    buyNowPrice: auction.buyNowPrice,
    currentBid: auction.currentBid,
    tradeId: auction.tradeId,
    tradeState: auction.tradeState,
    expires: auction.expires,
    birthday: meta.birthday,
    height: meta.height,
    lastSalePrice: item.lastSalePrice,
    id: meta.id,
    itemId: item.id,
    isLeftFoot: meta.isLeftFoot,
    leagueId: item.leagueId,
    nationId: item.nationId,
    teamId: item.teamId,
    preferedPosition: item.preferredPosition,
    position: Object.keys(enums.PlayerPositionsAsInts).find(position => enums.PlayerPositionsAsInts[position] === item.preferredPosition) || '',
    rating: item.rating,
    state: item.state,
    stats: { PAC, SHO, PAS, DRI, DEF, PHY },
    playStyle: item.playStyle,
    time: auction.expires === -1 ? 'Expired' : (Math.floor(auction.expires / 60) + ' minutes'),
    profit,
    classname,

    flag: `https://www.easports.com/fifa/ultimate-team/web-app/content/${fut_guid}/2018/fut/items/images/mobile/flags/card/${item.nationId}.png`,
    photo: `https://www.easports.com/fifa/ultimate-team/web-app/content/${fut_guid}/2018/fut/items/images/mobile/portraits/${meta.id}.png`,
    club : `https://www.easports.com/fifa/ultimate-team/web-app/content/${fut_guid}/2018/fut/items/images/mobile/clubs/normal/${item.teamId}.png`
  };
};

export default () => {
  return new Promise(function(resolve) {
    repositories.Item.getTransferItems().observe(this, (obs, data) => {
      const items = data.items.map(toFutItem);
      resolve(items);
    });
  });
};
