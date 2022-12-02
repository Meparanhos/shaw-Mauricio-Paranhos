import { 
    BoxInform, 
    ClockStyled, 
    OrderContainer, 
    OrderContainerSpace, 
    RestaurantName, 
    Title, 
    TotalPrice 
} from './styled'

const Order = ({ totalPrice, restaurantName }) => {

    return <>
        <OrderContainer>
            <ClockStyled />
            <BoxInform>
                <Title>
                    Pedido em andamento
                </Title>
                <RestaurantName>
                    {restaurantName}
                </RestaurantName>
                <TotalPrice>
                    SUBTOTAL: {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalPrice)}
                </TotalPrice>
            </BoxInform>
        </OrderContainer>
        <OrderContainerSpace />
    </>
}

export default Order