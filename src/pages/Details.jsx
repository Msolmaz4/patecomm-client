import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import {  fetchProduct } from './api'
import { Box,Text,Button } from '@chakra-ui/react'
import ImageGallery from 'react-image-gallery';

const Deatails = () => {

  const {id} =useParams()

   const { isLoading,isError ,data} = useQuery(['product',id],()=>fetchProduct(id))
  if(isLoading){
    return <div>Loadinngg</div>
  }
  if(isError){
    return <div>error</div>
  }
  
  console.log(data)
 //burada biye gelen url originakdiye cevirdik 
  const images = data.photos.map((url)=>({original :url}))
  return (
    <div>
      {id}

      <Button colorScheme='pink'>add basket</Button>
      <Text as='h2' fontSize='2xl'>
        {data.title}
      </Text>
      <p>{data.description}</p>
      <Box margin='10'>
        <ImageGallery item={images}/>

      </Box>

    </div>
  )
}

export default Deatails