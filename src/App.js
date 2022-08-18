import React from 'react';
import './App.css';
import { useGlobalContext } from './context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
// items

function App() {
  const { loading } = useGlobalContext();
   if (loading) {
     return (
       <div className='loading'>  
         <h1>Loading...</h1>
       </div>
     )
   }
  
  return (
    <main>
    <Navbar />
    <CartContainer />
    <p className="footer"><small>Krypto Zone &copy; 2022</small></p>
    </main>
  )
}

export default App
