import { Link } from "react-router-dom";
import {BiCameraMovie} from 'react-icons/bi';

export function Logo(){
    return(
        <Link to="/" className="group">
            <div className="bg-cinema-bg-2 text-4xl text-cinema-text-1 font-cursive rounded-full p-4  w-max flex gap-2
                    group-hover:text-cinema-text-2 transition-colors">
                <BiCameraMovie className="text-cinema-text-1 group-hover:text-cinema-text-2 transition-colors" />
                Rmovies
            </div>
        </Link>
    )
}