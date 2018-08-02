const initialState = {
    name:'bob',
    userData:[],
    defaultData:[],
    cardData:   {
        userid:1,
        loadid:0,
        designation:'',
        mass:0,
        vm:0,
        bc:0
    },
    canSave:true
}

const UPDATE_NAME = "UPDATE_NAME"
const PULL_TABLE_U = "PULL_TABLE_U"
const PULL_TABLE_D = "PULL_TABLE_D"
const FILL_FORM = "FILL_FORM"
const REVERT = "REVERT"
const NEW_CARD = "NEW_CARD"
const NO_SAVE = "NO_SAVE"
const YES_SAVE = "YES_SAVE"


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
export const revert = () => ({
    type:REVERT,
})
export const newCard = (cardData) => ({
    type:NEW_CARD,
    payload: cardData
})
export const noSave = () => ({
    type:NO_SAVE
})
export const yesSave = () => ({
    type:YES_SAVE
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

    case REVERT:
        return Object.assign({},state,{cardData:initialState.cardData})

    case NEW_CARD:
        return Object.assign({},state,{cardData:action.payload})

    case NO_SAVE:
        return Object.assign({},state,{canSave:false})
        
    case YES_SAVE:
        return Object.assign({},state,{canSave:true})


    default:
        return state
  }
}


