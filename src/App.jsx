import React, { useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'; 


import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
// import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ProductInfo from './Components/ProductInfo/ProductInfo';




 
const App = () => {

  const [products, setProducts] = useState([]);

  const [userSearch, setUserSearch] =useState('maybelline')
                                    //  user is not going to search anything by default maybelline is

  useEffect( () =>{

    const data = async () =>{

      
      const allProducts = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${userSearch}`)
                                            //  search is come over here
      
      setProducts(allProducts.data);
    
    }
    data();
  },[userSearch]) 

  // run for the 1st time only 

  const getSearchKeyword = (userKeySearch) => {
    // console.log(userKeySearch);
       setUserSearch(userKeySearch);

  }


  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products getSearchKeyword={getSearchKeyword} products={products} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/product-info/:id' element={<ProductInfo />} />
        
        
        
      </Routes>
    </BrowserRouter>
        
  )
}

export default App; 

