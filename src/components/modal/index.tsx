import {
    Background,
    Container,
    Button
} from './styled';

type ModalProps = {
    setIsModalOpen: any;
}

export const Modal = ({setIsModalOpen} : ModalProps) => {
    return(
        <Background>
            <Container>
                <span className='span-header'>
                    <h2>Adicionar este filtro?</h2>

                    <button onClick={() => setIsModalOpen(false)}>x</button>
                </span>
                <p>Você realmente deseja adicionar o filtro [nome-do-filtro]?</p>
                
                <span className='span-bottom'>
                    <Button onClick={() => setIsModalOpen(false)} isCancel={true}>Cancelar</Button>
                    <Button isCancel={false}>Confirmar</Button>
                </span>
            </Container>
        </Background>
    )
}