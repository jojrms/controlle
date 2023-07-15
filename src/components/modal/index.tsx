import {
    Background,
    Container
} from './styled';

type ModalProps = {
    setIsModalOpen: any;
}

export const Modal = ({setIsModalOpen} : ModalProps) => {
    return(
        <Background>
            <Container>
                <span>
                    <h2>Adicionar este filtro?</h2>

                    <button onClick={() => setIsModalOpen(false)}>x</button>
                </span>
                <p>Você realmente deseja adicionar o filtro [nome-do-filtro]?</p>
                
            </Container>
        </Background>
    )
}