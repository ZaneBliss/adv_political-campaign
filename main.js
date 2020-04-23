
const candidate = {
    district: "5th congressional district",
    platformStatements: {
        taxes: "expand taxes",
        jobs: "expand jobs",
        infrastructure: "improve infrastructure",
        healthCare: "reduce cost",
        crime: "reduce law enforcement budget",
    },
    biography: "Born in a barn",
    imageGallery: [],
    missionStatement: "To bodly go",
}

const candidateResources = {
    urls: {
        donationForm: "giphy.com",
        votingURL: "facebook.com"
    },
    calendarOfEvents: [
        "January 13th speaking engagement",
        "January 26th voting on a bill",
        "February 2nd ball"
    ]
}

const volunteers = [
    volunteer1 = {
        name: "John Doe",
        address: "1234 Special address",
        email: "email@email.com",
        phone: "123456790",
        availability: "full-time",
        prefers: "answering phones"
    }
]

// Functions
function addToImageGallery (newImage) {
    candidate.imageGallery.push(newImage)
}

function changeBiography (newBiography) {
    candidate.biography = newBiography
}

function changePlatform (topic, newPlatformStatement) {
    candidate.platformStatements[topic] = newPlatformStatement
}

function changeMissionStatement (missionStatement) {
    candidate.missionStatement = missionStatement;
}

function changeDonationForm (form, url) {
    candidateResources.urls[form] = url
}

function addToCalendar (eventName) {
    candidateResources.calendarOfEvents.push(eventName)
}