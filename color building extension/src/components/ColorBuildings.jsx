import { Forma } from 'forma-embedded-view-sdk/auto'
import React from 'react'

import { useState,useEffect } from 'react'

const ColorBuildings = () => {

    const [buildingPaths, setbuildingPaths] = useState([])
    const [footprints, setfootprints] = useState([])
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)

    const fetchBuildingPaths=async()=>{

        try{
        setloading(true)
        const paths= await Forma.geometry.getPathsByCategory({category:"building"});
        console.log("paths"+ paths)
        setbuildingPaths(paths);


        setloading(false);
        seterror('');
        console.log("building " +buildingPaths);
        }
        catch(error){
            seterror(error.message);
        }
        finally{
            setloading(false)
        }

    }

    
    
    useEffect(() => {


      fetchBuildingPaths();
      
    }, [])
    


  return (

    <>

    {loading && <p>Loading...</p>}

    {!error && !loading && (
  <>
    <p>No. of buildings: {buildingPaths?.length}</p>
    <ul>
      {buildingPaths.map((path, index) => (
        <li key={index}>{path}</li>
      ))}
    </ul>
  </>
    )
  }
        

    </>
    
  )
}

export default ColorBuildings