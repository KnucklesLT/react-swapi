import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Pilots from "../../components/Pilots";
import { getDetails } from "../../services/api-call";

const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])

  return (  
    <>
      {starshipDetails.name ? 
        <div className="ship container">
          <div className="detail ship-div">
            <h4>Name: {starshipDetails.name}</h4>
            <h4>Model: {starshipDetails.model}</h4>
            <h4>Pilots: </h4>
            <Pilots pilots = {starshipDetails.pilots}/>
            <Link className ='link' to='/'>RETURN</Link>
          </div>
        </div>
      :
      <>
        <h3>Loading starship details</h3>
      </>
    }
    </>
  );
}

export default StarshipPage;