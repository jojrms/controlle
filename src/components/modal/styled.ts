import styled from 'styled-components';

export const Background = styled.span`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    position: absolute;
    background-color: #00000061;
    margin: -80px 0 0 -290px;
`

export const Container = styled.span`
    width: 300px;
    height: fit-content;
    border-radius: 12px;
    background-color: #fff;
    padding: 30px;

    .span-header{
        width: 100%;
        height: 50px;
        display: grid;
        grid-template-columns: auto min-content;
        gap: 30px;
        align-items: center;
    }
    
    p{
        font-size: 14px;
        color: ${props => props.theme.fontColor.content.subtitle};
    }

    .span-bottom{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        margin-top: 30px;
        justify-content: space-between;
    }
`

type ButtonProps = {
    isCancel: boolean;
}

export const Button = styled.button<ButtonProps>`
    width: fit-content;
    height: fit-content;
    border-radius: 5px;
    padding: 10px 20px;
    background-color: ${({isCancel}) => isCancel ? props => props.theme.backgroundColor.cancelButton : props => props.theme.backgroundColor.confirmButton};
    color: #fff;
`