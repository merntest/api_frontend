import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter , Route , Routes} from "react-router-dom";
import Addproduct from './Addproduct';

function App() {
  return (
    // <div className="App">
    //  <Route path='/' element={<Login/>}/>
     
    // </div>
    <BrowserRouter>
    <Routes>
    
     <Route path='/' element={<Login/>}/>
     <Route path='/add' element={<Addproduct/>}/>
     
   </Routes>
    </BrowserRouter>
  );
}

export default App;
