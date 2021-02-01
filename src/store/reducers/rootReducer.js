import authReducer from "./authReducer";
import agentReducer from "./agentReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  agent: agentReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
export default rootReducer;
