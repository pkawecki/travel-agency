/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_FROM = createActionName('CHANGE_FROM');
export const CHANGE_TO = createActionName('CHANGE_TO');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
// TODO - add other action types- DONE


// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeSearchDuration = payload => {
  return (payload.type==='from'? changeSearchFrom(payload) : changeSearchTo(payload))
};
export const changeSearchFrom = payload =>({payload, type: CHANGE_FROM});
export const changeSearchTo = payload =>({payload, type: CHANGE_TO});
export const addTag = payload =>{
  return {payload, type: ADD_TAG}
  }
export const removeTag = payload =>({payload, type: REMOVE_TAG});


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_FROM:
      return {
        ...statePart,
          duration: {
            ...statePart.duration,
            from: parseInt(action.payload.value)          
          }
    }
    case CHANGE_TO:
      return {
        ...statePart, 
        duration: {
          ...statePart.duration,
          to: parseInt(action.payload.value),
        }
      }
    case ADD_TAG:
      return{
        ...statePart,
        tags: [...statePart.tags, action.payload.name],
      }
    case REMOVE_TAG:
      return{
        ...statePart,
        tags: statePart.tags.filter(element => element!== action.payload)
      }

    default:
      return statePart;
  }
}
