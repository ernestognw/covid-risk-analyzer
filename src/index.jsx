import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from '@providers/user';
import { LayoutProvider } from '@providers/layout';
import { ThemeProvider } from 'styled-components';
import theme from '@config/theme';
import App from './App';

ReactDOM.render(
  <UserProvider>
    <LayoutProvider>
      <ThemeProvider theme={theme}>
        <Router basename="/">
          <App />
        </Router>
      </ThemeProvider>
    </LayoutProvider>
  </UserProvider>,
  document.getElementById('root')
);
