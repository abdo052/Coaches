export default {
  // Filtering Requests for the Active Coach To View On RequestsReceive Componnet

  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequest(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
