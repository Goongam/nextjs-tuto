import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";


export default function Detail({params}: InferGetServerSidePropsType<typeof getServerSideProps>){
    const router = useRouter();
    
    const [title, id] = (params as string[])


    return (
        <>
            {title} <br></br>
            {id} <br></br>
        </>
    )
}

export function getServerSideProps(ctx: GetServerSidePropsContext){


    return {
        props:{
            params: ctx.params?.params,
        }
    }
}