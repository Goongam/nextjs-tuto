import NavBar from "@/components/NavBar";
import Seo from "@/components/Seo";
import Head from "next/head";
import { useEffect, useState } from "react";

interface Movie{
    original_title: string,
}
const API_KEY = '5ff972f40a1d9fc740c8c53f8b5965a2';
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export default function Home(){   
    const [movies, setMovies] = useState<Array<Movie>>();
    useEffect(()=>{
        (async() => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
            const data = await res.json();
            setMovies(data.results);
        })();
    },[]);
    
    return (
        <div>
            {!movies && <div>Loading...</div>  }
            {
                movies?.map((movie: Movie, i: number)=>(
                    <div key={i}>{movie.original_title}</div>
                ))
            }
        </div>
    );
}