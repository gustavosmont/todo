import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`
export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    button{
        background: none;
        border: none;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #707070;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    h3{
        color: #4C33FF;
        position: relative;
        top: 30px;
        background-color: #FFF;
        padding: 0 15px;
    }
`



