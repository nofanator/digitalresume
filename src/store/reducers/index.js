import { combineReducers } from "redux";

import intro from "./introReducer"
import skills from "./skillsReducer"
import experience from "./experienceReducer"


export default combineReducers({
    intro,
    skills,
    experience
}) 