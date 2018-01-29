import { combineReducers } from "redux";

import intro from "./introReducer"
import skills from "./skillsReducer"
import experience from "./experienceReducer"
import about from "./aboutReducer"



export default combineReducers({
    intro,
    skills,
    experience,
    about
}) 