export const createAgent = (agent) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    console.log(agent.uid);
    firestore
      .collection("users")
      .doc(agent.uid)
      .update({
        ...agent,
        UserType: "Agent",
        accountCreated: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_AGENT", agent });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_AGENT_ERROR", err });
      });
  };
};
export const blockAgent = (agent) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    console.log(agent.uid);
    firestore
      .collection("users")
      .doc(agent.uid)
      .update({
        ...agent,
        Block: true,
      })
      .then(() => {
        dispatch({ type: "BLOCK_AGENT", agent });
      })
      .catch((err) => {
        dispatch({ type: "BLOCK_AGENT_ERROR", err });
      });
  };
};
export const unblockAgent = (agent) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    console.log(agent.uid);
    firestore
      .collection("users")
      .doc(agent.uid)
      .update({
        ...agent,
        Block: false,
      })
      .then(() => {
        dispatch({ type: "BLOCK_AGENT", agent });
      })
      .catch((err) => {
        dispatch({ type: "BLOCK_AGENT_ERROR", err });
      });
  };
};
