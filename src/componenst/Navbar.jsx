import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div className='nav'>
     <div className="left">
        <div className="logo">
            <Link to='/'>e commerxce</Link>
        </div>
        <div>
        <ul className="menu">
        <Link to='/'>  <li>
                Products
            </li></Link>
        </ul>
        </div>

     </div>
     <div className="right">
        <Link to='/signup'>
        <Button colorScheme='teal' size='sm'>Login </Button>
        </Link>
         <Link to='/signin'>
         <Button colorScheme='teal' size='sm'>Register</Button>
         </Link>
 
     </div>
    </div>
  )
}

export default Navbar