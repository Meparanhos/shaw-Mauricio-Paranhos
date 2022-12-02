export const goToFeedPage = (navigate) => {
    navigate("/")
}

export const goToMovieDetailsPage = (navigate, id) => {
    navigate(`/movie/${id}`)
}

export const goToBack = (navigate) => {
    navigate(-1)
}