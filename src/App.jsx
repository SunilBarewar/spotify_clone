import React, { useEffect ,createContext} from "react";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
import CompA from "./contextapi/CompA"
import UseReduces from "./contextapi/UseReduces"
const FirstName = createContext();
const LastName = createContext();
export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    // console.log(hash)
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Spotify";
  }, [token,dispatch]);
  return <div>{token ? <Spotify /> : <Login />}</div>;

  // // return (
  //   // <>
  //   {/* <FirstName.Provider value={"Sunil"}>
  //     <LastName.Provider value={"barewar"}>
  //     <CompA/>
  //     </LastName.Provider>
  //   // </FirstName.Provider> */}
  //   {/* <UseReduces/> */}
  //   {/* </> */}
  // // )
}
export{FirstName,LastName}