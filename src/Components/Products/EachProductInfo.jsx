import React from 'react';
import './Each.css';
import { Link } from 'react-router-dom'; 
// use for view





const EachProductInfo = (probs) => {

    const { product} = probs
    // console.log(product)

    const  {brand, category,description,image_link,name,price,product_colors,rating,product_type,id} = product;

   
  return (
    <div className='border border-2 rounded text-center d-flex  flex-column justify-content-around align-items-center'>
        <img className='img' src={image_link} alt='pic'/>
        <hr />
        <strong>{name}</strong>
        <hr />
        <h5 className=''m-3>Type:{product_type}</h5> 

         {/* <div className='d-flex justify-content-around m-2'>

          <div>
            <h5>Brand:{brand}</h5>
            <h5>Price:${price}</h5>
          </div>

          <div>    
            <h5>Category: {category ? category : 'no'}</h5>
            <h5>Rating:{rating ? rating : 'no'}</h5>
          </div>  */}

        {/* </div>

        {product_colors.length ? <h6>Colors</h6> :''}

        <div className='colors-container'>


        {product_colors.map((color)=>{
            return <div style={{backgroundColor:`${color.hex_value}`}} className='colors'></div>
        }
        
        )}

       </div> */}

        {/* <div>
            <p className='about-text'>About:{description}</p>
        </div>  */}
        <Link to={`/product-info/${id}`} state={product} className='btn btn-outline-warning m-2'> View </Link>

    </div>
  )
}

export default EachProductInfo;
