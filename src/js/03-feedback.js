var throttle = require('lodash.throttle');

const feedbackFormEl = document.querySelector('.feedback-form');
const userData = {};

const fillFeedbackFormFields = () => {
    try {
        const userDataFromLocalStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

        if (userDataFromLocalStorage === null) {
            return;
        }
    
        for (const prop in userDataFromLocalStorage) {
            feedbackFormEl.elements[prop].value = userDataFromLocalStorage[prop];
        }
    } catch (err) {
        console.log(err);
    }
};

fillFeedbackFormFields();

const onFeedbackFormItemInput = event => {
    const {target} = event;

    const name = target.name;
    const value = target.value;

    // console.log(name);
    // console.log(value);

    userData[name] = value;

    // console.log(userData);

    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

const onContactFormSubmit = event => {
    event.preventDefault();

    feedbackFormEl.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(userData);
}

feedbackFormEl.addEventListener('input', throttle(onFeedbackFormItemInput, 500));
feedbackFormEl.addEventListener('submit', onContactFormSubmit);
