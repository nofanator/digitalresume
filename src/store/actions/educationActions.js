export const UPDATE_EDUCATION = "UPDATE_EDUCATION"

export function updateEducation(data) {
    return {
        type: UPDATE_EDUCATION,
        payload: data
    }
}