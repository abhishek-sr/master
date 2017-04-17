import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import InputText from './Display';

render(<AppContainer><InputText /></AppContainer>, document.querySelector('#app'));
