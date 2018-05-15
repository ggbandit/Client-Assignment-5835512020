import {CHANGE_CURRICULUMS, FETCH_CURRICULUMS} from "../actions/index"

const initalState ={
  userlist:[]
}

export default (state=initalState,action)=>{
  switch (action.type){
    case
      CHANGE_CURRICULUMS:
      return state,action.payload;
    case FETCH_CURRICULUMS:
      return {...state,userlist:action.payload.data}
    default:
      return state;
  }
}
