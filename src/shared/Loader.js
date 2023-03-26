import React from 'react'
import { TailSpin } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div
    style={{
        height:"1000px",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        paddingTop:"20px"
    }}
    >
      <TailSpin
  height="80"
  width="80"
  color="#1976D2"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

export default Loader
