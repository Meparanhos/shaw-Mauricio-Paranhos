import styled from 'styled-components'

export const ContainerCardRestaurantDetails = styled.div`
    width: 100%;
    margin: 0.5rem 0;
`

export const ImageRestaurant = styled.img`
    width: 100%;
    height: 15rem;
    margin-bottom: 1rem;
    border-radius: 7px 7px 0 0;
    object-fit: fill;
`

export const NameRestaurant = styled.h3`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e86e5a;
    margin-bottom: 0.625rem;
`

export const BoxInformTimePrice = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: flex-start;
`

export const Inform = styled.p`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-bottom: 0.625rem;
`