const initState = {};

const agentReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_AGENT":
      console.log("created project", action.agent);
      return state;
    case "BLOCK_AGENT":
      console.log("created project", action.agent);
      return state;
    case "UNBLOCK_AGENT":
      console.log("created project", action.agent);
      return state;
    case "CREATE_AGENT_ERROR":
      console.log("created project", action.err);
      return state;
    case "UNBLOCK_AGENT_ERROR":
      console.log("created project", action.err);
      return state;
    case "BLOCK_AGENT_ERROR":
      console.log("created project", action.err);
      return state;
    default:
      return state;
  }
};

export default agentReducer;
