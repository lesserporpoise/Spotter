const initialState = {
    name:'bob',
    userData:[],
    defaultData:[],
    cardData:[]
}

const UPDATE_NAME = "UPDATE_NAME"
const PULL_TABLE_U = "PULL_TABLE_U"
const PULL_TABLE_D = "PULL_TABLE_D"
const FILL_FORM = "FILL_FORM"

export const updateName = (name) => ({
  type: UPDATE_NAME,
  payload: name
})
export const pullTableU = (userData) => ({
    type:PULL_TABLE_U,
    payload: userData
})
export const pullTableD = (defaultData) => ({
    type:PULL_TABLE_D,
    payload: defaultData
})
export const fillForm = (cardData) => ({
    type:FILL_FORM,
    payload: cardData
})


export default (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_NAME:
        return Object.assign({},state,{name:action.payload})
        
    case PULL_TABLE_U:
        return Object.assign({},state,{userData:action.payload})

    case PULL_TABLE_D:
        return Object.assign({},state,{defaultData:action.payload})

    case FILL_FORM:
        return Object.assign({},state,{cardData:action.payload})

    default:
        return state
  }
}


