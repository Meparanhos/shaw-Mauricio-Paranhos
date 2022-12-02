import React, { useState } from 'react'
import { Main, Form, ButtonStyled, DivPassword, ImputMaterial, Title } from './styled'
import { Button, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import axios from 'axios'
import {BASE_URL} from '../../Constants/url'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToSignUp } from '../../Routes/coordinator'
import Logo from '../../Components/Logo/Logo'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [errEmail, setErrEmail] = useState('')
    const [errPassword, setErrPassword] = useState('')
    const [checkErrEmail, setCheckErrEmail] = useState(false)
    const [checkErrPassword, setCheckErrPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const navigate = useNavigate()

    const onSubmitLogin = (event) => {
        event.preventDefault()

        const userLogin = {
            email,
            password
        }
        loginApi(userLogin)
    }

    const loginApi = async(body) =>{
        await axios.post(`${BASE_URL}/login`,body)
        .then((res)=>{
            setEmail('')
            setPassword('')
            setErrEmail('')
            setErrPassword('')
            setCheckErrEmail(false)
            setCheckErrPassword(false)
            localStorage.setItem('token',res.data.token)
            alert(`Bem vindo(a) ${res.data.user.name}`)
            goToFeed(navigate)
        })
        .catch((err)=>{
            if(err.response.data.message.includes('Senha incorreta')){
                setErrPassword(err.response.data.message)
                setCheckErrPassword(true)
            }else{
                setErrEmail(err.response.data.message)
                setCheckErrEmail(true)
            }
            console.log(err.response.data.message)
        })
    }

    return (
        <Main>
            <Logo />
            <Title>Entrar</Title>
            <Form onSubmit={onSubmitLogin}>
                <ImputMaterial
                    error={checkErrEmail}
                    helperText={checkErrEmail ? errEmail:''}
                    id="outlined-basic"
                    label="Email"
                    type={'emmail'}
                    variant="outlined"
                    placeholder={'email@email.com'}
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                />
                <DivPassword>
                    <ImputMaterial
                        error={checkErrPassword}
                        helperText={checkErrPassword ? errPassword:''}
                        id="outlined-basic"
                        label="Password" 
                        type={showPassword? 'password':'text'}
                        variant="outlined"
                        placeholder={'Minimo 6 caracteres'}
                        value={password}
                        onChange={(event)=> setPassword(event.target.value)}
                        inputProps={{minLength:6,title:"A senha deve conter no mínimo 6 caracteres"}}
                    />
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </DivPassword>

                <ButtonStyled type='submit'>
                    Entrar
                </ButtonStyled>
            </Form>
            <Title>
                Não possui cadastro<Button onClick={()=>goToSignUp(navigate)} >clique aqui</Button>
            </Title>
        </Main>
    )
}

export default Login