import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Services'
import Contact from './Pages/Contact'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Footer from './component/Footer'
export default function App()
{
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' exact Component={Home}></Route>
      <Route path='/home' Component={Home}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/service' Component={Service}></Route>
      <Route path='/contact' Component={Contact}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}