
import { USER_LOGGED_IN } from '../types';
import api from '../api';

//redux actionCreator（由type和payload组成）
export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});
//data => dispatch => actionCreator => dispatch(action)
export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));