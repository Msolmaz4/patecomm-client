import React from 'react'
import Card from '../componenst/Card'
//import { Grid,GridItem } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
//DAHA TEMIZ OLSUN DIYE API ZAPTI ORDAN CAGIRIZORUY
import { fetchProductList } from './api'



const Products = () => {
  const { isLoading, error, data } = useQuery('products', fetchProductList)
  // () => //fetch('https://api.github.com/repos/tannerlinsley/react-query')
  
  //.then(res =>res.json()
  


if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message

console.log('data',data)

  return (
    <div>
      

      {
        data.map((item ,key)=>
        <Card key={key} item={item}/>
          )
      }
   
    </div>
  )
}

export default Products