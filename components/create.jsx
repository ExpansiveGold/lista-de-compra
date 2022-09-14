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
}