import { useNavigate } from "react-router-dom"

const MovieCards = ({Title,Year,Type,imdbID,Poster}) => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`movie/${imdbID}`)
    }
    return (
        <div onClick={(handleNavigate)} className="movie-card">
            <div className="poster-container">
            <img src={Poster} alt={Title}/>
            </div>
            <div className="movie-info">
                <div className="movie-title">{Title}</div>
                <div className="movie-meta">
                    <span className="movie-year">{Year}</span>
                    <span className="movie-type">{Type}</span>
                </div>
                <div className="movie-id">imdbID:{imdbID}</div>
            </div>
        </div>
    )
}
export default MovieCards