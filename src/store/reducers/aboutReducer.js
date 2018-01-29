import { UPDATE_ABOUT } from "../actions/aboutActions"

const defaultState = {
    loaded: false,
    summary: null,
    tech: [],
    repo: null,
}

const about = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_ABOUT:
            return Object.assign({}, state, action.payload, { loaded: true })
        default:
            return state
    }
}

export default about