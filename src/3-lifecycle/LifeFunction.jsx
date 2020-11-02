import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Header(props) {
  const [counter, setCounter] = useState(0)
  

  useEffect(() => {
    // untuk call data dari api
    setTimeout(() => {
      setCounter(prev => prev + 1)
      console.log('componentDidMount')
    },2000)
  }, [])

  useEffect(() => {
    if (counter !== 0) {
      console.log('componentDidUpdate')
    }
  },[counter])
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Life Cycle</h1>
            <span className="badge badge-primary">{counter}</span>
            {
              counter === 0 ?
                <Unmount /> : null
            }
          </div>
        </div>
      </div>
    </>
  );
}
  
function Unmount() {
  useEffect(() => {
    return (
      () => console.log('componentWillUnmount')
    )
  },[])
  return (
    <div>Unmount</div>
  )
}
