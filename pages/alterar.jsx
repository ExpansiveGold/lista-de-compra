import Head from "next/head"
import { Update } from "../components/Update" 

console.log(typeof Update)

export default function Alterar(){
    return(
        <>
        <div className="p-3 mb-2 bg-dark text-white">
            <Head>
                <title>Lista de Compras</title>
            </Head>
            <main className="container">
                <Update />
            </main>
        </div>
        </>
    )
}