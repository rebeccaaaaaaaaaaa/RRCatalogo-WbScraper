import React, { useEffect, useState } from 'react'
import {MenuHeader} from '../../components/Menu'
import {ProductList} from '../../components/ProductList'

export function FonePage() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8000/fones')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        setLoading(true)
      }
    )
  }, [])

  return (
    <div>
        <MenuHeader />
        <ProductList products={
          loading ? products : []
        } />
    </div>
  )
}