const initState = { addSchool: false, addHospital: false, addPark: false };

const placesReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_SCHOOL":
      console.log("created project", action.school);
      return state;
    case "CREATE_SCHOOL_ERROR":
      console.log("created project", action.err);
      return state;
    case "CREATE_PARK":
      console.log("created project", action.park);
      return state;
    case "CREATE_PARK_ERROR":
      console.log("created project", action.err);
      return state;
    case "CREATE_HOSPITAL":
      console.log("created project", action.park);
      return state;
    case "CREATE_HOSPITAL_ERROR":
      console.log("created project", action.err);
      return state;
    case "SCHOOL":
      console.log("school", action.err);
      state.addSchool = true;
      return state;
    default:
      return state;
  }
};

export default placesReducer;
