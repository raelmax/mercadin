import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Routes from './Routes';

injectTapEventPlugin();

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
