import { useEffect, useState } from "react";
import{useParams} from "react-router-dom";
import styles from "./Detail.module.css"

function Detail(){
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div className={styles.container} style={{backgroundImage: `url(${movie.background_image_original})`}}>
            <div className={styles.loader}>
                <p className={styles.movie__title}>{movie.title}</p>
                <ul className={styles.movie__genres}>
                {movie.genres && movie.genres.map(g => <li key={g}>{g}</li>)}
                </ul>
                <img src={movie.medium_cover_image} alt="{movie.title}"/>
            </div>
            <div className={styles.movie__bottom}>
            <p className={styles.rating}>RATES : {movie.rating}</p>
            {movie.description_full !=="" ? <p className={styles.p_style}>{movie.description_full}</p> : <p className={styles.p_style}>The summary is not exist for this movie. Check contents of movie from the movie! </p>}
            </div>
        </div>
        );
}
export default Detail;