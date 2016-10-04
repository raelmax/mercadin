import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Mercadin from './App';

injectTapEventPlugin();

ReactDOM.render(
  <Mercadin />,
  document.getElementById('root')
);
