import Head from "next/head"
import Read from "../components/Read"

export default function Show(){
    return(
        <>
        <div className="p-3 mb-2 bg-dark text-white">
            <Head>
                <title>Lista de Compras</title>
            </Head>
            <main className="container">
                <Read />
            </main>
        </div>
        </>
    )
}