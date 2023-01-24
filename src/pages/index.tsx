import NavBar from "@/components/NavBar";
import Seo from "@/components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


interface Movie{
    original_title: string,
    poster_path: string,
    id: number,
}

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export default function Home({results}:InferGetServerSidePropsType<GetServerSideProps>){   
    // const router = useRouter();
    // const onCLick = (id:number) => {
    //     router.push(`/movies/${id}`);
    // }
    return (
        <>
        <Seo title={'Home'} />
        <div className="container">
            {
                results?.map((movie: Movie, i: number)=>(
                    <Link 
                        href={{
                            pathname: `/movies/${movie.original_title}/${movie.id}`,
                        }} 
                        key={movie.id}
                    >
                        <div className="movie" key={i}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

                        <h4>{movie.original_title}</h4>

                        </div>
                    </Link>
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

export async function getServerSideProps() {


    const res = await fetch(`http://localhost:3000/api/movies`);
    const data = await res.json();
    return {
        props: {
            results: data.results
        }
    }


}