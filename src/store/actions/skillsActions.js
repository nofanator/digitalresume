export const UPDATE_SKILLS = "UPDATE_SKILLS"

export function updateSkills(skillData) {
    return {
        type: UPDATE_SKILLS,
        payload: skillData
    }
}