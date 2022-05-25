import { act } from "react-dom/test-utils";
import { reducerCases } from "./Constants";

export const initialState = {
  token: null,
  userInfo: null,
  playlists: [],
  currentPlaying: null,
  playerState: false,
  selectedPlaylist: null,
  selectedPlaylistId: '3v1PrZk5FCCQ2JwBTU28Ng'
};

const reducer = (state,action)=>{
  if(action.type === reducerCases.SET_TOKEN){
    return {
      ...state,
      token:action.token,
    }
  }else if(action.type === reducerCases.SET_PLAYLISTS){
    return {
      ...state,
      playlists:action.playlists,
    }
  }else if(action.type === reducerCases.SET_USER){
    return{
      ...state,
      userInfo:action.userInfo
    }
  }else if(action.type === reducerCases.SET_PLAYLIST){
    return{
      ...state,
      selectedPlaylist:action.selectedPlaylist
    }
  }else if(action.type ===reducerCases.SET_PLAYING){
    return{
      ...state,
      currentPlaying:action.currentPlaying,
    }
  }else if(action.type === reducerCases.SET_PLAYER_STATE){
    return {
      ...state,
      playerState:action.playerState
    }
  }else if(action.type ===reducerCases.SET_PLAYLIST_ID){
    return{
      ...state,
      selectedPlaylistId:action.selectedPlaylistId,
    }
  }
  return state;
  // switch(action.type){
  //   case reducerCases.SET_TOKEN : {
  //     return{
  //       ...state,
  //       token:action.token,
  //     }
  //   }
  //   case reducerCases.SET_PLAYLIST:{
  //     console.log("called to set playlist");
  //     return {
  //       ...state,
  //       playlists:action.playlists,
  //     }
  //   }
  //   default:
  //     return state;
  // }

}
export default reducer;
