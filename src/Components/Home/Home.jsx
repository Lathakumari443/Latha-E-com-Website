import React,{ useEffect} from 'react'
import "./Home.css"

const Home = () => {


useEffect(() =>{

  document.title="E-comm web || Home"
},[])  
  return (
    <div>
    
      <img
        src="https://f.hellowork.com/blogdumoderateur/2023/05/ECommerce-Fevad-2023-.jpg"
        alt="e-com" />
      {/* here we can add caurosals */}
      
    </div>
  )
}

export default Home;
