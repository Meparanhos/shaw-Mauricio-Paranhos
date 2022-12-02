import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import { BASE_URL } from '../../Constants/url'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import { goToProfile } from '../../Routes/coordinator'
import { Main, ButtonStyled, ImputMaterial } from './styled'

const ProfileEdit = () => {
    useProtectedPage()

    const person = useRequestData({}, `${BASE_URL}/profile`)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    
    const navigate = useNavigate()

    const getPerson = async() => {
        await axios.get(`${BASE_URL}/profile`,{
            headers:{
                auth: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setName(res.data.user.name)
            setEmail(res.data.user.email)
            setCpf(res.data.user.cpf)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const UpdateProfile = async() => {
        const body = {
            name,
            email,
            cpf
        }
        await axios.put(`${BASE_URL}/profile`, body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data)
                goToProfile(navigate)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        getPerson()
    }, [])
    

    const cpfMask = (value) => {
        if(person[0].user && cpf) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1");
        }
    }

    const onSubmitForm = (event)=>{
        event.preventDefault()
        UpdateProfile()
    }

    return(
        <Main>
            <Header title={'Editar'} back/>
            <form onSubmit={onSubmitForm}>
                <ImputMaterial
                    id="outlined-basic"

                    name="name"
                    type={'text'}
                    placeholder={'Digite seu nome'}
                    variant="outlined"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <ImputMaterial
                    id="outlined-basic"

                    name="email"
                    type={'email'}
                    placeholder={'Digite seu email'}
                    variant="outlined"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />
                <ImputMaterial
                    id="outlined-basic"

                    name="cpf"
                    type={'text'}
                    placeholder={'Digite seu CPF'}
                    variant="outlined"
                    value={cpfMask(cpf)}
                    onChange={(e)=>setCpf(e.target.value)}
                    required
                />
                
                <ButtonStyled type='submit'>
                    Salvar
                </ButtonStyled>
            </form>
        </Main>
    )
}

export default ProfileEdit