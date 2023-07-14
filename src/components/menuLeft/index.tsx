import { 
    Background,
    Icon,
    List,
    Option,
    BottomOptions
} from "./styled"

import Dashboard from '../../images/menuLeft/Dashboard.svg';
import Finance from '../../images/menuLeft/Finance.svg';
import Settings from '../../images/menuLeft/Settings.svg';

export const MenuLeft = () => {

    return(
        <Background>
            <Icon/>

            <List>
                <Option selected={true}>
                    <img width={"24px"} height={"24px"} src={Dashboard} alt="Dashboard icon"/>
                    Dashboard  
                </Option>
                <Option selected={false}>
                    <img width={"24px"} height={"24px"} src={Finance} alt="Finance icon"/>
                    Financeiro  
                </Option>
                <Option selected={false}>
                    <img width={"24px"} height={"24px"} src={Settings} alt="Settings icon"/>
                    Configurações  
                </Option>
            </List>

            <BottomOptions></BottomOptions>
        </Background>
    )
}