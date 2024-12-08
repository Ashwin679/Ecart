
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './Pages/Wishlist'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Cart from './pages/Cart'
import Header from './components/Header'


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