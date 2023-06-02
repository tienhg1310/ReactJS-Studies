import React, { useState } from 'react'
import Content from './Content'

export default function Memo() {
    const [count ,setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
  return (
    <>
        <Content></Content> {/*  count = {count}*/}
        <h1>{count}</h1>
        <button onClick={increase}>Toggle</button>
    </>
  )
}
