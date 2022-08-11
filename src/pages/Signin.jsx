import React , { useState } from 'react'
import {Flex,Box,Heading,FormControl,FormLabel,Input,Button} from '@chakra-ui/react'





const Signin = () => {

 const [email ,setEmail]= useState('')

console.log(email)


  return (
    <Flex align='center' width='full' justifyContent='center'>
      <Box pt={10}>
        <Box textAlign='center'>
          <Heading>Sigbnup</Heading>
        </Box>
        <Box my={5} textAlign='left'>
       <form>
        <FormControl>
         <FormLabel>E-mail</FormLabel> 
         <Input name='email'
         value={email}
         onChange={(e)=>setEmail(e.target.value)}></Input>
        </FormControl>

        <FormControl>
         <FormLabel>password</FormLabel> 
         <Input name='password' type='password'></Input>
        </FormControl>

        <FormControl>
         <FormLabel>password confirm</FormLabel> 
         <Input name='passwordConfirm' type='password'></Input>
        </FormControl>

        <Button mt='4' width='full' type='submit'>Signup</Button>
       </form>

        </Box>
        
      </Box>






    </Flex>


    
  )
}

export default Signin