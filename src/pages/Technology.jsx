import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import techImg from '../assets/technology/image-launch-vehicle-portrait.jpg'
import techImg2 from '../assets/technology/image-spaceport-portrait.jpg'
import techImg3 from '../assets/technology/image-space-capsule-portrait.jpg'

import mtechImg from '../assets/technology/image-launch-vehicle-landscape.jpg'
import mtechImg2 from '../assets/technology/image-spaceport-landscape.jpg'
import mtechImg3 from '../assets/technology/image-space-capsule-landscape.jpg'
import jsonData from '../data.json'

const Technology = () => {
  const [techName, setCrewName] = useState("")
  const [techDesc, settechDesc] = useState("")


  useEffect(() => {
    setCrewName(jsonData.technology[0].name)
    settechDesc(jsonData.technology[0].description)
  }, [])

  const getTechData = (value) =>{
    setCrewName(jsonData.technology[value].name)
    settechDesc(jsonData.technology[value].description)
  }

  return (
    <div className="technology" id="technology">
      <Navbar />


      <h5 className='crewHeading heading ml-44 h5 mb-10 mt-10'><span className='font-bold opacity-25	mr-2'>03</span> SPACE LAUNCH 101</h5>

      <div className="container-fluid flex justify-between items-center gap-8 text-white">
        <div className='leftCol basis-7/12 h-full flex justify-between items-center gap-24 pl-28'>
          <div className="tech_tabLinks flex flex-col gap-8">
            <div onClick={() => getTechData(0)} className={`techLinks ${techName === 'Launch vehicle' ? 'active' : ''}`}>1</div>
            <div onClick={() => getTechData(1)} className={`techLinks ${techName === 'Spaceport' ? 'active' : ''}`}>2</div>
            <div onClick={() => getTechData(2)} className={`techLinks ${techName === 'Space capsule' ? 'active' : ''}`}>3</div>
          </div>
          <div className="tech-content">
            <h5 className='h5'>THE TERMINOLOGY…</h5>
            <h3 className="h3 uppercase">{techName}</h3>
            <p className="p">{techDesc}</p>
          </div>
        </div>
        <div className="rightCol basis-5/12 flex justify-end">
            <img className='techImage' src={techName === 'Launch vehicle' ? techImg : techName === 'Spaceport' ? techImg2 : techName === 'Space capsule' ? techImg3 : '' } alt="" />
            <img className='mtechImage' src={techName === 'Launch vehicle' ? mtechImg : techName === 'Spaceport' ? mtechImg2 : techName === 'Space capsule' ? mtechImg3 : '' } alt="" />
        </div>
      </div>
    </div>
  )
}

export default Technology