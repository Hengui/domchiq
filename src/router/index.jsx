import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Pedidos from '../pages/Inicio'
import Checkout from '../pages/Checkout'
import Orders from '../pages/Orders'

function Router() {
  return (
    <>
        < Header />

        <Routes>
            <Route exat path="/" element= { <Pedidos /> } />
            <Route exat path="/Checkout" element= { <Checkout /> } />
            <Route exat path="/Orders" element= { <Orders /> } />
            
        </Routes>
    </>
  )
}

export default Router