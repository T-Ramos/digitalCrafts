import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App name="Travis" />, document.getElementById('root'));
registerServiceWorker();
