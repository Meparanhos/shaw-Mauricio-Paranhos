import React from 'react'
import { Cost, DateDiv, Main, NameRestaurant } from './styled'

const convertDate = (timeStamp) => {
    let time = new Date(timeStamp)
    let day = time.getDate().toString().padStart(2,'0')
    let month = (time.getMonth()+1).toString().padStart(2,'0')
    let year = time.getFullYear()

    return `${day}/${month}/${year}`
}

const CardOrderHistory = (props) => {
    return(
        <Main>
            <NameRestaurant>{props.restaurantName}</NameRestaurant>
            <DateDiv>{convertDate(props.createdAt)}</DateDiv>
            <Cost>Subtotal:{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(props.totalPrice)}
            </Cost>
        </Main>
    )
}

export default CardOrderHistory