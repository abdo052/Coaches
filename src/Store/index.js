import { createStore } from 'vuex';
import coachesModules from './Modules/Coaches/index.js';
import RequestsModules from './Modules/Requests/index.js';

const store = createStore({
  modules: {
    coaches:  coachesModules,
    requests: RequestsModules,
  },
  state() {
    return {
      userId: 'c1',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
