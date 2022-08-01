import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BsGraphUp, BsWallet2, BsHourglassSplit } from "react-icons/bs"
import {FaStar} from 'react-icons/fa';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

import defaultImg from '../assets/poster-placeholder.jpg'

export function Movie(){
    const {id} = useParams();
    const [movie, setMovie] = useState<any>();

    const getMovie = async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data)
        setMovie(data);
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`;
        getMovie(movieUrl);
    }, [id])

    const formatCurrency = (number: number) => {
        return number.toLocaleString("en-US",{
            style: "currency",
            currency: "USD"
        })    
    }

    return(
        <>
        {movie && 
        <div className="flex flex-col lg:flex-row text-white lg:mx-12 justify-center px-8 lg:px-0">
            <div className="flex flex-col text-center mt-5 lg:mr-20">
                <div className='flex flex-col items-center gap-2 justify-center text-3xl text-cinema-text-1 font-bold'>
                        <h2>{movie.title}</h2>
                        <div className="flex items-center gap-2">
                            <p>{movie.vote_average.toFixed(1)}</p>
                            <FaStar size={24} /> 
                        </div>
                </div>
                <p className="mt-5">{movie.overview}</p>
                <div>
                    <div className="mt-6">
                        <p>Genre: 
                            {movie.genres.length === 0 ? "Unknown" : 
                                movie.genres.map((genre: {name: string}, index: number) => {
                                    return(
                                        index === 0 ? " "+genre.name : ", "+genre.name
                                    )
                                })
                            }
                        
                        </p>
                    </div>
                    <div className="flex gap-2 justify-center items-center mt-6">
                        <BsHourglassSplit size={24} />
                        Duration:<p> {movie.runtime}min</p>
                    </div>
                    <div className="flex gap-2 justify-center items-center mt-4">
                        <BsWallet2 size={20} />
                        Budget:<p className="text-yellow-500"> {formatCurrency(movie.budget)}</p>
                    </div>
                    <div className="flex gap-2 justify-center items-center mt-4">
                        <BsGraphUp size={24} />    
                        Revenue:<p className={`${movie.revenue < movie.budget ? 'text-red-500' : 'text-green-500'}`}> {formatCurrency(movie.revenue)}</p>
                    </div>
                    
                </div>
            </div>
            <img src={movie.poster_path ? (imageUrl + movie.poster_path) : defaultImg} alt={movie.title} 
                className="w-[80%] md:w-[60%] lg:w-[30%] self-center mt-12 lg:mt-0 rounded-md" 
            />
        </div>    
        }
        </>
    )
}