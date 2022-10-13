import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
        <>
          <div>
            <h4>Name: {starshipDetails.name}</h4>
            <h4>Model: {starshipDetails.model}</h4>
            <Link to='/'>Return</Link>
          </div>
        </>
      :
      <>
        <h4>Loading starship details</h4>
      </>
    }
    </>
  );
}

export default StarshipPage;