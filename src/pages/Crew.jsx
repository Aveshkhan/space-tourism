import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import crew1 from '../assets/crew/image-douglas-hurley.webp';
import crew2 from '../assets/crew/image-mark-shuttleworth.webp';
import crew3 from '../assets/crew/image-victor-glover.webp';
import crew4 from '../assets/crew/image-anousheh-ansari.webp';
import jsonData from '../data.json'


const Crew = () => {
  const [crewName, setCrewName] = useState("")
  const [crewRole, setCrewRole] = useState("")
  const [crewBio, setCrewBio] = useState("")

  useEffect(() =>{
    setCrewName(jsonData.crew[0].name)
    setCrewRole(jsonData.crew[0].role)
    setCrewBio(jsonData.crew[0].bio)
  }, [])

  const getcrewData = (value) => {
    setCrewName(jsonData.crew[value].name)
    setCrewRole(jsonData.crew[value].role)
    setCrewBio(jsonData.crew[value].bio)
  }

  return (
    <>
      <div className="crew" id="crew">
        <Navbar />

        <div className="container mx-auto pt-12 flex justify-between items-end gap-8 text-white">
        <div className="leftCol basis-1/2 h-full flex flex-col justify-between items-start pl-24">
            <h5 className='destinationHeading w-full h5 mb-24'><span className='font-bold opacity-25	mr-2'>02</span> MEET YOUR CREW</h5>
              
              <h4 className="h4 mb-2 uppercase opacity-50">{crewRole}</h4>
              <h3 className='h3 uppercase'>{crewName}</h3>
              <p className="p mr-16 mb-16">{crewBio}</p>

              <div className="crewTab_links mb-4">
                <ul className='flex items-center gap-x-6'>
                  <li onClick={() => getcrewData(0)} className={` ${crewName === 'Douglas Hurley' ? 'active' : ''}`}></li>
                  <li onClick={() => getcrewData(1)} className={` ${crewName === 'Mark Shuttleworth' ? 'active' : ''}`}></li>
                  <li onClick={() => getcrewData(2)} className={` ${crewName === 'Victor Glover' ? 'active' : ''}`}></li>
                  <li onClick={() => getcrewData(3)} className={` ${crewName === 'Anousheh Ansari' ? 'active' : ''}`}></li>
                </ul>
              </div>
            </div>
            <div className="rightCol basis-1/2">
              <div className="crewImg">
                <img src={crewName === 'Douglas Hurley' ? crew1 : crewName === 'Mark Shuttleworth' ? crew2 : crewName === 'Victor Glover' ? crew3 : crewName === 'Anousheh Ansari' ? crew4 : undefined} alt="crewImg" />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Crew