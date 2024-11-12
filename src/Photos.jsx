import React, { useState } from 'react'

function Photos() {
    const [show,setShow] = useState(false)
  return (
    <div>
       <h1>botpstar</h1>
       {show && <h3>ksmab</h3>}
       <button onClick={() => setShow(show=> !show)}>toggle</button>

    </div>
  )
}

export default Photos