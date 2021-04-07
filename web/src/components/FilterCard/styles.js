import styled from 'styled-components';

export const Container = styled.div`
    width: 200px;
    height: 60px;
    background: ${props => props.actived ? '#37FF80' : '#4C33FF'};
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    cursor: pointer;
    img{
        width: 25px;
        height: 25px;
    }
    span{
        color: #FFF;
        font-family: "Segoe UI";
        align-self: flex-end;
        font-size: 18px;
    }
    &:hover{
        background-color: #37FF80;
    }
`