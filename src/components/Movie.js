import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, medium_cover_image, title, year, summary, genres}){
    return (
        <div className={styles.movie}>
            <img src={medium_cover_image} alt="{title}" className={styles.movie__img}/>
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <div className={styles.summary__div}>
                {summary !== "" ? <p>{summary.length > 235 ? `${summary.slice(0, 100)}...` : summary}</p> : <p>The summary is not exist for this movie. Check contents of movie from the movie! </p>}
                </div>
                <div className={styles.genre__div}>
                    <ul className={styles.movie__genres}>
                        {genres.length > 3 ? genres.slice(0, 3).map(g =><li key={g}>{g}</li>) : genres.map(g =><li key={g}>{g}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    medium_cover_image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;