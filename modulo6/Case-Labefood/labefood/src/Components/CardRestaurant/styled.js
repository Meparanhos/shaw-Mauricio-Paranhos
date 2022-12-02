import styled from 'styled-components'

export const ContainerCardRestaurant = styled.div`
    width: 100%;
    border-radius: 6px;
    border: 1px solid black;
    margin: 0.5rem 0;
`

export const ImageRestaurant = styled.img`
    width: 100%;
    height: 15rem;
    margin: 0 0 12px;
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
    padding: 1%;
`

export const BoxInformTimePrice = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1%;
`

export const InformTimePrice = styled.p`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`