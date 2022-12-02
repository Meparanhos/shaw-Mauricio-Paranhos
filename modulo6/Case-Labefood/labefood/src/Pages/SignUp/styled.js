import styled from 'styled-components'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'


export const Main = styled.div`
    padding: 10px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    form{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        width: 90%;
        height: 50%;
        justify-content: space-evenly;
    }
    p{
        font-size: 2rem;
    }
`

export const ButtonStyled = styled(Button)`
    &&{
        color: #000;
        width: 100%;
        background-color: #e86e5a;
        margin-top: 5px;
    }
    `

export const DivPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 1rem;
    }
    `

export const ImputMaterial = styled(TextField)`
    width: 100%;
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    padding-bottom: 0.25rem;
`