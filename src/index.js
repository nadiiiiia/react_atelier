import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
 
import { store } from './helpers';
import './index.css';

import C from './C';
import registerServiceWorker from './registerServiceWorker';

render(<Provider store={store}><C /></Provider>, document.getElementById('root'));
registerServiceWorker();
