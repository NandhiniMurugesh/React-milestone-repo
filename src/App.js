import logo from './logo.svg';
import './App.css';
import { Jsonproduct } from './Components/jsonproducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Productdisplay } from './Components/productdisplay';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';





function App() {
  return (
   <>

   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Jsonproduct/>}/>
   <Route path='/productdisplay/:id' element={<Productdisplay/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
