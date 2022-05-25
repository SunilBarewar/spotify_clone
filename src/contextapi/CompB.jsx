import React ,{useContext}from 'react'
import {FirstName,LastName} from "../App"
import {CompC} from "./CompC"
const CompB = () => {
    const fname= useContext(FirstName);
  return (
      <>
    <h1>My name is {fname} B</h1>
      </>
  )
}

export default CompB