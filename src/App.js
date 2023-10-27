import React from 'react';
import './App.css';
import ListProducts from './components/ListProducts/ListProducts';
import InfProduct from './components/InfProduct/InfProduct';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  
  return (
    <div className='App'>
      <Router>
       <Routes>
        <Route path="/" element={<ListProducts />} />
        <Route path="/products/:id" element={<InfProduct />}/> 
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
