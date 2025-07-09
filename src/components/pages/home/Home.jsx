import React from 'react'

import Footer from '../../partials/Footer'
import Header from '../../partials/Header'
import Hero from './hero/Hero'
import Spots from './spots/Spots'
import Gear from './gear/Gear'
import Tips from './tips/Tips'
import Contact from '../../partials/Contact'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Spots/>
      <Gear/>
      <Tips/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
