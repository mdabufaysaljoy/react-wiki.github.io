import React from 'react'

const InputGroup = ({total, name, setId}) => {
 console.log()
  return (
    <div className="input-group mb-3">
      <select className="form-select" id={name} onChange={e=>setId(e.target.value)} >
        <option value={1}>Choose...</option>
        {[...Array(total).keys()].map((i) => {
            return <option key={i} value={i+1}>{name}:- {i+1}</option>
        })}
      </select>
    </div>
  );
}

export default InputGroup