import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import {
  useParams
} from "react-router-dom";
import { MenuLeft } from './components/menuLeft';
import { Header } from './components/header';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Finance } from './pages/Finance/Finance';

function App() {
  
  const {page} = useParams();

  console.log(page, 'aaa')

  const Page = () => {
    switch(page){
      case 'dashboard': return <Dashboard/>;
      case 'finance': return <Finance/>;
    }
  }

  const titleFunction = () => {
    switch (page) {
        case 'dashboard' : return "Dashboard";
        case 'finance' : return "Financeiro";
        case 'settings' : return "Configurações";
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='divAppGrid'>
        
        <MenuLeft/>
        <Header title={titleFunction()}/>

        <React.Fragment>
          {Page()}
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}

export default App;
