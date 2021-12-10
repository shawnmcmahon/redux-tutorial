import store from './store';
import { bugAdded } from './actions';

store.dispatch(bugAdded("Bug 1"))


// const unsubscribe = store.subscribe(() => {
//     console.log('store changed!', store.getState())
// })

// store.dispatch({
//     type: actions.BUG_ADDED, 
//     payload: {
//         description: "Bug1"
//     }
// });

// unsubscribe();

// store.dispatch({
//     type: actions.BUG_REMOVED, 
//     payload: {
//         id: 1
//     }
// });

// console.log(store.getState());