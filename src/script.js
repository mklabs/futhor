import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-contentscript-redux';
import App from './components/App';

const store = new Store();

const app = $('<div id="app"/>');
const button = $('<button />').addClass('btnFooter btnTransfers js-futbudd-open').text('Futbudd');
let lastViewName = '';
let lastView;

gAuthenticationModel.addListener(models.AuthenticationModel.EVENT_AUTHENTICATION_SUCCESSFUL, this, function () {
  store.ready().then(() => {
    store.dispatch({ type: 'LOGIN' });
  });

  const footer = $('#footer');
  const content = $('.content');
  button.appendTo(footer);

  button.on('mouseover', () => button.addClass('hover'));
  button.on('mouseout', () => button.removeClass('hover'));

  footer.on('click', '.js-futbudd-open', () => {
    lastView = content.find('> :first-child').hide();
    footer.find('.selected').removeClass('selected');
    button.addClass('selected');
    app.appendTo(content);

    $('.headerButton').addClass('invisible');
    $('#futHeaderTitle').text('Futbudd');
    render(<Provider store={store}><App/></Provider>, app.get(0));
  });
});

gNavManager.onScreenRequest.observe(this, (obs, ev) => {
  console.log('ev', ev);
  if (ev ==  lastViewName) {
    lastView.show();
  }

  lastViewName = ev;
  button.removeClass('selected');
  app.detach();
});
