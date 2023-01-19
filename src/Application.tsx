import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/Pages/Home/Admin'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import NewPassword from './Pages/Login/NewPassword'
import PageNotFound from './Pages/Page404/PageNotFound'
import Shop from './Pages/Shop/Shop'
import Wishlist from './Pages/Wishlist/Wishlist'
import ProtectedRoute from './ProtectedRoute'

const Application = () => {
     return (
          <Routes>
               <Route path='/' element={<Home />} />
               <Route path='shop' element={<Shop />} />
               <Route path='shop/:id' element={<Shop />} />
               <Route path='cart' element={
                    <ProtectedRoute>
                         <Cart />
                    </ProtectedRoute>
               } />
               <Route path='wishlist' element={
                    <ProtectedRoute>
                         <Wishlist />
                    </ProtectedRoute>
               } />
               <Route path='login' element={<Login />} />
               <Route path='login/reset-password' element={<NewPassword />} />
               <Route path='admin/*' element={<Admin />} />
               <Route path='*' element={<PageNotFound />} />
          </Routes>
     )
}

export default Application