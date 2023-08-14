import React from 'react'
import FilterBtn from './FilterBtn';

const Species = ({ setPageNumber, setSpecies }) => {

     let species = [
       "Human",
       "Alien",
       "Humanoid",
       "Poopybutthole",
       "Mythological",
       "Unknown",
       "Animal",
       "Disease",
       "Robot",
       "Cronenberg",
       "Planet",
     ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((items, index) => (
            <FilterBtn
            key={index}
            name="species"
            index={index}
            items={items}
            setPageNumber={setPageNumber}
            task={setSpecies}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Species