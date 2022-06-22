import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { MyThemeProvider } from './styles/MyThemeProvider';
import { App } from './templates/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App>
        <Home />
      </App>
    </MyThemeProvider>
  </React.StrictMode>,
);
