import styled from "styled-components"

export const Tittle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: white;
  width: 99vw;
  background-color: #28075c;
`

export const DivCategorias = styled.div`
  display: flex;
  width: 99vw;
  @media(max-width:500px){
    overflow-x: scroll;
    background-color: #28075c;
  }
  @media(min-width:500px){
    justify-content: center;
    flex-wrap: wrap;
    background-color: #28075c;
  }
`

export const ButtonStyled = styled.button`
  border: none;
  min-height: 34px;
  margin: 15px;
  border-radius: 10px;
  background-color: ${(props) => (props.isSelected ? "#D18000" : "#FFFFFF")};
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "black")};
  @media(min-width:500px){
    width: 100px;
  }
  :hover {
    cursor: pointer;
  }
`

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 99vw;
  margin-top: 1%;
`

export const MenuPages = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1%;
`