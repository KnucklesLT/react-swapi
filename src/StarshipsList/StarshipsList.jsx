import { useEffect, useState } from "react";
import { getAllStarships } from "../services/api-call";
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
      <h1>Starships!</h1>
    </>

  )
}

export default StarshipsList