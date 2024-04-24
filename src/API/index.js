import axios from 'axios';

//connects front end to back end, change if needed

export const BASE_URL = 'https://c84b-76-142-23-132.ngrok-free.app/';


export const ENDPOINTS = {

    USERS: 'user',
    UserRegister: 'auth/register', // POST: User Sign in
    UserLogin: 'auth/login', // POST: User Sign up
    GetProfile: 'user/profile', // GET: Get User by username
    GetQuoteHistory: 'history/oil',
    UserUpdatedUser: 'user/edit-profile', // GET: Get User info by ID
    UserPasswordChange: 'auth/change-password', // PUT: Change user password 
    UserQuoteForm: 'quote/oil',

};

// const usersEndpoint = createAPIEndpoint(ENDPOINTS.USERS);

export const createAPIEndpoint = (endpoint) => {
    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        patch: (id, updatedRecord) => axios.patch(url + id, updatedRecord)
    };
}