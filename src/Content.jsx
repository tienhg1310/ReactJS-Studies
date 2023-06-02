import { React, memo } from "react"

function Content() { // {count}
  console.log("re-render")
  return (
    <h2>HELLO </h2>
  )
}

export default memo(Content)
