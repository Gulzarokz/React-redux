import React from 'react'

const User = (props) => {
    // console.log(props);

    const {data} = props
    
  return (
    <>
    <div>User Components</div>
    <h4>{data.name}</h4>
    <h4>{data.age}</h4>

    </>
  )
}

export default User