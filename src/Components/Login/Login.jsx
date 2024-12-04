import React, {useEffect} from 'react'

const Login = () => {

useEffect(() =>{
    document.title = 'E-comm web || Login'
},[])   
  
  
  return (
    <div>
      <form className='text-center'> 
        <input className='form-control w-50 m-2 m-auto' type='text' placeholder='Email...'/>
        <input className='form-control w-50 m-2 m-auto'type='text' placeholder='password'/>
        <button className='btn btn-outline-warning  m-2'>Login</button>
      </form>
    </div>
  )
}

export default Login;
