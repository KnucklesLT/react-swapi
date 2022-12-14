import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/api-call";
import { Link } from "react-router-dom";

const StarshipsList = () => {
  const [starships, setStarshipss] = useState([])

  useEffect(() => {
    const fetchStarshipsList = async () => {
      const starshipData = await getAllStarships()
      setStarshipss(starshipData.results)
    }
    fetchStarshipsList()
  }, [])

  return(
    <>
      <div className="container">
        {starships.length ?
        <>
        {starships.map(starship => 
          <Link className ='link' key={starship.name} to='/starship' state={ {starship} }>
            <div className="ship-div">
              <h2>{starship.name}</h2>
            </div>
          </Link>
        )}
        </>
        :
        <>
          <h3>Loading...</h3>
        </>
        
      }

      </div>

    </>

  )
}

export default StarshipsList