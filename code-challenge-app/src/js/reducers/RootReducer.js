import { SEARCH_RESULTS,  ADD_RESULTS } from '../constants/action-types.js'

const initialState = { username : 'oscar', contentList : [] };


const rootReducer = (state = initialState , action) => {
    switch (action.type) {

        case SEARCH_RESULTS :
            console.log('search results');
            console.log(Object.assign({} ,state , { contentList : action.payload } ));
            return  Object.assign({} ,state , { contentList : action.payload} );
        case ADD_RESULTS :
            console.log('add to list');
            var newState = Object.assign({}, state, {contentList : state.contentList.concat(action.payload)});
            console.log(newState);
            return newState;
        default:
            return state;
    }
}

export default rootReducer;