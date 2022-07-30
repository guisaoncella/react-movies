import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa';

const imageUrl = import.meta.env.VITE_IMG;

interface MovieCardProps{
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    showLink? : true | boolean;
}

export function MovieCard(props: MovieCardProps){
    return(
        <h1 className='text-white'>{props.title}</h1>    
    )
}