import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const CardDetails = () => {

        const { id } = useParams();
    const [fetchData, setFetchData] = useState([]);
    const { name, status, species, gender, image, location, origin, type } = fetchData;


    let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data);
    })();
  }, [api]);
  return (
    <div className='container d-flex justify-content-center'>
        <div className="d-flex flex-column gap-4">
            <h1 className="">{name}</h1>
            <img src={image} alt={name} className='img-fluid' />
            {(() => {
            if (status === "Alive") {
              return (
            <div className={`badge bg-success fs-5`}>{status}</div>
              );
            } else if (status === "Dead") {
              return (
            <div className={`badge bg-danger fs-5`}>{status}</div>
              );
            } else {
              return (
          <div className={`badge bg-secondary fs-5`}>{status}</div>
              );
            }
          })()}

<div className="content">
    <div className="fw-bold">
        <p>Gender: {gender}</p>
        <p>Species: {species}</p>
{
    (()=>{
    if(type==""){
        return(
            <p>Type: Unknown</p>
            )
    }else{
        return(
            <p>Type: {type}</p>
        )
        }
    })()
}
        <p>Location: {location?.name}</p>
        <p>Origin: {origin?.name}</p>
    </div>
        </div>
            </div>
                </div>
  )
}

export default CardDetails