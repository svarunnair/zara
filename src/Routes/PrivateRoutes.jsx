import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Payment from '../Pages/Payment'

function PrivateRoutes() {
  return (
    <Routes>

        <Route path='/payment' element={<Payment/>}/>

        
    </Routes>
  )
}

export default PrivateRoutes