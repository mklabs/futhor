import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-contentscript-redux';
import App from './components/App';

const anchor = document.createElement('div');
anchor.id = 'futbudd-anchor';
document.body.insertBefore(anchor, document.body.childNodes[0]);

const store = new Store();
store.ready().then(() => {
  render(<Provider store={store}><App/></Provider>, document.getElementById('futbudd-anchor'));
});
