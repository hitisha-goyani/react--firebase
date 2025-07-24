import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './component/Home'
import Products from './component/Products'
import Login from './component/Login'
import About from './component/About'
import Privatepage from './component/Privatepage'
import AddProduct from './component/addProduct'







const AllRouter = () => {
  return (
    <div>

        <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
              <Route path='/addProduct' element={<AddProduct/>}/>  
         
                <Route path='/Products' element={
                     <Privatepage>
                      <Products/>
                        </Privatepage>} />
          
          
            <Route path='/Login' element={<Login/>} />
         

        </Routes>
         
    </div>
  )
}

export default AllRouter
