import axios from 'axios';
 
function getIntro() {
    return axios.get('/mock.json')
        .catch((error) => {
            console.log(error)
            return null
        })
        .then((response) => {
            const data = response.data
            const payload = data.intro
            return payload
        })
}

function getSkills() {
    return axios.get('/mock.json')
        .catch((error) => {
            console.log(error)
            return null
        })
        .then((response) => {
            const data = response.data
            const payload = data.skills
            return payload
        })
}

function getExperience() {
    return axios.get('/mock.json')
    .catch((error) => {
        console.log(error)
        return null
    })
    .then((response) => {
        const data = response.data
        const payload = data.experience
        return payload
    })
}

export { getIntro, getSkills, getExperience }