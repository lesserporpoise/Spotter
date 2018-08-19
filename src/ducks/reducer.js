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
        bc:0,
        imgurl: ''
    },
    canSave:true,
    range:100,
    windSpeed:0,
    windDirection:true
}

const UPDATE_NAME = "UPDATE_NAME"
const PULL_TABLE_U = "PULL_TABLE_U"
const PULL_TABLE_D = "PULL_TABLE_D"
const FILL_FORM = "FILL_FORM"
const REVERT = "REVERT"
const NEW_CARD = "NEW_CARD"
const NO_SAVE = "NO_SAVE"
const YES_SAVE = "YES_SAVE"
const UPDATE_RANGE = "UPDATE_RANGE"
const UPDATE_WIND = "UPDATE_WIND"
const UPDATE_DIR = "UPDATE_DIR"


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
export const ducksRange = (range) => ({
    type: UPDATE_RANGE,
    payload: range
})
export const ducksWind = (windSpeed) => ({
    type: UPDATE_WIND,
    payload: windSpeed
})
export const ducksDir = (windDirection) => ({
    type: UPDATE_DIR,
    payload: windDirection
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
        
    case UPDATE_RANGE:
        return Object.assign({},state,{range:action.payload})

    case UPDATE_WIND:
        return Object.assign({},state,{windSpeed:action.payload})

    case UPDATE_DIR:
        return Object.assign({},state,{windDirection:action.payload})


    default:
        return state
  }
}



