import { UPDATE_EXPERIENCE } from "../actions/experienceActions"

const defaultState = {
    loaded: false,
    experience: []
}

const experience = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_EXPERIENCE:
            return Object.assign({}, state, { experience: [...action.payload] }, { loaded: true })
        default:
            return state
    }
}

export default experience