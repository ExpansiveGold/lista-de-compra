import Head from "next/head"

import Create from "../components/Create"

export default function Home(){
    return(
        <>
        <div className="p-3 mb-2 bg-dark text-white">
            <Head>
                <title>Lista de Compras</title>
            </Head>
            <main className="container">
                <Create />
            </main>
        </div>
        </>
    )
}