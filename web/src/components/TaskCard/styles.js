import styled from 'styled-components';

export const Container = styled.div`
    width: 260px;
    height: 140px;
    box-shadow: 0px 1px 10px -2px rgba(112,112,112,1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 15px;
    img{
        width: 50px;
        height: 50px;
    }
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
        opacity: 0.6;
    }
`
export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2px;
`
export const BottomCard = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    strong{
        color: #37FF80;
    }
    span{
        color: #707070;
    }
`