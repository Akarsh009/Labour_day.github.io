// Example of JavaScript for handling job listings and form submissions

// Dummy data for job listings
const jobs = [{ title: 'Construction Worker', description: 'Looking for a skilled construction worker.' },
    { title: 'Electrician', description: 'Need an electrician for a home project.' },
    { title: 'Plumber', description: 'Urgent requirement for a plumber.' }
    
];

// Function to display job listings
function displayJobs() {
    const jobList = document.getElementById('jobList');
    jobs.forEach(job => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>`;
        jobList.appendChild(listItem);
    });
}

// Function to handle form submission and redirect
// function handleFormSubmit(event, nextPage) {
    // event.preventDefault();
    // alert('Form submitted!');
    // window.location.href = nextPage;
// }

// Add event listeners to forms
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('jobList')) {
        displayJobs();
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => handleFormSubmit(event, 'signup.html'));
    }

    // const signupForm = document.getElementById('signupForm');
    // if (signupForm) {
    //     signupForm.addEventListener('submit', (event) => handleFormSubmit(event, 'jobs.html'));
    // }

    const jobForm = document.getElementById('jobForm');
    if (jobForm) {
        jobForm.addEventListener('submit', (event) => handleFormSubmit(event, 'feedback.html'));
    }

    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (event) => handleFormSubmit(event, 'index.html'));
    }
});
