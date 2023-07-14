import { 
    Background,
    Icon,
    List,
    Option,
    BottomOptions
} from "./styled"

import { useParams } from "react-router-dom";

import { DashboardIcon } from "../../images/menuLeft/Dashboard";
import { FinanceIcon } from "../../images/menuLeft/Finance";
import { SettingsIcon } from "../../images/menuLeft/Settings";
import { ExitIcon } from "../../images/menuLeft/Exit";

export const MenuLeft = () => {

    let { params } = useParams();
    console.log(params, 'aaaa')

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
                </List>
            </BottomOptions>
        </Background>
    )
}