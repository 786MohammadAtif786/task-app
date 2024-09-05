import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state() {
    return {
      user: null,
      token: localStorage.getItem('token') || '',
      tasks: []
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    logout(state) {
      state.user = null;
      state.token = '';
      localStorage.removeItem('token');
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      commit('setToken', response.data.token);
      this.dispatch('fetchTasks');
    },
    logout({ commit }) {
      commit('logout');
    },
    async fetchTasks({ commit }) {
      const response = await axios.get('http://localhost:5000/api/tasks', {
        headers: { Authorization: `Bearer ${this.state.token}` }
      });
      console.log(response);
      commit('setTasks', response.data);
    },
    async createTask({ dispatch }, title) {
      await axios.post('http://localhost:5000/api/tasks', { title }, {
        headers: { Authorization: `Bearer ${this.state.token}` }
      });
      dispatch('fetchTasks');
    },
    async updateTask({ dispatch }, { id, status }) {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, { status }, {
        headers: { Authorization: `Bearer ${this.state.token}` }
      });
      dispatch('fetchTasks');
    },
    async deleteTask({ dispatch }, id) {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${this.state.token}` }
      });
      dispatch('fetchTasks');
    }
  }
});
