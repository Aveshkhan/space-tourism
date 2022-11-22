import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import moonImg from '../assets/destination/image-moon.webp'
import marsImg from '../assets/destination/image-mars.webp'
import europaImg from '../assets/destination/image-europa.webp'
import titanImg from '../assets/destination/image-titan.webp'
import jsonData from '../data.json'

const Destination = () => {

  const [planetName, setPlanetName] = useState("")
  const [planetDetails, setPlanetDetails] = useState("")
  const [planetDistance, setPlanetDistance] = useState("")
  const [planetTravelTime, setPlanetTravelTime] = useState("")

  useEffect(() => {
    console.log(jsonData.destinations[1])
    setPlanetName(jsonData.destinations[0].name)
    setPlanetDetails(jsonData.destinations[0].description)
    setPlanetDistance(jsonData.destinations[0].distance)
    setPlanetTravelTime(jsonData.destinations[0].travel)

    console.log(planetName)
  }, [])

  const getMoonData = () => {
    setPlanetName(jsonData.destinations[0].name)
    setPlanetDetails(jsonData.destinations[0].description)
    setPlanetDistance(jsonData.destinations[0].distance)
    setPlanetTravelTime(jsonData.destinations[0].travel)
  }
  const getMarsData = () => {
    setPlanetName(jsonData.destinations[1].name)
    setPlanetDetails(jsonData.destinations[1].description)
    setPlanetDistance(jsonData.destinations[1].distance)
    setPlanetTravelTime(jsonData.destinations[1].travel)
  }
  const getEuropaData = () => {
    setPlanetName(jsonData.destinations[2].name)
    setPlanetDetails(jsonData.destinations[2].description)
    setPlanetDistance(jsonData.destinations[2].distance)
    setPlanetTravelTime(jsonData.destinations[2].travel)
  }
  const getTitanData = () => {
    setPlanetName(jsonData.destinations[3].name)
    setPlanetDetails(jsonData.destinations[3].description)
    setPlanetDistance(jsonData.destinations[3].distance)
    setPlanetTravelTime(jsonData.destinations[3].travel)
  }

  

  return (
    <>
      <div className="destination" id="destination">
        <Navbar />

        <div className="container mx-auto text-white h-full flex flex-col pt-12 ">

          <div className="flex justify-between items-start gap-8 ">
            <div className="leftCol basis-1/2 h-full flex flex-col justify-center items-center">
            <h5 className='destinationHeading w-full pl-24 h5 mb-8'><span className='font-bold opacity-25	mr-2'>01</span> PICK YOUR DESTINATION</h5>
              <div className="planetImg p-4">
                <img src={planetName === 'Moon' ? moonImg : planetName === 'Mars' ? marsImg : planetName === 'Europa' ? europaImg : planetName === 'Titan' ? titanImg : undefined } alt="" />
              </div>
            </div>

            <div className="rightCol basis-1/2 pt-16">
              <div className="tab_links mb-5">
                <ul className='flex items-center gap-x-10'>
                  <li onClick={getMoonData} className={`uppercase ${planetName === "Moon" ? "active" : "" }`}>Moon</li>
                  <li onClick={getMarsData} className={`uppercase ${planetName === "Mars" ? "active" : "" }`}>Mars</li>
                  <li onClick={getEuropaData} className={`uppercase ${planetName === "Europa" ? "active" : "" }`}>Europa</li>
                  <li onClick={getTitanData} className={`uppercase ${planetName === "Titan" ? "active" : "" }`}>Titan</li>
                </ul>
              </div>
              <div className="planetName">
                <h2 className='h2 uppercase'>{planetName}</h2>
              </div>
              <div className="planetDetails pb-10 mr-16 mb-8">
                <p className='p'>{planetDetails}</p>
              </div>
              <div className="planetStats flex items-center gap-x-14">
                <div className="distance">
                  <h5 className="subHeading2">AVG. DISTANCE</h5>
                  <h5 className="subHeading1 uppercase">{planetDistance}</h5>
                </div>
                <div className="travelTime">
                  <h5 className="subHeading2">EST. TRAVEL TIME</h5>
                  <h5 className="subHeading1 uppercase">{planetTravelTime}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Destination