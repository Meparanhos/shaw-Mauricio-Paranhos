import styled from "styled-components"

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`

export const PersonProfile = styled.div`
    display: flex;
    justify-content: space-between;
`

export const PersonAddress = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #eeeeee;
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`

export const DivInfo = styled.div`
    width: 80%;
    padding: 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1.2rem;
    color: #b8b8b8;
    p{
        color: #000;
    }
`

export const DivIcon = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
`

export const OrdersHistory = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    p{
        margin-top: 3%;
    }
`

export const Title = styled.div`
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: start;
    grid-column-start: 2;
    width: 90vw;
    padding: 1%;
    border-bottom: 1px solid black;
    margin-bottom: 3%;
`

export const LogOutDiv = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 2%;
    p,label{
        font-family: Roboto;
        font-size: 1.1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        margin-left: 2%;
    }
`
