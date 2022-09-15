
import Link from "next/link"

//importar as configurações do firebase
import { app, database } from '../services/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

//deifinir coleção/tabela
const estoque = collection(database,'estoque')

export default function Create(){

  //hooks
  const[nome, SetNome]=useState('')
	const[validade, SetValidade]=useState('')
	const[dataCompra, SetDataCompra]=useState('')
	const[qnt, SetQnt]=useState('')

	//create
    const create = ()=>{
      addDoc(estoque,
        {
          nome:nome,
          validade:validade,
		      dataCompra:dataCompra,
		      qnt:qnt
        }).then(()=>{
          SetNome('')
          SetValidade('')
          SetDataCompra('')
          SetQnt('')
          window.location.reload()
        })
    }

    return (
      <>
          <Link href='/'><input type="button" className="btn btn-outline-primary border border-primary" value='Voltar' /></Link>

          <div className="text-center">
              <h3>Dispensa</h3>
          </div>

          <h5>Nome do produto:</h5>
          <input 
              type="text" 
              placeholder="Nome" 
              className="form-control" 
              required 
              onChange={event=>SetNome(event.target.value)}
              value={nome}
          /> <br />

          <h5>Validade do produto:</h5>
          <input 
              type="date" 
              placeholder="Validade" 
              className="form-control"
              onChange={event=>SetValidade(event.target.value)}
              value={validade}
          /> <br />

          <h5>Data da compra:</h5>
          <input 
              type="date" 
              placeholder="Data de Compra" 
              className="form-control" 
              required 
              onChange={event=>SetDataCompra(event.target.value)}
              value={dataCompra}
          /> <br />

          <h5>Quantidade de itens</h5>
          <input 
              type="number" 
              placeholder="Quantidade" 
              className="form-control" 
              required 
              onChange={event=>SetQnt(event.target.value)}
              value={qnt}
          /> <br />

          <input
              type="button"
              value="Salvar"
              className="btn btn-outline-success border border-success form-control"
              onClick={create}
          />
      </>
    )
}