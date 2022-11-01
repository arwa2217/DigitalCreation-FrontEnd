import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PracticeHook = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");
    const[data1,setData1]=useState('')
    useEffect(() => {
        console.log("APi call");
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res.data);
                setData1(res.data[0].title);
            })
          .catch((err) => {
                console.log("error while fetching",err)
            })
    },[])
    
  return (
      <>
          <h3>{counter}</h3>
          <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
          
          <h2>{name}</h2>
          <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="enter your name" />
          <h3>{data1}</h3>
        
    </>
  )
}

export default PracticeHook
