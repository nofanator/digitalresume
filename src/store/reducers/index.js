import { combineReducers } from "redux";

import intro from './introReducer'
import skills from './skillsReducer'
import experience from './experienceReducer'
import about from './aboutReducer'
import education from './educationReducer'

export default combineReducers({
    intro,
    skills,
    experience,
    about,
    education
})