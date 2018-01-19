export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE"

export function updateExperience(expierenceData) {
    return {
        type: UPDATE_EXPERIENCE,
        payload: expierenceData
    }
}