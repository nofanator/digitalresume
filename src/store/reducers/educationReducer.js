import { UPDATE_EDUCATION } from "../actions/educationActions"

const defaultState = {
    loaded: false,
    school: null,
    start: null,
    end: null,
    major: null,
    minor: null
}

const education = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_EDUCATION:
            return Object.assign({}, state, action.payload, { loaded: true })
        default:
            return state
    }
}

export default education