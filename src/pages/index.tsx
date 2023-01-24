import NavBar from "@/components/NavBar";
import Seo from "@/components/Seo";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Movie{
    original_title: string,
    poster_path: string
}

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export default function Home(){   
    const [movies, setMovies] = useState<Array<Movie>>();
    useEffect(()=>{
        (async() => {
            const res = await fetch(`/api/movies`);
            const data = await res.json();
            setMovies(data.results);
        })();
    },[]);
    
    return (
        <>
        <Seo title={'Home'} />
        <div className="container">
            {!movies && <div>Loading...</div>  }
            {
                movies?.map((movie: Movie, i: number)=>(
                    <div className="movie" key={i}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

                        <h4>{movie.original_title}</h4>

                    </div>
                ))
            }

        <style jsx>{`
            .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
            }
            .movie{
                text-align: center;
            }
            .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie img:hover {
                transform: scale(1.05) translateY(-10px);
            }
            .movie h4 {
                font-size: 18px;
                text-align: center;
            }
      `}</style>
        </div>
        </>
        
    );
}