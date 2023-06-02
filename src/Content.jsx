import { React, memo } from "react"

function Content({count}) { // {count}
  console.log("re-render")
  return (
    <h2>HELLO {count} </h2>
  )
}

export default memo(Content)
