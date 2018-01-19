import { UPDATE_SKILLS } from "../actions/skillsActions"

const defaultState = {
    loaded: false,
    skills: []
}

const skills = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_SKILLS:
            return Object.assign({}, state, { skills: [...action.payload] }, { loaded: true })
        default:
            return state
    }
}

export default skills