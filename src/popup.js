import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import Popup from './components/Popup';

const store = new Store({
  portName: 'futhor'
});

render(<Provider store={store}><Popup/></Provider>, document.getElementById('app'));
