import {
    Background, Container
} from './styled'

export const Finance = () => {
    return (
        <Background>
            <Container>
                <button id='buttonDeleteFilters'>Zerar filtros</button>
                <button id='buttonSaveFilters'>Salvar filtros</button>
            </Container>
        </Background>
    )
}