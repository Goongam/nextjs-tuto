import Head from "next/head";

interface titleProps {
    title: string
}

export default function Seo({title}: titleProps){
    return <Head>
        <title>{title} | Next Movies</title>
    </Head>
}