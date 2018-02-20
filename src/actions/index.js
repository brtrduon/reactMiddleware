import axios from 'axios';
import { FETCH_USERS } from './types';

export function fetchUsers() {
    const request = axios.get('http://jsonplaceholder.typicode.com/users');
    // the link above is a pre-loaded list of users in AJAX / JSON format that we will use instead of pre-loading the page with dummy users

    return {
        type: FETCH_USERS,
        payload: request
    };
}