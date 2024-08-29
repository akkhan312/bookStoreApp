import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freebok from '../components/Freebok'
export default function Home() {
  return (
    <>
     <div>
     <Navbar/>
      <Banner/>
      <Freebok/>
      <Footer/>
    </div> 
    </>
  )
}
