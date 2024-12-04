import React, {useState,useEffect} from 'react'
import EachProductInfo from './EachProductInfo';
import './Products.css'



const Products = ( probs) => {

  const {products, getSearchKeyword} = probs;

  const [search, setSearch] = useState('')


useEffect(() =>{
  document.title = 'E-comm web || Products'
},[])  

const searchHandler= (e) => {
  setSearch(e.target.value)

}
// console.log(search)

const searchBtnHandler =() => {

  if(search===''){
    return alert('please enter your brands to search')
   }
   else{
    getSearchKeyword(search)
    
    }
    setSearch('')
}



  const productData =products.length ? products.map((product,index) => <EachProductInfo key={index} product={product} />) :<div className='d-flex justify-content-center align-items-center vh-100 vw-100'><h1>No product found</h1></div>


  return (
    <div>
        <h4 className='text-center'>Products</h4>

        <div className='text-center'>

          <input onChange={searchHandler}className='form-control w-50 m-auto' type="text" placeholder='search products...'/>
          <button className='mt-2 btn btn-outline-dark ms-2' onClick={searchBtnHandler}>Search</button>

        </div>

        <div className='all-products'>
         {productData}
        </div>
      
    </div>
  )
}

export default Products;
