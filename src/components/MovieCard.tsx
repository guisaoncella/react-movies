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
        <div className='flex flex-col bg-cinema-bg-2 rounded-md w-[50%] lg:w-2/12 sm:w-3/12 p-4 justify-between'>
            <img src={imageUrl + props.poster_path} alt={props.title} />
            <h2 className='mt-2'>{props.title}</h2>
            
            <div className='flex w-full items-center gap-2'>
                <FaStar size={24} className="text-cinema-text-1" /> 
                <p className="text-cinema-text-1 text-lg font-bold">{props.vote_average}</p>
            </div>

            {props.showLink && 
                <Link to={`/movie/${props.id}`} className="border border-cinema-text-1 mt-5 
                            p-2 rounded-md text-center bg-cinema-bg-1 text-cinema-text-1 text-lg font-bold
                            hover:bg-cinema-text-2 hover:text-white transition-colors">
                    Detalhes
                </Link>
            }
        </div>   
    )
}