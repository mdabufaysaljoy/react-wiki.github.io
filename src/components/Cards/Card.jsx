import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Cards.module.scss";


const Cards = ({ results, page }) => {

  let display;

  if(results){
    display = results.map((result) => {
      let {name, id, image, location, status } = result;
      return (
        <Link to={`${page}${id}`} key={id} className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-decoration-none text-black">
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} className={`${styles.img} img-fluid`} />
            <div className="content p-2">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last location</div>
                <div className="">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Alive") {
              return (
            <div className={`badge bg-success position-absolute ${styles.badge}`}>{status}</div>
              );
            } else if (status === "Dead") {
              return (
            <div className={`badge bg-danger position-absolute ${styles.badge}`}>{status}</div>
              );
            } else {
              return (
          <div className={`badge bg-secondary position-absolute ${styles.badge}`}>{status}</div>
              );
            }
          })()}
        </Link>
      );
    });
  }else{
    display = "No results found :/";
  }

  return (  <>{display}</>  )
}

export default Cards;