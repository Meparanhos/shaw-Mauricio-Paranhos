import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../Components/Header/Header'
import { useRequestData } from '../../Hooks/useRequestData'
import { BASE_URL } from '../../Constants/url'
import MenuNav from '../../Components/Menu/MenuNav'
import { useGlobal } from "../../Context/Global/GlobalStateContext"
import CardProduct from '../../Components/CardProduct/CardProduct'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { 
    Main, 
    CartConfig, 
    InfoProfile, 
    CartInfo, 
    Payment, 
    InfoRestaurant, 
    EmptyCart, 
    Freight, 
    Total, 
    Form, 
    Title,
    ButtonStyled,
    ShippingTime
} from './styled'
import { useNavigate } from 'react-router-dom'
import { goToFeed } from '../../Routes/coordinator'

const Cart = () => {

    useProtectedPage()
    const profile = useRequestData({}, `${BASE_URL}/profile`)
    const [payment, setPayment] = useState('')
    const [fullPrice, setFullPrice] = useState(0)
    const { states, setters } = useGlobal()
    const { cart, restaurant } = states
    const [paymentMethod] = useState([
        'money',
        'creditcard'
    ])
console.log(cart)
    const navigate = useNavigate()


    const totalPrice = () => {
        let totPrice = 0
            for (const product of cart) {
                totPrice += product.price * product.quantity
            }

        setFullPrice(totPrice)
    }

    useEffect(() => {
        totalPrice()
    }, [])

    const onChangePayment = (event) => {
        setPayment(event.target.value)
    }

    const placeOrder = async () => {
        const body = {
            products: cart.map(({id, quantity}) => {
                return {id, quantity}
            }),
            paymentMethod: payment
        }

        axios.post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
            .then((res) => {
                setters.setOrder(res.data.order)
                setters.setCart([])
                goToFeed(navigate)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const onSubmitPlaceOrder = (event) => {
        event.preventDefault()
        placeOrder()
    }

    return(
        <Main>
            <Header title={'Meu carrinho'} back/>
            <CartConfig>
                <InfoProfile>
                    <p>Endereço de entrega</p>
                    <p>{profile[0].user && profile[0].user.address}</p>
                </InfoProfile>
                <InfoRestaurant>
                    <p>{restaurant.shipping && cart.length > 0 ? restaurant.name : ''}</p>
                    <p>{restaurant.shipping && cart.length > 0 ? restaurant.address : ''}</p>
                    
                </InfoRestaurant>
                <ShippingTime>
                    <p>{restaurant.shipping && cart.length > 0 ? restaurant.deliveryTime : ''}</p>
                    <p>{restaurant.shipping && cart.length > 0 ? 'min.' : ''}</p>
                </ShippingTime>
                <CartInfo>
                    {restaurant.shipping && cart.length > 0 ? cart.map((product) => {
                        return (
                            <CardProduct
                                product={product}
                                key={product.id}
                                restaurant={restaurant}
                             />
                        )
                    }) : <EmptyCart>Carrinho vazio</EmptyCart>}
                </CartInfo>
                <Payment>
                    <Freight>Frete: {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(restaurant.shipping && cart.length > 0 ? restaurant.shipping : 0)}
                    </Freight>
                    <Total>
                        <p>SUBTOTAL:</p> <p>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(restaurant.shipping && cart.length > 0 ? fullPrice : 0)}</p>
                    </Total>
                    <Title>Forma de pagamento</Title>
                    <Form onSubmit={onSubmitPlaceOrder}>
                        {paymentMethod.map((key) => {
                            return (
                                <div key={key}>
                                    <input
                                        checked={payment === key}
                                        name={paymentMethod}
                                        type={'radio'}
                                        onChange={onChangePayment}
                                        value={key}
                                    />
                                    <label htmlFor={key}>{key}</label>
                                </div>
                            )
                        })}
                        <ButtonStyled type='submit'>Confirmar</ButtonStyled>
                    </Form>
                </Payment>
            </CartConfig>

            <MenuNav page={"cart"} />
        </Main>
    )
}

export default Cart