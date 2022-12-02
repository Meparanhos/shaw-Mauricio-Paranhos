import styled from 'styled-components'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'


export const ImputMaterial = styled(TextField)`
    width: 100%;
`

export const Main = styled.div`
    padding: 10px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 1rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 30%;
    width: 80%;
    justify-content: space-evenly;
    margin-bottom: 1rem;
`

export const ButtonStyled = styled(Button)`
    &&{
        color: #000;
        width: 100%;
        background-color: #e86e5a;
    }
`

export const DivPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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