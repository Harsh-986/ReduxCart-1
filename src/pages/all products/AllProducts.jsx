import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import { allProducts } from '../../data'  // ADD THIS LINE
import Footer from '../../components/footer/Footer'

function AllProducts() {
  return (
    <div>
        <Navbar />
        <Products heading='Products' items={allProducts}/>
        <Footer></Footer>
    </div>
  )
}

export default AllProducts