import styled from 'styled-components'
import { Button } from '@mui/material'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const CartConfig = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`

export const InfoProfile = styled.div`
    display: flex;
    flex-grow: 0.1;
    flex-direction: column;
    width: 100%;
    padding: 3%;
    font-family: Roboto;
    font-size: 1.1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    background-color: #eeeeee;
    p:nth-child(1){
        color: #b8b8b8;
    }
`

export const  InfoRestaurant = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: Roboto;
    font-size: 1.1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    padding: 3%;
    p:nth-child(1){
        color: #e86e5a;
    }
`

export const ShippingTime = styled.div`
    display: flex;
    width: 100%;
    padding: 3%;
    font-family: Roboto;
    font-size: 1.1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`

export const CartInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 100vh;
    margin-top: 3%;
    padding: 3%;
`

export const EmptyCart = styled.p`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    margin-bottom: 5%;
`

export const Payment = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    
    p,label{
        font-family: Roboto;
        font-size: 1.1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
    }
`

export const Freight = styled.p`
    display: flex;
    justify-content: flex-end;
    margin: 3%;
`

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3%;
    p:nth-child(1){
        color: #000;
        font-size: 1.2rem;
    }
    p:nth-child(2){
        color: #e86e5a;
        font-size: 1.2rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: center;
    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 1%;
    }
    label{
        font-size: 1rem;
        text-transform: uppercase;
    }
    input{
        height: 100%;
        width: 20%;
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
    width: 95vw;
    padding: 1%;
    border-bottom: 1px solid black;
    margin: 2%;
`

export const ButtonStyled = styled(Button)`
    &&{
        font-family: Roboto;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
        background-color: #e86e5a;
        margin-top: 3%;
        width: 90%;
        align-self: center;
    }
`