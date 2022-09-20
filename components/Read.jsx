import Link from "next/link"
import { Update } from "../components/Update"
//import { deleteBtn } from './Delete'

//console.log(typeof Update)
//console.log(typeof deleteBtn)

//importar as configurações do firebase
import { app, database } from '../services/firebase'
import { collection, deleteDoc, getDocs, orderBy, query, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

//definir a coleção
const estoque = collection(database, 'estoque')

export default function Read() {

    //read
    //hooks
    const [lista, setLista] = useState([])

    const read = () => {
        getDocs(query(estoque, orderBy('nome')))
        .then((data)=>{
            setLista(data.docs.map((item) => {
                return { ...item.data(), id:item.id}
            }))
        })
    }

    //  +---------------------------------------------+
    //  | mostrar os documentos ao atualizar a pagina |
    //  +---------------------------------------------+
    useEffect(() => {
        read()
    }, [])

    // const [ID, setID] = useState(null)
    // const [produtoUnico, setProdutoUnico] = useState({})
    // const [mostrar, setMostrar] = useState(false)

    // //hooks
    // const[nome, setNome] = useState("")
    // const[validade, setValidade]=useState('')
	  // const[dataCompra, setDataCompra]=useState('')
	  // const[qnt, setQnt]=useState('')

    // const Update = async(id)=>{
    //     setID(id)
    //     if(ID != null){
    //     const produtoSimples = doc(database,'estoque',ID)
    //     const resultado = await getDoc(produtoSimples)
    //     setProdutoUnico({...resultado.data(),id:resultado.id})
    //     setNome(produtoUnico.nome)
    //     setValidade(produtoUnico.validade)
    //     setDataCompra(produtoUnico.dataCompra)
    //     setQnt(produtoUnico.qnt)
    //     }
    //     if (qnt != ""){
    //     setMostrar(true)
    //     }
    //   }

    //     const btnCancelar = ()=>{
    //       setMostrar(false)
    //       setNome("")
    //       setValidade("")
    //       setDataCompra("")
    //       setQnt("")
    //       setID(null)
    //     }
      
    //     const btnAlterar = (id)=>{
    //       const produtoMostrar = doc(database, "estoque", id)
    //       updateDoc(produtoMostrar,{
    //         nome:nome,
    //         validade:validade,
		//         dataCompra:dataCompra,
		//         qnt:qnt
    //       }).then(()=>{
    //         setNome('')
    //         setValidade('')
    //         setDataCompra('')
    //         setQnt('')
    //         setID(null)
    //         read()
    //         setMostrar(false)
    //       })
        
    // }
    // useEffect(()=>{
    //     Update()
    // },[ID])


    return (
        <>
  
        {/* {mostrar ?(
          <div>
            <h3 className="text-center">Alterar</h3>
            <input type="text" placeholder="Nome" className="form-control" required onChange={event=>setNome(event.target.value)} value={nome}/> 
            <input type="date" placeholder="Validade" className="form-control" required onChange={event=>setvalidade(event.target.value)} value={validade}/> 
            <input type="date" placeholder="Data de Compra" className="form-control" required onChange={event=>setDataCompra(event.target.value)} value={dataCompra}/> 
            <input type="number" placeholder="Quantidade" className="form-control" required onChange={event=>setQnt(event.target.value)} value={qnt}/>
            <input type="submit" value="Salvar" onClick={()=>btnAlterar(produtoUnico.id)} className="btn btn-outline-success form-control "/>
            <input type="button" value="Cancelar" onClick={btnCancelar} className="btn btn-outline-danger form-control"/>
          </div>
        ):(
          <></>
        )} */}
  
          <h3 className="text-center">Exibir</h3>
            <div>
              {lista.map((lista) => {
              return (
                <>
                <div className="card">
                  <div className="card-header bg-dark text-light">
                      Id: {lista.id}
                  </div>
                  <div className="card-body bg-secondary text-light">
                      <p className="card-title text-info">Nome: {lista.nome}</p>
                      <p className="card-subtitle">Validade: {lista.validade}</p>
                      <p className="card-subtitle">Data de Compra: {lista.dataCompra}</p>
                      <p className="card-subtitle">Quantidade: {lista.qnt}</p>
                  </div>
                  <div className="card-footer bg-dark">
                    <div className="input-group">
                      <Link href='/pages/alterar.jsx'><input type="button" value="Alterar" onClick={()=>Update(lista.id)} className="btn btn-outline-warning form-control" /></Link>
                      <Link href='/pages/apagar.jsx'><input type="button" value="Excluir" onClick={()=>deleteBtn(lista.id)} className="btn btn-outline-danger form-control" /></Link>
                    </div>
                  </div>
                </div>
                </>
              )
            })}
            </div>
        </>
    )
}