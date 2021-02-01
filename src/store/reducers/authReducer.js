const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login ERROR");
      return {
        ...state,
        authError: "Login Failed",
      };
    case "LOGIN_SUCCESS":
      console.log("login SUCCESS ");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("log out SUCCESS ");
      return state;
    default:
      return state;
  }
};

export default authReducer;
