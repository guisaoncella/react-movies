import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export function Home(){
    const [topMovies, setTopMovies] = useState<any[]>([]);

    const getTopRatedMovies = async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        getTopRatedMovies(topRatedUrl);
    }, [])
    
    return(
        <div>
            <h2 className="text-4xl text-cinema-text-2 text-center mb-12 font-bold">- Melhores filmes -</h2>
            <div className="flex flex-wrap gap-8 text-white justify-center">
                {topMovies.length === 0 ? <p>Carregando...</p> : 
                    topMovies.map(movie =>{
                        return(
                            <MovieCard 
                                title={movie.title} 
                                overview={movie.overview} 
                                poster_path={movie.poster_path} 
                                vote_average={movie.vote_average} 
                                id={movie.id}
                                showLink={true}
                                key={movie.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}