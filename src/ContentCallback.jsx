import React, { memo } from 'react'

function ContentCallback({onIncrease}) {
    console.log("re-render")
  return (
    <div>ContentCallback
        <button onClick={onIncrease}>Up</button>
    </div>
  )
}

export default memo(ContentCallback)
