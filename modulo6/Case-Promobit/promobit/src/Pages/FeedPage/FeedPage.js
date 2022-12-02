import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Base_URL } from "../../Constants/Base_URL"
import MoviesCard from "../../Components/MoviesCard/MoviesCard"
import { useNavigate } from "react-router-dom"
import { goToMovieDetailsPage } from "../../Routes/Coordinator"
import { ButtonStyled, DivCategorias, MenuPages, MoviesContainer, Tittle } from "./styled"


const FeedPage = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState("")
  const [genres, setGenres] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getMovies()
    getMoviesGenres()
  }, [page])

  const changePage = (pageNumber) => {
    setPage(pageNumber)
  } 

  const getMoviesGenres = () => {
    const url = `${Base_URL}/genre/movie/list?api_key=304f38d2697865af31bf9a473a064c42`

    axios
      .get(url)
      .then((response) => {
        console.log(response.data.genres) 
        setGenres(response.data.genres) 
      })
      .catch((error) => {
        console.log(error.data) 
      }) 
  } 

  const getMovies = () => {
    const url = `${Base_URL}/movie/popular?api_key=304f38d2697865af31bf9a473a064c42&page=${page}` 
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results) 
        setMovies(response.data.results) 
      })
      .catch((error) => {
        console.log(error.data) 
      }) 
  } 

  const onClickGoToMovieDetails = (id) => {
    goToMovieDetailsPage(navigate, id) 
  } 

  const filteredGenres = genres.map((genre) => {
    const setGenre = () => {
      if (filter === genre.id) {
        setFilter("") 
      } else {
        setFilter(genre.id) 
      }
    } 
    return (
      <ButtonStyled
        key={genre.id}
        onClick={setGenre}
        isSelected={filter === genre.id}
      >
        <b>{genre.name}</b>
      </ButtonStyled>
    ) 
  }) 

  const filteredMovies = movies
    .filter((movie) => {
      if (movie.genre_ids.includes(filter) || filter === "") {
        return true 
      }
      return false 
    })
    .map((movie) => {
      return (
        <MoviesCard
          key={movie.id}
          movie={movie}
          onClick={() => onClickGoToMovieDetails(movie.id)}
        />
      ) 
    }) 

  const pageButtons = Array.from(Array(5)).map((_, index) => {
    const initialPage = Math.min(496, page) 
    const buttonIndex = initialPage + index 
    return (
      <button
        disabled={buttonIndex === page}
        onClick={() => changePage(buttonIndex)}
        key={buttonIndex}
      >
        {buttonIndex}
      </button>
    ) 
  }) 

  return (
    <div style={{ width: "100vw" }}>
      <Tittle>
        <p>Milhões de filmes, séries e pessoaspara descobrir. Explore já.</p>
      </Tittle>
      <DivCategorias>
        {filteredGenres}
      </DivCategorias>
      <MoviesContainer>{filteredMovies}</MoviesContainer>
      <MenuPages>
      {page !== 1 && (
        <>
          <button onClick={() => changePage(1)}> Primeira </button>
          <button onClick={() => changePage(page - 1)}> &#60  </button>
        </>
      )}
      {pageButtons}
      {page !== 500 && (
        <>
          <button onClick={() => changePage(page + 1)}> &#62  </button>
          <button onClick={() => changePage(500)}> Última </button>
        </>
      )}
      </MenuPages>
    </div>
  ) 
} 

export default FeedPage 