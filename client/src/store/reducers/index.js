import { combineReducers } from "redux";
import {userReducer} from '../reducers/userReducer'
import {devicesReducer} from '../reducers/devicesReducer'
import {brandsReducer} from '../reducers/brandsReducser'
import {typesReducer} from '../reducers/typesReducer'
import {currentDeviceReducer} from '../reducers/currentDevice'

const rootReducer = combineReducers({
    userReducer,
    devicesReducer,
    typesReducer,
    brandsReducer,
    currentDeviceReducer
})

export default rootReducer