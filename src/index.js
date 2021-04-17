import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import App from './App';
import { Provider } from './context/context';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="247f43d2-fc40-490e-8b60-24945a944474" language="en-US">
  <Provider>
    <App />
  </Provider>
  </SpeechProvider>,
  document.getElementById('root'))
;