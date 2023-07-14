import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MenuLeft } from './components/menuLeft';
import { Header } from './components/header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div style={{gridArea: "content"}}></div>,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='divAppGrid'>
        
        <MenuLeft/>
        <Header title='Teste'/>

        <React.Fragment>
          <RouterProvider router={router}/>  
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}

export default App;
