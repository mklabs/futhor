import { Store } from 'react-chrome-redux';
import { wrapStore } from 'react-contentscript-redux';

var script = document.createElement('script');
script.src = chrome.extension.getURL('script.js');
script.onload = function() {
  const proxyStore = new Store({ portName: 'futbudd' });
  wrapStore(proxyStore);
  this.remove();
};

(document.head || document.documentElement).appendChild(script);
