// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filter from './components/Filters/Filter';
import Cards from './components/Cards/card';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import NavBar from './components/NavBar/NavBar';
import style from './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Epiesode from './pages/Epiesode';
import Location from './pages/Location';
import CardDetails from './components/Cards/CardDetails';
import Error from './../public/Error';




function App() {
  return (
    <Router>
      <div className="App mb">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episode" element={<Epiesode />} />
        <Route path="/episode/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

const Home = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchData, setFetchData] = useState([]);
  let{results, info} = fetchData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then(res=>res.json());
      setFetchData(data);
    })();
  },[api])

  return (
    <div className="App">
      <h1 className="text-center fw-bold">Characters</h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filter
            setPageNumber={setPageNumber}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
          />

          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App
