import React,{useContext} from 'react'
import {FirstName,LastName} from "../App"
export const CompC = () => {
    const firstName = useContext(FirstName)
    const lastName = useContext(LastName)
  return (
    //   <>
    //   <FirstName.Consumer >
    //     {(fname) =>{
    //     return (
    //         <LastName.Consumer>
    //             {
    //                 (lname) => {
    //                     return <h1>My name is {fname} {lname}</h1>
    //                 }
    //             }
    //         </LastName.Consumer>
    //     )
    //   }}
    //   </FirstName.Consumer>
    //   </>
    <>
        <h1>my name is {firstName} {LastName}</h1>
    </>
    
  )
}
