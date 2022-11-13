import {onapiSuccess} from "../Helpers";

const initialState = {
  userDetails: {}
}


const userReducer = (state = initialState, action) => {

  switch (action.type) {
  case onapiSuccess("VALIDATE_USER") :
    return {
      ...state, userDetails: action.data.data[0]
    }

  case onapiSuccess("REGISTER_USER") :
    return {
      ...state, userDetails: action.data.data[0]
    }


  default:
    return state;

  }


}

export default userReducer;
