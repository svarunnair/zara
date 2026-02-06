import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import { Menu } from '@mui/material'
import { Man, Woman } from '@mui/icons-material'
import Beauty from '../Pages/Beauty'
import Kids from '../Pages/Kids'
import Men from '../Pages/Men'
import Signin from '../Pages/Auth/Signin'
import Search from '../Pages/Search'
import Help from '../Pages/Help'
import Detail from '../Pages/Detail'
import Cart from '../Pages/Cart'
import Signup from '../Pages/Auth/Signup'
import Women from '../Pages/Women'
import Payment from '../Pages/Payment'
import Address from '../Pages/Address'
import MobileOtp from '../Pages/Auth/MobileOtp'

function PublicRoutes() {

  const token=localStorage.getItem('token')
  return (
   
        <Routes>

            
            <Route path='/beauty' element={<Beauty/>}/>
            <Route path='/kids' element={<Kids/>}/>
            <Route path='/men' element={<Men/>}/>
            <Route path='/women' element={<Women/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/payment' element={token&&<Payment/>}/>
            <Route path='/address' element={<Address/>}/>
            <Route path='/mobile' element={<MobileOtp/>}/>



        </Routes>
 
  )
}

export default PublicRoutes