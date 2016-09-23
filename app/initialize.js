import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import counterApp from './reducers';
import App from './components/App';

const store = createStore(
  counterApp, module.hot && module.hot.data && module.hot.data.counter || 0);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default);
  });
  module.hot.accept();

  module.hot.dispose((data) => {
    // data.counter = store.getState();
    const counter = Object.prototype.hasOwnProperty.call(data, 'counter') ? data.counter : store.getState();
    [].slice.apply(document.querySelector('#app').children).forEach((c) => {
      c.remove();
    });
  });
}

const load = () => {
  Array.prototype.forEach.call(document.querySelectorAll('.mdl-card__media'), function (el) {
    const link = el.querySelector('a');
    if (!link) {
      return;
    }
    const target = link.getAttribute('href');
    if (!target) {
      return;
    }
    el.addEventListener('click', () => {
      location.href = target;
    });
  });
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
