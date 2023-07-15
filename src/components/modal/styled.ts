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
    width: 450px;
    height: 50%;
    border-radius: 12px;
    background-color: #fff;
    padding: 30px;

    span{
        width: 100%;
        height: 50px;
        display: grid;
        grid-template-columns: auto 30px;
        align-items: center;
    }
    
    p{
        font-size: 14px;
        color: ${props => props.theme.fontColor.content.subtitle};
    }
`