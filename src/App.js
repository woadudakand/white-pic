import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Auth from './routes/auth';
import './static/style.css';
import config from './config/config';

const { theme } = config;

const ProviderConfig = () => {
  return (
    <ConfigProvider>
      <ThemeProvider theme={{ ...theme }}>
        <Router basename={process.env.PUBLIC_URL}>
          <Route path="/" component={Auth} />
        </Router>
      </ThemeProvider>
    </ConfigProvider>
  );
};

function App() {
  return <ProviderConfig />;
}

export default App;
