import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import {
  useParams
} from "react-router-dom";
import { MenuLeft } from './components/menuLeft';
import { Header } from './components/header';
import { Dashboard } from './pages/Dashboard/Dashboard';

function App() {
  
  const {page} = useParams();

  const Page = () => {
    switch(page){
      case 'dashboard': return <Dashboard/>
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='divAppGrid'>
        
        <MenuLeft/>
        <Header title='Teste'/>

        <React.Fragment>
          {Page()}
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}

export default App;
