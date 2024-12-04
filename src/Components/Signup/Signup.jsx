import React,{useEffect} from 'react'

const Signup = () => {

useEffect(() =>{
    document.title = 'E-comm web || Signup'
},[])    
  return (
    <div>
     <form className='text-center'> 
        <input className='form-control w-50 m-2 m-auto'  type='text' placeholder='first name...'/>
        <input className='form-control w-50 m-2 m-auto'  type='text' placeholder='last name'/>
        <input className='form-control w-50 m-2 m-auto'  type='text' placeholder='Email...'/>
        <input className='form-control w-50 m-2 m-auto'  type='text' placeholder='password'/>
        <button className='btn btn-outline-warning  m-2'>Signup</button>
      </form>
    </div>
  )
}

export default Signup;
