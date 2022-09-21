import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import Layout from './components/Layout/Layout';
import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';



const App = () => {
  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <title>GED - Beta</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <>
        <Layout>
          <Routes />
        </Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
