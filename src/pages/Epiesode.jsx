import React, { useState, useEffect } from 'react'
import Cards from "../components/Cards/Card"
import InputGroup from '../components/Filters/Category/InputGroup';

const Epesode = () => {

    let [id, setId] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let {air_date, name, episode} = info;

    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
       (async function (){
        let data = await fetch(api).then((response) => response.json());
        setInfo(data)

        let epFetch = await Promise.all(
          data.characters.map((character) => {
            return fetch(character).then((response) => response.json());
          }
        ));
        setResults(epFetch);
       })()
    }, [api])

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Episode:{" "}
          <span className="text-primary">
            {episode === "" ? "Unknown" : episode}
          </span>
        </h1>
        <h5 className="text-center">
          Air Date:{" "}
          <span className="text-primary">
            {air_date === "" ? "Unknown" : air_date}
          </span>
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4"> Pick episode </h4>
          <InputGroup setId={setId} name="Episode" total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episode/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Epesode