import React, { useState } from 'react'
import Content from './Content'

export default function Memo() {
    const [count ,setCount] = useState(0);
    const [count2 ,setCount2] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    const increase2 = () => {
        setCount2(count2 + 1);
    }
  return (
    <>
        <Content count={count}></Content> {/* count = {count}*/}
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <button onClick={increase}>Toggle</button>
        <button onClick={increase2}>Toggle2</button>
    </>
  )
}
