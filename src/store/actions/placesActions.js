export const createSchool = (school) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("school")
      .add({
        ...school,
      })
      .then(() => {
        dispatch({ type: "CREATE_SCHOOL", school });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_SCHOOL_ERROR", err });
      });
  };
};
export const createPark = (park) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("park")
      .add({
        ...park,
      })
      .then(() => {
        dispatch({ type: "CREATE_PARK", park });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PARK_ERROR", err });
      });
  };
};
export const school = () => {
  return {
    type: "SCHOOL",
  };
};
export const createHospital = (hospital) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("hospital")
      .add({
        ...hospital,
      })
      .then(() => {
        dispatch({ type: "CREATE_HOSPITAL", hospital });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_HOSPITAL_ERROR", err });
      });
  };
};
