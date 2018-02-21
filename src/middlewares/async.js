export default function({ dispatch }) {
    // we're always going to return a function that gets called with 'dispatch'
    return next => action => {
        // the previous function gets returned with 'next', then that chained function gets returned with 'action'
        
        // if the action does not have a payload OR if the payload does not have a .then property
        // then we don't care about it. Send it on
        if (!action.payload || !action.payload.then) {
            return next(action);
        }
        // note: we use '.then' to chain on something to do when the promise resolves
        // the 'next' keyword, in this case, means send this action onto the next middleware in our stack
        // if we don't have any other middlewares, it will be forwarded onto our reducers
        console.log("we don't have a promise", action);
    };
}