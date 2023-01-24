import NavBar from "./NavBar";
// import { FC } from "react";
import { ReactNode } from "react";
import Seo from "./Seo";
import { useRouter } from "next/router";

type LayoutProps = { children? : ReactNode };
interface Titles{
    [key:string]: string
}


export default function Layout({ children }: LayoutProps ){

    const titles: Titles= {
        '/': "Home",
        '/about': "About"
    }

    const router = useRouter();

    return (
        <>
            {/* <Seo title={titles[router.pathname]} /> */}
            <NavBar />
            <div>{children}</div>
            <style jsx global>{`
                a{
                    color: black;
                    text-decoration: none;
                }
            `}</style>
        </>
    );
}