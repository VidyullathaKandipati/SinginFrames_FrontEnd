let linkState = {
                  production: {
                                isActive: false,
                                login: 'https://singingframes.herokuapp.com/login',
                                newUser: 'https://singingframes.herokuapp.com/users',
                                newinvite: 'https://singingframes.herokuapp.com/invites'
                              },
                  development: {
                                  isActive: true,
                                  login: 'http://localhost:5000/login',
                                  newUser: 'http://localhost:5000/users',
                                  newinvite: 'http://localhost:5000/invites'
                                }
                };

export default linkState;
