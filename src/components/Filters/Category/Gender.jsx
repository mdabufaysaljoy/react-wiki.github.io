import React from 'react'
import FilterBtn from './FilterBtn';

const Gender = ({ setPageNumber, setGender }) => {

    let gender = ['male', 'female', 'genderless', 'unknown'];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {gender.map((items, index) => (
            <FilterBtn
              key={index}
              name="gender"
              index={index}
              items={items}
              setPageNumber={setPageNumber}
              task={setGender}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gender