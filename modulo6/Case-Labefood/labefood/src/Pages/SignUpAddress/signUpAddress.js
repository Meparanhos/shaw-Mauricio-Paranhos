import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../Constants/url'
import { useForm } from '../../Hooks/useForm'
import Header from '../../Components/Header/Header'
import { ButtonStyled, ImputMaterial, Main } from './styled'
import { goToFeed } from '../../Routes/coordinator'
import { useProtectedPage } from '../../Hooks/useProtectedPage'



const SignUpAddress = () => {
    useProtectedPage()

    const { form, onChange, clean } = useForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    })

    const navigate = useNavigate()

    const onSubmitFormAddress = (event) => {
        event.preventDefault()
        addAddress()
    }


    const addAddress = async () => {
        const token = localStorage.getItem('token')

        await axios.put(`${BASE_URL}/address`, form, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                localStorage.setItem('token',res.data.token)
                goToFeed(navigate)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    return (
        <Main>
            <Header back/>
            <p>SignUpAddress</p>
            <form onSubmit={onSubmitFormAddress}>
                <ImputMaterial
                    id="outlined-basic"
                    label={'Logradouro'}
                    name="street"
                    type={'text'}
                    placeholder={'Rua / Av.'}
                    variant="outlined"
                    value={form.street}
                    onChange={onChange}
                />
                <ImputMaterial
                    id="outlined-basic"
                    label={'Número'}
                    name="number"
                    type={'number'}
                    placeholder={'Número'}
                    variant="outlined"
                    value={form.number}
                    onChange={onChange}
                    required
                />
                <ImputMaterial
                    id="outlined-basic"
                    label={'Complemento'}
                    name="complement"
                    type={'text'}
                    placeholder={'Apt / Bloco'}
                    variant="outlined"
                    value={form.complement}
                    onChange={onChange}
                    required
                />
                <ImputMaterial
                    id="outlined-basic"
                    label={'Bairro'}
                    name="neighbourhood"
                    type={'text'}
                    placeholder={'Bairro'}
                    variant="outlined"
                    value={form.neighbourhood}
                    onChange={onChange}
                    required
                />
                <ImputMaterial
                    id="outlined-basic"
                    label={'Cidade'}
                    name="city"
                    type={'text'}
                    placeholder={'Cidade'}
                    variant="outlined"
                    value={form.city}
                    onChange={onChange}
                    required
                />
                <ImputMaterial
                    id="outlined-basic"
                    label={'Estado'}
                    name="state"
                    type={'text'}
                    placeholder={'Estado'}
                    variant="outlined"
                    value={form.state}
                    onChange={onChange}
                    required
                />
                <ButtonStyled type='submit'>Entrar</ButtonStyled>
            </form>
        </Main>
    )
}

export default SignUpAddress