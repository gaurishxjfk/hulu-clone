import React from 'react'
import './VideoCard.css'
import TextTruncate from "react-text-truncate";
import FavoriteIcon from '@material-ui/icons/Favorite';
const base_url = "https://image.tmdb.org/t/p/original/";


function VideoCard( {movie} ) {
    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.paster_path}`} alt="Movie-Thumbnail"/>
                {/* {movie.overview} */}
                <TextTruncate line={2}
                element="p"
                
                textTruncateChild={<a href="#">...</a>}
                text={movie.overview}/>
            <h2>{movie.title || movie.original_name}</h2>
            <div className="likes"><FavoriteIcon/><p>{movie.vote_count}</p></div>
        </div>
    )
}

export default VideoCard
