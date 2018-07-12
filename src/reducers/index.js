export const initialState = {
  logged: false,
  view: 'Tradepile',
  tradepile: [],
  user: {
    credits: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return Object.assign({}, state, {
        view: action.view
      });

    case 'SET_USER':
      return Object.assign({}, state, {
        user: action.user
      });

    case 'SET_TRADEPILE':
      return Object.assign({}, state, {
        tradepile: action.items
      });

    case 'LOGIN':
      return Object.assign({}, state, {
        logged: true
      });

    default:
      return state;
  }
};
