
// combines all application reducers
import {combineReducers} from 'redux'
import template from './templateReducer.js'





export default combineReducers({
    template: template
})