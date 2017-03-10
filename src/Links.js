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
                                  login: 'https://singingframes.herokuapp.com/login',
                                  newUser: 'https://singingframes.herokuapp.com/users',
                                  newinvite: 'https://singingframes.herokuapp.com/invites',
                                  createfamily: 'https://singingframes.herokuapp.com/families'
                                }
                };

export default linkState;
