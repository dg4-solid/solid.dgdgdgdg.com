import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';
import '@/styles/_reset.css';

import '@/styles/config/size.sass';
import '@/styles/config/media.sass';
import '@/styles/config/global.sass';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
