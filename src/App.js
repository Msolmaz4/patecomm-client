import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import './App.css';
import Login from './Login'
import Navbar from './componenst/Navbar'
import Signin from './pages/Signin';
import Signup from './pages/Signup';


function App() {
  return (
 
    <Router>
   
   <Navbar/>
    
  <Routes>
 
   <Route  path='/login' element={<Login/>}/>
   <Route  path='/signin' element={<Signin/>} />
   <Route path='/signup' element={<Signup/>}/>
    
  </Routes>

    </Router>
    
  );
}

export default App;
