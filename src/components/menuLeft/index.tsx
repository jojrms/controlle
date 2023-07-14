import { 
    Background,
    Icon,
    List,
    Option,
    BottomOptions,
    ThemeButton,
    Switch
} from "./styled"

import { DashboardIcon } from "../../images/menuLeft/Dashboard";
import { FinanceIcon } from "../../images/menuLeft/Finance";
import { SettingsIcon } from "../../images/menuLeft/Settings";
import { ExitIcon } from "../../images/menuLeft/Exit";

import Moon from '../../images/menuLeft/Moon.svg';

export const MenuLeft = () => {

    return(
        <Background>
            <Icon/>

            <List>
                <Option selected={true}>
                    <DashboardIcon color="#000"/>
                    Dashboard  
                </Option>
                <Option selected={false}>
                    <FinanceIcon color="#000"/>
                    Financeiro  
                </Option>
                <Option selected={false}>
                    <SettingsIcon color="#000"/>
                    Configurações  
                </Option>
            </List>

            <BottomOptions>
                <List>
                    <Option style={{color: '#000'}} selected={false}>
                        <ExitIcon color="#000"/>
                        Sair  
                    </Option>
                    <ThemeButton>
                        <img width={'24px'} height={'24px'} src={Moon}/>
                        Dark Mode

                        <Switch darkmode={false}>
                            <span id="check"/>
                        </Switch>
                    </ThemeButton>
                </List>
            </BottomOptions>
        </Background>
    )
}