import React from 'react'
import Header from '../../Components/Header/Header'
import MenuNav from '../../Components/Menu/MenuNav'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import { BASE_URL } from '../../Constants/url'
import { Main, ProfileInfo, PersonProfile, PersonAddress, LogOutDiv, OrdersHistory, Title, DivInfo, DivIcon } from './styled'
import { goToProfileEdit, goToAddressEdit, goToLogin } from '../../Routes/coordinator'
import { useNavigate } from 'react-router-dom'
import CardOrderHistory from '../../Components/CardOrderHistory/cardOrderHistory'
import LogoutIcon from '@mui/icons-material/Logout'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Profile = () => {
    useProtectedPage()

    const person = useRequestData({}, `${BASE_URL}/profile`)
    const order = useRequestData([], `${BASE_URL}/orders/history`)

    const navigate = useNavigate()

    const logOut = () => {
        window.localStorage.removeItem('token')
        goToLogin(navigate)
    }

    return (
        <Main>
            <Header title={'Meu perfil'} />
            <LogOutDiv onClick={()=>logOut()} >
                <LogoutIcon/><p>Logout</p>
            </LogOutDiv>
            <ProfileInfo>
                <PersonProfile>
                    <DivInfo>
                        <p>{person[0].user && person[0].user.name}</p>
                        <p>{person[0].user && person[0].user.email}</p>
                        <p>{person[0].user && person[0].user.cpf}</p>
                    </DivInfo>
                    <DivIcon>
                    <EditOutlinedIcon onClick={()=> goToProfileEdit(navigate, person[0].user.id)} />
                    </DivIcon>
                </PersonProfile>
                <PersonAddress>
                    <DivInfo>
                        Endereço cadastrado
                        <p>{person[0].user && person[0].user.address}</p>
                    </DivInfo>
                    <DivIcon>
                        <EditOutlinedIcon onClick={()=> goToAddressEdit(navigate, person[0].user.id)} />
                    </DivIcon>
                </PersonAddress>
                <OrdersHistory>
                    <Title>Histórico de compras:</Title>
                    {order[0].orders && order[0].orders.length > 0 ? order[0].orders && order[0].orders.map((order) => {
                        console.log(order)
                        return(
                            <CardOrderHistory
                                restaurantName={order.restaurantName}
                                totalPrice={order.totalPrice}
                                createdAt={order.createdAt}
                            />
                        )
                    }):<p>Você não realizou nenhum pedido</p>}
                </OrdersHistory>
            </ProfileInfo>
            <MenuNav page={"profile"} />
        </Main>
    )
}

export default Profile