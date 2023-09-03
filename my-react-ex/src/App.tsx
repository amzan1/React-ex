import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import AllProdect from './pages/AllProdect'
import ViewProd from './pages/ViewProd'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        
        <Route path='/prodect' element={<AllProdect/>}/>
        <Route path='/prodect/:id' element={<ViewProd/>}/>
      </Routes>
    </>
  )
}

export default App