import { combineReducers } from "redux";

import intro from "./introReducer"
import skills from "./skillsReducer"


export default combineReducers({
    intro,
    skills
}) 