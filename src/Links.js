let linkState = {
                  production: {
                                isActive: true,
                                login: 'https://singingframes.herokuapp.com/login',
                                newUser: 'https://singingframes.herokuapp.com/users',
                                newinvite: 'https://singingframes.herokuapp.com/invites',
                                createfamily: 'https://singingframes.herokuapp.com/families'
                              },
                  development: {
                                  isActive: false,
                                  login: 'http://localhost:5000/login',
                                  newUser: 'http://localhost:5000/users',
                                  newinvite: 'http://localhost:5000/invites',
                                  createfamily: 'http://localhost:5000/families'
                                }
                };

export default linkState;
