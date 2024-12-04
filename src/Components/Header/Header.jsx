import React from 'react';
import { Link} from 'react-router-dom'


const Header = () => {
  return (
    <div className='d-flex bg-info text-white justify-content-around align-items-center'>
        <div>
        <h2><Link  className='text-decoration-none text-white' to='/'>Rama E-comm Website </Link></h2>
        </div>

        <div>
            <ul className='d-flex  list-unstyled'>
                <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark'to='/products'>Products</Link></li>
                <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark'to='/login'>Login</Link></li>
                <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark'to='/signup'>Signup</Link></li>
                <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark'to='/contactus'>Contact Us</Link></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Header;
