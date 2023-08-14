import React from 'react'

const FilterBtn = ({ items, name, index, task, setPageNumber, }) => {
  return (
    <>
    <style jsx="true">
        {`
        .x:checked + label {
            background-color: #0b5ed7;
            color: #fff;
        }
        input[type="radio"] {
            display: none;
        }
        `}
    </style>
      <div className="htmlForm-check">
        <input
        onClick={()=>{
            setPageNumber(1);
            task(items);
        }}
          className="htmlForm-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </>
  );
};

export default FilterBtn