import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <Navbar />

        <div className="container mx-auto text-white h-full flex justify-between items-center pt-36 pb-24 gap-8">
          <div className="leftCol basis-1/2 px-16 h-full">
            <h5 className='h5'>SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className='h1'>SPACE</h1>
            <p className='p pr-10'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
          </div>
          <div className="rightCol basis-1/2 flex justify-center items-center">
            <div className="exploreBtn">EXPLORE</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home