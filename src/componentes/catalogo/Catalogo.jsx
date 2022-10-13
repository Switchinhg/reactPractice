import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../fetch/getfetch'
import ItemList from '../itemList/ItemList'
export default function Catalogo() {
  const [prods,setProds] = useState([])
  const { id } = useParams()
  useEffect(() => {

    id?
    getFetch(id)
      .then(prod =>{
        setProds(prod)
      })
    :

   getFetch()
   .then(data=>{
    setProds(data)
   })


  }, [id])
  console.log(prods)
  return (
    <div className='wrapper'>

      <ItemList prods={prods}/>


    </div>
  )
}
