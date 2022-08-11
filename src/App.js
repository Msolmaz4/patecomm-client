import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import './App.css';
import Navbar from './componenst/Navbar'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Products from './pages/Products';
import Details from './pages/Details';


function App() {
  return (
 
    <Router>
   
   <Navbar/>
    
  <Routes>
 
   <Route  path='/' element={<Products/>}/>
   <Route  path='/signin' element={<Signin/>} />
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/detail/:id' element={<Details/>}/>
    
  </Routes>

    </Router>
    
  );
}

export default App;
