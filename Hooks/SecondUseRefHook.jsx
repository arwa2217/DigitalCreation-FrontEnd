import React, { useEffect, useRef } from 'react'

const SecondUseRefHook = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        console.log("use effect is called on every re-render")
        inputRef.current.focus();
    }, [])
    
    const onclick = () => {
        inputRef.current.value = "";
        console.log("clicked")
    }

  return (
    <>
          <input type="text" ref={inputRef}></input>
          <button onClick={onclick}>click me</button>
    </>
  )
}

export default SecondUseRefHook
