import NavBar from "@/components/NavBar";
import Head from "next/head";
import Seo from "@/components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function About(){

    return (
        <>
            <Seo title={'About'} />
            <h1>about</h1>

        </>
    );
}
