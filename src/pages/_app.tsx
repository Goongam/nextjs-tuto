import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import { AppProps } from "next/app"

export default function App({Component , pageProps}: AppProps){
    return (
        <>
         <Layout>
            <Component {...pageProps} />
         </Layout>

        </>
    );
}