import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemList({prods}) {
  return (
      <>
    {prods.map(e=>
            <Link to={`/game/${e.id}`} className='box' key={e.id}>
                <p>{e.img}</p>
                <p>{e.name}</p>
                <p>{e.price}</p>
                <p>{e.desc}</p>
            </Link>
    )}
        </>
)
}
