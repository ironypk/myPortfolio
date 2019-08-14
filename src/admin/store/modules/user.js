export default {
    namespaced: true,
    state: {
      user: {}
    },
    mutations: {
      SET_USER: (state, user) => {
        state.user = user;
      }
    },
    getters: {
      userIsLogged: state => {
        const userObj = state.user;
        const userObjectIsEmpty =
          Object.keys(userObj).length === 0 && userObj.constructor === Object;
  
        return userObjectIsEmpty === false;
      }
    },
    actions:{
      logout(){
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          location.href = '/admin';
      }
    }
  };
  