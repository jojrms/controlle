import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import {
  useParams,
  useNavigate
} from "react-router-dom";
import { MenuLeft } from './components/menuLeft';
import { Header } from './components/header';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Finance } from './pages/Finance/Finance';

function App() {
  
  const {page} = useParams();
  const navigate = useNavigate();

  if(page === undefined){
    navigate('/finance')
  };

  const Page = () => {
    switch(page){
      case 'dashboard': return <Dashboard/>;
      case 'finance': return <Finance/>;
      case undefined: return <Finance/>;
    }
  }

  const titleFunction = () => {
    switch (page) {
        case 'dashboard' : return "Dashboard";
        case 'finance' : return "Financeiro";
        case undefined : return "Financeiro";
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
