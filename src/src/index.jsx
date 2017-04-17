import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import InputText from './display.jsx';

render(<AppContainer><InputText /></AppContainer>, document.querySelector('#app'));

if (module && module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./display.jsx').default;
    render(
      <AppContainer>
        <InputText />
      </AppContainer>,
      document.querySelector('#container'),
    );
  });
}
