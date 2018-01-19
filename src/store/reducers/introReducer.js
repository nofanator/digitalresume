import { UPDATE_INTRO } from "../actions/introActions"

const defaultState = {
    loaded: false,
    name: null,
    summary: null,
    profileImage: null,
    email: null,
    phone: null,
}

const intro = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_INTRO:
            return Object.assign({}, state, action.payload, { loaded: true})
        default:
            return state
    }
}

export default intro