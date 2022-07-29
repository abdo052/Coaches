export default {
  addRequest(state, payload) {
    // Commit mutation Requests With State
    state.requests.push(payload);
  },
  setRequests(state, payload) {
    state.requests = payload;
  },
};
