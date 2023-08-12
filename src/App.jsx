// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filter from './components/Filters/Filter';
import Cards from './components/Cards/card';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchData, setFetchData] = useState([]);
  let{results, info} = fetchData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  useEffect(()=>{

    (async function(){
      let data = await fetch(api).then(res=>res.json());
      setFetchData(data);
    })();
  },[api])

  return (
    <div className="App">
      <h1 className="text-center my-4">
        Rick and Morty <span className="text-primary">Wiki</span>
      </h1>
      <Search/>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App
