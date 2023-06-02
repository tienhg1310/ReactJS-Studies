import React, { useCallback } from "react";
import { useState } from "react";

import ContentCallback from "./ContentCallback";


export default function UseCallback() {
    const [count ,setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    },[])
  return <div>
      <ContentCallback onIncrease = {handleIncrease}></ContentCallback>
        <button onClick={handleIncrease}>Toggle</button>
        <h1>{count}</h1>


  </div>;
}
