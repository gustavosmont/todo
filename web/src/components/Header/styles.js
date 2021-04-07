import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #4C33FF;
    border-bottom: 5px solid #37FF80;
    display: flex;
`
export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    img{
        width: 110px;
        height: 60px;
    }
`
export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a{
        margin: 0 20px;
        &:hover{
            opacity: 0.7;
        }
    }
    .buttonheader{
        img{
            width: 28px;
            height: 30px;
            object-fit: contain;
        }
    }
`