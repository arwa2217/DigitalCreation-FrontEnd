import React, { useState } from 'react'

const FormActive = ({getData}) => {
  const [nameValue, setNameValue] = useState('');
  const [showText, setshowText] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    getData(nameValue);
    setshowText(!showText)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nameValue} onChange={(e) => { setNameValue(e.target.value) }} /> 
        <button>submit</button>
        {showText && <h1>{nameValue}</h1>}
      </form>
    </>
  )
}

export default FormActive
