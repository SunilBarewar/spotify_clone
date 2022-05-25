import React,{useReducer,useState} from 'react'


const reducer = (state,action) =>{
  // console.log(state,action.type);
  
  if(action.type === "INCREMENT")
  state+=1;
  if(action.type === "DECREMENT")
  state-=1;
  return state;
}

const initialState = 0;



const UseReduces = () => {
  const btnStyle = {borderRadius:"20px",height:'35px',marginBottom:"15px",fontSize:"1.5em",fontWeight:"700"}
  const mainDiv = {display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',flexDirection:"column",background:"gray"}

  
  const [count,setCount] = useState(0);
  const [state,dispatch] = useReducer(reducer,initialState);  
  return (
    
    <>
    <div style={mainDiv}>
        <p style={{fontSize:"2rem",marginBottom:"10px"}}>{state}</p>
        <div className="btnStyle" style={{display:"flex",flexDirection:"column",width:"200px"}}>

            <button style={btnStyle}  onClick = {() =>dispatch({type:"INCREMENT"})}>Inc</button>


            <button style={btnStyle} onClick = {() =>dispatch({type:"DECREMENT"})}>Dec</button>
        </div>
    </div>
    </>
    
  )
}

export default UseReduces