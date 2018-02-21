import { FETCH_USERS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
        // console.log(action.payload);
        return [ ...state, ...action.payload.data ];
    }

    return state;
}

// reminder: in the nested 'return,' this essentially means take the existing state and concatonate the new list of users (i.e. action.payload)