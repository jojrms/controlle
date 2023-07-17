import React, { useState } from 'react';

import { 
    Background,
    Icon,
    List,
    Option,
    BottomOptions,
    ThemeButton,
    Switch
} from "./styled"

import {
    Link,
    useParams
} from "react-router-dom";

import { DashboardIcon } from "../../images/menuLeft/Dashboard";
import { FinanceIcon } from "../../images/menuLeft/Finance";
import { SettingsIcon } from "../../images/menuLeft/Settings";
import { ExitIcon } from "../../images/menuLeft/Exit";

import Moon from '../../images/menuLeft/Moon.svg';

export const MenuLeft = () => {

    const {page} = useParams();

    return(
        <Background>
            <Icon/>

            <List>
                <Link to={"/dashboard"}>
                    <Option selected={page === 'dashboard' ? true : false}>
                        <DashboardIcon color={page === 'dashboard' ? '#fff' : '#949494'}/>
                        Dashboard  
                    </Option>        
                </Link>
                <Link to={"/finance"}>
                    <Option selected={page === 'finance' || undefined ? true : false}>
                        <FinanceIcon color={page === 'finance' ? '#fff' : '#949494'}/>
                        Financeiro  
                    </Option>    
                </Link>
                <Link to={"/settings"}>
                <Option selected={page === 'settings' ? true : false}>
                    <SettingsIcon color={page === 'settings' ? '#fff' : '#949494'}/>
                    Configurações  
                </Option>    
                </Link>
                
                
            </List>

            <BottomOptions>
                <List>
                    <Option style={{color: '#000'}} selected={false}>
                        <ExitIcon color='#000'/>
                        Sair  
                    </Option>
                    {/* <ThemeButton>
                        <img width={'24px'} height={'24px'} src={Moon}/>
                        Dark Mode

                        <Switch darkmode={false}>
                            <span id="check"/>
                        </Switch>
                    </ThemeButton> */}
                </List>
            </BottomOptions>
        </Background>
    )
}