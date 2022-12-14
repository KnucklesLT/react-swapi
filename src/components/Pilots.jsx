import { useState, useEffect } from "react";
import { getPilots } from "../services/api-call";

const Pilots = ({pilots}) => {
  const [allPilots, setAllPilots] = useState([])

  useEffect(()=>{
    const fetchPilot = async () => {
      const pilotData = await getPilots(pilots)
      setAllPilots(pilotData)
    }
    fetchPilot()
  },[pilots])

  return (  
    <>
    {allPilots.length ? 
    <>
      {allPilots.map(pilots =>
        <p key={pilots.name}>{pilots.name}</p>
        )}
    </>
    
      :
      
      <>
        <p>No Pilots</p>
      </>
    }
    </>
  );
}

export default Pilots;