import { BoxInformTimePrice, ContainerCardRestaurant, ImageRestaurant, InformTimePrice, NameRestaurant } from './styled'
import { useNavigate } from 'react-router-dom'
import { goToRestaurant } from '../../Routes/coordinator'

const CardRestaurant = ({restaurant}) => {
    const navigate = useNavigate()

    return <ContainerCardRestaurant onClick={() => goToRestaurant(navigate, restaurant.id)}> 
        <ImageRestaurant src={restaurant.logoUrl} alt={`Logo ${restaurant.name}`} />
        <NameRestaurant>{restaurant.name}</NameRestaurant>
        <BoxInformTimePrice>
            <InformTimePrice>{restaurant.deliveryTime}min.</InformTimePrice>
            <InformTimePrice>Frete: {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(restaurant.shipping)}</InformTimePrice>
        </BoxInformTimePrice>
    </ContainerCardRestaurant>
}

export default CardRestaurant