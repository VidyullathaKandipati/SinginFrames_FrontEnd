let linkState = {
                  production: {
                                isActive: true,
                                login: 'https://singingframes.herokuapp.com/login',
                                newUser: 'https://singingframes.herokuapp.com/users'
                              },
                  development: {
                                  isActive: false,
                                  login: 'http://localhost:5000/login',
                                  newUser: 'http://localhost:5000/users'
                                }
                };

export default linkState;
