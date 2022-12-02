import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../Components/Header/Header'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../Constants/url'
import { ContainerRestaurant, CardRestaurant, SectionProductByCategory, Category } from './styled'
import CardRestaurantDetails from '../../Components/CardRestaurantDetails/CardRestaurantDetails'
import CardProduct from '../../Components/CardProduct/CardProduct'
// import { useGlobal } from '../../Context/Global/GlobalStateContext'
import { useProtectedPage } from '../../Hooks/useProtectedPage'

const Restaurant = () => {
    useProtectedPage()

    const {restaurantId} = useParams()
    const [restaurant, setRestaurant] = useState({})
    const [categories, setCategories] = useState([])

    const getRestaurant = () => {
        axios.get(`${BASE_URL}/restaurants/${restaurantId}`, {
            headers:{
                auth: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setRestaurant(res.data.restaurant)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    
    useEffect(() => {
        getRestaurant()
    }, [])

    useEffect(() => {
        if (restaurant.products) {
            const newCategories = []
            for (const product of restaurant.products) {
                if (!newCategories.includes(product.category)) {
                    newCategories.push(product.category)    
                }
            }
            setCategories(newCategories)
        }
    }, [restaurant])

    return(
        <ContainerRestaurant>
            <Header title={"Restaurante"} back />
            <CardRestaurant>
            <CardRestaurantDetails restaurant={restaurant} />
            {
                restaurant.products 
                &&
                categories.map((category) => {
                    return <SectionProductByCategory>
                        <Category>{category}</Category>
                        {
                            restaurant.products
                            .filter((product) => {
                                return product.category === category
                            })
                            .map((product) => {
                                return <CardProduct product={product} key={product.id} restaurant={restaurant}
                                />
                            })
                        }
                    </SectionProductByCategory>
                })
            }
            </CardRestaurant>
        </ContainerRestaurant>
    )
}

export default Restaurant