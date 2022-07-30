import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa';

const imageUrl = import.meta.env.VITE_IMG;

interface MovieCardProps{
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    id: number;
    showLink : boolean;
}

export function MovieCard(props: MovieCardProps){
    return(
        <div>
            <img src={imageUrl + props.poster_path} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.overview}</p>
            <span>
                <FaStar /> {props.vote_average}
            </span>
            {props.showLink && 
                <Link to={`/movie/${props.id}`}>Detalhes</Link>
            }
        </div>   
    )
}