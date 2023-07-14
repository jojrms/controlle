import { 
    Background,
    Title 
} from "./styled"

type HeaderProps = {
    title: string;
}

export const Header = ({title} : HeaderProps) => {
    return(
        <Background>
            <Title>{title}</Title>
        </Background>
    )
}