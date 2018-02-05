import { UPDATE_EXPERIENCE, UPDATE_JOB_DETAIL } from "../actions/experienceActions"

const defaultState = {
    loaded: false,
    experience: [],
    jobDetail: [],
}

const experience = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_EXPERIENCE:
            return Object.assign({}, state, { experience: [...action.payload] }, { loaded: true })
        case UPDATE_JOB_DETAIL:
            const hasDetail = state.jobDetail.length > 0 && state.jobDetail.find(x => x.id == action.payload.id)

            if (!hasDetail) {
                const newDetailArray = state.jobDetail.slice(0)
                newDetailArray.push(action.payload)

                return Object.assign({}, state, { jobDetail: newDetailArray })
            }

            return state
        default:
            return state
    }
}

export default experience