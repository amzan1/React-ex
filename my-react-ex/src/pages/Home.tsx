import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
type prodects={
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number,
    },
}
function Home() {
    
  return (
    <>
        <Navbar/>

    </>
  )
}

export default Home