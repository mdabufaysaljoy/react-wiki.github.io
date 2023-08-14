import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Card";
import InputGroup from "../components/Filters/Category/InputGroup";

const Location = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { name, type , dimension  } = info;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((response) => response.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((resident) => {
          return fetch(resident).then((response) => response.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Location:{" "}
          <span className="text-primary">
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension:{" "}
          <span className="text-primary">
            {dimension === "" ? "Unknown" : dimension}
          </span>
        </h5>
        <h5 className="text-center">
          Type:{" "}
          <span className="text-primary">
            {type === "" ? "Unknown" : type}
          </span>
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4"> Pick Location </h4>
          <InputGroup setId={setId} name={"Location"} total={126} />
        </div>
        <div className="col-8">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
