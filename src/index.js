import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechlyProvider } from '@speechly/react-client';
import App from './App';
import { Provider } from './context/context';
import './index.css';

ReactDOM.render(
  <SpeechlyProvider appId="247f43d2-fc40-490e-8b60-24945a944474" language="en-US">
  <Provider>
    <App />
  </Provider>
  </SpeechlyProvider>,
  document.getElementById('root'))
;