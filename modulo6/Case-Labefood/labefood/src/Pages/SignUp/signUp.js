import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Constants/url'
import { useForm } from '../../Hooks/useForm'
import { Main, ButtonStyled, DivPassword, ImputMaterial, Title } from './styled'
import Header from '../../Components/Header/Header'
import { IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useNavigate } from 'react-router-dom'
import { goToSignUpAddress } from '../../Routes/coordinator'
import Logo from '../../Components/Logo/Logo'

const SignUp = () => {

    const {form,onChange,clean} = useForm({
        "name": "",
	    "email": "",
	    "cpf": "",
	    "password": ""
    })

    const [confirmPassword,setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [showCheckPassword, setShowCheckPassword] = useState(true)
    const [checkErrPassword, setCheckErrPassword] = useState(false)

    const navigate = useNavigate()

    const cpfMask = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1");
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleClickShowCheckPassword = () => {
        setShowCheckPassword(!showCheckPassword)
    }

    const onSubmitForm = (event)=>{
        event.preventDefault()
        
        if (form.password !== confirmPassword) {
            setCheckErrPassword(true)
        }else{
            setCheckErrPassword(false)
            signUpPerson()
        }
    }

    const signUpPerson = async()=>{
        await axios.post(`${BASE_URL}/signup`,form)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('token',res.data.token)
            alert(`Bem vindo ${res.data.user.name}`)
            goToSignUpAddress(navigate)
        })
        .catch((err) => {
            alert(err.message)
            clean()
            setConfirmPassword('')
        })
    }

    return(
        <Main>
            <Header back/>
            <Logo />
            <Title>Cadastrar</Title>
            <form onSubmit={onSubmitForm}>
                <ImputMaterial
                    id="outlined-basic"
                    label={'Nome'}
                    name="name"
                    type={'text'}
                    placeholder={'Digite seu nome'}
                    variant="outlined"
                    value={form.name}
                    onChange={onChange}
                />
                <ImputMaterial
                    id="outlined-basic"
                    label={'Email'}
                    name="email"
                    type={'email'}
                    placeholder={'Digite seu email'}
                    variant="outlined"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <ImputMaterial
                    id="outlined-basic"
                    label={'CPF'}
                    name="cpf"
                    type={'text'}
                    placeholder={'Digite seu CPF'}
                    variant="outlined"
                    value={cpfMask(form.cpf)}
                    onChange={onChange}
                    required
                />
                <DivPassword>
                    <ImputMaterial
                        id="outlined-adorment-password"
                        label={'Senha'}
                        name='password'
                        type={showPassword ? 'password':'text'}
                        placeholder={'Minimo 6 caracteres'}
                        inputProps={{minLength:6,title:"A senha deve conter no mínimo 6 caracteres"}}
                        value={form.password}
                        onChange={onChange}
                        required
                    />
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </DivPassword>
                <DivPassword>
                    <ImputMaterial
                        error={checkErrPassword}
                        helperText={checkErrPassword ? 'A senha deve ser a mesma que a anterior' : ''}
                        id="outlined-adorment-password"
                        label={'Confirmar'}
                        type={showCheckPassword ? 'password':'text'}
                        placeholder={'Repetir a senha'}
                        inputProps={{minLength:6,title:"Favor repetir a senha para confirmar"}}
                        value={confirmPassword}
                        onChange={(event)=> setConfirmPassword(event.target.value)}
                        required
                    />
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowCheckPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </DivPassword>

                <ButtonStyled type='submit'>
                    Cadastrar
                </ButtonStyled>
            </form>
        </Main>
    )
}

export default SignUp