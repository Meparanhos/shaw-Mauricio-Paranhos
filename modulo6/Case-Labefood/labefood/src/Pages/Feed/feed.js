import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Constants/url'
import { ContainerFeed, CardsRestaurant, InputSearch, BoxInputSearch, Menu, MenuItem } from './styled'
import CardRestaurant from '../../Components/CardRestaurant/CardRestaurant'
import Header from '../../Components/Header/Header'
import MenuNav from '../../Components/Menu/MenuNav'
import Order from '../../Components/Order/Order'
import { useGlobal } from '../../Context/Global/GlobalStateContext'
import { useProtectedPage } from '../../Hooks/useProtectedPage'

const Feed = () => {
    useProtectedPage()

    const [restaurants, setRestaurants] = useState([])
    const [categoryRestaurant,setCategoryRestaurant] = useState([])
    const [valueCategory,setValueCategory] = useState("")
    const  [inputText,setInputText] = useState("")
    
    const { setters, states } = useGlobal()
    const { setOrder } = setters
    const { order } = states

    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setRestaurants(res.data.restaurants)
            filterCategory(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const filterCategory = (restaurants) => {
        const arrayAux = []
        restaurants.map((res) => {
            arrayAux.push(res.category)
        })
        const takeOutRepetition = [...new Set(arrayAux)]

        const changeObjectArray = []
        
        takeOutRepetition.map((category)=>{
            const insertObj = {category,select:false}
            changeObjectArray.push(insertObj)
        })
        setCategoryRestaurant(changeObjectArray)
    }

    const getOrder = () => {
        axios.get(`${BASE_URL}/active-order`, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
        .then((res) => {
            setOrder(res.data.order)
            const expiresAt = res.data.order.expiresAt
            setTimeout(() => {
                getOrder()
            }, expiresAt - new Date().getTime())
        })
        .catch((err) => {
            console.log(err)
        })
    }
    console.log(order) 
    useEffect(() => {
        getRestaurants()
        getOrder()
    }, [])

    const filterRestaurant = restaurants
        .filter((restaurant)=>
            inputText ? restaurant.name.toLowerCase().includes(inputText.toLowerCase()):true
        )
        .filter((restaurant)=>
            valueCategory ? restaurant.category.toLowerCase().includes(valueCategory.toLowerCase()):true
            )
        .map((restaurant) => {
            return <CardRestaurant restaurant={restaurant} />
        })
console.log(restaurants)
    const changeCategory = (category)=>{
        setValueCategory(category)

        const result = categoryRestaurant.map((cat)=>{
            if(cat.category === category){
                return{
                    ...cat,
                    select:true
                }
            }else{
                return{
                    ...cat,
                    select:false
                }
            }
        })
        setCategoryRestaurant(result)
    }

    return(
        <ContainerFeed>
            <Header title={'Rappi4'}/>
            <BoxInputSearch>
                <InputSearch value={inputText} onChange={(event)=>setInputText(event.target.value)} />
            </BoxInputSearch>
            <Menu>
                <MenuItem 
                    onClick={()=>changeCategory("")}
                >
                    Todos
                </MenuItem>
                
                {categoryRestaurant.map((category) => {
                    return (
                        <MenuItem 
                            select={category.select} 
                            onClick={() => changeCategory(category.category)}
                        >
                            {category.category}
                        </MenuItem>
                    )
                })}
                
            </Menu>
            <CardsRestaurant>
                {
                    filterRestaurant
                }
            </CardsRestaurant>
            <MenuNav page={"feed"} />
            {order && <Order 
                restaurantName={order.restaurantName} 
                totalPrice={order.totalPrice} 
            />}
        </ContainerFeed>
    )
}

export default Feed