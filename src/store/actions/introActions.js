export const UPDATE_INTRO = "UPDATE_INTRO"

export function updateIntro(introData) {
    return {
        type: UPDATE_INTRO,
        payload: introData
    }
}