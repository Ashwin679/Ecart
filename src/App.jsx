
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Header from './components/Header'
import Wishlist from './pages/Wishlist'
import Home from './pages/Home'
import Footer from './components/Footer'


function App() {

  return (
    <>
       <Header/>
       <Routes>
       <Route path='/'element={<Home/>}/>
       <Route path='/Wishlist'element={<Wishlist/>}/>
       <Route path='/Cart'element={<Cart/>}/>
       </Routes>
       <Footer/>
    </>
  )
}

export default App