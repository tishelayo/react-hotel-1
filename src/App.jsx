import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroBooking from './components/HeroBooking'
import AboutUs from './components/AboutUs'
import RoomListing from './components/RoomListing'
import Testimonial from './components/Testimonial'
import CTABanner from './components/CtaBanner'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroBooking />
      <AboutUs />
      <RoomListing />
      <Testimonial />
      <CTABanner />
      <Gallery />
      <Footer />
      {/* <main className="main-content">
       
      </main> */}
    </div>
  )
}

export default App
