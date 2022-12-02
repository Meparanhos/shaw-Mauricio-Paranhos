import { 
    BoxInform,
    BoxInformPriceButton, 
    BoxNameQuantity, 
    ContainerCardProduct, 
    ImageProduct, 
    InformAddItemButton, 
    InformDescription, 
    InformPrice, 
    InformRemoveItemButton, 
    NameProduct, 
    QuantityProduct
} from "./styled"
import ModalSelectQuantity from '../../Components/ModalSelectQuantity/ModalSelectQuantity'
import { useState } from "react"
import { useGlobal } from "../../Context/Global/GlobalStateContext"

const CardProduct = ({ product, restaurant }) => {
    const [showModal, setShowModal] = useState(false)
    const {requests, states} = useGlobal()
    const { addItemCart, removeItemCart } = requests
    const {cart} = states

    const chooseQuantity = (quantity) => {
        addItemCart(product, quantity, restaurant)
        setShowModal(false)
    }

    const productInCart = cart.find((productCart) => productCart.id === product.id)

    return <ContainerCardProduct>
        <ImageProduct src={product.photoUrl} />
        <BoxInform>
            <BoxNameQuantity>
                <NameProduct>{product.name}</NameProduct>
                {productInCart && <QuantityProduct>{productInCart.quantity}</QuantityProduct>}
            </BoxNameQuantity>
            <InformDescription>
                {product.description}
            </InformDescription>
            <BoxInformPriceButton>
                <InformPrice>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(product.price)}
                </InformPrice>
                {
                productInCart?
                 <InformRemoveItemButton onClick={() => removeItemCart(product.id)} >
                     Remover
                 </InformRemoveItemButton>
                :
                 <InformAddItemButton onClick={() => setShowModal(true)}>
                     Adicionar
                 </InformAddItemButton>}
            </BoxInformPriceButton>

            <ModalSelectQuantity chooseQuantity={chooseQuantity} open={showModal} setOpen={setShowModal} />
        </BoxInform>
    </ContainerCardProduct>
}

export default CardProduct