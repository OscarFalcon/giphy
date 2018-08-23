import {SEARCH_RESULTS, ADD_RESULTS, ADD_TO_FAVS} from '../constants/action-types.js'



export const setContentResults = results => ({
  type: SEARCH_RESULTS,
  payload: results
});

export const addContentToList = content => ({
    type: ADD_RESULTS,
    payload: content
});


export const addContentToFavorites = content => ({
    type: ADD_TO_FAVS,
    payload: content
})


