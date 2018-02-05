export const UPDATE_EXPERIENCE = 'UPDATE_EXPERIENCE'
export const UPDATE_JOB_DETAIL = 'UPDATE_JOB_DETAIL'

export function updateExperience(expierenceData) {
    return {
        type: UPDATE_EXPERIENCE,
        payload: expierenceData
    }
}

export function updateJobDetail(detailData) {
    return {
        type: UPDATE_JOB_DETAIL,
        payload: detailData
    }
}