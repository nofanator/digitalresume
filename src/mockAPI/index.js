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

function getExperienceById(id) {
    return axios.get('/mock.json')
    .catch((error) => {
        console.log(error)
        return null
    })
    .then((response) => {
        const data = response.data
        const experience = data.experience
        
        const payload = experience.find(x => x.id == id)
        return payload
    })
}

function getAbout() {
    return axios.get('/mock.json')
        .catch((error) => {
            console.log(error)
            return null
        })
        .then((response) => {
            const data = response.data
            const payload = data.about
            return payload
        })
}


function getEducation() {
    return axios.get('/mock.json')
        .catch((error) => {
            console.log(error)
            return null
        })
        .then((response) => {
            const data = response.data
            const payload = data.education
            return payload
        })
}

export { getIntro, getSkills, getExperience, getAbout, getExperienceById, getEducation }