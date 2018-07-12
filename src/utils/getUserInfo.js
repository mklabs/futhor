export default () => {
  const user = gUserModel;
  return {
    name: user._personaName,
    credits: user.getCredits(),
    wins: user._userVO._wins,
    draws: user._userVO._draws,
    losses: user._userVO._losses,
    date: user._userVO._established.toString(),
    clubName: user._userVO._clubName,
    clubAbbr: user._userVO._clubAbbr,
    img: `https://www.easports.com/fifa/ultimate-team/web-app/content/${fut_guid}/2018/fut/items/images/mobile/clubs/normal/${user._userVO._badgeId}.png`
  };
};
