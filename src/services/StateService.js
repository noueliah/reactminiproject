const _storage = {
  // this variable stores the username and by default it's set as anonymous
  user: {
    name: 'Anonymous'
  }
};

class StateService {
  User = {
    getName: () => {
      // lee el current state value
      return _storage.user.name;
    },
    setName: (newName) => {
      // recibe el nombre nuevo por parámetro?
      if (!newName) return; // si no hay nada sale
      _storage.user.name = newName; // si todo ok guarda storage el nuevo nombre
    }
  };
}

export { StateService };
