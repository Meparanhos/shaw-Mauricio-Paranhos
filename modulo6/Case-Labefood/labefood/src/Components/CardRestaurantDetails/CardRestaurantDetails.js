import { BoxInformTimePrice, ContainerCardRestaurantDetails, ImageRestaurant, Inform, NameRestaurant } from './styled'
import { useNavigate } from 'react-router-dom'
import { goToRestaurant } from '../../Routes/coordinator'

const CardRestaurantDetails = ({restaurant}) => {
    const navigate = useNavigate()

    return <ContainerCardRestaurantDetails onClick={() => goToRestaurant(navigate, restaurant.id)}> 
        <ImageRestaurant src={restaurant.logoUrl} alt={`Logo ${restaurant.name}`} />
        <NameRestaurant>{restaurant.name}</NameRestaurant>
        <Inform>{restaurant.category}</Inform>
        <BoxInformTimePrice>
            <Inform>{restaurant.deliveryTime}min.</Inform>
            <Inform>Frete: {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(restaurant.shipping)}</Inform>
        </BoxInformTimePrice>
        <Inform>{restaurant.address}</Inform>
    </ContainerCardRestaurantDetails>
}

export default CardRestaurantDetails