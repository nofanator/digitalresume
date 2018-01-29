export const UPDATE_ABOUT = "UPDATE_ABOUT"

export function updateAbout(aboutData) {
    return {
        type: UPDATE_ABOUT,
        payload: aboutData
    }
}