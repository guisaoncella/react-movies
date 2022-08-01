import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { MovieCard } from "../components/MovieCard"

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export function Search(){
    const [searchedMovies, setSearchedMovies] = useState<any[]>([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const getSearchedMovies = async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();

        setSearchedMovies(data.results);
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueryURL);
    }, [query])

    return(
        <div>
            <h2 className="text-4xl text-cinema-text-2 text-center mb-12 font-bold">- Resultados para
                <span className="uppercase text-white"> {query}</span>
             -</h2>
            <div className="flex flex-wrap gap-8 text-white justify-center">
                {searchedMovies.length === 0 ? <p>Carregando...</p> : 
                    searchedMovies.map(movie =>{
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