import React from 'react';
import styles from "./Cards.module.scss";


const Cards = ({ results }) => {

  let display;

  if(results){
    display = results.map((result) => {
      let {name, id, image, location, status } = result;
      return (
        <div key={id} className="col-4 mb-4 position-relative">
          <div className={styles.cards}>
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
        </div>
      );
    });
  }else{
    display = "No results found :/";
  }

  return (  <>{display}</>  )
}

export default Cards;