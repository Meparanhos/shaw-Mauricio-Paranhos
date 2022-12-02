import axios from "axios" 
import React, { useEffect, useState } from "react" 
import { useParams } from "react-router-dom" 
import { Base_URL } from "../../Constants/Base_URL" 
import { Info, MainDiv } from "./styled"
import { useNavigate } from "react-router-dom"
import { goToBack } from "../../Routes/Coordinator"


const MovieDetailsPage = () => {
    const [movie, setMovie] = useState({})
    const [genres, setGenres] = useState([])

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getMovieDetails() 
    }, [])
    
    const getMovieDetails = () => {
        const url = `${Base_URL}/movie/${id}?api_key=304f38d2697865af31bf9a473a064c42`

        axios.get(url)
        .then((response) => {
            console.log(response.data.genres)
            setMovie(response.data)
            setGenres(response.data.genres)
        })
        .catch((error) => {
            console.log(error.data)
        })
    }

    const getGenres = genres.map((genre) => {
        return genre.name
    })

  
  
    return(
        <MainDiv>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Capa do filme"/>
            <Info>
                <p><b>Titulo:</b> {movie.title}</p>
                <p><b>Lançamento:</b> {movie.release_date}(BR)</p>
                <p><b>Gênero:</b> {getGenres}</p>
                <p><b>Duração:</b> {movie.runtime}m</p>
                <p><b>Avaliação:</b> {movie.vote_average}</p>
                <p><b>Sinópse:</b> {movie.overview}</p>
            </Info>
            <button onClick={() => goToBack(navigate)}>Voltar</button>
        </MainDiv>
    )
}

export default MovieDetailsPage