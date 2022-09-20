//importar as configurações do firebase
import { app, database } from '../services/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

//  +----------------+
//  | update comceço |
//  +----------------+

export function Update(id){
    const [ID, setID] = useState(null)
    const [produtoUnico, setProdutoUnico] = useState({})
    const [mostrar, setMostrar] = useState(false)

    //hooks
    const[nome, setNome] = useState("")
    const[validade, setValidade]=useState('')
	  const[dataCompra, setDataCompra]=useState('')
	  const[qnt, setQnt]=useState('')

    const show = async(id)=>{
        setID(id)
        if(ID != null){
        const produtoSimples = doc(database,'estoque',ID)
        const resultado = await getDoc(produtoSimples)
        setProdutoUnico({...resultado.data(),id:resultado.id})
        setNome(produtoUnico.nome)
        setValidade(produtoUnico.validade)
        setDataCompra(produtoUnico.dataCompra)
        setQnt(produtoUnico.qnt)
        }
        if (nome != ""){
        setMostrar(true)
        }
    }
    const btnCancelar = ()=>{
      setMostrar(false)
      setNome("")
      setValidade("")
      setDataCompra("")
      setQnt("")
      setID(null)
    }
  
    const btnAlterar = (id)=>{
      const produtoMostrar = doc(database, "estoque", id)
      updateDoc(produtoMostrar,{
        nome:nome,
        validade:validade,
        dataCompra:dataCompra,
        qnt:qnt
      }).then(()=>{
        setNome('')
        setValidade('')
        setDataCompra('')
        setQnt('')
        setID(null)
        read()
        setMostrar(false)
      })
    }
    
    useEffect(()=>{
        show()
    },[ID])


    return (
        <>
  
        {mostrar ?(
          <div>
            <h3 className="text-center">Alterar</h3>
            <input type="text" placeholder="Nome" className="form-control" required onChange={event=>setNome(event.target.value)} value={nome}/> 
            <input type="date" placeholder="Validade" className="form-control" required onChange={event=>setvalidade(event.target.value)} value={validade}/> 
            <input type="tel" placeholder="Data de Compra" className="form-control" required onChange={event=>SetDataCompra(event.target.value)} value={dataCompra}/> 
            <input type="number" placeholder="Quantidade" className="form-control" required onChange={event=>SetQnt(event.target.value)} value={qnt}/>
            <input type="submit" value="Salvar" onClick={()=>btnAlterar(produtoUnico.id)} className="btn btn-outline-dark form-control"/>
            <input type="button" value="Cancelar" onClick={btnCancelar} className="btn btn-outline-danger form-control"/>
          </div>
        ):(
          <></>
        )}
        </>
    )
}

//  +------------+
//  | update fim |
//  +------------+